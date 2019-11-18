/* eslint-disable react/react-in-jsx-scope */
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

// páginas
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import RegisterSkills from './pages/RegisterSkills/RegisterSkills';
import ListConfirmed from './pages/ListConfirmed/ListConfirmed';
import Profile from './pages/Profile/Profile';
import Home from './pages/Home';

// deve ser verificado este valor para saber ser o usuario está ou não "Logado" e depois renderizar a respectiva tela
const signedIn = false;

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Sign: createSwitchNavigator({
        SignIn,
        SignUp,
        RegisterSkills,
        ListConfirmed,
        Profile,
        RegisterGame,                  
      }),
      App: createMaterialTopTabNavigator(
        {
          Profile: {
            screen: Profile,
          },
          Home: {
            screen: Home,
          },
          Home3: {
            screen: Home,
          },
        },
        {
          tabBarOptions: {
            tabStyle: {
              height: 80,
            },
            style: {
              backgroundColor: 'white',
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
              marginBottom: 15,
              marginLeft: 43,
            },
            showIcon: true,
          },
        }
      ),
    },
    {
      initialRouteName: signedIn ? 'App' : 'Sign',
    }
  )
);

export default Routes;
