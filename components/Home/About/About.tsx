import { FaArrowRight, FaAward } from "react-icons/fa";

const About = () => {
    return (
        <>
            <div className="py-16">

                <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
                {/* first div */}
                    <div>
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center flex-col">
                                <FaAward className="h-6 w-6 text-white" />
                            </div>
                            <h1 className="text-xl text-black font-semibold">Guaranteed and certified</h1>
                        </div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-8 font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[3.9rem] text-gray-800">Online learning wherever and whenever.</h1>
                        <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis provident commodi molestiae odit obcaecati? Ad voluptate in praesentium. Iste, maxime!</p>
                        <button className="flex items-center space-x-2 px-8 py-3 mt-8 hover:bg-gray-700 transition-all duration-200 rounded-3xl bg-black text-white">
                            <span className="">Learn more</span>
                            <FaArrowRight className="" />
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default About;