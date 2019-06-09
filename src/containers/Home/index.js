import * as SpotifyApi from '../../state/SpotifyApi'

import React, { useEffect } from 'react'

import { Container } from '../../components'
import { PersistedActions } from '../../state'
import SelectedSong from './SelectedSong'
import StartButton from './StartButton'
import Styles from './Styles'
import Timer from './Timer'
import { View } from 'react-native'
import { connect } from 'react-redux'

const Home = ({ updatePlaylists }) => {
  useEffect(() => {
    async function getPlaylists() {
      const playlists = await SpotifyApi.getUserPlaylists()
      updatePlaylists(playlists)
    }

    getPlaylists()
  }, [])

  return (
    <Container vCenter hCenter style={Styles.container}>
      <View style={Styles.secondaryContainer}>
        <Timer />
        <SelectedSong />
        <StartButton />
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
