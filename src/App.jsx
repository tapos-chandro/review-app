import ReviewForm from './components/ReviewForm'
import ReviewList from './components/ReviewList'



function App() {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <ReviewForm></ReviewForm>
      </div>

      <ReviewList></ReviewList>
    </div>
  )
}

export default App
