import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);

  };

  const [application, setapplication] = useState(false);
  const [design, setdesign] = useState(false);
const [onmouseEnter, setonmouseEnter] = useState(false);
  return (
    <nav className="shadow-sm">
      <div className="container mx-auto flex justify-between items-center color h-28 font-semibold">
        <div className="text-black text-lg font-bold w-28 h-28 object-cover">
    <img className='mt-5' src="https://wicts.co.in/wp-content/uploads/2021/04/Wicts_logo-removebg-preview-1.png" alt="" />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black">
            Menu
          </button>
        </div>
        <div className={`w-full md:flex md:items-center md:w-auto ${isOpen ? '' : 'hidden'}`}>
          <ul className="md:flex md:justify-end text-base">
            <li className="md:ml-4 ">
              <a href="#" className="block hover:text-red-500 text-black py-2 px-1">Home</a>
            </li>
            <li className="md:ml-4">
              <a href="#" className="block hover:text-red-500 text-black py-2 px-1">About Us</a>
            </li>
            <li className="md:ml-4  relative " onMouseEnter={()=>setonmouseEnter(true)} onMouseLeave={()=>setonmouseEnter(false)}>
              <a href="#" className=" hover:text-red-500 text-black py-2 px-1 flex items-center ">Services  <ChevronDown className="ml-1 mt-1 h-4 w-4" /></a>
    { onmouseEnter &&      <div className=' absolute z-50  cursor-pointer rounded  w-56 h-fit bg-white shadow-xl pr-2 pl-4 pt-3 pb-4 text-slate-500 text-sm font-bold flex flex-col gap-3'>

<p onMouseEnter={()=>setdesign(true)} onMouseLeave={()=>setdesign(false)} className='relative hover:text-orange-400'>Website Design & <p className='flex items-center'>Deveelopement <ChevronDown className=" mt-1 h-4 w-4" /></p> 

{design  &&   <div className='absolute left-52 ml-1 rounded top-2 w-56 h-48 bg-white shadow-xl p-5 flex flex-col gap-2'>
        <Link to={'/magento'} className='text-slate-500  hover:text-orange-400'>Magento Website</Link>
        <Link to={'/opencart'} className='text-slate-500  hover:text-orange-400'>Opencart Website</Link>
        <Link to={'/phpLaravel'} className='text-slate-500  hover:text-orange-400'>PHP Laravel / Codignitor Website</Link>
        <Link to={'/shopify'} className='text-slate-500  hover:text-orange-400'>Shopify Website</Link>
        <Link to={'/wordpress'} className='text-slate-500  hover:text-orange-400'>WordPress Website</Link>
  
</div>}

</p>
<p  onMouseEnter={()=>setapplication(true)} onMouseLeave={()=>setapplication(false)} className='hover:text-orange-400 relative'>Mobile Application  <p className='flex items-center'>Deveelopement <ChevronDown className=" mt-1 h-4 w-4" /></p>
{application  &&   <div className='absolute left-52 ml-1 rounded -top-2 w-56 h-48 bg-white shadow-xl p-5 flex flex-col gap-2'>
        <Link to={'/androidapplication'} className='text-slate-500  hover:text-orange-400'>Android Application</Link>
        <Link to={'/hybridapplication'} className='text-slate-500  hover:text-orange-400'>Hybrid Application</Link>
        <Link to={'/IOSApplication'} className='text-slate-500  hover:text-orange-400'>IOS Application</Link>
 
  
</div>}
 
 </p>




<Link to={'/customsoftware'} className='hover:text-orange-400'>Custom Software Development </Link>
<Link to={'/DigitalMarjetting'} className='hover:text-orange-400'>Digital Marketting </Link>
<Link to={'/HrmCrmHrcm'} className='hover:text-orange-400'>ERP/CRM/CMS/HRMS Development </Link>
<Link to={'/GraphicDesign'} className='hover:text-orange-400'>Graphics Designing </Link>
<Link to={'/NFTDevelopment'} className='hover:text-orange-400'>NFT Development </Link>
<Link to={'/RPADevelopment'} className='hover:text-orange-400'>RPA Development </Link>
<Link to={'/BlockchainDevelopment'} className='hover:text-orange-400'>Blockchain Development </Link>
<Link to={'/InternetOfThings'} className='hover:text-orange-400'>Internet Of Things (IOT) </Link>
<Link to={'/AIARVRDevelopment'} className='hover:text-orange-400'>AI AR VR Development </Link>
<Link to={'/GameDevelopment'} className='hover:text-orange-400'>Game Development </Link>

           </div>}
            </li>
            <li className="md:ml-4">
              <a href="#" className="block hover:text-red-500 text-black py-2 px-1">Portfolio</a>
            </li>
            <li className="md:ml-4">
              <a href="#" className="block hover:text-red-500 text-black py-2 px-1">Contact</a>
            </li>
            <li className="md:ml-4">
              <a href="#" className="block hover:text-red-500 text-black py-2 px-1">Blog</a>
            </li>
            <li className="md:ml-4">
              <a href="#" className="block hover:text-red-500 text-black py-2 px-1">Careers</a>
            </li>
          </ul>
        </div>
        <div className='text-black'>
            <p className='hover:text-red-500'>Call Us: <span className='font-bold'>+91-9149246939</span> </p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;