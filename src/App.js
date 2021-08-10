import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const onFileChange = (event) => setSelectedFile(event.target.files[0]);
  const acceptableMIMETypes = [
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.oasis.opendocument.spreadsheet",
    "application/vnd.ms-excel",
  ];
  const urlAPI = "https://httpbin.org/post";

  // On clicking the upload button
  const onFileUpload = () => {
    if (acceptableMIMETypes.includes(selectedFile.type)) {
      axios.post(urlAPI, selectedFile);
    } else {
      console.error("Please upload only excel sheets");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h3>File Upload using React</h3>
          <div>
            <input type="file" onChange={onFileChange} />
            {selectedFile &&
              (acceptableMIMETypes.includes(selectedFile.type) ? (
                <button onClick={onFileUpload}>Upload</button>
              ) : (
                <h5 color="red">Please upload only excel type format</h5>
              ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
