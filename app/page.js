import Image from "next/image";

export default function HomePage() {
  
  return (
    <div className="max-sm:m-4">
      <h1 className="text-3xl font-bold text-center mt-10 max-sm:m-4">
        Bienvenidos a nuestra pagina de Post!
      </h1 >
      <div className="flex flex-col h-screen my-auto items-center bgimg bg-cover mt-10 ">
        <Image src='/Welcome.png' width={500} height={500} alt='welcome' />
      </div>
    </div>
  )
}
