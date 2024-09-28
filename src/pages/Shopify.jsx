import React from 'react';
import Header from '../common/Header';
import TopBar from '../common/Topbar';
import Footer from '../common/Footer';
import Navbar from './Navbar';
import { Key } from 'lucide-react';

const Shopify = () => {

    const heading='SHOPIFY WEBSITE DEVELOPMENT'
    const textArray=[
      {label:'Home'},
         {label:<span className='text-orange-600 text-2xl'>•</span> },
    {label:'OUR SERVICES'},
     {label:<span className='text-orange-600 text-2xl'>•</span>},
     {label:'WEBSITE DESIGN & DEVELOPMENT'},
     {label:<span className='text-orange-600 text-2xl'>•</span>},
   
    {label:'SHOPIFY WEBSITE DEVELOPMENT'}
    ]
  
  return (
    <>
	
    <TopBar/>
    <Navbar/>
    <Header textArray={textArray} heading={heading} />
   
    {/* content section  */}
    <div className='w-full px-20 mt-14'>

  <h1 className='font-bold text-gray-700 text-3xl'>Our Range of Shopify Design & Development Services</h1>
  <p  className='text-gray-500 text-lg font-semibold py-7'>As a trusted Shopify development agency, we are here to help you with the widest range of Shopify Services. You can hire Shopify experts from us to leverage the benefits of these remarkable services.</p>
    </div>
    <div className='w-full  mb-5 px-20 '>
        <img className='m-auto' src="https://wicts.co.in/wp-content/uploads/2023/04/E-1.gif" alt="" />
    </div>

    {/* lisyt of m,agentofvdjngvjkfdvf */}

{/* content section dfjerkgvregv */}
<div className='flex gap-24 px-20'>
    <div>
        <ol  className='list-decimal list-inside'>
            <li className='text-xl font-bold text-gray-600 mb-2'> Shopify Store Setup and Configuration</li>
            <li className='text-gray-500 text-lg font-semibold '>Shopify Migration</li>
            <li className='text-gray-500 text-lg font-semibold mt-1'> Shopify App Development</li>
            <li className='text-gray-500 text-lg font-semibold mt-1'>Shopify Plus Development</li>
        </ol>
    </div>
    <div>
    <ol  className='list-decimal list-inside'>
            <li className='text-xl font-bold text-gray-600 mb-2'>Shopify Theme Design and Customization</li>
            <li className='text-gray-500 text-lg font-semibold '>Shopify Integration</li>
            <li className='text-gray-500 text-lg font-semibold mt-1'> Shopify SEO</li>
            <li className='text-gray-500 text-lg font-semibold mt-1'>Shopify Maintenance, and Support</li>
        </ol>
    </div>
</div>
    <Footer/>
    </>
  );
};

export default Shopify;
