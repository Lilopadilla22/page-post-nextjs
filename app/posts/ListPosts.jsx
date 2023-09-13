import Link from "next/link"

const fetcThePosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
}
export async function ListPosts() {
    
    const posts = await fetcThePosts()

    return posts.slice(0, 10).map(post => (
        <Link key={post.id} href='/posts/[id]' as={`/posts/${post.id}`} className=''  >
            <article className='mx-6 my-3' >
                <h2 className="font-bold font-sans hover:text-sky-400 text-lg max-sm:text-center"> {post.title} </h2>
                <p className="max-sm:text-center font-sans mx-6"> {post.body} </p>
            </article>
        </Link>         
    ))
    
}