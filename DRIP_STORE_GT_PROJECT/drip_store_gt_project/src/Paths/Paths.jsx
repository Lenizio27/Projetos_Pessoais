import { BrowserRouter, Route, Routes,} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Header from "../Components/Header";
import Layout from "../Pages/Layout";

const Paths = () => {
    return ( 
        <>
            <BrowserRouter>
                <Layout />
                
                <Routes>
                    <Route path="/home" element={<HomePage />}>
                        <Route />
                        <Route />
                        <Route />
                        <Route />
                        <Route />
                    </Route>
                </Routes>
            
            
            </BrowserRouter>

        </>
     );
}
 
export default Paths;