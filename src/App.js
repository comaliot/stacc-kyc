import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
