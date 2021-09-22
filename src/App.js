import React from 'react'
import { GlobalProvider } from './Context/GlobalContext'
import { StudentProvider } from './Context/StudentContext'
import { CompanyProvider } from './Context/CompanyContext'
import Routes from './Layout/Routes'
import { AdminContext } from './Context/AdminContext'

const App = () => {

  return (
    <>

      <GlobalProvider>
        <StudentProvider>
          <CompanyProvider>
            <AdminContext>

              <Routes />

            </AdminContext>
          </CompanyProvider>
        </StudentProvider>

      </GlobalProvider>





    </>

  )

}

export default App