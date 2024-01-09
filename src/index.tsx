import { Hono } from 'hono'
import { renderToString } from 'react-dom/server';
//
const app = new Hono()

//
import Test1 from './pages/test/App';
//
app.get('/*', async (c) => { 
//  return c.text("hello");
  return c.html(renderToString(Test1([])));
});
/*
app.get('/test1', async (c) => { 
  return c.html(renderToString(Test1([])));
});
*/

export default app
