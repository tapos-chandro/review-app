
const ReviewList = () => {



    const sampleReviews = JSON.parse(localStorage.getItem("reviews"));


    return (
        <div className="max-w-3xl mx-auto mt-8 space-y-6 my-20">
            <h2 className="text-2xl font-semibold mb-4 text-center">Reviews</h2>

            {sampleReviews?.map((review, idx) => (
                <div
                    key={idx}
                    className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white hover:shadow-md transition"
                >
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-lg">{review.shopName}</h3>
                        <span className="text-yellow-500 font-bold">
                            {"★".repeat(review.rating)}
                            {"☆".repeat(5 - review.rating)}
                        </span>
                    </div>
                    <p className="text-gray-700 mb-2">{review.reviewText}</p>
                    <p className="text-sm text-gray-400">{review.date}</p>
                </div>
            ))}
        </div>
    );
};

export default ReviewList;
