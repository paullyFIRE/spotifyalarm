import { StyleSheet, TouchableOpacity, View } from 'react-native'

import { Colors } from '../../../config/Constants'
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

const Container = ({
  style = {},
  vCenter = false,
  hCenter = false,
  children,
  onPress = null,
  isAnimated = false,
  ...props
}) => {
  const containerStyle = [
    Styles.container,
    vCenter && Styles.vCenter,
    hCenter && Styles.hCenter,
    style
  ]

  if (!onPress) return <View style={containerStyle}>{children}</View>

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={containerStyle}
      onPress={onPress}
      {...props}
    >
      {children}
    </TouchableOpacity>
  )
}

export default Container
