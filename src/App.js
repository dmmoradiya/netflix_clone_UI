import './App.css';
import Login from "./components/Login"

import { HashRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from "./components/Home";
import NetflixLogo from "./components/NetflixLogo"
import Header from './components/Header';
import Latest from './components/Latest';
import "./index.css";
import SinglePage from './components/SinglePage';
<meta name="google-site-verification" content="lhJpHwTC4LCvQ29bGAL3DO_8Hg8jV_VT1cqyVNTsGV0" />

function App() {
  return (
    <div className="App bg-black" >

      <HashRouter basename='/'>
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/home' exact element={ <>    { /*<NetflixLogo />  */} { <Home /> }  </>} />
          <Route path='/:id' exact element ={<SinglePage />} />
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;

