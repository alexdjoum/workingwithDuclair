import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { students } from './students'
import Student from './Student'
import UseStateBasics from './UseStateBasics'
import UseStateArray from './UseStateArray'
import UseStateCounter from './UseStateCounter'

const StudentList = () => {
  return (
    <React.Fragment>
      {/* {students.map((student, index) => {
        return <Student key={index} {...student} />
      })} */}
      {/* <UseStateBasics /> */}
      {/* <UseStateArray /> */}
      <UseStateCounter />
    </React.Fragment>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <StudentList /> */}
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
