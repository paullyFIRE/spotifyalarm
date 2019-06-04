import { Colors, Fonts, Helpers, Metrics } from '../../../config/Constants'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

import React from 'react'
import { SimpleHeader } from '../../'

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: Metrics.base * ((Helpers.isIphoneX ? 4 : 0) + 2),
    backgroundColor: Colors.background
  },
  headerContainer: {
    marginHorizontal: Metrics.base * 2,
    paddingHorizontal: Metrics.base,
    paddingBottom: Metrics.base * 2,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  titleText: {
    ...Fonts.primaryHeadingBold,
    color: Colors.white
  }
})

const NavHeader = ({ scene, scenes, ...props }) => {
  const {
    options: { title = '', headerRight = null, renderTop = null, ...navigationOptions }
  } = scene.descriptor

  return (
    <View style={Styles.container}>
      <StatusBar barStyle="light-content" />
      {renderTop && renderTop()}
      <View style={Styles.headerContainer}>
        <Text style={Styles.titleText}>{title}</Text>
        {headerRight && headerRight()}
      </View>
    </View>
  )
}

export default NavHeader
