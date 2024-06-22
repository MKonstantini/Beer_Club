"use client";
import RegisterForm from "@/components/forms/RegisterForm";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const RegisterPage = () => {
    const { data: session } = useSession()

    if (session) {
        redirect("/")
    }
    return (
        <div className="flex flex-col justify-center items-center h-full pb-32 ">
            <div className="bg-slate-300 p-20 rounded-full py-24 flex flex-col items-center">
                <h1 className="text-2xl font-bold mb-6">REGISTER HERE</h1>
                <div>
                    <RegisterForm />
                </div>
            </div>
        </div>
    )
}

export default RegisterPage