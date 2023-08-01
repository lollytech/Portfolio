import React from 'react';
import Header from './Component/Header';
import Main from './Component/Main';
import Footer from './Component/Footer';
import { Routes, Route } from 'react-router';


const App = () => {
    return (
        <div className=' h-[100svh] w-[100vw]'>
            <Routes>
                <Route path='/' element={<Header/>}></Route>
            </Routes>
          
        </div>
    );
}

export default App;
