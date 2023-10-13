"use client";
import { useState } from 'react';


export default function Navbar() {
    const [newValue, setNewValue] = useState<string>('');
    return (
        <nav className="p-2 bg-blue-500 flex items-center justify-between">
            <div>
                {"{M}"}Editor
            </div>
        </nav>
    )
}