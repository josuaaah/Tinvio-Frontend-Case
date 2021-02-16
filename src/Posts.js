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
        return (
            <ul>
                { this.state.posts.map(post => <li>{post.title}</li>) }
            </ul>
        )
    }






}