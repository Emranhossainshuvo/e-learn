"use client"

import Image from "next/image";

const HeroImage = () => {
    return (
        <>
            <div className="hidden lg:block">
                <Image src={"https://i.postimg.cc/HL38jg02/43393-removebg-preview.png"} width={800} height={600} alt="Hero image" />
            </div>
        </>
    );
};

export default HeroImage;