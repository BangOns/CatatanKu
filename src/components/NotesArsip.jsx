import React from "react";
import { showFormattedDate } from "../utils";

function NotesArsip({ title, body, createdAt, id, deleteNotesArsip }) {
  function onDeleteArsip() {
    deleteNotesArsip(id);
  }
  return (
    <div className="KotakCatatan">
      <div className="judulCatatan">
        <p>{title}</p>
      </div>
      <div className="tglCatatan">
        <p>{showFormattedDate(createdAt)}</p>
      </div>
      <div className="Notes">
        <p>"{body}"</p>
      </div>
      <div className="functionButton">
        <div className="buttonDelete">
          <button type="button" onClick={onDeleteArsip}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotesArsip;
