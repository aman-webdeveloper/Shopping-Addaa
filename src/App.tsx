import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { SubcategoryPage } from './components/SubcategoryPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:slug" element={<SubcategoryPage />} />
      </Routes>
    </Router>
  );
}