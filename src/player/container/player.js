import React, { Component } from 'react'
import Video from 'react-native-video';
import {
  StyleSheet,
  ActivityIndicator,
} from 'react-native'
import Layout from '../components/layout'
import ControlLayout from '../components/control-layout'
import PlayPause from '../components/play-pause'
import ProgressBar from '../components/progress-bar'
import Time from '../components/time'
import FullScreen from '../components/full-screen'

// TODO improve fullscreen
// TODO add volume functionality
class Player extends Component {
  state = {
    loading: true,
    paused: false,
    playableDuration: 0,
    currentTime: 0,
    seekableDuration: 0,
    fullScreen: false
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
    this.video.seek(value)
    this.setState({
      currentTime: value
    })
  }
  
  handleFullScreen = () => {
    if (this.state.fullScreen) {
      this.video.dismissFullscreenPlayer()
    } else {
      this.video.presentFullscreenPlayer()
    }
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
            onFullscreenPlayerWillDismiss={this.fullScreenPlayerWillDismiss}
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
            <Time 
              currentTime={this.state.currentTime}
              duration={this.state.seekableDuration}
            />
            <FullScreen 
              onPress={this.handleFullScreen}
            />
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