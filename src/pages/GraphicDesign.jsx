import React from 'react'
import TopBar from '../common/Topbar'
import Navbar from './Navbar'
import Header from '../common/Header'
import Footer from '../common/Footer'

const GraphicDesign = () => {

    const heading='GRAPHICS DESIGNING'
    const textArray=[
      {label:'Home'},
         {label:<span className='text-orange-600 text-2xl'>•</span> },
    {label:'OUR SERVICES'},
     {label:<span className='text-orange-600 text-2xl'>•</span>},

   
    {label:'GRAPHICS DESIGNING'}
    ]

  return (
    <div>
        <TopBar/>
        <Navbar/>
      <Header textArray={textArray} heading={heading} />
        {/* div image with content  */}
        <div className='flex mt-20'>
            {/* only image data  */}
<div className='min-w-[23rem] flex justify-center items-center'>
<img src="https://wicts.co.in/wp-content/uploads/2023/04/png-clipart-robotics-eset-internet-security-android-robot-electronics-humanoid-robot-thumbnail-removebg-preview.png" alt="" />
</div>

            {/* only content data  */}
        <div className=' pr-32'>
            <h1 className='text-gray-800 text-3xl font-bold'>
            Best Graphic Design Company in India</h1>
            <p className='text-lg mt-3 font-medium text-gray-500'>WICTS is a Graphic Design Company that has a rich team of Young and Experienced Designers who come together to give company a brand name through these services.</p>
            <div className='flex mt-8 gap-5 '>
            {/* left div for content  */}
            <div className='w-96'>
            <div >
          <p className='text-orange-600 font-semibold text-xl '>01.  </p>  
    <p className='text-gray-950 font-semibold text-lg pb-2'>Branding & Identity</p>
<p className='text-gray-500 font-medium'>
Elevate your brand with our brand design services and stand out in the crowd.
</p>

            </div>
            <div >
          <p className='text-orange-600 font-semibold text-xl mt-3'>03.  </p>  
    <p className='text-gray-950 font-semibold text-lg pb-2'>Interactives</p>
<p className='text-gray-500 font-medium'>
Bring an Interactive Infographic to the big picture for a truly engaging experience.
</p>

            </div>
            <div >
          <p className='text-orange-600 font-semibold text-xl mt-3'>05.  </p>  
    <p className='text-gray-950 font-semibold text-lg pb-2'>Illustration</p>
<p className='text-gray-500 font-medium'>
Bring life to your project by some unique and interesting illustration and artworks.
</p>

            </div>
            <div >
          <p className='text-orange-600 font-semibold text-xl mt-3'>07.  </p>  
    <p className='text-gray-950 font-semibold text-lg pb-2'>E-Learning Videos</p>
<p className='text-gray-500 font-medium'>
We create eLearning videos for corporate training and education providers.
</p>

            </div>

            </div>
            {/* right div for content  */}
            <div className='max-w-xl                                                   '>
            <div >
          <p className='text-orange-600 font-semibold text-xl'>02.  </p>  
    <p className='text-gray-950 font-semibold text-lg pb-2'>Social Media Marketing</p>
<p className='text-gray-500 font-medium'>
Take your business game to the next level through our best social media marketing.
</p>

            </div>
            <div >
          <p className='text-orange-600 font-semibold text-xl mt-3 '>04.  </p>  
    <p className='text-gray-950 font-semibold text-lg pb-2'>Explainer Videos</p>
<p className='text-gray-500 font-medium'>
Tell your story in a more compelling way through outstanding videos of all kinds.
</p>

            </div>
            <div >
          <p className='text-orange-600 font-semibold text-xl mt-3'>06.  </p>  
    <p className='text-gray-950 font-semibold text-lg pb-2'>Infographics</p>
<p className='text-gray-500 font-medium'>
Flourish your dense data and make it appealing with our stunning infographics design.
</p>

            </div>
            <div >
          <p className='text-orange-600 font-semibold text-xl mt-3'>08.  </p>  
    <p className='text-gray-950 font-semibold text-lg pb-2'>eBooks & Reports</p>
<p className='text-gray-500 font-medium'>
Help your creative content stand out with our captivating eBooks and reports.


</p>

            </div>



            </div>
        </div>
        </div>
  
        </div>

   <div className='w-fit m-auto '>
    <img src="https://wicts.co.in/wp-content/uploads/2023/04/artificial-intelligence-technology-futuristic-science.jpg" alt="" />
   </div>
     <Footer/>
    </div>
  )
}

export default GraphicDesign