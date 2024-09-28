import React from 'react'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
  
    <div className='bg-gradient-to-r from-blue-700 to-purple-900 text-white px-28 mt-5'>
<div className='w-full flex justify-between h-36 items-center'>
  <div className='w-36 h-36 '>
    <img className='mt-5' src="https://wicts.co.in/wp-content/uploads/2021/04/Wicts_logo-removebg-preview-1.png" alt="" />
  </div>
  {/* phone image cdsbnvjhgufvr */}
  <div className='flex gap-24'>
  <div className='flex'>
    <div className='w-16 h-16'>
        <img className='w-10 h-12' src="https://wicts.co.in/wp-content/uploads/2019/08/img_box_29.png" alt="" />
    </div>
    <div>
        <h1 className='font-semibold tracking-wider'>+91-9149246939</h1>
        <h1 className='font-semibold tracking-wider'>info@wicts.co.in</h1>
    </div>
  </div>
{/* location jdsbkngfuyyyv */}

<div className='flex'>
    <div className='w-16 h-16'>
        <img className='w-10 h-12' src="https://wicts.co.in/wp-content/uploads/2019/08/img_box_30.png" alt="" />
    </div>
    <div>
        <h1 className='font-semibold tracking-wider'>Our Branches Located</h1>
        <h1 className='font-semibold tracking-wider'>India :- Mumbai , Delhi , Jammu & Kashmir</h1>
    </div>
  </div>
    
</div>

</div>
<hr className='w-full  bg-slate-400'/>
{/* fgvbujkrehgikregvfdvfr */}
<div className='flex gap-14 py-10'>
{/* about div  bkfhgiortbthr */}
<div className='max-w-xl'>
    <h1 className='text-white text-2xl  '>About</h1>
    <p className='font-semibold tracking-wide mt-8'>We focus on the needs of small to biggest market businesses to improve and grow their return. WICTS Provides Different IT Development Services :- Mobile App Development, Website Design & Development, Custom Software Development , ERP, CRM , Digital Marketing, AI, AR, VR, Blockchain Development, NFT Development, UI/UX Design, Game Development – Computer, Mobile . and so on.</p>
    <div className='flex my-5 gap-5'>
        <div><FaFacebookF /></div>
        <div><FaLinkedinIn /></div>
    </div>
    <p className='font-semibold tracking-wider'>© WICTS PVT. LTD. , All Rights Reserved.</p>
</div>
{/* policy div dfuygewhfbvrjfgvrdvr */}
<div>
    <h1 className='text-white text-2xl '>Policy</h1>
        <p className='font-semibold tracking-wide hover:text-orange-500 mt-8'>Terms & Conditions</p>
    <p className='font-semibold tracking-wide hover:text-orange-500'>Privacy Policy</p>
    <p className='font-semibold tracking-wide hover:text-orange-500'>Refund Policy</p>
    <p className='font-semibold tracking-wide hover:text-orange-500'>Cancellation Policy</p>
</div>
</div>
    </div>
  )
}

export default Footer