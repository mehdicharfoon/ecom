import React, { Component } from 'react';
import CartProduct from './cartProduct';

import { connect } from 'react-redux';
import * as actions from '../../actions';

function CartButton({className, icon}) {
    return (
        <div className={`${className} cart-button`}>
@@ -11,7 +14,7 @@ function CartButton({className, icon}) {

function CartContent({className, products}) {
    let count = products.length;
    let productsJSX = products.map(product => <CartProduct key={product}/>);
    let productsJSX = products.map(product => <CartProduct key={product._id}/>);
    return (
        <div className={`${className} cart-content`}>
            <div className='cart-content__title'>
@@ -43,15 +46,29 @@ function CartFooter({className, products}) {
}

class ShopCart extends Component {

    componentDidMount() {
        this.props.fetchCartProducts();
    }

    render() {
        const { className } = this.props;
        return (
            <div className={`${className} shop-cart`}>
                <CartButton className='shop-cart__toggle' icon='fas fa-times'/>
                <CartContent className='shop-cart__content' products={[243, 3434, 4554, 243, 3434, 4554, 3434, 4554, 243, 3434, 4554]}/>
                <CartContent className='shop-cart__content' products={this.props.cartProducts}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { cartProducts } = state.user;
    return {
        cartProducts
    }
}

ShopCart = connect(mapStateToProps, actions)(ShopCart);

export default ShopCart;