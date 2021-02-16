import React from 'react';
import axios from 'axios';
import './Posts.css';


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
        const PREVIEW_LENGTH = 100
        return (
            <div class="main">
                <h3>Leanne's Posts</h3>
                <div class="post-count">{posts.length} POSTS</div>
                <div class="posts">
                    {posts.map(post => 
                        <div class="post" key={post.id}>
                            <p>{post.title}</p>
                            <p>{post.body.slice(0, PREVIEW_LENGTH) + "..."}</p>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
