import React from "react";

function ContainerNotes({ children, Text }) {
  return (
    <div className={`containerNotes${Text}`}>
      <div className="TextHasilCatatan">
        <p>{Text}</p>
      </div>
      <div className="ContainerListCatatan">{children}</div>
    </div>
  );
}

export default ContainerNotes;
