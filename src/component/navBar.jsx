import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';


const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">SFC Movies</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/movies">Movies </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/customers">Customers</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Rentals">Rentals</NavLink>
                </li>
                
                </ul>
            </div>
            </nav>
//         <div style={{padding: '0 0 20px'}}>
//             <nav className="navbar navbar-light bg-primary">
            
//                 <div> 
//                      <NavLink style={{color: 'white', padding: '30px 30px 10px 30px'}}className="navbar-brand" to="/">Home</NavLink>
//                      <NavLink style={{color: 'white', padding: '30px 30px 10px 30px'}} className="navbar-brand" to="/movies">Movies</NavLink>
//                      <NavLink style={{color: 'white', padding: '30px 30px 10px 30px'}}className="navbar-brand" to="/product">Product </NavLink>
//                      <NavLink style={{color: 'white' , padding: '30px 30px 10px 30px'}}className="navbar-brand" to="/admin">Dashboard</NavLink>
//                 </div>
        
//         </nav> 
//   </div>
);
}
 
export default NavBar;