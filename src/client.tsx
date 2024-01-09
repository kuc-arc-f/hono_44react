//import Page1 from './pages/Page1';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
//import App from './client/App';

console.log("#client.ts");
//Page1.test1();

function App(){
    return(
        <div>
            <h1>App.tsx</h1>
            <hr />
            <p>hello, 123</p>

        </div>
    )
}
//root
ReactDOM.createRoot(document.getElementById('root')!).render(
    <div>
        <App />
    </div>
)
