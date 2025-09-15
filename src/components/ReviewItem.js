import React from "react";

function EditIcon(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
      <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}

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

      <div style={{ margin: 0, fontWeight: "bold", fontSize: "14px", color: "#007BFF", display: "flex", alignItems: "center", gap: "2px" }}>
        Rating:
        {Array.from({ length: review.rating }, (_, i) => (
          <StarIcon key={i} stroke="#FFD700" fill="#FFD700" />
        ))}
      </div>

      <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
        <button
          onClick={() => onEdit(review)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            background: "#f0f4ff",
            color: "#2e7eff",
            border: "1px solid #2e7eff",
            borderRadius: "4px",
            padding: "6px 12px",
            fontWeight: "500",
            cursor: "pointer",
            transition: "background 0.2s, color 0.2s",
          }}
          onMouseOver={e => {
            e.currentTarget.style.background = '#2e7eff';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseOut={e => {
            e.currentTarget.style.background = '#f0f4ff';
            e.currentTarget.style.color = '#2e7eff';
          }}
        >
          <EditIcon />
        </button>
        <button
          onClick={() => onDelete(review.id)}
          style={{
            background: "#fff0f0",
            color: "#d32f2f",
            border: "1px solid #d32f2f",
            borderRadius: "4px",
            padding: "6px 12px",
            fontWeight: "500",
            cursor: "pointer",
            transition: "background 0.2s, color 0.2s",
          }}
          onMouseOver={e => {
            e.currentTarget.style.background = '#d32f2f';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseOut={e => {
            e.currentTarget.style.background = '#fff0f0';
            e.currentTarget.style.color = '#d32f2f';
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
