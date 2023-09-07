import React, { useState } from 'react';
import axios from 'axios';

const DeleteFile = () => {
  const [selectedFileId, setSelectedFileId] = useState("");
  const baseUrl ="http://localhost:8080/files/";

  const handleInputChange = (event) => {
    setSelectedFileId(event.target.value);
  };

  const handleDeleteFile = () => {
    axios.delete(`${baseUrl}${selectedFileId}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Delete File </h2>
      <input type="text" onChange={handleInputChange} name ="enter file ID "/>
      <button onClick={handleDeleteFile} >DeleteFile</button>
    </div>
  );
};

export default DeleteFile;
