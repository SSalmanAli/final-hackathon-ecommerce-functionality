"use client"

import Link2 from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa'
import { ChevronLeft, Link , ChevronRight, Search, UserRound } from 'lucide-react'
import { PiHandbag } from 'react-icons/pi'
import bgPic from '/public/images/menutop.png'
import {useAppSelector} from '../store/hooks'
const Page = () => {
  const checkout = useAppSelector((state) => state.cart)
  const total = checkout.reduce((total , arr) => {return (total+((arr.price-(arr.price*arr.dPrice)/100))*arr.qty)},0)
  const grandTotal = total + 3.99
  return (
    <main className='w-fit h-fit' >
      {/* Header */}
      <div className="w-[1510px] min-h-[90px] flex items-center bg-stone-950 " >
        <div className="w-[1320px] h-8 absolute top-[29px] left-[300px] flex flex-wrap gap-10 items-center">
          <div className="w-[109px] h-8 self-stretch text-2xl font-bold leading-none text-amber-500 ">

            <span className="text-white cursor-pointer"><a href="/">Food</a></span>

            <span className="text-amber-500 cursor-pointer"><a href="/">tuck</a></span>
          </div>
          <nav className="max-w-[508px] h-6 flex flex-wrap absolute top-2 left-[451px] gap-8 self-stretch text-base text-white max-md:max-w-full" aria-label="Main navigation">
            <Link href="/" className="grow font-bold text-amber-500" aria-current="page">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/check-out">Checkout</Link>
            <Link href="/about">About</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div className="flex gap-4 self-stretch my-auto" aria-label="Social media links">
            <Search className=" absolute left-[1216px] top-2 shrink-0 w-6 h-6 aspect-square text-[#ffffff]" />
            <UserRound className=" absolute left-[1256px] top-2 shrink-0 w-6 h-6 aspect-square text-[#ffffff]" />
            <PiHandbag className=" absolute left-[1296px] top-2 shrink-0 w-6 h-6 aspect-square text-[#ffffff]" />
          </div>
        </div>
      </div>

      <div className="w-[1510px] h-[410px]">
        <Image
          src={bgPic}
          className="object-contain w-full aspect-[4.67] -z-10"
          alt="Decorative banner image"
        />
        <div className='w-[225px] h-[104px] z-100'>
          <h1 className='text-white text-5xl font-bold absolute top-[198px] left-[620px] leading-14'>Checkout Page</h1>

          <div className='w-[133px] h-7 flex items-center absolute top-[274px] left-[770px]'>
            <Link href='/' className='text-white text-[20px] leading-7'>Home</Link>
            <ChevronRight className='w-4 h-4 text-white' />
            <Link href='menu' className='text-[#ff9f0d] text-[20px] font-normal leading-7'>Checkout</Link>
          </div>

        </div>

      </div>


      {/* Mid Section */}

      <div className="w-[1320px] h-[723px] absolute  top-[530px] left-[100px]">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[872px] h-[723px] max-md:ml-0 max-md:w-full">
            <form className="flex flex-col w-full text-base max-md:mt-6 max-md:max-w-full">
              <h2 className="self-start text-xl font-bold leading-snug text-zinc-800">
                Shipping Address
              </h2>
              <div className="flex flex-wrap gap-6 mt-6 text-zinc-800 max-md:max-w-full">
                <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                  <label  className="self-start">First name</label>
                  <input type="text" id="firstName" name="firstName" className="flex shrink-0 mt-2 h-14 border border-solid border-neutral-200 max-md:max-w-full px-4" required aria-required="true" />
                </div>
                <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                  <label  className="self-start">Last name</label>
                  <input type="text" id="lastName" name="lastName" className="flex shrink-0 mt-2 h-14 border border-solid border-neutral-200 max-md:max-w-full px-4" required aria-required="true" />
                </div>
              </div>
              <div className="flex flex-wrap gap-6 mt-4 text-zinc-800 max-md:max-w-full">
                <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                  <label  className="self-start">Email address</label>
                  <input type="email" id="email" name="email" className="flex shrink-0 mt-2 h-14 border border-solid border-neutral-200 max-md:max-w-full px-4" required aria-required="true" />
                </div>
                <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                  <label  className="self-start">Phone number</label>
                  <input type="tel" id="phone" name="phone" className="flex shrink-0 mt-2 h-14 border border-solid border-neutral-200 max-md:max-w-full px-4" required aria-required="true" />
                </div>
              </div>
              <div className="flex flex-wrap gap-6 mt-4 max-md:max-w-full">
                <div className="flex flex-col flex-1 grow shrink-0 whitespace-nowrap basis-0 text-zinc-800 w-fit max-md:max-w-full">
                  <label  className="self-start">Company</label>
                  <input type="text" id="company" name="company" className="flex shrink-0 mt-2 h-14 border border-solid border-neutral-200 max-md:max-w-full px-4" />
                </div>
                <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                  <label  className="self-start text-zinc-800">Country</label>
                  <select id="country" name="country" className="flex gap-5 justify-between px-4 py-4 mt-2 border border-solid border-neutral-200 text-zinc-500 max-md:max-w-full" required aria-required="true">
                    <option value="">Choose country</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-wrap gap-6 mt-4 max-md:max-w-full">
                <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                  <label className="self-start text-zinc-800">City</label>
                  <select id="city" name="city" className="flex gap-5 justify-between px-4 py-4 mt-2 border border-solid border-neutral-200 text-zinc-500 max-md:max-w-full" required aria-required="true">
                    <option value="">Choose city</option>
                  </select>
                </div>
                <div className="flex flex-col flex-1 grow shrink-0 basis-0 text-zinc-800 w-fit max-md:max-w-full">
                  <label  className="self-start">Zip code</label>
                  <input type="text" id="zipCode" name="zipCode" className="flex shrink-0 mt-2 h-14 border border-solid border-neutral-200 max-md:max-w-full px-4" required aria-required="true" />
                </div>
              </div>
              <div className="flex flex-wrap gap-6 mt-4 text-zinc-800 max-md:max-w-full">
                <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                  <label  className="self-start">Address 1</label>
                  <input type="text" id="address1" name="address1" className="flex shrink-0 mt-2 h-14 border border-solid border-neutral-200 max-md:max-w-full px-4" required aria-required="true" />
                </div>
                <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
                  <label  className="self-start">Address 2</label>
                  <input type="text" id="address2" name="address2" className="flex shrink-0 mt-2 h-14 border border-solid border-neutral-200 max-md:max-w-full px-4" />
                </div>
              </div>
              <h2 className="self-start mt-8 text-xl font-bold leading-snug text-zinc-800">
                Billing Address
              </h2>
              <div className="flex gap-2 self-start mt-1.5 text-sm leading-loose text-neutral-600">
                <input type="checkbox" id="sameAsShipping" name="sameAsShipping" className="w-5 h-5 border border-solid border-stone-300" />
                <label >Same as shipping address</label>
              </div>
              <div className="flex flex-wrap gap-6 mt-6">
                <Link2 href="/cart">
                <button type="button" className="flex flex-col flex-1 grow shrink-0 basis-0 text-neutral-600 w-fit max-md:max-w-full">
                  <div className="flex flex-col justify-center items-center px-16 py-4 w-full border border-solid border-neutral-200 max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-2 max-w-full w-[117px]">
                      <ChevronLeft className="object-contain shrink-0 w-6 aspect-square" />
                      <span>Back to cart</span>
                    </div>
                  </div>
                </button>
                </Link2>
                <button type="submit" className="flex flex-col flex-1 grow shrink-0 text-white bg-amber-500 basis-0 w-fit max-md:max-w-full">
                  <div className="flex flex-col justify-center items-center px-16 py-4 w-full bg-amber-500 max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-2 max-w-full w-[174px]">
                      <span className="grow">Proceed to shipping</span>
                      <ChevronRight className="object-contain shrink-0 w-6 aspect-square" />
                    </div>
                  </div>
                </button>
              </div>
            </form>
          </div>

          <div className="flex flex-col ml-5 w-[424px] h-[700px] max-md:ml-0  max-md:w-full">
            <div className="flex flex-col  items-start p-6 mx-auto w-full text-sm border border-solid border-neutral-200 max-md:px-5 max-md:mt-6 max-md:max-w-full">
              
              {checkout.map((item , i) => (
              <div key={i}>
              <div className="flex gap-4  text-neutral-600">
                <Image
                width = {83}
                height = {100}
                  src={item.image}
                  alt="Chicken Tikka Kabab" className="object-contain shrink-0 aspect-[0.94] " />
                <div className="flex flex-col items-start self-start">
                  <div className="self-stretch text-base font-bold text-zinc-800">{item.name}</div>
                  <div className="mt-2 leading-loose">150 gm net</div>
                  <div className="flex gap-4">
                    <h1 className='mt-1 leading-loose'>qty = {item.qty}</h1>
                  <div className="mt-1 leading-loose">{item.price}$</div>
                  </div>
                </div>
              </div>
              <hr className="w-full mt-4 border-t border-neutral-200" />
              </div>
              ))}


              <div className="flex gap-10 self-stretch mt-6 text-base whitespace-nowrap">
                <dl className="flex flex-col flex-1 text-neutral-600">
                  <dt>Sub-total</dt>
                  <dd className="mt-4 max-md:mr-0.5">{total}</dd>
                  <dt className="mt-4">Shipping</dt>
                  <dd className="mt-4">3.99$</dd>
                  <dt className="mt-4">Discount</dt>
                  <dd className="mt-4">25%</dd>
                  <dt className="mt-4">Tax</dt>
                  <dd className="mt-4">0.87$</dd>
                </dl>
              </div>
              <hr className="w-full mt-4 border-t border-neutral-200" />
              <div className="flex gap-5 justify-between self-stretch mt-4 text-lg leading-none whitespace-nowrap text-zinc-800">
                <div>Total</div>
                <div className="font-bold">{grandTotal}$</div>
              </div>
              <button type="button" className="flex gap-2.5 justify-center items-center self-stretch px-12 py-4 mt-6 text-lg leading-none text-white bg-amber-500 rounded-md max-md:px-5">
                <span className="self-stretch my-auto">Place an order</span>
                <FaArrowRight className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
              </button>
            </div>
          </div>


        </div>
      </div>


    </main>
  )
}

export default Page