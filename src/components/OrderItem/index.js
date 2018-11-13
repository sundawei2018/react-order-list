import React, { Component } from 'react';
import './style.css';

class index extends Component {
    render() {
        const { shop, product, price, picture, ifCommented } = this.props.data;
        return (
            <div className="orderItem">
                <div className="orderItem_left">
                    <div className="orderItem__picContainer">
                        <img className="orderItem__pic" src={picture} alt="" />
                    </div>
                    <div className="orderItem_content">
                        <div className="orderItem__product">{product}</div>
                        <div className="orderItem__stop">{shop}</div>
                        <div className="orderItem__detail">
                            <div className="orderItem__price">{price}</div>
                            <div>
                                {
                                    ifCommented ? (
                                        <button className="orderItem__btn">Show Comments</button>
                                    ) : (
                                        <button className="orderItem__btn">No Comments</button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default index;