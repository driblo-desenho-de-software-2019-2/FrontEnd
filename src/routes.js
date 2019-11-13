import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import RegisterSkills from './pages/RegisterSkills/RegisterSkills';
import Home from './pages/Home';

const Routes = createAppContainer(
  createSwitchNavigator({
    App: createBottomTabNavigator(
      {
        Home,
      },
      {
        tabBarOptions: {
          activeTintColor: '#000',
          style: {
            backgroundColor: '#FFF',
          },
        },
      },
      {
        initialRouteName: 'App',
      }
    ),
  })
);

export default Routes;
