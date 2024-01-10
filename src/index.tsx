import { Hono } from 'hono'
import type { Database } from '@cloudflare/d1'
import { renderToString } from 'react-dom/server';
//
interface Env {
  DB: Database
}
//
const app = new Hono()
//
import todosRouter from './routes/todo';
//
import App from './pages/App';
/*
API
*/
app.get('/api/test1', async (c) => { 
  const resulte = {ret:"OK", msg:"" };
  return c.json(resulte);
});
app.get('/api/test2', async (c) => {
  const result = await c.env.DB.prepare(`SELECT * FROM todos ORDER BY id DESC`).all();
console.log(result.results);
  return c.html(
    renderToString(
    <div>
      <h1>Hello!</h1>
      {JSON.stringify(result.results)}
    </div>
    )
  )
});
app.post('/api/test/create', async (c) => { 
  const body = await c.req.json();
  const resulte = await todosRouter.create(body, c.env.DB);
  return c.json(resulte);
});

//
app.get('/*', async (c) => { 
  return c.html(renderToString(App([])));
});

export default app
