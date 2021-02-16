import React from 'react';
import axios from 'axios';

import image from './assets/image.jpg'
import phone from './assets/phone.svg'
import category from './assets/category.png'
import shop from './assets/icon-24-shop.svg'

export default class Details extends React.Component {
    state = {
        details: {}
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users/1")
            .then(res => {
                const addr = res.data.address.street + ", " 
                    + res.data.address.suite + ", " 
                    + res.data.address.city + " " 
                    + res.data.address.zipcode.split("-")[0]
                const busi = res.data.company.bs.split(" ")
                    .map(b => b.charAt(0).toUpperCase() + b.slice(1)).join(" · ")
                const details = {
                    name: res.data.name,
                    phone: res.data.phone.split(" ")[0],
                    business: busi,
                    address: addr
                }
                this.setState({ details })
            })
    }

    render() {
        const {details} = this.state;
        return (
            <>
                <img src={image} alt="Picture of a desk with books"></img>
                <h3>{ details.name }</h3>
                <div>
                    <img src={phone} alt="Icon of a phone"></img>
                    { details.phone }
                </div>
                <div>
                    <img src={category} alt="Icon of a tag"></img>
                    { details.business }
                </div>
                <div>
                    <img src={shop} alt="Icon of a shop"></img>
                    { details.address }
                </div>
            </>
        )
    }
}
