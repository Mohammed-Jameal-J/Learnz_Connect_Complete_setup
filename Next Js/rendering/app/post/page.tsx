import { Post } from "../type/post";
import LikeButton from "@/features/post/component/LikeButton";

const PostPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    cache: "no-store",
  });
  const post: Post = await res.json();

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <LikeButton />
        </div>
    );
}

export default PostPage;