import React from 'react'
import Header from '../header'
import About from './About'
import Amr from '../Footers/Amr'
import BackButton from '../BackButton'

const ScreenAbout = () => {
  return (
    <div>
        <Header/>
        <div className='p-4'>
            <BackButton/>
        </div>
        <About/>
        <Amr/>
    </div>
  )
}

export default ScreenAbout