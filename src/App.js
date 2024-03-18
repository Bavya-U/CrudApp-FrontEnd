
import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Adduser from './pages/Adduser';
import Alluser from './pages/Alluser';
import SingleUser from './pages/SingleUser';
import UpdateUser from './pages/UpdateUser';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/add" element={< Adduser/>} />
        <Route path="/all" element={<Alluser />} />
        <Route path="/:id" element={<SingleUser />} />
        <Route path="/update/:id" element={<UpdateUser />} />
      </Routes>
  </Router>
   
  );
}

export default App;
