import Image from "next/image";
import { GridPosts } from "./components/GridPosts";

export default function HomePage() {
  
  return (
    <main className="h-screen">
      <h1 className="text-[24px] font-bold text-center mt-20">
        Welcome to Posti! The Post Solution
      </h1 >
      <div className="flex justify-center items-center mt-10">
        <p className="text-center sm:w-1/2 mt-4 mx-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum neque in dolor accumsan, vel malesuada justo efficitur. Duis faucibus turpis vel sapien lacinia tempus. Vivamus ultrices blandit   justo congue in.
        </p>
      </div>
      <GridPosts/>
    </main>
  )
}
