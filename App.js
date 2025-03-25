import React,{Component} from "react";
import logo from './onlineshop/logo.jpg';


import { BrowserRouter as Router,Route,Routes,Link } from "react-router-dom";


import Home from "./onlineshop/Home";
import Product from "./onlineshop/Product";
import Contact from "./onlineshop/Contact";
import Footer from "./onlineshop/footer";



class App extends Component{
  
  render(){
    return( 
      <Router>
       <div >
       
        <nav className="nav-bar">
         <img src={logo} alt="logo" className="logo" />
          <ul className="main-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/Product">Product</Link></li>
          

          </ul>

        </nav>
       
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/Product"element={<Product/>} ></Route>
       
       </Routes>
        
      
       
       <Footer />
       </div>
       </Router>
        
       
    )
   
       
    
  }
};

export default App;
