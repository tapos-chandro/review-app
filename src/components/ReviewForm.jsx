

const ReviewForm = () => {

    const handleSubmit = (e) => {

        e.preventDefault();
        const formData = new FormData(e.target);
        const reviewData = {
            shopName: formData.get('shopName'),
            reviewText: formData.get('reviewText'),
            rating: formData.get('rating')
        };

        console.log('Review submitted:', reviewData);
        // Here you would typically send the review data to your server or state management

    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold mb-4 text-center">Add Review</h2>

            {/* Shop Name */}
            <input
                type="text"
                placeholder="Shop Name"
                name="shopName"
                className="w-full p-2 border outline-0 border-gray-200 rounded mb-3 focus:outline-none focus:border focus:border-gray-500 "
            />

            {/* Review Text */}
            <textarea
                placeholder="Write your review..."
                name="reviewText"
                className="w-full p-2 border rounded mb-3 border-gray-200 focus:outline-none focus:border focus:border-gray-500  min-h-[100px]"
            ></textarea>

            {/* Rating */}
            <select name="rating" className="w-full p-2 hover:border-gray-600 border border-gray-200 outline-0 rounded mb-4 focus:outline-none focus:border focus:border-gray-500">
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
                Submit Review
            </button>
        </form>
    );
};

export default ReviewForm;