import { useEffect, useState } from "react";
import { ResponseAPI } from "../../api/client";
import { getPosts } from "../../utils/getData";

export const GetPost = () => {
    const [posts, setPosts] = useState<ResponseAPI[]>([])

    useEffect(() =>{
        getPosts().then(data =>setPosts(data))
    })

    return(
        <>
            <h1>Get Post 👇</h1>
            <div className="grid">
                {
                    posts.map(posts => (
                        <div key={posts.id}>
                            <p>Title: <span>{posts.title}</span></p>
                            <p>Body: <span>{posts.body}</span></p>
                            <p>User: <span>{posts.userId}</span></p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

