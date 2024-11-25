import { FaDownload } from "react-icons/fa6";
import Image from '/assets/image.webp'
const Section3 = () => {
  return (
    <>
  
    <div className="w-full flex justify-center items-center bg-muted  lg:h-[200px] md:h-[160px] h-[130px] relative mt-12 bg-gradient-to-r from-pink-600 to-purple-500 text-white">
 <div className="absolute right-0 top-1 font-medium text-sm px-2 ">
Ends 19/1/25
 </div>
<img src={Image} alt="" className="h-[90%] relative"/>
<div className='absolute top-1 left-2 bg-red-800 rounded-sm px-2 text-sm md:text-base py-0.5'>
Live
</div>

    </div>
    <div className='w-full text-sm justify-between md:text-base py-1.5 bg-muted mb-12 flex items-center md:px-10 px-4'>
        <div className="flex gap-5">

        <p className='hover:underline underline-offset-2 cursor-pointer'>Register</p>
        <p className='hover:underline underline-offset-2 cursor-pointer flex items-center gap-1'><FaDownload/> Brochure</p>
        </div>
          <p className='hover:underline  underline-offset-2 cursor-pointer flex items-center gap-1'>Already have tickets?</p>
    </div>
    </>
  )
}

export default Section3