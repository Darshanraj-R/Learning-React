import React, { useState }  from "react";
import ReactDOM from "react-dom/client"
import Footer from "./Components/Footer";
import Header from "./Components/Header";

import ProfileClass from "./Components/ProfileClass";
import Profile  from "./Components/Profile";
import Cart from "./Components/Cart";
import {Body} from "./Components/Body";
import Contact from "./Components/Contact";
import { Outlet, createBrowserRouter } from "react-router-dom";
import ErrorHandel from "./Components/ErrorHandel";
import { RouterProvider } from "react-router-dom";
import ReacturantDeatail from './Components/ResturantDetail'

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
         <Outlet/>      
            <Footer/>
    </>
  )
}



const Router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorHandel/>,
    children: [
      {
        path: '/',
        element: <Body/>,
      },
      {
        path: '/contact',
        element: <ProfileClass/>,
        // children:[
        //   {
        //     path: 'profile',
        //     element: <ProfileClass/>
        //   }
        // ]
      },
      {
        path : '/rest/:id',
        element : <ReacturantDeatail/>
      },
      {
        path:'/cart',
        element : <Cart/>,
      }
    ]
  }
])




root.render(<RouterProvider  router={Router}/>)