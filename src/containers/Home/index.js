// import * as Brightness from 'expo-brightness'
import * as SpotifyApi from '../../state/SpotifyApi'

import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

import { Container } from '../../components'
import { PersistedActions } from '../../state'
import SelectedSong from './SelectedSong'
import Styles from './Styles'
import Timer from './Timer'
import { connect } from 'react-redux'

const Home = ({ updatePlaylists }) => {
  const [displayName, setDisplayName] = useState('')
  const [userId, setUserId] = useState(null)

  useEffect(() => {
    async function getPlaylists() {
      const user = await SpotifyApi.getUser()
      setDisplayName(user.display_name)
      setUserId(user.id)

      const playlists = await SpotifyApi.getUserPlaylists()
      updatePlaylists(playlists)
    }

    getPlaylists()
  }, [])

  return (
    <Container vCenter hCenter style={Styles.container}>
      <View style={Styles.textContainer}>
        {!!displayName && (
          <Text style={Styles.welcomeText}>
            {`Welcome, `}
            <Text style={[Styles.welcomeText, Styles.welcomeTextHightlight]}>
              {displayName}
            </Text>
          </Text>
        )}
        {!!displayName && <Text style={Styles.idText}>{`User ID: ${userId}`}</Text>}
      </View>
      <View style={Styles.secondaryContainer}>
        <Timer />
        <SelectedSong />
      </View>
    </Container>
  )
}

const mapDispatchToProps = dispatch => ({
  updatePlaylists: payload => dispatch(PersistedActions.updatePlaylists(payload))
})

export default connect(
  null,
  mapDispatchToProps
)(Home)
