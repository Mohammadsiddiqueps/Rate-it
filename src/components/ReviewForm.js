import React, { useState, useEffect } from "react";

export default function ReviewForm({ onAdd, onCancel, initialData }) {
    const [formData, setFormData] = useState({
        title: initialData?.title || "",
        description: initialData?.description || "",
        rating: initialData?.rating || 5,
    });

    useEffect(() => {
        setFormData({
            title: initialData?.title || "",
            description: initialData?.description || "",
            rating: initialData?.rating || 5,
        });
    }, [initialData]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.title && formData.description && formData.rating) {
            onAdd(formData);
            setFormData({ title: "", description: "", rating: 5 });
        }
    };

    return (
        <div
            style={{
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,0.3)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <form
                onSubmit={handleSubmit}
                style={{
                    background: "white",
                    padding: "20px",
                    borderRadius: "8px",
                    minWidth: "300px",
                    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                }}
            >
                <h2 style={{ marginBottom: "10px" }}>Add a Review</h2>

                <input
                    type="text"
                    name="title"
                    placeholder="Enter Title..."
                    value={formData.title}
                    onChange={handleChange}
                    style={{
                        display: "block",
                        width: "100%",
                        marginBottom: "10px",
                        padding: "8px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                    }}
                />

                <textarea
                    name="description"
                    placeholder="Enter Description..."
                    value={formData.description}
                    onChange={handleChange}
                    style={{
                        display: "block",
                        width: "100%",
                        marginBottom: "10px",
                        padding: "8px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                    }}
                />

                <select
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    style={{
                        display: "block",
                        width: "100%",
                        marginBottom: "10px",
                        padding: "8px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                    }}
                >
                    <option value="1">1 - Poor</option>
                    <option value="2">2 - Fair</option>
                    <option value="3">3 - Good</option>
                    <option value="4">4 - Very Good</option>
                    <option value="5">5 - Excellent</option>
                </select>

                <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                    <button
                        type="button"
                        onClick={onCancel}
                        style={{
                            padding: "8px 12px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            background: "#f5f5f5",
                            cursor: "pointer",
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        style={{
                            padding: "8px 12px",
                            border: "none",
                            borderRadius: "4px",
                            background: "#2e7effff",
                            color: "white",
                            cursor: "pointer",
                        }}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
