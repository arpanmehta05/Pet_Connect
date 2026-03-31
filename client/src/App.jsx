import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import BuyAdopt from './pages/BuyAdopt';
import RentAFriend from './pages/RentAFriend';
import MeetAVet from './pages/MeetAVet';
import VetBooking from './pages/VetBooking';
import StrayFeed from './pages/StrayFeed';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/buy-adopt" element={<BuyAdopt />} />
        <Route path="/rent-a-friend" element={<RentAFriend />} />
        <Route path="/meet-a-vet" element={<MeetAVet />} />
        <Route path="/vet/book/:id" element={<VetBooking />} />
        <Route path="/stray-feed" element={<StrayFeed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  );
}

export default App;
