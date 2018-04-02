import React from 'react';
import ProductItem from './ProductItem';

class ProductList extends React.Component {
    render() {
        // 便利所有ProductItem并显示它们
        return (
            <ul className="product-list">
                {
                    this.props.productList.map(function(item, idx){
                        return <ProductItem key={idx} {...item} />
                    });
                }
            </ul>
        );
    }
}

export default ProductList;