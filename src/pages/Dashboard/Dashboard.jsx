import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Aside from '../../components/Aside/Aside'
import './Dashboard.css'
import Body from '../../components/Body/Body';

const Dashboard = () => {
  return (
    <div className='container-tableau-de-bord'>
      <div className='first-row-dashboard'>
        <Aside />
      </div>
      <div className='row-tableau-de-bord'>
        <NavBar />
        <Body />
      </div>
    </div>
  )
}

export default Dashboard
