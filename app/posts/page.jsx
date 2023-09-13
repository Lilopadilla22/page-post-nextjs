import { ListPosts } from "./ListPosts";

export default async function PostsPage() {

    return (
        <>      
            <h1 className="text-center my-10 text-xl font-bold">Our Post collection</h1>
            <div className="flex flex-col place-content-evenly">
                <ListPosts/>
            </div>
        </>
    )
}