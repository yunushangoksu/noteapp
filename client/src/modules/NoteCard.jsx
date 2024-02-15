import "../styles/NoteCard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxArchive, faTrash } from "@fortawesome/free-solid-svg-icons";

function NoteCard(props) {
  return (
    <div className="cardWrapper">
      <div className="cardInfo">
        <div className="cardHeader">{props.title}</div>
        <div className="cardContent">{props.note}</div>
      </div>
      <div className="cardControl">
        <FontAwesomeIcon icon={faBoxArchive} />
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
}

export default NoteCard;
