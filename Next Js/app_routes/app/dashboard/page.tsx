
type Post = {
    id: number,
    title: string
}


const getPosts = async (): Promise<Post[]> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()
}


const DashboardPage = async () => {
    const posts = await getPosts()
  return (
    <>

    <ul>
        {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
        ))}
    </ul>
    </>


  )
}

export default DashboardPage