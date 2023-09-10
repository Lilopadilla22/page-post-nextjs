import Link from "next/link"

const fetcThePosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
}
export async function ListPosts() {
    
    const posts = await fetcThePosts()

    return posts.slice(0, 10).map(post => (
        <Link key={post.id} href='/posts/[id]' as={`/posts/${post.id}`}  >
            <article>
                <h2 className="font-bold underline font-sans hover:font-serif"> {post.title} </h2>
                <p> {post.body} </p>
            </article>
        </Link>         
    ))
    
}