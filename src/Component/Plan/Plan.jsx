
const Plan = () => {
    return (
        <div>
            <section>
                <div className=" py-16 bg-slate-300">
                    <h1 className="text-center font-bold font-Parisienne text-4xl">Chose Your Plan!</h1>
                    <div className="grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 gap-4 mx-auto container mt-5">
                        <div className=" card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title font-Poppins text-bold text-3xl text-cyan-800">Local Event</h2>
                                <p className="font-Poppins text-bold text-xl text-slate-800 text-start">Wedding Planniing Assistant Expands withs Three New Localized Services.</p>
                                <p className="font-Poppins text-bold text-4xl text-slate-800 py-5">$1000</p>
                                <ol className="font-Poppins text-bold text-xl">
                                <p className="  font-bold text-cyan-800">Incluedes:</p>
                                    <li>Officiant</li>
                                    <li>Ceremony Music</li>
                                    <li>Jewelry</li>
                                </ol>
                                <div className="card-actions justify-center ">
                                    <button className="btn btn-primary w-full">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className=" card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title font-Poppins text-bold text-3xl text-cyan-800">Standard event</h2>
                                <p className="font-Poppins text-bold text-xl text-slate-800 text-start">Wedding Planniing Assistant Update innovative seating chart builder.</p>
                                <p className="font-Poppins text-bold text-4xl text-slate-800 py-5">$10000</p>
                                <ol className="font-Poppins text-bold text-xl">
                                <p className="  font-bold text-cyan-800">Incluedes:</p>
                                    <li>Officiant</li>
                                    <li>Ceremony Music</li>
                                    <li>Jewelry</li>
                                    <li>Dj</li>
                                    <li>Oficiant</li>
                                </ol>
                                <div className="card-actions justify-center ">
                                    <button className="btn btn-primary w-full">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className=" card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title font-Poppins text-bold text-3xl text-cyan-800">International Event</h2>
                                <p className="font-Poppins text-bold text-xl text-slate-800 text-start">Wedding Planniing Assistant Launches International Event Planning Platform.</p>
                                <p className="font-Poppins text-bold text-4xl text-slate-800 py-5">$270000</p>
                                <ol className="font-Poppins text-bold text-xl">
                                <p className="  font-bold text-cyan-800">Incluedes:</p>
                                    <li>Officiant</li>
                                    <li>Ceremony Music</li>
                                    <li>Jewelry</li>
                                    <li>dj</li>
                                    <li>Singer</li>
                                </ol>
                                <div className="card-actions justify-center ">
                                    <button className="btn btn-primary w-full">Buy Now</button>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Plan;