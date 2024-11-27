import { Button } from '../ui/button'
import Wallpaper from  '/assets/Wallpaper.webp'

const Section1 = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center  pt-[60px] relative  ">
      <img src={Wallpaper} alt="" className=" w-full object-cover h-[300px] md:h-screen  "/>
          
   <div className=' md:absolute w-full    md:-mt-[100px]'>
    <div className='md:bg-muted/70 w-fit'>
    <p className='md:text-3xl text-2xl flex flex-col gap-2 font-bold font-mono  w-fit md:px-10 px-6 md:rounded-sm md:ml-10 md:py-6 py-10'>
      Orbix Alpha Season 4
      <span className='text-base font-light max-w-[400px]'>
   Event is currently Live, Users with Standard Pass or Above are allowed to Join.
      </span>
      </p>
      <div className='flex gap-4  md:px-10 px-6  md:ml-10 md:py-6'>
        <Button className='bg-blue-500 text-white hover:bg-blue-600'>
          Join Now
        </Button>
        <Button variant={"link"}>
          Already have Pass?
        </Button>
      </div>
    </div>


    </div>

      </div>
  )
}

export default Section1