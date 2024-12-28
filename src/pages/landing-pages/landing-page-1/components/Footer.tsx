import passion from '../../../../assets/Fuel your passion.png';

const Footer = () => {
  return (
    <div className='rounded-t-2xl  bg-neutral-800 text-gray-200 pt-16 px-5'>
      <div className='pb-10'>
        <img src={passion}/>
      </div>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
       <div>
        <p className='uppercase font-semibold text-lg'>
          Navigate
        </p>
        <ul>
          <ol>About</ol>
          <ol>Programs</ol>
          <ol>Coaches</ol>
        </ul>
       </div>
       <div>
        <p className='uppercase font-semibold text-lg'>
          Follow
        </p>
        <ul>
          <ol>LinkedIn</ol>
          <ol>Instagram</ol>
          <ol>Twitter</ol>
        </ul>
       </div>
       <div>
        <p className='uppercase font-semibold text-lg'>
          Contact
        </p>
        <ul>
          <ol>hi@maryojo.me</ol>
          <ol>37, Signal street</ol>
          <ol>OY </ol>
        </ul>
       </div>
       <div className='h-full w-full rounded-md'>
        <img src='https://360mediaventures.com/dev/wp-content/uploads/2013/03/map-placeholder.jpg' className='w-full h-full rounded-md object-cover'/>
       </div>
      </div>

      <div className='flex mt-16 pb-5 justify-between text-neutral-500'>
        <p>All rights reserved</p>
        <p>&copy; Copyright . Made by <a href='https://www.maryojo.me' className='underline'>Mary Ojo</a></p>
      </div>
    </div>
  )
}

export default Footer