/* eslint-disable react/react-in-jsx-scope */
import {
  createAppContainer,
  createSwitchNavigator,
  Header,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import React from 'react';
import {View, Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import RegisterSkills from './pages/RegisterSkills/RegisterSkills';
import Home from './pages/Home';

const Routes = createAppContainer(
  createMaterialTopTabNavigator(
    {
      SignIn: {
        screen: SignIn,
        navigationOptions: {
          headerTitle: 'SignIn',
        },
      },
      SignUp: {
        screen: SignUp,
        navigationOptions: {
          headerTitle: 'SignUp',
        },
      },
    },
    {
      tabBarOptions: {
        labelStyle: {
          fontSize: 20,
          color: 'black',
        },
        tabStyle: {
          height: 70,
        },
        style: {
          backgroundColor: 'white',
        },
      },
    }
  )
);

export default Routes;
