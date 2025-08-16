import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to React Exercises</h1>
        <p>A collection of React components demonstrating various concepts and patterns</p>
      </div>
      
      <div className="exercises-grid">
        <div className="exercise-card">
          <h3>🔢 Task 1: Hello Name</h3>
          <p>Learn how to store and display variables in JSX</p>
        </div>
        
        <div className="exercise-card">
          <h3>🔢 Task 2: Counter App</h3>
          <p>Understand useState hook for managing component state</p>
        </div>
        
        <div className="exercise-card">
          <h3>🎨 Task 3: Color Changer</h3>
          <p>Practice state management with dynamic styling</p>
        </div>
        
        <div className="exercise-card">
          <h3>⌨️ Task 4: Live Typing</h3>
          <p>Handle form inputs and real-time updates</p>
        </div>
        
        <div className="exercise-card">
          <h3>📝 Task 5: Todo List</h3>
          <p>Work with arrays and adding/removing items</p>
        </div>
        
        <div className="exercise-card">
          <h3>👁️ Task 6: Show/Hide Text</h3>
          <p>Learn conditional rendering in React</p>
        </div>
        
        <div className="exercise-card">
          <h3>📋 Task 7: Dynamic List</h3>
          <p>Master array mapping and key props</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
