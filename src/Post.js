import fou from './images/img-5.jpg'
import fiv from './images/img-6.jpg'
import six from './images/img-7.jpg'
import sev from './images/img-8.jpg'
import eig from './images/img-9.jpg'
import {Card} from 'react-bootstrap'
function Post(){
    return(
    <div style={{padding:'10px',background:'white',margin:'5px'}}>
       <div class='row'>
        <div class='col-lg-4'>
        <Card>            
                <Card.Img src={fiv} style={{width:'100%', height:'500px'}}/>
        </Card>
        </div><br/>
        <div class='col-lg-8'>
            <Card>
                <Card.Img src={six} style={{width:'100%',height:'500px'}}/>
            </Card>

        </div>
       </div>
       <div class='row' style={{marginTop:'25px'}}>
        <div class='col-lg-4'>
        <Card>            
                <Card.Img src={eig} style={{width:'100%', height:'500px'}}/>
        </Card>
        </div>
        <div class='col-lg-8'>
            <Card>
                <Card.Img src={fou} style={{width:'100%',height:'500px'}}/>
            </Card>

        </div>
       </div>
    </div>   
           
        
    
    )

}
export default Post