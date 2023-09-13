import Image from "next/image"
import Link from "next/link"

const fetcThePosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
}
export async function GridPosts() {
    
    const posts = await fetcThePosts()

    return (
    <div className="flex sm:flex-nowrap -m-10 mt-20 mx-5 flex-wrap hover:text-opacity-25 mb-4">
        { 
            posts.slice(16, 19).map(post => (
                <Link key={post.id} href='/posts/[id]' as={`/posts/${post.id}`} className='mt-4 sm:mb-50 sm:mx-4 '>
                    <div className="sm:h-1/3 content-center mb-4 flex justify-center items-center">
                        <Image 
                            src={'/icon_document.png'} 
                            alt="NewPost"
                            width={60}
                            height={60}
                        />
                    </div>
                    <div className="sm:h-1/3 content-center mb-4 flex justify-center items-center">
                        <p className="text-center font-bold hover:text-opacity-60">{post.title}</p>
                    </div>
                    <div className="sm:h-1/2 content-center flex justify-center items-center">
                        <span className="text-center">{post.body}</span>
                    </div>
                </Link>         
                )
            )
        }
    </div>
    )
    
}