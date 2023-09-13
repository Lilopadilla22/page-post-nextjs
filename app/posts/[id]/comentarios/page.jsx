import { Suspense } from "react"
import Loading from "./loading"
import Image from "next/image"

const fetcComments = async (id) => {
    await new Promise(resolve => setTimeout(resolve, 3000))
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(res => res.json())
}

export default async function Post({params}) {

    const { id } = params
    const comments = await fetcComments(id)

    return (
        <Suspense fallback={<Loading/>}>
            <div className="flex justify-center flex-col items-center">
                <ul className="mt-6 flex justify-center flex-col items-center">
                    {comments.map(comment => (
                        <li className="sm:w-1/3 border border-white bg-white rounded-lg my-6 mx-10  h-full drop-shadow-xl flex flex-row hover:bg-slate-200 hover:border-slate-200" key={comment.id}>
                            <div className="flex flex-col w-[75%]">
                                <h2 className="text-sky-400 m-4">{comment.name}</h2>
                                <p className="m-4">{comment.body}</p>
                            </div>
                            <div className="flex justify-center items-center ">
                                <Image
                                    src={'/person.png'} 
                                    alt="NewPost"
                                    width={70}
                                    height={70}
                                    className="bg-sky-500/100 rounded-full sm:ml-5"
                                />
                            </div>
                        </li>                 
                    ))}
                </ul>
            </div>
        </Suspense>
    )
}
