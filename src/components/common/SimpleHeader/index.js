import { Text, TouchableOpacity, View } from 'react-native'

import AntIcon from 'react-native-vector-icons/AntDesign'
import { Colors } from '../../../config/Constants'
import React from 'react'
import Styles from './Styles'
import { withNavigation } from 'react-navigation'

const SimpleHeader = ({ navigation, buttonLeftText = 'Back' }) => {
  return (
    <View style={Styles.container}>
      <TouchableOpacity style={Styles.buttonLeft} onPress={() => navigation.goBack()}>
        <AntIcon color={Colors.white} size={20} name="left" />
        <Text style={Styles.buttonLeftText}>{buttonLeftText}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default withNavigation(SimpleHeader)
