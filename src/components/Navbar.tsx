import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/hello', label: 'Hello Name', icon: '👋' },
    { path: '/counter', label: 'Counter', icon: '🔢' },
    { path: '/color-changer', label: 'Color Changer', icon: '🎨' },
    { path: '/live-typing', label: 'Live Typing', icon: '⌨️' },
    { path: '/todo-list', label: 'Todo List', icon: '📝' },
    { path: '/show-hide', label: 'Show/Hide', icon: '👁️' },
    { path: '/dynamic-list', label: 'Dynamic List', icon: '📋' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>React Exercises</h2>
      </div>
      <div className="navbar-menu">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`navbar-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <span className="navbar-icon">{item.icon}</span>
            <span className="navbar-label">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
