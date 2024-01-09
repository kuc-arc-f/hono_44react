import { Routes, Route } from 'react-router-dom';
import Home from './client/home';
import About from './client/about';
//
export default function App(){
    return(
    <div className="App">src/App.tsx
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
    )
}