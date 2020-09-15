import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import About from './component/about';
import Home from './component/home';
import Portfolio from './component/portfolio';
import Pricing from './component/pricing';
import Services from './component/services';
import Contact from './component/contact';
import Footer from './component/footer';
import Hero from './component/hero';

function App() {
  return (
    <>
     <Router>
 
     <Home />

   <Switch>
     
  
        <Route exact path="/Hero" component={Hero} />  
        <Route exact path="/About" component={About} />
        <Route exact path="/Services" component={Services} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/Pricing" component={Pricing} />
        <Route exact path="/Contact" component={Contact} /> 
       
          
       
    

    </Switch>
    
    <About />
    <Services />
    <Portfolio />
    <Footer />

    </Router>
    
     
    </>
  );
}

export default App;
