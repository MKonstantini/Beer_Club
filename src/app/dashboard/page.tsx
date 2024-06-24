"use client"

import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react"
import { Archivo_Black } from "next/font/google";
import { redirect } from "next/navigation";
import { User } from "lucide-react"
import { Button } from "@/components/ui/button";
import UserCard from "./UserCard";

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
                <h2 className="mb-4">Welcom To</h2>
                <h1 className={cn("mb-6 text-5xl text-neutral-800", TitleFont.className)}>DASHBOARD</h1>
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
                session.user.type == "ADMIN" &&
                <>
                    <h1>Admin Tools</h1>
                    <Button className="mt-12" variant={"black"}>Go To Admin Tools Page</Button>
                </>
            }
        </div>
    )
}

export default DashboardPage