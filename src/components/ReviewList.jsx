
import { useEffect, useState } from "react";
import { getStoredData } from "../hooks/useLocalStorage";

const ReviewList = ({ reviews }) => {



    const [sampleReviews, setSampleReviews] = useState([]);




    useEffect(() => {
        const reviews = getStoredData('reviews');
        console.log("reviews", reviews);
        setSampleReviews(reviews || []);
    }, [reviews]);


    return (
        <div className="max-w-6xl px-10 mx-auto mt-8 space-y-6 my-20">
            <h2 className="text-2xl font-semibold mb-4 text-center">Reviews</h2>

            {
                sampleReviews.length > 0 ?
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                        {sampleReviews?.map((review, idx) => (
                            <div
                                key={idx}
                                className="p-4 border border-gray-200 rounded-lg shadow-sm  hover:shadow-md"
                            >
                                <h3 className="font-semibold text-lg">{review.shopName}</h3>
                                <span className="text-yellow-500 font-bold">
                                    {"★".repeat(review.rating)}
                                    {"☆".repeat(5 - review.rating)}
                                </span>
                                <p className="text-gray-700 mb-2 break-words whitespace-normal">{review.reviewText}</p>
                                <p className="text-sm text-gray-400">{review.date}</p>
                            </div>
                        ))}
                    </div> : <p className="text-gray-500 text-center">No reviews yet.</p>
            }
        </div>
    );
};

export default ReviewList;
