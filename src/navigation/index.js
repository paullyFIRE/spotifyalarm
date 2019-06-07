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
import React from 'react'
import { TouchableOpacity } from 'react-native'
import WelcomeWalkthrough from './WelcomeWalkthrough'
import { connect } from 'react-redux'

const MoreMenuIcon = withNavigation(({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('MenuMore')}>
    <FeatherIcon name="menu" size={Metrics.base * 4} color={Colors.white} />
  </TouchableOpacity>
))

const unAuthed = createStackNavigator(
  {
    WelcomeWalkthrough,
    Login: {
      screen: Containers.Login,
      navigationOptions: () => ({
        title: "Let's do this",
        header: NavHeader
      })
    }
  },
  {
    initialRouteName: 'WelcomeWalkthrough',
    headerMode: 'screen',
    defaultNavigationOptions: {
      header: null
    }
  }
)

const authed = createStackNavigator(
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

const RootNavigation = ({ authExpireTime }) => {
  const isAuthValid = authExpireTime && new Date(authExpireTime) > new Date()
  const initialRoute = isAuthValid ? 'Authed' : 'UnAuthed'

  const Root = createAppContainer(
    createStackNavigator(
      {
        Authed: authed,
        UnAuthed: unAuthed
      },
      {
        initialRouteName: initialRoute,
        defaultNavigationOptions: {
          header: null
        }
      }
    )
  )

  return <Root />
}

const mapStateToProps = state => ({
  authExpireTime: state.persisted.auth.expireTime
})

export default connect(mapStateToProps)(RootNavigation)
