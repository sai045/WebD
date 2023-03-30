import './App.css';
import Home from './Components/HomePage/Home';
import QuestionPage from './Components/QuestionPage/QuestionPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EndPage from './Components/EndPage/EndPage';
import { useState } from 'react'
import HighScore from './Components/HighScore/HighScore';

function App() {
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/question" element={<QuestionPage score={score} setScore={setScore} />} />
          <Route path="/endpage" element={<EndPage score={score} setScore={setScore} />} />
          <Route path="/highScore" element={<HighScore />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;