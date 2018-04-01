import React from 'react';
import ProductList from '../product/ProductList';

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
                    {
                        this.state.productList ? <ProductList productList={this.state.productList} /> : null
                    }
                    </section>
                </section>
            </section>
        );
    }
}

export default HomePage;