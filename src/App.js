import { useEffect, useState } from "react"
import Notes from "./components/Notes"
import noteService from "./services/notes"


const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    noteService
    .getAll
    .then(initialNotes => {
      setNotes(initialNotes.data)
    })

  }, [])

  const toggleHierarchy = id => {
    // console.log('importance of ' + id + ' needs to be toggled');
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
  
    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        notes.map(note => note.id !== id ? note : returnedNote.data)
      })
  }
  

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
      // id: notes.length + 1,
    }

    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote.data))
        setNewNote('')
      })
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div> 
      <ul>
        <ul>
          {notesToShow.map(note => 
            <Notes 
            key={note.id} 
            note={note}
            toggleHierarchy={() => toggleHierarchy(note.id)}
            />
          )}
        </ul>
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  )
}


export default App


