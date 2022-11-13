import React, { createContext, useState } from 'react'

export const NewContext=createContext()
function NewContextProvider({children}) {
    const [query,setState]=useState('')
  return (
    <NewContext.Provider value={{query,setState}}>{children}</NewContext.Provider>
    
  )
}

export default NewContextProvider