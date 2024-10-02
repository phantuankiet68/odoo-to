import React from 'react';

import MenuSideBar from '../Menu/index'

function Sidebar() {
  return (
    <nav className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
        <div className="container-fluid">
            <button className="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="/">
                <h3 className="text-success">
                <img src="https://tse4.mm.bing.net/th?id=OIP.MQz9p64ZmqOu3Ogh5GFcQAHaE8&pid=Api&P=0&h=180" width="40" alt="ByteWebster Logo" />
                <span className="text-info">ODOO</span>
                </h3>
            </a>
            <div>
                
            </div>
            <div className="navbar-user d-lg-none">
                <div className="dropdown">
                    <a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div className="avatar-parent-child">
                            <img alt="Image Placeholder" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar- rounded-circle" />
                            <span className="avatar-child avatar-badge bg-success"></span>
                        </div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
                        <a href="#" className="dropdown-item">Profile</a>
                        <a href="#" className="dropdown-item">Settings</a>
                        <a href="#" className="dropdown-item">Billing</a>
                        <hr className="dropdown-divider" />
                        <a href="#" className="dropdown-item">Logout</a>
                    </div>
                </div>
            </div>
            <div className="collapse navbar-collapse" id="sidebarCollapse">

                <MenuSideBar/>
                <hr className="navbar-divider my-5 opacity-20" />
                <div className="mt-auto"></div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/logout" onclick="return confirm('Are you sure you want to logout?')">
                            <i className="bi bi-box-arrow-left"></i> Logout
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}

export default Sidebar;
