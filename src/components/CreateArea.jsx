import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [initial,setInitial]=useState(true);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function handleInitial(){
    setInitial(false)
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
      {initial?<textarea
          name="content"
          onClick={handleInitial}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="1"
        />:
        <div>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        /></div>}
        
        <Zoom in={!initial}>
        <Fab color="#3f51b5" onClick={submitNote}>
        <AddIcon />
      </Fab>
      </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
