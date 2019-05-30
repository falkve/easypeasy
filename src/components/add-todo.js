import React, { useState } from 'react';
import { useActions } from 'easy-peasy';

export default function AddTodo() {
  const [text, setText] = useState('');
  const save = useActions(actions => actions.todos.save);
  const handleSaveClick = async () => {
    await save(text);
    setText('');
  };
  const handleTextChange = e => setText(e.target.value);
  return (
    <div>
      <input value={text} onChange={handleTextChange} />
      <button onClick={handleSaveClick}>Add</button>
    </div>
  );
}
