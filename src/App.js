import React from 'react'
import { GlobalProvider } from './Context/GlobalContext'
import { StudentProvider } from './Context/StudentContext'
import Routes from './Layout/Routes'

const App =()=>{

  return(
    <>

   <GlobalProvider>
     <Routes/>
   </GlobalProvider>

   <StudentProvider>
     
   </StudentProvider>

  </>

  )
  
}

export default App