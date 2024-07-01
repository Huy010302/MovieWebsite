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

function App() {
  return <>
    <Header />
    <Banner />
    <Schedule />
    <Trend />
    <Blog />
    {/* <Main /> */}
    <Footer />
  </>
}

export default App;
