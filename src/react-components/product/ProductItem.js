import React from 'react';

class ProductItem extends React.Component {

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
                <a href="#">
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
            </li>            
        );
    }
}

export default ProductItem;