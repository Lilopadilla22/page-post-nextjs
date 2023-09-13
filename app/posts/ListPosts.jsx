import Image from "next/image"
import Link from "next/link"

const fetcThePosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
}
export async function ListPosts() {
    
    const posts = await fetcThePosts()

    return (
        <div className="flex flex-wrap justify-center">
            {
                posts.slice(0, 10).map(post => (
                    <div key={post.id} className="border border-white bg-white rounded-lg my-6 mx-10 w-60 h-full  sm:h-[600px] drop-shadow-xl" >
                    <Link href='/posts/[id]' as={`/posts/${post.id}`} >
                    <div className="sm:h-1/5 content-center m-4 flex justify-center items-center">
                        <Image
                            src={'/icon_document.png'} 
                            alt="NewPost"
                            width={60}
                            height={60}
                        />
                    </div>
                        <div className="">
                            <article className='mx-6 my-3' >
                                <h2 className="font-bold font-sans hover:text-sky-400 text-lg text-center mb-10"> {post.title} </h2>
                                <p className="text-center font-sans mx-6 font-inter"> {post.body} </p>
                            </article>
                        </div>
                    </Link>  
                    </div>       
                ))
            }
        </div>
    )
    
}