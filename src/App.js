import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Menu from './Pages/Menu'
import ContainerComp from './Pages/Container'


function App() {
  return (
      <BrowserRouter>
         <Menu/>
         <ContainerComp/>
      </BrowserRouter>
  )
}

export default App