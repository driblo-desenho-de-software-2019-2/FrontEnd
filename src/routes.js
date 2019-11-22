/* eslint-disable react/react-in-jsx-scope */
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import { Platform } from 'react-native'
import React from 'react'

// páginas
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import RegisterSkills from './pages/RegisterSkills/RegisterSkills';
import ListConfirmed from './pages/ListConfirmed/ListConfirmed';
import Profile from './pages/Profile/Profile';
import Home from './pages/Home';
import Game from './pages/Game/Game';
import Invitation from './pages/Invitation/Invitation'
import RegisterGame from './pages/RegisterGame/RegisterGame';
import GameInProgress from './pages/GameInProgress/index';
import AsyncStorage from '@react-native-community/async-storage';

// deve ser verificado este valor para saber ser o usuario está ou não "Logado" e depois renderizar a respectiva tela
let signedIn = false;
const token = AsyncStorage.getItem('@token');


const Sign = createSwitchNavigator({
        SignIn,
        SignUp,
        RegisterSkills,
        ListConfirmed,
        RegisterGame,
        Profile,
        Game,
        GameInProgress,

});

const Test = createSwitchNavigator({
  Home,
  ListConfirmed,
  RegisterGame,
  Profile,
  Game,
  GameInProgress,
  
})

const App = createMaterialTopTabNavigator({
          Profile: {
            screen: Profile,
          },
          Home: Test,
          Home3: {
            screen: GameInProgress,
          },
        },
        {
          tabBarOptions: {
            tabStyle: {
              height: 80,
            },
            style: {
              backgroundColor: '#f5f5f5',
              elevation: 0,
            },
            indicatorStyle: {
              backgroundColor: 'transparent',
              alignContent: 'center',
              borderRadius: 50,
              borderColor: '#00FF9F',
              borderWidth: 3,
              height: 60,
              width: 60,
              marginBottom: 5,
              marginTop:5,
              marginLeft:43,
            },
            showIcon: true,
          },
        })
const Routes = createAppContainer(
  createSwitchNavigator({
      App: App,
      Sign: Sign,
      Invite: {
        screen: Invitation,
        path: 'driblo/:id',
      },

  },{
    initialRouteName: signedIn ? 'App' : 'Sign',
  }

  ),
);

const prefix = (Platform.OS === 'ios')
  ? 'driblo://'
  : 'driblo://driblo/';

  Home.navigationOptions = {
    tabBarLabel: () => <TabBarLabel>Pelada</TabBarLabel>,
    tabBarIcon: () => <GroupIcon source={soccerGroup} />,
  };
export default () => <Routes uriPrefix={prefix} />;
