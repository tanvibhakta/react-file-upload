import { useState } from "react";
import axios from 'axios';
import './App.css';

function App() {

  const [selectedFile, setSelectedFile] = useState(null);
  const onFileChange = event => setSelectedFile(event.target.files[0])
  const urlAPI = "localhost:3001"
  // On file upload (click the upload button)
  const onFileUpload = () => {
    const formData = new FormData();
    // Update the formData object
    formData.append(
        "myFile",
        selectedFile,
        selectedFile.name
    );
    // Details of the uploaded file
    console.log(selectedFile);
    // Request made to the backend api
    // Send formData object
    axios.post(urlAPI, formData);
  };

  // File content to be displayed after file upload is complete
  const fileData = () => {
    if (selectedFile) {
      return (
          <div>
            <h2>File Details:</h2>
            <p>File Name: {selectedFile.name}</p>
            <p>File Type: {selectedFile.type}</p>
            <p>
              Last Modified:{" "}
              {selectedFile.lastModifiedDate.toDateString()}
            </p>
          </div>
      );
    } else {
      return (
          <div>
            <br />
            <h4>Choose a file before Pressing the Upload button</h4>
          </div>
      );
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h3>
            File Upload using React!
          </h3>
          <div>
            <input type="file" onChange={onFileChange} />
            <button onClick={onFileUpload}>
              Upload
            </button>
          </div>
          {fileData()}
        </div>
      </header>
    </div>
  );
}

export default App;
