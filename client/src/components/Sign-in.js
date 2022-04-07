import React,{useState, useEffect} from "react";
import NavbarSections from './Navbar-section'
import FooterHome from "./Footer-home";
import { useDispatch } from "react-redux";
import { LoginController } from "../redux/actions/loginActions";
import { useNavigate } from "react-router-dom";

export default function SignIn(){
    const navigate = useNavigate()
    const dispatch=useDispatch()
    let [username,setUsername]=useState('')
    let [password,setPassword]=useState('')

    let iya = {
        makan:'makan',
        minum: 'minum',
        tidur : 'tidur'
    }

    const {makan,minum}= iya
    console.log(iya);

    function submitHandler(e){
        e.preventDefault()
        dispatch(LoginController({username,password,navigate}))
    }

    let data={
        username,
        password
    }
    
    useEffect(()=>{
        localStorage.setItem('form',JSON.stringify(data))
    },[data])


    
    return(
        <div>
            <NavbarSections/>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Username </label>
                    <input type='text' placeholder="username" onChange={e=>setUsername(e.target.value)} required/>
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' placeholder="password" onChange={e=>setPassword(e.target.value)} required/>
                </div>
                <button type="submit">click me</button>
            </form>
            <FooterHome/>
        </div>
    )
}