import React, { useState } from "react";
import "./NoteApp.css";

export default function NoteApp() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddNote = () => {
    if (!input.trim()) return;

    if (editIndex !== null) {
      const updatedNotes = [...notes];
      updatedNotes[editIndex] = input;
      setNotes(updatedNotes);
      setEditIndex(null);
    } else {
      setNotes([...notes, input]);
    }
    setInput("");
  };
  const handleEditNote = (index) => {
    setInput(notes[index]);
    setEditIndex(index);
  };
  const handleDeleteNote = (index) => {
    const filteredNotes = notes.filter((_, i) => i != index);
    setNotes(filteredNotes);
  };
  return (
    <div className="note-container">
      <div className="note-input">
        <input
          type="text"
          placeholder="write your note.."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddNote}>
          {editIndex != null ? "update" : "Add"}
        </button>
      </div>

      <ul className="note-list">
        {notes.map((note, index) => (
          <li key={index} clasJName="note-item">
            <span>{note}</span>
            <div className="note-buttons">
              <button onClick={() => handleEditNote(index)}>🖋️Edit </button>
              <button onClick={() => handleDeleteNote(index)}>Delete </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
