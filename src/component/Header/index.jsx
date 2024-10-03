import React from 'react';

const Header = () => {
  return (
        <header className="bg-surface-primary border-bottom pt-4 pb-4">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                
                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li>
                        <a href="#" className="btn d-inline-flex btn-sm btn-neutral border-base mx-1" aria-label="Edit">
                            <i className="bi bi-list"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="btn d-inline-flex btn-sm btn-neutral border-base mx-1" aria-label="Edit">
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="btn d-inline-flex btn-sm btn-warning mx-1" aria-label="Manage">
                            <span className="pe-2">
                                <i className="bi bi-gear-wide-connected"></i>
                            </span>
                            <span>Manage</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="btn d-inline-flex btn-sm btn-neutral border-base mx-1" aria-label="Edit">
                            <i className="bi bi-chat-left"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="btn d-inline-flex btn-sm btn-neutral border-base mx-1" aria-label="Edit">
                            <i className="bi bi-envelope"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="btn d-inline-flex btn-sm btn-neutral border-base mx-1" aria-label="Edit">
                            <i className="bi bi-calendar"></i>
                        </a>
                    </li>
                </ul>
                <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 w-100" role="search">
                    <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                </form>
                <div className="dropdown text-end mx-3">
                    <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/> 
                    </a>
                    <ul className="dropdown-menu text-small">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
