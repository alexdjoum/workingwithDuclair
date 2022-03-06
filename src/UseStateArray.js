import React from 'react'

import { students } from './students'

const UseStateArray = () => {
  const [people, setPeople] = React.useState(students)

  const handleClick = () => {
    setPeople([])
  }

  const deletePerson = (personID) => {
    setPeople(
      people.filter((person) => {
        return person.id !== personID
      })
    )
  }

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id}>
            <p>{name}</p>
            <button type='button' onClick={() => deletePerson(id)}>
              Delete
            </button>
          </div>
        )
      })}
      <button type='button' onClick={handleClick}>
        Reset
      </button>
    </div>
  )
}

export default UseStateArray
