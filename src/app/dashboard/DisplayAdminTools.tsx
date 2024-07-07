"use client"
import { Button } from "@/components/ui/button"
import { Wrench } from "lucide-react"
import Link from "next/link"

const AdminTools = () => {
    return (
        <div>
            <h1 className="mb-2">Admin Tools:</h1>
            <h2 className="mb-2 font-bold">YOU ARE CERTIFIED TO USE ADMIN TOOLS</h2>
            <Button className="mt-3" variant={"black"}>
                <Link href='/dashboard/admintools' className="flex gap-3">
                    <Wrench />
                    Admin Tools
                </Link>
            </Button>
        </div>
    )
}

export default AdminTools