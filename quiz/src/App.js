import logo from './logo.svg';
import './App.css';
import Home from './Components/HomePage/Home';
import QuestionPage from './Components/QuestionPage/QuestionPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
<Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/question" element={<QuestionPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
