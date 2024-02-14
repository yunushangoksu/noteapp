import "../styles/NoteCard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxArchive, faTrash } from "@fortawesome/free-solid-svg-icons";

function NoteCard() {
  return (
    <div className="cardWrapper">
      <div className="cardInfo">
        <div className="cardHeader">Kart Basligi</div>
        <div className="cardContent">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus odio id odit iste molestias repellat modi magnam necessitatibus, quidem quis nemo
          quo error totam? Repellat hic consectetur sequi iusto voluptatum!
        </div>
      </div>
      <div className="cardControl">
        <FontAwesomeIcon icon={faBoxArchive} />
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
}

export default NoteCard;
