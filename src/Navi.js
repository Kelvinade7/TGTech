import {Nav} from 'react-bootstrap'
import {Navbar} from 'react-bootstrap'
import {Container} from'react-bootstrap'
function Navi(){
    
    return(
        <Nav style={{width:'100%',marginTop:'-5px',backgroundColor:'white'}}>
            <Container  style={{backgroundColor:'white', textAlign:'center'}}>
                
       
            <Navbar bg='light' NavbarExpend='sm' style={{width:'100%', padding:'2px'}}>        
          <Nav.Link style={{marginLeft:'-15px'}} href='/'><h5>Home</h5></Nav.Link>
          <Nav.Link style={{marginLeft:'-20px'}}  href='/services'><h5 >Sevices</h5></Nav.Link>
          <Nav.Link style={{marginLeft:'-20px'}}  href='/contacts'><h5>Contacts</h5></Nav.Link>                    
         </Navbar>
        
            </Container>
            </Nav>
         
       
       
      
       
    )
}
export default Navi;