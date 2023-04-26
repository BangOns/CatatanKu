import React from "react";
import { showFormattedDate } from "../utils";
function NotesBody({
  title,
  body,
  createdAt,
  id,
  archived,
  deleteNotes,
  ArsipNotes,
}) {
  function onDelete() {
    deleteNotes(id);
  }
  function onArsip() {
    ArsipNotes({ id, title, body, createdAt, archived });
  }
  return (
    <div className="KotakCatatan">
      <div className="judulCatatan">
        <p>{title}</p>
      </div>
      <div className="tglCatatan">
        <p>"{showFormattedDate(createdAt)}"</p>
      </div>
      <div className="Notes">
        <p>"{body}"</p>
      </div>
      <div className="functionButton">
        <div className="buttonDelete">
          <button type="button" onClick={onDelete}>
            Delete
          </button>
        </div>
        <div className="buttonArsip">
          <button type="button" onClick={onArsip}>
            Arsip
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotesBody;
