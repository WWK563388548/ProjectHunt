import React from 'react';
import ProductList from '../product/ProductList';
import Firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDxrsFrtle4ufkO-ufUohOQ1UI8yNIds0I",
    authDomain: "projecthunt-e4744.firebaseapp.com",
    databaseURL: "https://projecthunt-e4744.firebaseio.com",
    projectId: "projecthunt-e4744",
    storageBucket: "projecthunt-e4744.appspot.com",
    messagingSenderId: "932476477857"
  };
  Firebase.initializeApp(config);

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            productList: []
        }

        Firebase.database().ref('products').on('value', (snapshot) => {
            var products = snapshot.val();

            this.setState({
                productList: products
            })
        });
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