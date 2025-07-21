import { BrowserRouter, Route, Routes,} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Header from "../Components/Header";
import Layout from "../Pages/Layout";
import ProductListing from "../Components/ProductListing";
import ProductListingPage from "../Pages/ProductListingPage";

const Paths = () => {
    return ( 
        <>
            <BrowserRouter>
                
                <Routes>
                    
                        <Route path="/" element={<HomePage />}/>
                        <Route path="/productListingPage" element={<ProductListingPage />}/>
                        <Route />
                        <Route />
                        <Route />
                        <Route />
                    
                </Routes>
            
            
            </BrowserRouter>

        </>
     );
}
 
export default Paths;