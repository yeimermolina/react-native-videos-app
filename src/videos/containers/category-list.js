import React, { Component } from 'react'
import {
  View,
  FlatList
} from 'react-native'

import Separator from '../components/vertical-separator'
import Empty from '../components/empty'
import Suggestion from '../components/suggestion'

class CategoryList extends Component {
  keyExtractor = item => item.id.toString()

  renderEmpty = () => <Empty text='No hay sugerencias' />
  
  itemSeparator = () => <Separator />

  renderItem = ({ item }) => <Suggestion {...item} />
  
  render () {
    const { list } = this.props
    return (
      <View>
        <FlatList
          horizontal
          keyExtractor={this.keyExtractor}
          data={list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

export default CategoryList
