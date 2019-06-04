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
import { connect } from 'react-redux'
import moment from 'moment'

const MoreMenuIcon = withNavigation(({ navigation }) => (
  <FeatherIcon
    name="menu"
    size={Metrics.base * 4}
    color={Colors.white}
    onPress={() => navigation.navigate('MenuMore')}
  />
))

const unAuthed = createStackNavigator(
  {
    Login: {
      screen: Containers.Login,
      navigationOptions: () => ({
        title: 'Login'
      })
    }
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: () => ({
      header: NavHeader
    })
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
    },
    FontsPreview: {
      screen: Containers.FontsPreview,
      navigationOptions: () => ({
        title: 'Fonts',
        renderTop: () => <SimpleHeader />
      })
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'screen',
    defaultNavigationOptions: () => ({
      header: NavHeader
    })
  }
)

const RootNavigation = ({ isAuthed }) => {
  const isAuthValid = !!isAuthed && new Date(isAuthed.expireTime) > new Date()
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
  isAuthed: state.persisted.auth
})

export default connect(mapStateToProps)(RootNavigation)
