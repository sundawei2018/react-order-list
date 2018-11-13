import React, { Component } from 'react';
import './style.css';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            starts : 0
        }
    }

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
                {this.state.editing ? this.renderEditArea() : null }
            </div>
        );
    }

    renderEditArea() {
        return (
            <div className="orderItem__commentContainer">
                <textarea className='orderItem__comment'/>
                {this.renderStars()}
                <button className='orderItem__btn orderItem__btn--red'>Submit</button>
                <button className='orderItem__btn orderItem__btn--grey'>Cancel</button>
            </div>
        )
    }

    renderStars() {
        const {stars } = this.state;
        return (
            <div>
                {
                    [1,2,3,4,5].map((item, index) => {
                        const light = stars >= item ? "orderItem_star--light":"";
                        return (
                            <span key={index}>★</span>
                        )
                    })
                }
                
            </div>
        )
    }
}

export default index;