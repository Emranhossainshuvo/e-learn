import { coursesData } from "@/data/data";
import Image from "next/image";
import CourseCard from "./CourseCard";

const Courses = () => {
    return (
        <>
            <div className="pt-16 pb-12 relative bg-gray-200">
                <div className="w-[80%] pt-8 pb-8 mx-auto">
                    <h1 className="text-4xl md:text-5xl text-gray-900 font-bold">Popular courses</h1>
                    <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {coursesData.map((course)=>{
                            return <div key={course.id}>
                                <CourseCard course={course} />
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Courses;