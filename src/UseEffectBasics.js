import React, { useEffect, useState } from 'react'

const url = 'http://localhost:5000/users'

const UseEffectBasics = () => {
  const [users, setUsers] = useState([])

  const getAllUsers = async () => {
    const res = await fetch(url)
    const users = await res.json()
    setUsers(users)
    // console.log(users)
  }

  useEffect(() => {
    // getAllUsers()

    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json()
        } else {
          throw new Error(res.statusText)
        }
      })
      .then((users) => setUsers(users))
      .catch((err) => console.log(err))
  }, [])

  console.log('Component render')
  return (
    <>
      <h1>All Users</h1>
      {users.map((user) => {
        const { _id: userID, username, phoneNumber } = user
        return (
          <div key={userID}>
            <h2>Username: {username}</h2>
            <h2>Phone: {phoneNumber}</h2>
          </div>
        )
      })}
      {/* <button type='button' onClick={() => setValue(value + 1)}>
        Click Me
      </button> */}
    </>
  )
}

export default UseEffectBasics
