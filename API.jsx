import React, { useState } from 'react';
import Login from './components/Login';
import DocumentUpload from './components/DocumentUpload';
import DocumentList from './components/DocumentList';

function App() {
  const [token, setToken] = useState(null);

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div>
      <h1>Team Document Hub</h1>
      <DocumentUpload onUploaded={() => window.location.reload()} />
      <DocumentList />
    </div>
  );
}

export default App;