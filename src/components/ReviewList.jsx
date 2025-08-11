import { useEffect, useState } from "react";
import { getStoredData, setLocalStorageData } from "../hooks/useLocalStorage";
import Modal from "./Modal";

const ReviewList = ({ reviews, setReviews }) => {
    // Controls whether the edit modal is visible
    const [show, setShow] = useState(false);

    // Stores the list of reviews to be displayed (can be filtered)
    const [sampleReviews, setSampleReviews] = useState([]);

    // Stores the review object that is currently being edited
    const [reviewToEdit, setReviewToEdit] = useState(null);

    // Delete a review by ID
    const handleDelete = (id) => {
        const updatedReviews = sampleReviews.filter(review => review.id !== id);
        setReviews(updatedReviews); // Update parent state
        setLocalStorageData('reviews', updatedReviews); // Save updated list in localStorage
    };

    // Select a review to edit based on its ID
    const handleEdit = (id) => {
        const reviewToEdit = sampleReviews.find(review => review.id === id);
        console.log("Review to edit:", reviewToEdit);
        setReviewToEdit(reviewToEdit);
    };

    // Search reviews by shop name
    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        console.log("Search query:", query);

        // Filter original reviews from props, not sampleReviews
        const filteredReviews = reviews.filter(review =>
            review.shopName.toLowerCase().includes(query)
        );

        console.log("Filtered reviews:", filteredReviews);
        setSampleReviews(filteredReviews);
    };

    // Load reviews from localStorage when component mounts or when reviews prop changes
    useEffect(() => {
        const getStored = getStoredData('reviews') || [];
        setSampleReviews(getStored || []);
    }, [reviews]);

    return (
        <div className="max-w-6xl px-4 mx-auto mt-8 space-y-6 my-20">
            <h2 className="text-2xl font-semibold mb-4 text-center">Reviews</h2>

            {/* Search bar */}
            <div className="max-w-md mx-auto mb-6">
                <input
                    onChange={(e) => { handleSearch(e); }}
                    className="border border-gray-200 rounded-lg p-2 w-full focus:outline-0 focus:border-gray-500"
                    type="text"
                    placeholder="Search reviews..."
                />
            </div>

            {/* Review list */}
            {sampleReviews.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sampleReviews.map((review, idx) => (
                        <div
                            key={idx}
                            className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md w-full"
                        >
                            {/* Shop name */}
                            <h3 className="font-semibold text-lg mb-1 break-words whitespace-normal">
                                {review.shopName}
                            </h3>

                            {/* Star rating visual */}
                            <span className="text-yellow-500 font-bold mb-2 inline-block">
                                {"★".repeat(review.rating)}
                                {"☆".repeat(5 - review.rating)}
                            </span>

                            {/* Review text */}
                            <p className="text-gray-700 mb-2 break-words whitespace-normal">
                                {review.reviewText}
                            </p>

                            {/* Review date */}
                            <p className="text-sm text-gray-400">{review.date}</p>

                            {/* Action buttons */}
                            <div className="flex justify-between items-center mt-4">
                                <button
                                    onClick={() => handleDelete(review.id)}
                                    className="px-3 rounded-lg mt-3 p-1 hover:cursor-pointer hover:underline bg-red-500 text-white"
                                >
                                    Delete
                                </button>
                                <button
                                    onClick={() => {
                                        handleEdit(review.id);
                                        setShow(true);
                                    }}
                                    className="px-3 rounded-lg mt-3 p-1 hover:cursor-pointer hover:underline bg-green-400 text-white"
                                >
                                    Edit
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500 text-center">No reviews yet.</p>
            )}

            {/* Modal for editing review */}
            {show ? (
                <Modal
                    setSampleReviews={setSampleReviews}
                    show={show}
                    setShow={setShow}
                    reviewToEdit={reviewToEdit}
                    setReviews={setReviews}
                    setReviewToEdit={setReviewToEdit}
                />
            ) : null}
        </div>
    );
};

export default ReviewList;
