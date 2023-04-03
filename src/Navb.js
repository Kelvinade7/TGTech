import Nav from 'react-bootstrap/Nav';
function Navb({bob}){
    return (
              <Nav className='navb '>
               <ul style={{listStyle:'none',marginTop:'-200px',marginLeft:'-5px'}}>
                <li onClick={bob}> <Nav.Link href="#toph" className='ab' style={{marginLeft:'-15px'}}>About Us</Nav.Link></li>
                <li onClick={bob}> <Nav.Link href='#service' className='ab'style={{marginLeft:'-15px'}}>Services</Nav.Link></li>
                <li onClick={bob}><Nav.Link href='#contact' className='ab' style={{marginLeft:'-15px'}}>Contacts</Nav.Link></li>
               </ul>
              </Nav>
          
      )

}
export default Navb