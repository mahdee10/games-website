import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { TranslationProvider } from './context/translation';
import Navbar from './components/header/navbar';
import TicTac from './pages/games/TicTac';
import MinBara from './pages/games/MinBara';
function App() {
  return (
    <TranslationProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home></Home>} />
          {/* <Route path="/games"> */}
            <Route path="tictac" exact element={<TicTac></TicTac>} />
            <Route path="minbara" exact element={<MinBara></MinBara>} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </TranslationProvider>
  );
}

export default App;
