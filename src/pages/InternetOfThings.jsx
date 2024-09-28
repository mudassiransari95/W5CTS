import React from 'react'
import TopBar from '../common/Topbar'
import Navbar from './Navbar'
import Header from '../common/Header'
import Footer from '../common/Footer'

const InternetOfThings = () => {
    const heading='INTERNET OF THINGS (IOT)'
    const textArray=[
      {label:'Home'},
         {label:<span className='text-orange-600 text-2xl'>•</span> },
    {label:'OUR SERVICES'},
     {label:<span className='text-orange-600 text-2xl'>•</span>},
   
    {label:'INTERNET OF THINGS (IOT)'}
    ] 
  return (
    <div>

<TopBar/>
<Navbar/>
<Header textArray={textArray} heading={heading} />
<div className='w-full px-40 pt-20'>
    <div>
        <img src="https://wicts.co.in/wp-content/uploads/2023/04/GettyImages-1365534802-1536x959.jpg" alt="" />
    </div>
<h1 className='text-3xl font-bold text-gray-700'>Internet of Things (IOT)</h1>
<p className=' text-lg py-5   font-medium text-gray-500'>The internet of things is a system by which all physical devices around the world are connected via internet. It is a system of <span className='font-extrabold '> interconnected computing devices</span> , digital and mechanical machines endow with unique identifiers. IOT is all about expanding the power of internet beyond the devices including computers, smartphones, and other processes. It has become a need of today’s tech-savvy world, hence we at WICTS understands the need of the service. We have an excellent team of dedicated professionals who takes care of such requirements and make sure to meet them in best possible way. Clients who are waiting for such services just need to get in touch with us, we are here to provide tailor-made services and meet the expectations.</p>
<p className=' text-lg pb-5   font-medium text-gray-500'>Being one of the trusted designing and developing companies in the industry, we assure our clients for satisfied service. Our dedicated professionals never disappoint clients by their services. All you need to reach us just by making a call. We are here to provide you successful service at reasonable prices. Our experts will surely provide you the best quote from the industry.</p>
</div>
<Footer/>
    </div>
  )
}

export default InternetOfThings