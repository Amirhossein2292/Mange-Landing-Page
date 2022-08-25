import React from 'react'
import  logoImage  from '../assets/logo.svg'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
            <div className="pt-2">
                <img src={ logoImage } alt="logo"  />
            </div>
            {/* Menu Items */}
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-darkGrayishBlue">Home</Link>
              <Link to="/pricing" className="hover:text-darkGrayishBlue">Pricing</Link>
              <Link to="/product" className="hover:text-darkGrayishBlue">Product</Link>
              <Link to="/about" className="hover:text-darkGrayishBlue">About Us</Link>
              <Link to="/careers" className="hover:text-darkGrayishBlue">Careers</Link>
              <Link to="/community" className="hover:text-darkGrayishBlue">Community</Link>
            </div>
            {/* Button */}
            <button className=" hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-bightRedLight"><Link to="/">Get Started</Link></button>
        </div>
    </nav>
  )
}

export default Navbar