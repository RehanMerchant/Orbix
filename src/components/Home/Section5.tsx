import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { MdKeyboardArrowRight } from "react-icons/md";
const Section5 = () => {
  return (
    <div className="lg:px-12 px-5 md:px-8 g:py-20 md:py-1 lg:mt-10 items-center flex flex-col py-8">
      <p className="text-3xl justify-start w-full "><span className="hover:underline cursor-pointer flex gap-2 items-center">MarketPlace <MdKeyboardArrowRight /></span></p>
    
      <div className="py-6 lg:p-10 md:p-8 md:mt-10 md:flex w-[90%] ">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full  "
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/2  lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex cursor-pointer  flex-col mt-6 w-full h-[420px]">
                    <div className="aspect-video bg-muted rounded-md flex justify-center items-center">
                      <p className="text-xl text-muted-foreground">3D Asset</p>
                    </div>
                    <div className="mt-4">
                      <p className="md:text-xl text-lg">Charizard Backpack</p>
                      <p className="text-base text-muted-foreground mt-2">
                        Unleash the fiery spirit with the Charizard-inspired
                        backpack! 
                      </p>
                    </div>
                    <div className="py-4 absolute bottom-2 w-[100px]">
                      <Button className="w-full"> Buy</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>


            <CarouselItem className="md:basis-1/2  lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex cursor-pointer relative   flex-col mt-6 w-full h-[420px]">
                    <div className="aspect-video bg-muted rounded-md flex justify-center items-center">
                      <p className="text-xl text-muted-foreground">3D Asset</p>
                    </div>
                    <div className="mt-4">
                      <p className="md:text-xl text-lg">Charizard Backpack</p>
                      <p className="text-base text-muted-foreground mt-2">
                        Unleash the fiery spirit with the Charizard-inspired
                        backpack!
                      </p>
                    </div>
                    <div className="py-4 absolute bottom-2 w-[100px]">
                      <Button className="w-full"> Buy</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>



            <CarouselItem className="md:basis-1/2  lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex cursor-pointer relative   flex-col mt-6 w-full h-[420px]">
                    <div className="aspect-video bg-muted rounded-md flex justify-center items-center">
                      <p className="text-xl text-muted-foreground">3D Asset</p>
                    </div>
                    <div className="mt-4">
                      <p className="md:text-xl text-lg">Charizard Backpack</p>
                      <p className="text-base text-muted-foreground mt-2">
                        Unleash the fiery spirit with the Charizard-inspired
                        backpack!
                      </p>
                    </div>
                    <div className="py-4 absolute bottom-2 w-[100px]">
                      <Button className="w-full"> Buy</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>


            <CarouselItem className="md:basis-1/2  lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex cursor-pointer relative   flex-col mt-6 w-full h-[420px]">
                    <div className="aspect-video bg-muted rounded-md flex justify-center items-center">
                      <p className="text-xl text-muted-foreground">3D Asset</p>
                    </div>
                    <div className="mt-4">
                      <p className="md:text-xl text-lg">Charizard Backpack</p>
                      <p className="text-base text-muted-foreground mt-2">
                        Unleash the fiery spirit with the Charizard-inspired
                        backpack!
                      </p>
                    </div>
                    <div className="py-4 absolute bottom-2 w-[100px]">
                      <Button className="w-full"> Buy</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>



            <CarouselItem className="md:basis-1/2  lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex cursor-pointer relative   flex-col mt-6 w-full h-[420px]">
                    <div className="aspect-video bg-muted rounded-md flex justify-center items-center">
                      <p className="text-xl text-muted-foreground">3D Asset</p>
                    </div>
                    <div className="mt-4">
                      <p className="md:text-xl text-lg">Charizard Backpack</p>
                      <p className="text-base text-muted-foreground mt-2">
                        Unleash the fiery spirit with the Charizard-inspired
                        backpack!
                      </p>
                    </div>
                    <div className="py-4 absolute bottom-2 w-[100px]">
                      <Button className="w-full"> Buy</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>



            <CarouselItem className="md:basis-1/2  lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex cursor-pointer relative   flex-col mt-6 w-full h-[420px]">
                    <div className="aspect-video bg-muted rounded-md flex justify-center items-center">
                      <p className="text-xl text-muted-foreground">3D Asset</p>
                    </div>
                    <div className="mt-4">
                      <p className="md:text-xl text-lg">Charizard Backpack</p>
                      <p className="text-base text-muted-foreground mt-2">
                        Unleash the fiery spirit with the Charizard-inspired
                        backpack!
                      </p>
                    </div>
                    <div className="py-4 absolute bottom-2 w-[100px]">
                      <Button className="w-full"> Buy</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>

          </CarouselContent>
          <div className="md:flex hidden">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Section5;
