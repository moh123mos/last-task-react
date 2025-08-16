import { useState } from "react";

const LiveTyping = () => {
  const [text, setText] = useState("");

  return (
    <div
      className="task-container"
      style={{
        color: "black",
        fontFamily: "Arial, sans-serif",
        maxWidth: "400px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
        Task 4: Live Typing
      </h2>
      <input
        type="text"
        value={text}
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          color: "#333",
          width: "100%",
          marginBottom: "15px",
          boxSizing: "border-box",
        }}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p
        style={{
          fontSize: "16px",
          color: "#555",
          marginBottom: "15px",
          textAlign: "center",
          padding: "10px",
          borderRadius: "5px",
          backgroundColor: "#e9ecef",
          wordBreak: "break-word",
        }}
      >
        You are typing: <span style={{ fontWeight: "bold" }}>{text}</span>
      </p>
      <div
        className="task-explanation"
        style={{
          fontSize: "14px",
          color: "#666",
          lineHeight: "1.5",
          backgroundColor: "#fff",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #eee",
        }}
      >
        <p>- The input value is stored in a state variable using `useState`.</p>
        <p>- The `onChange` event updates the state as the user types.</p>
      </div>
    </div>
  );
};

export default LiveTyping;
