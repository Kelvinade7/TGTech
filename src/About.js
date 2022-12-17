import {Card} from 'react-bootstrap'
function About(){
    return(
        <div >
              <Card>
                <Card.Title>
                <h1 style={{color:'black',textAlign:'center',fontFamily:'fantasy'}}>About Us</h1>
                </Card.Title>
                <Card.Text className='ko' >
                <p style={{color:'black',marginBottom:'-1px'}}>We are a registered business enterprise,and we render various  services like</p>
                <p style={{marginLeft:'2px',marginBottom:'-1px'}}>  -Event Decoration & Planning</p>
                <p style={{marginLeft:'2px',marginBottom:'-1px'}}>-Rentals(Chairs,tables,fabric,Napkins etc)</p>
                <p style={{marginLeft:'2px',marginBottom:'-1px'}}>-Office Setting & Decoration</p>
                <p style={{marginLeft:'2px',marginBottom:'-1px'}}>-Sales of Home Accessories:Curtains,Bedsheets,Duvet,etc</p>
                <p style={{marginLeft:'2px',marginBottom:'-1px'}}>-Training & Other Human Rendering Services</p>
                </Card.Text>
            </Card> <br/>
            <Card>
             <Card.Title style={{textAlign:'center',marginBottom:'-2px'}}>
             <h3>To know more about us please go to our service page</h3>   
             </Card.Title>
             <Card.Body  >
            
             </Card.Body>  
            </Card>        
         </div>
    )
}
export default About;