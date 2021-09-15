import React from 'react'
import { GlobalProvider } from './Context/GlobalContext'
import Routes from './Layout/Routes'

const App =()=>{

  return(
    <>

   <GlobalProvider>
     <Routes/>
   </GlobalProvider>

  </>

  )
  
}

export default App