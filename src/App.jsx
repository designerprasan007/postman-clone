import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from "./components/authPages/LoginPage/Login";
import Register from "./components/authPages/RegisterPage/Register";
const App = () =>{
    return(
       <Router>
           <Routes>
               <Route path="/login" exact element={<Login />}>
               </Route>
               <Route path="/register" exact element={<Register />} >
               </Route>
           </Routes>
       </Router>
    )
}

export default App