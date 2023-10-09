import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Services = () => {
    const { id } = useParams()
    const service = useLoaderData()

    const [data, setData] = useState([])
    useEffect(() => {
        const data = service?.find(item => item.Id == id);
        setData(data)

    })

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={data.image} className="max-w-sm w-full rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{data.name}</h1>
                    <p className="py-6  text-justify">{data.description}</p>
                    <button className="btn btn-primary">Confirmed</button>
                </div>
            </div>
        </div>
    );
};

export default Services;