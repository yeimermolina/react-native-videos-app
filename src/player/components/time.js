import React from 'react'
import {
  Text,
  StyleSheet
} from 'react-native'
import { formatTime } from '../../utils/time-format'

const time = ({ currentTime, duration}) => (
  <Text
    style={styles.time}
  >
    {formatTime(currentTime)}/{formatTime(duration)}
  </Text>
)

const styles = StyleSheet.create({
  time: {
    color: 'white'
  }
})

export default time
