import React, {Component} from 'react';
import {Text} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Root} from 'native-base';

// Login Import
import OldLoginPage from './app/page/Login/applogin';
import SignUp from './app/page/Signup/index';
import pictureRoof from './app/page/pictureRoof/pictureRoof'
import BlogPage from './app/page/BlogPage/BlogPage'
import JoiBOSarPage from './app/page/JoiBOSarPage/JoiBOSarPage'

import RoufTopPage from './app/page/RoufTopPage/RoufTopPage'
import HomePage from './app/page/HomePage/Index';
import DetailsOurSelf from './app/page/SidePanel/index'

const AppNavigator = createStackNavigator({
    AppLogin: {screen: OldLoginPage},
    SignUp: {screen: SignUp},
    HomePage: {screen : HomePage},
    DetailsOurSelf: {screen: DetailsOurSelf},
    RoufTopPage: {screen: RoufTopPage},
    pictureRoof: {screen: pictureRoof},
    BlogPage: {screen: BlogPage},
    JoiBOSarPage: {screen: JoiBOSarPage},
  },
  {
    initialRouteName: 'AppLogin',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }

  IfNotLogin = (<Text>Not Login</Text>);
  render() {
    return (
      <Root>
        <AppContainer />
      </Root>
    );
  }
}
