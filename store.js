import { createStore } from 'redux'
import reducer from './src/reducers/videos'

const store = createStore(reducer, {
  suggestionList: [],
  categoryList: []
})

export default store
