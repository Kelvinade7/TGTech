import {Nav} from 'react-bootstrap'
import {Navbar} from 'react-bootstrap'
function Navi(){
    return (
      <Navbar bg="light" style={{color:'blue'}}>
          <Nav className="me-auto">
            <Nav.Link href="/"><h5 style={{color:'blue'}}>Home</h5></Nav.Link>
            <Nav.Link href="/services"><h5 style={{color:'blue'}}>Services</h5></Nav.Link>
            <Nav.Link href="/contacts"><h5 style={{color:'blue'}}>Contacts</h5></Nav.Link>
          </Nav>       
      </Navbar>
 )
}
export default Navi;