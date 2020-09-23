import React, { Component } from 'react'

// CSS
import './App.css'
import Header from './components/Header'
import Admin from './components/Admin'
import Card from './components/Card'
import recettes from './recettes'
//firebase




class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes:{}
  }
ajouterRecette = recette => {
  const recettes = { ...this.state.recettes }
  recettes[`recette-${Date.now()}`] = recette
  this.setState({recettes})
}
  chargerExample = () =>this.setState({recettes})

  render () {
    const cards = Object.keys(this.state.recettes)
    .map(key => <Card key={key} details ={this.state.recettes[key]} />)
    console.log(cards)
    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo}/>
        <div className='cards'>
          {cards}
        </div>
        <Admin
        ajouterRectte = {this.ajouterRectte}
        chargerExample ={this.chargerExample} />
      </div>
    )
  }
}

export default App
