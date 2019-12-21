/**
 * This utils Not Used.
 */
import AsyncStorage from '@react-native-community/async-storage';

module.exports.bKashPaySystem = async (
  url,
  connType,
  body = '',
  headerAuth = '',
) => {
  let send_header = {};

  // When App Need to Generate The Token
  if (connType === 'AuthCreate') {
    send_header = {
      ...send_header,
      method: 'POST',
      headers: {
        password: headerAuth.password,
        username: headerAuth.username,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
  }

  // When App need to Create a bill or Trx Then it call this
  if (connType === 'CreateTrx') {
    let getToken = await AsyncStorage.getItem('bkashToken');
    let app_key = await AsyncStorage.getItem('app_key');
    send_header = {
      method: 'POST',
      headers: {
        Authorization: getToken,
        'x-app-key': app_key,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
  }

  console.log('send Header From BkashPayment', send_header);
  return fetch(url, send_header, cb)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      cb(response);
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
};

function cb(a) {
  console.log(a);
}
