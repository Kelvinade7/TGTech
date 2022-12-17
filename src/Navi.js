import{Link} from 'react-router-dom'
import{useState} from 'react'
import Fall from './Fall'
import {FaBars,FaTimes} from 'react-icons/fa' 
function Navi(){
  const [tf,stf] =  useState(false)
  function block(){
    stf(tf=>!tf)
  }
  let t = tf ? <FaTimes/>:<FaBars/>
  let po =tf ? <Fall/> :''
    return (
   <div>
     <header>
      <h3 style={{color:'blue'}}>DORIS-D</h3>
      <nav className='nav'>
        <Link  className='Link' to={'/'}>Home</Link>
        <Link className='Link' to={'/services'}>Services</Link>
        <Link className='Link' to={'/contacts'}>Contacts</Link>
      </nav>
      <button className='nav-btn'onClick={block}>{t}</button>
    </header>
    {po}  

   </div>
 )
}
export default Navi;