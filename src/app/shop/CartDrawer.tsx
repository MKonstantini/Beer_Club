import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer"
import Image from "next/image";
import { cn } from "@/lib/utils"
import { Archivo_Black } from "next/font/google";
import { ShoppingCart } from "lucide-react";
import { CartItem } from "./page";

const TitleFont = Archivo_Black({
    subsets: ['latin'],
    weight: ['400'],
});

const CartDrawer: React.FC<{ cart: CartItem[] }> = ({ cart }) => {
    return (
        <Drawer>
            <DrawerTrigger className="p-5 w-1/2 md:w-1/3 bg-slate-100 shadow-lg rounded-t-full">
                <p className={cn("text-5xl text-neutral-400", TitleFont.className)}>Cart</p>
            </DrawerTrigger>
            <DrawerContent className="h-2/3">
                <header className="flex gap-2 justify-center flex-col items-center mt-6">
                    <h1 className="font-bold text-lg">YOUR CART</h1>
                    <ShoppingCart />
                </header>
                {
                    cart &&
                    <section className="h-full my-6">
                        {
                            cart.length > 0 ?
                                <div className="mt-12 flex justify-center">
                                    <div className="w-3/4 p-5 flex flex-col justify-center items-center border border-black border-r-white min-h-60">
                                        <h1 className="font-bold text-lg">ITEMS</h1>
                                        {
                                            cart.map((item, index) =>
                                                <div key={index}>
                                                    <p>{item.product.name}</p>
                                                    <p>{item.quantity}</p>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <button className="w-1/4 py-12 flex justify-center items-center flex-col border border-black bg-black hover:bg-neutral-800 rounded-l-full">
                                        <h1 className="font-bold text-lg text-white">CONTINUE TO</h1>
                                        <h1 className="font-bold text-lg text-white">CHECKOUT</h1>
                                        <div className="mt-3 flex gap-5">
                                            <Image src={"/icons/paypal.png"} width={60} height={60} alt="mc" />
                                            <Image src={"/icons/visa.svg"} width={60} height={60} alt="visa" />
                                        </div>
                                    </button>
                                </div>
                                : <div>Cart Is Empty.</div>
                        }
                    </section>
                }

                <DrawerClose className="flex justify-center my-6">
                    <Button variant={'outline'} className="text-md">Close</Button>
                </DrawerClose>
            </DrawerContent>
        </Drawer>
    )
}

export default CartDrawer
