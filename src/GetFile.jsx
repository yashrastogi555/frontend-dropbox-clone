import React, { useState } from 'react';
import axios from 'axios';

const GetFile = () => {
  const [selectedFileId, setSelectedFileId] = useState("");
  const baseUrl ="http://localhost:8080/files/";

  const handleInputChange = (event) => {
    setSelectedFileId(event.target.value);
  };

  const handleGetFile = () => {
    axios.get(`${baseUrl}${selectedFileId}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Get File </h2>
      <input type="text" onChange={handleInputChange} name ="enter file ID "/>
      <button onClick={handleGetFile} >GetFile</button>
    </div>
  );
};

export default GetFile;
