import { Animated, Easing, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Colors, Fonts, Metrics } from '../../config/Constants'
import React, { useEffect, useRef } from 'react'

import Animations from '../../assets/animations'
import CurrentTimeDisplay from './CurrentTimeDisplay'
import { GeneralActions } from '../../state'
import KeepAwake from 'expo-keep-awake'
import LottieView from 'lottie-react-native'
import { PlaybackTrack } from '../../components'
import StopButton from './StopButton'
import { connect } from 'react-redux'

const Styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    left: 0,
    width: Metrics.width,
    height: Metrics.height,
    zIndex: 1,
    backgroundColor: Colors.secondaryBackground,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Metrics.height * 0.15
  },
  timeDisplayContainer: {
    marginTop: Metrics.base * 2
  },
  stopButtonContainer: {
    marginTop: Metrics.base * 4
  }
})

const ActiveAlarmModal = ({ isAlarmActive, stopAlarm, playbackTrack }) => {
  const animTop = useRef(new Animated.Value(-Metrics.height))
  const animTopRef = animTop.current

  useEffect(() => {
    const value = animTopRef._value

    if (isAlarmActive && value !== 0) {
      Animated.timing(animTopRef, {
        toValue: 0,
        duration: 245,
        easing: Easing.quad
      }).start()
    } else if (!isAlarmActive && value === 0) {
      Animated.timing(animTopRef, {
        toValue: -Metrics.height,
        duration: 245,
        easing: Easing.quad
      }).start()
    }
  }, [isAlarmActive])

  return (
    <React.Fragment>
      <KeepAwake />
      <Animated.View style={[Styles.modalContainer, { top: animTopRef }]}>
        {!playbackTrack && (
          <LottieView resizeMode="cover" source={Animations.nightClouds} autoPlay loop />
        )}
        <CurrentTimeDisplay style={{ container: Styles.timeDisplayContainer }} />
        {playbackTrack && <PlaybackTrack />}
        <StopButton
          stopAlarm={stopAlarm}
          style={{ container: Styles.stopButtonContainer }}
        />
      </Animated.View>
    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  isAlarmActive: state.general.alarm.isAlarmActive,
  playbackTrack: state.general.playback.playbackTrack
})

const mapDispatchToProps = dispatch => ({
  stopAlarm: payload => dispatch(GeneralActions.stopAlarm(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveAlarmModal)
