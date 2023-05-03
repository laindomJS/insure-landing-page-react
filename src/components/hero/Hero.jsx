export const Hero = () => {
  return (
    <header className='flex flex-col md:flex-row-reverse w-full h-full relative'>
      {/* <div className='w-[650px] h-[590px] md:bg-pattern-intro-left-desktop bg-no-repeat md:absolute left-0 -bottom-[420px] z-50'></div>
      <div className='w-[420px] h-[590px] md:bg-pattern-intro-right-desktop bg-no-repeat md:absolute right-0 top-0 z-50'></div> */}
      
      <section className='w-full h-[340px] bg-image-intro-mobile md:bg-image-intro-desktop bg-cover bg-no-repeat static md:absolute md:w-[430px] md:h-full md:-bottom-36 md:right-36'></section>
      
      <section className='w-full h-[420px] md:h-[520px] bg-dark-violet text-center md:text-left py-20 md:py-32 md:pl-32 bg-pattern-intro-left-mobile bg-no-repeat md:bg-none'>
        <div className='w-11/12 md:w-[540px] m-auto md:m-0 h-fit'>
          <h1 className='font-custom text-white text-4xl md:text-6xl mb-4'>
            Humanizing 
            <br /> 
            your insurance.
          </h1>
          <p className='font-karla text-white text-sm md:text-base leading-6'>
            Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan thats right for you. Ensure you and your loved ones are protected
          </p>
          <button className='btn mt-6 md:border-white md:text-white cursor-pointer transition-all duration-300 hover:bg-white hover:text-dark-violet hover:border-transparent'>
            View Plans
          </button>
        </div>
      </section>

    </header>
  )
}