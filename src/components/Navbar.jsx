import React from 'react'

const Navbar = ({theme,setTheme}) => {
  return (
    <>
    <div className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-mdium bg-white/50 dark:bg-gray-900/70'>
    <h1>hi</h1>
    <img src={theme==='dark'?'../assets/logo_dark':'../assets/logo'}/>
    </div>
    </>
  )
}

export default Navbar
