import React, { useState } from "react";
function NotesInput({ addNotes }) {
  const [judul, setJudul] = useState("");
  const [catatan, setCatatan] = useState("");
  const [Words, setWords] = useState(50);
  const [removeW, setRemoveW] = useState(false);

  function PostHandler(e) {
    e.preventDefault();
    addNotes({ judul, catatan });
    setCatatan("");
    setJudul("");
    setWords(50);
  }
  function LengthJudul(e) {
    setJudul(e.target.value);
    if (!removeW) {
      setWords(Words - 1);
    } else {
      setWords(Words + 1);
    }
    if (e.target.value.length > 50) {
      alert("kata tidak boleh lebih dari 50");
      setCatatan("");
      setJudul("");
      setWords(50);
    }
  }
  function deleteWords(e) {
    if (e.code === "Backspace") return setRemoveW(true);
    setRemoveW(false);
  }
  return (
    <div className="containerNotesInput">
      <div className="ShapeNotes">
        <div className="Teks-Catatan">
          <h1>CatatanKu</h1>
        </div>
        <form className="KontakInput" onSubmit={PostHandler}>
          <div className="judul">
            <div className="label-judul">
              <label htmlFor="judul" className="myJudul">
                <p>Judul</p>
              </label>
            </div>
            <div className="teks-judul">
              <input
                type="text"
                required
                name="judul"
                placeholder="Masukkan Judul"
                className="inputJudul"
                value={judul}
                onKeyDown={deleteWords}
                onChange={LengthJudul}
              />
              <div className="lengthInput">
                <p>{Words}</p>
              </div>
            </div>
          </div>
          <div className="Catatan">
            <div className="label-Catatan">
              <label htmlFor="label-catatan" className="myCatatan">
                <p>Catatan</p>
              </label>
            </div>
            <div className="teks-Catatan">
              <textarea
                name=""
                id=""
                required
                cols="num"
                rows="num"
                className="textArea"
                style={{ resize: "none" }}
                placeholder="e.g catatan"
                value={catatan}
                onChange={(e) => setCatatan(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="buttonSubmit">
            <button type="submit" className="thisSubmit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NotesInput;
