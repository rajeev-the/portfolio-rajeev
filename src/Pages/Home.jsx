import React from 'react'
import "../CSS/Home.css"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const Home = () => {
  

    useGSAP(()=>{

      var t1 = gsap.timeline();

      t1.from(".Name",{

        duration:1.5,
        opacity:0,
        delay:0.5,
        x:-300
        

      })

      t1.from(".hello",{

        duration:1,
        opacity:0,
        delay:0.5,
        x:-200
        

      })

      t1.from(".btn",{

        duration:0.5,
        opacity:0,
        delay:0,
        

      })


     

    })

  return (
    <div className=' p-5 home   bg-[linear-gradient(-90deg,rgb(34,58,102),rgb(26,106,255))] h-[100vh] w-full'>

        <div className='btn     border-white  border-solid  border-2  absolute right-8  inline-block   bg-[rgb(34,57,100)]   p-2 px-5  rounded-3xl '> <a target='_b' href="https://pdf.ac/Uwb6V"><h1 className='text-white'>  Download CV</h1></a></div>
        <div className='Name  ml-[100px] mt-[130px] absolute   inline-block   rotate-90  text-white'><h2 className=' text1  font-semibold  text-2xl'>Rajeev Ranjan</h2></div>

       
        <div className= ' hello ml-[160px]   absolute  inline-block  bottom-[50px]  '><h1 className='text-white  font-bold  text-[180px]'>HELLO</h1></div>
    </div>
  )
}

export default Home