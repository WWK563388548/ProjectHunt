import React from 'react';

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            productList: [
                {
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
                },
                {
                    id: 2,
                    name: 'ShareCode.io',
                    link: 'https://github.com/WWK563388548/ShareCode.io',
                    media: '/img/ShareCode.gif',
                    upvote: 30,
                    description: 'A collaborative editor with video call',
                    maker: {
                        name: 'wwk',
                        avatar: '/img/portrait.jpg'
                    }
                }
            ]
        }
    }

    render() {
        return(
            <section>
                <header>
                    <img src="/img/banner.jpeg" width="100%" />
                </header>

                <section>
                    <section className="container">
                        
                        <ul className="product-list">
                            <li className="product-item">
                                <a className="upvote-button" href="#">
                                    <span>
                                        <i className="fas fa-thumbs-up"></i>
                                    </span>
                                    <br/>
                                    {this.state.productList[0].upvote}
                                </a>
                                <img className="product-item-media" src={this.state.productList[0].media} />
                                <section className="product-item-info">
                                    <a href="#">
                                        <h2>{this.state.productList[0].name}</h2>
                                    </a>
                                    <p>{this.state.productList[0].description}</p>
                                    <a href="#">
                                        <img className="small-avatar" src={this.state.productList[0].maker.avatar} />
                                    </a>
                                    <a className="product-item-link" href={this.state.productList[0].link}>
                                        <span>
                                            <i className="fas fa-external-link-alt"></i>
                                        </span>
                                    </a>
                                </section>
                            </li>

                            <li className="product-item">
                                <a className="upvote-button" href="#">
                                    <span>
                                        <i className="fas fa-thumbs-up"></i>
                                    </span>
                                    <br/>
                                    {this.state.productList[1].upvote}
                                </a>
                                <img className="product-item-media" src={this.state.productList[1].media} />
                                <section className="product-item-info">
                                    <a href="#">
                                        <h2>{this.state.productList[1].name}</h2>
                                    </a>
                                    <p>{this.state.productList[1].description}</p>
                                    <a href="#">
                                        <img className="small-avatar" src={this.state.productList[1].maker.avatar} />
                                    </a>
                                    <a className="product-item-link" href={this.state.productList[1].link}>
                                        <span>
                                            <i className="fas fa-external-link-alt"></i>
                                        </span>
                                    </a>
                                </section>
                            </li>

                        </ul>
                    </section>
                </section>
            </section>
        );
    }
}

export default HomePage;