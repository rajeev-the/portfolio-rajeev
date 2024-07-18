import React from 'react'

const Experience = () => {
  return (
    <div className='w-full sm:h-[100vh] p-[20px] flex flex-col gap-5  h-[110vh]'>
      <div className=''>
      <h1 className='   text-2xl  font-bold'>Experience</h1>
      <div className='flex '>

     <div className=' block-1 w-[162px] h-[300px] bg-[rgb(26,106,255)] m-6 rounded-xl'>
     <a href="https://pdf.ac/3sNLt7"  target="_blank">  <div className=' flex flex-col mt-[40px] gap-5 m-2'>
          <div className='flex flex-col  items-center gap-1'>
          
            <div className=''>
           <img src="data:image/png;base64,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"></img>
            </div>
            <h1 className=' text-white font-semibold'>The Jacobin</h1>

          </div>
          <div>
            <h1 className='text-white font-semibold'> Internship as</h1>
            <h1 className='text-white font-semibold '> UI/UX Designer</h1>
          </div>
          <div className='text-center'> <h1 className='text-white font-semibold'>Sep`23 - Nov`23
            </h1></div>
         </div>
         </a>

       </div>

       
      </div>
     

      </div>

      <div className='box-1 mt-5'>
      <h1 className='   text-2xl  font-bold'>Certification</h1>
      <div className='flex m-6 gap-8'>
      <a href="https://pdf.ac/23R2Wb" target="_blank">
      <div className='w-[150px] h-[170px] flex flex-col gap-1  items-center p-3  rounded-xl bg-[rgb(26,106,255)]'>
               
               <div className=''>
               <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD4UlEQVR4nO1bSW/TUBCOuANSEfAHuHIHwYnaUbBL1WJbQrQ/gAOLAAkoHHpBbC2rBGqhbBIHJA5laVkVnI2mm0qbVrRFrUQTSIASFDtLkzjOoGeRxAkuQsVOjXmfNIry3jjz5svMvLH0ns2GgYGBsQRs27FrPUkxzSTNHiFo5uhyCLJtp9kmtBZbtUAQ3GqCZroIismRNAsmEYmk2OsOR9MqQ52vbWhYQ1DshAkc1hSCYsftdq7GMAJIiu1VGzxw+Dhc67wFXbfvLYsg2/sPH68k4bEhzhN13NaCEXsdB89eOMEs6H3+SllTYX21ddxm/Qmg2QsFA2fPXwGz4XTb5VIkUEy77gSQNNNTMMC7fWA2OHmvsWlAUixfMDAamACzAa2pFAEsjwnQGySOABanALlIDcjJMkS+i/Dpm2C4IDvInqlqwEw4Cv7JYNVkNhw1FwGz1SYgYjICcrIM4agIc19jhguyY7oUMAMwAQEcAYBTgF6mGhAVUzA4/bEqOwCyg+yZqgZMhuarug1Oheb/3wgYem/CCDADMAEBHAGAU4D+l16HoyIsZCRr1ICZJb4Nvp0JW4OA2f+dgNwSXoc/zgvWSQEzABMQwBEAOAVoXAMAF0Ea7wKAt0HqH+4D8rkcZMMRSE1OQ3JsXPnMRj4r45bvA6TodxD7BkBweX8RNI7mLUuA9C0Kgtun6XxR3D5Fz3IE5LMSiD5/6d9+0w/puZDiLPpE34tzPj/kJclaBKQ/BIsOxv2DkM9kygnKZED0l1IjPRe0FgGJkdGic9nPXzR10HhBB+lbigCxrxTi8sKCpg4aVxdESxEQ7x8sEZBMahOQSJbSpH/IWgQkx8aLzmWCIU2ddDBU1Elq2DecAIJmnxQMvHZ5dSUANTrF8Pb2QS4mlM2j72j8d3XCyXvUJ0Uf6U8AxZwvGEDHUnWFLEN8cLhsv0cdINoCU++myvqD+NCIol+JU+cuqQ9Nt+lOALl95xb1YWl0QFlP5OKJsl5gsW5Qq0b0PH1ZfmLc0bjJZgQIVRog2XeoBTq77sL9B91/Ja+cbsjn8yCnUot2g+IbP8jpNCQSSeh+1Ks813HjDuw9eKzy3sBDm1Gw27kadCmhwqAugkhAUOe6WuIDw8p8+8Wrv/kdJmDohQkEdC2FoJlO5ZqKniRQTDP6fYH3iFoExHjvNJonKPamxvMSQTMd9fX1K23VAkk2riO2c7tJmm0hafbMXwnFNLe2tq74IwIIbjVZxx36+WwLWoPDwa21WQUC7xFjvEeOubw9Md63R3B5eDUBlofAe0/G+L4N6rG4y7Ux5vKcWL5VYWBg2CyKHw+5C50tDPeXAAAAAElFTkSuQmCC"/>
               </div>
               <h1 className='text-white font-semibold'>React</h1>
              
               <h3 className='text-white font-semibold mt-1  '>- DevTown</h3>
            
               


      </div></a>
      <a href="https://pdf.ac/23R2Wb" target="_blank">
      <div className='w-[150px] h-[170px] flex flex-col gap-1  items-center p-3  rounded-xl bg-[rgb(26,106,255)]'>
               
               <div className=''>
               <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD4UlEQVR4nO1bSW/TUBCOuANSEfAHuHIHwYnaUbBL1WJbQrQ/gAOLAAkoHHpBbC2rBGqhbBIHJA5laVkVnI2mm0qbVrRFrUQTSIASFDtLkzjOoGeRxAkuQsVOjXmfNIry3jjz5svMvLH0ns2GgYGBsQRs27FrPUkxzSTNHiFo5uhyCLJtp9kmtBZbtUAQ3GqCZroIismRNAsmEYmk2OsOR9MqQ52vbWhYQ1DshAkc1hSCYsftdq7GMAJIiu1VGzxw+Dhc67wFXbfvLYsg2/sPH68k4bEhzhN13NaCEXsdB89eOMEs6H3+SllTYX21ddxm/Qmg2QsFA2fPXwGz4XTb5VIkUEy77gSQNNNTMMC7fWA2OHmvsWlAUixfMDAamACzAa2pFAEsjwnQGySOABanALlIDcjJMkS+i/Dpm2C4IDvInqlqwEw4Cv7JYNVkNhw1FwGz1SYgYjICcrIM4agIc19jhguyY7oUMAMwAQEcAYBTgF6mGhAVUzA4/bEqOwCyg+yZqgZMhuarug1Oheb/3wgYem/CCDADMAEBHAGAU4D+l16HoyIsZCRr1ICZJb4Nvp0JW4OA2f+dgNwSXoc/zgvWSQEzABMQwBEAOAVoXAMAF0Ea7wKAt0HqH+4D8rkcZMMRSE1OQ3JsXPnMRj4r45bvA6TodxD7BkBweX8RNI7mLUuA9C0Kgtun6XxR3D5Fz3IE5LMSiD5/6d9+0w/puZDiLPpE34tzPj/kJclaBKQ/BIsOxv2DkM9kygnKZED0l1IjPRe0FgGJkdGic9nPXzR10HhBB+lbigCxrxTi8sKCpg4aVxdESxEQ7x8sEZBMahOQSJbSpH/IWgQkx8aLzmWCIU2ddDBU1Elq2DecAIJmnxQMvHZ5dSUANTrF8Pb2QS4mlM2j72j8d3XCyXvUJ0Uf6U8AxZwvGEDHUnWFLEN8cLhsv0cdINoCU++myvqD+NCIol+JU+cuqQ9Nt+lOALl95xb1YWl0QFlP5OKJsl5gsW5Qq0b0PH1ZfmLc0bjJZgQIVRog2XeoBTq77sL9B91/Ja+cbsjn8yCnUot2g+IbP8jpNCQSSeh+1Ks813HjDuw9eKzy3sBDm1Gw27kadCmhwqAugkhAUOe6WuIDw8p8+8Wrv/kdJmDohQkEdC2FoJlO5ZqKniRQTDP6fYH3iFoExHjvNJonKPamxvMSQTMd9fX1K23VAkk2riO2c7tJmm0hafbMXwnFNLe2tq74IwIIbjVZxx36+WwLWoPDwa21WQUC7xFjvEeOubw9Md63R3B5eDUBlofAe0/G+L4N6rG4y7Ux5vKcWL5VYWBg2CyKHw+5C50tDPeXAAAAAElFTkSuQmCC"/>
               </div>
               <h1 className='text-white font-semibold'>Java in DSA</h1>
              
               <h3 className='text-white font-semibold mt-1  '>- Apna college</h3>
            
               


      </div></a>
      </div>
      </div>
      

       
    <div>

     </div>


    </div>
  )
}

export default Experience