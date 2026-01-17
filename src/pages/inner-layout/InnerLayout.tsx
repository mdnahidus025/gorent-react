import React from 'react';
import Header from '../../sections/common/Header'; 
import Gallery from '../../sections/common/Gallery';
import Footer from '../../sections/common/Footer';
import StrickyHeader from '../../sections/common/StrickyHeader';
import { Outlet } from 'react-router';

const InnerLayout: React.FC = () => {
    return (
        <div className='page-wrapper'>
            <Header /> 
            <Outlet />
            <Gallery />
            <Footer />
            <StrickyHeader />
        </div>
    );
};

export default InnerLayout;