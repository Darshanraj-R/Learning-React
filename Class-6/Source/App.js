import React, { useState }  from "react";
import ReactDOM from "react-dom/client"
import Footer from "./Componets/Footer";
import Header from "./Componets/Header";

import {Body} from "./Componets/Body";
import CarouselBar from "./Componets/CarouselBar";


/**
 * Header
 *   --logo
 *   --search bar
 *   --icons [home,helps,cart]
 * 
 * Body
 *  --cards
 *    * photo
 *    * food name
 *    * Cusinnes
 *    *location
 *    *rating
 */


const root = ReactDOM.createRoot(document.getElementById("root"))


const App = () => {
  return (
   <>
        <Header/>

          <Body/>        
            <Footer/>
    </>
  )
}

const Practice = () => (
      
        <>
         <>
         <h1>Hi</h1>
         </>
        <>
        <h1>Hi</h1>
        </>
        </>
        
)




root.render(<App/>)