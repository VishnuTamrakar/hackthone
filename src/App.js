
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./componenets/header/Header";
import EditForm from "./componenets/mainpage/EditForm";
import Favourite from "./componenets/mainpage/Favourite";
import Single from "./componenets/mainpage/Single";
import SubmissionForm from "./componenets/mainpage/SubmissionForm";
import NoteContext from "./context-api/context";
import Pages from "./pages/Pages";

function App() {
  

 
  return (
    <>
      <NoteContext>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Pages />} />
            <Route path="/:id" element={<Single />} />
            <Route path="/edit/:id" element={<EditForm/>} />
            <Route path="/newForm" element={<SubmissionForm />} />
            
            
            {/* <Route path="/fav" element={<Favourite/>} /> */}
            
          </Routes>
        </BrowserRouter>
      </NoteContext>
    </>
  );
}

export default App;
