import React from 'react';
import axios from 'axios';


export default class Posts extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts?userId=1")
            .then(res => {
                const posts = res.data;
                this.setState({ posts })
            })
    }

    render() {
        const {posts} = this.state;
        return (
            <>
                <h3>Leanne's Posts</h3>
                <div>{posts.length} POSTS</div>
                <ul>
                    { posts.map(post => 
                        <li key={post.id}>
                            <p><b>{post.title}</b></p>
                            <p>{post.body}</p>
                        </li>) }
                </ul>
            </>
        )
    }
}