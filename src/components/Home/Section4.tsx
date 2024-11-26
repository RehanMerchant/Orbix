import { Button } from '../ui/button'
import Wallpaper from '/assets/Socialsphere.jpg'
const Section4 = () => {
  return (
    <div className="px-5 lg:py-20 md:py-14 py-8 md:px-10 lg:px-10 flex items-center justify-center">

      <img src={Wallpaper} className='h-[100svh] w-auto object-cover' alt='' />
    <div className='absolute text-center '>
        <p className='lg:text-4xl md:text-3xl text-2xl font-bold text-white '>

        Join Our Social Sphere

        </p>
        <p className='text-lg text-white px-10 '>
            Join Our Community, Meet creators from around the world.
            </p>
            <div>
              <Button className='bg-white hover:bg-white hover:opacity-90 lg:mt-5 mt-2 md:mt-3 text-black'>
                Socialize
              </Button>
            </div>
        </div>
    </div>
  )
}

export default Section4