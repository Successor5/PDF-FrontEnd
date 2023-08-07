import React, { useState } from 'react';
import jsPDF from 'jspdf';
import '../Style/PDFDownloadButton.css';

const PDFDownloadButton = () => {
  const [email, setEmail] = useState('');

  const generateAndMailPDF = () => {
    console.log('this is the email-->', email);
    const currentMonth = new Date().toLocaleString('default', { month: 'long' });
    const doc = new jsPDF();
    doc.text(20, 20, `Hi, it's the month of ${currentMonth}`);

    const pdfBlob = doc.output('blob');

    const formData = new FormData();
    formData.append('email', email);
    formData.append('pdf', pdfBlob, 'report.pdf');

    fetch('http://localhost:5000/send-email', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
        console.log('this is response ->',data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="container">
      <div className="mailbox">
        <input
          type="email"
          placeholder="youremail@gmail.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button onClick={generateAndMailPDF}>Mail PDF</button>
      </div>
    </div>
  );
};

export default PDFDownloadButton;
