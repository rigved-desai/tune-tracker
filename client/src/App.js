import './App.css';
import HomePage from './components/HomePage';
import { Route, Routes } from 'react-router-dom';
import SongPage from './components/SongPage';

function App() {

  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/:songID' element={<SongPage />} />
      </Routes>
    </>
  );
}

export default App;
