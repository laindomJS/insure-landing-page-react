/* eslint-disable react/prop-types */
export const AboutCard = ({ icon, alt, title, text }) => {
  return (
    <article className='w-fit md:w-[530px]'>
      <img className='mx-auto md:mx-0 w-16 h-16 mb-6' src={icon} alt={alt} />
      <h3 className='font-custom text-2xl mb-2 text-center md:text-left'>{title}</h3>
      <p className='font-karla text-center md:text-left'>{text}</p>
    </article>
  )
}