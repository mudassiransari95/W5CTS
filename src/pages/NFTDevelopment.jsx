import React from 'react'
import TopBar from '../common/Topbar'
import Navbar from './Navbar'
import Header from '../common/Header'
import Footer from '../common/Footer'

const NFTDevelopment = () => {
    const heading='NFT PLATFORMS DEVELOPMENT'
    const textArray=[
      {label:'Home'},
         {label:<span className='text-orange-600 text-2xl'>•</span> },
    {label:'OUR SERVICES'},
     {label:<span className='text-orange-600 text-2xl'>•</span>},
   
    {label:'NFT PLATFORMS DEVELOPMENT'}
      
       
    ]
  return (
    <div>
        <TopBar/>
        <Navbar/>
        <Header textArray={textArray} heading={heading}/>

        <div className='flex w-full px-36 mt-40'>
            <div>
                <h1 className='text-3xl font-bold text-gray-700'>NON-FUNGIBLE TOKEN DEVELOPMENT FOR YOUR BUSINESS</h1>
            <p className='text-lg  mt-5  font-medium text-gray-500'>The most trending and upbeat non-fungible token is the technically secured and unique cryptographic token. These tokens are uniquely created and non-interchangeable i.e., they cannot be exchanged for any other token. We have expert NFT developers who create cryptographic tokens, which you can use to represent ownership over the real world or digital objects.</p>
            <p  className='text-lg  mt-5  font-medium text-gray-500'>Getting deep down to the working of NFT, the NFT world is incipient but strong. NFTs are being used for anything which is unique and needs provable ownership. Being unique and secure, no one can manipulate NFT. Owners can hold the NFT forever to secure an asset in Ethereum wallet. NFT tokens have a unique identifier that makes them non-interchangeable with another token, unlike ETH. Also, the token is reliable because each NFT has an owner and the information is publicly verifiable. The NFT token breaths on Ethereum and can transact on any Ether-based NFT market, providing a wide scope.</p>
            <p  className='text-lg  mt-5  font-medium text-gray-500'>Being a top-notch NFT development company, we have expertise in NFT token development services, where you get to earn royalties every time a token is sold. Opt your non-fungible token development with us and sell over any platform worldwide without any intermediate authority. We provide NFT development services for digital content such as art, music and videos, domain names, gaming items, investment, land acquisition, and other physical items that are unique.</p>
            </div>
            <div className='min-w-[25rem] flex justify-end items-center'>
<img src="https://wicts.co.in/wp-content/uploads/2023/04/png-clipart-robotics-eset-internet-security-android-robot-electronics-humanoid-robot-thumbnail-removebg-preview.png" alt="" />
            </div>
        </div>

<Footer/>

    </div>
  )
}

export default NFTDevelopment