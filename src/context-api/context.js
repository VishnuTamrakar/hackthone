import { createContext, useEffect, useState } from "react";

export const Context = createContext();

const NoteContext = ({ children }) => {
  const [upload, setUpload] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("users");
    if (arr) {
      let obj = JSON.parse(arr);
      setUpload(obj);
    }
  }, []);

  const uploadData = (taskObj) => {
    let tempList = upload;
    tempList.push(taskObj);
    localStorage.setItem("users", JSON.stringify(tempList));
    setUpload(tempList);
  };

  const deleteData = (index) => {
    let tempList = upload;
    tempList.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(tempList));
    setUpload(tempList);
  };
  const updateListArray = (obj, index) => {
    let tempList = upload;
    console.log("tempList", tempList);
    console.log("obj", obj);
    tempList[index] = obj;
    console.log("tempList", tempList);
    localStorage.setItem("users", JSON.stringify(tempList));
    setUpload(tempList);
  };

  const updateData = (obj, index) => {
    updateListArray(obj, index);
  };

  // const updateOrder = (obj) => {
  //   localStorage.setItem("users", JSON.stringify(obj));
  //   setUpload(obj);
  // }
  return (
    <Context.Provider value={{ uploadData, upload, deleteData, updateData }}>
      {children}
    </Context.Provider>
  );
};

export default NoteContext;
