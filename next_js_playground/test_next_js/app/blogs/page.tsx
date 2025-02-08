import axios from 'axios'
import React from 'react'

const page = async () => {

    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    const data = response.data;


    return (
        <div>{
            data.map((post) => (
                <div key={post.id}>{post.title}</div>
            ))
        }</div>
    )
}

export default page