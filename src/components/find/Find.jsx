export const Find = () => {
  return (
    <section className='w-full h-[320px] px-1 md:px-20'>
      <article className='w-full h-56 md:h-52 bg-dark-violet flex flex-col md:flex-row items-center md:justify-between px-8 md:px-20 bg-pattern-how-we-work-mobile md:bg-pattern-how-we-work-desktop bg-no-repeat bg-contain bg-right-top py-6 md:py-0'>
        <h3 className='text-white font-custom text-3xl text-center md:text-left md:text-5xl md:w-[450px]'>
          Find out more about how we work
        </h3>
        <button className='uppercase font-karla text-white w-36 py-2 text-center bg-transparent border-2 border-white trnasition-colors duration-300 cursor-pointer hover:text-dark-violet hover:bg-white mt-4 md:mt-0'>
          How We Work
        </button>
      </article>
    </section>
  )
}