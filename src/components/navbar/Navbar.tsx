"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "../ui/button"
import { MenuIcon } from 'lucide-react'
import MobileMenu from "./MobileMenu"
import AuthButton from "./AuthButton"

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full border border-black">
            <div className="md:max-w-screen-2xl w-full mx-auto h-24 px-5 flex justify-between items-center">
                {/* Logo */}
                <Button variant={'none'} asChild className="flex items-center gap-5 md:w-52">
                    <Link href={'/'}>
                        <Image src={'/icons/BeerClub_Logo.svg'} width={50} height={50} alt="logo" />
                        <p className=" text-black font-bold text-lg hidden sm:block">BEER CLUB</p>
                    </Link>
                </Button>

                {/* Middle Buttons */}
                <div className="hidden lg:block">
                    <Button variant={'black'} size={'lg'} asChild className="mx-5">
                        <Link href={'/'}>HOME</Link>
                    </Button>
                    <Button variant={'black'} size={'lg'} asChild className="mx-5">
                        <Link href={'/dashboard'}>DASHBOARD</Link>
                    </Button>
                    <Button variant={'black'} size={'lg'} asChild className="mx-5">
                        <Link href={'/shop'}>SHOP</Link>
                    </Button>
                </div>

                {/* Left Buttons */}
                <div className="flex items-center justify-end w-52">
                    <AuthButton />
                    <Button variant={'none'} className="lg:hidden">
                        <MenuIcon className="ms-5 text-black" onClick={() => document.getElementById('mobile-menu')?.classList.toggle('hidden')} />
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            <MobileMenu />
        </nav>
    )
}

export default Navbar