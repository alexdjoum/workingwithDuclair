import React from 'react'

const Student = (props) => {
    const { name, age, sexe } = props
  
    const handleClick = () => {
      alert('My first React app')
    }
  
    const handleMouse = (e) => {
      alert('Mouse out event triggered')
    }
  
    return (
      <>
        <article>
          <strong style={{cursor: 'pointer'}} onClick={() => handleClick()}>Name: {name}</strong><br/>
          <em onMouseOut={handleMouse}>Age: {age}</em>
          <p>Sexe: {sexe}</p>
        </article>
        <hr/>
      </>
    )
}

export default Student

  