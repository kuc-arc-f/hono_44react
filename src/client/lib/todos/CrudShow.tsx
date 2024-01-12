import {useState, useEffect}  from 'react';
import { Link } from 'react-router-dom';
import HttpCommon from '../HttpCommon';
import LibConfig  from '../LibConfig';
//
//
const CrudShow = {
  /**
   *
   * @param
   *
   * @return
   */
  get :async function (id: number): Promise<any>
  {
      try{
          const postItem = {
              id: id,
          }
console.log(postItem); 
          const json = await HttpCommon.post(postItem, "/api/todos/get");
//console.log(json);      
          let items: any[] = [];
          items = json.data;
//console.log(items);
          return items;
      } catch (e) {
          console.error(e);
          throw new Error("Error, get");
      } 
  },  
 /**
 * delete:
 * @param key: any
 *
 * @return
 */   
  delete : async function(id: number) : Promise<any>
  {
      try{
          let ret = false;
          const item = {
              id: id
          }
      //console.log(item);
          const json = await HttpCommon.post(item, '/api/todos/delete');
      //console.log(json);
          if (json.ret ===  LibConfig.OK_CODE) {
              ret = true;
          }      
          return ret;      
      } catch (e) {
          console.error(e);
      }
  },
  /**
   *
   * @param
   *
   * @return
   */
  update : async function(id: number) : Promise<any>
  {
      try{
          let ret = false;
          let titleValue = "";
          //@ts-ignore
          const title = document.querySelector("#title") as HTMLInputElement;
          //@ts-ignore
          if(title) {titleValue = title.value};
          const item = {
            id:id,
            title: titleValue,
            content: "",
            completed: 0,
            userId: 0,
          };
          const json = await HttpCommon.post(item, '/api/todos/update');
console.log(json);
          if (json.ret ===  LibConfig.OK_CODE) {
              ret = true;
          }
          return ret;
      } catch (e) {
          console.error("Error, update");
          console.error(e);
          throw new Error('Error , update');
      }
  },           
}

export default CrudShow;
