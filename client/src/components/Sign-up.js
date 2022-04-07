import React, {useState, useEffect} from "react";
import { useDispatch,useSelector} from "react-redux";
import { RegistrationController } from "../redux/actions/registerActions";
import NavbarSection from "./Navbar-section";
import '../componentsStyle/signUp.css'
import FooterHome from "./Footer-home";
import { useNavigate } from "react-router-dom";


export default function SignUp(props){
    let [username,setUsername] = useState('')
    let [password,setPassword] = useState('')
    let [email,setEmail] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const view= useSelector(state=>state.userRegisterReducers.isLogin)
    const original= useSelector(state=>state.userRegisterReducers.initial)


    function submitController(e){
        e.preventDefault()
        let inputUser={
            username,
            password,
            email,
            navigate
        }
        console.log(inputUser);
        dispatch((RegistrationController(inputUser)))
        document.registerForm.reset()
    }
 
    return(
        <div className="container">
            <NavbarSection view={view}/>
            <div className="container-main">
                <form className="form-container" name="registerForm" onSubmit={submitController}>
                    <h1 className="header">Create an account</h1>
                    <div className="sub-form-a">
                        <label>Username</label>
                        <input type='text'  id="username" onChange={e=>setUsername(e.target.value)} required/>
                    </div>
                    <div className="sub-form-a">
                        <label>Password</label>
                        <input type='password' id="password" onChange={e=>setPassword(e.target.value)} required/>
                    </div>
                    <div className="sub-form-a">
                        <label>Email</label>
                        <input type='email' id="email" onChange={e=>setEmail(e.target.value)} required/>
                    </div>
                    {original?
                    <div id="hidden-div">
                    {view?<small id="register-success">registration success</small> : <small>username has been used please try again</small>}
                    </div> :''}
                    <button  type="submit">Register</button>
                </form>

                
                {/* <div>
                    <h1>{display.username}</h1>
                    <h1>{display.password}</h1>
                    <h1>{display.email}</h1>
                </div>   */}
            </div>
            <FooterHome/>
        </div>
    )
}