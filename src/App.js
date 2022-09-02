import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import HomePage from './components/HomePage';
import Chuck from './components/Chuck';
import Swapi from './components/Swapi';
import Search from './components/Search';
import { Container } from '@mui/system';

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/chuck' element={<Chuck />} />
        <Route path='/swapi' element={<Swapi />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </Container>

  );
}

export default App;
