import { useState } from "react";

const ColorChanger = () => {
  const colors = ["#8A2BE2", "#4682B4", "#008080", "#FF6347", "#2E8B57"];
  const [color, setColor] = useState(colors[0]);

  const [randomIndex, setRandomIndex] = useState(0);
  const changeColor = () => {
    setRandomIndex(Math.floor(Math.random() * colors.length));
    setColor(colors[randomIndex]);
  };

  return (
    <div
      className="task-container"
      style={{
        backgroundColor: color,
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        color: "#fff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        transition: "background-color 0.5s ease",
      }}
    >
      <h2 style={{ marginBottom: "20px", fontSize: "24px" }}>
        Task 3: Color Changer
      </h2>
      <button
        onClick={changeColor}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          border: "2px solid #fff",
          outline: "none",
          borderRadius: "5px",
          cursor: "pointer",
          // backgroundColor: '#fff !important',
          background:
            "linear-gradient(to right, " +
            color +
            "," +
            colors[randomIndex] +
            ")",
          color: "#fff",
          transition: "color 0.3s ease, background-color 0.3s ease",
        }}
        onMouseOver={(e) => (
          (e.currentTarget.style.backgroundColor = color),
          (e.currentTarget.style.color = "#fff")
        )}
        onMouseOut={(e) => (
          (e.currentTarget.style.backgroundColor = "#fff"),
          (e.currentTarget.style.color = "#fff")
        )}
      >
        Change Color
      </button>
      <div
        className="task-explanation"
        style={{
          marginTop: "20px",
          fontSize: "14px",
          lineHeight: "1.6",
        }}
      >
        <p>
          - The current color is stored in a state variable using `useState`.
        </p>
        <p>- A random color is selected from a predefined array.</p>
      </div>
    </div>
  );
};

export default ColorChanger;
