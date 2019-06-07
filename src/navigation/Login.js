import * as NavigationAnimations from './NavigationAnimations'

import Containers from '../containers'
import { NavHeader } from '../components'
import { createStackNavigator } from 'react-navigation'

const Login = createStackNavigator(
  {
    Login: {
      screen: Containers.Login,
      navigationOptions: () => ({
        title: "Let's do this",
        header: NavHeader
      })
    },
    LoginSuccess: {
      screen: Containers.LoginSuccess
    }
  },
  {
    initialRouteName: 'Login',
    headerMode: 'screen',
    defaultNavigationOptions: {
      header: null
    },
    transitionConfig: NavigationAnimations.FadeInOut({
      transitionSpec: {
        duration: 450
      }
    })
  }
)

export default Login
