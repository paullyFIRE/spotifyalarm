import { Colors, Fonts, Metrics } from '../../config/Constants'
import { StyleSheet, Text } from 'react-native'

import Animations from '../../assets/animations'
import { Container } from '../../components'
import LottieView from 'lottie-react-native'
import React from 'react'

const Styles = StyleSheet.create({
  container: {
    paddingTop: Metrics.height * 0.2,
    paddingHorizontal: Metrics.base * 2
  },
  welcomeText: {
    ...Fonts.primarySubheadingBold,
    color: Colors.white,
    textAlign: 'center'
  },
  welcomeTextHighlight: {
    color: Colors.primary
  },
  animation: {
    height: Metrics.base * 35,
    marginTop: Metrics.base * 2
  }
})

const WelcomeWakeUp = ({ navigation }) => (
  <Container
    hCenter
    onPress={() => navigation.navigate(navigation.getParam('nextScreen', 'Login'))}
    style={Styles.container}
  >
    <Text style={Styles.welcomeText}>
      Sleep well and wake up feeling{' '}
      <Text style={[Styles.welcomeText, Styles.welcomeTextHighlight]}>refreshed</Text>
    </Text>
    <LottieView
      resizeMode="cover"
      source={Animations.funkyChicken}
      autoPlay
      loop
      speed={1}
      style={Styles.animation}
    />
  </Container>
)

export default WelcomeWakeUp
