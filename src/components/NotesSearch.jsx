import React, { useState } from "react";

function NotesSearch({ Search }) {
  const [search, setSearch] = useState("");
  function GetSearch(e) {
    setSearch(e.target.value);
    Search(e.target.value);
  }
  return (
    <div className="Search">
      <input
        type="text"
        placeholder="search"
        required
        autoFocus
        value={search}
        className="inputSearch"
        onChange={GetSearch}
      />
    </div>
  );
}

export default NotesSearch;
