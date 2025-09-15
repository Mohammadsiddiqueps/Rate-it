import React, { useState } from 'react';
import './App.css';
import ReviewForm from './components/ReviewForm';
import ReviewList from './components/ReviewList';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [editingReview, setEditingReview] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id) => {
    setReviews(reviews.filter((review) => review.id !== id));
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

  const filteredReviews = reviews.filter(review =>
    review.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h1>Welcome to Rateit</h1>
      <div style={{ marginBottom: "16px" }}>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={{
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            width: "220px",
            marginRight: "12px"
          }}
        />
        <button
          onClick={() => setShowForm(true)}
          style={{
            padding: "8px 16px",
            border: "none",
            borderRadius: "4px",
            background: "#2e7eff",
            color: "white",
            cursor: "pointer"
          }}
        >
          Add Review
        </button>
      </div>

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
      <ReviewList reviews={filteredReviews} onEdit={handleEditClick} onDelete={handleDelete} />
    </>
  );
}

export default App;
