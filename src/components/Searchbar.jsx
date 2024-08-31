import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Searchbar = () => {
  return (
      <div className='max-w-[25rem] rounded-full px-4 bg-bodyBlue mr-8'>
            <SearchOutlinedIcon className=' text-searchGreen' fontSize='large'/>
            <input 
                type="text" 
                className='text-searchGreen font-poppins rounded-full p-1 outline-none bg-bodyBlue' 
            />
    </div>
  )
}

export default Searchbar;