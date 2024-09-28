import React from 'react'
import TopBar from '../common/Topbar'
import Navbar from './Navbar'
import Header from '../common/Header'
import Footer from '../common/Footer'

const HrmCrmHrcm = () => {

    const heading='ERP/ CRM/ HRMS DEVELOPMENT'
    const textArray=[
      {label:'Home'},
         {label:<span className='text-orange-600 text-2xl'>•</span> },
    {label:'OUR SERVICES'},
     {label:<span className='text-orange-600 text-2xl'>•</span>},

   
    {label:'ERP/ CRM/ HRMS DEVELOPMENT'}
    ]
  
  return (
    <div>

        <TopBar/>
        <Navbar/>
         <Header textArray={textArray} heading={heading} />
        <div className='px-36 mt-14'>
            <h1 className='text-gray-800 text-3xl font-bold'>We Are Committed And Focus On Our Customer Success Through Support And Innovation</h1>
            <p className='text-gray-600 text-lg font-medium mt-4'>We Know Services Is The Key To Business Success, The Right ERP Software Selection Is Important For Setting Your Company On The Right Growth Path And The Services Offered Play An Important Role To Get Full Solution That Will Make The Business Improvements You Are Looking For. Training And On-Going Education Are The Important And Essential Part Of Implementing A New ERP System And Are Critical For Gaining The Full Benefits Long-Term. Well-Trained Users Are Efficient And Provide You Expected Result And Helps In Improving Business Processes By Saving Time And Fewer Errors.</p>
            <div>
                <img src="https://wicts.co.in/wp-content/uploads/2023/04/GettyImages-1365534802-1536x959.jpg" alt="" />
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default HrmCrmHrcm