import React, { useContext } from "react";
import { Context } from "../../context-api/context";
import image from "../assets/InterviewMe.png";

const Single = () => {
  const { upload } = useContext(Context);
  return (
    <>
      {upload &&
        upload.map((obj) => {
          return (
            <>
              <div className="singlePage">
                <div className="container">
                  <div className="heroSection d_flex">
                    <div className="left ">
                      <div className="image  flex">
                        <img src={image} alt="" />
                        <h1>{obj.title}</h1>
                      </div>
                      <p>{obj.sammary}</p>
                      <div className="favSection">
                        <div className="favIcon">
                          <i className="fa-regular fa-star"></i>
                        </div>
                        <div className="calender">
                          <span>
                            <i className="fa-regular fa-calendar"></i>12 march
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="right">
                      <div className="buttons ">
                        <button>
                          <i className="fa-solid fa-pen"></i>
                          Edit
                        </button>
                        <button>
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
                    <p>{obj.desc}</p>
                  </div>
                  <div className="right">
                    <h4>Hackathon</h4>
                    <h2>{obj.name}</h2>
                    <div className="dates">
                      <span>
                        <i className="fa-regular fa-calendar"></i> {obj.sDate} -{" "}
                        {obj.eDate}
                      </span>
                    </div>
                    <div className="buttons">
                      <button>
                        
                        <i className="fa-brands fa-github"></i>
                        GitHub Repository
                        
                      </button>
                      <button >
                        
                        <i class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
                        Other Links
                        
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};

export default Single;
