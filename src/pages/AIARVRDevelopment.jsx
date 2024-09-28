import React from 'react'
import TopBar from '../common/Topbar'
import Navbar from './Navbar'
import Header from '../common/Header'
import Footer from '../common/Footer'

const AIARVRDevelopment = () => {
    const heading='ARTIFICIAL INTELLIGENCE (AI), AUGUMENTED REALITY (AR), VIRTUAL REALITY (VR) DEVELOPMENT'
    const textArray=[
      {label:'Home'},
         {label:<span className='text-orange-600 text-2xl'>•</span> },
    {label:'OUR SERVICES'},
     {label:<span className='text-orange-600 text-2xl'>•</span>},
   
    {label:'ARTIFICIAL INTELLIGENCE (AI), AUGUMENTED REALITY (AR), VIRTUAL REALITY (VR) DEVELOPMENT'}
    ]
  return (
    <div>
<TopBar/>
<Navbar/>
<Header heading={heading} textArray={textArray}  />

<div className='w-full px-40 mt-16'>
    <div className='flex justify-between'>
        <div className='  w-full '>
            <img className='ml-16' src="https://wicts.co.in/wp-content/uploads/2023/04/png-clipart-robotics-eset-internet-security-android-robot-electronics-humanoid-robot-thumbnail-removebg-preview.png" alt="" />
        </div>
        <div className='max-w-xl text-gray-500   text-base font-medium'>
            <h1 className='text-3xl font-bold text-gray-700'>ARTIFICIAL INTELLIGENCE</h1>
            <p className='mt-8'>WICTS establishes incredible illustrations of the triumph of artificial intelligence The visible coup of artificial intelligence is not something that you can ignore in the present setting. WICTS helms the process with advanced custom software development protocols and tactics. We rope in a wide variety of customized solutions that you can expect from the software developer:</p>
            <ul>
                <li className='listdisc'>● We enhance the customer relationship that you share with your target demographic segments.</li>
                <li className='listdisc'>● Our android app development software solutions tend to be a big help in your e-commerce ventures.</li>
                <li className='listdisc'>● We enhance bug tracking facilities in the process.
                </li>
                <li className='listdisc'>● We make win-win scenarios for our clients.</li>
            </ul>
            <p>How to use artificial intelligence for your business enhancement. The use of artificial intelligence is a common phenomenon in almost every business perspective. It is an epoch-making technology that breathes more power and professional excellence in the core of all business ventures of the modern era. Here is how we contribute our efforts as a custom software development company.

</p>
        </div>
    </div>
    <h1 className='text-3xl py-4 font-bold text-gray-700'>AUGMENTED REALITY AND VIRTUAL REALITY</h1>
    <p className=' text-lg pb-1   font-extrabold text-gray-500'>WICTS develops the most preeminent augmented reality and virtual reality experiences</p>
    <p className=' text-lg    font-medium text-gray-500'>Prime and elite; these are perhaps the two terms that one can think of as the reference is made to the top-notch augmented reality and virtual reality experiences, catered by us at the interface of WICTS. If you delve deep into our software development services, you will figure out that we are dedicated to create situation specific augmented reality and virtual reality repertoire that will modify your world as you know it.</p>
    <ul className='list-disc py-5 font-medium text-base flex flex-col gap-2 text-gray-500 pl-5'>
<li className='listdisc'>As a value driven company, we make earnest endeavors to take the development processes for augmented reality and virtual reality into a new level of excellence. Our solutions always stand out because of the input we spearhead.</li>
<li className='listdisc'>We entail our enriched experience in coding as well as divergent programming language so that we can create outstanding VR as well as 3D experiences.</li>
<li className='listdisc'>As VR as well as AR developers, we tend to build an awe-inspiring digital environment for the people who would use our products. </li>
<li className='listdisc'>Since we put the best app development software at the helm, we always create something like that of a real-time and real -world simulation.</li>
    </ul>
    <p className=' text-lg    font-extrabold text-gray-500'>The best custom software development tactics</p>
    <p className=' text-lg py-5   font-medium text-gray-500'>We understand the precise needs of augmented reality and virtual reality. That is why we appoint the best talents in the form of an android app development software and pull off the entire process with significant panache.</p>
    <ul className='list-disc  font-medium text-base flex flex-col gap-2 text-gray-500 pl-5'>
<li className='listdisc'>We can streamline VR devices</li>
<li className='listdisc'>We focus on revamping digital shopping experiences</li>
<li className='listdisc'>We bolster the conference of a customer in new age shopping experiences</li>
<li className='listdisc'>Our solutions create visual spatial exchanges or interactions </li>
<li className='listdisc'>We breathe in the power of android app development software in the crucial processes</li>
<li className='listdisc'>We let our technology assume a crucial role in impulse buys</li>
<li className='listdisc'>As a software development agency, we obliterate complications</li>
<li className='listdisc'>All our VR and AR solutions come with great compatibility features</li>
    </ul>
    <p className=' text-lg py-5   font-medium text-gray-500'>Our skills are the greatest assets of our organization and we never deviate from giving the best to our clientele.</p>
</div>
<Footer/>
    </div>
  )
}

export default AIARVRDevelopment