import React from 'react';
import Nav from './Nav';
import Booking from './Booking';

const Header = () => {
    return (
        <div className=' h-[70svh] max-sm:h-[40svh] max-md:h-[45svh] max-lg:h-[50svh] max-sm:w-screen w-full bg-orange-500'>
           <Nav/> 
           <Booking/>
        </div>
    );
}

export default Header;
