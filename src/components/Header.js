import React from 'react'

const Header = ({pseudo})=>{
    const formaPseudo = pseudo=> /[aeouiy]/i.test(pseudo[0]) ? `d'${pseudo}`:`de ${pseudo}` 
   
    return(
        <header>
            <h1>La boîte à recette  {formaPseudo(pseudo)} </h1>
        </header>
    )
}
export default Header