import React from 'react';
import Nav from './Nav';
import Booking from './Booking';

const Header = () => {
    return (
        <div className=' h-[100svh]  max-sm:w-screen w-full bg-orange-500'>
           <Nav/> 
           <Booking/>
        </div>
    );
}

export default Header;
