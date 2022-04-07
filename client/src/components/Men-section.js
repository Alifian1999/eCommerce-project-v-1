import React from "react";
import FooterHome from "./Footer-home";
import NavbarSection from "./Navbar-section";
import { Link } from "react-router-dom";


export default function MenSection(){
    let color
    function colorPalette(e){
    color= e.target.getAttribute('id')
    console.log(color);
   }

  
   let checkbox
   function checkBox(e){    
       if(checkbox===undefined){
        checkbox=e.target.getAttribute('id')
        console.log(checkbox);
       }else{
            console.log();
            }   
   }
    return(
        <div>
        <NavbarSection></NavbarSection>
        <div className="men-section-container">
            <div className="men-section-header">
                <h1>Shop Men’s</h1>
                <p>Revamp your style with the latest designer trends in men’s</p> 
                <p className="p-header-men">clothing or achieve a perfectly curated wardrobe thanks to </p>
                <p className="p-header-men">our line-up of timeless pieces. </p>
            </div>
            <div className="men-section-container-filter-clothes">
                <div className="men-section-container-filter-clothes-sub">
                    <div className="header-filter">
                        <h3>Filters</h3>
                        <span className="clear-filter">Clear filters</span>
                    </div>
                    <h4>Categories</h4>
                    <form>
                        <div>
                            <input onClick={checkBox} id="jeckets" type={'checkbox'} />
                            <span>Jackets</span>
                        </div>
                        <div>
                            <input onClick={checkBox} id="fleece" type={'checkbox'} />
                            <span>Fleece</span>
                        </div>
                        <div>
                            <input onClick={checkBox} id="sweatshirt" type={'checkbox'} />
                            <span>Sweatshirt & Hoodies</span>
                        </div>
                        <div>
                            <input onClick={checkBox} id="sweater" type={'checkbox'} />
                            <span>Sweaters</span>
                        </div>
                        <div>
                            <input onClick={checkBox} id="shirts" type={'checkbox'} />
                            <span>Shirts</span>
                        </div>
                        <div>
                            <input onClick={checkBox} id="t-shirts" type={'checkbox'} />
                            <span>T-Shirts</span>
                        </div>
                        <div>
                            <input onClick={checkBox} id="pansAndJeans" type={'checkbox'} />
                            <span>Pants & Jeans</span>
                        </div>
                    </form>
                    <h3>Color</h3>
                    <div className="container-color-palettes">
                       <div className="container-color-palettes-sub">
                           <p onClick={colorPalette} id="orange" className="color-palette-a" src="/images/images-project/aqua.png"alt="" >'</p>
                           <p onClick={colorPalette} id="blueviolet" className="color-palette-e">'</p>
                           <p onClick={colorPalette} id="aqua" className="color-palette-b">'</p>
                           <p onClick={colorPalette} id="grey" className="color-palette-d">'</p>
                           <p onClick={colorPalette} id="greenyellow" className="color-palette-c">'</p>
                       </div>
                       <div className="container-color-palettes-sub">
                            <p onClick={colorPalette} id="blue" className="color-palette-f">'</p>
                            <p onClick={colorPalette} id="green" className="color-palette-g">'</p>
                            <p onClick={colorPalette} id="red" className="color-palette-h">'</p>
                            <p onClick={colorPalette} id="yellow" className="color-palette-i">'</p>
                            <p onClick={colorPalette} id="black" className="color-palette-j">'</p>
                       </div>
                    </div>
                </div>
            <div className="container-product-men">
                <div className="filter-popular">
                    <form>
                    <small className="sort-by">sort by</small>
                    <select>
                        <option>popular</option>
                        <option>coba</option>
                        <option>coba</option>
                    </select>
                    </form>
                    <small className="showing">Showing 1003 Products</small>
                </div>
                <div className="container-product-men-sub">
                    <Link to='/product-info' className="product-men" >
                        <div >
                            <img src="/images/images-project/jacket.png" alt="" />
                            <h4>clothe A</h4>
                            <p>$99</p>
                        </div>
                    </Link>
                    <Link to='/product-info' className="product-men" >
                        <div >
                            <img src="/images/images-project/jacket.png" alt="" />
                            <h4>clothe A</h4>
                            <p>$99</p>
                        </div>
                    </Link>
                    <Link to='/product-info' className="product-men" >
                        <div >
                            <img src="/images/images-project/jacket.png" alt="" />
                            <h4>clothe A</h4>
                            <p>$99</p>
                        </div>
                    </Link>
                    <Link to='/product-info' className="product-men" >
                        <div >
                            <img src="/images/images-project/jacket.png" alt="" />
                            <h4>clothe A</h4>
                            <p>$99</p>
                        </div>
                    </Link>
                    <Link to='/product-info' className="product-men" >
                        <div >
                            <img src="/images/images-project/jacket.png" alt="" />
                            <h4>clothe A</h4>
                            <p>$99</p>
                        </div>
                    </Link>
                </div>
                <div className="container-product-men-sub">
                    <Link to='/product-info' className="product-men" >
                        <div >
                            <img src="/images/images-project/jacket.png" alt="" />
                            <h4>clothe A</h4>
                            <p>$99</p>
                        </div>
                    </Link>
                    <Link to='/product-info' className="product-men" >
                        <div >
                            <img src="/images/images-project/jacket.png" alt="" />
                            <h4>clothe A</h4>
                            <p>$99</p>
                        </div>
                    </Link>
                    <Link to='/product-info' className="product-men" >
                        <div >
                            <img src="/images/images-project/jacket.png" alt="" />
                            <h4>clothe A</h4>
                            <p>$99</p>
                        </div>
                    </Link>
                    <Link to='/product-info' className="product-men" >
                        <div >
                            <img src="/images/images-project/jacket.png" alt="" />
                            <h4>clothe A</h4>
                            <p>$99</p>
                        </div>
                    </Link>
                    <Link to='/product-info' className="product-men" >
                        <div >
                            <img src="/images/images-project/jacket.png" alt="" />
                            <h4>clothe A</h4>
                            <p>$99</p>
                        </div>
                    </Link>
                </div>
                <div className="container-product-men-sub">
                    <Link to='/product-info' className="product-men" >
                        <div >
                            <img src="/images/images-project/jacket.png" alt="" />
                            <h4>clothe A</h4>
                            <p>$99</p>
                        </div>
                    </Link>
                    <Link to='/product-info' className="product-men" >
                        <div >
                            <img src="/images/images-project/jacket.png" alt="" />
                            <h4>clothe A</h4>
                            <p>$99</p>
                        </div>
                    </Link>
                    <Link to='/product-info' className="product-men" >
                        <div >
                            <img src="/images/images-project/jacket.png" alt="" />
                            <h4>clothe A</h4>
                            <p>$99</p>
                        </div>
                    </Link>
                    <Link to='/product-info' className="product-men" >
                        <div >
                            <img src="/images/images-project/jacket.png" alt="" />
                            <h4>clothe A</h4>
                            <p>$99</p>
                        </div>
                    </Link>
                    <Link to='/product-info' className="product-men" >
                        <div >
                            <img src="/images/images-project/jacket.png" alt="" />
                            <h4>clothe A</h4>
                            <p>$99</p>
                        </div>
                    </Link>
                </div>
                <button className="btn-men-section-product">Load more products</button>
                </div>
            </div>
            <FooterHome></FooterHome>
        </div>
        </div>  
    )
}