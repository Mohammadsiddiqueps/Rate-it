import React, { useState } from 'react';
import './App.css';
import ReviewForm from './components/ReviewForm';
import ReviewList from './components/ReviewList';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [editingReview, setEditingReview] = useState(null);

  const handleDelete = (id) => {
    setReviews(reviews.filter((r) => r.id !== id));
  };

  const handleEditClick = (review) => {
    setEditingReview(review);
    setShowForm(true);
  };

  const handleAddReview = (review) => {
    if (editingReview) {
      setReviews(
        reviews.map((r) =>
          r.id === editingReview.id ? { ...review, id: editingReview.id } : r
        )
      );
      setEditingReview(null);
    } else {
      setReviews([...reviews, { ...review, id: Date.now() }]);
    }
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
        <ReviewForm
          onAdd={handleAddReview}
          onCancel={() => {
            setShowForm(false);
            setEditingReview(null);
          }}
          initialData={editingReview}
        />
      )}
      <ReviewList reviews={reviews} onEdit={handleEditClick} onDelete={handleDelete} />
    </>

  );
}

export default App;
