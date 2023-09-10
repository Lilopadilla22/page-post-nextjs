import Link from "next/link"

const fetchPostId = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
}

export default async function Post({params, children}) {

    const { id } = params
    const post = await fetchPostId(id)

    return (
        <div className='mx-6 my-3'>
            <h2 className="font-bold font-sans text-lg max-sm:text-center">{post.title}</h2>
            <p className="max-sm:text-center font-sans">{post.body}</p>
            <Link href={`/posts/${id}/comentarios`} className="max-sm:flex items-center justify-center m-6 cursor-pointer font-semibold h-full">Cometarios</Link>
            {children}
        </div>
    )
}