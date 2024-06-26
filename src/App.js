/* eslint-disable no-undef */
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SideBar_Menu } from "./SideBar-Menu/ExpandMenu/SideBar_Menu";
import { ShortenMenu } from "./SideBar-Menu/ShortenMenu/ShortenMenu";
import Homepage from "./Page/Homepage";
import Record from "./Page/Record";
import { Record_form } from "./Record/Record_form";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Report } from "./Page/Report";
import { ReportDetail } from "./Report/ReportDetail/ReportDetail";
function App() {
  const [reduce, setReduced] = useState(true);

  const resizeMenu = (value: boolean): void => {
    setReduced(value);
  };

  return (
    <Router>
      <div className="App">
        <nav className={reduce ? "nav" : "nav short-nav"}>
          {reduce ? (
            <SideBar_Menu parentCallback={resizeMenu} />
          ) : (
            <ShortenMenu parentCallback={resizeMenu} />
          )}
        </nav>
        <article className={reduce ? "article" : "article expand-article"}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/record" element={<Record />} />
            <Route path="/addrecord" element={<Record_form />} />
            <Route path="/report" element={<Report />} />
            <Route path="/reportdetail" element={<ReportDetail />} />
          </Routes>
        </article>
      </div>
    </Router>
  );
}

export default App;
