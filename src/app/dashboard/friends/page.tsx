import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"
import { Button } from "@/components/ui/button"
import { TitleFont } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { ArrowBigLeft } from "lucide-react"
import { getServerSession, Session } from "next-auth"
import Link from "next/link"
import { redirect } from "next/navigation"

const FriendsPage = async () => {
    const session: Session | null = await getServerSession(authOptions)

    if (!session) {
        redirect('/')
    }
    return (
        session && <div className="flex flex-col justify-center items-center pt-10 text-center">
            <header className="mb-10">
                <div className="mb-6 flex justify-center border shadow-sm p-2 bg-amber-400 rounded-full uppercase">
                    <p>YOUR DRINKING BUDDIES</p>
                </div>
                <h1 className={cn("mb-6 text-5xl text-neutral-900", TitleFont.className)}>FRIENDS</h1>
                <Button className="mt-3" variant={"black"}>
                    <Link href='/dashboard' className="flex gap-3">
                        <ArrowBigLeft />
                        Back To Dashboard
                    </Link>
                </Button>
            </header>
        </div>
    )
}

export default FriendsPage