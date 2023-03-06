import one from './images/Tg.jpg'
import two from './images/tech.jpg'
import thr from './images/mobile.jpg'
import fou from './images/phone.jpg'
import fiv from './images/clinic.jpg'
import { Carousel } from 'react-bootstrap'

function Courosel1(){
    return(
       <div className='rop' style={{zIndex:"-2"}}>
         <Carousel >
            <Carousel.Item>
                <img src={one} className='car' alt='img'/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={two} className='car' alt='img'/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={thr} className='car' alt='img'/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={fou} className='car' alt='img'/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={fiv} className='car' alt='img'/>
            </Carousel.Item>
        </Carousel>
       </div>
    )

}
export default Courosel1