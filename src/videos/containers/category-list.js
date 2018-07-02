import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  FlatList
} from 'react-native'

import Layout from '../components/category-list-layout'
import Separator from '../../sections/components/horizontal-separator'
import Empty from '../components/empty'
import Category from '../components/category'

class CategoryList extends Component {
  keyExtractor = item => item.id.toString()

  renderEmpty = () => <Empty text='No hay sugerencias' />
  
  itemSeparator = () => <Separator />

  renderItem = ({ item }) => <Category {...item} />
  
  render () {
    const { list } = this.props
    return (
      <View>
        <Layout
          title='Categorias'
        >
          <FlatList
            horizontal
            keyExtractor={this.keyExtractor}
            data={list}
            ListEmptyComponent={this.renderEmpty}
            ItemSeparatorComponent={this.itemSeparator}
            renderItem={this.renderItem}
          />
        </Layout>
        
      </View>
    )
  }
}

const mapStateToProps= (state) => ({
  list: state.categoryList
})

export default connect(mapStateToProps)(CategoryList)
