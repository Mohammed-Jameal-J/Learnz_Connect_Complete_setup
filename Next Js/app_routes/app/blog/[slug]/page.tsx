interface BlogPageProps {
  params: {
    slug: string
  }
}

const BlogPage = async ({params}: BlogPageProps) => {
    const {slug} =await params;
  return (
    <div>page {slug}</div>
  )
}

export default BlogPage