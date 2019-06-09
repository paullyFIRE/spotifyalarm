import { Colors, Fonts, Metrics } from '../../../config/Constants'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import React from 'react'
import { connect } from 'react-redux'

const Styles = StyleSheet.create({
  startButton: {
    marginTop: Metrics.base * 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: Metrics.base * 8,
    borderRadius: Metrics.base * 4,
    backgroundColor: Colors.primary
  },
  startButtonText: {
    ...Fonts.primaryBodyBold,
    color: Colors.black
  }
})

const StartButton = ({ selectedTrack, selectedPlaylist, startAlarm }) => {
  return (
    <TouchableOpacity
      disabled={!selectedTrack && !selectedPlaylist}
      style={Styles.startButton}
      onPress={startAlarm}
    >
      <Text style={Styles.startButtonText}>Start</Text>
    </TouchableOpacity>
  )
}

const mapStateToProps = state => ({
  selectedTrack: state.persisted.alarm.selectedTrack,
  selectedPlaylist: state.persisted.alarm.selectedPlaylist
})

const mapDispatchToProps = dispatch => ({
  startAlarm: payload => dispatch(GeneralActions.startAlarm(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartButton)
