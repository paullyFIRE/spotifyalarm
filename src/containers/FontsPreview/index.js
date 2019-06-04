import { Colors, Fonts, Metrics } from '../../config/Constants'
import { ScrollView, StyleSheet, Text } from 'react-native'

import { Container } from '../../components'
import React from 'react'

const Styles = StyleSheet.create({
  container: {
    paddingHorizontal: Metrics.base * 2,
    alignItems: 'flex-start'
  },
  text: {
    color: Colors.white
  }
})

const FontsPreview = () => (
  <Container style={Styles.container}>
    <ScrollView>
      {Object.entries(Fonts).map(([key, font]) => (
        <Text
          key={key.toString()}
          style={[
            Styles.text,
            { ...font },
            key.includes('Bold') && { color: Colors.primary }
          ]}
        >
          {key}
        </Text>
      ))}
    </ScrollView>
  </Container>
)

export default FontsPreview
