import { useEffect, useState } from "react";
import { setLocalStorageData } from "../hooks/useLocalStorage";

const Modal = ({ setShow, reviewToEdit, setReviewToEdit , reviews, setSampleReviews }) => {

    const [updatedReview, setUpdatedReview] = useState(null);

    // Handle close modal
    const handleUpdate = (e) => {
        
        e.preventDefault();
        const formData = new FormData(e.target);
        const reviewData = {
            shopName: formData.get("shopName"),
            reviewText: formData.get("reviewText"),
            rating: Number(formData.get("rating")),
            date: new Date().toISOString(),
            id: reviewToEdit?.id // Use the existing ID for the review being edited
        };


        const updatedReviews = updatedReview.filter(review => review.id !== reviewToEdit.id);
        setLocalStorageData("reviews", [...updatedReviews, reviewData]);
        setSampleReviews([...updatedReviews, reviewData]);
        setReviewToEdit(reviewData)
        setShow(false);
    }


    useEffect(() => {
        const storedReviews = JSON.parse(localStorage.getItem("reviews"));
        setUpdatedReview(storedReviews);

    }, [reviews,])

    return (
        <div>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
                <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
                    <div className="flex items-start space-x-4">

                        <form onSubmit={handleUpdate} className="space-y-4">

                            <h2 className="text-xl font-semibold mb-4 text-center">Update Reviews</h2>

                            {/* Shop Name */}
                            <input
                                type="text"
                                placeholder="Shop Name"
                                name="shopName"
                                required
                                defaultValue={reviewToEdit?.shopName}
                                className="w-full p-2 border outline-0 border-gray-200 rounded mb-3 focus:outline-none focus:border focus:border-gray-500 "
                            />

                            {/* Review Text */}
                            <textarea
                                placeholder="Write your review..."
                                name="reviewText"
                                required
                                defaultValue={reviewToEdit?.reviewText}
                                className="w-full p-2 border rounded mb-3 border-gray-200 focus:outline-none focus:border focus:border-gray-500  min-h-[100px]"
                            ></textarea>

                            {/* Rating */}
                            <select
                                name="rating"
                                defaultValue={reviewToEdit?.rating}
                                className="w-full p-2 hover:border-gray-600 border border-gray-200 outline-0 rounded mb-4 focus:outline-none focus:border focus:border-gray-500">
                                <option value={1}>1 Star</option>
                                <option value={2}>2 Stars</option>
                                <option value={3}>3 Stars</option>
                                <option value={4}>4 Stars</option>
                                <option value={5}>5 Stars</option>
                            </select>



                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full hover:cursor-pointer bg-emerald-500 hover:bg-emerald-700 text-white py-2 rounded transition"
                            >
                                Update Review
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;