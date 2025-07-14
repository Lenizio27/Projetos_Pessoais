import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
const Layout = ({children}) => {
    return (  
        <div className='col-12 md:col-12'>
            <Header />

            {children}

            <Footer />
        
        
        </div>

    );
}
 
export default Layout;