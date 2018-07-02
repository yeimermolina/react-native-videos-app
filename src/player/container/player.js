import React, { Component } from 'react'
import Video from 'react-native-video';
import {
  StyleSheet,
  ActivityIndicator,
  Text
} from 'react-native'
import Layout from '../components/layout'
import ControlLayout from '../components/control-layout'
import PlayPause from '../components/play-pause'
import ProgressBar from '../components/progress-bar'

class Player extends Component {
  state = {
    loading: true,
    paused: false,
    playableDuration: 0,
    currentTime: 0,
    seekableDuration: 0
  }
  onBuffer = ({ isBuffering }) => {
    this.setState({
      loading: isBuffering
    })
  }

  playPause = () => {
    this.setState((state) => {
      return {paused: !state.paused}
    })
  }

  handleVideoProgress = ({currentTime, playableDuration, seekableDuration}) => {
    this.setState({
      currentTime,
      playableDuration,
      seekableDuration
    })
  }

  handleVideoSeek = (value) => {
    console.log(value)
    this.video.seek(value)
    this.setState({
      currentTime: value
    })
  }

  render () {
    return (
      <Layout
        loading={this.state.loading}
        video={
          <Video
            source={{uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
            style={styles.video}
            resizeMode="contain"
            onBuffer={this.onBuffer}
            paused={this.state.paused}
            onProgress={this.handleVideoProgress}
            ref={(ref) => {
              this.video = ref
            }}   
          />
        }
        loader={
          <ActivityIndicator color='red' />
        }
        controls={
          <ControlLayout>
            <PlayPause
              paused={this.state.paused}
              onPress={this.playPause}
            />
            <ProgressBar
              onValueChange={this.handleVideoSeek}
              currentTime={this.state.currentTime}
              duration={this.state.seekableDuration}
            />
            <Text>time left</Text>
            <Text>fullscreen</Text>
          </ControlLayout>
        }
      />
    )
    
  }
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  }
})

export default Player