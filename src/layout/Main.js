import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navigation from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;