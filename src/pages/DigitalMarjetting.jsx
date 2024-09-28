import React from 'react'
import TopBar from '../common/Topbar'
import Navbar from './Navbar'
import Header from '../common/Header'
import Footer from '../common/Footer'

const DigitalMarjetting = () => {
  
    const heading='DIGITAL MARFKETING (SEO/ SMM/ PPC)'
    const textArray=[
      {label:'Home'},
         {label:<span className='text-orange-600 text-2xl'>•</span> },
    {label:'OUR SERVICES'},
     {label:<span className='text-orange-600 text-2xl'>•</span>},

   
    {label:'DIGITAL MARFKETING (SEO/ SMM/ PPC)'}
    ]
  
  return (
    <div>
        <TopBar/>
        <Navbar/>
        <Header textArray={textArray} heading={heading} />
        {/* div image with content  */}
        <div className='flex mt-20'>
            {/* only image data  */}
<div className='min-w-[35rem] flex justify-center items-center'>
<img src="https://wicts.co.in/wp-content/uploads/2023/04/png-clipart-robotics-eset-internet-security-android-robot-electronics-humanoid-robot-thumbnail-removebg-preview.png" alt="" />
</div>

            {/* only content data  */}
        <div className=' pr-32'>
            <h1 className='text-gray-800 text-3xl font-bold'>
            Make Your Website Work for You: SEO Management & Strategy Services</h1>
            <p className='text-lg mt-3 font-medium text-gray-500'>You wouldn’t put a “For Sale” sign on your house without knowing how much it’s worth, so why would you do the same with your website? Let our team of experts help you get the most out of your online presence with our SEO management and strategy services.</p>
            <div className='flex mt-8 gap-5 '>
            {/* left div for content  */}
            <div className='w-96'>
            <div >
          <p className='text-orange-600 font-semibold text-xl '>01.  </p>  
    <p className='text-gray-950 font-semibold text-lg pb-2'>Advanced Analytics Review</p>
<p className='text-gray-500 font-medium'>
In the context of digital marketing, advanced analytics can be used to track and understand customer behavior, optimize campaigns.
</p>

            </div>
            <div >
          <p className='text-orange-600 font-semibold text-xl mt-3'>03.  </p>  
    <p className='text-gray-950 font-semibold text-lg pb-2'>Pay Per Click (PPC)</p>
<p className='text-gray-500 font-medium'>
WICTS is a PPC management company that provides Pay Per Click (PPC) services.
</p>

            </div>
            <div >
          <p className='text-orange-600 font-semibold text-xl mt-3'>05.  </p>  
    <p className='text-gray-950 font-semibold text-lg pb-2'>Email Marketing Campaigns</p>
<p className='text-gray-500 font-medium'>
WICTS email marketing services are designed to help businesses achieve their goals, whether it’s increasing sales, building brand awareness.
</p>

            </div>
            <div >
          <p className='text-orange-600 font-semibold text-xl mt-3'>07.  </p>  
    <p className='text-gray-950 font-semibold text-lg pb-2'>Strategy and Analytics Consulting</p>
<p className='text-gray-500 font-medium'>
WICTS provides high-level strategy and analytics consulting to help organizations make better decisions, improve performance, and create shareholder value.
</p>

            </div>



            </div>
            {/* right div for content  */}
            <div className='w-96'>
            <div >
          <p className='text-orange-600 font-semibold text-xl'>02.  </p>  
    <p className='text-gray-950 font-semibold text-lg pb-2'>Video Marketing</p>
<p className='text-gray-500 font-medium'>
If you're like most business owners, you know that video is essential to marketing your business online.
</p>

            </div>
            <div >
          <p className='text-orange-600 font-semibold text-xl mt-3 '>04.  </p>  
    <p className='text-gray-950 font-semibold text-lg pb-2'>Content Marketing</p>
<p className='text-gray-500 font-medium'>
WICTS provides a comprehensive suite of content marketing services that helps businesses to effectively connect with their target audiences.
</p>

            </div>
            <div >
          <p className='text-orange-600 font-semibold text-xl mt-3'>06.  </p>  
    <p className='text-gray-950 font-semibold text-lg pb-2'>Search Engine Optimization (SEO)</p>
<p className='text-gray-500 font-medium'>
Are you struggling to improve your website's search engine rankings? WICTS can assist.
</p>

            </div>
            <div >
          <p className='text-orange-600 font-semibold text-xl mt-3'>08.  </p>  
    <p className='text-gray-950 font-semibold text-lg pb-2'>Website Design & Development</p>
<p className='text-gray-500 font-medium'>
WICTS provides Website Design & Development services that are unrivaled.
</p>

            </div>



            </div>
        </div>
        </div>
  
        </div>

        {/* Integrated digital marketing solution designed to be effective! */}
        <div className='mt-5 px-40'>
            <h1 className='text-gray-800 text-3xl font-bold'>Integrated digital marketing solution designed to be effective!</h1>
            <p className='text-gray-500 text-lg py-3 font-medium'>Our integrated digital marketing solution is designed to be effective, easy to use, and affordable. With WICTS’s digital marketing strategies, you can reach more customers and grow your business.</p>
            <ul className='list-disc'>
                <li className='listdisc text-gray-500 font-medium py-3'>We analyze the data and discover the most effective strategies for digital marketing.</li>
                <li className='listdisc text-gray-500 font-medium py-1'>We have unwavering faith in one another and the work we accomplish as a team.</li>
                <li className='listdisc text-gray-500 font-medium'>The customer-centric approach we follow makes us lead the industry!</li>
            </ul>
        </div>
     <Footer/>
    </div>
  )
}

export default DigitalMarjetting