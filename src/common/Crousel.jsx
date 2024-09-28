import React, { useEffect, useState } from 'react'


import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";



const BannerProduct = () => {
const [currentImage,setcurrentImage]=useState(0)
    const desktopImage=[
        "Our Branches are spread Pan India, It was painful to collect attendance data with our old Payroll software. Since when we have switch to WICTS Payroll Application we get biometric attendance data on just a click, being a web based application it is globally accessible.",
        "Our Branches are spread Pan India, It was painful to collect attendance data with our old Payroll software. Since when we have switch to WICTS Payroll Application we get biometric attendance data on just a click, being a web based application it is globally accessible.",
        "Our Branches are spread Pan India, It was painful to collect attendance data with our old Payroll software. Since when we have switch to WICTS Payroll Application we get biometric attendance data on just a click, being a web based application it is globally accessible.",
        "Our Branches are spread Pan India, It was painful to collect attendance data with our old Payroll software. Since when we have switch to WICTS Payroll Application we get biometric attendance data on just a click, being a web based application it is globally accessible.",
     
       
    ]
    const mobileImage=[
     'fgvjnvnvnvnvnvnvnvnvnregkkkkkkkkkkkkkkkkkkkkkkkkkk',
     'fgvjnvnvnvnvnvnvnvnvnregkkkkkkkkkkkkkkkkkkkkkkkkkk',
     'fgvjnvnvnvnvnvnvnvnvnregkkkkkkkkkkkkkkkkkkkkkkkkkk',
     'fgvjnvnvnvnvnvnvnvnvnregkkkkkkkkkkkkkkkkkkkkkkkkkk',
     'fgvjnvnvnvnvnvnvnvnvnregkkkkkkkkkkkkkkkkkkkkkkkkkk',
    ]

    const nextImage=()=>{
        if(desktopImage.length-1>currentImage){
            setcurrentImage(preve=>preve+1)
        }
    }
    const preveImage=()=>{
        if(currentImage!==0){
            setcurrentImage(preve=>preve-1)
        }
    }

    useEffect(()=>{
        const interval=setInterval(()=>{
            if(desktopImage.length-1>currentImage){

                nextImage()
            }else {
                setcurrentImage(0)
            }
        },5000)
        return ()=>clearInterval(interval)
    },[currentImage])

  return (
    <div className='container mx-auto px-4 rounded '>
        <div className='h-64  md:h-96 w-full bg-slate-100 relative '>
            <div className='absolute flex  z-10 h-full w-full md:flex items-center'>
                <div className='flex justify-between   w-full text-2xl'>
                    
                <butto onClick={preveImage} className='bg-white shadow-md rounded-full p-1' ><FaAngleLeft/></butto>
                <butto onClick={nextImage} className='bg-white shadow-md rounded-full p-1'><FaAngleRight/></butto>
                </div>
            </div>

    {/* desktop and tablet version */}

           <div className='hidden md:flex h-full w-full overflow-hidden'>
           {
                desktopImage.map((imageUrI,index)=>{
                    return(
                        <div className='w-full h-full min-h-full min-w-full transition-all'  style={{transform:`translatex(-${currentImage*100}%)`}}>
                            <div className='w-fit h-28 background mix-blend-multiply flex relative m-auto pt-8 '>
                           <img className='w-28 h-28 mix-blend-screen   transition-all ' src="https://wicts.co.in/wp-content/uploads/2023/04/w-258x258.gif" alt="" />
                           <img className='w-28 h-28  absolute z-50 top-8 left-14 rounded-full' src="https://wicts.co.in/wp-content/uploads/2023/04/w-258x258.gif" alt="" />
                           <img className='w-28 h-28 transition-all'src="https://wicts.co.in/wp-content/uploads/2023/04/w-258x258.gif" alt="" />
                            </div>
                      <p className='text-center mt-20 max-w-3xl mx-auto'>{imageUrI}</p>
                         </div>
                    )
                })

            }
           </div>
           {/* mobile  version */}

           <div className='flex h-full w-full overflow-hidden md:hidden'>
           {
                mobileImage.map((imageUrI,index)=>{
                    return(
                        <div className='w-full h-full min-h-full min-w-full transition-all'  style={{transform:`translatex(-${currentImage*100}%)`}}>
                         <p>{imageUrI}</p>
                    
                         </div>
                    )
                })

            }
           </div>
           
        </div>
    </div>
  )
}

export default BannerProduct