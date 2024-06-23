import { Button } from "../ui/button"
import { useSession, signIn, signOut } from "next-auth/react"

const AuthButton = () => {
    const { data: session } = useSession()

    if (!session) {
        return (
            <Button variant={'black'} size={'lg'} onClick={() => signIn()}>
                LOGIN
            </Button>
        )
    }
    return (
        <Button variant={'black'} size={'lg'} onClick={() => signOut()}>
            LOGOUT
        </Button>
    )

}

export default AuthButton