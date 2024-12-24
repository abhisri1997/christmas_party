import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GuestProfile from './GuestProfile';
import './App.css';
import { guests } from './app.constant';


const App = () => {
  return (
    <div className="container">
      <Router>
        <nav className="guest-nav">
          <div className="guest-links">
            {guests.map(guest => (
              <Link
                key={guest.id}
                to={`/guest/${guest.name.toLowerCase()}`}
                className="guest-link"
              >
                {guest.name}
              </Link>
            ))}
          </div>
        </nav>

        <Routes>
          <Route path="/:name" element={<GuestProfile />} />
          <Route path="/" element={<h2>Select a guest to view their QR code</h2>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;