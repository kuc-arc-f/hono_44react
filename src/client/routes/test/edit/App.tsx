//import { Routes, Route, Link } from 'react-router-dom';
import {useState, useEffect}  from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Head from '../../../components/Head'
import CrudIndex from '../CrudIndex';
import CrudShow from '../CrudShow';

let pageItem: any = {};
let itemId = 0;
//
function Home() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const [updatetime, setUpdatetime] = useState<string>("");
    //
//    const id = searchParams.get('id') || "";
//console.log(id);
    //
    useEffect(() => {
        (async () => {
            const id = searchParams.get('id') || "";
            itemId = Number(id);
console.log(id);
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
                window.location.href = '/test';
            }
        } catch (e) {
            console.error(e);
        } 
    }
    //
    return (
    <div className="container mx-auto my-2 px-8 bg-white">
        <Head />
        <h1 className="text-4xl font-bold mt-2">Edit</h1>
        <p>ID: {pageItem.id}</p>
        <hr className="my-1" />
        

        <div className="mb-2">
            <label className="text-2xl block text-gray-700 font-bold mb-2">Title</label>
            <input type="text" id="title" name="title"
            className="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            placeholder="John Doe" required
            />
        </div> 
        <div className="mb-2">
            <label  className="text-2xl block text-gray-700 font-bold mb-2">Content</label>
            <textarea id="content" name="content"
            className="border border-gray-400 rounded-md px-3 py-2 w-full h-32 resize-none focus:outline-none focus:border-blue-500"
                placeholder="" defaultValue={pageItem.content}
            ></textarea>
        </div>        
        <hr className="my-1" />
        <span>{updatetime}</span>
        <button onClick={()=>deleteItem()} className="btn-red">delete</button>

    </div>

    )
    ;
}
export default Home;

/*
<pre>{pageItem.content}</pre>
<h1 className="text-4xl font-bold">TestShow</h1>
*/

