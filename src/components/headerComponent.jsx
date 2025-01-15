import React from "react";
import logo from '../images/logo.svg'

const Header = () =>{
    return(
        <header className="w-[80px] m-auto">
            <img className="object-cover block" src={logo} alt="logo" />
        </header>
    );
};

export default Header;