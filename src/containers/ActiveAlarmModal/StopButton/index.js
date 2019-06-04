import { Colors, Fonts, Metrics } from '../../../config/Constants'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import React from 'react'

const Styles = StyleSheet.create({
  container: {
    width: '60%',
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
    borderWidth: 2,
    height: Metrics.base * 8,
    borderRadius: Metrics.base * 4,
    padding: Metrics.base * 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    ...Fonts.primaryCaptionBold,
    color: Colors.black
  }
})

const StopButton = ({ style, stopAlarm }) => {
  return (
    <TouchableOpacity
      style={[Styles.container, style.container]}
      onPress={() => stopAlarm()}
    >
      <Text style={[Styles.buttonText, style.buttonText]}>Stop Alarm</Text>
    </TouchableOpacity>
  )
}

export default StopButton
