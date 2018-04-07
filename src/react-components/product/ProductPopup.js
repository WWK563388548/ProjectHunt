import React from 'react';
import Popup from '../navbar/Popup';

class ProductPopup extends React.Component {

    constructor() {
        super();
        this.state = {
            product: {
                id: 1,
                name: 'NicePoint',
                link: 'https://github.com/WWK563388548/NicePoint',
                media: '/img/nicepoint.gif',
                upvote: 10,
                description: 'A chinese restaurant review web application',
                maker: {
                    name: 'wwk',
                    avatar: '/img/portrait.jpg'
                }
            }
        }
    }

    renderUpvoteButton() {
        return (
            <a className="upvote-button" href="#">
                <span>
                    <i className="fas fa-thumbs-up"></i>
                </span>
                {this.state.product.upvote}
            </a>
        );
    }

    renderHeader() {
        return (
            <header style={{backgroundImage: 'url(' + this.state.product.media + ')'}}>
                <section className="header-shadow">
                    <h1>{this.state.product.name}</h1>
                    <p>{this.state.product.description}</p>
                    <section>
                        {this.renderUpvoteButton()}
                        <a className="getit-btn" href={this.state.product.link} target="_blank">GET IT</a>
                    </section>
                </section>
            </header>
        );
    }

    renderBodyDiscussion() {
        return (
            <section className="discussion">
                <h2>Discussion</h2>
                <section className="post-comment">
                    <img className="medium-avatar" src="/img/the-doge.png" />
                    <input placeholder="What do you think of this project?" />
                </section>
            </section>
        );
    }

    renderBody() {
        return (
            <section className="product-popup-body">
                <main>
                    {this.renderBodyDiscussion()}
                </main>
            </section>
        );
    }

    render() {
        return (
            <Popup {...this.props} style="product-popup">
                {this.renderHeader()}
                {this.renderBody()}
            </Popup>
        );
    }
}

export default ProductPopup;