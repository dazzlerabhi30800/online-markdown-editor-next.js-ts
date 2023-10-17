import React from "react";

export default function Navbar({ valueString }: { valueString: string }) {
  const saveValueLocalStorage = () => {
    localStorage.setItem("value", valueString);
    alert('Saved');
  }
  return (
    <nav className="nav">
      <h1>{"{M}"}Editor</h1>
      <div className="button--container">
        <button className="btn create">Create New File</button>
        <button onClick={saveValueLocalStorage} className="btn save">Save</button>
      </div>
    </nav>
  );
}
