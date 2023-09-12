import Link from "next/link"

const fetcThePosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
}
export async function GridPosts() {
    
    const posts = await fetcThePosts()

    return (
    <div className="flex sm:flex-nowrap -m-10 mt-20 mx-5 flex-wrap hover:text-opacity-25">
        { 
            posts.slice(0, 3).map(post => (
                <Link key={post.id} href='/posts/[id]' as={`/posts/${post.id}`} className='my-4 sm:mx-4 '>
                    <div>
                        <p className="text-center mb-4 font-bold hover:text-opacity-60">{post.title}</p>
                    </div>
                    <div>
                        <span className="text-justify">{post.body}</span>
                    </div>
                </Link>         
                )
            )
        }
    </div>
    )
    
}