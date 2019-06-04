import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import { Container } from '../../components'
import React from 'react'
import Styles from './Styles'
import { connect } from 'react-redux'

const Playlists = ({ playlists, navigation }) => {
  const onPlaylistSelect = playlist =>
    playlist.playlistId && navigation.navigate('TrackList', { playlist })

  return (
    <Container style={Styles.container}>
      <ScrollView>
        {playlists.map((playlist, index) => {
          return (
            <TouchableOpacity
              style={Styles.playlistContainer}
              key={playlist.playlistName}
              onPress={() => onPlaylistSelect(playlist)}
            >
              <View style={Styles.playlistImageContainer}>
                <Image style={Styles.image} source={{ uri: playlist.playlistImageURL }} />
              </View>
              <View style={Styles.playlistInfoContainer}>
                <Text style={Styles.playlistNameText}>{playlist.playlistName}</Text>
                <Text style={Styles.playlistCreatorText}>
                  By{' '}
                  <Text
                    style={[
                      Styles.playlistCreatorText,
                      Styles.textPrimary,
                      Styles.textBold
                    ]}
                  >
                    {playlist.ownerDisplayName}
                  </Text>
                </Text>
                <Text style={Styles.totalTracksText}>
                  {playlist.totalTracks} {playlist.totalTracks > 1 ? 'songs' : 'song'}
                </Text>
              </View>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </Container>
  )
}

const mapStateToProps = state => ({
  playlists: state.persisted.playlists
})

export default connect(mapStateToProps)(Playlists)
