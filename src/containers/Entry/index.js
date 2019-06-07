import * as NavigationAnimations from '../../navigation/NavigationAnimations'

import React, { useEffect } from 'react'

import { Container } from '../../components'
import { connect } from 'react-redux'

const Entry = ({ authExpireTime, navigation }) => {
  useEffect(() => {
    if (!authExpireTime) {
      navigation.navigate('UnAuthed')
    } else {
      const isAuthValid = new Date(authExpireTime) > new Date()
      const initialRoute = isAuthValid ? 'Authed' : 'Login'

      navigation.navigate(initialRoute)
    }
  }, [])

  return <Container />
}

const mapStateToProps = state => ({
  authExpireTime: state.persisted.auth.expireTime
})

export default connect(mapStateToProps)(Entry)
