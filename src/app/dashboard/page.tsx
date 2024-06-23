"use client"

import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react"
import { Archivo_Black } from "next/font/google";
import { redirect } from "next/navigation";
import { User } from "lucide-react"
import { Button } from "@/components/ui/button";

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
                <h2 className="mb-4">Welcom To Your</h2>
                <h1 className={cn("mb-6 text-5xl text-neutral-800", TitleFont.className)}>DASHBOARD</h1>
            </header>
            <section className="border border-black p-7 rounded-md bg-gradient-to-br from-slate-200 to-slate-300 shadow-md">
                <div className="font-bold mb-4 flex justify-center gap-3">
                    <User />
                    <h2>User Card</h2>
                </div>
                <div className="flex gap-3">
                    <p>Email:</p>
                    <p> {session.user?.email}</p>
                </div>
            </section>
            <Button className="mt-12" variant={"black"} onClick={() => console.log(session)}>Update User Info</Button>
        </div>
    )
}

export default DashboardPage