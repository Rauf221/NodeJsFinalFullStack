import React from 'react';
import { IoIosStar, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LuQuote } from 'react-icons/lu';


interface Review {
    name: string;
    comment: string;
    reviewText: string;
    rating: number;
}

interface ArrowProps {
    onClick?: () => void;
}

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <div
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer text-2xl text-black hover:text-white hover:bg-black transition-colors duration-300 bg-white h-10 w-10 flex items-center rounded-full justify-center"
        onClick={onClick}
    >
        <IoIosArrowForward />
    </div>
);

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <div
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer text-2xl bg-white h-10 w-10 flex items-center rounded-full justify-center text-black hover:text-white hover:bg-black transition-colors duration-300"
        onClick={onClick}
    >
        <IoIosArrowBack />
    </div>
);

const reviews: Review[] = [
    {
        name: "Donald Duck",
        comment: "Alukas is my favourite store",
        reviewText: "Great products and designs and such great quality, they always wash up well no matter how many times I wash them.",
        rating: 5
    },
    {
        name: "Mickey Mouse",
        comment: "Amazing experience",
        reviewText: "The service is top-notch and the products are worth every penny. I'll definitely recommend this to everyone!",
        rating: 5
    },
    {
        name: "Goofy",
        comment: "Quality and Service",
        reviewText: "Superb quality and excellent customer service. I'm a happy returning customer!",
        rating: 4
    }
];

const ReviewCard: React.FC<Review> = ({ name, comment, reviewText, rating }) => {
    return (
        <div className='w-[436px] h-[312px] bg-white shadow-sm p-10 flex flex-col gap-5 text-[18px]'>
            <div className='bg-[#222222] flex items-center justify-center w-[50px] h-[50px] text-white text-2xl rotate-180 rounded-full'>
                <LuQuote />
            </div>
            <div>
                <p className='font-medium'>{comment}</p>
            </div>
            <div className='text-gray-500'>
                <p>{reviewText}</p>
            </div>
            <div className='flex items-center justify-between'>
                <p> - {name}</p>
                <div className='flex items-center text-[#F68773]'>
                    {Array(rating).fill(null).map((_, index) => (
                        <IoIosStar key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const CustumersReviews = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <Slider {...settings}>
                {reviews.map((review, index) => (
                    <div key={index} className="flex justify-center">
                        <ReviewCard
                            name={review.name}
                            comment={review.comment}
                            reviewText={review.reviewText}
                            rating={review.rating}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CustumersReviews;
