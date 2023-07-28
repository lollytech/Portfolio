import React from 'react';
import Image from '../Assests/IMG_4337.JPG'
import twitter from '../Assests/ant-design_twitter-circle-filled.jpg'
import linkedin from '../Assests/entypo-social_linkedin-with-circle.jpg'


const Booking = () => {
    return (
        <div className=' flex flex-row justify-around align-middle'>
            <div className=' h-[20%] w-[20%] pt-5 '>
                <img className=' border border-solid border-white' src={Image} alt="" />
            </div>
            <div className='  '>
                <h1 className=' text-[50px] max-sm:text-xl max-md:text-2xl max-lg:text-3xl text-white font-extrabold  pt-4  font-[Poppins]'> Hi 👋, </h1>
                <h1 className=' text-[50px] max-sm:text-xl max-md:text-2xl max-lg:text-3xl text-white font-extrabold ] font-[Poppins]'> My Name is </h1>
                <h1 className=' text-[50px] max-sm:text-xl max-md:text-2xl max-lg:text-3xl text-white font-extrabold font-[Poppins]'> Omolara </h1>
                <p className=' text-[50px] max-sm:text-xl max-md:text-2xl max-lg:text-3xl text-white font-extrabold  font-[Poppins]'>I am a Web Developer</p>
                <br />
            <div className=' bg-stone-400 h-10 w-44 flex align-middle justify-around rounded' >
                <button className=' font-bold text-sm text-white' >HIRE ME!</button>
            </div>
            <div className=' flex flex-row pt-2 max-md:pt-1 gap-2'>
               <a href="https://twitter.com/Dev_lollytech"><img src={twitter} alt="" /></a> 
                <a href="https://www.linkedin.com/in/adebayo-omolara-3034b2130/"><img src={linkedin} alt="" /></a>
                
            </div>
                
            </div>
        </div> 
    );
}

export default Booking;
