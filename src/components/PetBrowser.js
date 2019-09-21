import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  constructor(props){
    super(props)
  }
/* <Pet name={pet.name} age={pet.age} type={pet.type} gender={pet.gender} weight={pet.weight} isAdopted={pet.isAdopted} onAdoptPet={this.props.onAdoptPet} id={pet.id}/>  */
  renderPets = () => {
    
    return this.props.pets.map(pet => {
      return <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
    })
  }
  render() {
    return <div className="ui cards">{this.renderPets()}</div>
  }
}

export default PetBrowser
