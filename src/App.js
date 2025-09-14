import React, { useState } from 'react';
import './App.css';
import ReviewForm from './components/ReviewForm';
import ReviewList from './components/ReviewList';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [reviews, setReviews] = useState([]);

  const handleAddReview = (review) => {
    setReviews([...reviews, review]);
    setShowForm(false);
  };

  return (
    <>
      <h1>Welcome to Rateit</h1>
      <button
        onClick={() => setShowForm(true)}
      >
        Add Review
      </button>

      {showForm && (
        <ReviewForm onAdd={handleAddReview} onCancel={() => setShowForm(false)} />
      )}
      <ReviewList reviews={reviews} />
    </>

  );
}

export default App;
