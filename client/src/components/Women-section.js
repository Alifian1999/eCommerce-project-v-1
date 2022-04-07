import React, {useEffect} from "react";
import FooterHome from "./Footer-home";
import NavbarSection from "./Navbar-section";
import { useSelector,useDispatch } from "react-redux";
import {increment, decrement} from '../redux/actions/counterActions'
import { getAllBarang } from '../redux/actions/getBarangActions'
import { useParams } from "react-router-dom";
import { getItemsById } from "../redux/actions/getBarangActions";

export default  function WomenSection(){
    const counter= useSelector(state=>state.reducer)
    const getAllBarangResult = useSelector(state => state.getBarangReducers)
    const getItemsByIdResult = useSelector(state=>state.getItemsByIdReducers)


    // let coba = getItemsByIdResult.users.result[0].item_image.data
    // console.log(coba);
    const dispatch = useDispatch()
    const id = useParams()
    useEffect(()=>{
        dispatch(getAllBarang())
        dispatch(getItemsById(id.id))
    },[])
    
    function getValue(e){  
        e.preventDefault() 
        let inputData= document.getElementById('try').value
        let tampung= inputData
        if(!tampung){
            return alert('please fill your identity')
        }else{
            return console.log(tampung);
        }
    }
    return(
        <div>
            <NavbarSection/>
            <h1>hasil</h1>
            <h1>{counter}</h1>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>

            {getAllBarangResult.loading?(
                <h2>loading</h2>
                ):getAllBarangResult.error?(
                    <h2>{getAllBarangResult.error}</h2>
                ):(
            <div>
                {getAllBarangResult &&
                getAllBarangResult.users &&
                getAllBarangResult.users.result.map((item,key)=>
                    <div key={key} className="percobaan">
                        <img src={item.item_image} alt="" />
                        <p >{item.item_name}</p>
                        <p >{item.item_price}</p>
                        <p>{item.item_description}</p>
                    </div>
                )}
            </div>
            )}
                {getItemsByIdResult.loading?<h1>loading bro</h1>:
                    <div>{getItemsByIdResult &&
                        getItemsByIdResult.users &&
                        getItemsByIdResult.users.result.map((data)=>
                        <div className="product-men" >
                            <div >
                                <img src={data.item_image} alt="" />
                                <h4>{data.item_name}</h4>
                                <p>{data.item_price}</p>
                                <p>{data.item_description}</p>
                                {console.log(data.item_image)}
                            </div>
                        </div>
                    )}</div>
                }
            <form onSubmit={getValue}>
                <input id="try"/>
                <button type='submit'>click</button>
                <textarea  id="try1"/>
            </form>
            <FooterHome id={id}></FooterHome>
        </div>
    )
}