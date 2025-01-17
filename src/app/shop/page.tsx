import Link from "next/link"
import { ChevronRight, Search, UserRound } from "lucide-react"
import Image from "next/image"
import { PiHandbag } from "react-icons/pi"
import bgPic from '/public/images/menutop.png'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Footer from "../../../components/Footer"



export default function shop () {
    return(
        <div className=" bg-white w-screen h-fit">


      {/* Header */}
      <div className="w-screen min-h-[90px] flex items-center bg-stone-950 " >
        <div className="w-[1320px]  h-8 absolute top-[29px] left-[100px] flex flex-wrap gap-10 items-center">
          <div className="w-[109px]  h-8 self-stretch text-2xl font-bold leading-none text-amber-500 ">

            <span className="text-white">Food</span>

            <span className="text-amber-500">tuck</span>
          </div>
          <nav className="max-w-[508px] h-6 flex flex-wrap absolute top-2 left-[451px] gap-8 self-stretch text-base text-white max-md:max-w-full" aria-label="Main navigation">
            <Link href="/" className=" hover:underline">Home</Link>
            <Link href="/menu" className=" hover:underline">Menu</Link>
            <Link href="/error" className=" hover:underline">Blog</Link>
            <Link href="/shop" className="grow font-bold  hover:underline text-amber-500" aria-current="page">Shop</Link>
            <Link href="/faq" className=" hover:underline">FAQ</Link>
            <Link href="/error" className=" hover:underline">Contact</Link>
          </nav>
          <div className="flex  gap-4 self-stretch my-auto" aria-label="Social media links">
            <Search className=" absolute left-[1216px] top-2 shrink-0 w-6 h-6 aspect-square text-[#ffffff]" />
            <UserRound className=" absolute left-[1256px] top-2 shrink-0 w-6 h-6 aspect-square text-[#ffffff]" />
            <PiHandbag className=" absolute left-[1296px] top-2 shrink-0 w-6 h-6 aspect-square text-[#ffffff]" />
          </div>
        </div>
      </div>

      <div className="w-screen  h-[310px]">
        <Image
          src={bgPic}
          className="object-contain w-full aspect-[4.67] -z-10"
          alt="Decorative banner image"
        />
        <div className='w-[225px] h-[104px]  z-100'>
        
          <h1 className='text-white p text-5xl font-bold absolute top-[198px] left-[45%] leading-14'>Our Shop</h1>

          <div className='w-[133px] h-7 flex items-center absolute top-[274px] left-[47%]'>
            <Link href='/' className='text-white text-[20px] leading-7'>Home</Link>
            <ChevronRight className='w-4 h-4 text-white' />
            <Link href='/shop' className='text-[#ff9f0d] text-[20px] font-normal leading-7'>Shop</Link>
          </div>
        </div>
      </div>

<br />
<br />
<br />
<br />
<br />
<br />
<br />

<div className=" w-full h-[1923px]  flex justify-center">
    <div className=" w-[1320px] h-[1923px] flex gap-5">
        {/* left section of images and 2 serches */}
        <div className="w-[984px] h-[1923px] ">

            {/* Search Section */}
            <div className="w-full h-[46px] flex gap-6">

                <div className="flex gap-2">
                    <p className="mt-2 ">Sort By: </p>
                    <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Newest" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Item</SelectItem>
    <SelectItem value="dark">Price</SelectItem>
    <SelectItem value="system">Course</SelectItem>
  </SelectContent>
</Select>
                </div>
                
                <div className="flex gap-2">
                    <p className="mt-2 ">Show: </p>
                    <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Default" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Starters</SelectItem>
    <SelectItem value="dark">Main Course</SelectItem>
    <SelectItem value="system">Desserts</SelectItem>
  </SelectContent>
</Select>
                </div>
            </div>



            {/* item section */}
    <div className=" h-[1800px] w-full grid grid-cols-3 gap-4 ">

<Link href="/dynamic/1">
  <div className="w-[312px] h-[330px] cursor-pointer hover:bg-slate-100">
    <img src="/images/a.png" alt="food" />
    <h1 className="font-semibold ">Fresh Lime</h1>
    <div className="flex gap-4">
    <p className="text-amber-500">$38.00</p>
    <p className="text-slate-500 line-through">$45.00</p>
    </div>
  </div>
  </Link>

  <Link href="/dynamic/2">
  <div className="w-[312px] h-[330px] cursor-pointer hover:bg-slate-100">
  <img src="/images/b.png" alt="food2" />
  <h1 className="font-semibold ">NYC Burger</h1>
  <p className="text-amber-500">$38.00</p>
  </div>
  </Link>

  <Link href="/dynamic/3">
  <div className="w-[312px] h-[330px] cursor-pointer hover:bg-slate-100">
  <img src="/images/c.png" alt="food3" />
    <h1 className="font-semibold ">Beef Smash</h1>
    <div className="flex gap-4">
    <p className="text-amber-500">$21.00</p>
    <p className="text-slate-500 line-through">$45.00</p>
    </div>
  </div>
  </Link>

  <Link href="/dynamic/4">
  <div className="w-[312px] h-[330px] cursor-pointer hover:bg-slate-100">
  <img src="/images/d.png" alt="food4" />
  <h1 className="font-semibold ">Chocolate Muffin</h1>
  <p className="text-amber-500">$45.00</p>
  </div>
</Link>

  <Link href="/dynamic/5">
  <div className="w-[312px] h-[330px] cursor-pointer hover:bg-slate-100">
  <img src="/images/e.png" alt="food5" />
    <h1 className="font-semibold ">Holand Pizza</h1>
    <div className="flex gap-4">
    <p className="text-amber-500">$23.00</p>
    <p className="text-slate-500 line-through">$45.00</p>
    </div>
  </div>
  </Link>

  <Link href="/dynamic/6">
  <div className="w-[312px] h-[330px] cursor-pointer hover:bg-slate-100">
  <img src="/images/f.png" alt="food6" />
  <h1 className="font-semibold ">Zilla Mocktail</h1>
  <p className="text-amber-500">$43.00</p>
  </div>
</Link>

  <Link href="/dynamic/7">
  <div className="w-[312px] h-[330px] cursor-pointer hover:bg-slate-100">
  <img src="/images/g.png" alt="food7" />
  <h1 className="font-semibold ">Italiano Crumb</h1>
  <p className="text-amber-500">$10.00</p>
  </div>
  </Link>

  <Link href="/dynamic/8">
  <div className="w-[312px] h-[330px] cursor-pointer hover:bg-slate-100">
  <img src="/images/h.png" alt="food8" />
  <h1 className="font-semibold ">Mexican Blast</h1>
  <p className="text-amber-500">$25.00</p>
  </div>
</Link>

  <Link href="/dynamic/9">
  <div className="w-[312px] h-[330px] cursor-pointer hover:bg-slate-100">
  <img src="/images/i.png" alt="food9" />
  <h1 className="font-semibold ">Swiss Cheese Tower</h1>
  <p className="text-amber-500">$12.00</p>
  </div>
  </Link>

  <Link href="/dynamic/10">
  <div className="w-[312px] h-[330px] cursor-pointer hover:bg-slate-100">
  <img src="/images/j.png" alt="food10" />
  <h1 className="font-semibold ">Mac N Cheese</h1>
  <p className="text-amber-500">$10.00</p>
  </div>
  </Link>

  <Link href="/dynamic/11">
  <div className="w-[312px] h-[330px] cursor-pointer hover:bg-slate-100">
  <img src="/images/k.png" alt="food11" />
    <h1 className="font-semibold ">Kang Punch</h1>
    <div className="flex gap-4">
    <p className="text-amber-500">$29.00</p>
    <p className="text-slate-500 line-through">$45.00</p>
    </div>
  </div>
</Link>

  <Link href="/dynamic/12">
  <div className="w-[312px] h-[330px] cursor-pointer hover:bg-slate-100">
  <img src="/images/l.png" alt="food12" />
  <h1 className="font-semibold ">Chupucini di taro</h1>
  <p className="text-amber-500">$12.00</p>
  </div>
  </Link>

  <Link href="/dynamic/13">
  <div className="w-[312px] h-[330px] cursor-pointer hover:bg-slate-100">
  <img src="/images/m.png" alt="food13" />
  <h1 className="font-semibold ">Coral Steak</h1>
  <p className="text-amber-500">$70.00</p>
  </div>
</Link>

  <Link href="/dynamic/14">
  <div className="w-[312px] h-[330px] cursor-pointer hover:bg-slate-100">
  <img src="/images/n.png" alt="food14" />
    <h1 className="font-semibold ">Vinchi Pichini</h1>
    <div className="flex gap-4">
    <p className="text-amber-500">$89.00</p>
    <p className="text-slate-500 line-through">$145.00</p>
    </div>
  </div>
  </Link>

  <Link href="/dynamic/15">
  <div className="w-[312px] h-[330px] cursor-pointer hover:bg-slate-100">
  <img src="/images/o.png" alt="food15" />
    <h1 className="font-semibold ">Cramel Gold</h1>
    <div className="flex gap-4">
    <p className="text-amber-500">$19.00</p>
    <p className="text-slate-500 line-through">$50.00</p>
    </div>
  </div>
  </Link>
</div>

            {/* card selector */}
            <div className="w-full h-[51px] flex justify-center">
              <img src="/images/pagination.png" alt="scrollable" />
            </div>
        </div>



        <div className="w-[312px] h-[1489px] border-2 border-slate-200">
          <br />
          
          <div className="flex justify-center">
          <div className="w-[248px] h-fit bg-amber-100">
            <div className="flex justify-between">
            <p className="ml-8 mt-1">Search Product</p>
            <img className="bg-amber-500 " src="/images/vector.png" alt='search' />
            </div>
          </div>
          </div>
          
          <br />
          
          <div className="flex justify-center">
          <div className="w-[248px] h-[372px]">
              <h1 className="text-2xl font-semibold">Categories</h1>
              <br />
              <ul>
                <li className="mb-3">☐ Sandwiches</li>
                <li  className="mb-3">☐ Burger</li>
                <li className="mb-3">☐ Chicken Chup</li>
                <li className="mb-3">☐ Drinks</li>
                <li className="mb-3">☐ Pizza</li>
                <li className="mb-3">☐ Thi</li>
                <li className="mb-3">☐ Non-Veg</li>
                <li>☐ Uncategorized</li>
              </ul>
          </div>
          </div>

          <br />
          
          <div className="flex justify-center">
          <div className="w-[248px] h-[286px]">
            <img src="/images/banner.png" alt="shop now" />
          </div>
          </div>

          <br />
          
          <div className="flex justify-center">
          <div className="w-[248px] h-[87px]">
            <img src="/images/filterbyprice.png" alt="filter" />
          </div>
          </div>

          <br />
          
          <div className="flex justify-center">
          <div className="w-[252px] h-[368px]">
            <img src="/images/latestproduct.png" alt="new product" />
          </div>
          </div>

          <br />

          <div className="flex justify-center">
          <div className="w-[225px] h-[162px]">
            <img src="/images/producttag.png" alt="tags" />
          </div>
          </div>
        </div>

    </div>
</div>

<br /><br /><br /><br /><br /><br />



{/* Footer */}
<div className="w-full">
<Footer />
</div>
        </div>
    )
}