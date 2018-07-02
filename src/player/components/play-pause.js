import React from 'react'
import Icon from '../../icons/index'
import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
  StyleSheet
} from 'react-native'

const playPause = (props) => (
  <TouchableHighlight
    onPress={props.onPress}
    style={styles.container}
    underlayColor='transparent'
    hitSlop={{
      left: 5,
      top: 5,
      bottom: 5,
      right: 5
    }}
  >
    {
      props.paused
        ? <Icon iconName='play-circle-outline' />
        : <Icon iconName='pause-circle-outline' />
    }
    
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  button: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  container: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 25,
    marginRight: 10,
    marginVertical: 5,
    borderColor: 'white'
  }
})

export default playPause
