import { Colors, Fonts, Metrics } from '../../../config/Constants'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import moment from 'moment'

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: Metrics.base * 10
  },
  timerText: {
    ...Fonts.primaryJumboBold,
    color: Colors.white
  }
})

const CurrentTimeDisplay = ({ style }) => {
  const [currentTime, setCurrentTime] = useState(moment())

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(moment()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <View style={[Styles.container, style.container]}>
      <Text style={[Styles.timerText, style.timerText]}>
        {currentTime.format('HH:mm')}
      </Text>
    </View>
  )
}

export default CurrentTimeDisplay
