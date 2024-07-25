import React from 'react';//importing react library from react into this js file
import { Outlet } from 'react-router-dom';
//outlet is used to render the content of nested routes
import Header from "./Header";
import Footer from "./Footer";

//arrowfunction
const Main = () => {
  return (
    <div>
      {/* rendering the header,footer component and outlet */}
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
};

export default Main;
