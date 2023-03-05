import Nav from 'react-bootstrap/Nav';
function Navb(){
    return (
              <Nav className='navb '>
               <ul style={{listStyle:'none',marginTop:'-20px'}}>
                <li> <Nav.Link href="#toph" className='ab'>About Us</Nav.Link></li>
                <li> <Nav.Link href='#service' className='ab'>Services</Nav.Link></li>
                <li><Nav.Link href='#contact' className='ab'>Contacts</Nav.Link></li>
               </ul>
              </Nav>
          
      )

}
export default Navb