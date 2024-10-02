import React from 'react';

const Header = props => {
  return (
        <header className="bg-surface-primary border-bottom pt-4 pb-4">
            <div className="container-fluid">
                <div className="mb-npx">
                    <div className="row align-items-center">
                        <div className="col-sm-6 col-12">
                        <button className="mx-2">
                            <i className="bi bi-pencil fs-2"></i> 
                        </button>
                            <button><i className="bi bi-pencil"></i></button>
                        </div>
                        <div className="col-sm-6 col-12 text-sm-end">
                            <div className="mx-n1">
                                <a href="#" className="btn d-inline-flex btn-sm btn-neutral border-base mx-1" aria-label="Edit">
                                    <span className="pe-2">
                                        <i className="bi bi-pencil"></i>
                                    </span>
                                    <span>Edit</span>
                                </a>
                                <a href="#" className="btn d-inline-flex btn-sm btn-primary mx-1" aria-label="Create">
                                    <span className="pe-2">
                                        <i className="bi bi-plus"></i>
                                    </span>
                                    <span>Create</span>
                                </a>
                                <a href="#" className="btn d-inline-flex btn-sm btn-warning mx-1" aria-label="Manage">
                                    <span className="pe-2">
                                        <i className="bi bi-gear-wide-connected"></i>
                                    </span>
                                    <span>Manage</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
