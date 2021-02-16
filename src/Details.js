import React from 'react';
import axios from 'axios';
import image from './assets/image.jpg'
import phone from './assets/phone.svg'
import category from './assets/category.png'
import shop from './assets/icon-24-shop.svg'
import './Details.css';

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
            <div class="details">
                <img class="deskimage" src={image} alt="Picture of a desk with books"></img>
                <h3>{ details.name }</h3>
                <table>
                    <tr>
                        <td><img class="icon" src={phone} alt="Icon of a phone"></img></td>
                        <td>{ details.phone }</td>
                    </tr>
                    <tr>
                        <td><img class="icon" src={category} alt="Icon of a tag"></img></td>
                        <td>{ details.business }</td>
                    </tr>
                    <tr>
                        <td><img class="icon" src={shop} alt="Icon of a shop"></img></td>
                        <td>{ details.address }</td>
                    </tr>
                </table>
            </div>
        )
    }
}
