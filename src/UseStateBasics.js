import React, { useState } from 'react'

const UseStateBasics = () => {
  const [text, setText] = useState('Random text')

  const handleClick = () => {
      if(text === 'Random text'){
        setText('It\'s Demo FKD a great programmer')
      }
      else {
        setText('Random text')
      }
  }

  return (
    <div>
        <h1>{text}</h1>
        <button type='button' onClick={handleClick}>Click me</button>
    </div>
  )
}

export default UseStateBasics