import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App';

console.log("#client.ts");
/*
function App(){
    return(
        <div>
            <h1>App.tsx</h1>
            <hr />
            <p>hello, 123</p>

        </div>
    )
}
*/
//root
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  )