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
import Settings from './pages/Settings'
import Profile from './pages/Profile'
import Message from './pages/Message'
import Register from './pages/Register'
import Forum from './pages/Forum'
import { ToastContainer } from 'react-toastify'
import UserRoute from './UserRoute'
import Notifications from './pages/Notifications'

function App() {
  return (
    <Router>
      <ToastContainer position='top-center' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/profile'
          element={
            <UserRoute>
              <Profile />
            </UserRoute>
          }
        />

        <Route path='/teacher' element={<Teacher />} />
        <Route path='/message' element={<Message />} />
        <Route path='/forum' element={<Forum />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/settings' element={<Settings />} />
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
