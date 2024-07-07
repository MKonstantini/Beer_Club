import { Button } from "@/components/ui/button"
import { Wrench } from "lucide-react"

const AdminTools = () => {
    return (
        <div>
            <h1 className="mb-2">Admin Tools:</h1>
            <h2 className="mb-2 font-bold">YOU ARE CERTIFIED TO USE ADMIN TOOLS</h2>
            <Button className="mt-3" variant={"black"}>
                <Wrench className="me-2" />
                Go To Admin Tools
            </Button>
        </div>
    )
}

export default AdminTools