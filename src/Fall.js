import {Link} from 'react-router-dom'
function Fall(){
    return(
      <div className='fall'>
     <ul>
     <br/><br/><br/><br/><br/>
       <li> <Link className='Link' to={'/'}>Home</Link></li><br/>
       <li> <Link className='Link' to={'/services'}>Services</Link></li><br/>
       <li>  <Link className='Link' to={'/contacts'}>Contacts</Link></li>
    </ul>
   </div>
    )
}
export default Fall