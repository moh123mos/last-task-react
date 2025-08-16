import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import ColorChanger from './components/color-changer';
import Counter from './components/counter-app';
import DynamicList from './components/dynamic-list';
import Hello from './components/hello-there';
import LiveTyping from './components/live-typing';
import ShowHideText from './components/show-hide-text';
import TodoList from './components/todo-list';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/hello"
              element={
                <div className="page-container">
                  <Hello />
                </div>
              }
            />
            <Route
              path="/counter"
              element={
                <div className="page-container">
                  <Counter />
                </div>
              }
            />
            <Route
              path="/color-changer"
              element={
                <div className="page-container">
                  <ColorChanger />
                </div>
              }
            />
            <Route
              path="/live-typing"
              element={
                <div className="page-container">
                  <LiveTyping />
                </div>
              }
            />
            <Route
              path="/todo-list"
              element={
                <div className="page-container">
                  <TodoList />
                </div>
              }
            />
            <Route
              path="/show-hide"
              element={
                <div className="page-container">
                  <ShowHideText />
                </div>
              }
            />
            <Route
              path="/dynamic-list"
              element={
                <div className="page-container">
                  <DynamicList />
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
