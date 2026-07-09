import React from 'react'
import Awards from './Awards';
import Education from './Education';
import Navbar from '../Navbar';
import Pricing from './Pricing';
import Stats from './Stats';
import Hero from './Hero';
import OpenAccount from '../OpenAccount';
// import Navbar from '../Navbar';
import Footer from '../Footer';

function HomePage() {
    return ( 

        <>
            {/* <Navbar/> */}
            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education/>
             <OpenAccount/>
            {/* <h1>Home Page Works</h1> */}
            {/* <Footer></Footer> */}
            
        </>
     );
}

export default HomePage;