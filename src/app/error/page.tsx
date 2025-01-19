import Image from 'next/image'
import { ChevronRight, Link, Search, UserRound } from 'lucide-react'
import { PiHandbag } from 'react-icons/pi'
import bgPic from '/public/images/menutop.png'
import Footer from "../../../components/Footer"
import Link2 from 'next/link'


const page = () => {
    return (
        <main className='w-[1510px] h-[2126px]' >
            {/* Header */}
            <div className="w-[1510px] min-h-[90px] flex items-center bg-stone-950 " >
                <div className="w-[1320px] h-8 absolute top-[29px] left-[300px] flex flex-wrap gap-10 items-center">
                    <div className="w-[109px] h-8 self-stretch text-2xl font-bold leading-none text-amber-500 ">
                        <Link2 href="/">
                        <span className="text-white">Food</span>
                        <span className="text-amber-500">tuck</span>
                        </Link2>
                    </div>
                    <nav className="max-w-[508px] h-6 flex flex-wrap absolute top-2 left-[451px] gap-8 self-stretch text-base text-white max-md:max-w-full" aria-label="Main navigation">
                        <Link href="/" className="grow font-bold text-amber-500" aria-current="page">Home</Link>
                        <Link href="/menu">Menu</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/check-out">Chekcout</Link>
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
                    <h1 className='text-white text-5xl font-bold absolute top-[198px] left-[650px] leading-14'>404 Error</h1>

                    <div className='w-[133px] h-7 flex items-center absolute top-[274px] left-[710px]'>
                        <Link href='/' className='text-white text-[20px] leading-7'>Home</Link>
                        <ChevronRight className='w-4 h-4 text-white' />
                        <Link href='menu' className='text-[#ff9f0d] text-[20px] font-normal leading-7'>404</Link>
                    </div>

                </div>

            </div>


            {/* Mid Section */}

            <div
                className="flex flex-col items-center ml-[30%]  text-lg font-bold rounded-md max-w-[630px]"
                
                aria-labelledby="error-title"
            >
                <div
                    id="error-title"
                    className="text-8xl leading-none text-amber-500 max-md:text-4xl"
                    aria-label="404 error"
                >
                    404
                </div>
                <div
                    className="self-stretch mt-8 w-full text-3xl leading-none text-zinc-800 max-md:max-w-full"
                >
                    Oops! Look likes something going wrong
                </div>
                <div
                    className="mt-6 leading-7 text-center text-neutral-600 max-md:max-w-full"
                    aria-live="polite"
                >
                    Page Cannot be found! we ll have it figured out in no time.
                    <br />
                    Menwhile, cheek out these fresh ideas:
                </div>
                <a
                    href="/"
                    className="gap-2.5 self-stretch px-12 py-4 mt-8 leading-none text-white bg-amber-500 rounded-md max-md:px-5 text-center hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                    
                    aria-label="Return to homepage"
                >
                    Go to home
                </a>
            </div>


            {/* Footer */}
            <div className="footer absolute top-[1373px] w-full">
                <Footer />
            </div>

        </main>
    )
}

export default page