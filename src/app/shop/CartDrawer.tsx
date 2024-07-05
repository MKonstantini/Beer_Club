import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react";
import { TitleFont } from "@/lib/fonts";
import { CartItem } from "./page";
import { cn } from "@/lib/utils"
import {
    TableHeader,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Table,
} from "@/components/ui/table"
import {
    DrawerTrigger,
    DrawerContent,
    Drawer,
} from "@/components/ui/drawer"
import { toast } from "sonner";

interface CartDrawerProps {
    cart: CartItem[];
    updateCartQuantity: (productId: string, newQuantity: number) => void
}

const CartDrawer: React.FC<CartDrawerProps> = ({ cart, updateCartQuantity }) => {
    return (
        <Drawer>
            <DrawerTrigger className="p-5 mb-12 w-1/2 md:w-1/3 bg-slate-100 shadow-lg rounded-t-full">
                <p className={cn("text-5xl text-neutral-400", TitleFont.className)}>Cart</p>
            </DrawerTrigger>
            <DrawerContent className="h-3/4 md:h-2/3">
                <header className="flex gap-2 justify-center flex-col items-center mt-6 mb-2">
                    <h1 className="font-bold text-lg">YOUR CART</h1>
                    <ShoppingCart />
                </header>
                {
                    cart &&
                    <section className="h-full my-6 flex justify-center items-center">
                        {
                            cart.length > 0 ?
                                <div className="w-2/3 h-full flex flex-col justify-between items-center">
                                    <CartTable cart={cart} updateCartQuantity={updateCartQuantity} />
                                    <Button variant={'black'} className="hover:bg-white my-6 md:w-1/2" onClick={() => toast.info("Checkout in development.")}>Continue To Purchase</Button>
                                </div>
                                : <div>Cart Is Empty.</div>
                        }
                    </section>
                }
            </DrawerContent>
        </Drawer>
    )
}

const CartTable: React.FC<CartDrawerProps> = ({ cart, updateCartQuantity }) => {
    return (
        <Table>
            <TableHeader>
                <TableRow >
                    <TableHead className="text-center">Product Name</TableHead>
                    <TableHead className="text-center">Price</TableHead>
                    <TableHead className="text-center">Quantity</TableHead>
                    <TableHead className="text-center">Edit</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    cart.map((item, index) =>
                        <TableRow key={index} className="text-center">
                            <TableCell className="font-medium">{item.product.name}</TableCell>
                            <TableCell>${item.product.price.toString()}</TableCell>
                            <TableCell>{item.quantity}</TableCell>
                            <TableCell>
                                <div className="flex justify-center gap-3">
                                    <Button variant={'outline'} onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}>-</Button>
                                    <Button variant={'outline'} onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}>+</Button>
                                    <Button variant={'outline'} onClick={() => updateCartQuantity(item.product.id, 0)} className="text-red-700 font-bold hover:text-red-700">x</Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
    )
}

export default CartDrawer
