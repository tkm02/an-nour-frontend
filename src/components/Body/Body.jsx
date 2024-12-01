import React from 'react'
import Accueil from '../Accueil/Accueil'
import Seminariste from '../Seminariste/Seminariste'
import Scientifique from '../Scientifique/Scientifique'
import Sante from '../Sante/Sante'
import { Route, Routes } from "react-router-dom";


const Body = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Accueil /> }/>
        <Route path='/seminariste' element={ <Seminariste /> }/>
        <Route path='/scientifique' element={ <Scientifique /> }/>
        <Route path='/sante' element={ <Sante /> }/>
      </Routes>
    </div>
  )
}

export default Body
