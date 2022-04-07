import React, { useState} from "react";
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import '../componentsStyle/navbar.css'
import { useNavigate } from "react-router-dom";


export default function NavbarSection(){
    function getDataFromLocalStorage(){
        const storedValues = localStorage.getItem('form')
        if(!storedValues)
            return{
                username:'',
                password:''
            }
        return JSON.parse(storedValues)
        }
        function removeDataFromLocalStorage(){
            localStorage.clear()
            navigate('/sign-in')
        }

    const navigate = useNavigate()
    const [values,setValues]=useState(getDataFromLocalStorage)
    const counter= useSelector(state=>state.reducer)
    return(
        <div className="navbar-section-container">
            <div className='navbar-container-a'>
                <p>USD</p>
                <p>FREE SHIPPING ON ALL HERMAN MILLER! FEB. 25–28. </p>
                <p>Support</p>
            </div>
            <div className='navbar-container-b'>
                <div className='navbar-left-side'>
                    <Link to='/' className='menu-left-side-a-section'>Ecommerce</Link>
                    <span className='menu-left-side' >Shop</span>
                    <span className='menu-left-side' >Stories</span>
                    <span className='menu-left-side'>About</span>

                    <div className='menu-left-side'>
                        <label htmlFor="search-box" className='search-box'><img src='/images/project/search-m.svg' alt='' /></label>
                        <input id='search-box' placeholder='Search'/>
                    </div>
                </div>

                <div className='navbar-right-side'>
                    {values.username && values.password?
                    <div className='menu-right-side-main'>
                        <p className='menu-right-side-main-child-a-section'><img src='/images/project/cart-m.svg' alt='' /></p>
                        <p className='menu-right-side-main-child'>{counter}</p>
                        <Link className="addProduct" to='/add-product'> Add Product </Link>
                        <button onClick={removeDataFromLocalStorage}>Logout</button>
                    </div>:
                    <div className="userMenu">
                    <Link id="link-user-menu" to='/sign-in' className='menu-right-side'>Sign In</Link>
                    <Link id="link-user-menu" to='/sign-up' className='menu-right-side'>Sign Up</Link>
                    </div>}
                </div>
            </div>
        </div>
    )
}