import styles from "../styles/MainPage.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faLightbulb, faBoxArchive, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import NoteCard from "../modules/NoteCard";

function MainPage() {
  const [navBar, setNavBar] = useState(false);
  const [notes, setNotes] = useState([
    {
      title: "Bu bir basliktir",
      note: "Bu not icerigidir cok iyi bir not bu",
      archived: false,
      noteID: 1,
    },
    {
      title: "Bu baska bir basliktir",
      note: "Bu baska bir not icerigidir",
      archived: false,
      noteID: 2,
    },
    {
      title: "Bu da bir basliktir",
      note: "Cok iyi bir not bu",
      archived: false,
      noteID: 3,
    },
  ]);

  function handleMenuClick() {
    let root = document.documentElement;
    if (navBar) {
      console.log(styles);
      root.style.setProperty("--navbarWidth-value", "3vmin");
      setNavBar(false);
    } else {
      console.log(styles);

      root.style.setProperty("--navbarWidth-value", "20vmin");
      setNavBar(true);
    }
  }

  return (
    <div className={styles.bodyWrapper}>
      <div className={styles.header}>
        <div className={styles.logoWrapper}>
          <div className={styles.navbarButton}>
            <FontAwesomeIcon icon={faBars} size="xl" onClick={handleMenuClick} />
          </div>
          <div className={styles.logo}>Noteapp</div>
        </div>
        <input type="text" className={styles.searchInput} placeholder="Search" />
        <div className={styles.currentUser}>
          <FontAwesomeIcon icon={faUser} size="xl" />
        </div>
      </div>
      <div className={styles.navBar}>
        <div className={styles.faIcon}>
          <FontAwesomeIcon icon={faLightbulb} size="xl" fixedWidth />
          <div>Notes</div>
        </div>
        <div className={styles.faIcon}>
          <FontAwesomeIcon icon={faBoxArchive} size="xl" fixedWidth />
          <div>Archive</div>
        </div>
        <div className={styles.faIcon}>
          <FontAwesomeIcon icon={faTrash} size="xl" fixedWidth />
          <div>Thrash</div>
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.notesWrapper}>
          {notes.map(function (data) {
            return <NoteCard title={data.title} note={data.note} archived={data.archived} noteId={data.noteID} key={data.noteID} />;
          })}
        </div>
        <button className={styles.addButton}>Add Button</button>
      </div>
    </div>
  );
}

export default MainPage;
