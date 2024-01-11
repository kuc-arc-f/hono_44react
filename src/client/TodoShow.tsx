import {useState, useEffect}  from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Head from '../components/Head'
import CrudCreate from './lib/todos/CrudCreate';
import CrudShow from './lib/todos/CrudShow';

let pageItem: any = {};
let itemId = 0;
let pageItems: any[] = [];
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
  //
  return (
    <div className="container mx-auto my-2 px-8 bg-white">
        <Head />
        <h1 className="text-4xl font-bold">Title: {pageItem.title}</h1>
        <p>ID: {pageItem.id}</p>
        <hr className="my-1" />
        <button onClick={()=>deleteItem()} className="btn-red">delete</button>
        <hr className="my-1" />
    </div>
    );
}
export default Page;
/*
*/