import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MdKeyboardArrowRight } from "react-icons/md";
const Section5 = () => {
  return (
    <div className="lg:px-12 px-5 md:px-8 g:py-20 md:py-1 lg:mt-10 items-center flex flex-col py-8">
      <p className="text-3xl justify-start w-full "><span className="hover:underline cursor-pointer flex gap-2 items-center">MarketPlace <MdKeyboardArrowRight /></span></p>
    
      <div className="py-6 lg:p-10 md:p-8 md:mt-10 md:flex lg:w-[85%] md:w-[95%] w-full ">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full  "
        >
          <CarouselContent>


            <CarouselItem className="md:basis-1/2  lg:basis-1/3">
              <div className="p-1">
                <Card className="min-h-[480px] cursor-pointer">
                  <CardContent className="flex cursor-pointer  flex-col mt-6 w-full">
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
                 
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>


      <CarouselItem className="md:basis-1/2  lg:basis-1/3">
              <div className="p-1">
              <Card className="min-h-[480px] cursor-pointer">
                  <CardContent className="flex cursor-pointer  flex-col mt-6 w-full">
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
                    
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>


            <CarouselItem className="md:basis-1/2  lg:basis-1/3">
              <div className="p-1">
              <Card className="min-h-[480px] cursor-pointer">
                  <CardContent className="flex cursor-pointer  flex-col mt-6 w-full">
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
                    
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>


            <CarouselItem className="md:basis-1/2  lg:basis-1/3">
              <div className="p-1">
              <Card className="min-h-[480px] cursor-pointer">
                  <CardContent className="flex cursor-pointer  flex-col mt-6 w-full">
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
                    
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>



            <CarouselItem className="md:basis-1/2  lg:basis-1/3">
              <div className="p-1">
              <Card className="min-h-[480px] cursor-pointer">
                  <CardContent className="flex cursor-pointer  flex-col mt-6 w-full">
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
                    
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>


            <CarouselItem className="md:basis-1/2  lg:basis-1/3">
              <div className="p-1">
              <Card className="min-h-[480px] cursor-pointer">
                  <CardContent className="flex cursor-pointer  flex-col mt-6 w-full">
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
