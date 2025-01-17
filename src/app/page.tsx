import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import fastFood from '/public/images/fastFood.png'
import watch from '/public/images/Watch.png'
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import React from "react";
import { Menu } from "lucide-react";
import { SheetContent, SheetTrigger, Sheet} from "@/components/ui/sheet";



export default function Home() {
  return (

    <div className="bg-black">



    {/* <Header /> */}
<div className="bg-black w-full">
  {/* Outer container */}
  <div className="container mx-auto px-4 flex justify-between items-center h-[87px]">
    {/* Logo */}
    <div className="h-[32px] flex items-center">
      <img 
        src="/images/Foodtuck.png" 
        alt="logo" 
        className="w-[109px] h-auto"
      />
    </div>

    {/* Desktop Navigation */}
    <nav className="hidden md:flex items-center">
      <ul className="flex gap-6 text-white md:text-[13px] lg:text-[20px]">
        <li>
          <Link href="/" className="text-amber-500 hover:underline">Home</Link>
        </li>
        <li>
          <Link href="/menu" className="hover:underline">Menu</Link>
        </li>
        <li>
          <Link href="/error" className="hover:underline">Blog</Link>
        </li>
        <li>
          <Link href="/shop" className="hover:underline">Shop</Link>
        </li>
        <li>
          <Link href="/faq" className="hover:underline">FAQ</Link>
        </li>
        <li>
          <Link href="" className="hover:underline">Contact</Link>
        </li>
      </ul>
    </nav>

    {/* Search and Cart */}
    <div className="hidden md:flex items-center space-x-4">
      <div className="relative">
        <Input 
          className="text-white bg-black border-2 border-amber-500 rounded-full py-1 pl-3 pr-8" 
          placeholder="Search..."
        />
        <img 
          src="/images/vector.png"  
          alt="Search"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
        />
      </div>
      <Link href="/check-out">
      <img 
        src="/images/Handbag.png" 
        alt="cart" 
        className="h-6  cursor-pointer w-6"
      />
      </Link>
    </div>

    {/* Mobile Menu - Placeholder */}
    <div className="md:hidden flex bg-white items-center">
    <Sheet>
    <SheetTrigger className="md:hidden">
        <Menu />
    </SheetTrigger>

    <SheetContent>
    <ul className="flex flex-col gap-4 list-none">
            <li><Link href="/" className="text-amber-500 hover:underline">Home</Link></li>
            <li><Link href="/menu" className="hover:underline">Menu</Link></li>
            <li><Link href="/error" className="hover:underline">Blog</Link></li>
            <li><Link href="/check-out" className="hover:underline">Checkout</Link></li>
            <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
        </ul>
    </SheetContent>
</Sheet>

    </div>
  </div>
</div>





{/* Hero */}
<div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center">
  {/* Social Links and Lines */}
  <div className="hidden md:flex flex-col items-center mt-8 md:mt-1 md:ml-4 lg:ml-10">
    <div className="bg-white w-[2px] rounded h-[80px] lg:h-[100px] my-2 lg:my-4"></div>
    <img 
      className="mx-2 pl-3 lg:mx-4" 
      src="/images/socials.png" 
      alt="socials" 
    />
    <div className="bg-white w-[2px] rounded h-[80px] lg:h-[100px] my-2 lg:my-4"></div>
  </div>

  {/* Text Section */}
  <div className="flex flex-col items-center md:items-start text-center md:text-left mt-10 md:mt-0 px-6 md:px-8 lg:px-0 max-w-[90%] md:w-[330px] xl:pt-[5%] xl:w-[30%] xl:h-[500px] lg:max-w-lg">
    
    <img 
      className="mb-4 w-40 xl:w-[80%] md:w-auto lg:w-auto" 
      src="/images/text.png" 
      alt="text" 
    />
    <p className="font-sans text-white text-3xl  md:text-4xl lg:text-5xl font-medium leading-snug">
      <span className="text-amber-500">Th</span>e Art of Speed Food Quality
    </p>
    <p className="text-white my-4 text-sm md:text-base">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea iste dignijhbjh kjbkukh jhj uytg ko.
    </p>
    <Button 
      variant="outline" 
      className="border-amber-500 text-white hover:bg-amber-500 hover:text-black transition"
    >
      See Menu
    </Button>
  </div>

  {/* Banner Image */}
  <div className="w-full xl:mt-0 md:w-ful xl:w-[60%] lg:w-[80%] mt-6 md:mt-0 px-6 md:px-0">
    <img 
      src="/images/image.png" 
      alt="banner" 
      className="w-full  h-auto object-contain"
    />
  </div>
</div>



{/* Section1 */}
<div className="w-full flex  justify-center mt-20 px-4 sm:px-6 md:px-10 lg:px-16">
  <div className="w-full  max-w-screen-xl h-full flex flex-col md:flex-row md:gap-1 gap-8 lg:gap-4">
  
    {/* Left Section */}
    <div className="w-full md:w-1/2  h-full text-center md:text-left">
      <img src="/images/aboutus.png" alt="us" className="pl-[150px] xl:pl-[190px] lg:pl-[170px] md:pl-[100px]" />
      <p className="font-sans text-white text-4xl xl:text-6xl lg:text-5xl sm:text-5xl md:text-4xl mt-2 font-medium">
        <span className="text-amber-500">We</span> Create the best foody product
      </p>
      <p className="text-white my-6 text-sm xl:text-2xl md:font-size[10px] sm:text-base  lg:text-xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea iste dignijhbjh kjbkukh jhj uytg ko. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      
      {/* Tick List */}
      <div className="hidden xl:block ">
      <div className="flex items-center my-2">
        <img className="w-[17px] h-[12.24px]" src="/images/check.png" alt="tick" />
        <p className="ml-4 text-white text-sm sm:text-base md:text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex items-center my-2">
        <img className="w-[17px] h-[12.24px]" src="/images/check.png" alt="tick" />
        <p className="ml-4 text-white text-sm sm:text-base md:text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex items-center my-2">
        <img className="w-[17px] h-[12.24px]" src="/images/check.png" alt="tick" />
        <p className="ml-4 text-white text-sm sm:text-base md:text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex items-center my-2">
        <img className="w-[17px] h-[12.24px]" src="/images/check.png" alt="tick" />
        <p className="ml-4 text-white text-sm sm:text-base md:text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      </div>

      <Button variant="outline" className="mt-6 md:mt-0 xl:mt-4">Read More</Button>
    </div>

    {/* Right Section */}
    <div className="w-full  md:w-[60%] h-full">
      
      {/* First Image */}
      <div className=" w-full h-1/2 flex  justify-center items-center">
        <img className="w-full h-auto max-w-[660px]" src="/images/egg.png" alt="egg" />
      </div>
      
      {/* Second Set of Images */}
      <div className="h-1/2 flex justify-between  gap-4 mt-4">
        <div className="w-1/2 h-auto">
          <img className="w-full h-auto" src="/images/steak.png" alt="steak" />
        </div>
        <div className="w-1/2 h-auto">
          <img className="w-full h-auto" src="/images/sandwich.png" alt="sandwich" />
        </div>
      </div>
    </div>
  </div>
</div> 



{/* Section2 */}
{/* Upper section */}
<div  className="w-full flex mt-20 justify-center">
  <div className="w-full max-w-screen-xl h-full">

    <div className="flex justify-center">
      <div className="mt-8 text-center sm:text-left">
        <img 
          className="mx-auto sm:mx-0 sm:pl-10 w-2/3 sm:w-auto" 
          src="/images/food-cat.png" 
          alt="category" 
        />
        <p className="font-sans font-semibold text-white text-2xl sm:text-3xl md:text-4xl mt-4">
          <span className="text-amber-500">Ch</span>oose Food Item
        </p>
      </div>
    </div>

    {/* Lower section */}
    <div className="flex  flex-wrap gap-4 justify-center md:justify-center mt-10">
      {/* Food Item 1 */}
      <div className="relative h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] md:h-[329px] md:w-[306px]">
        <img 
          src="/images/1st.png" 
          alt="1st" 
          className="w-full h-full object-cover rounded-lg" 
        />
        <div className="absolute top-[35%] left-1/4 md:left-20 bg-white text-amber-500 font-semibold text-sm md:text-base rounded-[5px] px-4 py-2 hover:text-white hover:bg-amber-500">
          Save 30%
        </div>
        <div className="absolute top-[50%] left-[15%] md:left-16 bg-amber-500 text-white font-semibold text-sm md:text-base rounded-[5px] px-6 py-2 hover:bg-white hover:text-amber-500">
          Fast Food Dish
        </div>
      </div>

      {/* Food Item 2 */}
      <div className="h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] md:h-[329px] md:w-[306px]">
        <img 
          src="/images/2nd.png" 
          alt="2nd" 
          className="w-full h-full object-cover rounded-lg" 
        />
      </div>

      {/* Food Item 3 */}
      <div className="h-[250px] w-[250px] sm:hidden md:block lg:block xl:block sm:h-[300px] sm:w-[300px] md:h-[329px] md:w-[306px]">
        <img 
          src="/images/3rd.png" 
          alt="3rd" 
          className="w-full h-full object-cover rounded-lg" 
        />
      </div>

      {/* Food Item 4 */}
      <div className="h-[250px] w-[250px] sm:hidden md:block lg:hidden xl:block sm:h-[300px] sm:w-[300px] md:h-[329px] md:w-[306px]">
        <img 
          src="/images/4th.png" 
          alt="4th" 
          className="w-full h-full object-cover rounded-lg" 
        />
      </div>
    </div>
  </div>
</div>




{/* Section3 */}
<div className="hidden xl:block">
    <div className=" flex justify-center mt-[200px]">
<div className=" w-[1320px] h-[716px] flex gap-20 ">
  <div className=" w-1/2 h-full">

<div className="h-[356px]  gap-2 flex">
  <div className=" w-[362px] h-[356px]"><img src="/images/pink.png" alt="pink" /></div>
  <div className=" w-[281px] mt-[120px] h-[231px]"><img src="/images/purple.png" alt="purple" /></div>
</div>
  
  <div className=" h-[360px] gap-3 pt-2 flex">
  <div className=" w-[244px] h-[306px]"><img src="/images/orange.png" alt="orange" /> </div>
  <div className=" w-[221px] h-[226px]"><img src="/images/green.png" alt="green" /></div>

  <div>
  <div className=" w-[161px] h-[168px]"><img src="/images/slate.png" alt="slate" /></div>
  <div className=" mt-2 w-[161px] h-[166px]"><img src="/images/cyan.png" alt="cyan" /></div>
  </div>
  </div>

  </div>
  <div className=" w-1/2 h-full">
  <img src="/images/whyus.png" alt="us" />
    <p className="font-sans text-white text-6xl mt-4 font-medium">
  <span className="text-amber-500">Ex</span>tra ordinary taste And Experienced
</p>
<p className="text-white my-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea iste dignijhbjh  kjbkukh jhj uytg ko. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea iste dignijhbjh  kjbkukh jhj uytg ko. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea iste dignijhbjh  kjbkukh jhj uytg ko. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea iste dignijhbjh  kjbkukh jhj uytg ko. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea iste dignijhbjh  kjbkukh jhj uytg ko.</p>

<div className="h-[100px] flex gap-8 w-[374px] ">
<div className="h-[100px] w-[102px] hover:bg-amber-600 rounded flex justify-center items-center bg-amber-500"><img src="/images/Hamburger.png" alt="ham" /></div>

<div className="h-[100px] w-[102px] rounded hover:bg-amber-600 flex justify-center items-center bg-amber-500"><img src="/images/Cookie.png" alt="cookie" /></div>

<div className="h-[100px] w-[102px] hover:bg-amber-600 rounded flex justify-center items-center bg-amber-500"><img src="/images/Wine.png" alt="Wine" /></div>

</div>
<p className="text-white"> &nbsp;&nbsp;&nbsp;&nbsp;Fast Food&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lunch&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dinner</p>
<br /><br />
<img src="/images/exp.png" alt="exp" />

  </div>
</div>
</div>
</div>


{/* Section4 */}
<br /><br /><br /><br /><br /><br />
<img src="/images/Clients.png" alt="reviews" />
<br /><br /><br /><br /><br /><br />




{/* Section5 */}
<div className="w-full flex  justify-center">
  <div className="  xl:w-[90%] w-full px-4">
    <div className="text-center  ">
      <img className="inline-block max-w-[200px] sm:w-[25%] w-full" src="/images/pnc.png" alt="category" />
      <p className="font-sans font-semibold text-white text-2xl sm:text-5xl mt-2">
        <span className="text-amber-500">Fr</span>om Our Menu
      </p>
    </div>

    <div className="flex justify-center  my-4 sm:my-6">
      <ul className="flex flex-wrap gap-2 sm:gap-4 md:gap-10 xl:gap-24 text-xs sm:text-sm md:text-base">
        {["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack", "Soups"].map((item) => (
          <li
            key={item}
            className="text-white hover:text-amber-500 cursor-pointer hover:underline"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>

    <div className="flex flex-wrap  items-center gap-4 sm:gap-6">
      {/* Left Section: Image */}
      <div className="relative flex-1 w-full  sm:min-w-[300px] max-w-sm mx-auto sm:mx-0 hidden sm:block">
        <img
          src="/images/purple1.png"
          alt="ok"
          className="w-full h-auto object-cover rounded"
        />
        <img
          src="/images/pnc-f.png"
          alt="overlay"
          className="absolute top-0 left-0 w-full h-full object-contain"
        />
      </div>

      {/* Right Section: Menu Items */}
      <div className="flex-1 grid grid-cols-1  sm:grid-cols-2 gap-4">
        {[
          { name: "Lettuce Leaf", price: "12.5$", img: "/images/1.png" },
          { name: "Fresh Breakfast", price: "14.5$", img: "/images/2.png" },
          { name: "Mild Butter", price: "12.5$", img: "/images/3.png" },
          { name: "Fresh Bread", price: "9.5$", img: "/images/4.png" },
          { name: "Glow Cheese", price: "12.5$", img: "/images/5.png" },
          { name: "Italian Pizza", price: "14.5$", img: "/images/6.png" },
          { name: "Slice Beef", price: "11.5$", img: "/images/2.png" },
          { name: "Mushroom Pizza", price: "19.5$", img: "/images/2.png" },
        ].map((item, index) => (
          <div key={index} className="flex  items-start gap-2 sm:gap-4">
            <img
              src={item.img}
              alt={item.name}
              className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded"
            />
            <div>
              <h1 className="text-white text-sm sm:text-lg font-semibold">{item.name}</h1>
              <p className="text-white text-xs sm:text-sm md:hidden lg:block xl:block">Lorem ipsum dolor sit amet.</p>
              <p className="text-amber-500 text-sm sm:text-base">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


{/* Section6 */}         
<div className="w-full flex mt-20 justify-center">
  <div className="w-full px-4">

    {/* Upper Section */}
    <div className="flex flex-col items-center text-center">
      <img className="w-auto" src="/images/Chefs.png" alt="chefs" />
      <p className="font-sans font-semibold text-white text-4xl mt-4">
        <span className="text-amber-500">Me</span>et Our Chef
      </p>
    </div>

    {/* Lower Section */}
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      <div className="h-auto w-[306px]"><img className="w-full" src="/images/cc.png" alt="chief chef 1" /></div>
      <div className="h-auto w-[306px]"><img className="w-full" src="/images/cc1.png" alt="chief chef 2" /></div>
      <div className="h-auto w-[306px]"><img className="w-full" src="/images/cc2.png" alt="chief chef 3" /></div>
      <div className="h-auto w-[306px] lg:hidden xl:block"><img className="w-full" src="/images/cc3.png" alt="chief chef 4" /></div>
    </div>

    {/* Button */}
    <div className="flex justify-center mt-12">
      <Button className="" variant="default">See More</Button>
    </div>
  </div>
</div>




{/* Section7 */}            
<div className="w-full flex mt-20 justify-center">
  <div className=" w-full px-4">

    {/* Header Section */}
    <div className="w-full text-center mb-20 ">
      <img className="mx-auto" src="/images/test.png" alt="Testimonials" />
      <h1 className="text-white text-3xl md:text-4xl sm:text-2xl lg:text-5xl xl:text-6xl mt-3 font-semibold">
        What our Clients are Saying
      </h1>
    </div>

    {/* Testimonial Card */}
    <div className="flex flex-col items-center">
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-xl p-6 md:p-10">

        {/* Upper Image */}
        <img 
          className="absolute left-1/2 transform -translate-x-1/2 -top-16 w-24 h-24 rounded-full border-4 border-white" 
          src="/images/man.png" 
          alt="client" 
        />

        {/* Quote Section */}
        <div className="text-center mt-16 mb-6">
          <img className="mx-auto" src="/images/Quotes.png" alt="quotes" />
        </div>

        {/* Testimonial Text */}
        <p className="text-center text-gray-700 text-sm md:text-base px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit porro odio eos exercitationem. Natus obcaecati magnam, molestiae cum nisi harum nihil, necessitatibus totam vel autem minima quod aliquam perspiciatis! Neque nihil sapiente ipsum eos eligendi optio, illum quasi quidem quis tempora eaque suscipit architecto a iure doloribus consequuntur beatae officiis?
        </p>

        {/* Rating */}
        <div className="flex justify-center mt-6">
          <img className="w-32" src="/images/star.png" alt="rating stars" />
        </div>

        {/* Client Name */}
        <h1 className="text-xl font-bold text-center mt-4">Alamin Hasan</h1>
        <p className="text-center text-gray-500 text-sm">Food Specialist</p>
      </div>
    </div>

    {/* Pagination Dots */}
    <div className="flex justify-center mt-6">
      <img className="w-16" src="/images/Dot.png" alt="pagination dots" />
    </div>
  </div>
</div>



{/* Section8 */}
<img className="mt-20 mb-20" src="/images/bn.png" alt="banner" />



{/* Section9 */}
{/* Section: Latest News & Blog */}
<div className="w-full mb-10 flex mt-20 justify-center">
  <div className="w-full max-w-[1320px]">
    {/* Header */}
    <div className="h-auto flex justify-center text-center">
      <div className="mt-8">
        <img className="pl-8 mx-auto" src="/images/bp.png" alt="chefs" />
        <p className="font-sans font-semibold text-white text-4xl mt-4">
          <span className="text-amber-500">La</span>test News & Blog
        </p>
      </div>
    </div>

    {/* Blog Images */}
    <div className="flex flex-wrap gap-6 justify-center mt-8">
      <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[424px] h-auto">
        <img src="/images/bc1.png" alt="Blog 1" className="w-full h-auto object-cover" />
      </div>
      <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[424px] h-auto">
        <img src="/images/bc2.png" alt="Blog 2" className="w-full h-auto object-cover" />
      </div>
      <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[424px] h-auto">
        <img src="/images/bc3.png" alt="Blog 3" className="w-full h-auto object-cover" />
      </div>
    </div>
  </div>
</div>





{/* Responsive Footer */}

<div className="w-full flex flex-col">
  <div className="flex flex-col items-center pt-32 w-full bg-stone-950 max-md:pt-24">
    {/* Subscription Section */}
    <div className="flex flex-wrap gap-5 justify-between px-5 max-w-[1169px] w-full">
      <div className="flex flex-col text-white">
        <h2 className="text-3xl font-bold leading-none">
          <span className="text-amber-500">St</span>ill You Need Our Support?
        </h2>
        <p className="mt-7 text-base">
          Don&apos;t wait—make a smart & logical quote here. It&apos;s pretty easy.
        </p>
      </div>
      <div className="flex flex-col">
        <form className="flex gap-3 items-center pl-5 bg-amber-500 rounded">
          <label className="sr-only">Enter Your Email</label>
          <input
            type="email"
            id="emailSubscribe"
            className="bg-transparent text-white opacity-75 focus:outline-none placeholder-opacity-75"
            placeholder="Enter Your Email"
            required
          />
          <button
            type="submit"
            className="px-4 py-3 text-amber-500 bg-white rounded hover:bg-amber-50 focus:ring-2 focus:ring-amber-600 focus:outline-none"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </div>

    {/* Divider Line */}
    <div className="line mt-10 max-w-[1169px] w-full border-amber-500 border"></div>

    {/* Footer Content */}
    <div className="flex flex-wrap gap-8 justify-between items-start mt-14 w-full px-5 text-white max-w-[1320px]">
      {/* About Us Section */}
      <div className="w-full md:w-1/3 flex flex-col items-start">
        <h3 className="text-xl font-bold">About Us</h3>
        <p className="mt-4 text-justify text-lg leading-7">
          Corporate clients and leisure travelers rely on Groundlink for dependable,
          safe, and professional chauffeured car service in major cities worldwide.
        </p>
        <div className="flex gap-4 mt-6">
          <Image
            src={watch}
            alt="Opening hours icon"
            className="object-contain w-16"
          />
          <div className="flex flex-col">
            <h4 className="text-lg">Opening Hours</h4>
            <p className="mt-2">Mon - Sat (8.00 - 6.00)</p>
            <p>Sunday - Closed</p>
          </div>
        </div>
      </div>

      {/* Useful Links */}
      <nav className="w-full md:w-1/6 flex flex-col">
        <h3 className="text-xl font-bold">Useful Links</h3>
        <ul className="mt-6 space-y-4">
          <li><a href="#about" className="hover:text-amber-500 focus:text-amber-500">About</a></li>
          <li><a href="#news" className="hover:text-amber-500 focus:text-amber-500">News</a></li>
          <li><a href="#partners" className="hover:text-amber-500 focus:text-amber-500">Partners</a></li>
          <li><a href="#team" className="hover:text-amber-500 focus:text-amber-500">Team</a></li>
          <li><a href="#menu" className="hover:text-amber-500 focus:text-amber-500">Menu</a></li>
          <li><a href="#contact" className="hover:text-amber-500 focus:text-amber-500">Contact</a></li>
        </ul>
      </nav>

      {/* Help Section */}
      <nav className="w-full md:w-1/6 flex flex-col">
        <h3 className="text-xl font-bold">Help?</h3>
        <ul className="mt-6 space-y-4">
          <li><a href="#faq" className="hover:text-amber-500 focus:text-amber-500">FAQ</a></li>
          <li><a href="#terms" className="hover:text-amber-500 focus:text-amber-500">Terms & Conditions</a></li>
          <li><a href="#reporting" className="hover:text-amber-500 focus:text-amber-500">Reporting</a></li>
          <li><a href="#documentation" className="hover:text-amber-500 focus:text-amber-500">Documentation</a></li>
          <li><a href="#support" className="hover:text-amber-500 focus:text-amber-500">Support Policy</a></li>
          <li><a href="#privacy" className="hover:text-amber-500 focus:text-amber-500">Privacy</a></li>
        </ul>
      </nav>

      {/* Recent Posts */}
      <div className="w-full md:w-1/3">
        <h3 className="text-xl font-bold">Recent Posts</h3>
        <div className="mt-6 space-y-6">
          {["Fast food", "Organic food", "Lifestyle choices"].map((post, idx) => (
            <article key={idx} className="flex gap-4">
              <Image
                src={fastFood}
                alt="Article thumbnail"
                className="object-contain w-16 h-16"
              />
              <div>
                <h4 className="text-base leading-6">{post}</h4>
                <time className="text-sm opacity-75">February 28, 2022</time>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>

    {/* Copyright Section */}
    <div className="flex flex-wrap justify-between items-center px-5 py-4 mt-10 w-full bg-neutral-600">
      <p className="text-white text-sm">
        Copyright © 2022 by Syed Salman Ali. All Rights Reserved.
      </p>
      <div className="flex gap-3">
        {[FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin].map((Icon, idx) => (
          <Link
            key={idx}
            href="#"
            className="p-2 bg-white rounded hover:bg-amber-500 focus:ring-2 focus:ring-amber-600"
          >
            <Icon className="text-stone-900" />
          </Link>
        ))}
      </div>
    </div>
  </div>
</div>


</div>
  );
}
