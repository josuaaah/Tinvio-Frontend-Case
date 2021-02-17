import React from 'react';
import axios from 'axios';
import './Posts.css';


export default class Posts extends React.Component {
    state = {
        name: "",
        posts: []
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts?userId=1")
            .then(res => {
                const posts = res.data;
                this.setState({ posts })
            })
        axios.get("https://jsonplaceholder.typicode.com/users/1")
            .then(res => {
                const name = res.data.name;
                this.setState({ name })
            })
    }

    render() {
        const {posts} = this.state;
        const MAX_BODY_LENGTH = 50
        const MAX_TITLE_LENGTH = 50
        return (
            <div class="postsmain">
                <h3 class="postsheader">{this.state.name.split(" ")[0]}'s Posts</h3>
                <div class="postsholder">
                    <div class="count">{posts.length} POSTS</div>
                    <div class="posts">
                        {posts.map(post => {
                            const title = post.title.length > MAX_TITLE_LENGTH
                                ? post.title.charAt(0).toUpperCase() + post.title.slice(1, MAX_TITLE_LENGTH) + "..."
                                : post.title.charAt(0).toUpperCase() + post.title.slice(1);
                            const body = post.body.length > MAX_BODY_LENGTH
                                ? post.body.slice(0, MAX_TITLE_LENGTH) + "..."
                                : post.body;
                            return (
                                <div class="post" key={post.id}>
                                    <p key={post.id} class="posttitle">{title}</p>
                                    <p key={post.id} class="postbody">{body}</p>
                                </div>
                            )})}
                    </div>
                </div>
            </div>
        )
    }
}
