import * as NavigationAnimations from './NavigationAnimations'

import Containers from '../containers'
import { createStackNavigator } from 'react-navigation'

const makeWelcomeWalkthroughStack = ({ exitDestination = 'Login' } = {}) =>
  createStackNavigator(
    {
      WelcomeGeneral: {
        screen: Containers.WelcomeWalkthrough.WelcomeGeneral,
        params: {
          nextScreen: 'WelcomeLogin'
        }
      },
      WelcomeLogin: {
        screen: Containers.WelcomeWalkthrough.WelcomeLogin,
        params: {
          nextScreen: 'WelcomeTime'
        }
      },
      WelcomeTime: {
        screen: Containers.WelcomeWalkthrough.WelcomeTime,
        params: {
          nextScreen: 'WelcomePlaylist'
        }
      },
      WelcomePlaylist: {
        screen: Containers.WelcomeWalkthrough.WelcomePlaylist,
        params: {
          nextScreen: 'WelcomeWakeUp'
        }
      },
      WelcomeWakeUp: {
        screen: Containers.WelcomeWalkthrough.WelcomeWakeUp,
        params: {
          nextScreen: exitDestination
        }
      }
    },
    {
      initialRouteName: 'WelcomeGeneral',
      defaultNavigationOptions: () => ({
        header: null
      }),
      transitionConfig: NavigationAnimations.FadeInOut()
    }
  )

const WelcomeWalkthrough = makeWelcomeWalkthroughStack()

export { makeWelcomeWalkthroughStack }

export default WelcomeWalkthrough
