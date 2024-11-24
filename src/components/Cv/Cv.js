import React from 'react';

const FilePreviewLink = () => {
  // Replace with your actual Google Drive file ID
  
  const googleDrivePreviewUrl = `https://drive.google.com/file/d/18o61zDSHHZulGI7W2QCQjlUj3nF6_2VO/view`;

  return (
    <div>
      <h2>Click below to preview the document:</h2>
      
      <a
        href={googleDrivePreviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '5px',
        }}
      >
        Preview Document
      </a>
    </div>
  );
};

export default FilePreviewLink;
