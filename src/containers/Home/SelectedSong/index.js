import { Image, Text, TouchableOpacity, View } from 'react-native'

import RNFastImage from 'react-native-fast-image'
import React from 'react'
import Styles from './Styles'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

const SelectedSong = ({ style, navigation, selectedTrack, selectedPlaylist }) => {
  const renderTrack = () => (
    <View style={Styles.rowContainer}>
      <View style={Styles.trackImageContainer}>
        <RNFastImage style={Styles.image} source={{ uri: selectedTrack.imageUrl }} />
      </View>
      <View style={Styles.trackTextContainer}>
        <Text style={Styles.trackText}>{selectedTrack.trackName}</Text>
        <Text style={Styles.trackText}>{selectedTrack.artistName}</Text>
        <Text style={Styles.selectedTypeText}>Track</Text>
      </View>
    </View>
  )

  const renderPlaylist = () => (
    <View style={Styles.rowContainer}>
      <View style={Styles.trackImageContainer}>
        <RNFastImage
          style={Styles.image}
          source={{ uri: selectedPlaylist.playlistImageURL || '' }}
        />
      </View>
      <View style={Styles.trackTextContainer}>
        <Text style={Styles.playlistNameText}>{selectedPlaylist.playlistName}</Text>
        <Text style={Styles.selectedTypeText}>Playlist</Text>
      </View>
    </View>
  )

  let toRender = null
  if (selectedTrack) toRender = renderTrack
  if (selectedPlaylist) toRender = renderPlaylist

  return (
    <TouchableOpacity
      style={[Styles.container, style]}
      onPress={() => navigation.navigate('Playlists')}
    >
      {toRender ? (
        toRender()
      ) : (
        <Text style={Styles.selectText}>Select Song or Playlist</Text>
      )}
    </TouchableOpacity>
  )
}
const mapStateToProps = state => ({
  selectedTrack: state.persisted.alarm.selectedTrack,
  selectedPlaylist: state.persisted.alarm.selectedPlaylist
})

export default compose(
  withNavigation,
  connect(mapStateToProps)
)(SelectedSong)
