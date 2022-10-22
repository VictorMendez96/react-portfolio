import React from 'react';
import Navigation from '../components/Header';
import Footer from '../components/Footer';

function MainLayout ({children}) {
    return (
        <div>
            <div>
                <Navigation/>
            </div>
            <div>
                {children}
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default MainLayout;