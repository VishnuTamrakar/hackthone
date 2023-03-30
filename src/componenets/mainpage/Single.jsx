import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../../context-api/context";

const Single = () => {
  const { upload, deleteData, updateData } = useContext(Context);
  let { id } = useParams();
  let formData = upload[id];
  let [favIcon, setFavIcon] = useState(formData?.favIcon ? true: false);
  let navigate = useNavigate();
  function handleEdit() {
    navigate(`/edit/${id}`);
  }

  function handleDelete() {
    deleteData(id);
    navigate("/");
  }

  function handleFav() {
    favIcon = !favIcon
    setFavIcon(favIcon)
    formData.favIcon = favIcon
    updateData(formData, id)
    // localStorage.setItem("users", JSON.stringify(tempList));
    console.log('favIcon', favIcon);
  }

  return (
    <>
      <>
        <div className="singlePage">
          <div className="container">
            <div className="heroSection d_flex">
              <div className="left ">
                <div className="image  flex">
                  <img src={formData.image} alt="" />
                  <h1>{formData.title}</h1>
                </div>
                <p>{formData.sammary}</p>
                <div className="favSection">
                  <div onClick={handleFav} className="favIcon">
                    {favIcon ? (
                      <i className="pointer fa-solid fa-star"></i>
                    ) : (
                      <i className="pointer fa-regular fa-star"></i>
                    )}
                  </div>
                  <div className="calender">
                    <span>
                      <i className="fa-regular fa-calendar"></i>
                      12 march
                    </span>
                  </div>
                </div>
              </div>

              <div className="right">
                <div className="buttons ">
                  <button onClick={handleEdit}>
                    <i className="fa-solid fa-pen"></i>
                    Edit
                  </button>
                  <button onClick={() => handleDelete()}>
                    <i className="fa-solid fa-trash"></i>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="bottomSection d_flex">
            <div className="left">
              <h1>Description</h1>
              <p>{formData.desc}</p>
            </div>
            <div className="right">
              <h4>Hackathon</h4>
              <h2>{formData.name}</h2>
              <div className="dates">
                <span>
                  <i className="fa-regular fa-calendar"></i>{" "}
                  {formData.startDate} - {formData.endDate}
                </span>
              </div>
              <div className="buttons links">
                <button>
                  <i className="fa-brands fa-github"></i>
                  <a
                    href={`//${formData.gitHub}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Repository
                  </a>
                </button>
                <button>
                  <i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
                  <a
                    href={`//${formData.links}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Other Links
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Single;
