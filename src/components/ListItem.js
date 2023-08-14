import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ note }) => {
  console.log(note.body);
  return (
    <Link to={`/note/${note.id}`}>
      <div className="notes-list-item">
        <h3>
          {note.id} {note.body}
        </h3>
        <h4 style={{ color: "gray" }}>{note.updated}</h4>
      </div>
    </Link>
  );
};

export default ListItem;
/* onClick={() => {
        <Link to={`/note/${note.id}`} />;
      }} */
