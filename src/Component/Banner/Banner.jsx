import About from "../../Pages/About/About";

const Banner = () => {
    return (
        <div  >
            <div className="text-center bg-indigo-50 w-full">
                <p data-aos="fade-right" data-aos-duration="2000" className="text-4xl font-Parisienne text-orange-400 pt-28">Amaging</p>
                <p data-aos="fade-left" data-aos-duration="2000" className="text-5xl font-poppins py-5">Your Dream Wedding</p>
                <div className="px-12">
                    <img className="w-full" src="/Assest/mt-1992-slider-img01.png" alt="" />
                </div>


            </div>
            <div className="div">
                <div className="hero py-10 text-center px-16 bg-base-200">

                   <About></About>

                </div>

            </div>
            <div className="text-center mt-16">
                <p className="text-4xl font-Parisienne font-bold">Our Services</p>
            </div>
            
        </div>
    );
};

export default Banner;