import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import RegisterSkills from './pages/RegisterSkills/RegisterSkills'

const Routes = createAppContainer(
    createSwitchNavigator({
        SignIn,
        SignUp,
        RegisterSkills,
    })
);

export default Routes;
