import React,{useState} from "react";
import NavbarSection from "./Navbar-section";
import FooterHome from "./Footer-home";
import { postItems } from "../redux/actions/postItemsActions";
import { useDispatch } from "react-redux";
import '../componentsStyle/add-product.css'
import axios from "axios";

// nextval('tb_items_item_id_seq'::regclass)

export function AddProduct(){
    const dispatch = useDispatch()
    let [item_name,setItemName]=useState('')
    let [item_description,setDescription]=useState('')
    let [item_size,setSize]=useState('')
    let [item_price,setPrice]=useState('')
    let [itemImage,setFile]= useState(null)

    const onSubmit= async(e)=>{
        console.log(itemImage);
        e.preventDefault()
        const formData = new FormData()
        formData.append('file',itemImage[0])
        formData.append('item_name',item_name)
        formData.append('item_description',item_description)
        formData.append('item_price',item_price)
        formData.append('item_size',item_size)
        dispatch(postItems(formData))
        // document.addProduct.reset()
    }
    return (
        <div className="container">
            <NavbarSection/>
            <div className="container-main-add-product" >
                <form onSubmit={onSubmit}  encType='multipart/form-data' name="addProduct" >
                    <div className="container-input-add-product">
                        <label htmlFor="itemName">Item Name</label>
                        <input onChange={e=>setItemName(e.target.value)} id="itemName" required/>
                    </div>
                    <div className="container-input-add-product">
                        <label htmlFor="image">Size</label>
                        <input onChange={e=>setSize(e.target.value)} id="image" required/>
                    </div>
                    <div className="container-input-add-product">
                        <label htmlFor="price">Price</label>
                        <input type='number' onChange={e=>setPrice(e.target.value)} id="price" required/>
                    </div>
                    <div className="container-input-add-product">
                        <label htmlFor="description">Description</label>
                        <textarea className="text-area" onChange={e=>setDescription(e.target.value)} id="description" required/>
                    </div>
                    <div className="container-input-add-product">
                        <label htmlFor="image">Image</label>
                        <input onChange={e=>setFile(e.target.files)} type='file'  name="file" required/>
                    </div>
                    <button type='submit'>klik</button>
                </form>
            </div>
            <FooterHome/>
        </div>
    )
}
