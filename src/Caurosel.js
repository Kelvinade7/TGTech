import {Carousel} from 'react-bootstrap'
import lol from './images/img-1.jpg'
import one from"./images/img-2.jpg"
import two from './images/img-3.jpg'
import thr from './images/img-4.jpg'

function Caurosel(){
    return(
    <Carousel fade>
        <Carousel.Item>
            <img className='tim' src={two}  alt='img'/>
            <Carousel.Caption>
                <p style={{color:'orange',fontSize:'30px',fontWeight:'100px'}}>Contact Us to Give You Your Desired Home Design</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className='tim' src={thr}  alt='img'/>
            <Carousel.Caption>
                <h4 style={{color:'orange',fontWeight:'600px', fontSize:'60px'}}>For Your Event</h4>
                <p  style={{color:'orange',fontSize:'30px',fontWeight:'100px'}}>Doris D Is Your Best Option</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className='tim'src={one} alt='img'/>
            <Carousel.Caption>
            <p style={{color:'orange',fontWeight:'1500px', fontSize:'40px'}}>Doris D Home And Event At Your Service</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={lol} className='tim' alt='img'/>
        </Carousel.Item>

    </Carousel>
    )
}
export default Caurosel;