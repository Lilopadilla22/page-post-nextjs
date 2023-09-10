
const fetchPostId = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
}

export default async function Post({params}) {

    const { id } = params
    const post = await fetchPostId(id)

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}