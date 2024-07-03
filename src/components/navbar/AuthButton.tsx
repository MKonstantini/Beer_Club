"use client"
import { toast } from "sonner"
import { Button } from "../ui/button"
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"
import { redirect } from "next/navigation"

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
        <Button variant={'black'} size={'lg'} onClick={() => {
            // toast("Logout Successful");
            signOut();
            redirect('/');
        }}>
            <Link href={'/'}>
                LOGOUT
            </Link>
        </Button>
    )

}

export default AuthButton