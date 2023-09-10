

const fetcThePosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
}
export async function ListPosts() {
    
    const posts = await fetcThePosts()

    return posts.slice(0, 5).map(post => (
        <div key={post.id}>
            <article>
                <h2 className="font-bold underline font-sans hover:font-serif"> {post.title} </h2>
                <p> {post.body} </p>
            </article>
        </div>         
    ))
    
}