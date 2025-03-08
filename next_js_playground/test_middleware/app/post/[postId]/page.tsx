import axios from 'axios'

interface ParamsInterface {
    params: {
        postId: string
    }
}

const BlogPage = async ({ params }: ParamsInterface) => {
    const data = await params;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${data.postId}`)
    return (
        <div>
            <h1>{response.data.title}</h1>
            <h2>{response.data.body}</h2>
        </div>
    )
}

export default BlogPage