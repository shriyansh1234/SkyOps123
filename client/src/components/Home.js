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
            <img src={BannerBackground} alt="" />
          </div>

          <div className='home-text-section'>
            <h1 className='primary-heading'>
              Make Traveling Easier!
            </h1>
            <p className='primary-text'>
            Welcome to the future of aviation data management! Our team has crafted a cutting-edge solution to revolutionize the way we interact with aviation information.
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