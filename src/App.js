import { BrowserRouter as Router, Route, Outlet} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/pages/LandingPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar /> 
        <Outlet>
          <Route path="/" element={<LandingPage />} />
        </Outlet>
      </Router>
    </div>
  );
}

export default App;
