import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../../../assets/logo.svg';

import '../Navbar/Navbar.scss';

// {/* <Nav.Link as={Link} to="facebook"> <Facebook/> </Nav.Link> */} con bootstrap se importa asi el link 
    function Navbar() {
        return (


            <div className='containerNavbar'>

                <div className="logo"> 
                    <Link to="/"> <Logo/> </Link>             
                </div>
            
                <nav >
                    <ul >
                        <li><Link to= " "> About Us </Link></li>
                        <li><Link to= " "> Services </Link></li>
                        <li><Link to= " "> Contact </Link></li>
                    </ul>
                </nav>
                
            </div>


        );
        }
        
export default Navbar;

