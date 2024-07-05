"use clinet"

import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { createNewUser } from "@/services/fetch-users";
import { z } from "zod";

const registerSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
});

const RegisterForm = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState<string | null>(null);

    // form functions
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        try {
            const validationData = registerSchema.safeParse(form)
            if (validationData.error) {
                setError(validationData.error.issues[0].message)
                return
            }

            const user = await createNewUser(form);
            const loginData = await signIn('credentials', { redirect: false, ...form });
            if (!loginData!.error) {
                redirect('/')
            } else {
                setError(loginData!.error);
            }
        } catch (error: any) {
            setError(error.message || "An unexpected error occurred.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-around h-full">
            <form onSubmit={handleSubmit} className="flex justify-center flex-col">
                <div className="text-center mt-2 mb-5">___________________________</div>
                <h1 className="font-bold text-center">Create An Account</h1>
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

                <div className="flex justify-center">
                    <div className="w-52 text-center font-bold mt-3 text-red-700">
                        {error && <p>Error: {error} </p>}
                    </div>
                </div>

                <div className="flex justify-center mt-4">
                    <Button type="submit" variant={'black'}>Register</Button>
                </div>
                <div className="text-center mt-2 mb-4">___________________________</div>

            </form>
            <div className="flex justify-center">
                <Button type="button" variant={'black'} className="mt-2">
                    <Link href={"/signin"}>
                        Already A User? Login
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default RegisterForm