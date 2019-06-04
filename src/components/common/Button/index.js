import { Colors, Fonts, Metrics } from '../../../config/Constants'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const BUTTON_HEIGHT = moderateScale(Metrics.base * 8)

const Styles = StyleSheet.create({
  container: {
    width: Metrics.width * 0.6,
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_HEIGHT / 2,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    ...Fonts.primaryCaptionBold,
    color: Colors.black,
    textAlign: 'center'
  }
})

const Button = ({ onPress = null, style = {}, children }) => {
  return (
    <TouchableOpacity style={[Styles.container, style.container]} {...{ onPress }}>
      <Text style={[Styles.text, style.text]}>{children}</Text>
    </TouchableOpacity>
  )
}

export default Button
