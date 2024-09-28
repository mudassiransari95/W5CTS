import React from 'react'
import TopBar from '../common/Topbar'
import Navbar from '../pages/Navbar'
import Header from '../common/Header'
import Footer from '../common/Footer'

const IOSApplication = () => {

    const heading='IOS APP DEVELOPMENT'
    const textArray=[
      {label:'Home'},
         {label:<span className='text-orange-600 text-2xl'>•</span> },
    {label:'OUR SERVICES'},
     {label:<span className='text-orange-600 text-2xl'>•</span>},
     {label:'MOBILE APPLICATION'},
     {label:<span className='text-orange-600 text-2xl'>•</span>},
   
    {label:'IOS APP DEVELOPMENT'}
    ]

  return (
    <div>
       <TopBar/> 
       <Navbar/> 
       <Header textArray={textArray} heading={heading} />   
{/* middle div with image and also content in the div  */}

<div className='w-full flex gap-6 mt-20 '>
    {/* left div frhjv */}
    <div className='max-w-2xl'>
        <div>
        <img src="https://wicts.co.in/wp-content/uploads/2023/04/GetAppDone.jpg" alt="" />
         
        </div>
     
    </div>
    {/* right div cvngrfvb */}
    <div className='flex flex-col '>
        <h1 className='text-3xl text-gray-700 font-bold pb-5'>IOS App Development Services</h1>
        <div className='flex max-w-xl gap-10    '>
            <div className=''>
          <p className='text-orange-600 font-semibold text-xl'>01.  </p>  
    <p className='text-gray-950 font-semibold text-lg py-2'>iOS App Development Consultation</p>
<p className='text-gray-500 font-medium'>

iOS applications, depending on the characteristics, are more suited for a particular type of business. Our team of iOS app developers help businesses decide whether iOS is a good fit for them and which tech stack best suits their needs.
</p>

            </div>
            <div>
         <p className='text-orange-600 font-semibold text-xl'> 02.</p>  
<p className='text-gray-950 font-semibold text-lg py-2'>Custom iOS Application Development</p>
<p  className='text-gray-500 font-medium'>Our iPhone application developers carry in expertise in creating scalable, future-forward iOS solutions. We specialize in delivering custom iOS software to both first time entrepreneurs and enterprises across the sectors, across the globe.</p>

            </div>
        </div>
        {/* right div of bottom div   */}

        <div className='flex max-w-xl gap-10    '>
            <div className=''>
          <p className='text-orange-600 font-semibold text-xl'>03.  </p>  
    <p className='text-gray-950 font-semibold text-lg py-2'>iOS Software Testing</p>
<p className='text-gray-500 font-medium'>
Our iPhone mobile development process is structured to keep security and performance at the center. We make sure your application is glitch free and hack proof by applying a mix of manual and AI-driven automated mode of testing.
</p>

            </div>
            <div>
         <p className='text-orange-600 font-semibold text-xl'> 04.</p>  
<p className='text-gray-950 font-semibold text-lg py-2'>Multi-platform Deployment</p>
<p  className='text-gray-500 font-medium'>We are a custom iPhone app development company that excels in a seamless integration of applications across multiple Apple devices. We are sure that your brand is on every device your users are active on.</p>
            </div>
        </div>




    </div>
</div>

{/* We Offer Custom Android App Development across all platforms */}

<div className='w-full flex mt-8'>
    <div className='max-w-3xl  pl-24'>
        <p className='text-3xl text-gray-700 font-bold pb-5'>Empowering Your Business Through Custom iOS Application Development</p>
        <p className='text-gray-500 text-xl font-medium font-serif' >We have a highly skilled team of experienced iPhone mobile app developers and our primary tech stack for developing iOS solutions is Objective-C and Swift.
        We are an iOS mobile app development company with a dedicated team of iPhone app developers that provide custom iPhone application development services keeping in regard the specific design and iOS application development company guidelines related to all individual platforms – iPad, iPhone, Apple TV, and Apple Watch. Our iOS app developers have built apps for diverse use cases ranging from real-time analytics to route matching, geo-tagging, video streaming, and more across multiple sectors.</p>
    </div>
    <div>
    <img src="https://wicts.co.in/wp-content/uploads/2023/04/1519643669phpgqbuE0.jpeg" alt="image no available" />
    </div>
</div>
<Footer/>


    </div>
  )
}

export default IOSApplication