import { useState } from 'react';
import ReviewForm from './components/ReviewForm'
import ReviewList from './components/ReviewList'



function App() {
  const [reviews, setReviews] = useState([]);
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <ReviewForm reviews={reviews} setReviews={setReviews}></ReviewForm>
      </div>

      <ReviewList reviews={reviews} setReviews={setReviews}></ReviewList>
    </div>
  )
}

export default App
