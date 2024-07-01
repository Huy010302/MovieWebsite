// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// Import Swiper styles
import 'swiper/css';


import './App.css';
import Banner from './pages/Banner';
import Header from './pages/Header';
import Main from './pages/Main';
import Footer from './pages/Footer';
import Schedule from './pages/Schedule';
import Trend from './pages/Trend';
import Blog from './pages/Blog';
import BackToTopBtn from './components/BackToTopBtn';
import { useEffect, useState } from 'react';

function App() {
  const [scroll, setScroll] = useState();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener('scroll', () => {
        setScroll(window.scrollY)
      });
    };
  }, [scroll])
  return <>
    <Header scroll={scroll} />
    <Banner />
    <Schedule />
    <Trend />
    <Blog />
    {/* <Main /> */}
    <Footer />
    <BackToTopBtn scroll={scroll} />
  </>
}

export default App;
