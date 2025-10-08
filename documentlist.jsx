import React, { useEffect, useState } from 'react';
import { listDocuments, downloadDocument } from '../api/documents';

export default function DocumentList() {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    fetchDocs();
  }, []);
  const fetchDocs = async () => {
    const resp = await listDocuments();
    setDocs(resp.data);
  };
  const handleDownload = async id => {
    const resp = await downloadDocument(id);
    const url = window.URL.createObjectURL(new Blob([resp.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'file'); // you could set name
    document.body.appendChild(link);
    link.click();
  };
  return (
    <div>
      {docs.map(d => (
        <div key={d.id}>
          <p>{d.originalName}</p>
          <p>{d.description}</p>
          <button onClick={() => handleDownload(d.id)}>Download</button>
        </div>
      ))}
    </div>
  );
}