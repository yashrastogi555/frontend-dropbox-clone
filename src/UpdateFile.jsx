import React, { useState } from 'react';
import axios from 'axios';

const UpdateFile = () => {
    const [selectedFileId, setSelectedFileId] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const baseUrl ="http://localhost:8080/files/";
  
    const handleInputChange = (event) => {
      setSelectedFileId(event.target.value);
    };
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
      };
  
    const handleUpdateFile = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);
      axios.put(`${baseUrl}${selectedFileId}`, formData)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    };
  
    return (
      <div>
        <h2>Update File </h2>
        <input type="text" onChange={handleInputChange} name ="enter file ID "/>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpdateFile} >UpdateFile</button>
      </div>
    );
  };

export default UpdateFile;
