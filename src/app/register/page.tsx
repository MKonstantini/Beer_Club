"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";


const RegisterPage = () => {
    const { data: session } = useSession()
    const [form, setForm] = useState()

    if (session) {
        redirect("/")
    }
    return (
        <div className="flex flex-col justify-center items-center h-full pb-32 ">
            <div className="bg-slate-300 p-20 rounded-full py-24 flex flex-col items-center">
                <h1 className="text-2xl font-bold mb-6">REGISTER HERE</h1>
                <div>

                </div>
            </div>
        </div>
    )
}

export default RegisterPage