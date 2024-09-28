import React from 'react';
import Header from '../common/Header';
import TopBar from '../common/Topbar';
import Footer from '../common/Footer';
import Navbar from './Navbar';

const Opencart = () => {
  const heading='OPENCART WEBSITE DEVELOPMENT'
  const textArray=[
    {label:'Home'},
       {label:<span className='text-orange-600 text-2xl'>•</span> },
  {label:'OUR SERVICES'},
   {label:<span className='text-orange-600 text-2xl'>•</span>},
   {label:'WEBSITE DESIGN & DEVELOPMENT'},
   {label:<span className='text-orange-600 text-2xl'>•</span>},
 
  {label:'OPENCART WEBSITE DEVELOPMENT'}
  ]
  // <Header textArray={textArray} heading={heading} />
  return (
    <>

    <TopBar/>
    <Navbar/>
    <Header textArray={textArray} heading={heading} />
 
    {/* content section  */}
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">The Range Of Services Offered By Our Opencart Developer</h2>
        <p className="text-slate-500 tracking-wide font-semibold mb-4">
        Development of an E-commerce platform comes with a lot of competition. Nowadays, there are uncountable e-commerce platforms working hard to gain a huge customer base. OpenCart development has given a range of Graphics, rich module development, API integration, unique and customized themes, secure payment gateways and much more. Our OpenCart website development explores the unique functionalities and best features of OpenCart.
        </p>
        <p className="text-slate-500 font-semibold tracking-wide">
        Our Opencart developers are trained and well experienced in handling huge data and representing the design of e-commerce platform and a unique way. We choose the perfect blend of best UI, flexible operation, rich UI, safe payment gateway and rigorous support for valued customers. From small start-ups to large enterprises, we provide unique and profitable Opencart e-commerce development for boosting sales! We specialize in Opencart development and are well versed in developing SEO friendly applications to give a healthy start to your e-commerce applications. Our shopping cart development comes with the best scrolling, image processing, effortless browsing and ease of use.
        </p>
        <p className="text-slate-500 font-semibold tracking-wide mt-5">
        WICTS is a Opencart e-commerce development company with a team of experienced and knowledgeable programmers who have handled e-commerce projects successfully and are willing to establish more milestones. With our technical expertise, bug fixing and maintenance, end-to end solutions and highly interactive e-commerce development, your business can simply get a boost and rich market coverage. With affordable rates and highly interactive development, we aim to serve our customers and contribute in their success.
        </p>
      </div>
    </section>
    <div className='w-full '>
        <img className='m-auto' src="https://wicts.co.in/wp-content/uploads/2023/04/Level4-PMUnderstanding.jpg" alt="" />
    </div>

    {/* lisyt of m,agentofvdjngvjkfdvf */}

    <div className='flex gap-32 w-fit mx-12'>
        {/* left div  */}
        <div className='ml-12 max-w-xl flex flex-col gap-3'>
        <div >
<h2 className='text-xl font-bold text-gray-600 mt-2'>Opencart Shopping Cart Redesign</h2>

   <p className=' font-semibold  text-slate-500  mt-3 '>Need to redo your existing OpenCart online shop? Redesign your platform with the help of our expert team of developers.</p>

        </div>

        <div >
<h2 className='text-xl font-bold text-gray-600 mt-2'>Opencart Web App Development</h2>

   <p className=' font-semibold  text-slate-500  mt-3 '>A web app has become a digital necessity for businesses today. Contact WICTS expert developers to create a functional web app for your brand today.</p>

        </div>

        <div >
<h2 className='text-xl font-bold text-gray-600 mt-2'>OpenCart Templates and Theme Integration</h2>

   <p className=' font-semibold  text-slate-500  mt-3 '>Make your OpenCart site truly your own; customize the theme and UI/UX for the most impressive presentation.</p>

        </div>
        </div>
        {/* right div  */}
        <div className=' max-w-xl flex flex-col gap-3'>
        <div >
<h2 className='text-xl font-bold text-gray-600 mt-2'>Opencart Customization Development</h2>

   <p className=' font-semibold  text-slate-500  mt-3 '>Want to stand apart from the thousands of e-commerce sites out there? Use our help to customize your OpenCart development process and deploy a dynamic platform.</p>

        </div>

        <div >
<h2 className='text-xl font-bold text-gray-600 mt-2'>Opencart e-Commerce Development</h2>

   <p className=' font-semibold  text-slate-500  mt-3 '>Build your own e-commerce platform with the help of our industry-wide expertise. Use WICTS OpenCart development services to enhance your sales and mobility.</p>

        </div>

        <div >
<h2 className='text-xl font-bold text-gray-600 mt-2'>Opencart Development Services</h2>

   <p className=' font-semibold  text-slate-500  mt-3 '>Having a wide range of service offerings, our OpenCart solutions are available for companies across multiple industries. To get a consultation, call us today.</p>

        </div>
        </div>
    </div>
    <Footer/>
    </>
  );
};

export default Opencart;
