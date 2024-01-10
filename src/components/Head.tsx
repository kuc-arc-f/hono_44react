//import { Routes, Route, Link } from 'react-router-dom';
import {Link } from 'react-router-dom';
//
function Page() {
    return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">&nbsp; [about]</Link>
        <Link to="/test1">&nbsp; [ Test1 ]</Link>
        <Link to="/todos">&nbsp; [ Todos ]</Link>
        <hr />
        {/*
        <h2>Home</h2>
        */}
    </div>
    );
}
export default Page;
/*
<Link to="/page1">&nbsp; [page1]</Link>
<Link to="/page2">&nbsp; [page2]</Link>
*/