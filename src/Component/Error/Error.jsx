import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="text-center"> 
            <p>Opps</p> 
            <p>404 webpage Not found</p> 
            <Link to='/'>Home</Link> 
        </div>
    );
};

export default Error;