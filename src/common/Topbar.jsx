import React from 'react';
import { IoCall } from "react-icons/io5";
const TopBar = () => {
  return (
    <div className=" text-gray-600 text-sm py-3 border ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className='flex gap-2'><span className='text-blue-800 text-lg'><IoCall/></span> <span className='text-sm'>+91-9149246939</span> </span>
          <span className='text-slate-600'> info@wicts.co.in</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
