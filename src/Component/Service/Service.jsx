
import { Link } from "react-router-dom";


const Service = ({service}) => {
    
    const{name,image,price,description,button_text,Id}=service;
   
   
    return (
        <div><div data-aos="fade-up-right"
        data-aos-duration="10000">
           
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" className="w-full object-cover h-56 md:h-52 lg:h-48" /></figure>
                <div className="card-body ">
                    <h2 className="card-title text-bold text-3xl font-poppin">{name}</h2>
                    <h2 className="card-title text-bold font-poppin">Price: {price}</h2>
                    {description.length>200?<p className="text-justify">{description.slice(0,100)}...</p>:<button className="btn btn-primary">{button_text}</button>}
                    
                    <div className="card-actions">
                        <button className="btn btn-primary text-white"><Link  to={`/service/${Id}`}>{button_text}</Link></button>
                    </div>
                </div>
            </div>
            
        </div>
        
        
        </div>
        
    );
};

export default Service;