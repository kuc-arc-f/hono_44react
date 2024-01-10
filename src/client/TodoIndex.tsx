import {useState, useEffect}  from 'react';
import { Link } from 'react-router-dom';

import Head from '../components/Head'

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
        {pageItems.map((item: any ,index: number) => {
        return (
        <div key={index}>
            <Link to={`/test/show?id=${item.id}`}><h3 className="text-3xl font-bold">{item.title}</h3>
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
    <p>Test-page</p>
    <hr />
    <button onClick={()=>testProc()}>[ Test ]</button>
            <Link to={`/test/edit?id=${item.id}`}><button className="btn-outline-purple">edit</button>
            </Link><br />
*/