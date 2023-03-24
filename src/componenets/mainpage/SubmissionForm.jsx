import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context-api/context";

const SubmissionForm = () => {
  const [title, setTitle] = useState("");
  const [sammary, setSammary] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [sDate, setSDate] = useState("");
  const [eDate, setEDate] = useState("");
  const [gitHub, setGitHub] = useState("");
  const [links, setLinks] = useState("");

  const { uploadData } = useContext(Context);

  const uploadHandle = () => {
    let taskObj = {};
    taskObj["title"] = title;
    taskObj["sammary"] = sammary;
    taskObj["desc"] = desc ;
    taskObj["file"] = file;
    taskObj["name"] = name;
    taskObj["startDate"] = sDate;
    taskObj["endDate"] = eDate;
    taskObj["gitHub"] = gitHub;
    taskObj["links"] = links;
    
    uploadData(taskObj);
  };
  

  return (
    <>
      <div className="submissionForm">
        <div className="container">
          <div className="form">
            <h1 className="Heading">New Heckathon Submission</h1>
            <form>
              <div className="formInput">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  id="title"
                  placeholder="Title of your submissoin"
                />
              </div>

              <div className="formInput">
                <label>Sammary</label>
                <input
                  type="text"
                  value={sammary}
                  onChange={(e) => setSammary(e.target.value)}
                  name="sammary"
                  id="sammary"
                  placeholder="A short sammry of your submission (this will be visible with your submission)"
                />
              </div>

              <div className="formInput">
                <lable>Description</lable>
                <textarea
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  name="txtarea"
                  id="txtarea"
                ></textarea>
              </div>

              <div className="formInput">
                <label>Cover Image</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  value={file}
                  onChange={(e) => setFile(e.target.value)}
                />
              </div>
              <div className="formInput">
                <lable>Hackathon Name</lable>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter the name of Hackathon"
                />
              </div>
              <div className="formInput">
                <div className="dateForm">
                  <div className="startDate">
                    <label>Hackathon Start Date</label>
                    <input
                      type="date"
                      name="startDate"
                      id="startDate"
                      value={sDate}
                      onChange={(e) => setSDate(e.target.value)}
                    />
                  </div>
                  <div className="endDate">
                    <label>Hackathon End Date</label>
                    <input
                      type="date"
                      name="endDate"
                      id="endDate"
                      value={eDate}
                      onChange={(e) => setEDate(e.target.value)}
                      placeholder="Select end date"
                    />
                  </div>
                </div>
              </div>
              <div className="formInput">
                <label>GitHub Repository</label>
                <input
                  type="url"
                  name="gitHub"
                  id="gitlink"
                  value={gitHub}
                  onChange={(e) => setGitHub(e.target.value)}
                  placeholder="Enter your submission's public GitHub repository"
                />
              </div>
              <div className="formInput">
                <label>Other Links</label>
                <input
                  type="url"
                  name="otheLinks"
                  id="otherLink"
                  value={links}
                  onChange={(e) => setLinks(e.target.value)}
                  placeholder="You can upload a video demo or URL of you demo app here"
                />
              </div>
              <div className="btn">
                <Link to="/" onClick={uploadHandle}>
                  Upload Submission
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubmissionForm;
