import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<Home></Home>}></Route>
        <Route path="/client" element={<Home></Home>}></Route>
        <Route path="/service" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
