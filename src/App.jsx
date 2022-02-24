import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import {
    HOME_PAGE,
    LOGIN_PAGE,
    REGISTER_PAGE   
} from './routingPaths'

// import privateRoute from './services/auth/privateRoute'

import PageLoader from './components/core/pageLoader/pageLoader'

const Login = lazy(() => import("./components/authPages/LoginPage/Login"));
const Register = lazy(() => import("./components/authPages/RegisterPage/Register"))
const Home = lazy(() => import("./components/views/home/Home"))

const App = () =>{
    return(
        <Suspense fallback={ <PageLoader /> } >
            <Router>
                <Routes>
                    <Route path={LOGIN_PAGE} exact element={<Login />} />
                    <Route path={REGISTER_PAGE} exact element={<Register />} />
                    <Route path={HOME_PAGE} exact element={<Home />} />
                </Routes>
            </Router>
       </Suspense>
    )
}

export default App