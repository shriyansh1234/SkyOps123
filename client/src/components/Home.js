import React from 'react'
import Navbar from "./Navbar"
import BannerBackground from "../Assets/home-banner-background.png"
import BannerImage from "../Assets/home-banner-image.png"
import { FiArrowRight } from "react-icons/fi"

const Home = () => {
  return (
    <div className = "home-container">
        <Navbar/>
        <div className="home-banner-container">
          <div className='home-bannerImage-container'>
            {/* <img src={BannerBackground} alt="" /> */}
          </div>

          <div className='home-text-section'>
            <h1 className='primary-heading'>
              Your Favorite...
            </h1>
            <p className='primary-text'>
              Some info...
            </p>
            <button className='secondary-button' >
              Book Now <FiArrowRight />
            </button>
          </div>

          <div className='home-image-container' >
            <img src={BannerImage} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Home