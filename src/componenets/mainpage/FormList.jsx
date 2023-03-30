import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../context-api/context";
import Card from "./Card";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const FormList = () => {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const { upload } = useContext(Context);
  const [data, setData] = useState(upload)
  const noFav = data.filter((user) => user.favIcon === true).length === 0
  useEffect(() => {
    setData(upload)
  }, [upload])
  
  function handleSort(e){
    let newArray = [...upload]
    if(e.target.value === 1){
      // descending order -> means newest first
      newArray.sort((a, b) => b.id - a.id);
    }else{
      // asceding order -> oldest first
      newArray.sort((a, b) => a.id - b.id);
    }
    setData(newArray);
  }
  return (
    <>
      <div className="formList">
        <div className="formHeader d_flex">
          <div className="listBtn">
            <Tabs
              value={activeTab}
              onChange={(event, value) => setActiveTab(value)}
            >
              <Tab label="All Submissions" />
              <Tab label="Favorites" />
            </Tabs>
          </div>

          <div className="searchBox">
            <div className="search">
              <i className="fa fa-search"></i>
              <input
                type="text"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="selection">
              <select onChange={handleSort}>
                <option value={1}>Newest</option>
                <option value={2}>Oldest</option>
              </select>
            </div>
          </div>
        </div>
        {/* All Submission  */}
        {activeTab === 0 && (
          <div className={`cards ${data.length === 0 ? "justify-center" : ""}`}>
            {data
              .filter((user) => user.title.toLowerCase().includes(search))
              .map((obj, index) => {
                return (
                  <Link to={`/${index}`}>
                    <Card key={index} obj={obj} />
                  </Link>
                );
              })}
            {data.length === 0 && <div>No Data Available</div>}
          </div>
        )}
        {/* Favourite list  */}
        {activeTab === 1 && (
          <div className={`cards ${noFav ? "justify-center" : ""}`}>
            {data
              .filter((user) => user.title.toLowerCase().includes(search))
              // eslint-disable-next-line array-callback-return
              .map((obj, index) => {
                
                if (obj.favIcon) {
                  return (
                    <Link to={`/${index}`}>
                      <Card key={index} obj={obj} />
                    </Link>
                  );
                }
              })}
            {noFav && <div>No Favorite</div>}
          </div>
        )}
      </div>
    </>
  );
};

export default FormList;
