import { createContext, useEffect, useState } from "react";



   export const Context = createContext();

 const NoteContext =({children})=>{
    const [upload,setUpload]=useState([]);

    useEffect(()=>{
        let arr = localStorage.getItem('formList');
        if(arr){
            let obj = JSON.parse(arr);
            setUpload(obj)
        }
    },[])


    const uploadData=(taskObj)=>{
        let tempList = upload;
        tempList.push(taskObj);
        localStorage.setItem('formList', JSON.stringify(tempList));
        setUpload(tempList);
  }
    return (
        <Context.Provider value={{uploadData,upload}}>
                {children}
        </Context.Provider>
    )
}


  

  export default NoteContext