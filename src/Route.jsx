import './App.css'
import { Navigate, Outlet, Route, Routes } from "react-router";
import Home from './pages/home'
import NotFound from './pages/NotFound';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Login from './pages/Auth/login';
import SignupForm from './pages/Auth/signup';
import LoanRequestForm from './pages/LoanForm/loanForm';
import LoanForm from './pages/LoanForm/loanForm';


function App() {

  const { user } = useContext(AuthContext);
  console.log("user in routes", user);


  return (
    <>
      <Routes>
        <Route path='/signUp' element={<SignupForm />} />
        <Route path='/signIn' element={user ? <Navigate to={'/'} /> : <Login />} />
        <Route path='/' element={!user ? <Navigate to={'/signIn'} /> : <Home />} />
        {/* <Route path='/loanForm' element={!user ? <Navigate to={'/signIn'} /> : <LoanForm/>} /> */}
        <Route path='/loanForm' element={<LoanForm />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </>


  )
}

export default App
