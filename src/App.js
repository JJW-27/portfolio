import { Route, Routes } from 'react-router-dom';
import './css/App.css';
import Goat from './components/Goat';
import Sidebar from './components/Sidebar';
import Timeline from './components/Timeline';
import SimpsonsMatchingGame from './components/Simpsons_Matching_Game/SimpsonsMatchingGame';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/temp" element={<LandingPage />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </div>
  );
}

export default App;
