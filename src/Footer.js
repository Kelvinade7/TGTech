import {Card} from 'react-bootstrap'
function Footer(){
    return(
        <footer>
            <div class='row' style={{padding:'25px'}}>
                <div class='col-lg-4'>
                <Card >
                <Card.Title>
                    Doris D Services
                </Card.Title>
                <ul>
            <li>Event Decoration</li>
            <li>Home & Office Decoration</li>
            <li>Training</li>
            <li>Rentals and Sales Avaliable</li>
          </ul>
                
            </Card>

                </div>
                <div class='col-lg-4'>
                    <Card>
                        <Card.Title>Contacts</Card.Title>
                        <ul>
                            <li>Call & Chat us with 08023302090</li>
                            <li>Follow us on IG @dd_home_event </li>
                            <li>Visit us at NO 46 SHASHA ROAD AKOWONJO LAGOS </li>
                            
                        </ul>
                    </Card>
                </div>
                <div class='col-lg-4'>
                    <Card>
                        <Card.Body>
                            
Website Was Developed By WMA
Reach WMA Through 08039412657
                        </Card.Body>
                    </Card>
                </div>
            </div>
            
        </footer>
    )
}
export default Footer