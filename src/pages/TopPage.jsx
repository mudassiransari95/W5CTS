import React, { useEffect, useState } from 'react'
import { IoTriangleOutline } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import "./toppage.css";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import BannerProduct from '../common/Crousel';


const TopPage = () => {

// let delay=100
// let text='hello how ara you sir'
// let removing=false
// let array=text.split('')
// const hello=array.pop()
// console.log('text',hello)
//     const [displayedText, setDisplayedText] = useState("");

   
//     let index = 0;
//     // text=text[index].slice(0,-1)
// //  index--;
//     useEffect(() => {
//       const intervalId = setInterval(() => {
//         setDisplayedText((prev) => prev + text[index]);
//         index++;
//         if (index === text.length-1) {
//              clearInterval(intervalId) 
 
//             //  setDisplayedText((prev) => prev + text[index]);
//             //  index++;
//             // if(index===0){

//             //     clearInterval(intervalId)
//             // }
//             }
   
 
        
        


        
//       }, delay);
  
//       return () => clearInterval(intervalId);
//     }, [text, delay,index])
  
// const data=displayedText.slice(0,-1)
// console.log('data',data)

const array=['Hello World','hello how are you sir','i am fine sir','for Your Ideas','for Your Digital Presence','for Your Business']
const [data, setdata] = useState(0);
// console.log('array',data)
const [text, setText] = useState('Hello World');
const [displayText, setDisplayText] = useState('');
const [index, setIndex] = useState(0);
const [isForward, setIsForward] = useState(true);

useEffect(() => {
  const interval = setInterval(() => {
    if (isForward) {
      if (index < text.length) {
        setDisplayText(displayText + text[index]);
        setIndex(index + 1);
      } else {
        setIsForward(false); // Switch to reverse when done
      }
    } else {
      if (index > 0) {
        setDisplayText(displayText.slice(0, -1));
        setIndex(index - 1);
      }else {
            setText(array[data])
            setIsForward(true);
            setdata(data+1)
            if(data===array.length-1){
                // setText(text)
                setdata(0)
            }
      }
    }
  
  }, 100); // Adjust timing here

  return () => clearInterval(interval);
  
}, [index, isForward, displayText, text]);


// let employee=0
let [emp, setemp] = useState(0);
let [project, setproject] = useState(0);
let [client, setclient] = useState(0);
useEffect(()=>{
    const increase=setInterval(()=>{
        if(emp<20){
            emp= emp+1
           setemp(emp)
           console.log('hello sir',emp)
        }
     const pro=   setInterval(() => {
            if(project<900){
                project= project+1
                setproject(project)
            }
        }, 20);
        const clie=   setInterval(() => {
            if(client<700){
                client= client+1
                setclient(client)
            }
        }, 20);
    },100)
},[])

const gradientStyle = {
  background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block',
  fontSize: '3rem', // Adjust size as needed
};

  return (
    <div className='w-screen mt-5'>

<div className='w-full flex justify-between '>
<div className='flex justify-center items-center w-1/2 ml-20 relative'>
<img className='absolute -left-20' src="https://wicts.co.in/wp-content/uploads/2020/03/seo.png" alt="" />
<div className='absolute right-0 top-56'>
<IoTriangleOutline  className='size-10 font-bold text icon-gradient  rotate-180   animate-moveAndRotate'/>

</div>
<div className='absolute left-32 top-64'>
<ImCross className=' text text-sm rotate-180   animate-moveAndRotate'/>

</div>
<div className='absolute right-0 bottom-44'>
<ImCross className=' text text-sm rotate-180   animate-moveAndRotate'/>

</div>
<div className='absolute right-32 bottom-20'>
<ImCross className='  rotate-180   animate-moveAndRotate'/>

</div>
<div className='absolute left-44 top-96'>
<IoTriangleOutline className='size-10  text-orange-400 rotate-180   animate-moveAndRotate'/>

</div>


    <div className='h-96  min-w-[30rem]'>
    <p className='font-semibold text-lg color'>WELCOME</p>
    <h1 className='font-bold  text-7xl color'>India's No.1  </h1>
    <h1 className='font-bold  text-7xl color'>  Software </h1>
    <h1 className='font-bold  text-7xl color'>  Solution </h1>
    <h1 className='font-bold  text-7xl color'>  Providers </h1>
    <h1 className='font-bold  text-7xl color'> {displayText} </h1>
    
<button className='text-white text-pretty font-bold text-sm flex justify-center items-center w-44 rounded-lg h-14   mt-5  gredient'>WHATSAPP NOW </button>
</div>
</div>
{/* image for wicts  */}

<div className='w-auto  mr-10'>
<div className={`transition-all  w-full  hightone  flex justify-center 
items-center     rounded-full `}>
    <div className=''>
        <img   className='hightone' src="https://wicts.co.in/wp-content/uploads/2023/04/w.gif" alt="" />
    </div>
  
</div>
</div>
</div>
<div className='  relative '>
    <div className='w-44 -top-36   z-50  absolute'>

    <img className='' src="https://wicts.co.in/wp-content/uploads/2020/03/element_01.png" alt="" />
    </div>

    {/* for div creating  */}
    <div className=' w-full relative'>
        <div className='bg-slate-50 circle rounded-full -left-20 top-5 relative'>
            <div className='absolute bottom-10 left-24'>
                <img src="https://wicts.co.in/wp-content/uploads/2020/03/points_bg.png" alt="" />
            </div>
        </div>
        <div className='absolute w-full top-20'>
<div className='m-auto w-96 text-center  color'>
    <p className=' color'>We Are Experts</p>
    <h1 className='font-bold  text-2xl color'>Best Service For Your Business
    With Our Best Experts</h1>
</div>
{/* divfjhnkdjfuifvrdfjri */}


<div className='w-full flex gap-8 mt-7'>
    <div className='w-64 h-72 ml-28 hover transition-all hover:scale-105 hover:transition-all hover:text-white color   bg-white p-5 rounded-xl shadow-2xl'>
<h1 className=' font-bold text-xl'>Digital Marketing,
    SEO,SMM,PPC,
    SOCAIL MEDIA 
    PRESENCE</h1>
<div className='w-10 h-0.5 rounded mt-1  bg-slate-500' >
    </div>
    <p className=' text-sm font-bold mt-5'>We are INDIA'S NO.1 GOOGLE CERTIFIED Digital Marketing Company</p>
    </div>
    {/* second div  */}
    <div className='w-64 h-64  rounded-xl bg-white p-5 shadow-2xl hover transition-all hover:scale-105 hover:transition-all hover:text-white color'>
<h1 className=' font-bold text-xl'>Mobile Application,
    Development</h1>
<div className='w-10 h-0.5 rounded mt-1  bg-slate-500' >
    </div>
    <p className=' text-sm font-bold mt-5'>We are INDIA'S NO.1 Mobile Application Development Company Which are Deliver till Now 300+ Application Delivery Successfully</p>
    </div>

{/* third div  */}
<div className='w-64 h-64 rounded-xl bg-white p-5 shadow-2xl hover transition-all hover:scale-105 hover:transition-all hover:text-white color'>
<h1 className=' font-bold text-xl'>Digital Marketing,
    SEO,SMM,PPC,
    SOCAIL MEDIA 
    PRESENCE</h1>
<div className='w-10 h-0.5 rounded mt-1  bg-slate-500' >
    </div>
    <p className=' text-sm font-bold mt-5'>We are INDIA'S NO.1 GOOGLE CERTIFIED Digital Marketing Company</p>
    </div>
{/* fourth div  */}
<div className='w-64 h-72 rounded-xl   bg-white p-5 shadow-2xl  hover transition-all hover:scale-105 hover:transition-all hover:text-white color'>
<h1 className=' font-bold text-xl'>Digital Marketing,
    SEO,SMM,PPC,
    SOCAIL MEDIA 
    PRESENCE</h1>
<div className='w-10 h-0.5 rounded mt-1  bg-slate-500' >
    </div>
    <p className=' text-sm font-bold mt-5'>We are INDIA'S NO.1 GOOGLE CERTIFIED Digital Marketing Company</p>
    </div>



</div>

        </div>

    </div>
</div>
{/* <div className='w-full px-20 mt-4'>
    <img src="https://wicts.co.in/wp-content/uploads/2023/04/GettyImages-1365534802-1536x959.jpg" alt="image " />

</div> */}

<div id='hidden' style={{height:"500px",backgroundColor:"aqua"}} className="break1 container-fluid text-center">
    <h1 id='hiddentext' style={{color:"white",font:"50px"}}></h1>
  </div>

{/* button div  */}
<div className='w-full mb-20'>
    <div className='w-fit m-auto color mt-8 text-center'>
<p className='py-2'>PRICING PLANS</p>
<h1 className='font-bold text-4xl'>DIGITAL MARKETING WITH SOCIAL PRESENCE</h1>
<div className='w-64 flex bg-slate-300 h-12 rounded-2xl m-auto mt-4'>
    <div className='bg-orange-600 w-32 rounded-2xl flex items-center justify-center text-white font-bold text-sm'>MONTHALY</div>
    <p className='flex items-center justify-center w-28  font-bold text-sm'>YEARLY</p>
</div>
    </div>

    <div className="container6">
    <div className="container6box">
      <div className="boxtextpart">
        <h1>$100</h1>
        <h1>
          BASIC PLAN <br />On page & Off page SEO for your website including</h1>
          <div style={{fontSize:"10px"}}>
          <ol class="list-group list-group-numbered">
  <li class="list-group-item">1. Extensive keyword research</li>
  <li class="list-group-item">2. Hand-crafted, Unique Title, Description and Keyword META tags</li>
  <li class="list-group-item">3. Keyword optimization of on page content</li>
  <li class="list-group-item">4. On and Off-site anchor text optimization</li>
  <li class="list-group-item">5. Source Code optimization</li>
  <li class="list-group-item">6. Maintenance of SEO to pages based on Google and Yahoo search engine algorithm updates</li>
  <li class="list-group-item">7. Ongoing competitive analysis | Search Engine Rank Monitoring</li>
  <li class="list-group-item">8. HTML sitemap creation</li>
  <li class="list-group-item">9. Robots.txt validation</li>
  <li class="list-group-item">10. Google sitemap utilization</li>
  <li class="list-group-item">11. XML sitemap setup</li>
  <li class="list-group-item">12. Image Optimization</li>
  <li class="list-group-item">13. SEO Friendly Content Creation</li>
  <li class="list-group-item">14. Site Link Building</li>
  <li class="list-group-item">15. Natural listings on major search engines (e.g., Google, Bing)</li>
  <li class="list-group-item">16. Article Submission to News and Press release sites</li>
  <li class="list-group-item">17. Listing on Local directories and searches</li>
  <li class="list-group-item">18. Listing on Industry authority sites</li>
  <li class="list-group-item">19. Creation of Blogs and Social Media Networks</li>
  <li class="list-group-item">20. Blog directory submissions for existing company blog, if applicable</li>
  <li class="list-group-item">21. Online & Social Media reputation monitoring</li>
</ol>

          </div>
      </div>
      <div className="boxtextpart">
       <h1>$200</h1>
        <h1>
          STANDARD PLAN <br />On page & Off page SEO for your website including</h1>
          <div style={{fontSize:"10px"}}>
          <ol class="list-group list-group-numbered">
  <li class="list-group-item">1. Extensive keyword research</li>
  <li class="list-group-item">2. Hand-crafted, Unique Title, Description and Keyword META tags</li>
  <li class="list-group-item">3. Keyword optimization of on page content</li>
  <li class="list-group-item">4. On and Off-site anchor text optimization</li>
  <li class="list-group-item">5. Source Code optimization</li>
  <li class="list-group-item">6. Maintenance of SEO to pages based on Google and Yahoo search engine algorithm updates</li>
  <li class="list-group-item">7. Ongoing competitive analysis | Search Engine Rank Monitoring</li>
  <li class="list-group-item">8. HTML sitemap creation</li>
  <li class="list-group-item">9. Robots.txt validation</li>
  <li class="list-group-item">10. Google sitemap utilization</li>
  <li class="list-group-item">11. XML sitemap setup</li>
  <li class="list-group-item">12. Image Optimization</li>
  <li class="list-group-item">13. SEO Friendly Content Creation</li>
  <li class="list-group-item">14. Site Link Building</li>
  <li class="list-group-item">15. Natural listings on major search engines (e.g., Google, Bing)</li>
  <li class="list-group-item">16. Article Submission to News and Press release sites</li>
  <li class="list-group-item">17. Listing on Local directories and searches</li>
  <li class="list-group-item">18. Listing on Industry authority sites</li>
  <li class="list-group-item">19. Creation of Blogs and Social Media Networks</li>
  <li class="list-group-item">20. Blog directory submissions for existing company blog, if applicable</li>
  <li class="list-group-item">21. Online & Social Media reputation monitoring</li>
</ol>

          </div>

      </div>
      <div className="boxtextpart">
      <h1>$350</h1>
        <h1>
          PREMIUM PLAN <br />On page & Off page SEO for your website including</h1>
          <div style={{fontSize:"10px"}}>
          <ol class="list-group list-group-numbered">
  <li class="list-group-item">1. Extensive keyword research</li>
  <li class="list-group-item">2. Hand-crafted, Unique Title, Description and Keyword META tags</li>
  <li class="list-group-item">3. Keyword optimization of on page content</li>
  <li class="list-group-item">4. On and Off-site anchor text optimization</li>
  <li class="list-group-item">5. Source Code optimization</li>
  <li class="list-group-item">6. Maintenance of SEO to pages based on Google and Yahoo search engine algorithm updates</li>
  <li class="list-group-item">7. Ongoing competitive analysis | Search Engine Rank Monitoring</li>
  <li class="list-group-item">8. HTML sitemap creation</li>
  <li class="list-group-item">9. Robots.txt validation</li>
  <li class="list-group-item">10. Google sitemap utilization</li>
  <li class="list-group-item">11. XML sitemap setup</li>
  <li class="list-group-item">12. Image Optimization</li>
  <li class="list-group-item">13. SEO Friendly Content Creation</li>
  <li class="list-group-item">14. Site Link Building</li>
  <li class="list-group-item">15. Natural listings on major search engines (e.g., Google, Bing)</li>
  <li class="list-group-item">16. Article Submission to News and Press release sites</li>
  <li class="list-group-item">17. Listing on Local directories and searches</li>
  <li class="list-group-item">18. Listing on Industry authority sites</li>
  <li class="list-group-item">19. Creation of Blogs and Social Media Networks</li>
  <li class="list-group-item">20. Blog directory submissions for existing company blog, if applicable</li>
  <li class="list-group-item">21. Online & Social Media reputation monitoring</li>
</ol>

          </div>
      </div>
    </div>
  </div>



</div>

<div className='w-full px-20 mt-4'>
    <img src="https://wicts.co.in/wp-content/uploads/2023/04/E-1.gif" alt="" />
</div>

<div className='w-full px-20 mt-8  color mb-20 flex'>
    <div className='w-2/3'>
<h2 className='font-bold'>Why Choose us</h2>
<p className='mt-4 font-semibold'>At WICTS, we develop Custom Software Solutions based on a range of platforms and technologies, including .Net, J2EE, J2SE, J2ME, PHP, embedded systems & diversifying as per the market requirements.</p>
<p  className='mt-4 font-semibold'>Developers at our Team WICTS have experience of carrying out complex and large scale web applications of various themes. WICTS provides numerous services comprise of Website Development, Mobile Applications, JAVA and .Net Programming, Software Testing, PHP Development, Oracle Microsystems, SEO/Digital Marketing. Our clear perception of the growing requirement of the corporate world in the IT industry, has enabled WICTS to develop programs of specific relevance for the present and the future.</p>
<button className='w-40 hover:border-blue-600 hover:bg-red-500 hover:text-white h-12 rounded mt-10  text-xs border border-red-400'>DISCOVER MORE</button>
</div>
<div className='w-80 flex flex-col items-end gap-16'>


    <div className='w-24 h-24 '>
    <p className='color text-7xl font-semibold relative'> {emp} <sup className='absolute text-red-500 text-2xl -right-1 top-0'>+</sup> </p>
    <p className='mt-2'>EMPLOYEES</p>
    </div>

    <div className='w-24 h-24 '>
    <p className='color text-7xl font-semibold relative'> {project} <sup className='absolute text-red-500 text-2xl  -right-10 top-0'>+</sup> </p>
    <p className='mt-2'>PROJECTS</p>
    </div>

    <div className='w-24 h-24 '>
    <p className='color text-7xl font-semibold relative'> {client} <sup className='absolute text-red-500 text-2xl  -right-10 top-0'>+</sup> </p>
    <p className='mt-2'>CLIENTS</p>
    </div>



    

</div>
</div>

<div className='w-full px-20 mt-4'>
  <img src="https://wicts.co.in/wp-content/uploads/2023/04/WL-1.gif" alt="" />
</div>

<div className='w-full px-20 mt-4' style={{display:"flex"}}>
 {/* <div style={{height:"600px",width:"50%",backgroundColor:"aqua"}} className="panel-group" id="accordion">
  <div className="panel panel-default">
    <div className="panel-heading">
      <h4 className="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
          Collapsible Group 1</a>
      </h4>
    </div>
    <div id="collapse1" className="panel-collapse collapse in">
      <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.</div>
    </div>
  </div>
  <div className="panel panel-default">
    <div className="panel-heading">
      <h4 className="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
          Collapsible Group 2</a>
      </h4>
    </div>
    <div id="collapse2" className="panel-collapse collapse">
      <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.</div>
    </div>
  </div>
  <div className="panel panel-default">
    <div className="panel-heading">
      <h4 className="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
          Collapsible Group 3</a>
      </h4>
    </div>
    <div id="collapse3" className="panel-collapse collapse">
      <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.</div>
    </div>
  </div>
</div> */}



<div style={{height:"50%",width:"50%"}}>
  <div >
  <span style={{color:"white",fontSize:"50px",marginTop:"100px",position:"absolute",marginLeft:"100px"}} class="material-symbols-outlined">
emoji_objects
</span>
    <h1 style={{color:"white",fontSize:"50px",position:"absolute",marginTop:"150px",marginLeft:"100px"}}>Have a project in mind? Let’s get to work.</h1>
    <h3 style={{color:"white",fontSize:"20px",position:"absolute",marginTop:"300px",marginLeft:"100px"}}>Find out how it works and ask any questions you may have.</h3>
    <a style={{color:"white",fontSize:"15px",position:"absolute",marginTop:"350px",marginLeft:"100px"}} href="">GET IN TOUCH</a>
  </div>
  <img src="https://wicts.co.in/wp-content/uploads/2020/03/figure_image2.png" alt="" />
</div>

</div>

{/* javascript countetd number div  */}


{/* collapsevdfnvjfdbgf */}

<div className='w-full px-20 mt-4' style={{width:"100%"}}>
  <img src="	https://wicts.co.in/wp-content/uploads/2023/04/GAME-DEVELOPMENT.gif" alt="" />
</div>
<BannerProduct/>
<div className='w-full px-20 mt-4' style={{display:"flex", marginTop:"30px",gap:"60px",marginBottom:"30px"}}>
    <div style={{display:"flex",flexDirection:"column"}}>
        <div>
        <img style={{height:"50px",width:"40px"}} src="	https://wicts.co.in/wp-content/uploads/2020/03/img_box_29_orange.png" alt="" />
        </div>

        <div>
        <h1>+91-9149246939</h1>
        <h1>info@wicts.co.in</h1>
        </div>
    </div>
<div style={{display:"flex",flexDirection:"column"}} >
    <img style={{height:"50px",width:"40px"}} src="https://wicts.co.in/wp-content/uploads/2020/03/img_box_30_orange.png" alt="" />
    <h1>Our Branches Located</h1>
    <h1>India :- Mumbai , Delhi , Jammu & Kashmir</h1>
</div>
</div>
<hr />

<div className='w-full px-20 mt-4' style={{display:"flex", marginTop:"40px",gap:"70px"}}>
    <div style={{ marginTop:"40px",width:"400px"}}>
        
        <b>About</b>
        <h3 style={{ marginTop:"40px"}}>We focus on the needs of small to biggest market businesses to improve and grow their return. WICTS Provides Different IT Development Services :- Mobile App Development, Website Design & Development, Custom Software Development , ERP, CRM , Digital Marketing, AI, AR, VR, Blockchain Development, NFT Development, UI/UX Design, Game Development – Computer, Mobile . and so on.</h3>
    </div>
    <div style={{ marginTop:"40px",width:"400px"}}>
        <b >Policy</b>
        <h3 style={{ marginTop:"40px"}}>  <ul>
      <li>Terms & Conditions</li>
      <li>Privacy Policy</li>
      <li>Refund Policy</li>
      <li>Cancellation Policy</li>
    </ul></h3>
    </div>

</div>

<div className='w-full px-20 mt-4' style={{height:"100px", display:"flex",gap:"20px"}}>
    <a style={{color:"orange"}} href="https://www.facebook.com/wicts"><FaFacebookF /></a>
    <a style={{color:"orange"}} href="https://in.linkedin.com/company/wicts-private-limited"><FaLinkedinIn /></a>
</div>
<hr />
<div className='w-full px-20 mt-4' style={{marginBottom:"50px"}}>
    <h1>© WICTS. All Rights Reserved.</h1>
</div>

    </div>
  )
}

 
export default TopPage