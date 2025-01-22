'use client'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { IoIosStar } from "react-icons/io";
import bgPic from '/public/images/menutop.png'
import { ChevronRight, Search, UserRound } from "lucide-react"
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addCart, delItem, subtractCart } from '../store/features/cart';

const CartPage = () => {
    const cartArray = useAppSelector((state: { cart: { price: number, dPrice: number, qty: number, image: string, id: number ,  name: string, uuid: string | number }[] }) => state.cart)
    const total = cartArray.reduce((total , arr) => {return (total+((arr.price-(arr.price*arr.dPrice)/100))*arr.qty)},0)
    const dispatch = useAppDispatch()
    const grandTotal = total + 3.99
    return(
        <div>
            
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
            <Link href="/shop" className="hover:underline">Shop</Link>
            <Link href="/faq" className=" hover:underline">FAQ</Link>
            <Link href="/c&p" className=" hover:underline">C&P</Link>
          </nav>
          <div className="flex  gap-4 self-stretch my-auto" aria-label="Social media links">
            <Search className=" absolute left-[1216px] top-2 shrink-0 w-6 h-6 aspect-square text-[#ffffff]" />
            <UserRound className=" absolute left-[1256px] top-2 shrink-0 w-6 h-6 aspect-square text-[#ffffff]" />
          </div>
        </div>
      </div>

      <div className="w-[1510px] h-[310px]">
        <Image
          src={bgPic}
          className="object-contain w-full aspect-[4.67] -z-10"
          alt="Decorative banner image"
        />
        <div className='w-[225px] h-[104px] z-100'>
        
          <h1 className='text-white p text-5xl font-bold absolute top-[198px] left-[45%] leading-14'>Your Cart</h1>

          <div className='w-[133px] h-7 flex items-center absolute top-[274px] left-[47%]'>
            <Link href='/shop' className='text-white text-[20px] leading-7'>shop</Link>
            <ChevronRight className='w-4 h-4 text-white' />
            <Link href='menu' className='text-[#ff9f0d] text-[20px] font-normal leading-7'>Cart</Link>
          </div>
        </div>
      </div>
{/* Header + hero image ends here */}


      {/* Cart Table Header */}
      <div className="mt-12 px-4 md:px-[150px] lg:block hidden">
  <ul className="flex flex-col md:flex-row justify-between font-bold text-lg text-gray-800 border-b pb-4  ">
    <li className="w-full md:w-2/5 mb-4 md:mb-0">Product</li>
    <li className="w-1/5 text-center">Price</li>
    <li className="w-1/5 text-center">Quantity</li>
    <li className="w-1/5 text-center">Total</li>
    <li className="w-1/5 text-center">Remove</li>
  </ul>
</div>

{/* products of cart  */}
<div className="mt-8  px-4 md:px-[150px]">
  {cartArray.length >= 1 && cartArray.map((item , i) => (
    <div
    key={i}
    className="flex flex-col md:flex-row items-start md:items-center justify-between text-gray-700 py-4 border-b"
  >
    {/* Product Details */}
    <div className="flex items-center gap-4 w-full md:w-2/5">
      <Image
        src={item.image}
        alt={item.name}
        width={80}
        height={80}
        className="rounded-md"
      />
      <div>
        <Link href={"/dynamic/"+ item.id}><h1 className="font-semibold">{item.name}</h1></Link>
        <div className="flex text-yellow-500 text-sm">
          {[...Array(5)].map((_, i) => (
            <IoIosStar key={i} />
          ))}
        </div>
      </div>
    </div>

    {/* Price */}
    <h1 className="w-full md:w-1/5 text-center mt-2 pr-24 md:mt-0">${item.price}.00</h1>

    {/* Quantity */}
    <div className="flex justify-center items-center gap-2 border border-gray-200 w-[100px] h-[30px] text-[16px] font-medium text-center rounded-2xl mt-2 md:mt-0">
      <button onClick={() => (dispatch(subtractCart(item)))} className="px-2 py-1 rounded">-</button>
      <span className="text-lg font-medium">{item.qty}</span>
      <button onClick={() => (dispatch(addCart(item)))} className="px-2 py-1 rounded">+</button>
    </div>

    {/* Total */}
    <h1 className="w-full md:w-1/5 text-center pl-24 mt-2 md:mt-0">${item.price * item.qty}.00</h1>

    {/* Remove Button */}
    <button onClick={() => dispatch(delItem(item.uuid))} className="w-full md:w-1/5 text-center text-red-500 hover:text-red-700 font-bold mt-2 md:mt-0">
      X
    </button>
  </div>

  ))}
</div>



<div className="flex flex-col md:flex-row px-4 md:px-[150px] justify-between items-start md:items-center mt-12">
  <div className="flex flex-col w-full md:w-1/2 mb-6 md:mb-0">
    <h2 className="text-lg font-bold mb-2">Coupon Code</h2>
    <div className="border px-4 py-6 text-gray-500 rounded-md w-full md:w-[450px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non
      <div className="flex gap-1 mt-4">
        <input
          type="text"
          placeholder="Enter here code"
          className="border px-4 py-2 rounded-md w-full"
        />
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
          Apply
        </button>
      </div>
    </div>
  </div>

  <div className="w-full md:w-1/2">
    <h2 className="text-lg font-bold mb-4">Total Bill</h2>
    <div className="border rounded-md p-4">
      <div className="flex justify-between mb-2 text-[15.5px]">
        <span>Cart Subtotal</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2 text-[15.5px]">
        <span>Shipping Charge</span>
        <span>$3.99</span>
      </div>
      <div className="flex justify-between font-bold text-[15.5px]">
        <span>Total Amount</span>
        <span>${grandTotal}</span>
      </div>
    </div>

<Link href="/check-out">
    <button className="mt-4 w-full flex justify-center bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600">
        Proceed to Checkout
    </button>
      </Link>

  </div>
</div>

        </div>
    )
}

export default CartPage