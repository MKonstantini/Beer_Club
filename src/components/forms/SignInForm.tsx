import { signIn } from "next-auth/react";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../ui/button";

const LoginForm = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        // signIn("credentials", { redirect: false, ...form })
        console.log(form)

    };

    return (
        <div>
            {/* Google SignIn */}
            <button onClick={() => signIn("google")} className=" bg-white flex gap-5 p-5 rounded-lg hover:bg-slate-50">
                <Image width={25} height={25} src="/icons/google.svg" alt="google icon" />
                Sign In With Google
            </button>
            <div className="text-center mt-5 mb-5">___________________________</div>

            {/* Credentials SignIn */}
            <h1 className="font-bold text-center">Sign In With Email</h1>
            <form onSubmit={handleSubmit} className="flex justify-center flex-col">
                <div className="text-center mt-5">
                    <label htmlFor="email" className="me-5">Email</label>
                    <input onChange={handleChange} value={form.email} type="text" />
                </div>
                <div className="text-center mt-5" >
                    <label htmlFor="password" className="me-5">Password</label>
                    <input onChange={handleChange} value={form.password} type="text" />
                </div>
                <div className="flex justify-center">
                    <Button variant={'black'} type="submit" className="mt-5">Login</Button>
                </div>
                <div className="flex justify-center">
                    <Button variant={'black'} type="submit" className="mt-5">New User? Create An Account</Button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm