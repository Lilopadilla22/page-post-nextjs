import Image from "next/image";
import { GridPosts } from "./components/GridPosts";

export default function HomePage() {
  
  return (
    <div className="m-4">
      <h1 className="text-3xl font-bold text-center mt-12 ">
        Bienvenidos a nuestra pagina de Post!
      </h1 >
      <div className="flex flex-col my-auto items-center bgimg bg-cover mt-10 ">
        <Image src='/Welcome.png' width={500} height={500} alt='welcome' />
      </div>
      <GridPosts/>
    </div>
  )
}
