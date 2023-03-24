
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context-api/context";
import Card from "./Card";

const FormList = () => {

  const {upload} = useContext(Context);
    
  return (
    <>
      <div className="formList">
        <div className="formHeader d_flex">
          <div className="listBtn">
            <Link to='' >All Submission</Link>
            <Link to=''>Favourite Submission</Link>
          </div>

          <div className="searchBox">
            <div className="search">
              <i className="fa fa-search"></i>
              <input type="text" placeholder="Search" />
            </div>
            <div className="selection">
            <select>             
              <option>Newest</option>
              <option>Oldest</option>                           
            </select>
            </div>
           
          </div>
          
        </div>
        <div className="cards">
        {upload.map((obj)=>{
            return (
              <Card obj={obj} />
              )
            })}
            </div>
         
      </div>
    </>
  );
};

export default FormList;

