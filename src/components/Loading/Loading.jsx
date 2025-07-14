import React from 'react'
import './Loading.css'
import { PacmanLoader } from 'react-spinners'

function Loading() {
  return (
    <div className='loading dark:bg-slate-800 relative flex justify-center items-center'>
        <div className="loading-wrapper dark:text-white absolute ">
        <PacmanLoader color='#0077ff'/>
        </div>
    </div>
  )
}

export default Loading