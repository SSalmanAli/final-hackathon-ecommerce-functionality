import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import fastFood from '/public/images/fastFood.png'
import watch from '/public/images/Watch.png'
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";



export default function Home() {
  return (

    <div className="bg-black">

    {/* <Header /> */}

    <div className="flex justify-center">
      <div className="bg-black w-[1320px] h-[87px]">
        <div className=" h-[32px] pt-6 ml-[600px] w-[109px]">
          <img className="mt-" src="/images/Foodtuck.png" alt="logo" />
        </div>
        <div className=" flex justify-between  h-[54px] w-full">
          <ul className="flex gap-6 pt-6 text-white">
            <li><Link href="/" className="text-amber-500 hover:underline">Home</Link></li>
            <li><Link href="/menu" className=" hover:underline">Menu</Link></li>
            <li><Link href="/error" className=" hover:underline">Blog</Link></li>
            <li><Link href="/check-out" className="hover:underline">Checkout</Link></li>
            <li><Link href="/faq" className=" hover:underline">FAQ</Link><select className="bg-black"><option value="about"></option></select></li>
            <li><Link href="" className=" hover:underline">Contact</Link></li>
          </ul>

          <div className=" mt-6 h-[30px] flex w-[236px]">
            <Input className="text-white" placeholder="Search..." />
            <img 
            src="/images/Vector.png"  
            alt="Search"
            className="h-5 w-5 absolute right-[140px] pt-2 text-white"  
          />
            <img className="h-[24px]  w-[24px]" src="/images/Handbag.png" alt="cart" />
          </div>
        </div>
      </div>
      </div>


    {/* <Hero /> */}

          
    <div className=" w-full h-screen flex ">
<div className=" ml- mt-10 w-[25.28px] ml-20  h-[492px]">
  <div className="bg-white w-[2px] rounded h-[158px] m-[50%] "></div>
  <br />
  <img className="ml-1 mx-4"  src="/images/socials.png" alt="socials" />
  <br />
  <div className="bg-white w-[2px] rounded h-[158px] m-[50%]"></div>
</div>

<div className=" w-[472px] ml-16 mt-32 h-[356px]">
  <img className="ml-4" src="/images/text.png" alt="text" />
  <p className="font-sans text-white text-5xl font-medium">
  <span className="text-amber-500">Th</span>e Art of speed food Quality
</p>
<p className="text-white my-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea iste dignijhbjh  kjbkukh jhj uytg ko.</p>

<Button variant="outline">See Menu</Button>
</div>

<div className=" w-[877.8px] ml-32 h-[670px]">
  <img src="/images/image.png" alt="banner" />
</div>

</div>


    {/* <Section1 /> */}

            
    <div className="  w-full flex mt-20 justify-center">
<div className="w-[1320px]  gap-2 h-[562px] flex  ml-30">

  <div className=" w-1/2 h-full">
    <img src="/images/aboutus.png" alt="us" />
    <p className="font-sans text-white text-6xl mt-4 font-medium">
  <span className="text-amber-500">We</span> Create the best foody product
</p>
<p className="text-white my-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea iste dignijhbjh  kjbkukh jhj uytg ko. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea iste dignijhbjh  kjbkukh jhj uytg ko. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea iste dignijhbjh  kjbkukh jhj uytg ko. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea iste dignijhbjh  kjbkukh jhj uytg ko. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea iste dignijhbjh  kjbkukh jhj uytg ko.</p>

<div className="flex">
<img className="w-[17px] h-[12.24px] mt-2" src="/images/check.png" alt="tick" />
<p className="ml-4 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea </p>
</div>
<br />
<div className="flex">
<img className="w-[17px] h-[12.24px] mt-2" src="/images/check.png" alt="tick" />
<p className="ml-4 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea </p>
</div>
<br />
<div className="flex">
<img className="w-[17px] h-[12.24px] mt-2" src="/images/check.png" alt="tick" />
<p className="ml-4 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ea </p>
</div>
<br />
<Button variant="outline">Read More</Button>

  </div>


  <div className=" w-1/2 h-full">

  <div className="bg-amber-500 h-1/2 w-full">
  <img className="w-[660px]  h-[282px]"  src="/images/egg.png" alt="egg" />
  </div>
  <div className=" h-[47%]  gap-[20px] flex mt-[17px] w-full">

    <div className=" h-fit  w-1/2">
    <img className="" src="/images/steak.png" alt="steak" />
    </div>
    <div className=" h-fit w-1/2">
    <img src="/images/sandwich.png" alt="sandwich" />
    </div>
    

  </div>
  </div>

</div>
</div>


    {/* <Section2 /> */}

    {/* Upper section */}
    <div className="w-full  flex mt-20 justify-center">
    <div className="w-[1320px] h-[489px]  ">

<div className="h-[160px] w-full flex justify-center ">

<div className="mt-8">
  <img className="pl-10" src="/images/food-cat.png" alt="category" />
  <p className="font-sans font-semibold text-white text-4xl mt-4 ">
  <span className="text-amber-500">Ch</span>oose Food Item</p>
  </div>
</div>

{/* Lower section */}
<div className="h-[329px] w-full flex gap-[33px] ">

<div className="h-[329px] w-[306px]  relative">
  <img src="/images/1st.png" alt="1st" className="w-full h-full object-cover" />
  
  {/* Save 30% Badge */}
  <div className="absolute top-32 left-20 font-semibold hover:text-white hover:bg-amber-500 bg-white text-amber-500 rounded-[5px] border-none pl-[23px] pt-[7px] w-[125px] h-[40px]">
    Save 30%
  </div>
  
  {/* Fast Food Dish Label */}
  <div className="absolute top-44 hover:bg-white hover:text-amber-500 bg-amber-500 font-semibold text-white w-[206px] h-[46px] pl-[47px] pt-[10px]  rounded-[5px] border-none">
    Fast Food Dish
  </div>
</div>
  <div className="h-[329px] w-[306px] "><img src="/images/2nd.png" alt="2nd" /></div>
  <div className="h-[329px] w-[306px] "><img src="/images/3rd.png" alt="3rd" /></div>
  <div className="h-[329px] w-[306px] "><img src="/images/4th.png" alt="4th" /></div>
</div>

    </div>
    </div>


    {/* <Section3 /> */}

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


{/* Section4 */}
<br /><br /><br /><br /><br /><br />
<img src="/images/Clients.png" alt="reviews" />
<br /><br /><br /><br /><br /><br />


{/* <Section5 /> */}

        
<div className="w-full  flex justify-center">
<div className="h-[656px] w-[1320px] ">

<div className="pl-[40%] ">
  <img className="pl-10" src="/images/pnc.png" alt="category" />
  <p className="font-sans font-semibold text-white text-4xl mt-2 ">
  <span className="text-amber-500">Fr</span>om Our Menu</p>
  </div>

<div className="flex justify-center my-10 ">
<div className=" w-[1056px] h-[28px]">
  <ul className="flex gap-24">
    <li className="text-amber-500 hover:text-white cursor-pointer hover:underline  ">Breakfast</li>
    <li className="text-white hover:text-amber-500 cursor-pointer hover:underline ">Lunch</li>
    <li className="text-white hover:text-amber-500 cursor-pointer hover:underline ">Dinner</li>
    <li className="text-white hover:text-amber-500 cursor-pointer hover:underline ">Dessert</li>
    <li className="text-white hover:text-amber-500 cursor-pointer hover:underline ">Drink</li>
    <li className="text-white hover:text-amber-500 cursor-pointer hover:underline ">Snack</li>
    <li className="text-white hover:text-amber-500 cursor-pointer hover:underline ">Soups</li>
  </ul>
</div>
</div>

<div className="h-[405px] w-full flex ">

<div className="h-[406px] w-[515px] relative">
  {/* Background Image */}
  <img src="/images/purple1.png" alt="ok" className="w-full h-full object-cover" />

  {/* Overlay Image */}
  <img
    src="/images/pnc-f.png"
    alt="ok"
    className="absolute top-0 left-0 w-full h-full object-contain"
  />
</div>


    <div className=" h-[406px] flex w-[805px] ">

      <div className="ml-[26.5px]">
      <div className="w-[376px] h-[79px] mb-[30px] flex rounded ">
        
        <div>
        <img src="/images/1.png" alt="1" />
        </div>

        <div className="ml-3" >
          <h1 className="text-white text-lg font-semibold">Lettuce Leaf</h1>
          <p className="text-white text-s">lorem7 shgdhg hsbhbdh ns.</p>
          <p className="text-amber-500">12.5$</p>
        </div>

      </div>

      <div className="w-[376px] h-[79px] mb-[30px] flex rounded ">
                
      <div>
        <img src="/images/2.png" alt="2" />
        </div>

        <div className="ml-3" >
          <h1 className="text-white text-lg font-semibold">Fresh Breakfast</h1>
          <p className="text-white text-s">lorem7 shgdhg hsbhbdh ns.</p>
          <p className="text-amber-500">14.5$</p>
        </div>

      </div>
      <div className="w-[376px] h-[79px] mb-[30px] rounded flex ">
        
      <div>
        <img src="/images/3.png" alt="3" />
        </div>

        <div className="ml-3" >
          <h1 className="text-white text-lg font-semibold">Mild Butter</h1>
          <p className="text-white text-s">lorem7 shgdhg hsbhbdh ns.</p>
          <p className="text-amber-500">12.5$</p>
        </div>

      </div>
      <div className="w-[376px] h-[79px] rounded flex">
        
      <div>
        <img src="/images/4.png" alt="4" />
        </div>

        <div className="ml-3" >
          <h1 className="text-white text-lg font-semibold">Fresh Bread</h1>
          <p className="text-white text-s">lorem7 shgdhg hsbhbdh ns.</p>
          <p className="text-amber-500">9.5$</p>
        </div>

      </div>
      </div>

    <div className="ml-[26.5px]">
      <div className="w-[376px] h-[79px] mb-[30px] rounded flex ">
        
      <div>
        <img src="/images/5.png" alt="5" />
        </div>

        <div className="ml-3" >
          <h1 className="text-white text-lg font-semibold">Glow Cheese</h1>
          <p className="text-white text-s">lorem7 shgdhg hsbhbdh ns.</p>
          <p className="text-amber-500">12.5$</p>
        </div>

      </div>
      <div className="w-[376px] h-[79px] mb-[30px] rounded flex ">
        
      <div>
        <img src="/images/6.png" alt="6" />
        </div>

        <div className="ml-3" >
          <h1 className="text-white text-lg font-semibold">Italian Pizza</h1>
          <p className="text-white text-s">lorem7 shgdhg hsbhbdh ns.</p>
          <p className="text-amber-500">14.5$</p>
        </div>

      </div>
      <div className="w-[376px] h-[79px] mb-[30px] rounded flex ">
        
      <div>
        <img src="/images/2.png" alt="2" />
        </div>

        <div className="ml-3" >
          <h1 className="text-white text-lg font-semibold">Sllice Beef</h1>
          <p className="text-white text-s">lorem7 shgdhg hsbhbdh ns.</p>
          <p className="text-amber-500">11.5$</p>
        </div>

      </div>
      <div className="w-[376px] h-[79px] rounded flex ">
        
      <div>
        <img src="/images/2.png" alt="2" />
        </div>

        <div className="ml-3" >
          <h1 className="text-white text-lg font-semibold">Mushaom Pizza</h1>
          <p className="text-white text-s">lorem7 shgdhg hsbhbdh ns.</p>
          <p className="text-amber-500">19.5$</p>
        </div>

      </div>
    </div>
    </div>

</div>
</div>
</div>


{/* Section6 */}
            
    {/* Upper section */}
    <div className="w-full  flex mt-20 justify-center">
    <div className="w-[1320px] h-[489px]  ">

<div className="h-[160px] w-full flex justify-center ">

<div className="mt-8">
  <img className="pl-24" src="/images/Chefs.png" alt="chefs" />
  <p className="font-sans font-semibold text-white text-4xl mt-4 ">
  <span className="text-amber-500">Me</span>et Our Chef</p>
  </div>
</div>

{/* Lower section */}
<div className="h-[329px] w-full flex gap-[33px] ">

  <div className="h-[329px] w-[306px]"><img src="/images/cc.png" alt="cheif chef 1" /></div>
  <div className="h-[329px] w-[306px] "><img src="/images/cc1.png" alt="cheif chef 2" /></div>
  <div className="h-[329px] w-[306px] "><img src="/images/cc2.png" alt="cheif chef 1" /></div>
  <div className="h-[329px] w-[306px] "><img src="/images/cc3.png" alt="cheif chef 1" /></div>
</div>

    </div>
    </div>
    <div className="flex justify-center mt-24">
    <Button className="" variant="default">See More</Button>
    </div>


{/* Section7 */}
            
<div className=" w-full flex mt-20 justify-center">
<div className="w-[1273px] h-[770px]  ">

  <div className="w-full h-[20%]  mb-20 ">
<img src="/images/test.png" alt="Testimonials" /> 
<h1 className="text-white text-5xl mt-3 font-semibold">What our Clients are Saying</h1>
  </div>

<div className="w-full h-[60%]  flex justify-center items-center">
  
<div className="w-[868px] h-[451px] bg-white relative">
  {/* Image positioned on the upper border */}
  <img 
    className="absolute left-1/2 -translate-x-1/2 -top-[18%]" 
    src="/images/man.png" 
    alt="bro" 
  />

<div className="pl-[410px] pt-[100px] pb-[50px]">
  <img src="/images/Quotes.png" alt="quotes" />
</div>

<div className=" ml-[80px] w-[700px]">
<p className="align-middle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit porro odio eos exercitationem. Natus obcaecati magnam, molestiae cum nisi harum nihil, necessitatibus totam vel autem minima quod aliquam perspiciatis! Neque nihil sapiente ipsum eos eligendi optio, illum quasi quidem quis tempora eaque suscipit architecto a iure doloribus consequuntur beatae officiis?</p>
</div>
<img className="pl-[42%] pt-8" src="/images/star.png" alt="star" />
<br />
<h1 className="font-bold text-2xl pl-[370px]">Alamin Hasan</h1>
<p className=" text-slate-500 mt-2 pl-[390px]">Food Specialist</p>
</div>

</div>
<img className="pl-[45%] pt-6" src="/images/Dot.png" alt="dot" />
</div>
</div>


{/* Section8 */}
<img className="mt-20 mb-20" src="/images/bn.png" alt="banner" />


{/* Section9 */}
            
<div className="w-full mb-10 flex mt-20 justify-center">
    <div className="w-[1320px] h-[732px]   ">

<div className="h-[160px] w-full flex justify-center  ">

<div className="mt-8">
  <img className="pl-24" src="/images/bp.png" alt="chefs" />
  <p className="font-sans font-semibold text-white text-4xl mt-4 ">
  <span className="text-amber-500">La</span>test News & Blog</p>
  </div>
</div>

<div className=" flex gap-6 w-full h-[569px]">

<div className=" w-[424px] h-[569px]">
  <img src="/images/bc1.png" alt="ok" />
</div>
<div className=" w-[424px] h-[569px]">
<img src="/images/bc2.png" alt="ok" />
</div>
<div className=" w-[424px] h-[569px]">
<img src="/images/bc3.png" alt="ok" />
</div>
</div>


</div>
</div>


{/*Footer*/}

<div className="w-full h-[774px] flex flex-col">
      <div className="flex flex-col items-center pt-32 w-full bg-stone-950 max-md:pt-24 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between max-w-full w-[1169px]">
          <div className="flex flex-col text-white max-md:max-w-full">
            <h2 className="text-3xl font-bold leading-none max-md:max-w-full">
              <span className="text-amber-500">St</span>ill You Need Our Support ?
            </h2>
            <p className="mt-7 text-base max-md:mr-2 max-md:max-w-full">
              Dont wait make a smart & logical quote here. Its pretty easy.
            </p>
          </div>
          <div className="flex flex-col self-start text-base max-md:max-w-full">
            <form className="flex gap-5 justify-between pl-5 bg-amber-500 rounded fill-amber-500 max-md:max-w-full">
              <label  className="sr-only">Enter Your Email</label>
              <input
                type="email"
                id="emailSubscribe"
                className="bg-transparent my-auto text-white opacity-[0.59] focus:outline-none"
                placeholder="Enter Your Email"
                required
                aria-label="Email subscription input"
              />
              <button
                type="submit"
                className="px-6 py-4 text-amber-500 bg-white rounded fill-white max-md:px-5 hover:bg-amber-50 focus:ring-2 focus:ring-amber-600 focus:outline-none"
                aria-label="Subscribe to newsletter"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
        <div className="line mt-10 max-w-[1169px] aspect-[500] stroke-[1px] border-amber-500 border"></div>


        <div className="flex gap-5 justify-between items-start mt-14 w-full text-white max-w-[1320px] h-[331px] max-md:mt-10 max-md:max-w-full">

          <div className="w-[395px] h-[261px] flex flex-col items-start">
            <h3 className="text-xl font-bold leading-snug">About Us.</h3>
            <p className="self-stretch mt-11 text-justify text-lg leading-7 max-md:mt-10">
              Corporate clients and leisure travelers has been relying on Groundlink
              for dependable safe, and professional chauffeured car service in major
              cities across World.
            </p>
            <div className="flex gap-4 mt-9 text-sm leading-loose">
              <Image
                src={watch}
                alt="Opening hours icon"
                className="object-contain shrink-0 rounded-none aspect-[1.08] w-[77px]"
              />
              <div className="flex flex-col self-start">
                <h4 className="text-lg leading-none max-md:mr-2.5">Opening Hours</h4>
                <p className="mt-3">Mon - Sat(8.00 - 6.00)</p>
                <p className="self-start mt-2.5">Sunday - Closed</p>
              </div>
            </div>
          </div>


          <nav className="flex flex-col items-start text-base text-white" aria-label="Useful links">
            <h3 className="self-stretch text-xl font-bold leading-snug text-white">Useful Links</h3>
            <a href="#about" className="mt-9 hover:text-amber-500 focus:text-amber-500 focus:outline-none">About</a>
            <a href="#news" className="mt-7 hover:text-amber-500 focus:text-amber-500 focus:outline-none">News</a>
            <a href="#partners" className="mt-7 hover:text-amber-500 focus:text-amber-500 focus:outline-none">Partners</a>
            <a href="#team" className="mt-7 hover:text-amber-500 focus:text-amber-500 focus:outline-none">Team</a>
            <a href="#menu" className="mt-7 hover:text-amber-500 focus:text-amber-500 focus:outline-none">Menu</a>
            <a href="#contact" className="mt-7 hover:text-amber-500 focus:text-amber-500 focus:outline-none">Contact</a>
          </nav>

          <nav className="flex flex-col items-start text-base text-white" aria-label="Help section">
            <h3 className="text-xl font-bold leading-snug text-white">Help?</h3>
            <a href="#faq" className="mt-8 hover:text-amber-500 focus:text-amber-500 focus:outline-none">FAQ</a>
            <a href="#terms" className="self-stretch mt-7 hover:text-amber-500 focus:text-amber-500 focus:outline-none">Term & Condition</a>
            <a href="#reporting" className="mt-7 hover:text-amber-500 focus:text-amber-500 focus:outline-none">Reporting</a>
            <a href="#documentation" className="mt-6 hover:text-amber-500 focus:text-amber-500 focus:outline-none">Documentation</a>
            <a href="#support" className="mt-7 hover:text-amber-500 focus:text-amber-500 focus:outline-none">Support Policy</a>
            <a href="#privacy" className="mt-6 hover:text-amber-500 focus:text-amber-500 focus:outline-none">Privacy</a>
          </nav>

          <div className="flex flex-col self-stretch">
            <h3 className="self-start text-xl font-bold leading-snug">Recent Post</h3>
            <article className="flex gap-4 self-start mt-11 max-md:mt-10">
              <Image
                src={fastFood}
                alt="Fast food article thumbnail"
                className="object-contain shrink-0 w-20 aspect-square"
              />
              <div className="flex flex-col self-start">
                <h4 className="text-base leading-6">
                  Is fastfood good for
                  <br />
                  your body?
                </h4>
                <time className="self-start mt-3.5 text-sm leading-loose opacity-[0.49]">
                  February 28,2022
                </time>
              </div>
            </article>
            <article className="flex gap-4 px-px mt-4">
              <Image
                src={fastFood}
                alt="Organic food article thumbnail"
                className="object-contain shrink-0 w-20 aspect-[1.01]"
              />
              <div className="flex flex-col self-start">
                <h4 className="text-base leading-6">
                  Change your food habit
                  <br />
                  With organic food
                </h4>
                <time className="self-start mt-3.5 text-sm leading-loose opacity-[0.49]">
                  February 28,2022
                </time>
              </div>
            </article>
            <article className="flex gap-4 px-px mt-4 max-md:mr-1">
              <Image
                src={fastFood}
                alt="Fast food lifestyle article thumbnail"
                className="object-contain shrink-0 w-20 aspect-square"
              />
              <div className="flex flex-col self-start">
                <h4 className="text-base leading-6">
                  Do you like fastfood for
                  <br />
                  your life?
                </h4>
                <time className="self-start mt-3.5 text-sm leading-loose opacity-[0.49]">
                  February 28,2022
                </time>
              </div>
            </article>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center self-stretch px-16 py-8 mt-14 w-full text-base bg-neutral-600 fill-neutral-600 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1314px] max-md:max-w-full">
            <p className="self-start text-white">
              Copyright © 2022 by Ayeman. All Rights Reserved.
            </p>
            <div className="flex gap-3.5 whitespace-nowrap text-stone-900">
              <Link href="#facebook" className="px-3 py-2 text-center bg-white rounded-sm fill-white hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-600" aria-label="Visit our Facebook page">
                <FaFacebook />
              </Link>
              <Link href="#twitter" className="px-2.5 py-2 text-center bg-white rounded-sm fill-white hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-600" aria-label="Visit our Twitter page">
                <FaTwitter />
              </Link>
              <Link href="#instagram" className="px-3 py-2 bg-white rounded-sm fill-white hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-600" aria-label="Visit our Instagram page">
                <FaInstagram />
              </Link>
              <Link href="#youtube" className="px-2.5 py-2 text-amber-500 bg-white rounded-sm fill-white hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-600" aria-label="Visit our YouTube channel">
                <FaYoutube />
              </Link>
              <Link href="#linkedin" className="px-2.5 py-2 bg-white rounded-sm fill-white hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-600" aria-label="Visit our LinkedIn page">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>


</div>
  );
}
