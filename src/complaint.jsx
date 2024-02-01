import React, { useState } from 'react';

const ComplaintForm = () => {
  const [caseType, setCaseType] = useState('');
  const [complaintText, setComplaintText] = useState('');

  const handleCaseTypeChange = (e) => {
    setCaseType(e.target.value);
  };

  const handleComplaintTextChange = (e) => {
    setComplaintText(e.target.value);
  };

  const submitComplaint = () => {
    // In a real application, you would send this data to the server for further processing.
    // For simplicity, we're just logging the data to the console in this example.
    console.log(`Case Type: ${caseType}`);
    console.log(`Complaint Text: ${complaintText}`);
  };

  return (
    <div>
      <h1>File a Complaint</h1>
      <label>
        Case Type:
        <select value={caseType} onChange={handleCaseTypeChange}>
          <option value="">Select Case Type</option>
          <option value="Land and Property Rights">Land and Property Rights</option>
          <option value="Agricultural Issues">Agricultural Issues</option>
          <option value="Women's Rights">Women's Rights</option>
          <option value="Educational Issues">Educational Issues</option>
          <option value="Employment and Labor Rights">Employment and Labor Rights</option>
          <option value="Access to Government Schemes and Services">Access to Government Schemes and Services</option>
        </select>
      </label>
      <br />
      <label>
        Complaint Text:
        <textarea value={complaintText} onChange={handleComplaintTextChange} />
      </label>
      <br />
      <button onClick={submitComplaint}>Submit Complaint</button>
    </div>
  );
};

export default ComplaintForm;
