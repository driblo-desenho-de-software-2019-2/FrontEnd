/* eslint-disable react/react-in-jsx-scope */
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
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
          Home: {
            screen: Home,
            navigationOptions: {
              headerTitle: 'SignIn',
            },
          },
          SignIn: {
            screen: Home,
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
      ),
    },
    {
      initialRouteName: signedIn ? 'App' : 'Sign',
    }
  )
);

export default Routes;
