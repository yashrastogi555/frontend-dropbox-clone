import React, { useState } from 'react';
import axios from 'axios';

const GetAllFiles = () => {
  const baseUrl ="http://localhost:8080/files/";

  const handleGetFile = () => {
    axios.get(baseUrl)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Get All Files </h2>
      <button onClick={handleGetFile} >GetAllFiles</button>
    </div>
  );
};

export default GetAllFiles;
