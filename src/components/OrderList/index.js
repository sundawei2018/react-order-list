import React, { Component } from 'react';
import OrderItem from '../OrderItem';

class OrderList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        fetch('/mock_data/orders.json').then(res => {
            if (res.ok) {
                res.json().then(data => {
                    console.log(data);
                    this.setState({
                        data
                    })
                })
            }
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.data.map(item => {
                        return <OrderItem key={item.id} data={item}/>
                    })
                }
            </div>
        );
    }
}

export default OrderList;