
const HeroContent = () => {
    return (
        <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white">Best Online platform for education!</h1>
            <p className="mt-6 text-sm md:text-base text-white text-opacity-60">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur earum molestiae vel deserunt? Laboriosam eligendi necessitatibus, doloremque ea consectetur soluta.</p>
            <div className="flex mt-8 items-center space-x-4">
                <button className="md:px-12 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg bg-green-700 hover:bg-green-900">Get Started</button>
                <button className="md:px-12 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg bg-yellow-700 hover:bg-yellow-900">Learn more</button>
            </div>
        </div>
    );
};

export default HeroContent;