import React from 'react'
import {
  View,
  Text,
  ImageBackground,
  StyleSheet
} from 'react-native'

const category = (props) => (
  <ImageBackground
    style={styles.wrapper}
    source={{
      uri: props.background_image
    }}
  >
    <Text
      style={styles.genre}
    >{props.genres? props.genres[0] : 'test' }</Text>
  </ImageBackground>
)

const styles = StyleSheet.create({
  wrapper: {
    width: 250,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center'
  },
  genre: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, .75)',
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowRadius: 10,
    elevation: 2
  }
})

export default category