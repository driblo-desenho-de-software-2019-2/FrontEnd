import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import RegisterSkills from './pages/RegisterSkills/RegisterSkills'
import ListConfirmed from  './pages/ListConfirmed/ListConfirmed'
import Profile from './pages/Profile/Profile'

const Routes = createAppContainer(
    createSwitchNavigator({
        SignIn,
        SignUp,
        RegisterSkills,
        ListConfirmed,
        Profile,
    })
);

export default Routes;
