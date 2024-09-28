import React from 'react';
import Header from '../common/Header';
import TopBar from '../common/Topbar';
import Footer from '../common/Footer';
import Navbar from './Navbar';

const WordPress = () => {
  
    const heading='WORDPRESS WEBSITE DEVELOPMENT'
    const textArray=[
      {label:'Home'},
         {label:<span className='text-orange-600 text-2xl'>•</span> },
    {label:'OUR SERVICES'},
     {label:<span className='text-orange-600 text-2xl'>•</span>},
     {label:'WEBSITE DESIGN & DEVELOPMENT'},
     {label:<span className='text-orange-600 text-2xl'>•</span>},
   
    {label:'WORDPRESS WEBSITE DEVELOPMENT'}
    ]
  
  return (
    <>

    <TopBar/>
    <Navbar/>
    <Header textArray={textArray} heading={heading} />
   

    {/* content section  */}
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4"></h2>
        <p className="text-slate-500 tracking-wide  font-medium mb-4  text-lg">
        WordPress is a simple yet quite robust Content Management System that helps businesses to make their strong online presence over the internet. Being an open source program, it comes with numerous features which help enterprises and organizations to boost their online presence and improve ROI. WordPress is not just about developing a feature-rich and interactive business website but also for individuals to create their own blogging site. Therefore if you want to turn your dreams into reality by having an engaging business website and attractive blogger site then there is no need to look beyond than WordPress development services from WICTS.
        </p>
        <p className="text-slate-500 font-medium text-lg tracking-wide">
    
     
     Being one of the    <span className="font-bold text-gray-800">renowned WordPress development companiest</span>  , we take pride in offering a comprehensive WordPress development services to startups and businesses at cost-effective pricing. We have a team of highly talented and experienced  <span className="font-bold text-gray-800"> WordPress developers</span>    who strives to provide top-notch and effective web solutions for a wide array of businesses using cutting-edge WordPress technology. Our sole focus is to provide cost-effective yet effective solutions to the clients as per their business needs and requirements.

        </p>
      </div>
    </section>
    <div className='w-full '>
        <img className='m-auto' src="https://wicts.co.in/wp-content/uploads/2023/04/Level4-PMUnderstanding.jpg" alt="" />
    </div>

    {/* lisyt of m,agentofvdjngvjkfdvf */}

    <div className='flex gap-64 w-fit ml-12'>
        {/* left div  */}
        <div className='ml-10'>
<h2 className='text-xl font-bold text-gray-600 mt-2'>Our Key Services</h2>
<ul className='list-disc font-semibold pl-5 text-slate-500 flex flex-col gap-1 mt-3 '>
    <li> WordPress Web Development</li>
    <li>WordPress Design</li>
    <li>WordPress Migration and Upgrade</li>
    <li>WordPress SEO</li>
    <li>WordPress E-Commerce Development</li>
    <li>PSD to WordPress Service</li>
    <li>WordPress Customization</li>
    <li>WordPress Module Development</li>
    <li>WordPress Support</li>
    <li>Plugin Development</li>
</ul>
        </div>
        {/* right div  */}
        <div>
        <h2 className='text-xl font-bold text-gray-600 mt-2'>Benefits of Hiring Solutions at WICTS</h2>
        <ul  className='list-disc font-semibold pl-5 text-slate-500 flex flex-col gap-1 mt-3 '>
            <li>Talented and Well-Versed WordPress developers</li>
            <li>Agile Approach in Every Project</li>
            <li>High Coding Standards</li>
            <li>100% Client Satisfaction</li>
            <li> High Performance & Speed</li>
            <li>Timely Completion of Project</li>
            <li>No Hidden Cost</li>
            <li> Flexibility</li>
            <li> Customized Solutions</li>
        </ul>
        </div>
    </div>
    <Footer/>
    </>
  );
};

export default WordPress;
