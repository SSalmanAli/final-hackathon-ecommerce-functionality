import React from 'react'
import Link from 'next/link'
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import bgPic from '/public/images/menutop.png'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'



async function page () {
  
  const data : Post[] = await client.fetch(`*[_type == "food" ]{
    name,
      originalPrice,
      available,
      category,
      image,
      description,
      price,
      _id
  }`
  )
  
  
  const chef:Chef[] = await client.fetch(`*[_type == "chef" ]{
  specialty,
    available,
    experience,
    image,
    name,
    description,
    position,
    _id
}`)
  

  
  return (
    <main className=" w-[1510px] h-fit">

<Header />

      <div className="w-[1510px] h-[310px]">
        <Image
          src={bgPic}
          className="object-contain w-full aspect-[4.67] -z-10"
          alt="Decorative banner image"
        />
        <div className='w-[225px] h-[104px] z-100'>
        
          <h1 className='text-white p text-5xl font-bold absolute top-[198px] left-[35%] leading-14'>Our Chefs & Dishes</h1>

          <div className='w-[133px] h-7 flex items-center absolute top-[274px] left-[47%]'>
            <Link href='/' className='text-white text-[20px] leading-7'>Home</Link>
            <ChevronRight className='w-4 h-4 text-white' />
            <Link href='/c&p' className='text-[#ff9f0d] text-[20px] font-normal leading-7'>C&P</Link>
          </div>
        </div>
      </div>

<br /><br /><br /><br /><br />



      <div className=" h-fit w-full grid pl-32 grid-cols-3 gap-4 ">

{

data.map((food : Post) =>(
  
  <div key={food._id} className="w-[312px] h-[330px]  cursor-pointer hover:bg-slate-100">
    <img src={urlFor(food.image).url()} alt="food" />
    <h1 className="font-semibold ">{food.name}</h1>
    <div className="flex gap-4">
    <p className="text-amber-500">${food.price}</p>
    <p className="text-slate-500 line-through">${food.originalPrice}</p>
    </div>
  </div>
  
))
}
</div>

<br /><br /><br />

<div className="w-full flex mt-20 justify-center">
  <div className="w-full px-4">

    {/* Upper Section */}
    <div className="flex flex-col items-center text-center">
      <img className="w-auto" src="/images/Chefs.png" alt="chefs" />
      <p className="font-sans font-semibold text-black text-4xl mt-4">
        <span className="text-amber-500">Me</span>et Our Chef
      </p>
    </div>

    {/* Lower Section */}
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      {
        chef.map((cook : Chef) => (
      <div key={cook._id} className="h-auto w-[306px]">
        <img className="w-full" src={urlFor(cook.image).url()} alt="chief chef 1" />
        <p className="font-sans font-semibold text-black text-2xl mt-4">
          {cook.name}
          </p>
        </div>
        ))
      }
    </div>
  </div>
</div>

<br /><br /><br />



{/* footer */}
<Footer />


</main>
  )
}

export default page
