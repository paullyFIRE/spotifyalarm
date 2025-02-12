import * as SpotifyApi from '../../state/SpotifyApi'

import { Colors, Fonts, Metrics } from '../../config/Constants'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import Anticon from 'react-native-vector-icons/AntDesign'
import { Container } from '../../components'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import Octicon from 'react-native-vector-icons/Octicons'
import React from 'react'

const Styles = StyleSheet.create({
  menuButton: {
    height: Metrics.base * 8,
    marginHorizontal: Metrics.base * 2,
    borderBottomColor: Colors.grey2,
    borderBottomWidth: 1,
    paddingVertical: Metrics.base,
    flexDirection: 'row',
    alignItems: 'center'
  },
  menuButtonText: {
    ...Fonts.primaryDetailBold,
    color: Colors.white
  },
  icon: {
    paddingLeft: Metrics.base,
    paddingRight: Metrics.base * 2
  }
})

const MenuMore = ({ navigation }) => {
  const menuConfig = [
    {
      title: 'Settings',
      onPress: () => navigation.navigate('Settings'),
      renderIcon: () => (
        <Octicon name="settings" color={Colors.white} size={24} style={Styles.icon} />
      )
    },
    {
      title: 'Feedback',
      onPress: () => {
        navigation.navigate('About')
      },
      renderIcon: () => (
        <Anticon name="message1" color={Colors.white} size={24} style={Styles.icon} />
      )
    },
    {
      title: 'Donate a Beer',
      onPress: () => {
        navigation.navigate('About')
      },
      renderIcon: () => (
        <FontAwesome5Icon
          name="beer"
          color={Colors.white}
          size={24}
          style={Styles.icon}
        />
      )
    },
    {
      title: 'Debug',
      onPress: () => {
        navigation.navigate('FontsPreview')
      },
      renderIcon: () => (
        <FontAwesome5Icon
          name="tools"
          color={Colors.white}
          size={24}
          style={Styles.icon}
        />
      )
    },
    {
      title: 'Logout',
      onPress: () => {
        SpotifyApi.logout()
        navigation.navigate('Login')
      },
      renderIcon: () => (
        <Anticon name="logout" color={Colors.white} size={24} style={Styles.icon} />
      )
    }
  ]

  return (
    <Container>
      {menuConfig.map(menuItem => (
        <TouchableOpacity
          key={menuItem.title}
          style={Styles.menuButton}
          onPress={menuItem.onPress}
        >
          {menuItem.renderIcon && menuItem.renderIcon()}
          <Text style={Styles.menuButtonText}>{menuItem.title}</Text>
        </TouchableOpacity>
      ))}
    </Container>
  )
}

export default MenuMore
