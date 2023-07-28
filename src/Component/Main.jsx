import React from 'react';
import Aboutme from './Aboutme';
import Imagegrid from './Imagegrid';
import Backgroundpic from './Backgroundpic';
import Project from './Project';
import Contact from './Contact';

const Main = () => {
    return (
        <div>
            <Aboutme/>
            <Backgroundpic/>
            <Imagegrid/>
            <Project/>
            <Contact/>
            <Backgroundpic/>
            
        </div>
    );
}

export default Main;
