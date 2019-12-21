import AsyncStorage from '@react-native-community/async-storage';
import API from '../config/config';
import VersionCheck from 'react-native-version-check';

export default async function request(url, option, isLogin = true) {
  url = API.liveIP + url;
  let token = 'dev-arnob';

  // get token from localstorage // dev arnob for Development Perpose
  if (isLogin) {
    token = await AsyncStorage.getItem('auth_token'); // "dev-arnob"
    // console.log("Tokne", token);
    // token = token.split(' ')[1]
    // console.log("Tokne 2", token);
  } else {
    token = 'dev-arnob';
  }

  //console.log("Token", token);

  // for same origin
  const defaultOptions = {
    credentials: 'same-origin',
  };
  const newOptions = {
    ...defaultOptions,
    ...option,
  };

  if (
    newOptions.method === 'POST' ||
    newOptions.method === 'GET' ||
    newOptions.method === 'PUT' ||
    newOptions.method === 'DELETE'
  ) {
    // need twik here
    if (newOptions.body) {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...newOptions.headers,
      };
      newOptions.body = JSON.stringify(newOptions.body);
    } else {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...newOptions.headers,
      };
    }
  }

  // Check token and if login then it will skip
  // console.log("token", token);
  if (token === null) {
    console.log('No token Found, This is for login');
  } else {
    let isGetAnyUpdate = VersionCheck.getCurrentVersion();

    newOptions.headers = {
      Authorization: token,
      device: 'mobile',
      deviceVersion: isGetAnyUpdate,
      ...newOptions.headers,
    };
  }

  // console.log("url ", url);
  // console.log("newOptions ", newOptions.headers);

  return fetch(url, newOptions)
    .then(response => response.json())
    .then(response => {
      // console.log('Request', response);
      // DELETE and 204 do not return data by default
      // using .json will report an error.
      if (newOptions.method === 'DELETE' || response.status === 204) {
        return response.text();
      }

      return response;
    })
    .catch(e => {
      const status = e.name;

      if (status === 401) {
        return 401;
      }
      // environment should not be used
      if (status === 403) {
        return 403;
      }
      if (status <= 504 && status >= 500) {
        return 500;
      }
      if (status >= 404 && status < 422) {
        return 404;
      }
    });
}
