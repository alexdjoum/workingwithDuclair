import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from 'react-router-dom'

import Home from './pages/Home'
import Teacher from './pages/Teacher'
import Contact from './pages/Contact'
import Events from './pages/Events'
import Profile from './pages/Profile'
import Register from './pages/Register'
import { ToastContainer } from 'react-toastify'
import UserRoute from './UserRoute'

function App() {
  return (
    <Router>
      <ToastContainer position='top-center' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/teacher' element={<Teacher />} />
        {/* <Route path='/profile/:username' element={<Profile />} /> */}
        <Route
          path='/contact'
          element={(props) => (
            <Contact {...props} key={props.match.params.username} />
          )}
        />
        {/* <Route path='/events' element={<Events />} /> */}
        <Route path='/register' element={<Register />} />
        <Route
          path='/events'
          element={
            <UserRoute>
              <Events />
            </UserRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
