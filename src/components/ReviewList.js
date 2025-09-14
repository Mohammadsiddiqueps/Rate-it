import React from "react";
import ReviewItem from "./ReviewItem";

export default function ReviewList({ reviews }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "40px",
        marginTop: "20px",
      }}
    >
      {reviews.map((rev, idx) => (
        <ReviewItem key={idx} review={rev} />
      ))}
    </div>
  );
}
