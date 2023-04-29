import { useRef } from 'react'
import logo from '../../assets/images/logo.svg'

export const NavbarContainer = () => {
  
  const menu = useRef(null)

  const handleClick = () => {
    menu.current.classList.toggle('translate-y-full')
  }
  
  return (
    <nav className='w-full lg:w-4/5 flex items-center justify-between mx-auto py-6 md:py-8 px-4 md:px-0 relative'>
      <img src={logo} alt='logo of the insure company' />
      <ul ref={menu} className='absolute top-16 left-0 md:top-0 md:left-0 bg-very-dark-violet md:bg-transparent md:static w-full min-h-screen md:min-h-fit md:w-fit flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 list-none font-custom pt-12 md:pt-0 transition-transform duration-300 translate-y-full md:translate-y-0'>
        <li className='option'>How we work</li>
        <li className='option'>Blog</li>
        <li className='option'>Account</li>
        <li className='btn'>View Plans</li>
      </ul>
      <span onClick={handleClick} className='md:hidden'>open</span>
    </nav>
  )
}