import React from "react";
import NavbarSection from "./Navbar-section";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductInfo(){
    const originalPrice=()=>{
        let original= 250
        return original
    }
    const [price,action]=useState(originalPrice())
    const [quantity,act]=useState(1)
    
    const tambah=()=>{
        act(prevJumlah=>prevJumlah+1)
    }
    const kurang=()=>{
        if(quantity===1){
            act(prevJumlah=>prevJumlah-0)
        }else{
            act(prevJumlah=>prevJumlah-1)
        }
    }
    const addCart=()=>{
        tambah()
        action(originalPrice()+price)
    }
    const deleteCart=()=>{
        kurang()
        if(price===originalPrice()){
            action(price-0)
        }else{
            action(price-originalPrice())
        }
    }
    

    return(
        <div>
            <NavbarSection></NavbarSection>
            <div className="container-product-info">
                <div className="img-product-info">
                    <img className="img-main-product-info" src="images/images-project/jacket.png" alt="" />
                </div>
                <div className="description-product-info">
                    <div className="container-header-info-product">
                        <h1>Men’s winter jacket</h1>
                        <img className="logo-info-product-header-heart" src="/images/images-project/heart.svg" alt="" />
                        <img className="logo-info-product-header-bookmark" src="/images/images-project/bookmark.svg" alt="" />
                    </div>
                    <div>
                        <div className="price-product-info">
                            <h5>$99</h5>
                            <div className="price-description">
                                <p>or 4 interest-free payments of $25.00.   
                                    <Link to=''> Learn more</Link></p>
                            </div>
                        </div>
                    </div>
                    <p className="words-sales">Revamp your style with the latest designer trends in men’s clothing or achieve
                        a perfectly curated wardrobe thanks to our line-up of timeless pieces. </p>
                    <p className="header-color-palettes">Color</p>
                    <div className="color-product-info">
                        <p className="color-palette-product-info-a">'</p>
                        <p className="color-palette-product-info-b">'</p>
                    </div>
                    <p className="header-size">Size</p>
                    <div className="size-description-product-info">
                        <button className="size-description-product-info-margin">XS</button>
                        <button className="size-description-product-info-1">S</button>
                        <button className="size-description-product-info-1">M</button>
                        <button className="size-description-product-info-1">L</button>
                        <button className="size-description-product-info-2">XL</button>
                        <button className="size-description-product-info-3">XXL</button>
                        <button className="size-description-product-info-3">3XL</button>
                    </div>
                    <p className="header-height-model">Size & Fit Guide</p>
                    <div className="container-cart-and-model">
                        <div className="container-height-model">
                            <p className="height-model">Height of model: 189 cm. / 6′ 2″ Size 41</p>
                            <Link to='cart-product'><button>Add to Cart - ${price}</button></Link>
                        </div>
                        <div>                           
                            <div className="container-quantity">
                                <p>Quantity</p>
                                <div className="container-quantity-button">
                                    <button onClick={deleteCart}>-</button>
                                    <span>{quantity}</span>
                                    <button onClick={addCart}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-product-info">
                        <p className="margin">Free standard shipping</p>
                        <Link className="margin-b" to=''>Free Returns</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}