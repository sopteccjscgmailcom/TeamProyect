import React from 'react'
import { Cliver } from './routes/Cliver'
import { Isaac } from './routes/Isaac'
import { NavBar } from './components/NavBar'
import { HomeScreen } from './routes/HomeScreen'
import { Navigate, Route, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <>
      <NavBar></NavBar>

      <Routes>
        <Route path='/' element={<HomeScreen></HomeScreen>}></Route>
        <Route path='/Cliver' element={<Cliver></Cliver>}></Route>
        <Route path='/Isaac' element={<Isaac></Isaac>}></Route>
        {/* para conetacte al home  */}
        <Route path='/*' element={<Navigate to='/'> </Navigate>}></Route>
      </Routes>
    </>
  )
}
