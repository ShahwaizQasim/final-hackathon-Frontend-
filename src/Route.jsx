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
import AdminPanel from './pages/Admin/adminpanel';
import Dashboard from './pages/Admin/dashboard';
import UserProducts from './pages/Admin/userProducts';
import ViewUsers from './pages/Admin/viewUsers';
import ViewOrders from './pages/Admin/vieworders';


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

        <Route path="/adminPanel" element={<AdminPanel />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="viewUsers" element={<ViewUsers />} />
          <Route path="viewOrders" element={<ViewOrders />} />
          <Route path="viewProducts" element={<UserProducts />} />
        </Route>

      </Routes>

    </>


  )
}

export default App
