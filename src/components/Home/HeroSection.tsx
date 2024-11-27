import { Button } from "../ui/button";
import { FaShoppingBag } from "react-icons/fa";
import { PiPlayFill } from "react-icons/pi";
import { RiExpandDiagonalLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate();
  return (
  

<section className=" bg-background md:pr-10 pt-[60px]  w-full justify-between flex md:items-center 
md:h-[calc(100vh)] h-[calc(100svh)]  ">

<div className="lg:w-fit w-full md:pl-10 lg:pr-5 lg:pl-10 md:-mt-20 mt-32">
  <p className="md:text-7xl text-6xl font-light md:justify-start w-full justify-center flex">
    Orbix
  </p>
  <p className="text-2xl  md:max-w-[660px] lg:max-w-[600px] w-full py-3 font-extralight border-foreground text-center md:text-start px-3 md:px-0 ">
  Immerse yourself in limitless virtual worlds. Connect, create, and
  live the moment with Orbix.
  </p>
  <div className="flex  gap-2 w-full md:justify-start justify-center mt-4 ">
<Button onClick={()=>{navigate('/explore')}} className="rounded-[4px] px-6 py-2 flex gap-2">
 <PiPlayFill/> Explore
</Button>
<Button className="rounded-[4px] px-6 py-2 flex gap-2">
<FaShoppingBag /> Market
</Button>
  </div>
</div>


<div className="lg:flex hidden relative items-center justify-center lg:w-[620px] shrink-0 h-[380px] bg-muted -mt-10  rounded-md">

<div className="absolute right-1 top-1 p-1 rounded-full cursor-pointer">
<RiExpandDiagonalLine/>
</div>

<div>
  <p className="text-2xl text-muted-foreground">
Playground
  </p>
</div>

</div>



   
    </section>

  );
};

export default HeroSection;
