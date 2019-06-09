import * as SpotifyApi from '../../state/SpotifyApi'

import { Animated, View } from 'react-native'
import React, { useEffect } from 'react'

import Animations from '../../assets/animations'
import { Container } from '../../components'
import LottieView from 'lottie-react-native'
import { PersistedActions } from '../../state'
import SelectedSong from './SelectedSong'
import StartButton from './StartButton'
import Styles from './Styles'
import Timer from './Timer'
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
    <React.Fragment>
      <Container vCenter hCenter style={Styles.container}>
        <View style={Styles.secondaryContainer}>
          <Timer />
          <SelectedSong />
          <StartButton />
        </View>
      </Container>
      {/* <LottieView source={Animations.pulsingCircles} autoPlay loop resizeMode="center" /> */}
    </React.Fragment>
  )
}

const mapDispatchToProps = dispatch => ({
  updatePlaylists: payload => dispatch(PersistedActions.updatePlaylists(payload))
})

export default connect(
  null,
  mapDispatchToProps
)(Home)
