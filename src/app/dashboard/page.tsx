"use client"
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { TitleFont } from "@/lib/fonts";
import UserCard from "./UserCard";
import { cn } from "@/lib/utils";

const DashboardPage = () => {
    const { data: session } = useSession()

    if (!session) {
        redirect('/')
    }

    return (
        session && <div className="flex flex-col justify-center items-center mt-10 text-center">
            <header className="mb-6">
                <div className="mb-6 flex justify-center border shadow-sm p-2 bg-amber-400 rounded-full uppercase">
                    <p>Your Settings, Your Way</p>
                </div>
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
                // session.user!.type == "ADMIN" &&
                // <>
                //     <h1>Admin Tools</h1>
                //     <Button className="mt-12" variant={"black"}>Go To Admin Tools Page</Button>
                // </>
            }
        </div>
    )
}

export default DashboardPage