import './App.css';
import React, { useState } from 'react';
import Editor from "rich-markdown-editor";

function App() {
  const [data,fieldVar] = useState(window.frameElement?.dataset?.value || '', window.frameElement?.dataset?.fieldVar|| 'testing');
  

  function updateMarkdown(value) {

    const customEvent = new CustomEvent('custom-field-' + fieldVar, {
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
          let formData = new FormData();  
          formData.append("files", file);


          fetch('https://local.dotcms.site:8443/api/v1/temp', {
            method: 'POST',
            body: formData,
            mode: "no-cors"
          }).then(res => console.log(res))
          .catch(err => console.log(err))

     
          return false;
          /*
          
          .then(
            response => {
              
              let data = response.json() // if the response is a JSON object
              console.log(data)
              //contentlet: {baseType: "dotAsset", asset: "temp_3bc0e56759", hostFolder: "", indexPolicy: "WAIT_FOR"}
              const formData = {}; 
              formData.contentlet={};
              formData.contentlet.asset=data.tempFiles[0].id;
              formData.contentlet.baseType="dotAsset";
              formData.contentlet.indexPolicy="WAIT_FOR";
              
              const dotAssetResponse = fetch('https://local.dotcms.site:8443/api/v1/workflow/actions/default/fire/PUBLISH', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: formData,
                mode: "no-cors"
              }).then(response => response.json())
              .then(data => console.log(data));
            }


          ).then(
            success => console.log(success) // Handle the success response object
          ).catch(
            error => console.log(error) // Handle the error response object
          );
  */
        }}
        onChange={value =>  {
          updateMarkdown(value());
        }}

      />
    </div>
  );
}

export default App;
