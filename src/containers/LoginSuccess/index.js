import { Animated, Easing, StyleSheet, Text } from 'react-native'
import { Colors, Fonts, Metrics } from '../../config/Constants'
import { NavigationActions, StackActions } from 'react-navigation'
import React, { useEffect, useRef, useState } from 'react'

import Animations from '../../assets/animations'
import { Container } from '../../components'
import LottieView from 'lottie-react-native'

const LoginSuccess = ({ navigation }) => {
  const displayName = navigation.getParam('displayName', '')
  const [fadeDriver] = useState(new Animated.Value(0))
  const lottieRef = useRef(null)

  const onAnimationFinish = () => {
    navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Authed' })]
      })
    )
  }

  useEffect(() => {
    Animated.timing(fadeDriver, {
      toValue: 1,
      duration: 1200,
      easing: Easing.quad
    }).start(() => lottieRef.current.play())
  }, [])

  return (
    <Container hCenter style={Styles.container}>
      <Animated.Text style={[Styles.welcomeText, { opacity: fadeDriver }]}>
        Welcome{' '}
        {displayName && (
          <Text style={[Styles.welcomeText, Styles.welcomeTextHighlight]}>
            {displayName}
          </Text>
        )}
      </Animated.Text>
      <LottieView
        resizeMode="cover"
        ref={lottieRef}
        loop={false}
        source={Animations.smileySuccess}
        speed={0.75}
        style={Styles.animation}
        onAnimationFinish={onAnimationFinish}
      />
    </Container>
  )
}

export default LoginSuccess

const Styles = StyleSheet.create({
  container: {
    paddingTop: Metrics.height * 0.2,
    paddingHorizontal: Metrics.base * 2
  },
  welcomeText: {
    ...Fonts.primaryBigHeadingBold,
    color: Colors.white,
    textAlign: 'center'
  },
  welcomeTextHighlight: {
    color: Colors.primary
  },
  animation: {
    height: Metrics.base * 30,
    marginTop: Metrics.base * 2
  }
})
