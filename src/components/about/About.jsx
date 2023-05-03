import { AboutCard } from './AboutCard'
import snappy from '../../assets/images/icon-snappy-process.svg'
import prices from '../../assets/images/icon-affordable-prices.svg'
import people from '../../assets/images/icon-people-first.svg'

export const About = () => {
  return (
    <section className='w-full h-[650px] px-1 md:px-20 text-center mt-36 mb-80 md:mb-0 md:mt-44 md:p-12'>
      <h2 className='font-custom text-4xl md:text-6xl mb-4 md:text-left'>Were different</h2>

      <div className='flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-12 mt-20'>
        <AboutCard 
          alt='Snappy Process'
          icon={snappy}
          title='Snappy Process'
          text="Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms."
        />

        <AboutCard 
          alt='Affordable Prices'
          icon={prices}
          title='Affordable Prices'
          text="We don't want you worring about high monthly costs. Our prices may be low, but we still offer the best coverage possible."
        />

        <AboutCard 
          alt='People First'
          icon={people}
          title='People First'
          text="Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it."
        />
      </div>

    </section>
  )
}
