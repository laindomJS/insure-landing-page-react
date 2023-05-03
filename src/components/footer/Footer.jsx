import logo from '../../assets/images/logo.svg'
import { FaInstagram, FaTwitter, FaFacebook, FaPinterest } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className='mt-12 w-full h-[200px] bg-very-light-gray p-12 bg-pattern-footer-mobile md:bg-pattern-footer-desktop bg-contain bg-no-repeat bg-left-top md:flex md:justify-between md:items-center'>
      <img className='mx-auto md:w-60' src={logo} alt="the logo of the insure company" />
      <div className='flex items-center space-x-8 mt-6 mx-auto w-fit'>
        <FaFacebook className='icon' />
        <FaTwitter className='icon' />
        <FaPinterest className='icon' />
        <FaInstagram className='icon' />
      </div>
    </footer>
  )
}