import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({textArray,heading}) => {
  console.log(textArray)
  return (
    <header className="relative bg-gradient-to-r from-purple-500 via-blue-500 to-purple-800 text-white py-20 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0">
        <div className="bg-blue-400 opacity-50 rounded-full w-[500px] h-[500px] absolute top-0 left-1/4"></div>
        <div className="bg-purple-600 opacity-50 rounded-full w-[400px] h-[400px] absolute top-10 right-1/4"></div>
        <div className="bg-blue-700 opacity-50 rounded-full w-[600px] h-[600px] absolute bottom-10 left-1/2"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto text-center">
 
   
             
                <table className='m-auto'> 
                  <thead>
                  <th className="text-4xl font-bold mb-4 ">{heading}</th>
                  </thead>
                  <tbody >
                    <tr className='flex gap-2 w-fit mt-2  mx-auto '>
                    {
          textArray.map((text)=>{
            return(
                    text.link ?  <Link to={text.span.link1}> <td className='flex justify-center items-center' >{text.label}</td></Link> : <td className='flex justify-center items-center'>{text.label}</td> 
                  )
                })
              }
                    </tr>
                  </tbody>
                </table>
          
              <nav className="text-sm flex gap-3 justify-center items-center cursor-pointer">

              </nav>
                 
       
        </div>
    </header>
  );
};

export default Header;



















