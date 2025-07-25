import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Section from '../Components/Section';    
const Layout = ({children}) => {
    return (  
        <div>
            <Header />
            
            {children}
            <Section/>

            <Footer />
        
        
        </div>

    );
}
 
export default Layout;