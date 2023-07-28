import React from 'react';
import Html from '../Assests/vscode-icons_file-type-html.jpg'
import Css from '../Assests/vscode-icons_file-type-css.jpg'
import Javascript from '../Assests/vscode-icons_file-type-js-official.jpg'
import Rlogo from '../Assests/logos_react.jpg'
import Vs from '../Assests/vscode-icons_file-type-vscode.jpg'
import Tailwind from '../Assests/vscode-icons_file-type-tailwind.jpg'
import Git from '../Assests/logos_git-icon.jpg'

const Imagegrid = () => {
    return (
    <div className=' flex flex-col justify-center align-middle  h-92 w-screen pt-10'>
      <div>
        <h1 className=' text-center font-bold font-[Poppins] text-[54px] max-sm:text-3xl max-md:text-4xl'>My Tech Stack</h1>
        <p className=' text-center font-light text-[34px] max-sm:text-xl max-md:text-2xl'>Technologies i've been working with recently</p>
      </div>
      <div className='  grid grid-flow-col justify-center align-middle pt-14 gap-10'>
        <img className=' h-[100px]' src={Html} alt="" />
        <img className=' h-[100px]' src={Css} alt="" />
        <img className=' h-[100px]' src={Javascript} alt="" />
        <img className=' h-[100px]' src={Rlogo} alt="" />
        <img className=' h-[100px]' src={Vs} alt="" />
      </div>
      <div className='  grid grid-flow-col justify-center align-middle pt-14 gap-10'>
        <img className=' h-[100px]' src={Tailwind} alt="" />
        <img className=' h-[100px]' src={Git} alt="" />
      </div>
      <br /><br />
    </div>
    );
}

export default Imagegrid;
