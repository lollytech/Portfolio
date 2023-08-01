import React from 'react';
import Icon from '../Assests/akar-icons_link-chain__1_-removebg-preview.png'
import Github from '../Assests/akar-icons_github-fill-removebg-preview.png'

const Projectlink = () => {
    return (
        <div className=' grid grid-cols-2 '>
            <div className=' flex flex-row justify-center align-middle'>
                <img className=' h-[35%] max-md:h-[30%]' src={Icon} alt="" />
                <a className=' max-md:text-sm' href="https://radiant-arithmetic-c002c4.netlify.app">Live Preview</a>
            </div>
            <div className=' flex flex-row justify-center align-middle'>
                <img className=' h-[35%] max-md:h-[30%]' src={Github} alt="" />
                <a className=' max-md:text-sm' href="https://github.com/lollytech/BMI-CAL-PROJECT">view Code</a>
            </div>
        </div>
    );
}

export default Projectlink;
