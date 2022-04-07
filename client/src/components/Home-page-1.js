import React from "react";

export default function Page1(){
    return(
        <div className="container-home-page-1">
            <div className="container-home-page-1-header">
                <h1 className="container-home-page-1-header-h1">Better clothing for the planet</h1>
                <p className="container-home-page-1-header-p">Create screens directly in Method or add your images from Sketch or Figma.
                     You can even sync designs from your cloud storage!</p>
                <button>Shop All</button>
            </div>
            <div className="container-home-page-1-main-image">
                <img className="image-main" src="/images/images-project/etihad.png" alt=""/>
            </div>
            <div className="container-footer-megazine">
                <div className="footer-megazine">
                    <img className="footer-image" src="/images/images-project/new-york-times.png" alt=""/>
                    <img className="footer-image" src="/images/images-project/vogue.png" alt="" />
                    <img className="footer-image" src="/images/images-project/fortune.png" alt=""/>
                    <img className="footer-image" src="/images/images-project/etihad.png" alt=""/>
                    <img className="footer-image" src="/images/images-project/cnbc.png" alt=""/>
                </div>
                <div className="footer-megazine-a">
                    <img className="footer-image" src="/images/images-project/new-york-times.png" alt=""/>
                    <img className="footer-image" src="/images/images-project/vogue.png" alt="" />
                    <img className="footer-image" src="/images/images-project/fortune.png" alt=""/>
                    <img className="footer-image" src="/images/images-project/etihad.png" alt=""/>
                    <img className="footer-image" src="/images/images-project/cnbc.png" alt=""/>
                </div>
            </div>
        </div>
    )
}