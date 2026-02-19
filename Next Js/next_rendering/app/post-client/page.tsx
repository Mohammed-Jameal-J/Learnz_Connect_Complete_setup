'use client'
import { Post } from '@/types/post'
import { useState,useEffect } from 'react';

const PostClientPage = () => {
    const [post, setPost] = useState<Post | null>(null);
        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/posts/1')
                .then(res => res.json())
                .then((data: Post) => setPost(data))
                // .catch(err => console.error(err));
        },[])
            
    
    // const buildTime= new Date().toLocaleTimeString();

    return(
        <div>
            <h1>{post?.title}</h1>
            <p>{post?.body}</p>
            {/* <p>Build Time : {buildTime}</p> */}
        </div>
    )
}

export default PostClientPage