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
        <div className="flex flex-col justify-center items-center h-full pb-32 bg-[url('/images/img_bar.jpg')] bg-cover">
            <div className="bg-slate-300 shadow-lg p-14 md:p-20 rounded-full md:py-24 flex flex-col items-center min-h-[670px]">
                <h1 className="text-2xl font-bold mb-6">LET&apos;S LOGIN</h1>
                <div>
                    <SignInForm />
                </div>
            </div>
        </div >
    )
}

export default SignInPage