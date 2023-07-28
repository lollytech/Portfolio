import React from 'react';
import Header from './Component/Header';
import Main from './Component/Main';
import Footer from './Component/Footer';


const App = () => {
    return (
        <div className=' h-[100svh] w-[100vw]'>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
