import { useEffect, useState } from "react";
import { ResponseAPI } from "../../api/client";
import { getPosts } from "../../utils/getData";
import { updatePost } from "../../utils/updatePost";


export const UpdatePost = () => {
    const [posts, setPosts] = useState<ResponseAPI[]>([])


    useEffect(() =>{
        getPosts().then(data => setPosts(data))
    }, [])

    const handleUpdate = async (id: number) => {
        const body = `Body updated`
        const title = `Title updated`
        const userId = Date.now()

        const postUpdated = await updatePost({ id, body, title, userId })

        setPosts(prev => ([
            postUpdated,
            ...prev.filter(post => post.id !== id),
        ]))
    }

    return(
        <div>
            <h1>Update Post 👇</h1><br />
            <h2>Click a card</h2>
            <div className="grid">
                {
                    posts.map(post => (
                        <div className="card" key={post.id} onClick={()=>handleUpdate(post.id)}>
                            <p>Title: <span>{post.title}</span></p>
                            <p>Body: <span>{post.body}</span></p>
                            <p>User: <span>{post.userId}</span></p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}