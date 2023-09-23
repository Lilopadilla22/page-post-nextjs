import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex justify-center items-center mx-10">
      <div className="border border-white bg-white rounded-lg my-6 sm:w-1/2 drop-shadow-xl hover:border-sky-300">
        <div className="flex justify-center items-center my-10">
          <Image
            src={'/programacion.png'} 
            alt="person"
            width={200}
            height={200}
            className="bg-sky-500/100 rounded-full"
          />
        </div>
        <h1 className="font-bold text-center "> Te contare un poco sobre mi</h1>
        <p className="mt-6 mx-4 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi temporibus voluptatibus eos esse ipsa soluta, tempora accusantium laborum, debitis tenetur exercitationem magnam, adipisci facilis repellat. Laborum sequi maxime earum architecto! 
        </p>
        <p className="my-6 mx-4 text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo minus cum fugit sed nostrum sequi, aliquid dicta labore quam. Odit aspernatur totam reiciendis vero modi nobis maiores, nihil iste ad.
        </p>
        <p className="mb-6 mx-4 text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor beatae numquam fugiat harum a repellat, libero possimus sunt qui cumque ipsum ea. Voluptatum natus sunt quibusdam, accusamus blanditiis quasi obcaecati.
        </p>
        <p className="mb-6 mx-4 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ab quo distinctio quis, sed rerum voluptatem id pariatur cupiditate necessitatibus recusandae dignissimos inventore eius possimus totam neque mollitia ea tempore.
        </p>
        <p className="mb-6 mx-4 text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, autem numquam? Veritatis corrupti iure odio repellat laborum architecto esse et eligendi. Fuga, nulla? Voluptates veritatis natus odit nostrum repudiandae quasi.
        </p>
        <div className="flex justify-center items-center my-5 font-bold">
          <h1>Front End Developer</h1>
        </div>
        <div className="flex justify-center items-center mb-10">
          <Link href='https://github.com/Lilopadilla22' rel="noopener noreferrer" target="_blank">
            <Image
              src={'/github.png'} 
              alt="github"
              width={40}
              height={40}
              className="m-2"
            />
          </Link>
          <Link href='https://www.linkedin.com/in/liliapadilla/' rel="noopener noreferrer" target="_blank">
            <Image
              src={'/linkedin.png'} 
              alt="linkedin"
              width={40}
              height={40}
              className="m-2"
            />
          </Link> 
        </div>
      </div>
    </div>
  )
}
