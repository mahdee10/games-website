import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { TranslationProvider } from './context/translation';
import Navbar from './components/header/navbar';
function App() {
  return (
    <TranslationProvider>
    <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home></Home>} />
            {/* <Route path="/watchList" element={<WatchList />} />
            <Route path="/myactors" element={<MyActors />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="/genre/:id" element={<Genre />} />
            <Route path="/actor/:id" element={<Actor />} />
            <Route path="/movies" element={<Movies/>} /> */}
          </Routes>
        </BrowserRouter>
        </TranslationProvider>
  );
}

export default App;
