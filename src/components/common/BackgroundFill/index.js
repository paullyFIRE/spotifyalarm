import { Colors, Metrics } from '../../../config/Constants'

import React from 'react'
import { View } from 'react-native'

const BackgroundFill = ({ children }) => {
  return (
    <View
      style={{
        position: 'absolute',
        height: Metrics.height,
        width: Metrics.width,
        backgroundColor: Colors.background,
        borderColor: 'red',
        borderWidth: 2
      }}
    >
      {children}
    </View>
  )
}

export default BackgroundFill
