import React, { Component } from 'react'
import Category from './category'
import { tree } from '../tree'

export default class App extends Component {
  render() {
    return (
      <div>
        <Category category={tree.value} children={tree.children} dashes={0} />
      </div>
    )
  }
}