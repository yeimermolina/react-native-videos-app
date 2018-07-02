import React from 'react'
import {
  StyleSheet,
  View,
  Slider
} from "react-native";

const progressBar = (props) => (
  <View style={styles.container}>
    <Slider
      maximumTrackTintColor='white'
      minimumTrackTintColor='green'
      thumbTintColor='green'
      minimumValue={0}
      maximumValue={props.duration}
      value={props.currentTime}
      onValueChange={props.onValueChange}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "space-evenly",
    padding: 10
  }
});

export default progressBar
