import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="App">
        <Router>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/*' element={<Dashboard />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;