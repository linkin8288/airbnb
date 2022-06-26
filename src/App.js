import './App.css';
import Home from './Components/Home/Home'
import Header from './Components/Header/Header';
import SearchPage from './Components/SearchPage/SearchPage';
import Footer from './Components/Footer/Footer';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router >
        <Header />
        <Home />
        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
