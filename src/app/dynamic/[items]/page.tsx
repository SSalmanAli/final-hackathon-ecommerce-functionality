"use client"
import Link from "next/link"
import Image from "next/image"
import bgPic from '/public/images/menutop.png'
import { Button } from '@/components/ui/button'
import Footer from "../../../../components/Footer"
import { useState } from "react"
import { products } from "@/app/utils/mock"
import Header from "../../../../components/Header"
import AddToCart from "../../../../components/AddToCart"

export default function Item ({params}: {params: {items: string}}) {

const slug = products.filter((val) => val.id === params.items)


const [cartItem , setCartItem] = useState(
  {
    id: slug[0].id,
    name: slug[0].name,
    price: slug[0].price,
    image: slug[0].image,
    dPrice: slug[0].dPrice,
    qty: slug[0].qty
  }
)



    return(
    <div>
      
          <div>
                    <div className=" bg-white w-screen h-fit">
      
          <Header />

      <div className="w-screen  h-[310px]">
        <Image
          src={bgPic}
          className="object-contain w-full aspect-[4.67] -z-10"
          alt="Decorative banner image"
        />
        <div className='w-[225px] h-[104px]  z-100'>
        
          <h1 className='text-white p text-5xl font-bold absolute top-[198px] left-[42%] leading-14'>Our Products</h1>

          <div className='w-[133px] h-7 flex items-center absolute top-[274px] left-[47%]'>
            <Link href='/shop' className='text-white text-[20px] leading-7 cursor-pointer hover:underline'>Shop</Link>
            <h1 className=" text-2xl text-white">&nbsp;/&nbsp;</h1> 
            <Link href='/shop' className='text-[#ff9f0d] text-[20px] font-normal cursor-pointer hover:underline leading-7'>Products</Link>
          </div>
        </div>
      </div>


<div className="w-screen h-[718px] flex justify-center mt-20 ">
    <div className="h-full w-[1320px] flex gap-10 ">

        <div className="h-full w-1/2  flex justify-center items-center">
        <div className="w-[647px] h-[596px] flex gap-3 ">

            <div className=" w-[144px] h-full">
                <img src="/images/yea.png"  alt="item2" />
                <img src="/images/yeaa.png" className="mt-5" alt="item3" />
                <img src="/images/yeaaa.png" className="mt-5" alt="item4" />
                <img src="/images/yeaaaa.png" className="mt-5" alt="item5" />
            </div>
            <div className=" w-[491px] h-full relative overflow-hidden">
              <Image src={cartItem.image} alt="item" layout="fill" objectFit="cover" quality={100} />
              </div>

        </div>
        </div>

        <div className="h-full w-1/2">
        
        <div className="w-full h-[40%] border-b mt-14">
        <Button variant="outline" className="w-[86px] rounded-[10px] h-[28px]">In stock</Button>
        <h1 className="text-5xl mt-7 font-bold">{cartItem.name}</h1>
        <p className="text-slate-400 mt-10 mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque consectetur aliquam assumenda eligendi modi. Dolores provident dicta impedit placeat possimus at sapiente nam magnam excepturi. Cumque maxime, tempore ut fugit nobis vero distinctio accusamus tenetur cupiditate similique eum aut sed modi corrupti ex, qui ipsam! Soluta culpa consectetur, tempore obcaecati esse eaque eos. Aliquid modi voluptates minima sed explicabo voluptate.</p>
        <br />
        </div>
        

        <div className="w-full h-[30%] border-b">
        <h1 className="text-4xl mt-7 font-bold">${cartItem.price * cartItem.qty}.00</h1>
        <br />
        <div className="w-[333px] h-[24px]">
            <img src="/images/Rating.png" alt="rating" />
        </div>
        <p className="text-slate-400 mt-4 ">Dictum/Cursur</p>
        <br />

        <div className="flex gap-8">

        {/* <Button onClick={() => dispatch(addToCart(cartItem))} variant="outline" className="w-[191px] h-[50px]">Add To Cart</Button> */}
        <AddToCart cartItem={cartItem} />

        <div className="flex justify-center bg-slate-300 items-center gap-2 border border-gray-200 w-[100px] h-[30px] text-[16px] font-medium text-center rounded-2xl mt-8 md:mt-3">
        <button onClick={() => setCartItem({ ...cartItem, qty: cartItem.qty <=1? 1 : - 1 })} className="px-2 py-1 rounded">-</button>
        <span className="text-lg font-medium">{cartItem.qty}</span>
        <button onClick={() => setCartItem({ ...cartItem, qty: cartItem.qty + 1 })} className="px-2 py-1 rounded">+</button>
      </div>
        </div>
        </div>


<div className="w-full h-full boder-b">
    <p>♥&nbsp; Add to Wishlist &nbsp;&nbsp;&nbsp; ⫔&nbsp;Compare</p>
    <p className="mt-4">Category: Main Course</p>
    <h1 className="mt-4 mb-4">Tag : Our Shop </h1>
    <img src="/images/socials2.png" alt="socials" />
    <br />
</div>
        </div>
    </div>
</div>

<br /><br /><br /><br /><br />

<div className= "w-screen h-[458px] flex justify-center">
  <div className="h-full w-[1320px]">

    <div className="flex gap-7">
      <Button variant="default" className="w-[191px] h-[50px]">Description</Button>
      <h1 className="text-xl mt-3 font-semibold">Reviews (24)</h1>
    </div>

    <p className="text-slate-400 mt-10 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam hic debitis impedit vitae doloremque, provident nisi veniam optio obcaecati, earum adipisci quas, eaque ipsum consequatur sapiente nostrum? Molestiae esse aperiam asperiores corrupti iusto maxime perspiciatis nihil ducimus incidunt non, adipisci laudantium. Ullam minima eligendi atque voluptate porro asperiores corporis quisquam reiciendis ipsum, enim facilis accusantium modi assumenda aut odit laudantium expedita? Alias aut possimus similique magni numquam quas a voluptate.</p>

    <p className="text-slate-400 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam hic debitis impedit vitae doloremque, provident nisi veniam optio obcaecati, earum adipisci quas, eaque ipsum consequatur sapiente nostrum? Molestiae esse aperiam asperiores corrupti iusto maxime perspiciatis nihil ducimus incidunt non, adipisci laudantium. Ullam minima eligendi atque voluptate porro asperiores corporis quisquam reiciendis ipsum, enim facilis accusantium modi assumenda aut odit laudantium expedita? Alias aut possimus similique magni numquam quas a voluptate.</p>

    <h1 className="mb-5 text-slate-600">Key Benefits</h1>
    <ul>
      <li className="text-slate-600">. Lorem ipsum dolor sit amet consectetur.</li>
      <li className="text-slate-600">. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima!</li>
      <li className="text-slate-600">. Lorem ipsum dolor sit amet.</li>
      <li className="text-slate-600">. rem ipsum dolor sit.</li>
      <li className="text-slate-600">. Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
    </ul>
  </div>
</div>
<br /><br /><br /><br /><br />
    {/* Footer */}
    <div className="w-full">
<Footer />
</div>
        </div>
          </div>
    </div>
  )
}