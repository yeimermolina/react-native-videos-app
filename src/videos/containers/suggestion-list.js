import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  FlatList,
} from 'react-native'
import Layout from '../components/suggestion-list-layout'
import Empty from '../components/empty'
import Separator from '../../sections/components/vertical-separator'
import Suggestion from '../components/suggestion'

class SuggestionList extends Component {
  renderEmpty = () => <Empty text='No hay sugerencias' />
  
  itemSeparator = () => <Separator />

  renderItem = ({ item }) => <Suggestion {...item} />

  keyExtractor = item => item.id.toString()

  render() {
    const { list } = this.props
    return (
      <Layout 
        title='Sugerencias'
      >
        <FlatList
          keyExtractor={this.keyExtractor}
          data={list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
      
    )
  }
}

const mapStateToProps= (state) => ({
  list: state.suggestionList
})

export default connect(mapStateToProps)(SuggestionList)
