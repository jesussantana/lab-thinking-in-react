import React, { Component } from 'react';
import ProductRow from '../ProductRow';
import './styles.css';

export default class ProductTable extends Component {
  render() {
    const { products, filter, stock } = this.props;

    const productos = products.data
      .filter((product) =>
        product.stocked === stock ? product.stocked : product
      )
      .filter((product) => product.name.toLowerCase().includes(filter))
      .map((product, index) => {
        return <ProductRow key={index} product={product} />;
      });

    /*.reduce((productList, product) => {
      const isProductInQuery = product.name.toLowerCase().includes(filter))
      if(isProductInQuery) {
        productList = [...productList, <ProductRow key={index} product={product} />;]
      }
      return productList
    }, [])*/

    return (
      <div className="productTable">
        <div className="line">
          <div className="item itemS"> Name </div>
          <div className="item itemS"> Price </div>
        </div>
        {productos}
      </div>
    );
  }
}
