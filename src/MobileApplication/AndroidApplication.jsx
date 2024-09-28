import React from 'react'
import TopBar from '../common/Topbar'
import Navbar from '../pages/Navbar'
import Header from '../common/Header'
import Footer from '../common/Footer'

const AndroidApplication = () => {
    const heading='ANDROID APP DEVELOPMENT'
    const textArray=[
      {label:'Home'},
         {label:<span className='text-orange-600 text-2xl'>•</span> },
    {label:'OUR SERVICES'},
     {label:<span className='text-orange-600 text-2xl'>•</span>},
     {label:'MOBILE APPLICATION'},
     {label:<span className='text-orange-600 text-2xl'>•</span>},
   
    {label:'ANDROID APP DEVELOPMENT'}
    ]

  return (
    <div>
       <TopBar/> 
       <Navbar/> 
       <Header textArray={textArray} heading={heading} />  
{/* middle div with image and also content in the div  */}

<div className='w-full flex gap-6 mt-20'>
    {/* left div frhjv */}
    <div className='max-w-lg'>
        <div>
            <img src="https://wicts.co.in/wp-content/uploads/2023/04/1519643669phpgqbuE0.jpeg" alt="image no available" />
        </div>
        <div className='w-full flex justify-end'>
            <img className='w-96 h-96' src="https://wicts.co.in/wp-content/uploads/2023/04/wicts.gif" alt="" />
        </div>
    </div>
    {/* right div cvngrfvb */}
    <div className='flex flex-col'>
        <h1 className='text-3xl text-gray-700 font-bold pb-5'>Android App Development Services</h1>
        <div className='flex max-w-3xl gap-10 h-72   '>
            <div className=''>
          <p className='text-orange-600 font-semibold text-xl'>01.  </p>  
    <p className='text-gray-950 font-semibold text-lg py-2'>Android App Development <br /> Consultation</p>
<p className='text-gray-500 font-medium'>

Android applications come with their set of user base and customer expectations. We help businesses align their ideas with those expectations and an Android-specific user base. Our consultants help you choose the best Android platform and the way you can top the store.
</p>

            </div>
            <div>
         <p className='text-orange-600 font-semibold text-xl'> 02.</p>  
<p className='text-gray-950 font-semibold text-lg py-2'>Custom Android Application Development</p>
<p  className='text-gray-500 font-medium'>Our android application developers carry expertise in building robust, scalable Android solutions. We create custom Android software for a range of industries across the globe. We help you build a solution that presents your authentic voice in a store with millions of apps.</p>

            </div>
        </div>
        {/* right div of bottom div   */}

        <div className='flex max-w-3xl gap-10 h-72   '>
            <div className=''>
          <p className='text-orange-600 font-semibold text-xl'>03.  </p>  
    <p className='text-gray-950 font-semibold text-lg py-2'>Android Software Testing</p>
<p className='text-gray-500 font-medium'>
Our android mobile development process is engineered to be security and performance-first. We ensure that your android mobile application development is glitch-free and has zero lags. We perform a combination of manual and automated testing processes to ensure a future-ready android software development.
</p>

            </div>
            <div>
         <p className='text-orange-600 font-semibold text-xl'> 04.</p>  
<p className='text-gray-950 font-semibold text-lg py-2'>Multi-platform Deployment</p>
<p  className='text-gray-500 font-medium'>We are an android apps development company that specializes in seamless integration and deployment. Irrespective of which platform you want to be on, our expert android development services can help you get there. For a complete overview on Android development, check out this mobile application development guide.</p>
            </div>
        </div>




    </div>
</div>

{/* We Offer Custom Android App Development across all platforms */}

<div className='w-full flex'>
    <div className='max-w-3xl pt-5 pl-24'>
        <p className='text-3xl text-gray-700 font-bold pb-5'>We Offer Custom Android App Development across all platforms</p>
        <p className='text-gray-500 text-xl font-medium font-serif' > We do not limit our services to Smartphones. Our Android mobile app development portfolio is a testament to our expertise across various Android devices and platforms. <br />
The full-cycle custom Android app development process that we follow has helped us to delve deep into the Android world. And we have explored all possible solutions – Smartphones, Android tablets, Android Wear, and Android TV.
We use time-tested android app development software as our primary tech stack to deliver easy-to-use, intuitive apps. Our highly skilled Android app developers know the secret formula to develop apps that witness more than a million downloads on the Google Play Store.</p>
    </div>
    <div>
        <img src="https://wicts.co.in/wp-content/uploads/2023/04/GetAppDone.jpg" alt="" />
    </div>
</div>
<Footer/>


    </div>
  )
}

export default AndroidApplication