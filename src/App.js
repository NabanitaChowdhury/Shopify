import React, { useEffect, useState } from "react";
import { Card } from "./component/Card"
import "./App.css"
export const App = () => {
    const [allProducts, setAllProducts] = useState([])
    const [allWishList, setAllWishList] = useState([])
    const [allCartProduct, setAllCartProduct] = useState([])
    const [isCartOpen, setCartOpen] = useState(false)
    const getAllProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setAllProducts(json))
    }
    console.log(allProducts)
    const addCart = (product) => {
        /*
        1. create array
        2. product(push)
        3. create a button
        4. on click hide existing all products ui & show add cart ui
        */
        const cart = [...allCartProduct]
        cart.push(product)
        setAllCartProduct(cart)

    }
    const showCartProduct = () => {
        setCartOpen(true)
    }
    const buy = () => {

    }
    const wishlist = (id) => {
        let temp = [...allWishList]
        if (temp.includes(id)) {
            // remove id 
            temp = temp.filter((item) => item !== id)

        }
        else {
            temp.push(id)
        }

        setAllWishList(temp)
    }
    const checkingWishList = (id) => {
        return allWishList.includes(id)
    }
    useEffect(() => {
        getAllProducts()
    }, [])
    console.log(allProducts)
    return (
        <>
            <div className="nav">
                <div className="app-title">ShopiFy</div>
                <div className="nav-items">
                    {allCartProduct.length > 0 ? (<div className="item-count">{allCartProduct.length} Item Added</div>) : null}
                    <button className="cart-button" onClick={showCartProduct}>&#128722;</button>
                </div>
            </div>
            <div className="container">
                {
                    isCartOpen ? (<>cart product
                        {allCartProduct.map((product) => {
                            return (
                                <Card
                                    product={product}
                                    wishlist={wishlist}
                                    checkingWishList={checkingWishList}
                                    addCart={addCart}
                                    buy={buy}
                                    isCart
                                />
                            )
                        })}
                    </>) : (<>
                        {allProducts.map((product, index) => {
                            return (
                                <Card
                                    product={product}
                                    wishlist={wishlist}
                                    checkingWishList={checkingWishList}
                                    addCart={addCart}
                                    buy={buy}
                                />
                            )
                        })}
                    </>)
                }

            </div>
        </>
    )
}