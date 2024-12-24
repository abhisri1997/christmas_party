import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GuestProfile from './GuestProfile';
import './App.css';


const App = () => {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/:name" element={<GuestProfile />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;