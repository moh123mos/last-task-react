import { useState } from 'react';

const ShowHideText = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div
      style={{
        maxWidth: 400,
        margin: '40px auto',
        padding: 24,
        borderRadius: 12,
        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
        background: '#f9f9fc',
        fontFamily: 'Segoe UI, Arial, sans-serif',
      }}
    >
      <h2 style={{ marginBottom: 20, color: '#2d3a4a', fontWeight: 600 }}>
        Task 6: Show/Hide Text
      </h2>
      <button
        style={{
          padding: '10px 22px',
          borderRadius: 8,
          border: 'none',
          outline: 'none',
          background: isVisible ? '#4f8cff' : '#ff6f61',
          color: '#fff',
          fontWeight: 500,
          fontSize: 16,
          cursor: 'pointer',
          transition: 'background 0.2s',
          marginBottom: 18,
        }}
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? 'Hide' : 'Show'} Text
      </button>
      {isVisible && (
        <p
          style={{
            background: '#fff',
            padding: '12px 16px',
            borderRadius: 6,
            color: '#333',
            fontSize: 15,
            marginBottom: 16,
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          }}
        >
          This text can be hidden.
        </p>
      )}
      <div
        style={{
          background: '#eef2fa',
          borderRadius: 6,
          padding: '10px 14px',
          fontSize: 14,
          color: '#4a5a6a',
        }}
      >
        <p>- A boolean state variable tracks visibility.</p>
        <p>- Conditional rendering is used to show or hide the element.</p>
      </div>
    </div>
  );
};

export default ShowHideText;
