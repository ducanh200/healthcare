import logo from './logo.svg';
import './App.css';
import Header from './components/layouts/header';
import Footer from './components/layouts/footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/home';

function App() {
  return (
    <div className="App">
      <div class="main-wrapper">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>}/>
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
