import {Card} from 'react-bootstrap'
import nin from './images/img-10.jpg'
import wed from './images/img-11.jpg'
import ele from './images/img-12.jpg'
import twe from './images/img-14.jpg'
import thi from './images/img-15.jpg'
function Services(){
    return(
        <div style={{color:'blue'}}>
            <h1 style={{textAlign:'center',color:'blue'}}>Our Services</h1>
            <div class='row' style={{padding:'5px'}}>
                <div class='col-lg-12'>
                    <Card>
                        <Card.Title>
                            <h2 style={{textAlign:'center'}}>Event Decoration & Planning</h2>
                        </Card.Title>
                        <Card.Body>
                            <Card.Text style={{fontWeight:'30px',fontSize:'20px'}}>
                                When it comes to your Events ,we render the best services for your 
                            </Card.Text>  <br/>
                                <div class='row'>
                                    <div class='col-lg-4'>
                                        <Card style={{padding:'4px',height:'450px'}}>
                                            <Card.Title>
                                                <h3 style={{textAlign:'center'}}>Wedding Events</h3>
                                            </Card.Title>
                                            <Card.Img src={nin} style={{width:'100%',height:'90%'}}/><br/>
                                            <Card.Text style={{padding:'2px'}}>
                                                {/* <p style={{fontSize:'28px',marginTop:'5px'}}>We Decorate and also help you in Planning for your event</p> */}
                                            </Card.Text>

                                        </Card>
                                    </div>
                                    <div class='col-lg-4'>
                                        <Card style={{padding:'4px',height:'450px'}}>
                                            <Card.Title>
                                                <h3 style={{textAlign:'center'}}>Birthday Events</h3>
                                            </Card.Title>
                                            <Card.Img src={ele} style={{width:'100%',height:'90%'}}/>

                                        </Card>
                                    </div>
                                    <div class='col-lg-4'>
                                        <Card style={{padding:'4px',height:'450px'}}>
                                            <Card.Title>
                                                <h3 style={{textAlign:'center'}}>Anniversries</h3>
                                            </Card.Title>
                                            <Card.Img src={wed} style={{width:'100%',height:'90%'}}/>

                                        </Card>
                                    </div>
                                </div><br/>
                                <div class='row'>
                                    <div class='col-lg-4'>
                                        <Card style={{padding:'4px',height:'420px'}}>
                                            <Card.Title>
                                                <h3 style={{textAlign:'center'}}>Get Togethers </h3>
                                            </Card.Title>
                                            <Card.Img src={twe} style={{width:'100%',height:'100%'}}/><br/>
                                            <Card.Text>
                                                {/* <p style={{fontSize:'28px'}}>We Decorate and also help you in Planning for your event</p> */}
                                            </Card.Text>

                                        </Card>
                                    </div>
                                    <div class='col-lg-4'>
                                        <Card style={{padding:'4px',height:'420px'}}>
                                            <Card.Title>
                                                <h3 style={{textAlign:'center'}}>Official Meetings</h3>
                                            </Card.Title>
                                            <Card.Img src={thi} style={{width:'100%',height:'100%'}}/>

                                        </Card>
                                    </div>
                                    
                                </div>
                                <br/>
                               
                            

                        </Card.Body>
                    </Card><br/><br/>
                    <center><p>AND MANY MORE</p></center>
                    {/* Rentals services */}
                    <Card>
                        <Card.Title>
                          <center><h2>Rentals</h2></center>
                        </Card.Title>
                        <Card.Text>
                            <p className='pp'>When it comes to item renting ,we are a specilist in providing good quality items and materials for rent .This includes:</p>

                        </Card.Text>
                        <div class='row'>
                            <div class='col-lg-3'>
                                <Card style={{height:'170px'}}>
                                    <Card.Header>
                                       <center><h4>Tables & Chairs</h4></center>
                                    </Card.Header>
                                    <Card.Text>
                                      <ul>
                                        <li>Tables of various sizes & types</li>
                                        <li>Plastic,Chivalry & Couple's Chairs are avaliable</li>
                                      </ul>
                                    </Card.Text>
                                </Card>
                            </div>
                            <div class='col-lg-3'>
                                <Card style={{padding:'1px',height:'170px'}}>
                                    <Card.Header>
                                       <center><h4>Fabric Materials</h4></center>
                                    </Card.Header><br/>
                                    <Card.Text>
                                        <p>Fabrics of different ,types,colors,length & texture </p>                                        
                                    </Card.Text>
                                </Card>
                            </div>
                            <div class='col-lg-3'>
                                <Card  style={{height:'170px'}}>
                                    <Card.Header>
                                      <center><h4>Table clothes & Chaircovers</h4></center>
                                    </Card.Header><br/>
                                    <Card.Text>
                                        <p style={{textAlign:'center'}}>Are also avaliable for rent</p>                                        
                                    </Card.Text>
                                </Card>
                            </div>
                            <div class='col-lg-3'>
                                <Card style={{padding:'5px',height:'170px'}}>
                                    <Card.Header>
                                        <center><h2>Flowers</h2></center>
                                    </Card.Header><br/>
                                    <Card.Text>
                                       <center> <p style={{fontSize:'18px'}}>Of all kinds  </p></center>
                                    </Card.Text>
                                </Card>
                            </div>
                        </div><br/><br/><br/>
                        <Card>
                            <Card.Text>
                            <center>And Many Many More</center>
                            </Card.Text>
                        </Card>
                        

                    </Card><br/>
                    <Card>
                        <Card.Header>
                            <center><h2>Sales</h2></center>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                        <h4>To Know More About Us And Our Items Avaliable For Sale ,Contact Us On Any Of Our Platforms</h4>        
                            </Card.Text>
                           
                        </Card.Body>

                    </Card>


                </div>
            </div>
        </div>
    )
}
export default Services;