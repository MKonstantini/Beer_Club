import Link from "next/link"
import { Button } from "../ui/button"

const MobileMenu = () => {
    return (
        <div id="mobile-menu" className="hidden">
            <div className="flex flex-col lg:hidden">
                <Button variant={'black'} asChild className="w-100 h-24 rounded-none">
                    <Link href={'/'}>HOME</Link>
                </Button>

                <Button variant={'black'} asChild className="w-100 h-24 rounded-none">
                    <Link href={'/dashboard'}>DASHBOARD</Link>
                </Button>

                <Button variant={'black'} asChild className="w-100 h-24 rounded-none">
                    <Link href={'/shop'}>SHOP</Link>
                </Button>
            </div>
        </div>
    )
}

export default MobileMenu