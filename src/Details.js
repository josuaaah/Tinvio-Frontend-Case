import React from 'react';
import axios from 'axios';

export default class Details extends React.Component {
    state = {
        details: {}
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users/1")
            .then(res => {
                const details = res.data;
                this.setState({ details })
            })
    }

    render() {
        const {details} = this.state;
        return (
            null
        )
    }
}