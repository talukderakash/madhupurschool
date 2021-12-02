import React from "react";
import { BrowserRouter ,Switch ,Route } from "react-router-dom";
import Footer from "../../../Footer/Footer";
import Header from "../../../Header/Header";

import Service2 from "../Service2/Service2";


const Home =() =>{
    return(
        <div>
            
                        <Header></Header>
                        <Service2></Service2>
                        <Footer></Footer>
                    
        </div>
    );
};
export default Home;