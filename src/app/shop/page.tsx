"use client"
import { Input } from "@/components/ui/input"
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
import { useState } from "react";



const data = [
  { name: "Fresh Lime", price: 38.00, dPrice: 45.00, itemNo: "1", image: "/images/a.png" },
  { name: "NYC Burger", price: 38.00, itemNo: "2", image: "/images/b.png" },
  { name: "Beef Smash", price: 21.00, dPrice: 36.00, itemNo: "3", image: "/images/c.png" },
  { name: "Chocolate Muffin", price: 45.00, itemNo: "4", image: "/images/d.png" },
  { name: "Holand Pizza", price: 23.00, itemNo: "5", image: "/images/e.png" },
  { name: "Zilla Mocktail", price: 43.00, dPrice: 50.00, itemNo: "6", image: "/images/f.png" },
  { name: "Italiano Crumb", price: 10.00, dPrice: 15.00, itemNo: "7", image: "/images/g.png" },
  { name: "Mexican Blast", price: 25.00, itemNo: "8", image: "/images/h.png" },
  { name: "Swiss Cheese Tower", price: 12.00, itemNo: "9", image: "/images/i.png" },
  { name: "Mac N Cheese", price: 10.00, itemNo: "10", image: "/images/j.png" },
  { name: "Kang Punch", price: 29.00, dPrice: 45.00, itemNo: "11", image: "/images/k.png" },
  { name: "Chupucini di taro", price: 12.00, itemNo: "12", image: "/images/l.png" },
  { name: "Coral Steak", price: 70.00, dPrice: 99.00, itemNo: "13", image: "/images/m.png" },
  { name: "Vinchi Pichini", price: 89.00, itemNo: "14", image: "/images/n.png" },
  { name: "Cramel Gold", price: 19.00, dPrice: 25.00, itemNo: "15", image: "/images/o.png" },
];










export default function shop () {
  const [showSearch, setShowSearch] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = data.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );



    return(
        <div className=" bg-white w-screen h-fit">

{/* header */}
<div className="w-screen min-h-[90px] flex items-center bg-stone-950">
      <div className="w-[1320px] h-8 absolute top-[29px] left-[100px] flex flex-wrap gap-10 items-center">
        {/* Logo */}
        <div className="w-[109px] h-8 self-stretch text-2xl font-bold leading-none text-amber-500">
          <span className="text-white">Food</span>
          <span className="text-amber-500">tuck</span>
        </div>

        {/* Navigation */}
        <nav
          className="max-w-[508px] h-6 flex flex-wrap absolute top-2 left-[451px] gap-8 self-stretch text-base text-white max-md:max-w-full"
          aria-label="Main navigation"
        >
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/menu" className="hover:underline">
            Menu
          </Link>
          <Link href="/error" className="hover:underline">
            Blog
          </Link>
          <Link
            href="/shop"
            className="grow font-bold hover:underline text-amber-500"
            aria-current="page"
          >
            Shop
          </Link>
          <Link href="/faq" className="hover:underline">
            FAQ
          </Link>
          <Link href="/c&p" className="hover:underline">
            C&P
          </Link>
        </nav>

        {/* Social Media Links */}
        <div
          className="flex gap-4 self-stretch my-auto"
          aria-label="Social media links"
        >
          {!showSearch && (
            <Search
              onClick={() => setShowSearch(true)}
              className="cursor-pointer absolute left-[1216px] top-2 shrink-0 w-6 h-6 aspect-square text-[#ffffff]"
            />
          )}
          {showSearch && (
            <div className="absolute left-[1150px] top-1 flex items-center gap-2">
              <Input
                className="text-white bg-black border-2 border-amber-500 rounded-full py-1 pl-3 pr-8"
                placeholder="Search..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                onClick={() => setShowSearch(false)}
                className="text-gray-400 hover:text-gray-700"
              >
                Close
              </button>
            </div>
          )}
          {!showSearch && (
            <>
              <UserRound className="absolute left-[1256px] top-2 shrink-0 w-6 h-6 aspect-square text-[#ffffff]" />
              <PiHandbag className="absolute left-[1296px] top-2 shrink-0 w-6 h-6 aspect-square text-[#ffffff]" />
            </>
          )}
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

    {filteredProducts.map(product => (
<Link href={`/dynamic/${product.itemNo}`} key={product.itemNo}>
  <div className="w-[312px] h-[330px] cursor-pointer hover:bg-slate-100">
    <img src={product.image} alt="food" />
    <h1 className="font-semibold ">{product.name}</h1>
    <div className="flex gap-4">
    <p className="text-amber-500">${product.price}.00</p>
    <p className="text-slate-500 line-through">${product.dPrice}.00</p>
    </div>
  </div>
  </Link>
 ))}

</div>

            {/* card selector */}
            <div className="w-full h-[51px] flex justify-center">
              <img src="/images/pagination.png" alt="scrollable" />
            </div>
        </div>



        <div className="w-[312px] h-[1489px] border-2 border-slate-200">
          <br />
          
          <div className="flex justify-center">
            <div className="mr-[40px]">
          <Input
                className="text-amber-400 text-[30px]  "
                placeholder="Search Products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
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