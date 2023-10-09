
import { Link, NavLink } from "react-router-dom";
import { GiBigDiamondRing } from 'react-icons/Gi';
import { useContext } from "react";
import { contextApi } from "../../context/Context";
const Header = () => {
    const {user, logout}=useContext(contextApi)
    const handleLogut=()=>{
        logout()
            .then()
            .catch()
    }
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        {user && <li><NavLink to="/about">About Us</NavLink></li>}
        <li><NavLink to="/venues">VENUES</NavLink></li>
        <li><NavLink to="/vendors">VENDORS</NavLink></li>
    </>
    return (
        <div className="" >
            <div className="navbar bg-base-100 ">
                <div className="navbar-start ">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <i className="text-3xl text-yellow-300 font-bold">
                        {
                            <GiBigDiamondRing></GiBigDiamondRing>
                        }
                    </i>


                    <a className="px-2 normal-case text-2xl font-bold">SWEETDAY</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user?
                    <div className="text-center px-2">
                        <div >
                        <img className="w-10 rounded-full mx-auto" src={user.photoURL?user.photoURL: "../../../public/Assest/user.png" }/>
                        <p>{user.displayName}</p>
                    </div>
                    
                    </div>
                    :  
                    <div className="w-10 rounded-full mx-2">
                        <img src="../../../public/Assest/user.png" />
                    </div>}
                    
                    {
                        user? <button onClick={handleLogut} className="font-bold text-2xl btn-secondary rounded text-white px-3 py-2">Log Out</button>: <Link to="/login" className="font-bold text-2xl btn-secondary rounded text-white px-3 py-2">Log In</Link>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Header;