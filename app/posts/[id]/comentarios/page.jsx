
const fetcComments = async (id) => {
    await new Promise(resolve => setTimeout(resolve, 3000))
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(res => res.json())
}

export default async function Post({params}) {

    const { id } = params
    const comments = await fetcComments(id)

    return (
        <ul>
            {comments.map(comment => (
                <li key={comment.id}>
                    <p className="text-sm bg-gray-100">{comment.body}</p>
                </li>
            ))}
        </ul>
    )
}
