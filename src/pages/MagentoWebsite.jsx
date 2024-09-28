import React from 'react';
import Header from '../common/Header';
import TopBar from '../common/Topbar';
import Footer from '../common/Footer';
import Navbar from './Navbar';

const Hero = () => {
  const heading='MAGENTO WEBSITE DEVELOPMENT'
  const textArray=[
    {label:'Home'},
       {label:<span className='text-orange-600 text-2xl'>•</span> },
  {label:'OUR SERVICES'},
   {label:<span className='text-orange-600 text-2xl'>•</span>},
   {label:'WEBSITE DESIGN & DEVELOPMENT'},
   {label:<span className='text-orange-600 text-2xl'>•</span>},
 
  {label:'MAGENTO WEBSITE DEVELOPMENT'}
  ]

  return (
    <>

    <TopBar/>
    <Navbar/>
    <Header textArray={textArray} heading={heading} />
   
 
    {/* content section  */}
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Magento Development</h2>
        <p className="text-slate-500 tracking-wide font-semibold mb-4">
          Ecommerce Development Service is one of the most effective and user-friendly ecommerce platforms that help to take the shopping
          experience for customers to the next level. Due to its high functionalities and resourceful & flexible shopping cart system,
          Magento has created a unique place in ecommerce platforms in today’s competitive world. Being an open-source technology, Magento
          plays an important role in the success and achievement of various online businesses.
        </p>
        <p className="text-slate-500 font-semibold tracking-wide">
          If you look for highly powerful marketing and SEO tools then <span className="font-bold text-gray-800">Magento development</span> is the best
          technology to suit your business model. Today it is highly important to have a strong ecommerce presence over the internet and to make it possible,
          you need a Magento eCommerce CMS Software for development. We, at WICTS, strive to provide cost-effective online eCommerce solutions to businesses
          dealing in different domains. Our team of dedicated and experienced Magento eCommerce developers works hard to transform your vision into reality with
          their innovative approach and in-depth knowledge. Since the last years, the team has been successful in developing and designing various eCommerce
          stores for their prestigious clients.
        </p>
      </div>
    </section>
    <div className='w-full '>
        <img className='m-auto' src="https://wicts.co.in/wp-content/uploads/2023/04/artificial-intelligence-technology-futuristic-science.jpg" alt="" />
    </div>

    {/* lisyt of m,agentofvdjngvjkfdvf */}

    <div className='flex gap-32 w-fit ml-12'>
        {/* left div  */}
        <div className='ml-10'>
<h2 className='text-xl font-bold text-gray-600 mt-2'>Magento Development Services which we offer:</h2>
<ul className='list-disc font-semibold pl-5 text-slate-500 flex flex-col gap-1 mt-3 '>
    <li>Magento Ecommerce Solutions</li>
    <li>Magento Customization Services</li>
    <li>Magento Consulting & E-commerce Strategy</li>
    <li>Magento Module Development</li>
    <li>Magento ERP Integration</li>
    <li>Magento Design & Development</li>
    <li>osCommerce to Magento Migration</li>
    <li>Magento Enterprise Development</li>
    <li>Magento upgrade</li>
    <li>VirtueMart to Magento Migration</li>
    <li>Magento Website Design</li>
    <li>Magento Extension Development</li>
    <li>Magento Theme Customization</li>
    <li>Magento SAP Integration</li>
    <li>Magento Extension Integration</li>
    <li>Magento Ingram Micro Integration</li>
</ul>
        </div>
        {/* right div  */}
        <div>
        <h2 className='text-xl font-bold text-gray-600 mt-2'>Benefits of Hiring WICTS</h2>
        <ul  className='list-disc font-semibold pl-5 text-slate-500 flex flex-col gap-1 mt-3 '>
            <li>Dedicated Magento Developers</li>
            <li>24/7 Quality Assistance</li>
            <li>Flexible Engagement Models</li>
            <li>Result Oriented Workflow</li>
            <li> Competitive Pricing</li>
            <li>Security & Scalability</li>
            <li>Agile Method Approach</li>
        </ul>
        </div>
    </div>
    <Footer/>
    </>
  );
};

export default Hero;
