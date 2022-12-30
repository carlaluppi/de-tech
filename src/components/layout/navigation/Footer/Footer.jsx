import React from 'react';



import {ReactComponent as Facebook} from '../../../../assets/facebook.svg';
import {ReactComponent as Instagram} from '../../../../assets/instagram.svg'; 
// import Grid from '../../../../assets/grid2.svg'; 

import '../Footer/Footer.scss';
// {/* <Nav.Link as={Link} to="facebook"> <Facebook/> </Nav.Link> */} con bootstrap se importa asi el link 
    function Footer() {
        return (


            <div className='containerFooter'>

                {/* <img className="img-grid" src={Grid} alt="grid" ></img> */}

                <p> © De-Tech 2022. </p>
                    
                <div className='redes'>
                    <div href="https://www.facebook.com/" target="_blank"> <Facebook/> </div>
                    <div href="https://www.instagram.com/" target="_blank"> <Instagram/> </div>
                </div>

            </div>



        );
        }
        
export default Footer;

