import { NavigationActions, StackActions } from 'react-navigation'
import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

import Animations from '../../assets/animations'
import { Button } from '../../components'
import { Container } from '../../components'
import { GeneralActions } from '../../state'
import LottieView from 'lottie-react-native'
import Styles from './Styles'
import { connect } from 'react-redux'

// TODO: add error handling UI for when login fails.
// TODO: Have a transition to a welcome screen - fade in/out, saying Hi.

const Login = ({ navigation, loginRequest, refreshToken }) => {
  const [shouldRender, setShouldRender] = useState(false)

  const login = () =>
    loginRequest().then(() =>
      navigation.dispatch(
        StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Authed' })]
        })
      )
    )

  useEffect(() => {
    if (!shouldRender && refreshToken) {
      login().catch(() => setShouldRender(true))
    } else {
      setShouldRender(true)
    }
  }, [])

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
        {!!shouldRender ? (
          <React.Fragment>
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
          </React.Fragment>
        ) : (
          <Text style={Styles.instructionText}>Loading...</Text>
        )}
      </View>
    </Container>
  )
}

const mapStateToProps = state => ({
  refreshToken: state.persisted.auth.refreshToken
})

const mapDispatchToProps = dispatch => ({
  loginRequest: payload => dispatch(GeneralActions.loginRequest(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
