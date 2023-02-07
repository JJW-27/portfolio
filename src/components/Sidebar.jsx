import { slide as Sidebar } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import '../css/Sidebar.css';

export default props => {
  return (
    <div className="sidebar">
      <Sidebar>
        <Link className="sidebar-option" to="/">
          About me
        </Link>
        <Link className="sidebar-option" to="/timeline">
          My coding journey
        </Link>
      </Sidebar>
    </div>
  );
};
