import { Animated, Easing, TouchableOpacity } from 'react-native'
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

const MoreMenuIcon = withNavigation(({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('MenuMore')}>
    <FeatherIcon name="menu" size={Metrics.base * 4} color={Colors.white} />
  </TouchableOpacity>
))

const unAuthed = createStackNavigator(
  {
    Login: {
      screen: Containers.Login,
      navigationOptions: () => ({
        title: 'Welcome'
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
    }),
    transitionConfig: () => {
      return {
        transitionSpec: {
          duration: 750,
          easing: Easing.out(Easing.poly(4)),
          timing: Animated.timing,
          useNativeDriver: true
        },
        screenInterpolator: sceneProps => {
          const { layout, position, scene, index, scenes } = sceneProps

          const thisSceneIndex = scene.index
          const { initHeight, initWidth } = layout

          const translateY = position.interpolate({
            inputRange: [thisSceneIndex - 1, thisSceneIndex],
            outputRange: [initHeight, 0]
          })

          const lastSceneIndex = scenes[scenes.length - 1].index

          if (lastSceneIndex - index > 1) {
            if (scene.index === index) return
            if (scene.index !== lastSceneIndex) return { opacity: 0 }
            return { transform: [{ translateY }] }
          }

          return { transform: [{ translateY }] }
        }
      }
    }
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
