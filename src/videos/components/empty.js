import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const empty = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>{props.text}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  text: {
    fontSize: 16
  }
})

export default empty