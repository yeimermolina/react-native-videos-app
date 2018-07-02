import React from 'react'

import {
  View
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const icon = (props) => {
  return (
    <View>
      <Icon name={props.iconName} size={props.iconSize ? props.iconSize : 20} color={props.iconColor ? props.iconColor : 'white'} />
    </View>
  )
}

export default icon
