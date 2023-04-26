import React, { useState } from "react";
import NotesBody from "./NotesBody";
import ContainerNotes from "./ContainerNotes";
import NotesArsip from "./NotesArsip";
import NotesSearch from "./NotesSearch";

function NotesList({
  Notes,
  NotesArsips,
  deleteNotes,
  MyArsips,
  deleteNotesArsip,
}) {
  const [ListWords, setListWords] = useState("");
  const [dataNotes, setDataNotes] = useState(Notes);
  function GetSearchNotes(words) {
    setDataNotes(
      Notes.filter((notes) => {
        return notes.title.toLowerCase().includes(words.toLowerCase());
      })
    );
    setListWords(words);
  }
  return (
    <div className="NotesList">
      <NotesSearch Search={GetSearchNotes} />
      <ContainerNotes Text={"Catatan"}>
        {Notes.length !== 0 ? (
          ListWords.length === 0 ? (
            Notes.map((note) => {
              return (
                <NotesBody
                  {...note}
                  key={note.id}
                  deleteNotes={deleteNotes}
                  ArsipNotes={MyArsips}
                />
              );
            })
          ) : !dataNotes.length ? (
            <div className="notYetNotes">
              <h1>Tidak ada Data</h1>
            </div>
          ) : (
            dataNotes.map((note) => {
              return (
                <NotesBody
                  {...note}
                  key={note.id}
                  deleteNotes={deleteNotes}
                  ArsipNotes={MyArsips}
                />
              );
            })
          )
        ) : (
          <div className="notYetNotes">
            <h1>Tidak ada Data</h1>
          </div>
        )}
      </ContainerNotes>
      <ContainerNotes Text={"Arsip"}>
        {NotesArsips.length !== 0 ? (
          NotesArsips.map((notesArsip) => {
            return (
              <NotesArsip
                {...notesArsip}
                key={notesArsip.id}
                deleteNotesArsip={deleteNotesArsip}
              />
            );
          })
        ) : (
          <div className="notYetNotes">
            <h1>Tidak ada Data</h1>
          </div>
        )}
      </ContainerNotes>
    </div>
  );
}

export default NotesList;
