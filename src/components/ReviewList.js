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
      {reviews.map((rev) => (
        <ReviewItem key={rev.id} review={rev} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}
