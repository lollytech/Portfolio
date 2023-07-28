import React from 'react';


const Nav = () => {


    return (
        <div className=' flex flex-row justify-around align-middle'> 
            <div className=' h-[15%] w-[15%] pb-5 '>
                <h1 className=' font-extrabold text-2xl pt-12 font-mono text-white'>MEETME</h1>
            </div>
            <ul className=' flex flex-row justify-between gap-8 pt-12 max-sm:text-sm max-sm:gap-3'>
                <a className=' font-semibold text-white ' href="">Home</a>
                <a className=' font-semibold text-white ' href="">About me</a>
                <a className=' font-semibold text-white ' href="">Tech Stack</a>
                <a className=' font-semibold text-white ' href="">Project</a>
                <a className=' font-semibold text-white ' href="">Contact</a>
            </ul>
        </div>
    );
}

export default Nav;
