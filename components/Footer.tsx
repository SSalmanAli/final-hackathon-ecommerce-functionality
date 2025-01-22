import Link from "next/link";
import fastFood from '/public/images/fastFood.png'
import watch from '/public/images/Watch.png'
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="w-full flex flex-col">
  <div className="flex flex-col items-center pt-32 w-full bg-stone-950 max-md:pt-24">
    {/* Subscription Section */}
    <div className="flex flex-wrap gap-5 justify-between px-5 max-w-[1169px] w-full">
      <div className="flex flex-col text-white">
        <h2 className="text-3xl font-bold leading-none">
          <span className="text-amber-500">St</span>ill You Need Our Support?
        </h2>
        <p className="mt-7 text-base">
          Don&apos;t wait—make a smart & logical quote here. It&apos;s pretty easy.
        </p>
      </div>
      <div className="flex flex-col">
        <form className="flex gap-3 items-center pl-5 bg-amber-500 rounded">
          <label className="sr-only">Enter Your Email</label>
          <input
            type="email"
            id="emailSubscribe"
            className="bg-transparent text-white opacity-75 focus:outline-none placeholder-opacity-75"
            placeholder="Enter Your Email"
            required
          />
          <button
            type="submit"
            className="px-4 py-3 text-amber-500 bg-white rounded hover:bg-amber-50 focus:ring-2 focus:ring-amber-600 focus:outline-none"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </div>

    {/* Divider Line */}
    <div className="line mt-10 max-w-[1169px] w-full border-amber-500 border"></div>

    {/* Footer Content */}
    <div className="flex flex-wrap gap-8 justify-between items-start mt-14 w-full px-5 text-white max-w-[1320px]">
      {/* About Us Section */}
      <div className="w-full md:w-1/3 flex flex-col items-start">
        <h3 className="text-xl font-bold">About Us</h3>
        <p className="mt-4 text-justify text-lg leading-7">
          Corporate clients and leisure travelers rely on Groundlink for dependable,
          safe, and professional chauffeured car service in major cities worldwide.
        </p>
        <div className="flex gap-4 mt-6">
          <Image
            src={watch}
            alt="Opening hours icon"
            className="object-contain w-16"
          />
          <div className="flex flex-col">
            <h4 className="text-lg">Opening Hours</h4>
            <p className="mt-2">Mon - Sat (8.00 - 6.00)</p>
            <p>Sunday - Closed</p>
          </div>
        </div>
      </div>

      {/* Useful Links */}
      <nav className="w-full md:w-1/6 flex flex-col">
        <h3 className="text-xl font-bold">Useful Links</h3>
        <ul className="mt-6 space-y-4">
          <li><a href="#about" className="hover:text-amber-500 focus:text-amber-500">About</a></li>
          <li><a href="#news" className="hover:text-amber-500 focus:text-amber-500">News</a></li>
          <li><a href="#partners" className="hover:text-amber-500 focus:text-amber-500">Partners</a></li>
          <li><a href="#team" className="hover:text-amber-500 focus:text-amber-500">Team</a></li>
          <li><a href="#menu" className="hover:text-amber-500 focus:text-amber-500">Menu</a></li>
          <li><a href="#contact" className="hover:text-amber-500 focus:text-amber-500">Contact</a></li>
        </ul>
      </nav>

      {/* Help Section */}
      <nav className="w-full md:w-1/6 flex flex-col">
        <h3 className="text-xl font-bold">Help?</h3>
        <ul className="mt-6 space-y-4">
          <li><a href="/faq" className="hover:text-amber-500 focus:text-amber-500">FAQ</a></li>
          <li><a href="#terms" className="hover:text-amber-500 focus:text-amber-500">Terms & Conditions</a></li>
          <li><a href="#reporting" className="hover:text-amber-500 focus:text-amber-500">Reporting</a></li>
          <li><a href="#documentation" className="hover:text-amber-500 focus:text-amber-500">Documentation</a></li>
          <li><a href="#support" className="hover:text-amber-500 focus:text-amber-500">Support Policy</a></li>
          <li><a href="#privacy" className="hover:text-amber-500 focus:text-amber-500">Privacy</a></li>
        </ul>
      </nav>

      {/* Recent Posts */}
      <div className="w-full md:w-1/3">
        <h3 className="text-xl font-bold">Recent Posts</h3>
        <div className="mt-6 space-y-6">
          {["Fast food", "Organic food", "Lifestyle choices"].map((post, idx) => (
            <article key={idx} className="flex gap-4">
              <Image
                src={fastFood}
                alt="Article thumbnail"
                className="object-contain w-16 h-16"
              />
              <div>
                <h4 className="text-base leading-6">{post}</h4>
                <time className="text-sm opacity-75">February 28, 2022</time>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>

    {/* Copyright Section */}
    <div className="flex flex-wrap justify-between items-center px-5 py-4 mt-10 w-full bg-neutral-600">
      <p className="text-white text-sm">
        Copyright © 2022 by Syed Salman Ali. All Rights Reserved.
      </p>
      <div className="flex gap-3">
        {[FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin].map((Icon, idx) => (
          <Link
            key={idx}
            href="#"
            className="p-2 bg-white rounded hover:bg-amber-500 focus:ring-2 focus:ring-amber-600"
          >
            <Icon className="text-stone-900" />
          </Link>
        ))}
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Footer
