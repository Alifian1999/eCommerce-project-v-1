import React,{useEffect, useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { getAllBarang } from "../redux/actions/getBarangActions";

export default function Page2(){
    const dispatch = useDispatch()
    const display = useSelector(state=>state.getBarangReducers)


    useEffect(()=>{
       dispatch( getAllBarang())
    },[])
    
    return(
        <div className="container-home-page-2">
            <div className="container-home-page-2-header">
                <h1 className="container-home-page-2-header-h1">Our latest arrivals</h1>
                <p className="container-home-page-2-header-p">Create screens directly in Method or add your images from Sketch or Figma.
                     You can even sync designs from your cloud storage!</p>
                <button>Shop All</button>
            </div>
            <div className="container-images-new-arrival">
                {display.loading?(
                <h2>loading</h2>
                ):display.error?(
                    <h2>{display.error}</h2>
                ):(
                <div className="container-images-arrival" style={{width:'180px',display:'block'}}>
                    
                    <div >   
                    {display.users.result.map((item)=>{
                    return(
                        <ul className="container-map" style={{display:'inline',
                        listStyleType: 'none',
                        margin: 0,
                        padding: 0,
                        overflow: 'hidden'}}>
                        <img src={item.item_image} alt="" />
                        <p>{item.item_name}</p>
                        <p>{item.item_size}</p>
                        <p>{item.item_description}</p>
                        <p>${item.item_price}</p>
                        </ul>
                    )})}
                    </div>)
                   
                </div>
                )}
                {/* <div className="container-images-arrival">
                    <img className="images-new-arrival" src="/images/images-project/jacket.png" alt="" />
                    <p></p>
                </div>
                <div className="container-images-arrival">
                    <img className="images-new-arrival" src="/images/images-project/jacket.png" alt="" />
                    <p></p>
                </div>
                <div className="container-images-arrival">
                    <img className="images-new-arrival" src="/images/images-project/jacket.png" alt="" />
                    <p></p>
                </div>
                <div className="container-images-arrival">
                    <img className="images-new-arrival" src="/images/images-project/jacket.png" alt="" />
                    <p></p>
                </div>  <div className="container-images-arrival">
                    <img className="images-new-arrival" src="/images/images-project/jacket.png" alt="" />
                    <p></p>
                </div> */}
            </div>
        </div>
    )
}