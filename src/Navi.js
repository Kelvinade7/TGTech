function Navi({b,bo}){
return(
    <div id='navi'>
        <h1 id='h'><span style={{color:'red'}}>T</span>G</h1>
        <div className="a">
            <a href='#toph' className="ab" >ABOUT US</a>
            <a href="#service" className="ab" style={{marginLeft:'16px',textDecoration:'none'}}>SERVICES</a>
            <a href="#contact" className="ab" style={{marginLeft:'16px',textDecoration:'none'}}>CONTACTS</a>
        </div>
        <button className="but"style={{border:'none'}} onClick={bo}>{b}</button>

    </div>
)
}
export default Navi