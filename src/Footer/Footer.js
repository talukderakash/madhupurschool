import React from "react";
import "./Footer.css";

const Footer = () =>{
    return(
       <div className="footer">
         <div className="heading">
         <h1>Madhupur School</h1>
         </div>
         <div className="Footer-About">
           <div>
             <a href="https://talukderakash.github.io/personalwebsite/"><h3>Contact</h3></a>
             <h5>Principal </h5>
             <p>Madhupur School</p>
           </div>
           <div>
             <h3>Address</h3>
             <p>State:hironBazar </p>
             <p>Mirzabari Road</p>
             <p>Madhupur Tangail</p>
           </div>
           <div>
             <h3>ACADEMICS</h3>
             <p>Natural Science</p>
             <p> Histry</p>
             <p>Continuing Education</p> 
           </div>
           <div>
             <h3>
               On School
             </h3>
             <p>Arts and Culture</p>
             <p>Athletic</p>
             <p>student Group</p>
           </div>
         </div>
       </div> 
    );
};
export default Footer;