import { Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import About from './routes/about';
//
export default function App(){
    return(
    <div className="App">
        {/* <h1>Hello React Router v6</h1> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </div>
    )
}