import React, { Component } from 'react'

class Category extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showChildren: false
    }
    this.renderSubcategories.bind(this)
  }

  renderSubcategories() {
    this.setState({showChildren: true})
  }

  render() {
    const subcategories = this.props.children.map((category, i) => 
      <Category category={category.value} children={category.children} key={i} dashes={this.props.dashes + 1} />
    )

    return (
      <li>
        <h4 onClick={() => this.setState({showChildren: !this.state.showChildren})} >
          {this.props.category}
        </h4>

        <ul>
          {this.state.showChildren ? subcategories : ''}
        </ul>
      </li>
    )
  }
}

export default Category