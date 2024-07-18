import  React,{ useRef, useState  } from 'react';

import emailjs from '@emailjs/browser';
import '../CSS/Bottom.css'



const Footer = () => {
  const form = useRef();

  const[Name,setName] = useState("");
  const[Gmail,setGmail] = useState("")
  const[Message,setMessage] = useState("")
  

  const sendEmail = (e) => {
    e.preventDefault();
    setGmail("")
    setName("")
    setMessage(" ")

    emailjs.sendForm('service_mlqlt0l', 'template_hbtdsi4', form.current, {
        publicKey: 'jrNgddYAMWRUcg-oY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        

        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    
    <div>
    <div className='box1 w-full mt-5   sm:h-[100vh] flex  items-center justify-center  sm:gap-[100px] p-5  gap-[2px]   bg-[linear-gradient(-90deg,rgb(34,58,102),rgb(26,106,255))] h-[120vh]  '>


  <div  className= 'box2 w-[324px] flex flex-col gap-[70px]'>
<h1 className=' font1  font-bold    text-white sm:text-5xl     text-xl  '>Let's talk about everything!</h1>

    <img src="https://preview.colorlib.com/theme/bootstrap/contact-form-16/images/undraw-contact.svg" alt="" />
  </div>

            
            <div className='w-[324px] h-[80%]  pt-8   p-1'>

                
            <form  ref={form} onSubmit={sendEmail}>
                <div className=' box3 mt-5 flex flex-col     gap-5'>
                 
                    <input className='p-2  bg-white  rounded-sm' type="text"   onChange={(e)=>setName(e.target.value)}  placeholder='Name' name="from_name"  value={Name}/>
                    <input className='p-2  bg-white rounded-sm ' type="text"   onChange={(e)=>setGmail(e.target.value)} placeholder='Gmail' name="user_email" value={Gmail} />
                   
                    <input  className='p-2 pb-[70px]   rounded-sm bg-white  h-[100px] ' type="text"   onChange={(e)=>setMessage(e.target.value)} placeholder='Message' name="message" value={Message} />
                    
                </div>
                <input type="submit" placeholder='Send Message'  className='bg-[rgb(255,255,255)]  text-[rgb(26,106,255)]  font-bold    text-ms p-2  rounded-sm  mt-[40px]'/>
                {/* <input  type='submit'  className='bg-[rgb(255,255,255)]  text-[rgb(26,106,255)]  font-bold    text-ms p-2  rounded-sm  mt-[40px]'>Send Message</input> */}
                </form>

            </div>

            

           

    </div>
    <div className='  w-full flex  justify-center  gap-4 items-center  bg-[linear-gradient(-90deg,rgb(34,58,102),rgb(26,106,255))]'>
             
              <a href="https://www.instagram.com/the.rajeevranjan?igsh=MWZ4cGludXFoZ3h1bw==" target="_blank"><img src="data:image/png;base64,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"></img></a>
             <a href="https://github.com/rajeev-the"target="_blank"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACMklEQVR4nNWWTUhUURTHf0WZQlQLKwWhqUWFRBBE7qJFm8zpg7ZtgrSN4GbcBRFFxIgtAhdWkBLjylq6ErSmKNpEtAj6ECEoSBcOajphH1w4Mxwu9773vO9B9IfDDO/9/+f/7tc5F/4DNAF5YAAoAU8lSvKsC2jM0nAvMAosAX9iwnBGRBOMLcAgUE1gaMeqzELDek2bgekAQzteALuTmhriTAamtfgM7Ioz3ZzRSO14LkvnxaAl+Ck7+ZKIa88rwHuJino+CVwEzgC/rFxFn+k+x0Z6p95vAC4Ahx3aI2KmMevYcDmX8ahjij4Rjm+OfA9dxcF1Tn8D2wJMWz1rvWgXmbyHOA9sDTBuFhNXztOaOOAhXSUcRU/OoiaNeUgnUhj7ZrGkSVMe0qEUxp0qz4r6b7zqeCaj7gZ6VOxPYXxU5emV3zHxquMJ8Ba4DlxRgpOBphuBc2og3cA14A3w2K5Y34EvjopzOcD4huNYfgXmZCPXcTaizq4BdxIeq53Ao5i6ndeCHcAP9dLcLO5agmVgHOgDTkkhaJREBWBCanuU6TKw3f7aBxbJNIZ+T5vbo3Q5Ka1JutSwa5rarS/+II3hPDAk+8CMrM2jXYsxrQIHfGt02yKbFpcU4zHGt6LEplm8VmSzw8vAfZmm4xHaQoTpK8kdiRZZR1cCcyZ96PFoPia5+ujuUs7A+OV6Lns1NMm6VAOMjeZm2gv+QeAesAAci+B1CGc4ZY3HxqaMOP8WfwHdnF3eu3XjawAAAABJRU5ErkJggg=="/></a>
             <a  target="_blank" href="https://www.linkedin.com/in/rajeev-ranjan-97b51923b/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAACXBIWXMAAAsTAAALEwEAmpwYAAACuUlEQVR4nO2ZPWzTQBTHb0AdgIWVAhuiQ2FlSUuHLqg7A2JDQkh81QnxOUAFpBIwIIEY6EaFhPiIKhZopa5tqNM0qZOc3dJASstQBVEEWKFVo6QPnZ0AiR1UJ7g+pPtLT0p88dPvnt+9O78gxMXF9R8LqwcQ1rqRpPW6aljrRlfJ/taBQ5kjCKtRJKmwvUYmEU4fbh5aIvr2Q6tVeL05eE8irVoj70g0zzyHVk0T0/ucRNvX0BHOABJT1CGNiPvgWPU5ACc99rNXoH0gBudeLMDpJ/OwKyibE3EVnPS0Bo4zBvRqoQhVJT/qsMMvMw4upuBCJAv1Onp31t2o45bB00Z61KvzVoJxcInAzqBspEdVw/IKIGGa8VSRzDxvC0wZ6WFEmkIzvzjFNCB/HJB/GpAgAxJi5ufAjAkfTJrf642O07JJS+jlhOmDXgsqW5t0y+BBBc48nYfEsl5jvnsVACEGkeSnmrHJ918BXYzCblGG/pEsPE/kIZr7BqPqKlx7lYO9AzFzMm6D3xhdtCzOviHyC1xdKdSMFTZKcCgsw9KXdbDTWrEMJ4e1ylNhCHy9WIa3+R/wN5XKm3DsPt2JU+yAb1Uzy7q5ZlgCL5Y24fb4Ehx/mIGzzxYg93nNFv5gOG6/WL0CPx/J/q48Ygr2SFOQ1zcsvzv1eK5ycGMAnOZvmxCt8zMLN8esfgIv39nnuVdVBV16Y9nETjzSLH6uv15kDLzfCt43RCx+qG9jU+LgEo848FRpKL44S7yqtJQqvQ8UuDO+VGMdg5UzhhADYSRbMxYe+2Ab8Y7BuMUP9f0P6rhNQ8h4y1HszXjDSduPWXZD0tiP7SHLSUOIpRbcFaUdORJtOHoNjckEciza4vWyzYzJdxSa60RNid7oReQxmWge+k/RVm9I63L9r5SQ1uU8p7m4uBBL+glAa62ig/LvpAAAAABJRU5ErkJggg=="/></a>
            </div>


    </div>
  )
}

export default Footer