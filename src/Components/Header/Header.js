import React from 'react';
import logo from '../img/scitp-logo.png'
import './Header.css';

const Header = () => {
    return (
        <div class="container">
            <div>
            <img clssName="m-10" src={logo} alt=""/>
            </div>
       
       
        
                {/* <div className=" container bg-primary bg-gradient">
           <h1 className="text-white">Welcome,Society of Chittagong IT Professonals </h1>
           <h1 className="text-white">Welcome,Society of Chittagong IT Professonals </h1>
           <h1 className="text-white">Welcome,Society of Chittagong IT Professonals </h1>

        
            </div> */}

            <nav> 
             <div className="nav">
                <a href='/'>Home</a>
                <a href='/'>About Us</a>
                <a href='/'>Contact Us</a>
                <a href='/'>Becomde a Member</a>
                <a href='/'>Registration</a>
                </div>
                
                 </nav>
                 <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1>Welcome,Compufix IT Fairs</h1>      
    <h2 className="text-primary">Our Annul budget is: $7000  </h2>
  </div>
</div>


        </div>
    );
};

export default Header;