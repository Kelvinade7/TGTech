import Home from './Home';
import Navi from './Navi';
import "./Vic.css"
import {Route,Routes} from 'react-router-dom'
import Services from './Services';
import Contacts from './Contacts'
import Footer from './Footer'
import Caurosel from './Caurosel';
import React from 'react';
function App() {
  return (
    <div>
      
     <React.Fragment>
     <Navi/>
     </React.Fragment>
      <Caurosel/>
      <br/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
      </Routes>
      <br/>

     
      <Footer/>      
    </div>
  )
}


export default App;