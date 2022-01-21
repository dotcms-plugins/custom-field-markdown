import './App.css';
import React, { useState } from 'react';
import Editor from "rich-markdown-editor";

function App() {
  const [data,fieldVar] = useState(window.frameElement?.dataset?.value || '', window.frameElement?.dataset?.fieldVar);
  

  function updateMarkdown(value) {

    const customEvent = new CustomEvent('custom-field-' + window.frameElement.dataset.fieldVar, {
        detail: value,
        bubbles: true,
        cancelable: true,
    });
    console.debug("customEventSending",customEvent)
    const elem = document.querySelector('.App');
    elem.dispatchEvent(customEvent);
}



  return (
    <div className="App">
      <Editor
        id="markdownEditor{fieldVar}"
        defaultValue={data}
        placeholder='Start typing here or /'
        uploadImage={async file => {
          alert("not implemented")
          return "uploaded"
        }}
        onChange={value =>  {
          updateMarkdown(value());
        }}

      />
    </div>
  );
}

export default App;
