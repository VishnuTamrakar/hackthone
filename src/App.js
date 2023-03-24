
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./componenets/header/Header";
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
            <Route path="/single" element={<Single />} />
            <Route path="/newForm" element={<SubmissionForm />} />
          </Routes>
        </BrowserRouter>
      </NoteContext>
    </>
  );
}

export default App;
