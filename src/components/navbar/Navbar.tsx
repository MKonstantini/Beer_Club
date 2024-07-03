"use client"
import { MenuIcon } from 'lucide-react'
import MobileMenu from "./MobileMenu"
import AuthButton from "./AuthButton"
import { Button } from "../ui/button"
import Image from "next/image"
import Link from "next/link"
import { redirect } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { toast } from 'sonner'

const Navbar = () => {
    const { data: session } = useSession()

    return (
        <nav className="fixed top-0 z-50 w-full border border-black bg-slate-200">
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
                    <Button variant={'black'} size={'lg'} className="mx-5">
                        {session ? (
                            <Link href={'/dashboard'}>DASHBOARD</Link>
                        ) : (
                            <span onClick={() => toast.error("Please login to access this feature!")}>
                                DASHBOARD
                            </span>
                        )}

                    </Button>
                    <Button variant={'black'} size={'lg'} asChild className="mx-5">
                        <Link href={'/shop'}>SHOP</Link>
                    </Button>
                </div>

                {/* Right Buttons */}
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