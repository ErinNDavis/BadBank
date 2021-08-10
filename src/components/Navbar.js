import React from 'react';
import "./Navbar.css";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">BadBank</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav ms-auto mb-2 mb-1g-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#/CreateAccount/">Create Account
                            <span className="tooltiptext">Create an account with our bank. </span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/deposit/">Deposit
                            <span className="tooltiptext">Deposit cash from your account. </span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/withdraw/">Withdraw
                            <span className="tooltiptext">Withdraw cash from your account. </span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/alldata/">All Data
                            <span className="tooltiptext">View your account information. </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    )
}

export default NavBar;