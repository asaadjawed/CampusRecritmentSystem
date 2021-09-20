import React from 'react'
import { GlobalProvider } from './Context/GlobalContext'
import { StudentProvider } from './Context/StudentContext'
import { CompanyProvider } from './Context/CompanyContext'
import Routes from './Layout/Routes'

const App = () => {

  return (
    <>

      <GlobalProvider>
        <StudentProvider>
          <CompanyProvider>

            <Routes />
            
          </CompanyProvider>
        </StudentProvider>

      </GlobalProvider>





    </>

  )

}

export default App