import { ModeToggle } from "./Theme/mode-toggle";
import { BiSolidParty } from "react-icons/bi";
import { Button } from "./ui/button";
import { BsPeopleFill } from "react-icons/bs";
import LogoWhite from "/assets/white.png";
import LogoBlack from "/assets/black.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Earth, Menu } from "lucide-react";
import { useTheme } from "@/components/Theme/theme-provider";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      className={cn(
        "w-full h-[60px] fixed bg-background z-50 transition-all ease-linear  flex items-center  justify-between pr-4"
      )}>
      <div className="h-full flex items-center gap-8">
        <div className=" h-full flex items-center ">
          {theme === "dark" ? (
            <img src={LogoWhite} className="h-full py-1.5 px-4" />
          ) : (
            <img src={LogoBlack} className="h-full py-1.5 px-4" />
          )}

          <p className="text-3xl font-light text-foreground">Orbix</p>
        </div>
        <div>
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-3">
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>
                      <div className="w-[160px] h-auto p-2 pb-3 flex">
                        <div className="flex flex-col gap-1.5 w-full">
                          <button className="w-full   py-1 hover:bg-muted rounded-sm bg-background">
                            Metaverse
                          </button>
                          <button className="w-full py-1 hover:bg-muted rounded-sm bg-background">
                            Social Sphere
                          </button>
                          <button className="w-full py-1 hover:bg-muted rounded-sm bg-background">
                            World Builder
                          </button>
                          <button className="w-full py-1 hover:bg-muted rounded-sm bg-background">
                            Currency
                          </button>
                          <button className="w-full py-1 hover:bg-muted rounded-sm bg-background">
                            Marketplace
                          </button>
                        </div>
                      </div>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Perks</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>
                      <div className="w-[500px] h-auto pb-3 p-2">
                        <div className="w-full grid grid-cols-2 gap-2">
                          <div className="p-2 px-3 flex flex-col gap-1 cursor-pointer hover:bg-muted rounded-sm">
                            <Earth />
                            <p>A World of Creation</p>
                            <p className="text-sm">
                              Custom Map Builder,Group Activities
                            </p>
                          </div>

                          <div className="p-2 px-3 flex flex-col gap-1 cursor-pointer hover:bg-muted rounded-sm">
                            <BsPeopleFill className="size-5" />
                            <p>Collaborative Experiences</p>
                            <p className="text-sm">
                              Real-Time Collaboration, Endless Creativity
                            </p>
                          </div>

                          <div className="p-2 px-3 flex flex-col gap-1 cursor-pointer hover:bg-muted rounded-sm">
                            <BiSolidParty className="size-5" />
                            <p>Live the Moment</p>
                            <p className="text-sm">
                              Community Challenges, Immersive Events
                            </p>
                          </div>

                          <div className="p-2 px-3 flex flex-col gap-1 cursor-pointer hover:bg-muted rounded-sm">
                            <BiSolidParty className="size-5" />
                            <p>Create Events</p>
                            <p className="text-sm">
                              Custom Events with Friends
                            </p>
                          </div>
                        </div>
                      </div>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>

      <div className="hidden gap-3 md:flex px-4">
        <ModeToggle />
        <Button variant={"ghost"} className="rounded-[4px] flex items-center ">
          Get Started
        </Button>

        <Button className="rounded-[4px] flex items-center ">Login</Button>
      </div>

      <div className="md:hidden flex">
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent className="md:hidden">
            <div className=" mt-5">
            <div className="flex flex-col">
             <p className="text-lg">Products</p>
             <div className="pl-3 mt-1 pt-3 pb-3 w-fit border-l-2 flex flex-col gap-4">
                <p className="hover:underline-offset-2 hover:underline cursor-pointer">   Metaverse</p>
                <p className="hover:underline-offset-2 hover:underline cursor-pointer">Social Sphere</p>
                <p className="hover:underline-offset-2 hover:underline cursor-pointer">World Builder</p>
                <p className="hover:underline-offset-2 hover:underline cursor-pointer">Currency</p>
                <p className="hover:underline-offset-2 hover:underline cursor-pointer">Marketplace</p>
             </div>
             <div className="w-3 border -ml-1"/>
            </div>
            <div className="mt-2">
             <p className="text-lg">Perks</p>
             <div className="pl-3 mt-1 pt-3 pb-3 w-fit border-l-2 flex flex-col gap-3">
             <p className="hover:underline-offset-2 hover:underline cursor-pointer">A World of Creation</p>
             <p className="hover:underline-offset-2 hover:underline cursor-pointer">Collaborative Experiences</p>
             <p className="hover:underline-offset-2 hover:underline cursor-pointer">Live the Moment</p>
             <p className="hover:underline-offset-2 hover:underline cursor-pointer">Custom Events</p>
             </div>
             <div className="w-3 border -ml-1"/>
            </div>
           </div>

           <div className=" flex gap-4 mt-5">
        <ModeToggle />
        <Button className="rounded-[4px] flex items-center ">Login</Button>
      

           </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
