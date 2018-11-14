import React, { Component } from 'react';
import './style.css';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            starts : props.data.stars || 0,
            comment: props.data.comment || ""
        };
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
                                        <button className="orderItem__btn--grey">Show Comments</button>
                                    ) : (
                                        <button className="orderItem__btn-red" onClick={this.handleOpenEditArea}>Write Comments</button>
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
                <textarea onChange={this.handleCommentChange} className='orderItem__comment' value={this.state.comment}/>
                {this.renderStars()}
                <button className='orderItem__btn orderItem__btn--red'
                        onClick={this.handleSubmitComment
                }>Submit</button>
                <button className='orderItem__btn orderItem__btn--grey'
                        onClick={this.handleCancelComment}
                >Cancel</button>
            </div>
        )
    }

    renderStars() {
        const {stars } = this.state;
        return (
            <div>
                {
                    [1,2,3,4,5].map((item, index) => {
                        const lightClass = stars >= item ? "orderItem_star--light":"";
                        return (
                            <span key={index}
                                  className={"orderItem_stars " + lightClass} 
                                  onClick={this.handleClickStars.bind(this, stars)}>★</span>
                        )
                    })
                }
            </div>
        )
    }

    handleOpenEditArea = () => {
        this.setState({
            editing: true
        });
    }

    handleCommentChange = (e) => {
        this.setState({
            comment: e.target.value
        });
    }

    handleClickStars = (stars) => {
        this.setState({
            stars: stars
        });
    }

    handleCancelComment = () => {
        this.setState({
            editing: false,
            starts : this.props.data.stars || 0,
            comment: this.props.data.comment || ""
        });
    }

    handleSubmitComment = () => {
        const { id } = this.props.data;
        const { comment, stars } = this.state;
        this.setState({
            editing: false
        });
        this.props.onSubmit(id, comment, stars);
    }

}

export default index;