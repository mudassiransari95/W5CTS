import React from 'react'
import TopBar from '../common/Topbar'
import Navbar from '../pages/Navbar'
import Header from '../common/Header'
import Footer from '../common/Footer'

const HybridApplication = () => {

    
    const heading='HYBRID APP DEVELOPMENT'
    const textArray=[
      {label:'Home'},
         {label:<span className='text-orange-600 text-2xl'>•</span> },
    {label:'OUR SERVICES'},
     {label:<span className='text-orange-600 text-2xl'>•</span>},
     {label:'MOBILE APPLICATION'},
     {label:<span className='text-orange-600 text-2xl'>•</span>},
   
    {label:'HYBRID APP DEVELOPMENT'}
    ]
    // <Header textArray={textArray} heading={heading} />
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
            <img src="https://wicts.co.in/wp-content/uploads/2023/04/GetAppDone.jpg" alt="image no available" />
        </div>
      
    </div>
    {/* right div cvngrfvb */}
    <div className='flex flex-col'>
        <h1 className='text-3xl text-gray-700 font-bold pb-5'>Hybrid App Development Services</h1>
        <div className='flex max-w-3xl gap-10 h-72   '>
            <div className=''>
          <p className='text-orange-600 font-semibold text-xl'>01.  </p>  
    <p className='text-gray-950 font-semibold text-lg py-2'>Hybrid App Ideation & Consulting</p>
<p className='text-gray-500 font-medium'>

Hybrid app development has come a long way since its inception both in terms of framework maturity and use cases. We are a Hybrid app development agency that can help you validate your Hybrid app idea and help you ensure that the framework is the best technical solution for your product idea
</p>

            </div>
            <div>
         <p className='text-orange-600 font-semibold text-xl'> 02.</p>  
<p className='text-gray-950 font-semibold text-lg py-2'>Flutter App Development</p>
<p  className='text-gray-500 font-medium'>Our Flutter mobile app development services are devised to help you create a multi-platform existence. Right from finding the best product-market fit to seamlessly deploying your application across a number of platforms, our flutter developer can help you design, develop, test, and launch full-fledged Flutter apps.</p>

            </div>
        </div>
        {/* right div of bottom div   */}

        <div className=' max-w-3xl h-48   '>
            <div className=''>
          <p className='text-orange-600 font-semibold text-xl'>03.  </p>  
    <p className='text-gray-950 font-semibold text-lg py-2'>Flutter App Migration</p>
<p className='text-gray-500 font-medium'>
We help you migrate your Android and iOS app development using Flutter. Our team of Flutter Android app development and deployment experts specializes in taking your existing application across platforms and operating systems. We are the Flutter app development company that the world trusts for making platform-agnostic applications.
</p>

            </div>
        
        </div>




    </div>
</div>

{/* We Offer Custom Android App Development across all platforms */}

<div className='w-full flex'>
    <div className='max-w-3xl pt-5 pl-24'>
        <p className='text-3xl text-gray-700 font-bold pb-5'>Partner With Us To Create Highly Scalable Apps Using Flutter</p>
        <p className='text-gray-500 text-xl font-medium font-serif' >We understand the importance of having a visually unique brand image that is an extension of your business. Every iOS, Android, and web app that we create with our Flutter developer is a spitting image of the brand that it represents. We are a flutter app development company that ensures that all the Material Design & Cupertino components we use in your apps are highly customizable to give your users a Native replica application on every platform they use.
What results from this combination of feature-rich Flutter SDK and the aesthetically rich design component is an app that is powered by an expressive, flexible UI and robust architecture.
That is why, AppInventiv is considered the most reliable and impeccable company for flutter app development in USA, Asia, and European Regions. Our flutter developer team has expertise in building world class apps, we have developed a number of applications that have created new milestones.</p>
    </div>
    <div className='pl-10 ml-10'>
        <img src="https://wicts.co.in/wp-content/uploads/2023/04/1519643669phpgqbuE0.jpeg" alt="" />
    </div>
</div>
<Footer/>


    </div>
  )
}

export default HybridApplication