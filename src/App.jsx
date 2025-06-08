import { HashRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage.jsx';
//import Booking from './Booking.jsx';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/MainPage" element={<MainPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;