import React, { useState } from "react";

import NotesInput from "./NotesInput";
import NotesList from "./NotesList";
import { getInitialData } from "../utils";

function NotesApp() {
  const [getNotes, setGetNotes] = useState(getInitialData());
  const [getArsip, setGetArsip] = useState([]);

  function getNewNotes({ judul, catatan }) {
    let NewNotes = {
      id: +new Date(),
      title: judul,
      body: catatan,
      createdAt: new Date().toISOString(),
      archived: false,
    };
    let Notes = [...getNotes, NewNotes];
    setGetNotes(Notes);
  }
  function deleteNotes(NotesId) {
    let findDeleteNotesArsip = getArsip.find((note) => note.id === NotesId);
    if (findDeleteNotesArsip) {
      let GetDeleteArsip = getArsip.filter(
        (note) => note.id !== findDeleteNotesArsip.id
      );
      setGetArsip(GetDeleteArsip);
    }
    let GetDelete = getNotes.filter((note) => note.id !== NotesId);
    setGetNotes(GetDelete);
  }
  function deleteNotesArsip(NotesId) {
    let GetDeleteArsip = getArsip.filter((note) => note.id !== NotesId);
    setGetArsip(GetDeleteArsip);
  }
  function getNotesArsip(Notes) {
    if (getArsip.length === 0) {
      setGetArsip([Notes]);
    } else {
      let findNotesArsip = getArsip.find((note) => note.id === Notes.id);
      if (findNotesArsip) {
        alert("Notes sudah ada di Arsip");
      } else {
        let GetNewArsip = [...getArsip, Notes];
        setGetArsip(GetNewArsip);
      }
    }
  }

  return (
    <div>
      <NotesInput addNotes={getNewNotes} />
      <NotesList
        Notes={getNotes}
        NotesArsips={getArsip}
        deleteNotes={deleteNotes}
        MyArsips={getNotesArsip}
        deleteNotesArsip={deleteNotesArsip}
      />
    </div>
  );
}

export default NotesApp;
