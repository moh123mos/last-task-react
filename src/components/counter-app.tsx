import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
      padding: '40px',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
      borderRadius: '16px',
      boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
      maxWidth: '320px',
      margin: '40px auto'
      }}
    >
      <button
      onClick={() => setCount((count) => count + 1)}
      style={{
        fontSize: '1.2rem',
        padding: '12px 32px',
        borderRadius: '8px',
        border: 'none',
        outline: 'none',
        // background: '#4f8cff',
        color: '#fff',
        cursor: 'pointer',
        boxShadow: '0 2px 8px rgba(79,140,255,0.15)',
        transition: 'background 0.2s'
      }}
      >
      count is {count}
      </button>
    </div>
  );
}
