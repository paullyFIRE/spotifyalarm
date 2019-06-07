import * as NavigationAnimations from './NavigationAnimations'

import { Colors, Metrics } from '../config/Constants'
import { NavHeader, SimpleHeader } from '../components'
import {
  createAppContainer,
  createStackNavigator,
  withNavigation
} from 'react-navigation'

import Containers from '../containers'
import FeatherIcon from 'react-native-vector-icons/Feather'
import Login from './Login'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import WelcomeWalkthrough from './WelcomeWalkthrough'

const MoreMenuIcon = withNavigation(({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('MenuMore')}>
    <FeatherIcon name="menu" size={Metrics.base * 4} color={Colors.white} />
  </TouchableOpacity>
))

const UnAuthed = createStackNavigator(
  {
    WelcomeWalkthrough,
    Login
  },
  {
    initialRouteName: 'WelcomeWalkthrough',
    headerMode: 'screen',
    defaultNavigationOptions: {
      header: null
    },
    transitionConfig: NavigationAnimations.FadeInOut()
  }
)

const Authed = createStackNavigator(
  {
    Home: {
      screen: Containers.Home,
      navigationOptions: () => ({
        title: 'Home',
        headerRight: () => <MoreMenuIcon />
      })
    },
    MenuMore: {
      screen: Containers.MenuMore,
      navigationOptions: () => ({
        title: 'Menu',
        renderTop: () => <SimpleHeader buttonLeftText="Home" />
      })
    },
    Playlists: {
      screen: Containers.Playlists,
      navigationOptions: () => ({
        title: 'Playlists',
        renderTop: () => <SimpleHeader buttonLeftText="Home" />
      })
    },
    TrackList: {
      screen: Containers.TrackList,
      navigationOptions: () => ({
        title: 'TrackList',
        header: null
      })
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'screen',
    defaultNavigationOptions: () => ({
      header: NavHeader
    }),
    transitionConfig: NavigationAnimations.SlideInUp()
  }
)

const RootNavigation = () => {
  const Root = createAppContainer(
    createStackNavigator(
      {
        Entry: Containers.Entry,
        Authed,
        UnAuthed
      },
      {
        initialRouteName: 'Entry',
        defaultNavigationOptions: {
          header: null
        },
        transitionConfig: NavigationAnimations.FadeInOut({
          transitionSpec: { duration: 550 }
        })
      }
    )
  )

  return <Root />
}

export default RootNavigation
