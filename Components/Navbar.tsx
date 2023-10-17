"use client"
import React, { useState } from "react";

export default function Navbar({ valueString }: { valueString: string }) {
  const [copy, setCopy] = useState<boolean>(false);
  const saveValueLocalStorage = () => {
    localStorage.setItem("value", valueString);
    alert('Saved');
  }

  const copyValue = () => {
    navigator.clipboard.writeText(valueString);
    setCopy(prev => prev = true);
    setTimeout(() => {
      setCopy(prev => prev = false);
    }, 2000)
  }
  return (
    <nav className="nav">
      <h1>{"{M}"}Editor</h1>
      <div className="button--container">
        <button onClick={copyValue} className={`btn copy ${copy && "copied"}`}>{copy ? "Copied to Clipboard" : "Copy to Clipboard"}</button>
        <button onClick={saveValueLocalStorage} className="btn save">Save</button>
      </div>
    </nav>
  );
}
