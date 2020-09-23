import React, { Component } from 'react'


class AjouterRecette extends Component{
    state = {
        nom:'',
        image:'',
        ingredients:'',
        instructions:''
        
    }
    handleChange = event =>{
        const {name,value} = event.target
        this.setState({[name]:value})
    }
    handleSubmit = event => {
        event.preventDefault()
        const recette = {...this.state}
        this.props.ajouterRecette(recette)

    }

   
    
    render(){
        
        return(
            <div className='card'>
            <form className="admin-form ajouter-recette" onSubmit={this.handleSubmit}>
                <input value={this.state.nom} name="nom" type='text' 
                placeholder='nom de la recette' onChange={this.handleChange} />
                <input value={this.state.image} name="image" type='text'
                placeholder={'nom de la l\'image'} onChange={this.handleChange}/>
                <textarea value={this.state.ingredients} name="ingredients"rows='3'
                 placeholder='Liste des ingredients'onChange={this.handleChange}/>
                <textarea value={this.state.instructions} name="instructions" rows='15'
                 placeholder='Liste des instructions'onChange={this.handleChange}/>
                <button type='submit'>+ajouter une recette</button>
            </form>
            </div>


            
        )
    }
}
export default AjouterRecette