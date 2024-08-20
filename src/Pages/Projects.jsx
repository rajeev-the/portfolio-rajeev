import React, { useState } from 'react'
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
import video3 from "../assets/New Project - Made with Clipchamp.mp4"
import video4 from "../assets/New Project - Made with Clipchamp.mp4"


const Projects = () => {

  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  const handleChange = () => {
    setFirst(!first);

  }

  const handleChange2 = () => {
    setSecond(!second)

  }
  const handleChange3 = () => {
    setThird(!third)

  }

  

console.log(first)
  return (
   
    <div className='  h-auto w-full   bg-[linear-gradient(-90deg,rgb(26,106,255),rgb(34,58,102))]'>
    
    <div className=' flex flex-col'>

      <div className='    flex  flex-col items-center justify-center gap-4'>

        <div className='h-[100vh] w-full flex  flex-col items-center justify-center  m-2  gap-1'> 

        <h1 className='  text-2xl font-bold   mt-4  text-white '>Mern Stack Developer</h1>

        <div className='h-full w-full flex  items-center justify-evenly  '>   
        <button className='' onClick={handleChange}  ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAClUlEQVR4nN2YzW7TQBDHI5EbcEIo3nWvtBUgeBBaceKGisQlnnUkShxxzck3cuuD5EBU9UlKkVpa+gbBTQ9Q/dHYru0oTuKPtWMx0kiRvFn/PDuf22r9r2L28FoqOIJwLAiXUuFGKPxl9X8TfvIzSejz2lqgnnzE4y3CF0G4FoTfQuFWKmCVCsJMBmt/ScLgqcIj/WRDtLcIA34RW2cdlFymBC/cw+E9tbCJHnaFwo9w42JgagGULXomLeyUg+vibfjVd9rgVAR5F+69XwjOsPGh1HGqzHpjEA7yW64eOLCa/C4be9ngetj1TV8TnEwGkI3t1XRDtMOAKO1zowlwdJLrP5xDv6+Mbg5/qTDVAXcvOSE5aPpLk7COVDJKwBWEnKYmc64QZQNjlALH8vVbTl8kDBaDg3C9cTgV6dUcHBdzrq0NgQP7YsfCyzg4CIMshb8mOHCDISwcxsdr47gpcDKGnCT977JJcDLQ8+QRew2DA6e82IJBF9wcOOUf8Z9CgO44HfDopELAvEdcCyQlj7hAkNQAeZ4ELJRm3Aoh59KMtPzx8bZBkDNB+BSXOsKrMp2MqxuS4HUUXszVY2nn90NZHeR8s3Bfj8u2+q4eSGZwFgC5SdTRsLrj0kl82nHwsJUmho2+jpbfHReDEwTPTHYxS4amM11D02iSA46rGeG09Q4PlgMGKWdnI2Ongmd28WwlXCJg9usc3AVhZhLeZIKL/JFwUNvVRw/vc8FFlrSxV9XlkQg6KC+35VIgt3niF7a+6zfB6Yxwmtnn1soQbUPhc5iCygSQx3v4dXZdtBaRMJlzxbnyLyEJs7VQwRp2Ey6lTjVXwCnCxVxYOOS2SBIuGCK6RA/89oKf8Rqji+e1QG1C/gGckBrJzBHB8wAAAABJRU5ErkJggg=="/></button>
             { first ? <div  className='  h-[85%]  bg-black   w-[70%]  rounded-[50px]  flex items-center   justify-center'>
  
            <video autoPlay muted className='rounded-[50px] w-[100%] h-[100%]' src={video3}></video>


     </div>  : <div className=' h-[85%] bg-black  w-[70%]   rounded-[50px]'> 
      
     <video autoPlay muted className='rounded-[50px] w-[100%] h-[100%]' src={video4}></video>

       </div> } 
         <button className='' onClick={handleChange} ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC0klEQVR4nN2YvW4TQRCALUEH1JR450yCAgplPLuW8gAEUaWLggS7cxZNgm3RUrvLNYiCVNQ0RBG8CRCJYMgb2GenINGhORLb8h3x7Xn9I0YayZJXq+/mf7ZQ+F+lqPyHAqt1kOYTSGqBpK6QdMbKvwHND/5PSF3jszOBWpbPboE0r0DSiUDTAaRTkBSN0R6fFWh+ecpvrKy/uOkcbH399XVPmYZA6gipuxmgojQVkkKG9ZDqfKcTuDtI9zykI2CL5QSDBChb33wryuryRHBFqZ8I5K/W567goK/mPL5b0eN8cIqeAlJud0J27RaVv21tuRnBRZeQAvVG5phj088QLorjkt1d0UvjsxXpyCbmgv2D6O37zw4Sh86EMl+vzG5PUR2Q2jZwl+IEEin0pK79swhzncsD5xiynVrMuUPYFOHmmw99MKeQbEXlN1IA6cT2sub0IH+mNP58naI5FUgTAlYfDADRNDI2/llB9qCsd4fjj0emidzSdAwp0BwOxx/Pc9FCQSJ97wMK9rkDQHAIyTkxBBhPwdEiQQo0v6cGGKQUcZa9dx/zArpzceAALuFiV0kSOIJLJImLMhO4hBstMwLjKeZ0YeCk6QGanQHg2vPVvK0ucAx34d7QU/r+6DTTWgg4mTIssPCIw3vr3OEkW4/qCUAeEm3cnFaM9yaH4+Ro317dupEAjK0oqSZU9pG/OQTpCC4sKRpMMaPCCwtv/LxU27g62D9wszSV6Uthc/Na4Srh54h5rZ2w5t8tZBF+joAJHonAWrnu0aNMcH1LKn87fuebPmBXSNqygutbEvVGvPFbxCTYxBy71dZyCciKXuKN32ZnhrHxZjqcEJljbpxwdpekeclLNZeCCeBCrnMl5e+MzdY8wsWcOw63Ivhr0d54V5pevEZK0+IOMZUn4DThZg5lveshHQLScWydi0f0eABGOuaRic+UKv7KTKDmIX8Ashnvv8UDLD4AAAAASUVORK5CYII="/></button>
         </div>
           </div>

           <div className='h-[100vh] w-full flex  flex-col items-center justify-center  m-2  gap-1'> 

<h1 className='  text-2xl font-bold  mt-4   text-white '>APP Developer</h1>

<div className='h-full w-full flex  items-center justify-evenly '>   
<button className='' onClick={handleChange2}  ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAClUlEQVR4nN2YzW7TQBDHI5EbcEIo3nWvtBUgeBBaceKGisQlnnUkShxxzck3cuuD5EBU9UlKkVpa+gbBTQ9Q/dHYru0oTuKPtWMx0kiRvFn/PDuf22r9r2L28FoqOIJwLAiXUuFGKPxl9X8TfvIzSejz2lqgnnzE4y3CF0G4FoTfQuFWKmCVCsJMBmt/ScLgqcIj/WRDtLcIA34RW2cdlFymBC/cw+E9tbCJHnaFwo9w42JgagGULXomLeyUg+vibfjVd9rgVAR5F+69XwjOsPGh1HGqzHpjEA7yW64eOLCa/C4be9ngetj1TV8TnEwGkI3t1XRDtMOAKO1zowlwdJLrP5xDv6+Mbg5/qTDVAXcvOSE5aPpLk7COVDJKwBWEnKYmc64QZQNjlALH8vVbTl8kDBaDg3C9cTgV6dUcHBdzrq0NgQP7YsfCyzg4CIMshb8mOHCDISwcxsdr47gpcDKGnCT977JJcDLQ8+QRew2DA6e82IJBF9wcOOUf8Z9CgO44HfDopELAvEdcCyQlj7hAkNQAeZ4ELJRm3Aoh59KMtPzx8bZBkDNB+BSXOsKrMp2MqxuS4HUUXszVY2nn90NZHeR8s3Bfj8u2+q4eSGZwFgC5SdTRsLrj0kl82nHwsJUmho2+jpbfHReDEwTPTHYxS4amM11D02iSA46rGeG09Q4PlgMGKWdnI2Ongmd28WwlXCJg9usc3AVhZhLeZIKL/JFwUNvVRw/vc8FFlrSxV9XlkQg6KC+35VIgt3niF7a+6zfB6Yxwmtnn1soQbUPhc5iCygSQx3v4dXZdtBaRMJlzxbnyLyEJs7VQwRp2Ey6lTjVXwCnCxVxYOOS2SBIuGCK6RA/89oKf8Rqji+e1QG1C/gGckBrJzBHB8wAAAABJRU5ErkJggg=="/></button>
   { second ? <div className=' h-[85%] bg-white  w-[70%]   rounded-[50px]  flex items-center justify-center text-black text-xl '>  Available Soon </div>   : <div className=' h-[85%] bg-white  w-[70%]  flex items-center justify-center text-black text-xl  rounded-[50px]'> Available Soon  </div>  }  
 <button className='' onClick={handleChange2} ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC0klEQVR4nN2YvW4TQRCALUEH1JR450yCAgplPLuW8gAEUaWLggS7cxZNgm3RUrvLNYiCVNQ0RBG8CRCJYMgb2GenINGhORLb8h3x7Xn9I0YayZJXq+/mf7ZQ+F+lqPyHAqt1kOYTSGqBpK6QdMbKvwHND/5PSF3jszOBWpbPboE0r0DSiUDTAaRTkBSN0R6fFWh+ecpvrKy/uOkcbH399XVPmYZA6gipuxmgojQVkkKG9ZDqfKcTuDtI9zykI2CL5QSDBChb33wryuryRHBFqZ8I5K/W567goK/mPL5b0eN8cIqeAlJud0J27RaVv21tuRnBRZeQAvVG5phj088QLorjkt1d0UvjsxXpyCbmgv2D6O37zw4Sh86EMl+vzG5PUR2Q2jZwl+IEEin0pK79swhzncsD5xiynVrMuUPYFOHmmw99MKeQbEXlN1IA6cT2sub0IH+mNP58naI5FUgTAlYfDADRNDI2/llB9qCsd4fjj0emidzSdAwp0BwOxx/Pc9FCQSJ97wMK9rkDQHAIyTkxBBhPwdEiQQo0v6cGGKQUcZa9dx/zArpzceAALuFiV0kSOIJLJImLMhO4hBstMwLjKeZ0YeCk6QGanQHg2vPVvK0ucAx34d7QU/r+6DTTWgg4mTIssPCIw3vr3OEkW4/qCUAeEm3cnFaM9yaH4+Ro317dupEAjK0oqSZU9pG/OQTpCC4sKRpMMaPCCwtv/LxU27g62D9wszSV6Uthc/Na4Srh54h5rZ2w5t8tZBF+joAJHonAWrnu0aNMcH1LKn87fuebPmBXSNqygutbEvVGvPFbxCTYxBy71dZyCciKXuKN32ZnhrHxZjqcEJljbpxwdpekeclLNZeCCeBCrnMl5e+MzdY8wsWcOw63Ivhr0d54V5pevEZK0+IOMZUn4DThZg5lveshHQLScWydi0f0eABGOuaRic+UKv7KTKDmIX8Ashnvv8UDLD4AAAAASUVORK5CYII="/></button>
 </div>
           </div>

           <div className='h-[100vh] w-full flex  flex-col items-center justify-center  m-2  gap-1'> 

<h1 className='  text-2xl font-bold  mt-4   text-white '>UI/UX Developer</h1>

<div className='h-full w-full flex  items-center justify-evenly '>   
<button className='' onClick={handleChange3}  ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAClUlEQVR4nN2YzW7TQBDHI5EbcEIo3nWvtBUgeBBaceKGisQlnnUkShxxzck3cuuD5EBU9UlKkVpa+gbBTQ9Q/dHYru0oTuKPtWMx0kiRvFn/PDuf22r9r2L28FoqOIJwLAiXUuFGKPxl9X8TfvIzSejz2lqgnnzE4y3CF0G4FoTfQuFWKmCVCsJMBmt/ScLgqcIj/WRDtLcIA34RW2cdlFymBC/cw+E9tbCJHnaFwo9w42JgagGULXomLeyUg+vibfjVd9rgVAR5F+69XwjOsPGh1HGqzHpjEA7yW64eOLCa/C4be9ngetj1TV8TnEwGkI3t1XRDtMOAKO1zowlwdJLrP5xDv6+Mbg5/qTDVAXcvOSE5aPpLk7COVDJKwBWEnKYmc64QZQNjlALH8vVbTl8kDBaDg3C9cTgV6dUcHBdzrq0NgQP7YsfCyzg4CIMshb8mOHCDISwcxsdr47gpcDKGnCT977JJcDLQ8+QRew2DA6e82IJBF9wcOOUf8Z9CgO44HfDopELAvEdcCyQlj7hAkNQAeZ4ELJRm3Aoh59KMtPzx8bZBkDNB+BSXOsKrMp2MqxuS4HUUXszVY2nn90NZHeR8s3Bfj8u2+q4eSGZwFgC5SdTRsLrj0kl82nHwsJUmho2+jpbfHReDEwTPTHYxS4amM11D02iSA46rGeG09Q4PlgMGKWdnI2Ongmd28WwlXCJg9usc3AVhZhLeZIKL/JFwUNvVRw/vc8FFlrSxV9XlkQg6KC+35VIgt3niF7a+6zfB6Yxwmtnn1soQbUPhc5iCygSQx3v4dXZdtBaRMJlzxbnyLyEJs7VQwRp2Ey6lTjVXwCnCxVxYOOS2SBIuGCK6RA/89oKf8Rqji+e1QG1C/gGckBrJzBHB8wAAAABJRU5ErkJggg=="/></button>
   { third ? <div  className='  h-[85%]  bg-black   w-[70%]  rounded-[50px]  flex items-center   justify-center'>
  
    <video autoPlay muted className='rounded-[50px] w-[100%] h-[100%]' src={video1}></video>

       </div>   : <div className=' h-[85%] bg-black  w-[70%]   flex items-center   justify-center  rounded-[50px]'>
        
        
        <video autoPlay muted className='rounded-[50px] w-[100%] h-[100%]' src={video2}></video>

           </div>  }  
 <button className='' onClick={handleChange3} ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC0klEQVR4nN2YvW4TQRCALUEH1JR450yCAgplPLuW8gAEUaWLggS7cxZNgm3RUrvLNYiCVNQ0RBG8CRCJYMgb2GenINGhORLb8h3x7Xn9I0YayZJXq+/mf7ZQ+F+lqPyHAqt1kOYTSGqBpK6QdMbKvwHND/5PSF3jszOBWpbPboE0r0DSiUDTAaRTkBSN0R6fFWh+ecpvrKy/uOkcbH399XVPmYZA6gipuxmgojQVkkKG9ZDqfKcTuDtI9zykI2CL5QSDBChb33wryuryRHBFqZ8I5K/W567goK/mPL5b0eN8cIqeAlJud0J27RaVv21tuRnBRZeQAvVG5phj088QLorjkt1d0UvjsxXpyCbmgv2D6O37zw4Sh86EMl+vzG5PUR2Q2jZwl+IEEin0pK79swhzncsD5xiynVrMuUPYFOHmmw99MKeQbEXlN1IA6cT2sub0IH+mNP58naI5FUgTAlYfDADRNDI2/llB9qCsd4fjj0emidzSdAwp0BwOxx/Pc9FCQSJ97wMK9rkDQHAIyTkxBBhPwdEiQQo0v6cGGKQUcZa9dx/zArpzceAALuFiV0kSOIJLJImLMhO4hBstMwLjKeZ0YeCk6QGanQHg2vPVvK0ucAx34d7QU/r+6DTTWgg4mTIssPCIw3vr3OEkW4/qCUAeEm3cnFaM9yaH4+Ro317dupEAjK0oqSZU9pG/OQTpCC4sKRpMMaPCCwtv/LxU27g62D9wszSV6Uthc/Na4Srh54h5rZ2w5t8tZBF+joAJHonAWrnu0aNMcH1LKn87fuebPmBXSNqygutbEvVGvPFbxCTYxBy71dZyCciKXuKN32ZnhrHxZjqcEJljbpxwdpekeclLNZeCCeBCrnMl5e+MzdY8wsWcOw63Ivhr0d54V5pevEZK0+IOMZUn4DThZg5lveshHQLScWydi0f0eABGOuaRic+UKv7KTKDmIX8Ashnvv8UDLD4AAAAASUVORK5CYII="/></button>
 </div>
    </div>
         </div>

    </div>
    
    </div>
  )
}

export default Projects
