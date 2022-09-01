import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import HomePage from './components/HomePage';
import Chuck from './components/Chuck';
import Swapi from './components/Swapi';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/chuck' element={<Chuck />} />
        <Route path='/swapi' element={<Swapi />} />
      </Routes>


    </div>
  );
}

export default App;
