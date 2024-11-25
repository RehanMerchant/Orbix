import { MdAttachMoney } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
const Section2 = () => {
  return (
    <>
  <div className="w-full  lg:px-10 px-4 md:px-10 mt-14">
        <p className="text-3xl ">How it Works?</p>
    
        <div className="py-6 flex flex-col gap-4">
          <div className="w-full h-suto lg:px-10  lg:flex gap-2 justify-between items-center p-2">
            <div>
            <div className="p-2">
                <BiWorld   className="size-12" />
                    </div>
            <p className="text-2xl">World Craft</p>
            <p className="text-muted-foreground mt-1">
              Start with a blank canvas or choose from pre-designed templates.
            </p>
            <p className="text-muted-foreground mt-1">
              Use our intuitive editor to design terrains, place objects, and
              define interactions.
            </p>
            <p className="text-muted-foreground mt-1">
              Build Memories you want to Relive.
            </p>
            </div>
            <div className="mt-4 hidden md:flex  w-[500px] h-[260px] bg-muted rounded-sm  justify-center items-center">
            <p className="text-xl text-muted-foreground">500 X 200</p>
            </div>
          </div>


          <div className="w-full flex-row-reverse h-suto lg:px-10  lg:flex gap-2 justify-between items-center p-2">
            <div>
            <div className="p-2">
                <MdPeopleAlt  className="size-12" />
                    </div>
            <p className="text-2xl">Socialize </p>
           
            <p className="text-muted-foreground mt-1">
            Share your world link with friends or make it public for others to join.
            </p>
            <p className="text-muted-foreground mt-1">
              Explore the world, Work together to build, decorate, or simply hang out.
            </p>
            <p className="text-muted-foreground mt-1">
              Join Events Organised my people all around the world
            </p>
            </div>
            <div className="mt-4 hidden md:flex  w-[500px] h-[260px] bg-muted rounded-sm  justify-center items-center">
            <p className="text-xl text-muted-foreground">500 X 200</p>
            </div>
          </div>


          <div className="w-full h-suto lg:px-10  lg:flex gap-2 justify-between items-center p-2">
            <div>
                <div className="p-2">
                <MdAttachMoney className="size-12" />
                    </div>
            <p className="text-2xl">Monetize</p>
            <p className="text-muted-foreground mt-1">
            Create Premium Events and make People from all around Connect.
            </p>
            <p className="text-muted-foreground mt-1">
              Sell Digital Assets, Map elements and Worlds.
            </p>
            <p className="text-muted-foreground mt-1">
              Join our Thriving Community Social Sphere and Become our Patner.
            </p>
            </div>
            <div className="mt-4 hidden md:flex  w-[500px] h-[260px] bg-muted rounded-sm  justify-center items-center">
            <p className="text-xl text-muted-foreground">500 X 200</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
