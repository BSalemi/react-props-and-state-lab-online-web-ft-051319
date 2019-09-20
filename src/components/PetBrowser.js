import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return <div className="ui cards"><Pet pets={this.props.pets}/></div>
  }
}

export default PetBrowser
