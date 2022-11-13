import { createContext, useState } from "react"

export const AdminContext =createContext()

function AdminContextProvider({children}) {
    const [state,setState]=useState({
        isAuth:false,
        token:null
    })


    
  const loginUser=(token)=>{
    return setState({
        ...state,
        isAuth:true,
        token
    })
    }
    
    const logoutUser=()=>{
      return  setState({
            ...state,
            isAuth:false,
            token:null
        })
    }

    return(
        <AdminContext.Provider value={{authState:state,loginUser,logoutUser}}>{children}</AdminContext.Provider>
    )


}

export default AdminContextProvider;
