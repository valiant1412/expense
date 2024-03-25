/* eslint-disable no-undef */
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SideBar_Menu } from "./SideBar-Menu/ExpandMenu/SideBar_Menu";
import { ShortenMenu } from "./SideBar-Menu/ShortenMenu/ShortenMenu";
import Homepage from "./Page/Homepage";
import { useState } from "react";
function App() {
  const [reduce, setReduced] = useState(true);

  const resizeMenu = (value: boolean): void => {
    setReduced(value);
  };

  return (
    <div className="App">
      <nav className={reduce ? "nav" : "nav short-nav"}>
        {reduce ? (
          <SideBar_Menu parentCallback={resizeMenu} />
        ) : (
          <ShortenMenu parentCallback={resizeMenu} />
        )}
      </nav>
      <article nav className={reduce ? "article" : "article expand-article"}>
        <Homepage />
      </article>
    </div>
  );
}

export default App;
