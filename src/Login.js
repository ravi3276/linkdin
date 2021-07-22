import React,{ useState} from 'react'
import './Login.css';
import {auth} from './firebase';
import { useDispatch } from 'react-redux';
import {login} from './features/userSlice'
function Login() {
    const [name,setName] =useState('');
    const [password,setPassword] =useState('');
    const [email,setEmail] =useState('');
    const [photo,setPhoto] =useState('');
    const dispatch=useDispatch();
    const signin=(e) => {
        e.preventDefault();
    }

    const register=() => {
        // click event create a new user and dispatch login action to data layer
        if(!name){
            alert('please enter a FullName')
        }
        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth) =>{
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL:photo
                }).then(()=>{
                    dispatch(login({
                        email:userAuth.user.email,
                        uid:userAuth.user.uid,
                        displayName:name,
                        photoURL:photo
                    }))
                })
        }).catch((error) =>alert(error.message))

    }
    return (
        <div className="login">
            <img
             src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png"
             alt="" />

             <form className="login__form">
                 <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="Full name required"/>
                 <input type="text"  value={photo} onChange={e=>setPhoto(e.target.value)} placeholder="Profile pic URL"/>
                 <input type="text"  value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter your Email"/>
                 <input type="text"  value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password"/>
                 <button onClick={signin} type="submit">Sign in</button>
             </form>

             <p>Not a member?
                 <span onClick={register}> Register now.</span>
             </p>
        </div>
    )
}

export default Login
