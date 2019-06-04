import {} from 'react-navigation'

import { Image, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'
import Styles from './Styles'

const TrackListHeader = ({ playlist, onPlaylistSelect }) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.imageContainer}>
        <Image style={Styles.image} source={{ uri: playlist.playlistImageURL }} />
      </View>
      <View style={Styles.playlistInfoContainer}>
        <View>
          <Text style={Styles.playlistNameText}>{playlist.playlistName}</Text>
          <Text style={Styles.trackNumbersText}>{`${playlist.totalTracks} songs`}</Text>
        </View>
        <TouchableOpacity
          disabled={!playlist || !onPlaylistSelect}
          style={Styles.selectPlaylistButton}
          onPress={onPlaylistSelect}
        >
          <Text style={Styles.selectPlaylistText}>Select Playlist</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TrackListHeader
