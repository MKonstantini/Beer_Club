"use client"

import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react"
import { Archivo_Black } from "next/font/google";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import UserCard from "./UserCard";

import Image from "next/image";
import { ShoppingCart, HeartIcon } from "lucide-react"

const TitleFont = Archivo_Black({
    subsets: ['latin'],
    weight: ['400'],
});

const DashboardPage = () => {
    const { data: session } = useSession()

    if (!session) {
        redirect("/")
    }
    return (
        <div className="flex flex-col justify-center items-center mt-10 text-center">
            <header className="mb-6">
                <h2 className="mb-4">Welcome To</h2>
                <h1 className={cn("mb-6 text-5xl text-neutral-900", TitleFont.className)}>DASHBOARD</h1>
            </header>
            {
                session.user ?
                    <>
                        <section>
                            <h1 className="mb-4">Your User Card</h1>
                            <UserCard />
                        </section>
                        <Button className="mt-12" variant={"black"} onClick={() => console.log(session)}>Update User Info</Button>
                    </> :
                    <>
                        <h1>User Info Not Found</h1>
                    </>
            }
            {
                session.user!.type == "ADMIN" &&
                <>
                    <h1>Admin Tools</h1>
                    <Button className="mt-12" variant={"black"}>Go To Admin Tools Page</Button>
                </>
            }
            <div className="mt-10 p-5 border bg-slate-100 rounded-lg shadow-md md:w-96 ">
                <h1 className="mb-5 font-bold bg-neutral-900 text-white p-2 rounded-full mx-4">DARK BEER</h1>
                <div className="flex mx-2">
                    <div className="w-3/4 text-start">
                        <p className="font-bold mb-1">Dare For Darkness.</p>
                        <p className="">Price: $17.99</p>
                        <div className="flex mt-12 pb-2">
                            <Button className="w-full mx-2 text-center" variant={"outline"}>
                                <ShoppingCart className="me-3" />
                                Add To Cart
                            </Button>
                        </div>
                    </div>
                    <div className="w-1/4">
                        <Image src={"/product_images/BC_Bottle_Dark.svg"} alt={' Img'} width={130} height={160} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage