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
    console.log('this', this)
    this.setState({showChildren: true})
  }

  showDashes() {
    let dashes = ''
    for (var i=0; i<this.props.dashes; i++) {
      dashes += ' - '
    }
    return dashes
  }

  render() {
    const subcategories = this.props.children.map((category, i) => 
      <Category category={category.value} children={category.children} key={i} dashes={this.props.dashes + 1} />
    )

    return (
      <div>
        <h4 onClick={() => this.setState({showChildren: !this.state.showChildren})} >{this.showDashes()}{this.props.category}</h4>
        <div>
          {this.state.showChildren ? subcategories : ''}
        </div>
      </div>
    )
  }
}

export default Category