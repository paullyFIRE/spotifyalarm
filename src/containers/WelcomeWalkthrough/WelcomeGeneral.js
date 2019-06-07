import { Animated, Easing, StyleSheet, Text, View } from 'react-native'
import { Colors, Fonts, Metrics } from '../../config/Constants'
import React, { useEffect, useState } from 'react'

import Animations from '../../assets/animations'
import LottieView from 'lottie-react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    paddingTop: Metrics.height * 0.2,
    paddingHorizontal: Metrics.base * 2,
    zIndex: 100,
    backgroundColor: 'transparent'
  },
  touchableContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  welcomeText: {
    ...Fonts.primaryHeadingBold,
    color: Colors.white,
    textAlign: 'center',
    lineHeight: Fonts.primaryHeadingBold.fontSize * 1.5
  },
  welcomeTextHighlight: {
    color: Colors.primary
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: '#000',
    opacity: 0.75,
    zIndex: 2
  },
  bodyText: {
    ...Fonts.primaryCaptionBold,
    color: Colors.white,
    textAlign: 'center',
    marginTop: Metrics.base * 6,
    marginBottom: Metrics.base * 14
  }
})

const WelcomeGeneral = ({ navigation }) => {
  const [fadeInDriver, setFadeInDriver] = useState(new Animated.Value(0))

  useEffect(() => {
    Animated.timing(fadeInDriver, {
      toValue: 1,
      duration: 450,
      delay: 2750,
      easing: Easing.quad
    }).start()
  }, [])

  return (
    <React.Fragment>
      <Animated.View
        style={[
          Styles.container,
          {
            opacity: fadeInDriver
          }
        ]}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate(navigation.getParam('nextScreen', 'Login'))}
          style={Styles.touchableContainer}
        >
          <Text style={Styles.welcomeText}>
            Welcome to{' '}
            <Text style={[Styles.welcomeText, Styles.welcomeTextHighlight]}>
              SpotAlarm
            </Text>
          </Text>
          <Text style={Styles.bodyText}>
            After logging in, you'll soon be on your way to waking up to your favourite
            tunes
          </Text>
          <Text style={Styles.bodyText}>
            Please tap to{' '}
            <Text style={[Styles.bodyText, Styles.welcomeTextHighlight]}>begin</Text>
          </Text>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        style={[
          Styles.overlay,
          {
            opacity: fadeInDriver.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.75]
            })
          }
        ]}
      />
      <LottieView
        resizeMode="center"
        source={Animations.musicPlayer}
        autoPlay
        loop
        speed={0.75}
      />
    </React.Fragment>
  )
}

export default WelcomeGeneral
