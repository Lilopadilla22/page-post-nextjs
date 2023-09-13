import Image from "next/image";
import { GridPosts } from "./components/GridPosts";

export default function HomePage() {
  
  return (
    <div className="m-4">
      <h1 className="text-[24px] font-bold text-center mt-12">
        Welcome to Posti! The Post Solution
      </h1 >
      <div className="flex justify-center items-center">
        <p className="text-center w-1/2 mt-5 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum neque in dolor accumsan, vel malesuada justo efficitur. Duis faucibus turpis vel sapien lacinia tempus. Vivamus ultrices blandit   justo congue in.
        </p>
      </div>
      <GridPosts/>
    </div>
  )
}
