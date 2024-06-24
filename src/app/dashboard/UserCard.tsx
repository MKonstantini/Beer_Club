import { User, Mail } from "lucide-react"
import { useSession } from "next-auth/react"

const UserCard = () => {
    const { data: session } = useSession()

    return (
        <div className="border border-black p-7 rounded-md bg-gradient-to-br from-slate-200 to-slate-300 shadow-md">
            <div className="font-bold mb-4 flex justify-center gap-3">
                <h2>BEER CLUB USER</h2>
            </div>
            <div className="flex gap-3">
                <Mail />
                <p>Email:</p>
                <p> {session!.user?.email}</p>
            </div>
            <div className="flex gap-3 mt-4">
                <User />
                <p>Type:</p>
                <p>{session!.user?.type}</p>
            </div>
        </div>
    )
}

export default UserCard