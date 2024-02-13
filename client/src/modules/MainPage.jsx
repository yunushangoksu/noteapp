import "../styles/MainPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faLightbulb, faBoxArchive, faTrash } from "@fortawesome/free-solid-svg-icons";

function MainPage() {
  return (
    <div>
      <div className="header">
        <div className="logoWrapper">
          <div className="navbarButton">
            <FontAwesomeIcon icon={faBars} size="xl" />
          </div>

          <div className="logo">Noteapp</div>
        </div>
        <input type="text" className="searchInput" placeholder="Search" />
        <div className="currentUser">Current user</div>
      </div>
      <div className="navBar">
        <FontAwesomeIcon icon={faLightbulb} size="xl" fixedWidth />
        <FontAwesomeIcon icon={faBoxArchive} size="xl" fixedWidth />
        <FontAwesomeIcon icon={faTrash} size="xl" fixedWidth />
      </div>
    </div>
  );
}

export default MainPage;
