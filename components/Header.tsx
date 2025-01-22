"use client"
import Link from "next/link"
import {  UserRound } from "lucide-react"
import { PiHandbag } from "react-icons/pi"
import React from "react"
import { useAppSelector } from "@/app/store/hooks"

export default function Header() {

    const cart = useAppSelector((state) => state.cart)

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
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/menu" className="hover:underline">Menu</Link>
          <Link href="/error" className="hover:underline">Blog</Link>
          <Link href="/shop" className="hover:underline">Shop</Link>
          <Link href="/faq" className="hover:underline">FAQ</Link>
          <Link href="/c&p" className="hover:underline">C&P</Link>
        </nav>

<div className="flex gap-3 self-stretch my-auto">
            <UserRound className="absolute left-[1256px] top-2 shrink-0 w-6 h-6 aspect-square text-[#ffffff]" />
          </div>

<Link href="/cart">
            <div className=" absolute left-[1296px] top-2 ml-96 flex ">
              <PiHandbag className=" w-6 h-6 text-[#ffffff]" />
            {cart.length > 0 && (
              <div className=" w-fit h-fit rounded-full bg-amber-500 text-white">{cart.length}</div>
            )}
            </div>
            </Link>

      </div>
    </div>
    </div>
    )
}