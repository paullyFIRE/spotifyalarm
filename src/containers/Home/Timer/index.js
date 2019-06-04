import { Colors, Fonts } from '../../../config/Constants'
import { GeneralActions, PersistedActions } from '../../../state'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import DateTimePicker from 'react-native-modal-datetime-picker'
import Styles from './Styles'
import { connect } from 'react-redux'
import moment from 'moment'

const Timer = ({
  startAlarm,
  stopAlarm,
  updateAlarmTime,
  alarmTime,
  selectedTrack,
  selectedPlaylist,
  isAlarmActive
}) => {
  const [timePickerModalVisible, setTimePickerModalVisible] = useState(false)

  const handleDatePicked = date => {
    updateAlarmTime(date)
    setTimePickerModalVisible(false)
  }

  return (
    <React.Fragment>
      <View style={Styles.container}>
        <TouchableOpacity
          onPress={() => {
            if (isAlarmActive) return null
            setTimePickerModalVisible(true)
          }}
        >
          <Text style={Styles.timerText}>{moment(alarmTime).format('HH:mm')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={!selectedTrack && !selectedPlaylist}
          style={Styles.startButton}
          onPress={startAlarm}
        >
          <Text style={Styles.startButtonText}>Start</Text>
        </TouchableOpacity>
      </View>

      <DateTimePicker
        is24Hour
        date={new Date()}
        disabled={true}
        mode="time"
        titleIOS="Select Alarm Time"
        titleStyle={{
          ...Fonts.primaryCaptionBold,
          color: Colors.black
        }}
        confirmTextStyle={{
          ...Fonts.primaryCaptionBold,
          color: Colors.black
        }}
        cancelTextStyle={{
          ...Fonts.primaryCaption,
          color: Colors.black
        }}
        datePickerContainerStyleIOS={{
          borderColor: Colors.background,
          borderWidth: 1
        }}
        isVisible={timePickerModalVisible}
        onConfirm={handleDatePicked}
        onCancel={() => setTimePickerModalVisible(false)}
      />
    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  alarmTime: state.persisted.alarm.alarmTime,
  isAlarmActive: state.general.alarm.isAlarmActive,
  selectedTrack: state.persisted.alarm.selectedTrack,
  selectedPlaylist: state.persisted.alarm.selectedPlaylist
})

const mapDispatchToProps = dispatch => ({
  startAlarm: payload => dispatch(GeneralActions.startAlarm(payload)),
  stopAlarm: payload => dispatch(GeneralActions.stopAlarm(payload)),
  updateAlarmTime: payload => dispatch(PersistedActions.updateAlarmTime(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer)
