"use clinet"

import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { createNewUser } from "@/services/fetch-users";

const RegisterForm = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState<string | null>(null);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        try {
            const user = await createNewUser(form);
            console.log('user created successfully', user)

            const result = await signIn('credentials', { redirect: false, ...form });
            if (!result!.error) {
                redirect('/')
            } else {
                setError(result!.error);
            }
        } catch (error: any) {
            setError(error.message || "An unexpected error occurred.");
        }
    };

    return (
        <div className="flex flex-col items-center">
            {/* Credentials Register */}
            <h1 className="font-bold text-center">Create An Account</h1>
            <form onSubmit={handleSubmit} className="flex justify-center flex-col">
                <div className="text-center mt-5 flex flex-col sm:flex-row">
                    <label htmlFor="email" className="mb-1 sm:me-12">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="text-center mt-5 flex flex-col sm:flex-row" >
                    <label htmlFor="password" className="mb-1 sm:me-5">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="text-center font-bold mt-2 text-red-700">
                    {error && <p>Error: {error} </p>}
                </div>

                <div className="flex justify-center mt-5">
                    <Button type="submit" variant={'black'}>Register</Button>
                </div>
                <div className="text-center mt-2 mb-5">___________________________</div>

                <div className="flex justify-center">
                    <Button type="button" variant={'black'} className="mt-2">
                        <Link href={"/signin"}>
                            Already A User? Login
                        </Link>
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm