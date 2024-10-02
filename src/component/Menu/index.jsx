import React, { useState } from 'react';

const MenuSidebar = () => {
    const [isJobsDropdownOpen, setIsJobsDropdownOpen] = useState(false);
    const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);

    const handleJobsDropdownClick = (e) => {
        e.preventDefault();
        setIsJobsDropdownOpen(!isJobsDropdownOpen);
        setIsCompanyDropdownOpen(false); // Đảm bảo dropdown "Công ty" sẽ đóng
    };

    const handleCompanyDropdownClick = (e) => {
        e.preventDefault();
        setIsCompanyDropdownOpen(!isCompanyDropdownOpen);
        setIsJobsDropdownOpen(false); // Đảm bảo dropdown "Công việc" sẽ đóng
    };

    return (
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="/dashboard">
                    <i className="bi bi-house"></i> Quản trị
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/calendar">
                    <i className="bi bi-calendar"></i> Calendar
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/chat">
                    <i className="bi bi-chat"></i> Tin nhắn
                    <span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">6</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/user">
                    <i className="bi bi-people"></i> Người dùng
                </a>
            </li>
            <li className="nav-item dropdown">
                <a 
                    className="nav-link dropdown-toggle" 
                    href="#" 
                    id="jobsDropdown" 
                    onClick={handleJobsDropdownClick} 
                    role="button"
                    aria-expanded={isJobsDropdownOpen}
                >
                    <i className="bi bi-briefcase"></i> Công việc
                </a>
                <ul className={`dropdown-menu ${isJobsDropdownOpen ? 'show' : ''}`} aria-labelledby="jobsDropdown">
                    <li><a className="dropdown-item" href="/posts/all">Tất cả Posts</a></li>
                    <li><a className="dropdown-item" href="/posts/create">Tạo Post mới</a></li>
                    <li><a className="dropdown-item" href="/posts/manage">Quản lý Posts</a></li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <a 
                    className="nav-link dropdown-toggle" 
                    href="#" 
                    id="companyDropdown" 
                    onClick={handleCompanyDropdownClick} 
                    role="button" 
                    aria-expanded={isCompanyDropdownOpen}
                >
                    <i className="bi bi-briefcase"></i> Công ty
                </a>
                <ul className={`dropdown-menu ${isCompanyDropdownOpen ? 'show' : ''}`} aria-labelledby="companyDropdown">
                    <li><a className="dropdown-item" href="/company/all">Tất cả Công ty</a></li>
                    <li><a className="dropdown-item" href="/company/create">Tạo Công ty mới</a></li>
                    <li><a className="dropdown-item" href="/company/manage">Quản lý Công ty</a></li>
                </ul>
            </li>
        </ul>
    );
};

export default MenuSidebar;
