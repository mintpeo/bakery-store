import React from 'react'
import './AppDownload.css'
import playstore from '../../assets/images/playstore.jpg'
import appstore from '../../assets/images/appstore.jpg'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'> 
        <p>For Better Experience Download <br />Bakery App</p>
        <div className="app-download-platforms">
            <img src={playstore} alt="" />
            <img src={appstore} alt="" />
        </div>
    </div>
  )
}

export default AppDownload
