import logo from './logo.svg';
import './App.css';
import Header from './components/layouts/header';
import Footer from './components/layouts/footer';
import Home from './components/pages/home/home';
import Home1 from './components/pages/home/home1';
import Home2 from './components/pages/home/home2';
import Home3 from './components/pages/home/home3';
import Home4 from './components/pages/home/home4';
import Home5 from './components/pages/home/home5';
import Home6 from './components/pages/home/home6';
import Home7 from './components/pages/home/home7';
import Home8 from './components/pages/home/home8';
import Home25 from './components/pages/home/home25';
import Index from './components/pages/home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div class="main-wrapper">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Index/>}/>
        </Routes>
        <Footer></Footer>
      <div class="mouse-cursor cursor-outer"></div>
<div class="mouse-cursor cursor-inner"></div>
      </div>
      <div class="progress-wrap active-progress">
<svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
<path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{transition: 'stroke-dashoffset 10ms linear 0s', strokeDasharray: '307.919px, 307.919px', strokeDashoffset: '228.265px'}}></path>
</svg>
</div>
    </div>
  );
}

export default App;
