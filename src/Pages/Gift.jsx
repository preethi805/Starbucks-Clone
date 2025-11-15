import React from 'react'
import '../Styles/Gift.css';
import Footer from '../Components/Footer';

export default function Gift() {
  return (
    <div className='Gift'><div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <p class="title">GIFT VOCHER</p>
            <p>CLAIM NOW!!!</p>
        </div>
        <div class="flip-card-back">
            <p class="title">CRAB IT SOON!!</p>
            <p>CODE:1@pree456</p>

          

        </div>
    </div>
    
    
</div> 

 <h1 style={{marginLeft:"550px",marginTop:"-180px"}}>This voucher can be used to purchase <br></br> and claims in Online stores only.</h1> 
<nav className='one'>
    Featured | Anytime | Congrats | Thank you
    
    
</nav>
<br></br>
<br></br>

<h2 style={{fontSize:"2rem",marginLeft:"10px"}}>Featured</h2><br></br><br></br>
<img style={{height:"40%",width:"20%"}} src="./Assets/featured1.png" alt="" /> <img style={{height:"42%",width:"21%"}} src="./Assets/gift card(1).png" alt="" />
<img style={{height:"43%",width:"22%"}} src="./Assets/Featured2.webp" alt="" /> <img style={{height:"44%",width:"24%"}}  src="./Assets/featured3.jpg" alt="" />
<br></br>
<br></br>
<br></br>
<h2 style={{fontSize:"2rem",marginLeft:"10px"}}>Anytime</h2><br></br><br></br>
<img style={{height:"35%",width:"15%"}} src="./Assets/anytime1.jpg" alt="" /> <img style={{height:"42%",width:"21%"}} src="./Assets/anytime 2.jpg" alt="" />
<img style={{height:"43%",width:"22%"}} src="./Assets/anytime3.jpg" alt="" /> 
<br></br>
<br></br>
<br></br>
<h2 style={{fontSize:"2rem",marginLeft:"10px"}}>Thankyou</h2><br></br><br></br>
<img style={{height:"40%",width:"20%"}} src="./Assets/thank you.avif" alt="" /> <img style={{height:"46%",width:"22%"}} src="./Assets/thank you3.jpg" alt="" />
<img style={{height:"43%",width:"22%"}} src="./Assets/thank you2.jpg" alt="" />
<br></br>
<br></br>
<br></br>
<h2 style={{fontSize:"2rem",marginLeft:"10px"}}>Congrats</h2><br></br><br></br>
<img style={{height:"44%",width:"22%"}} src="./Assets/congrats1.png" alt="" /> <img style={{height:"44%",width:"20%"}} src="./Assets/congarts2.jpg" alt="" />
<img style={{height:"42%",width:"20%"}} src="./Assets/congrats 3.webp" alt="" /> <img style={{height:"46%",width:"22%"}} src="./Assets/congarts4.webp" alt="" />


<br></br>
<Footer/>


</div>


  )
}
