
import { useLoaderData } from "react-router-dom";
import Banner from "../../Component/Banner/Banner";
import Service from "../../Component/Service/Service";
import Plan from "../../Component/Plan/Plan";


const Home = () => {
    const services=useLoaderData();
    
    
    return (
       <div>
        <Banner></Banner>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto container mt-5">
        {
            services.map(service=><Service key={service.id} service={service}></Service>)
        }
        
        </div>
        <Plan></Plan>
       </div>

    );
};

export default Home;