import React from 'react'
import logo from '../resources/logo1.jpeg'
import ConnectingButtons from './ConnectingButtons'
import "./IntroductionPage.css"
const IntroductionPage = () => {
  return (
    <div className='introduction_page_container'>
      <div className='introduction_page_panel'>
      <img src={logo} alt= "logo" className="introduction_page_image"/>
        <ConnectingButtons />
      </div>
    </div>
  )
}

export default IntroductionPage;
