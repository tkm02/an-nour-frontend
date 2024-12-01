import React from 'react';
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="dashboard-header">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard-actions">
        <div className="notification-icon">
          <i className="fa-regular fa-bell"></i>
          <span className="notification-dot">
          </span>
        </div>
        <div className="user-info">
          <div className="parametre-icon">
            <i className="fa-solid fa-gear"></i>
          </div>

          <div className='user-nav-bar'>
            <div className="user-avatar">Admin</div>
            <div className="user-role">Administration</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default NavBar
