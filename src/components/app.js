import React, { Component } from 'react'
import Category from './category'
import { tree } from '../tree'

export default class App extends Component {
  render() {
    const categories = tree.map((category, i) => 
      <Category category={category.value} children={category.children} dashes={0} key={i} />
    )

    return (
      <ul>
        {categories}
      </ul>
    )
  }
}