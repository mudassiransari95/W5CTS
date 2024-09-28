import React from 'react'
import TopBar from '../common/Topbar'
import Navbar from './Navbar'
import Header from '../common/Header'
import Footer from '../common/Footer'

const RPADevelopment = () => {
    const heading='ROBOTICS PROCESS AUTOMATION (RPA) DEVELOPMENT'
    const textArray=[
      {label:'Home'},
         {label:<span className='text-orange-600 text-2xl'>•</span> },
    {label:'OUR SERVICES'},
     {label:<span className='text-orange-600 text-2xl'>•</span>},
   
    {label:'ROBOTICS PROCESS AUTOMATION (RPA) DEVELOPMENT'}
      
       
    ]
  return (
    <div>
        <TopBar/>
        <Navbar/>
        <Header textArray={textArray} heading={heading}/>

        <div className='flex w-full px-36 mt-28'>
            <div>
                <h1 className='text-lg font-base text-gray-700 '>We are Experts</h1>
                <h1 className='text-3xl font-bold text-gray-700'>Our Expertise as RPA Development Agency</h1>
            <p className='text-lg  mt-5  font-medium text-gray-500'>RPA is an innovation in which bots repeat the manual process performed by humans. This could go from designing existing programming while at the same time guaranteeing existing frameworks are not messed with, to catching and deciphering application forms, controlling information, making correspondence channels with different frameworks, etc. RPA in simple words means automating the manual tedious process with the programmable robots in a smarter manner.</p>
            <p  className='text-lg  mt-5  font-medium text-gray-500'>RPA has been developing in best enterprises amid the most recent couple of years, with an expanding measure of dependence on the innovation to enhance work productivity and gainfulness. Its potential effect could be an astounding $6.7 trillion by 2025. RPA’s three forerunners—screen scratching, work process robotization, and the board instruments, and AI — have made ready for RPA to be a noteworthy supporter of business productivity.</p>
            <p  className=' fontfamily  mt-5 text-base mb-4'>RPA includes gaining from and recreating clients’ conduct while working a program or dealing with a specific procedure. RPA enhances the respectability of datasets by diminishing erroneous conclusions and defective sections caused by the human mistake. For people with normal industry information, taking care of routine errands will dependably be entangled by superfluous components that affect their execution. The thing about Robotic Process Automation is that it never wears ragged or gets hushed by redundancy.Automation is that it never wears ragged or gets hushed by redundancy.</p>
            </div>
          
        </div>
<div className='w-full px-36'>
    <img src="https://wicts.co.in/wp-content/uploads/2023/04/E-1.gif" alt="" />
</div>
<Footer/>

    </div>
  )
}

export default RPADevelopment