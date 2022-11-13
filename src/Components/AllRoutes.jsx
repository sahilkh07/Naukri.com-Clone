import React from 'react'
import {Route,Routes} from 'react-router-dom'
import SearchPage from '../SearchPage/SearchPage'
import SmallCards from '../HomePage/SmallCards'
import SearchBar from '../HomePage/SearchBar'
import Login from '../LoginPage/Login'
import Register from '../RegisterPage/Register'
import LoginAdmin from '../AdminPage/LoginAdmin'
import AdminPage from '../AdminPage/AdminPage'
import Users from '../AdminPage/Users'
import JobAdd from '../AdminPage/JobAdd'
import PrivateRoute from './PrivateRoute'
function AllRoutes() {
  return (
    <Routes>
        <Route path='/'element={<SearchBar/>}></Route>
        <Route path='/jobs' element={<SearchPage/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/admin-login' element={<LoginAdmin/>}></Route>
        <Route path='/admin-page' element={<PrivateRoute><AdminPage/></PrivateRoute>}></Route>
        <Route path='/users' element={<PrivateRoute><Users/></PrivateRoute>}></Route>
        <Route path='/add-jobs' element={<PrivateRoute><JobAdd/></PrivateRoute>}></Route>
    </Routes>
  )
}

export default AllRoutes