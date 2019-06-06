import { Image, Text, View } from 'react-native'

import React from 'react'
import Styles from './Styles'
import { connect } from 'react-redux'

const PlaybackTrack = ({ style, playbackTrack: { imageUrl, trackName, artistName } }) => {
  return (
    <View style={[Styles.container, style.container]}>
      <View style={Styles.trackImageContainer}>
        {imageUrl && <Image style={Styles.image} source={{ uri: imageUrl }} />}
      </View>
      <View style={Styles.trackTextContainer}>
        {trackName && <Text style={Styles.trackNameText}>{trackName}</Text>}
        {artistName && <Text style={Styles.trackArtistText}>{artistName}</Text>}
      </View>
    </View>
  )
}
const mapStateToProps = state => ({
  playbackTrack: state.general.playback.playbackTrack
})

export default connect(mapStateToProps)(PlaybackTrack)
