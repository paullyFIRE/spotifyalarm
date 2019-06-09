import * as SpotifyApi from '../../state/SpotifyApi'

import { Container, SimpleHeader } from '../../components'
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { PersistedActions } from '../../state/'
import Styles from './Styles'
import TrackListHeader from './TrackListHeader'
import { connect } from 'react-redux'

const TrackList = ({ navigation, updateSelectedTrack, updateSelectedPlaylist }) => {
  const [trackList, setTrackList] = useState([])
  const playlist = navigation.getParam('playlist', {
    playlistId: '3FMTGNVWWao5X8whbrAa51',
    playlistName: 'Gom',
    playlistImage: {
      url: 'https://i.scdn.co/image/77eb7c17cafe5503f9ee1eac7a084b14b200e5fb'
    },
    totalTracks: 1,
    ownerDisplayName: 'Paul'
  })

  useEffect(() => {
    async function getTracksForPlaylist() {
      const trackList = await SpotifyApi.getPlaylistTracks(playlist.playlistId)
      setTrackList(trackList)
    }

    getTracksForPlaylist()
  }, [playlist.playlistId])

  const onTrackSelect = track => {
    updateSelectedTrack(track)
    navigation.navigate('Home')
  }

  const onPlaylistSelect = () => {
    updateSelectedPlaylist({
      ...playlist,
      trackList
    })
    navigation.navigate('Home')
  }

  return (
    <React.Fragment>
      <StatusBar barStyle="light-content" />
      <Container style={Styles.container}>
        <SimpleHeader buttonLeftText="Playlists" />
        <TrackListHeader {...{ playlist, onPlaylistSelect }} />
        <ScrollView contentContainerStyle={Styles.contentContainer}>
          {trackList.map(track => {
            return (
              <TouchableOpacity
                style={Styles.trackItemContainer}
                key={track.trackUri}
                onPress={() => onTrackSelect(track)}
              >
                <View style={Styles.trackImageContainer}>
                  <Image style={Styles.image} source={{ uri: track.imageUrl }} />
                </View>
                <View style={Styles.trackInfoContainer}>
                  <Text style={[Styles.trackInfoText, Styles.trackInfoTextBold]}>{`${
                    track.trackName
                  }`}</Text>
                  <Text style={Styles.trackInfoText}>{`${track.artistName}`}</Text>
                </View>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </Container>
    </React.Fragment>
  )
}

const mapDispatchToProps = dispatch => ({
  updateSelectedTrack: payload => dispatch(PersistedActions.updateSelectedTrack(payload)),
  updateSelectedPlaylist: payload =>
    dispatch(PersistedActions.updateSelectedPlaylist(payload))
})

export default connect(
  null,
  mapDispatchToProps
)(TrackList)
