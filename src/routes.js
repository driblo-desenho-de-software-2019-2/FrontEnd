/* eslint-disable react/react-in-jsx-scope */
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

// páginas
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import RegisterSkills from './pages/RegisterSkills/RegisterSkills';
import Home from './pages/Home';

// deve ser verificado este valor para saber ser o usuario está ou não "Logado" e depois renderizar a respectiva tela
const signedIn = true;

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Sign: createSwitchNavigator({
        SignIn,
        SignUp,
        RegisterSkills,
      }),
      App: createMaterialTopTabNavigator(
        {
          Home1: {
            screen: Home,
            showIcon: true,
          },
          Home2: {
            screen: Home,
          },
          Home3: {
            screen: Home,
          },
        },
        {
          tabBarOptions: {
            labelStyle: {
              fontSize: 15,
              color: 'black',
            },
            tabStyle: {
              height: 80,
            },
            style: {
              backgroundColor: 'white',
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
