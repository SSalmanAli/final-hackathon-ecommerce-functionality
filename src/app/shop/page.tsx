"use client"
import Link from "next/link"
import { ChevronRight} from "lucide-react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
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
import { products } from "../utils/mock"
import Header from "../../../components/Header"


export default function Shop () {

  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );



    return(
        <div className=" bg-white w-screen h-fit">

<Header />

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
<Link href={`/dynamic/${product.id}`} key={product.id}>
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