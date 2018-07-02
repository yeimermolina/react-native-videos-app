import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

const controlLayout = (props) => (
  <View style={styles.container}>
    {props.children}
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,.7)',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 35,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
  }
})

export default controlLayout