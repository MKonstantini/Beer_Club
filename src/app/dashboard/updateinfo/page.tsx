import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"
import UpdateUserForm from "@/components/forms/UpdateInfoForm"
import { Button } from "@/components/ui/button"
import { TitleFont } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { ArrowBigLeft } from "lucide-react"
import { getServerSession, Session } from "next-auth"
import Link from "next/link"
import { redirect } from "next/navigation"

const UpdateInfoPage = async () => {
    const session: Session | null = await getServerSession(authOptions)

    if (!session) {
        redirect('/dashboard')
    }
    return (
        session && <div className="flex flex-col justify-center items-center pt-10 text-center">
            <header className="mb-10">
                <div className="mb-6 flex justify-center border shadow-sm p-2 bg-amber-400 rounded-full uppercase">
                    <p>BE WARY OF PERMANENT CHANGES</p>
                </div>
                <h1 className={cn("mb-6 text-5xl text-neutral-900", TitleFont.className)}>UPDATE INFO</h1>
            </header>
            <div>
                <UpdateUserForm user={session.user} />
                <Button className="mt-20" variant={"black"}>
                    <Link href='/dashboard' className="flex gap-3">
                        <ArrowBigLeft />
                        Back To Dashboard
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default UpdateInfoPage