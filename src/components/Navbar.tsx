"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { MenuIcon } from 'lucide-react'

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full bg-white">
            <div className="p-5 flex border border-black justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-5 w-52">
                    <Image src={'BeerClub_Logo.svg'} width={50} height={50} alt="logo" />
                    <p className="font-bold text-lg hidden sm:block">BEER CLUB</p>
                </div>

                {/* Middle Buttons */}
                <div className="hidden lg:block">
                    <Button variant={'black'} size={'lg'} className="mx-5">HOME</Button>
                    <Button variant={'black'} size={'lg'} className="mx-5">DASHBOARD</Button>
                    <Button variant={'black'} size={'lg'} className="mx-5">SHOP</Button>
                </div>

                {/* Left Buttons */}
                <div className="flex items-center justify-end w-52">
                    <Button variant={'black'} size={'lg'}>LOGIN</Button>
                    <Button variant={'none'} className="lg:hidden">
                        <MenuIcon className="ms-5" onClick={() => document.getElementById('mobile-menu')?.classList.toggle('hidden')} />
                    </Button>
                </div>
            </div>

            <div id="mobile-menu" className="hidden">
                {/* Mobile Menu */}
                <div className="flex flex-col lg:hidden">
                    <Button variant={'black'} className="w-100 h-24">HOME</Button>
                    <Button variant={'black'} className="w-100 h-24">DASHBOARD</Button>
                    <Button variant={'black'} className="w-100 h-24">SHOP</Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar