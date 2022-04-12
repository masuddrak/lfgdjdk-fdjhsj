import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './components/Slider/Slider';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Best from './components/Best/Best';
import Footer from './components/Footer/Footer';
import Details from './components/Details/Details';
import TopRat from './components/TopRat/TopRat';
import Reviews from './components/Reviews/Reviews';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div className='app mx-0'>
      <div className="container  main-container">
      <Header></Header>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/best' element={<Best></Best>}></Route>
        <Route path='/details' element={<Details></Details>}></Route>
        <Route path='/toprat' element={<TopRat></TopRat>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
    </div>
  );
}

export default App;
