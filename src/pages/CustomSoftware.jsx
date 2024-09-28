import React from 'react'
import TopBar from '../common/Topbar'
import Navbar from './Navbar'
import Header from '../common/Header'
import Footer from '../common/Footer'

const CustomSoftware = () => {
 
    const heading='CUSTOM SOFTWARE DEVELOPMENT'
    const textArray=[
      {label:'Home'},
         {label:<span className='text-orange-600 text-2xl'>•</span> },
    {label:'OUR SERVICES'},
     {label:<span className='text-orange-600 text-2xl'>•</span>},

   
    {label:'CUSTOM SOFTWARE DEVELOPMENT'}
    ]
  
  return (
    <div>
        <TopBar/>
        <Navbar/>
     <Header textArray={textArray} heading={heading} />
{/* image div for and also text content  */}

        <div className='w-full px-28 mt-20'>
            <h1 className='text-3xl font-semibold text-gray-700'>Our Suite of Custom Software Development Services</h1>
            <p className='text-base my-4 font-medium text-gray-500'>As a custom software development company , we offer a wide range of software development services that meet your specific business needs.</p>
<img className='m-auto' src="https://wicts.co.in/wp-content/uploads/2023/04/1519643669phpgqbuE0.jpeg" alt="" />
        </div>
        {/* only caontent div  */}
        <div className='w-fit  flex gap-2 m-auto'>
            {/* first div  */}
<div className='w-64 h-[max-content'>
    <div>
        <h1 className='text-2xl mt-4 font-semibold text-gray-700'>Software Consulting Services</h1>
        <p  className='text-base mt-1 font-medium text-gray-500'>As one of the most sought-after custom software development companies, we analyze your business needs, conceptualize software, and help you get the best value from its development. Our team also assists you in selecting the right technology stack by reviewing pros and cons of technologies before starting the project.</p>
    </div>
    <div>
    <h1 className='text-2xl mt-4 font-semibold text-gray-700'>Custom CRM Development Services</h1>
    <p  className='text-base mt-1 font-medium text-gray-500'>As a coveted software application development company, we also offer custom CRM software development services that are focused on automating your business processes, improving relationships with customers, and driving up efficiency of business operations.</p> 
    </div>
</div>
{/* second div  */}
<div className='w-64 h-[max-content'>
    <div>
        <h1 className='text-2xl mt-4 font-semibold text-gray-700'>Custom Software Development Services</h1>
        <p  className='text-base mt-1 font-medium text-gray-500'>In today’s highly volatile and competitive market landscape, custom software development helps you to achieve the desired business proficiency. WICTS is a custom software  development company that delivers you just the right software tailored to your business needs.</p>
    </div>
    <div>
    <h1 className='text-2xl mt-4 font-semibold text-gray-700'>API Development Services</h1>
    <p  className='text-base mt-1 font-medium text-gray-500'>Our custom software developers offer robust API development and API integration services for your software applications to seamlessly connect with your customers and vendor partners and drive better revenues.</p> 
    </div>
</div>
{/* third div for content  */}
<div className='w-64 h-[max-content'>
    <div>
        <h1 className='text-2xl mt-4 font-semibold text-gray-700'>Enterprise Software Development Services</h1>
        <p  className='text-base mt-1 font-medium text-gray-500'>We help organizations become a lasting success by re-engineering enterprise software development solutions of different complexity levels. Our custom software application development solutions will help scale your business infrastructure while improving the key facets of your organization at the same time.</p>
    </div>
  
</div>

{/* fourth div for text content  */}

<div className='w-64 h-[max-content'>
    <div>
        <h1 className='text-2xl mt-4 font-semibold text-gray-700'>Software Product Development Services</h1>
        <p  className='text-base mt-1 font-medium text-gray-500'>We are a full-cycle software product development company that helps your organization with end-to-end product development services – starting from market research and business analysis to development, deployment, post-launch maintenance.</p>
    </div>
    <div>
    <h1 className='text-2xl mt-4 font-semibold text-gray-700'>Software Integration Services</h1>
    <p  className='text-base mt-1 font-medium text-gray-500'>When a company adopts a new technology, it may face challenges with its current applications. Our custom software developers use the industry-best techniques to handle all your implementation and software integration challenges, including architectural design, testing and execution..</p> 
    </div>
</div>

        </div>
        <Footer/>
    </div>
  )
}

export default CustomSoftware