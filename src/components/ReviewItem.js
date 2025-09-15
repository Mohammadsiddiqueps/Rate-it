import React from "react";

export default function ReviewItem({review, onEdit, onDelete}) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "12px",
        background: "#fff",
        boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
        width: "200px",
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "16px", color: "#333" }}>
        {review.title}
      </h3>

      <p style={{ margin: "0 0 8px", fontSize: "14px", color: "#555" }}>
        {review.description}
      </p>

      <p style={{ margin: 0, fontWeight: "bold", fontSize: "14px", color: "#007BFF" }}>
        Rating: {review.rating}
      </p>

      <div>
        <button onClick={() => onEdit(review)} style={{ marginRight: "6px" }}>
          Edit
        </button>
        <button onClick={() => onDelete(review.id)}>Delete</button>
      </div>
    </div>
  );
}
