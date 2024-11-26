import { cn } from "@/lib/utils";
import { useState } from "react";
import { MdOutlineDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Button } from "../ui/button";
const PricingSection = () => {
  const [plan, setplan] = useState("community");
  return (
    <div className="lg:px-12 px-5 md:px-8 g:py-20 md:py-1 lg:mt-10 items-center flex flex-col py-8">
      <p className="text-3xl justify-start w-full ">Become Member</p>
      <div className="py-6 lg:p-10 md:p-8 md:mt-10 md:flex w-full gap-4 justify-between lg:w-[94%] ">
        <div className="w-full h-auto py-5 rounded-sm border-[3px]  md:flex justify-between relative ">
          <div className="md:px-4 px-2 ">
            <p className="md:text-2xl text-xl">Choose Pricing</p>
            <div className="p-2 md:pt-4 font-light w-full grid md:grid-cols-2 lg:grid-cols-4 grid-cols-2 mt-2 ">
              <div
                onClick={() => {
                  setplan("community");
                }}
                className={cn(
                  "border cursor-pointer border-muted-foreground text-[18px] flex items-center justify-center px-2 py-1.5 hover:bg-muted-foreground/20",
                  plan == "community" && "bg-muted-foreground/20"
                )}
              >
                Community
              </div>
              <div
                onClick={() => {
                  setplan("standard");
                }}
                className={cn(
                  "border cursor-pointer border-muted-foreground text-[18px] flex items-center justify-center px-2 py-1.5 hover:bg-muted-foreground/20",
                  plan == "standard" && "bg-muted-foreground/20"
                )}
              >
                Standard
              </div>
              <div
                onClick={() => {
                  setplan("pro");
                }}
                className={cn(
                  "border cursor-pointer border-muted-foreground text-[18px] flex items-center justify-center px-2 py-1.5 hover:bg-muted-foreground/20",
                  plan == "pro" && "bg-muted-foreground/20"
                )}
              >
                Pro
              </div>
              <div
                onClick={() => {
                  setplan("enterprise");
                }}
                className={cn(
                  "border cursor-pointer border-muted-foreground text-[18px] flex items-center justify-center px-2 py-1.5 hover:bg-muted-foreground/20",
                  plan == "enterprise" && "bg-muted-foreground/20"
                )}
              >
                Enterprise
              </div>
            </div>
            <div className="mt-6 px-1">
              <p className="text-lg">
                <span className="capitalize">{plan}</span> Details
              </p>
              {plan == "community" && (
                <div>
                  <p className="mt-2 flex gap-2 items-center">
                    <MdOutlineDone className="shrink-0 text-green-600" />
                    Create World
                  </p>
                  <p className="mt-1 flex gap-2 items-center">
                    <MdOutlineDone className="shrink-0 text-green-600" /> Join
                    Events (Free)
                  </p>
                  <p className="mt-1 flex gap-2 items-center">
                    <MdOutlineDone className="shrink-0 text-green-600" /> Basic
                    avatar customization.
                  </p>
                  <p className="mt-1 flex gap-2 items-center">
                    <MdOutlineDone className="shrink-0 text-green-600" />
                    Free building tools
                  </p>
                  <p className="mt-1 flex gap-2 items-center">
                    <MdOutlineDone className="shrink-0 text-green-600" />
                    Create upto 5 Spaces
                  </p>
                  <p className="mt-1 flex gap-2 items-center">
                    <MdOutlineDone className="shrink-0 text-green-600" />
                    Member of Social Sphere
                  </p>
                  <p className="mt-1 flex gap-2 items-center">
                    <MdOutlineDone className="shrink-0 text-green-600" />
                    Basic World Builder
                  </p>
                </div>
              )}

              {plan == "standard" && (
                <div>
                  <p className="mt-2">Perks on top of Community Plan:</p>
                  <p className="mt-2 flex gap-2 items-center">
                    <MdOutlineDone className="shrink-0 text-green-600" />
                    Create upto 10 Spaces
                  </p>
                  <p className="mt-1 flex gap-2 items-center">
                    <MdOutlineDone className="shrink-0 text-green-600" /> Join
                    Premium Events
                  </p>
                  <p className="mt-1 flex gap-2 items-center">
                    <MdOutlineDone className="shrink-0 text-green-600" /> Asset
                    Builder
                  </p>
                  <p className="mt-1 flex gap-2 items-center">
                    <MdOutlineDone className="shrink-0 text-green-600" /> Sell
                    Items
                  </p>
                  <p className="mt-1 flex gap-2 items-center">
                    <MdOutlineDone className="shrink-0 text-green-600" />{" "}
                    Monetization
                  </p>
                </div>
              )}

              {plan == "pro" && (
                <div>
                  <p className="mt-2">Perks on top of Standard Plan:</p>
                  <p className="mt-2 flex gap-2 items-center">
                    <MdOutlineDone className="shrink-0 text-green-600" />
                    Organise Mega Events
                  </p>
                  <p className="mt-1 flex gap-2 items-center">
                    <MdOutlineDone className="shrink-0 text-green-600" />{" "}
                    100 Spaces
                  </p>
                  <p className="mt-1 flex gap-2 items-center">
                    <MdOutlineDone className="shrink-0 text-green-600" />{" "}
                    Featured Member in Social Sphere
                  </p>
                  <p className="mt-1 flex gap-2 items-center">
                    <MdOutlineDone className="shrink-0 text-green-600" /> Pro
                    Asset Builder
                  </p>
                  <p className="mt-1 flex gap-2 items-center">
                    <MdOutlineDone className="shrink-0 text-green-600" /> Pro
                    World Builder
                  </p>
                  <p className="mt-1 flex gap-2 items-center">
                    <MdOutlineDone className="shrink-0 text-green-600" />{" "}
                    Premium Avatar
                  </p>
                </div>
              )}

              {plan == "enterprise" && (
                <div>
                  <p className="mt-2">Perks on top of Pro Plan:</p>
                  <p className="mt-2 flex gap-2 items-center">
                    <MdOutlineDone className="shrink-0 text-green-600" />
                    Orbix Patners
                  </p>
                  <p className="mt-2 flex gap-2 items-center">
                    <MdOutlineDone className="shrink-0 text-green-600" />
                    Api Integration
                  </p>
                  <p className="mt-1 flex gap-2 items-center">
                    <MdOutlineDone className="shrink-0 text-green-600" />{" "}
                    Unlimited Spaces
                  </p>
                  <p className="mt-2 flex gap-2 items-center">
                    <MdOutlineDone className="shrink-0 text-green-600" />
                    Moderators
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="md:px-10 py-10 px-5 relative">
            <p className="text-xl md:text-2xl">
               {plan == "community" && <span>$0<span className="text-sm text-muted-foreground">/Month</span></span>} 
               {plan == "standard" && <span>$9.99<span className="text-sm text-muted-foreground">/Month</span></span>} 
               {plan == "pro" && <span>24.99<span className="text-sm text-muted-foreground">/Month</span></span>} 
               {plan == "enterprise" && <span>29.99<span className="text-sm text-muted-foreground">/Month</span></span>} 
            </p>
            <Button className="md:w-[200px] w-full mt-5">
                Buy
            </Button>
            <div className="mt-6 md:w-[200px] text-muted-foreground">*Prices are billed monthly. Cancel anytime. Additional features and limits may apply per plan.
            </div>
            </div>
            
            
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
