import React from "react";
import ReviewItem from "./ReviewItem";

export default function ReviewList({reviews, onEdit, onDelete}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "40px",
        marginTop: "20px",
      }}
    >
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}
