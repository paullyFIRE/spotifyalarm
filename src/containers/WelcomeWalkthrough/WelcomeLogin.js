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
    ...Fonts.primaryHeadingBold,
    color: Colors.white,
    textAlign: 'center'
  },
  welcomeTextHighlight: {
    color: Colors.primary
  },
  animation: {
    height: Metrics.base * 25,
    marginTop: Metrics.base
  }
})

const WelcomeLogin = ({ navigation }) => (
  <Container
    hCenter
    onPress={() => navigation.navigate(navigation.getParam('nextScreen', 'Login'))}
    style={Styles.container}
  >
    <Text style={Styles.welcomeText}>
      First, log in to your{' '}
      <Text style={[Styles.welcomeText, Styles.welcomeTextHighlight]}>Spotify</Text>{' '}
      premium profile.
    </Text>
    <LottieView
      resizeMode="center"
      source={Animations.loginFingerprint}
      autoPlay
      loop
      speed={0.75}
      style={Styles.animation}
    />
  </Container>
)

export default WelcomeLogin
