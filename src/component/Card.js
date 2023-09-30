import React from "react";
export const Card = ({product,wishlist,checkingWishList,addCart,buy,isCart=false}) => {
    return (

        <div className="card">
            <div className="wishlist-container">
                <button className="wishlist" onClick={() => wishlist(product.id)}>
                    {checkingWishList(product.id) ? (<p className="red">&#9829;</p>) : (<p className="white">&#9829;</p>)}
                </button>
            </div>
            <img style={{ maxHeight: "25%" }} src={product.image} width={100} height={120} />
            <p className="title" title={product.title}>{product.title}</p>
            <p>Rs. {product.price}</p>
            <p>
                <span>
                    {[...Array(Math.round(product.rating.rate))].map(() => {
                        return (
                            <> &#9733;</>)
                    })}
                </span> &nbsp;
                {product.rating.rate}
                <div>
                    {!isCart?(  <button className="cart" onClick={() => addCart(product)}>Add to Cart</button>):null}
                  
                    <button className="buy" onClick={() => buy()}>Buy now</button>
                </div>
            </p>
        </div>

    )
}