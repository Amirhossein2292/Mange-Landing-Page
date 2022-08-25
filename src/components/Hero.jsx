import React from 'react'
import { Link } from 'react-router-dom';
import illustration from '../assets/illustration-intro.svg'
const Hero = () => {
  return (
    <section id="hero">
        {/* Flex Container */}
        <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
            {/* Left Item */}
            <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
                    Bring everyone together to build better products
                </h1>
                <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit excepturi expedita nihil, voluptatibus ad ut quidem ipsa cupiditate maxime soluta!
                </p>
                <div className="flex justify-center md:justify-start">
                    <button className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"><Link to="/">Get Started</Link></button>
                </div>
            </div>

            {/* Image */}
            <div className="md:w-1/2">
                <img src={illustration} alt="illustration" />
            </div>
        </div>
    </section>
  )
}

export default Hero
