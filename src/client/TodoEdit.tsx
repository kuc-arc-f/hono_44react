import {useState, useEffect}  from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Head from '../components/Head'
import CrudCreate from './lib/todos/CrudCreate';
import CrudShow from './lib/todos/CrudShow';

let pageItem: any = {};
let itemId = 0;
let pageItems: any[] = [];
let todoTitle = "";
let todoContent = "";
//
function Page() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [updatetime, setUpdatetime] = useState<string>("");
   //
  useEffect(() => {
    (async () => {
      const id = searchParams.get('id') || "";
      itemId = Number(id);
//console.log(id);
      getItem(Number(itemId));
    })()
  }, []);  
  /**
   *
   * @param
   *
   * @return
   */
  const getItem = async function(id: number) {
    try{
          const item = await CrudShow.get(id);
          pageItem = item;
          todoTitle = item.title;
          todoContent = item.content;
console.log(pageItem);
        setUpdatetime(new Date().toString());
    } catch (e) {
        console.error(e);
    } 
  }
    /**
     *
     * @param
     *
     * @return
     */
    const deleteItem = async function() {
      try{
          const result = await CrudShow.delete(itemId);
          if(result) {
              //@ts-ignore
              window.location.href = '/todos';
          }
      } catch (e) {
          console.error(e);
      } 
  } 
    /**
     *
     * @param
     *
     * @return
     */
    const update = async function() {
      try{
        const result = await CrudShow.update(itemId);
        if(result) {
          //@ts-ignore
          window.location.href = '/todos';
        }
      } catch (e) {
          console.error(e);
      } 
  }   
  //
  return (
    <div className="container mx-auto my-2 px-8 bg-white">
        <Head />
        <h1 className="text-4xl font-bold">Edit</h1>
        <p>ID: {pageItem.id}</p>
        <hr className="my-1" />
        <div className="mb-2">
            <label className="text-2xl block text-gray-700 font-bold mb-2">Title</label>
            <input type="text" id="title" name="title"
            className="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            placeholder="John Doe" defaultValue={todoTitle}
            />
        </div>         
        <hr className="my-2" />
        <button onClick={()=>update()} className="btn-purple">Save</button>
        <hr className="my-2" />
        <button onClick={()=>deleteItem()} className="btn-red">delete</button>
        <hr className="my-2" />
    </div>
    );
}
export default Page;
/*
*/