import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home';
import Booking from './pages/booking/booking';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
