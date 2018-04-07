import React from 'react';
import ProductPopup from './ProductPopup';

class ProductItem extends React.Component {

    constructor() {
        super();
        this.state = {
            productPopupStatus: false
        }
    }

    showProductPopup = () => {
        this.setState({productPopupStatus: true});
    }

    hideProductPopup = () => {
        this.setState({productPopupStatus: false});
    }

    renderUpvoteButton() {
        return (
            <a className="upvote-button" href="#">
                <span>
                    <i className="fas fa-thumbs-up"></i>
                </span>
                {this.props.upvote}
            </a>
        );
    }

    renderNewWindowLinkIcon() {
        return (
            <a className="product-item-link" href={this.props.link}>
                <span>
                    <i className="fas fa-external-link-alt"></i>
                </span>
            </a>        
        );
    }

    renderInfoSection() {
        return (
            <section className="product-item-info">
                <a href="#" onClick={this.showProductPopup}>
                    <h2>{this.props.name}</h2>
                </a>
                <p>{this.props.description}</p>
                <a href="#">
                    <img className="small-avatar" src={this.props.maker.avatar} />
                </a>        
            </section>   
        );
    }

    render() {
        return (
            <li className="product-item">
                {this.renderUpvoteButton()}
                <img className="product-item-media" src={this.props.media} />
                {this.renderInfoSection()}
                {this.renderNewWindowLinkIcon()}
                <ProductPopup status={this.state.productPopupStatus} hidePopup={this.hideProductPopup} />
            </li>            
        );
    }
}

export default ProductItem;