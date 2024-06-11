import Image from "next/image"

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-white to-slate-000">
      <h1 className="font-bold">BEER CLUB</h1>
      <h2 className="mb-5">Uncap the Adventure</h2>
      <Image className="mb-20" src="/BeerClub_Logo.svg" width={200} height={200} alt="Logo" />
    </div>
  )
}

export default Home
