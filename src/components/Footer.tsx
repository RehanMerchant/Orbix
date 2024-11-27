import { FaYoutube } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


const Footer = () => {
const navigate = useNavigate();
  return (
    <div className="w-full border-t-2 mt-10 ">
        
     <div className="md:flex justify-between md:px-10  px-8 mt-10">
    <div className="flex flex-col">
       <p className="text-4xl font-light">Orbix</p><span>© 2024 All Rights Reserved</span>
       

      <div className="text-sm md:text-base flex flex-col gap-1 md:mt-5 mt-2">
        <p className="font-light hover:underline cursor-pointer">Terms of Service</p>
        <p className="font-light hover:underline cursor-pointer">Privacy Policy</p>
        <p className="font-light hover:underline cursor-pointer">Community Guidelines</p>
        
      </div>
    </div>


    <div className="flex md:gap-14 gap-10  md:mt-0 mt-10">
       <div className="text-sm md:text-base flex flex-col gap-1">
        <p className="font-medium">Products</p>
        <p className="font-light hover:underline cursor-pointer ">Metaverse</p>
        <p className="font-light hover:underline cursor-pointer">Social Sphere</p>
        <p className="font-light hover:underline cursor-pointer">Currency</p>
        <p className="font-light hover:underline cursor-pointer">Marketplace</p>
        <p className="font-light hover:underline cursor-pointer">World Builder</p>
        <p className="font-light hover:underline cursor-pointer">Asset Builder</p>
        
      </div>

      <div className="text-sm md:text-base flex flex-col gap-1">
        <p className="font-medium">Quick Links</p>
        <p onClick={()=>{navigate('/explore')}}  className="font-light hover:underline cursor-pointer">Explore</p>
        <p className="font-light hover:underline cursor-pointer">About</p>
        <p className="font-light hover:underline cursor-pointer">Pricing Plans</p>
        <p className="font-light hover:underline cursor-pointer">FAQ</p>
        <p className="font-light hover:underline cursor-pointer ">Contact Us</p>
        
      </div>

    </div>
    </div>
  <div className="w-full flex items-center md:px-10 px-4 pb-10 justify-between gap-2 py-2 mt-8 md:mt-14">
    <div className="flex flex-col gap-2">
      <p>Follow Us</p>
      <div className="flex items-center md:gap-4 gap-2">

     
    <FaYoutube className="size-5 cursor-pointer text-red-600" />
  <FaInstagram className="size-5 cursor-pointer" />
  <FaDiscord className="size-5 cursor-pointer text-indigo-500"/>
  <FaXTwitter  className="size-5 cursor-pointer"/>
  </div>
    </div>
    <div className="flex flex-col gap-1 px-4 text-right">
    <p className="text-lg">India</p>
  <p className="text-sm hover:underline cursor-pointer">support@orbix.com</p>
  <p className="text-sm hover:underline cursor-pointer">+91 8093909548</p>
  <p className="text-sm hover:underline cursor-pointer">42 Avenue Mission Street</p>
    </div>

  </div>

    </div>
  )
}

export default Footer