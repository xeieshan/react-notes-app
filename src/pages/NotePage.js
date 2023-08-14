import React from "react";
import notes from "../assets/data";
import { useParams, Link } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
const NotePage = (props) => {
  const params = useParams();
  let noteId = params.id;
  let note = notes.find((note) => note.id === Number(noteId));
  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <ArrowLeft />
          </Link>
        </h3>
      </div>
      <textarea>{note.body}</textarea>
    </div>
  );
};

export default NotePage;
