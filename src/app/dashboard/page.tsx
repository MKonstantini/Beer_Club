import { redirect } from "next/navigation";
import { TitleFont } from "@/lib/fonts";
import DisplayUserCard from "./DisplayUserCard";
import { cn } from "@/lib/utils";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import DisplayUserInfo from "./DisplayUserInfo";
import DisplayAdminTools from "./DisplayAdminTools";
import Ruler from "@/components/ui/ruler";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import Link from "next/link";

const DashboardPage = async () => {
    const session: Session | null = await getServerSession(authOptions)
    // const { data: session } = useSession()

    if (!session) {
        redirect('/')
    }

    return (
        session && <div className="flex flex-col justify-center items-center pt-10 text-center">
            <header className="mb-10">
                <div className="mb-6 flex justify-center border shadow-sm p-2 bg-amber-400 rounded-full uppercase">
                    <p>Your Settings, Your Way</p>
                </div>
                <h1 className={cn("mb-6 text-5xl text-neutral-900", TitleFont.className)}>DASHBOARD</h1>
            </header>
            {
                session.user ?
                    <div className="flex flex-col gap-20">
                        <section>
                            <h1 className="mb-4">Your User Card</h1>
                            <DisplayUserCard />
                        </section>
                        <section>
                            <h1>User Info</h1>
                            <Ruler />
                            <DisplayUserInfo user={session.user} />
                            <div className="flex justify-center">
                                <div className="flex gap-4">
                                    <Button variant={"black"}>Update Info</Button>
                                    <Button variant={"black"}>
                                        <User className="me-2" />
                                        <Link href='/dashboard/friends'>
                                            Friends List
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </section>
                        {session.user.type == "ADMIN" && <DisplayAdminTools />}
                    </div> :
                    <h1>User Info Not Found</h1>
            }
        </div>
    )
}

export default DashboardPage