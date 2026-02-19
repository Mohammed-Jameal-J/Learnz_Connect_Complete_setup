import React from 'react'
import { Post } from '@/types/post'

const PostStaticPage = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const post:Post = await res.json()

    const buildTime= new Date().toLocaleTimeString();

    return(
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <p>Build Time : {buildTime}</p>
        </div>
    )
}

export default PostStaticPage