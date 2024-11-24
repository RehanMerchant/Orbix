import { Button } from "../ui/button";
import { FaShoppingBag } from "react-icons/fa";
import { PiPlayFill } from "react-icons/pi";
const HeroSection = () => {
  return (
  

<section className=" bg-background  w-full justify-between flex md:items-center h-[calc(100vh-60px)]">

<div className="md:w-fit w-full md:pl-10 md:pr-5 lg:pl-20 md:-mt-20 mt-32">
  <p className="md:text-7xl text-6xl font-light md:justify-start w-full justify-center flex">
    Orbix
  </p>
  <p className="md:text-3xl text-2xl md:max-w-[360px] lg:max-w-[500px] w-full py-3 font-extralight border-foreground text-center md:text-start px-3 md:px-0 ">
  Immerse yourself in limitless virtual worlds. Connect, create, and
  live the moment with Orbix.
  </p>
  <div className="flex  gap-2 w-full md:justify-start justify-center mt-4 ">
<Button className="rounded-[4px] px-6 py-2 flex gap-2">
 <PiPlayFill/> Explore
</Button>
<Button className="rounded-[4px] px-6 py-2 flex gap-2">
<FaShoppingBag /> Shop
</Button>
  </div>
</div>


<div className="md:flex hidden  lg:mr-20 md:mr-10 w-[400px] shrink-0 h-[500px] bg-muted -mt-10  rounded-md">
  
</div>


   
    </section>


  );
};

export default HeroSection;
