import React from 'react'; 
import sty from './recipe.module.css';


const Recipe = ({title,calories,image,ingredients}) => {
  return(
    <div className={sty.recipe}>
      <h1>{title}</h1>
      <ul>
        {ingredients.map((ing,x) => (
          <li key={x}>{ing.text}</li>
        ))}
      </ul>
      <p>{calories}</p>
      <img className={sty.img} src={image} alt=""/>
    </div>
  )
}

export default Recipe;
