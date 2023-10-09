import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { contextApi } from "../../context/Context";
import { FcGoogle } from 'react-icons/Fc';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/Firebase.config";

const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const Login = () => {
    const location = useLocation()
    const Navigate = useNavigate()
    const [err, seterrr]=useState("")
    const { login } = useContext(contextApi)
    const hadleGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result)
                Navigate(location.state ?location.state : "/")

            }).catch((error) => {
                console.log(error)
                
            });
    }
 
    const handlelogin = e => {
        e.preventDefault()
        seterrr("")
        const form = new FormData(e.currentTarget);
        const email = form.get("email")
        const pass = form.get("pass")
        login(email, pass)
            .then((userCredential) => {
                console.log(userCredential.user)
                Navigate(location.state ? location.state : "/")
            })
            .catch((error) => {
                console.log(error.message)
                seterrr("Your pass or email doesn't match")
            });

    }
    return (

        <div className="container mx-auto w-1/3 mt-11 font-Poppins text-3xl">
            <h1 className="text-5xl font-bold py-5 ">Login now!</h1>
            <form className=" py-5 text-2xl space-y-5 " onSubmit={handlelogin}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="pass" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                <p>
                    {
                        err && <p className="text-red-500 font-bold">{err}</p>
                    }
                </p>
            </form>
            <p className=" ">Not a Member? <Link className="text-blue-800" to="/register">Sign up</Link></p>
            <p className="text-2xl text-center font-Poppins font-bold">or</p>
            <div className="flex items-center mb-5">
                <p className="text-xl px-2">Sign in with:</p><button onClick={hadleGoogle}><FcGoogle></FcGoogle></button>
            </div>
        </div>
    );
};

export default Login;