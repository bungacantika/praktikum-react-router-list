import { Link, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Karya from './pages/karya';
import Contact from './pages/contact';
import Gallery from './pages/gallery';
import Agenda from './pages/agenda';
import Keranjang from './pages/keranjang';
import './App.css';

function App() {
  return (
    <div className="justify-center p-6 w-screen h-screen bg-white-200 overflow-y-auto">
      <div className="max-w-full">
        <div className="justify-center mb-4 text-xs text-gray-600 font-semibold upercase tracking-wide">
          <Link
            className="mx-2 px-4 py-2 rounded-x1 hover:bg-gray-100 transition-all ease-in-out"
            to="/home">
            HOME
          </Link>
          <Link
            className="mx-2 px-4 py-2 rounded-x1 hover:bg-gray-100 transition-all ease-in-out"
            to="/about">
            ABOUT
          </Link>
          <Link
            className="mx-2 px-4 py-2 rounded-x1 hover:bg-gray-100 transition-all ease-in-out"
            to="/karya">
            KARYA
          </Link>
          <Link
            className="mx-2 px-4 py-2 rounded-x1 hover:bg-gray-100 transition-all ease-in-out"
            to="/contact">
            CONTACT
          </Link>
          <Link
            className="mx-2 px-4 py-2 rounded-x1 hover:bg-gray-100 transition-all ease-in-out"
            to="/gallery">
            GALLERY
          </Link>
          <Link
            className="mx-2 px-4 py-2 rounded-x1 hover:bg-gray-100 transition-all ease-in-out"
            to="/agenda">
            AGENDA
          </Link>
          <Link
            className="mx-2 px-4 py-2 rounded-x1 hover:bg-gray-100 transition-all ease-in-out"
            to="/keranjang">
            KERANJANG
          </Link>
        </div>

        <div className="p-6 w-full bg-white rounded-x1 shadow-lg">
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/karya" element={<Karya />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route path="/agenda" element={<Agenda />}></Route>
            <Route path="/keranjang" element={<Keranjang />}></Route>

          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
