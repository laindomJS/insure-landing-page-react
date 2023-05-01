import { useRef, useState } from 'react'
import { BiMenu, BiX } from 'react-icons/bi'
import logo from '../../assets/images/logo.svg'

export const NavbarContainer = () => {
  
  const [condition, setCondition] = useState(false)
  const menu = useRef(null)
  
  const handleMenu = () => {
    menu.current.classList.toggle('-translate-x-full')
    if (!condition) {
      setCondition(true)
    } else {
      setCondition(false)
    }
  }
  
  return (
    <nav className='w-full lg:w-4/5 flex items-center justify-between mx-auto py-4 md:py-8 px-4 md:px-0 relative'>
      <img className='cursor-pointer' src={logo} alt='logo of the insure company' />
      <ul ref={menu} className='absolute top-16 left-0 md:top-0 md:left-0 bg-[#2A2B32] bg-nav-pattern-mobile md:bg-none bg-no-repeat bg-bottom md:bg-transparent md:static w-full min-h-screen md:min-h-fit md:w-fit flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 list-none font-karla pt-12 md:pt-0 transition-transform duration-300 -translate-x-full md:-translate-x-0 z-50'>
        <li className='option'>How we work</li>
        <li className='option'>Blog</li>
        <li className='option'>Account</li>
        <li className='btn'>View Plans</li>
      </ul>
      {
        condition
        ? (
          <BiX onClick={handleMenu} className='md:hidden w-8 h-8' />
        )
        : (
          <BiMenu onClick={handleMenu} className='md:hidden w-8 h-8' />
        )
      }
    </nav>
  )
}