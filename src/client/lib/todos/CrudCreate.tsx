import {useState, useEffect}  from 'react';
import { Link } from 'react-router-dom';
import HttpCommon from '../HttpCommon';
import LibConfig  from '../LibConfig';

const CrudCreate = {
  /* */
    /**
     *
     * @param
     *
     * @return
     */
    addItem : async function() : Promise<any>
    {
      try{
        let ret = false;
        let titleValue = "";
        const title = document.querySelector("#title") as HTMLInputElement;
        if(title) {titleValue = title?.value};
        const item = {
          title: titleValue,
          content: "",
          completed: 0,
          userId: 0,
        };
        const json = await HttpCommon.post(item, '/api/todos/create');
console.log(json);
        if (json.ret ===  LibConfig.OK_CODE) {
            ret = true;
        }
        return ret;
      } catch (e) {
          console.error("Error, addItem");
          console.error(e);
          throw new Error('Error , addItem');
      }
    },
}
export default CrudCreate;