import React from 'react'
import Icon from '../../icons/index'
import {
  TouchableHighlight,
  StyleSheet
} from 'react-native'

const fullScreen = (props) => (
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
    <Icon iconName='fullscreen' />
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 25,
    marginRight: 10,
    marginVertical: 5,
    borderColor: 'white'
  }
})

export default fullScreen
