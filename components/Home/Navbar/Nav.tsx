import Image from "next/image";

const Nav = () => {
    return (
        <div className="fixed w-full transition-all duration-150 h-[12vh] z-[1000] bg-blue-700">
            <div className="flex items-center justify-between w-[90%] xl:w-[80%] mx-auto">
                <Image src={"/images/icons8-shop-100.png"} width={120} height={120} alt="website logo icon"></Image>
                <div className="hidden items-center space-x-10 lg:flex">
                    
                </div>
            </div>
        </div>
    );
};

export default Nav;