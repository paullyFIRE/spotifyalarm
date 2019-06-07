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

const WelcomePlaylist = ({ navigation }) => (
  <Container
    hCenter
    onPress={() => navigation.navigate(navigation.getParam('nextScreen', 'Login'))}
    style={Styles.container}
  >
    <Text style={Styles.welcomeText}>
      Select your favourite{' '}
      <Text style={[Styles.welcomeText, Styles.welcomeTextHighlight]}>playlist</Text>, or
      that special song you'd love to wake up to.
    </Text>
    <LottieView
      resizeMode="cover"
      source={Animations.dancingDino}
      autoPlay
      loop
      speed={1}
      style={Styles.animation}
    />
  </Container>
)

export default WelcomePlaylist
