import { Medal } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Archivo_Black } from "next/font/google"
import { Button } from "@/components/ui/button";

const myFont = Archivo_Black({
  subsets: ['latin'],
  weight: ['400'],
});

const HomePage = () => {
  return (
    <div className="h-full pb-20 flex flex-col justify-center items-center text-center mx-6">
      <div className="mb-12 flex items center border shadow-md p-4 bg-amber-400 rounded-full uppercase">
        <Medal className="h-6 w-6 mr-2" />
        <p>First Place Beer Society</p>
      </div>

      <div className="mb-12 flex flex-col items-center">
        <h1 className={cn("mb-6 text-5xl md:text-6xl text-neutral-800", myFont.className)}>BEER CLUB</h1>
        <h2 className="text-xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white rounded-lg w-fit p-2 pb-4 px-4 mt-4">Uncap Your Next Adventure</h2>
      </div>

      <Image src="/icons/BeerClub_Logo.svg" width={240} height={240} alt="Logo" />
      <Button variant="black" size={'lg'} className="mt-14">JOIN THE FAMILY</Button>
    </div>
  )
}

export default HomePage
