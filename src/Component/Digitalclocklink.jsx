import React from 'react';
import Icon from '../Assests/akar-icons_link-chain (1).jpg'
import Github from '../Assests/akar-icons_github-fill.jpg'

const Digitalclocklink = () => {
    return (
        <div className=' grid grid-cols-2 '>
            <div className=' flex flex-row justify-center align-middle'>
                <img className=' h-[35%] max-md:h-[30%]' src={Icon} alt="" />
            <a className=' max-md:text-sm' href="https://lollytech.github.io/DIGITAL-CLOCK/">Live Preview</a>
            </div>
            <div className=' flex flex-row justify-center align-middle'>
                <img className=' h-[35%] max-md:h-[30%]' src={Github} alt="" />
                <a className=' max-md:text-sm' href="https://github.com/lollytech/DIGITAL-CLOCK">view Code</a>
             </div>
        </div>
    );
}

export default Digitalclocklink;
