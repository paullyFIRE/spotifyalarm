import { Colors, Fonts, Metrics } from '../../../config/Constants'
import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  vCenter: {
    justifyContent: 'center'
  },
  hCenter: {
    alignItems: 'center'
  }
})

const Container = ({ style = {}, vCenter = false, hCenter = false, children }) => {
  const containerStyle = [
    Styles.container,
    vCenter && Styles.vCenter,
    hCenter && Styles.hCenter,
    style
  ]
  return <View style={containerStyle}>{children}</View>
}

export default Container
