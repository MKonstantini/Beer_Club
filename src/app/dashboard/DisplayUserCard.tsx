import { Mail, DollarSign } from "lucide-react"
import { getServerSession, Session } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/authOptions"

const UserCard = async () => {
    const session: Session | null = await getServerSession(authOptions)

    return (
        <div className="border border-black p-7 rounded-md bg-gradient-to-br from-slate-200 to-slate-300 shadow-md">
            <div className="font-bold mb-4 flex justify-center gap-3">
                <h2>BEER CLUB USER</h2>
            </div>
            <div className="flex gap-3">
                <Mail />
                <p>Email :</p>
                <p> {session!.user?.email}</p>
            </div>
            <div className="flex gap-3 mt-4">
                <DollarSign />
                <p>Store Credit :</p>
                <p>{session!.user?.storeCredit}</p>
            </div>
        </div>
    )
}

export default UserCard