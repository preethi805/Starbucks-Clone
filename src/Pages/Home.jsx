import React from 'react'
import '../Styles/Home.css';
import { Link} from 'react-router-dom'
import Footer from '../Components/Footer';
export default function Home(){  
return (
<div className='home'>








<div style={{position:'relative'}}>
<video style={{height:"100vh",width:"100%",objectFit:"cover",}} src="./Assets/background pixels.mp4"  autoPlay loop muted typeof='video/mp4'></video>
</div>



 
<div style={{position:'absolute',marginTop:'-600px',marginLeft:"370px",}}>

<center className='clear'><h1 style={{color:"white",marginTop:"40px",fontSize:"3rem",marginLeft:"30px",padding:"2px"}}>Welcome to Starbucks!!!</h1></center><br /><br/>
<center className='clear2'><h2 style={{marginTop:"50px",color:"white", fontSize:"2rem",marginRight:"30px"}}>Your Daily Dose of Inspiration!!!</h2></center>
<h3 style={{marginTop:"80px",color:"white"}}><center>Discover Our Signature Blends,Seasonal Favorites, and Expertly Crafted Beverages.</center></h3>
</div>





<h1 style={{marginTop:"60px",marginBottom:"30px",marginLeft:"80vh"}}>Handcrafted Currations</h1>
<div style={{display:'flex',marginLeft:"150px",}}>
<Link style={{textDecoration:"none",color:"inherit"}} to='./Explore'> <div style={{height:'200px',width:'200px'}}> <img style={{borderRadius:"120px",height:"150px",width:"150px",marginLeft:"25px",}} src="./Assets/Bestsellers.png"  alt="" /> <br /><center>Bestsellers</center></div> </Link>
<Link  style={{textDecoration:"none",color:"inherit"}} to='./Foods'><div style={{height:'200px',width:'200px'}}><img style={{borderRadius:"150px",height:"150px",width:"150px",marginLeft:"25px",}} src="./Assets/foods.png" alt=""/> <br/><center>Foods</center> </div></Link>
<Link  style={{textDecoration:"none",color:"inherit"}} to='./Refreshers'><div style={{height:'200px',width:'200px'}}><img style={{borderRadius:"150px",height:"150px",width:"150px",marginLeft:"25px",}} src="./Assets/refreshers.png" alt="" /> <br /><center>Refreshers</center> </div> </Link>
<Link  style={{textDecoration:"none",color:"inherit"}} to='./Coffeeathome'><div style={{height:'200px',width:'200px'}}><img style={{borderRadius:"150px",height:"150px",width:"150px",marginLeft:"25px",}} src="./Assets/coffeeathome.png" alt="" /> <br /><center>CoffeeatHome</center> </div></Link>
<Link  style={{textDecoration:"none",color:"inherit"}} to='./Readytoeat'><div style={{height:'200px',width:'200px'}}><img style={{borderRadius:"150px",height:"150px",width:"150px",marginLeft:"25px",}} src="./Assets/eat chocolates.png" alt="" /> <br /><center>ReadytoEat</center> </div></Link>




</div>

<div className='box1'>
 <div className='imageReveal'>
<img  style={{}} className='caramel' src="./Assets/caramel.png" alt=""/>

<div  className='step1'>
    
 
    Try Our New Arrival Of Bright,Sweet,Smooth Shakes<br></br>Makes Drooling. This is a Classic!!!<br></br>
</div>
</div>


<div className='imageReveal2'>
<img style={{ width: "30%",height: "60vh"}} className='caramel2'  src="./Assets/coffee bean.png" alt=""/>
<div className='step2'> 
   Another Arrival of Iced Coffee Splash!!!<br>
   </br> with Coffee Beans.
</div>
</div> 
</div>




<div className='last'>
<h1 style={{marginLeft:"50px"}}> Learn More About the World Coffee!!</h1> 






<div  className='inside' >
        <img className='spotlight-container' style={{height:"60vh",width:"100%"}} src="./Assets/more about coffee.jpg" alt="" />

        <h3 style={{marginTop:"-70px",fontSize:"1.5rem",color:"black",marginLeft:"40px"}}>Art and science of Coffee Brews.</h3>

         <h4 style={{fontSize:"1.3rem",color:"brown",marginLeft:"40px"}}>Master the Perfect Brew With Starbucks</h4>


         



</div>
</div>




<Footer/>

</div>

      
 )
}

