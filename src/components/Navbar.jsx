import React from 'react'
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import AiOutlineSearch from '@material-ui/icons/SearchOutlined';
const Navbar = ({ darkMode }) => {
  return (
    <div className='sticky h-[56px] w-full top-0'>
      <div className='relative flex justify-end'>
        <div className='flex space-x-4 align-items-center'>
          <input type="search" className='absolute py-2 pl-2  my-2 w-full border border-black rounded-md right-0 left-0 mx-auto' name="" id="" placeholder='Search' />
          <AiOutlineSearch className='mt-2 h-[100px]' size={20} />

        </div>
        <div className='flex justify-center  space-x-4 pt-1 w-[150px] h-[35px] border border-blue-400 my-2'>
          <AccountCircleSharpIcon className='bg-blue-500' />
          <p className='text-blue-400'>SIGN IN</p>

        </div>
      </div>
    </div>
  )
}

export default Navbar