import Link from "next/link"
import {  Search, UserRound } from "lucide-react"
import Image from "next/image"
import { PiHandbag } from "react-icons/pi"
import bgPic from '/public/images/menutop.png'
import { Button } from '@/components/ui/button'
import Footer from "../../../../components/Footer"

export default function item ({params}: {params: {items: string}}) {

const data = [
  {
    name: "Fresh Lime" ,
    price: 38.00 ,
    itemNo: "1"
  },
  {
    name: "NYC Burger" ,
    price: 38.00 ,
    itemNo: "2"
  },  {
    name: "Beef Smash" ,
    price: 21.00 ,
    itemNo: "3"
  },  {
    name: "Chocolate Muffin" ,
    price: 45.00 ,
    itemNo: "4"
  },  {
    name: "Holand Pizza" ,
    price: 23.00 ,
    itemNo: "5"
  },  {
    name: "Zilla Mocktail" ,
    price: 43.00 ,
    itemNo: "6"
  },  {
    name: "Italiano Crumb" ,
    price: 10.00 ,
    itemNo: "7"
  },  {
    name: "Mexican Blast" ,
    price: 25.00 ,
    itemNo: "8"
  },  {
    name: "Swiss Cheese Tower" ,
    price: 12.00 ,
    itemNo: "9"
  },  {
    name: "Mac N Cheese" ,
    price: 10.00 ,
    itemNo: "10"
  },  {
    name: "Kang Punch" ,
    price: 29.00 ,
    itemNo: "11"
  },  {
    name: "Chupucini di taro" ,
    price: 12.00 ,
    itemNo: "12"
  },  {
    name: "Coral Steak" ,
    price: 70.00 ,
    itemNo: "13"
  },  {
    name: "Vinchi Pichini" ,
    price: 89.00 ,
    itemNo: "14"
  },  {
    name: "Cramel Gold" ,
    price: 19.00 ,
    itemNo: "15"
  },
]

const url = params.items


function Name (callback : string) {
return data.find((y)=> y.itemNo === callback)
}

const result = Name(url) 


    return(
    <div>
      {
        result ? (
          <div>
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
            <div className=" w-[491px] h-full"><img src="/images/bigone.png" alt="item" /></div>

        </div>
        </div>

        <div className="h-full w-1/2">
        
        <div className="w-full h-[40%] border-b mt-14">
        <Button variant="outline" className="w-[86px] rounded-[10px] h-[28px]">In stock</Button>
        <h1 className="text-5xl mt-7 font-bold">{result.name}</h1>
        <p className="text-slate-400 mt-10 mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque consectetur aliquam assumenda eligendi modi. Dolores provident dicta impedit placeat possimus at sapiente nam magnam excepturi. Cumque maxime, tempore ut fugit nobis vero distinctio accusamus tenetur cupiditate similique eum aut sed modi corrupti ex, qui ipsam! Soluta culpa consectetur, tempore obcaecati esse eaque eos. Aliquid modi voluptates minima sed explicabo voluptate.</p>
        <br />
        </div>
        

        <div className="w-full h-[30%] border-b">
        <h1 className="text-4xl mt-7 font-bold">${result.price}.00</h1>
        <br />
        <div className="w-[333px] h-[24px]">
            <img src="/images/rating.png" alt="rating" />
        </div>
        <p className="text-slate-400 mt-4 ">Dictum/Cursur</p>
        <br />
        <Button variant="outline" className="w-[191px] h-[50px]">Add To Cart</Button>
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
        ) : (
          <h1>Page not Found</h1>
        )
      }
    </div>
  )
}