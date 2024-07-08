"use client"
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { updateUser } from "@/services/fetch-users";
import { Button } from "../ui/button";
import { z } from "zod";
import { User } from "@prisma/client";
import { PenBox, Trash2 } from "lucide-react";

const updateUserSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    fname: z.string().min(2, { message: 'Firstname must be at least 2 characters long' }),
    lname: z.string().min(2, { message: 'Lastname must be at least 2 characters long' }),
});

interface UpdateUserFormProps {
    user: User
}

const UpdateUserForm: FC<UpdateUserFormProps> = ({ user }) => {
    const [form, setForm] = useState({
        email: "",
        fname: "",
        lname: ""
    });
    const [error, setError] = useState<string | null>(null);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        try {
            const validationData = updateUserSchema.safeParse(form)
            if (validationData.error) {
                setError(validationData.error.issues[0].message)
                return
            }

            const result = await updateUser(form);
        } catch (error: any) {
            setError(error.message || "An unexpected error occurred.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-around h-full">
            <form onSubmit={handleSubmit} className="flex justify-center flex-col">
                <div className="text-center mt-2 mb-5">___________________________</div>
                <h1 className="font-bold text-center">Update User Info</h1>
                <div className="text-center mt-5 flex flex-col sm:flex-row">
                    <label htmlFor="email" className="mb-1 sm:me-14">Email</label>
                    <input
                        placeholder={user.email}
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="text-center mt-5 flex flex-col sm:flex-row" >
                    <label htmlFor="fname" className="mb-1 sm:me-5">First Name</label>
                    <input
                        placeholder={user.fname || ""}
                        type="text"
                        id="fname"
                        name="fname"
                        value={form.fname}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="text-center mt-5 flex flex-col sm:flex-row" >
                    <label htmlFor="lname" className="mb-1 sm:me-5">Last Name</label>
                    <input
                        placeholder={user.lname || ""}
                        type="text"
                        id="lname"
                        name="lname"
                        value={form.lname}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="flex justify-center">
                    <div className="w-52 text-center font-bold mt-3 text-red-700">
                        {error && <p>Error: {error} </p>}
                    </div>
                </div>

                <div className="flex justify-center mt-4 gap-4">
                    <Button type="submit" variant={'black'}>
                        <PenBox className="me-3" />
                        Update
                    </Button>
                    <Button type="button" variant={'destructive'}>
                        <Trash2 className="me-3" />
                        Delete
                    </Button>
                </div>
                <div className="text-center mt-2 mb-4">___________________________</div>

            </form>
        </div>
    )
}

export default UpdateUserForm