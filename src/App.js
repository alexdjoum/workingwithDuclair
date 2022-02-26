import { 
  BrowserRouter as Router,
  Routes,
  Route, Redirect 
} from "react-router-dom";

import Home from "./pages/Home"
import Teacher from "./pages/Teacher"
import Contact from "./pages/Contact"
import Events from "./pages/Events"
import Register from "./pages/Register"
import { ToastContainer } from "react-toastify"
import UserRoute from "./UserRoute";


function App() {
  return (
    <Router>
      <ToastContainer position="top-center" />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/teacher' element={<Teacher />} />
        <Route path='/contact' element={<Contact />} />
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
  );
}

export default App;
