import React, { useState } from 'react'

const UseStateCounter = () => {
  const [value, setValue] = useState(0)

  return (
    <React.Fragment>
      <section style={{ width: '50%', margin: 'auto', textAlign: 'center' }}>
        <h1>UseState Counter Example</h1>
        <p>{value}</p>
        <button type='button' onClick={() => setValue(value + 1)}>
          Increase
        </button>
        <button type='button' onClick={() => setValue(value - 1)}>
          Decrease
        </button>
        <button type='button' onClick={() => setValue(0)}>
          Reset
        </button>
      </section>
    </React.Fragment>
  )
}

export default UseStateCounter
