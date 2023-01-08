import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import Sidebar from './components/Sidebar';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="App">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </div>
  );
}

export default App;
