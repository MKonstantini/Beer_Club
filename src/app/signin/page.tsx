"use client";
import { useSession } from "next-auth/react";

const SignInPage = () => {
    const { data: session } = useSession()

    if (session) {
        return (
            <div>
                can you... feel the heat?
            </div>
        )
    }
}

export default SignInPage