import React, { useState } from 'react';
import { uploadDocument } from '../api/documents';

export default function DocumentUpload({ onUploaded }) {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');
  const handleSubmit = async e => {
    e.preventDefault();
    await uploadDocument(file, description);
    onUploaded(); // e.g. to refresh list
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        onChange={e => setFile(e.target.files[0])}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button>Upload</button>
    </form>
  );
}