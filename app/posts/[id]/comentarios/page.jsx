
const fetcComments = async (id) => {
    await new Promise(resolve => setTimeout(resolve, 3000))
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(res => res.json())
}

export default async function Post({params}) {

    const { id } = params
    const comments = await fetcComments(id)

    return (
        <ul className="mt-6">
            {comments.map(comment => (
                <li className="text-sm bg-gray-100 mt-2" key={comment.id}>
                    <h2 className="text-sky-400">{comment.name}</h2>
                    <p>{comment.body}</p>
                </li>
            ))}
        </ul>
    )
}
