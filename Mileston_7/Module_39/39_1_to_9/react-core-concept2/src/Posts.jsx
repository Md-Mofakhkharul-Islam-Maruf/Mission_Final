import { use } from "react"
import Post from './Post'

export default function Posts({ postPromise }) {
    const posts = use(postPromise)
    console.log(posts)
    return (
        <>
            {
                posts.map(post=><Post key={post.id} post={post}></Post>)
            }
        </>
    )
}