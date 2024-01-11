import {useState, useEffect}  from 'react';
import { Link } from 'react-router-dom';

import Head from '../components/Head'
import CrudCreate from './lib/todos/CrudCreate';

let pageItems: any[] = [];
//
function Page() {
  const [updatetime, setUpdatetime] = useState<string>("");
    //
    useEffect(() => {
      (async () => {
          getList();
      })()
    }, []);
  //
  const testProc = async function(){
    console.log("#testProc");
    const res = await fetch("/api/test1");
    const json = await res.json()
console.log(json); 
  }
    /**
     *
     * @param
     *
     * @return
     */
    const createTodo = async function() {
      try{
        const result = await CrudCreate.addItem();
console.log(result);
        if(result) {
          window.location.reload();
        }
      } catch (e) {
//          console.error(e);
      } 
  }  
  //
  const getList = async function (): Promise<any>
  {
      try{
          let items: any[] = [];
          const item = {
          }
//console.log(postItem); 
          const body: any = JSON.stringify(item);		
          const res = await fetch("/api/todos/get_list", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},      
            body: body
          });
          const json = await res.json()
          //console.log(json);   
          if (res.status !== 200) {
            console.error("error, status <> 200");
            throw new Error(await res.text());
          }
          //@ts-ignore
          pageItems = json.data;
          setUpdatetime(new Date().toString());
console.log(pageItems);
          return pageItems;
      } catch (e) {
          console.error(e);
          throw new Error("Error, getList");
      } 
  }   
  //
  return (
  <div>
    <Head />
    <h1>test1.tsx</h1>
    <hr className="my-1" />
    <div className="mb-2">
      <label className="text-2xl block text-gray-700 font-bold mb-2">Title</label>
      <input type="text" id="title" name="title"
      className="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
      placeholder="John Doe" required
      />
    </div>            
    <button onClick={()=>createTodo()} className="btn-purple ms-2" 
      >Create</button>
    <hr className="my-1" />
        {pageItems.map((item: any ,index: number) => {
        return (
        <div key={index}>
            <Link to={`/todos/show?id=${item.id}`}><h3 className="text-3xl font-bold">{item.title}</h3>
            </Link>
            <span>ID: {item.id}, {item.createdAt}</span>
            <hr />
        </div>
        )
        })}
  </div>
  );
}
export default Page;
/*
<div className="mb-2">
  <label  className="text-2xl block text-gray-700 font-bold mb-2">Content</label>
  <textarea id="content" name="content"
  className="border border-gray-400 rounded-md px-3 py-2 w-full h-16 resize-none focus:outline-none focus:border-blue-500"
      placeholder="" required
  ></textarea>
</div>
*/