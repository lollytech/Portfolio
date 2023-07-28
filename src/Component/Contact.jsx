import React from 'react';
import twitter from '../Assests/ant-design_twitter-circle-filled.jpg'
import linkedin from '../Assests/entypo-social_linkedin-with-circle.jpg'



const Contact = () => {
    return (
        <div className=' '>
            <div>
            <p className=' text-center font-bold font-[Poppins] text-[54px] max-sm:text-3xl max-md:text-4xl pt-6'>Contact</p>
            </div>
            <div className='flex  justify-center pt-24 gap-8 max-sm:gap-3 px-16'>
                <h1 className=' text-[20px] max-sm:text-sm max-md:text-xl font-semibold '>+2348189366238</h1>
                <h1 className=' text-[20px] max-sm:text-sm max-md:text-xl font-semibold '>adexshuksy@gmail.com</h1>
                <li className=' list-none'><img src={twitter} alt="" /></li> 
                <li className=' list-none'><img src={linkedin} alt="" /></li>
                <br /><br /><br />
            </div>
          
        </div>
        
    );
}

export default Contact;
