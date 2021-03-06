import React, { Component } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import {
  Text,
} from 'react-native';

import Home from './src/screens/containers/home'
import Header from './src/sections/components/header'
import SuggestionList from './src/videos/containers/suggestion-list'
import CategoryList from './src/videos/containers/category-list'
import Player from './src/player/container/player'
import Loading from './src/sections/components/loading'
import API from './src/utils/api'
import { Provider } from 'react-redux'
import { store, persistor } from './store'

export default class App extends Component {
  // state = {
  //   suggestionList: [],
  //   categoryList: []
  // }
  async componentDidMount () {
    const categoryList = await API.getMovies()
    store.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })

    const suggestionList = await API.getSuggestion(33)
    store.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    })
  }
  render() {
    return (
      <Provider
        store={store}
      >
        <PersistGate loading={<Loading />} persistor={persistor}>
          <Home>
            <Header />
            <Player />
            <Text>buscador</Text>
            <CategoryList />
            <SuggestionList />
          </Home>
        </PersistGate>
      </Provider>
    )
  }
}
