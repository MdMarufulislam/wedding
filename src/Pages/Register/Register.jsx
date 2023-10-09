import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { contextApi } from "../../context/Context";

const Register = () => {
    const [err, seterr]=useState("")
    const [sucss, setsucss]=useState("")
    const {creatUser}=useContext(contextApi)
    const handlereg = e => {
        e.preventDefault()
        const form=new FormData(e.currentTarget);
        const name=form.get("name")
        const email=form.get("email")
        const pass=form.get("pass")
        seterr("")
        setsucss("")
        if(pass.length<6){
            seterr("Password Should 6 character")
            return
        }
        else if(!/[A-Z]/.test(pass)){
            seterr("Don't have a capital letter")
            return
        }else if( !/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(pass)){
            seterr("Don't have a special character")
            return
        }
        
        creatUser(email, pass,name)
        .then(result => {
            console.log(result.user)
            setsucss("Register successful")  
        })
        .catch(error => {
            console.error(error)
            seterr(error.message)
        })

    }
    return (
        <div>
            <div className="container mx-auto w-1/3 mt-11 font-Poppins text-3xl">
                <h1 className="text-5xl font-bold py-5 ">Register now!</h1>
                <form className=" py-5 text-2xl " onSubmit={handlereg}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                    </div>
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
                        <button className="btn btn-primary">Register</button>
                    </div>
                    {
                        sucss && <p className="text-green-600">{sucss}</p>
                    }
                    {
                        err && <p className="text-red-800">{err}</p>
                    }
                </form>
                <p className="mb-16 ">Already a Member? <Link className="text-blue-800" to="/login">Sign In</Link></p>
            </div>
        </div>
    );
};

export default Register;