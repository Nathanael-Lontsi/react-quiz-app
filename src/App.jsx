import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Welcome from './Pages/Welcome/Welcome';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}
