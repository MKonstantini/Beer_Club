"use client";
import SignInForm from "@/components/forms/SignInForm";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const SignInPage = () => {
    const { data: session } = useSession()

    if (session) {
        redirect("/")
    }
    return (
        <div className="flex flex-col justify-center items-center h-full pb-32">
            <h1 className="text-lg font-bold mb-6">WELCOME TO SIGN IN PAGE</h1>
            <div>
                <SignInForm />
            </div>
        </div>
    )
}

export default SignInPage