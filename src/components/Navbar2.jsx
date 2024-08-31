import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Searchbar from './Searchbar'

const Navbar2 = () => {
  return (
    <div className='h-[4.2rem] bg-white rounded-lg'>
      <div className='h-full flex items-center justify-between px-4'>
        <div className='pl-6'>
          <p className='text-3xl font-poppins font-medium tracking-tight'>Overview Dashboard</p>
        </div>
        <div>
            <Searchbar/>
        </div>
      </div>
    </div>
  )
}

export default Navbar2          