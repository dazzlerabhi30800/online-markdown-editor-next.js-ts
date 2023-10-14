import React from 'react';

export default function Navbar() {
    return (
        <nav className="nav">
            <h1>{"{M}"}Editor</h1>
            <div className="button--container">
                <button className="btn create">Create New File</button>
                <button className="btn save">Save</button>
            </div>
        </nav>
    )
}