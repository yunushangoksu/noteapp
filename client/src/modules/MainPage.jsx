import "../styles/MainPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faLightbulb, faBoxArchive, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import NoteCard from "./NoteCard";

function MainPage() {
  const [navBar, setNavBar] = useState(false);

  function handleMenuClick() {
    if (navBar) {
      document.querySelector(".navBar").style.width = "3vmin";
      setNavBar(false);
    } else {
      document.querySelector(".navBar").style.width = "20vmin";
      setNavBar(true);
    }
  }

  return (
    <div>
      <div className="header">
        <div className="logoWrapper">
          <div className="navbarButton">
            <FontAwesomeIcon icon={faBars} size="xl" onClick={handleMenuClick} />
          </div>
          <div className="logo">Noteapp</div>
        </div>
        <input type="text" className="searchInput" placeholder="Search" />
        <div className="currentUser">
          <FontAwesomeIcon icon={faUser} size="xl" />
        </div>
      </div>
      <div className="navBar">
        <div className="faIcon">
          <FontAwesomeIcon icon={faLightbulb} size="xl" fixedWidth />
          <div>Notes</div>
        </div>
        <div className="faIcon">
          <FontAwesomeIcon icon={faBoxArchive} size="xl" fixedWidth />
          <div>Archive</div>
        </div>
        <div className="faIcon">
          <FontAwesomeIcon icon={faTrash} size="xl" fixedWidth />
          <div>Thrash</div>
        </div>
      </div>
      <div className="contentWrapper">
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
    </div>
  );
}

export default MainPage;
