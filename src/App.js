import { useState } from 'react';
import './App.css';
import About from './components/About';
import Category from './components/Category';
import Comments from './components/Comments';
import Feature from './components/Feature';
import Footer from './components/Footer';
// import GoldPearls from './components/GoldPearls';
import Header from './components/Header';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Story from './components/Story'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Contact from './components/Contact';
import Search from './components/Search';


function App() {

  const [content,setContent]= useState("");
  const [display, setDisplay] = useState(true);

  return (
    <>
    <Router>
      <Navbar setContent={setContent} content={content} display={display} setDisplay={setDisplay}/>
      <Routes>
        <Route exact path='/' element={
          <>
            <Header/>
            <Category/>
            <Feature/>
            <Comments/>
          </>
        }/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/load' element={<Loading/>}/>
        {/* <Route exact path='/gold' element={
          <>
          <Header/>
          <Category/>
          <Feature/>
          <Comments/>
          </>
        }/> */}
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/story' element={<Story/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/search' element={<Search/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
