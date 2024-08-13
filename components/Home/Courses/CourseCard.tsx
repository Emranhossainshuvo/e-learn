import Image from "next/image";


// defining a type 
type Props = {
    course: {
        id: number;
        image: string;
        title: string;
        price: number;
        author: string;
        reviewNumber: number;
        lessons: number;
        students: number;
        category: string;
    };
}

const CourseCard = ({ course }: Props) => {
    return (
        <>
            <div className="bg-white rounded-lg overflow-hidden cursor-pointer">
                <div>
                    <Image src={course.image} alt={course.title} width={400} height={400} className="h-full w-full" />
                </div>
            </div>
        </>
    );
};

export default CourseCard;