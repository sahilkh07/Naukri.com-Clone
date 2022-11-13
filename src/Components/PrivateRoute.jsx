import {useContext} from 'react'
import { Navigate } from 'react-router-dom';
import {AdminContext} from '../Context/AdminContext'
function PrivateRoute({children}) {
    const {authState}=useContext(AdminContext)

    if(!authState.isAuth){
      return  <Navigate to='/admin-login'></Navigate>
    }
    return children
   
}

export default PrivateRoute;
