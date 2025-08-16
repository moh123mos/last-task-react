const DynamicList = () => {
  const fruits = [
    { name: 'Apple', price: '$1' },
    { name: 'Banana', price: '$0.5' },
    { name: 'Cherry', price: '$2' },
  ];

  const containerStyle: React.CSSProperties = {
    background: '#222',
    color: '#e0e0e0',
    padding: '2rem',
    borderRadius: '10px',
    fontFamily: 'Fira Mono, monospace',
    maxWidth: '400px',
    margin: '2rem auto',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    overflow: 'hidden',
  };

  const listStyle: React.CSSProperties = {
    background: '#1a1a1a',
    padding: '1rem',
    borderRadius: '8px',
    fontSize: '1rem',
    margin: '1rem 0',
    border: '1px solid #333',
    overflowX: 'auto',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-all',
    maxWidth: '100%',
    boxSizing: 'border-box',
  };

  const itemStyle: React.CSSProperties = {
    padding: '0.3rem 0',
    borderBottom: '1px dashed #444',
    color: '#80ffea',
    fontWeight: 500,
    wordBreak: 'break-word',
  };

  const explanationStyle: React.CSSProperties = {
    fontSize: '0.95rem',
    color: '#b0b0b0',
    marginTop: '1rem',
    background: '#181818',
    padding: '0.7rem',
    borderRadius: '6px',
    border: '1px solid #333',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: '#ffcb6b', marginBottom: '1rem' }}>
        Task 7: Dynamic List Rendering
      </h2>
      <pre style={listStyle}>
        <code>
          {fruits.map((fruit, index) => (
            <div key={index} style={itemStyle}>
              {`{ name: '${fruit.name}', price: '${fruit.price}' }`}
            </div>
          ))}
        </code>
      </pre>
      <div style={explanationStyle}>
        <p>- The <code>map</code> function is used to loop through the array in JSX.</p>
        <p>- Each item has a unique <code>key</code> to help React identify changes.</p>
      </div>
    </div>
  );
};

export default DynamicList;
