import { CircularProgress } from '@mui/material'
import React from 'react'

const Loder = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center '>
        <CircularProgress className='text-black' />
    </div>
  )
}

export default Loder