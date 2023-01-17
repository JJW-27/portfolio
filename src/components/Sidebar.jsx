import { slide as Sidebar } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import '../css/Sidebar.css';

export default props => {
  return (
    <div className="sidebar">
      <Sidebar>
        <Link to="/timeline">My coding journey</Link>
        <a className="sidebar-option" href="/salads">
          Option 2
        </a>
        <a className="sidebar-option" href="/pizzas">
          Option 3
        </a>
        <a className="sidebar-option" href="/desserts">
          Option 4
        </a>
      </Sidebar>
    </div>
  );
};