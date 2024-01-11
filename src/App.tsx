import { Routes, Route } from 'react-router-dom';
//
import Home from './client/home';
import About from './client/about';
import Test1 from './client/test1';
import TodoIndex from './client/TodoIndex';
import TodoShow from './client/TodoShow';
//
export default function App(){
    return(
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/test1" element={<Test1 />} />
        <Route path="/todos" element={<TodoIndex />} />
        <Route path="/todos/show" element={<TodoShow />} />
      </Routes>
    </div>
    )
}
/*
<div className="App">src/App.tsx
*/