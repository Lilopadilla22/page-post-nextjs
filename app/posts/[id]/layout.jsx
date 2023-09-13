import Image from "next/image"
import Link from "next/link"

const fetchPostId = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
}

export default async function Post({params, children}) {

    const { id } = params
    const post = await fetchPostId(id)

    return (
        <div className="flex justify-center flex-col items-center">
            <div className='mx-6 mb-3 mt-20 sm:w-1/2 border border-white bg-white rounded-lg h-full drop-shadow-xl'>
                <div className="sm:h-1/5 content-center m-4 flex justify-center items-center">
                    <Image
                        src={'/icon_document.png'} 
                        alt="NewPost"
                        width={60}
                        height={60}
                    />
                </div>
                <h2 className="font-bold text-lg text-center">{post.title}</h2>
                <p className="text-center m-6">{post.body}</p>
            </div>
            <div className='mx-6 my-3 w-3/4 sm:w-1/4 border border-slate-200 bg-slate-200 rounded-lg h-full drop-shadow-xl'>
                <Link href={`/posts/${id}/comentarios`} className="flex justify-center items-center m-2 cursor-pointer font-semibold" >
                    <div className="m-2">
                        <Image
                            src={'/messaging.png'} 
                            alt="messaging"
                            width={20}
                            height={20}
                        />
                    </div>
                    <p  className="flex justify-center my-2 mx-4 cursor-pointer font-semibold">
                        comments
                    </p>
                    <div className="m-2">
                        <Image
                            src={'/dow.png'} 
                            alt="dow"
                            width={20}
                            height={20}
                        />
                    </div>
                </Link>
            </div>
            {children}
        </div>
    )
}