import logo from './logo.svg';
import './App.css';
import UploadFile from './UploadFile';
import DeleteFile from './DeleteFile';
import GetFile from './GetFile';
import GetAllFiles from './GetAllFiles';
import UpdateFile from './UpdateFile';

function App() {
  return (
    <div className="App">
     
<h1>Dropbox - CLONE - APP </h1>
<UploadFile/>
<GetFile/>
<DeleteFile/>
<UpdateFile/>
<GetAllFiles/>
    </div>
  );
}

export default App;
