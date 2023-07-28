import React from 'react';
import Projectlink from './Projectlink';
import Secondlink from './Secondlink';
import Todolink from './Todolink';
import Counterlink from './Counterlink';
import Digitalclocklink from './Digitalclocklink';
import Agecallink from './Agecallink';


const Project = () => {
    return (
        <div className=' bg-orange-500  '>
            <div className=' max-md:pt-3 max-sm:pt-2 ' >
            <h1 className=' text-center font-bold font-[Poppins] text-[54px] max-sm:text-3xl max-md:text-4xl text-white'>Projects</h1>
            <p className=' text-center font-light text-[34px] text-white max-sm:text-xl max-md:text-2xl'>Things i've built so far</p>
            </div>
            <div className=' pt-5 flex flex-row max-sm:flex-col justify-center align-middle gap-6'>
                <div className=' bg-slate-200  h-[22rem] max-sm:h-[15rem] max-md:h-[19rem] w-[20rem] max-sm:[10rem] rounded-3xl shadow-[4px_4px_4px_rgba(0,0,0,0.9)] flex justify-center align-middle flex-col'>
                    <div className=' flex justify-center align-middle flex-col  pt-16 max-sm:pt-6 max-md:pt-7'>
                            <h1 className=' text-center font-extrabold text-[30px] max-sm:text-2xl max-md:text-2xl font-[Poppins]'>BMI </h1>
                            <h1 className=' text-center font-extrabold text-[30px] max-sm:text-2xl max-md:text-2xl font-[Poppins]'>CALCULATOR</h1>
                    </div>
                    <div>
                        <h1 className=' text-orange-400 text-sm text-center font-semibold pt-7'>Tech Stack: HTML, Javascript, Tailwind, React</h1>
                        <br /><br />
                    </div>
                    <div>
                        <Projectlink/>
                    </div>
                </div>
                <div className=' bg-slate-200  h-[22rem] max-sm:h-[15rem] max-md:h-[19rem]  w-[20rem] max-sm:[10rem] rounded-3xl shadow-[4px_4px_4px_rgba(0,0,0,0.9)]  '>
                <div className=' flex justify-center align-middle flex-col pt-16 max-sm:pt-6 max-md:pt-7'>
                            <h1 className=' text-center font-extrabold text-[30px] max-sm:text-2xl max-md:text-2xl font-[Poppins]'>WEATHER </h1>
                            <h1 className=' text-center font-extrabold text-[30px] max-sm:text-2xl max-md:text-2xl font-[Poppins]'>APP</h1>
                    </div>
                    <div>
                        <h1 className=' text-orange-400 text-sm text-center font-semibold pt-7'>Tech Stack: HTML, CSS, Javascript</h1>
                        <br /><br />
                    </div>
                    <div>
                        <Secondlink/>
                    </div>
                </div>
                <div className=' bg-slate-200  h-[22rem] max-sm:h-[15rem] max-md:h-[19rem] w-[20rem] max-sm:[10rem] rounded-3xl shadow-[4px_4px_4px_rgba(0,0,0,0.9)]  '>
                    <div className=' flex justify-center align-middle flex-col pt-16 max-sm:pt-6 max-md:pt-7'>
                            <h1 className=' text-center font-extrabold text-[30px] max-sm:text-2xl max-md:text-2xl font-[Poppins]'>TO-DO LIST </h1>
                            <h1 className=' text-center font-extrabold text-[30px] max-sm:text-2xl max-md:text-2xl font-[Poppins]'>APP</h1>
                    </div>
                    <div>
                        <h1 className=' text-orange-400 text-sm text-center font-semibold pt-7'>Tech Stack: HTML, Javascript, Tailwind, React</h1>
                        <br /><br />
                    </div>
                    <div>
                        <Todolink/>
                    </div>
                </div>
            </div>
            <div className=' pt-5 flex flex-row max-sm:flex-col justify-center align-middle gap-6'>
                <div className=' bg-slate-200  h-[22rem] max-sm:h-[15rem] max-md:h-[19rem] w-[20rem] max-sm:[10rem] rounded-3xl shadow-[4px_4px_4px_rgba(0,0,0,0.9)]'>
                    <div className=' flex justify-center align-middle flex-col pt-16 max-sm:pt-6 max-md:pt-7'>
                            <h1 className=' text-center font-extrabold text-[30px] max-sm:text-2xl max-md:text-2xl font-[Poppins]'>ISLAMIC COUNTER </h1>
                            <h1 className=' text-center font-extrabold text-[30px] max-sm:text-2xl max-md:text-2xl font-[Poppins]'>APP</h1>
                    </div>
                    <div>
                        <h1 className=' text-orange-400 text-sm text-center font-semibold pt-7'>Tech Stack: HTML, CSS, Javascript </h1>
                        <br /><br />
                    </div>
                    <div>
                        <Counterlink/>
                    </div>
                </div>
                <div className=' bg-slate-200  h-[22rem] max-sm:h-[15rem] max-md:h-[19rem] w-[20rem] max-sm:[10rem] rounded-3xl shadow-[4px_4px_4px_rgba(0,0,0,0.9)]'>
                    <div className=' flex justify-center align-middle flex-col pt-16 max-sm:pt-6 max-md:pt-7'>
                        <h1 className=' text-center font-extrabold text-[30px] max-sm:text-2xl max-md:text-2xl font-[Poppins]'>DIGITAL CLOCK </h1>
                        <h1 className=' text-center font-extrabold text-[30px] max-sm:text-2xl max-md:text-2xl font-[Poppins]'>APP</h1>
                    </div>
                    <div>
                        <h1 className=' text-orange-400 text-sm text-center font-semibold pt-7'>Tech Stack: HTML, CSS, Javascript </h1>
                        <br /><br />
                    </div>
                    <div>
                        <Digitalclocklink/>
                    </div>
                </div>
                <div className=' bg-slate-200  h-[22rem] max-sm:h-[15rem] max-md:h-[19rem] w-[20rem] max-sm:[10rem] rounded-3xl shadow-[4px_4px_4px_rgba(0,0,0,0.9)]'>
                <div className=' flex justify-center align-middle flex-col pt-16 max-sm:pt-6 max-md:pt-7'>
                        <h1 className=' text-center font-extrabold text-[30px] max-sm:text-2xl max-md:text-2xl font-[Poppins]'>AGE CALCULATOR </h1>
                        <h1 className=' text-center font-extrabold text-[30px] max-sm:text-2xl max-md:text-2xl font-[Poppins]'>APP</h1>
                    </div>
                    <div>
                        <h1 className=' text-orange-400 text-sm text-center font-semibold pt-7'>Tech Stack: HTML, CSS, Javascript </h1>
                        <br /><br />
                    </div>
                    <div>
                        <Agecallink/>
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
}

export default Project;
