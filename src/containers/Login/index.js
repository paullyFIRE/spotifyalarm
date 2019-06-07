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

const Login = ({ navigation, loginRequest, refreshToken, getUserRequest }) => {
  const [shouldRender, setShouldRender] = useState(false)

  const getUser = async () => {
    try {
      const { displayName } = await getUserRequest()
      navigation.navigate('LoginSuccess', {
        displayName
      })
    } catch (err) {
      navigation.navigate('Authed')
    }
  }

  const login = () => loginRequest().then(getUser)

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
          <Text style={[Styles.instructionText, Styles.loadingText]}>Loading...</Text>
        )}
      </View>
    </Container>
  )
}

const mapStateToProps = state => ({
  refreshToken: state.persisted.auth.refreshToken
})

const mapDispatchToProps = dispatch => ({
  loginRequest: payload => dispatch(GeneralActions.loginRequest(payload)),
  getUserRequest: payload => dispatch(GeneralActions.getUserRequest(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
