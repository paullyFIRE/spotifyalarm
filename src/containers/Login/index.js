import { Colors, Metrics } from '../../config/Constants'
import { NavigationActions, StackActions } from 'react-navigation'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

import { Button } from '../../components'
import { Container } from '../../components'
import FeatherIcon from 'react-native-vector-icons/Feather'
import { GeneralActions } from '../../state'
import Spotify from 'rn-spotify-sdk'
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
      <FeatherIcon name="speaker" size={Metrics.base * 12} color={Colors.primary} />
      <Text style={Styles.instructionText}>
        Please login with your Spotify profile to begin
      </Text>
      <Button
        style={{
          container: Styles.loginButtonContainer
        }}
        onPress={login}
      >
        Login Here
      </Button>
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
