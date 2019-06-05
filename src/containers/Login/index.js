import { NavigationActions, StackActions } from 'react-navigation'
import { Text, View } from 'react-native'

import Animations from '../../assets/animations'
import { Button } from '../../components'
import { Container } from '../../components'
import { GeneralActions } from '../../state'
import LottieView from 'lottie-react-native'
import React from 'react'
import Styles from './Styles'
import { connect } from 'react-redux'

const Login = ({ navigation, loginRequest }) => {
  const loginSuccess = () => {
    navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Authed' })]
      })
    )
  }

  const login = () =>
    loginRequest()
      .then(loginSuccess)
      .catch(err => console.log('err', err))

  return (
    <Container vCenter hCenter>
      <View style={Styles.upperContainer}>
        <LottieView
          source={Animations.pulsingWave}
          autoPlay
          loop
          style={Styles.pulsingWave}
        />
      </View>
      <View style={Styles.lowerContainer}>
        <Text style={Styles.instructionText}>
          Please login with your Spotify profile to begin
        </Text>
        <Button
          style={{
            container: Styles.loginButtonContainer
          }}
          onPress={login}
        >
          Click to Login
        </Button>
      </View>
    </Container>
  )
}

const mapDispatchToProps = dispatch => ({
  loginRequest: payload => dispatch(GeneralActions.loginRequest(payload))
})

export default connect(
  null,
  mapDispatchToProps
)(Login)
