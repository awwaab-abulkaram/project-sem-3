// Import React and necessary hooks
import React, { useState } from 'react';

// Define the ComplaintForm component
const ComplaintForm = () => {
  // State variables for caseType and complaintText
  const [caseType, setCaseType] = useState('');
  const [complaintText, setComplaintText] = useState('');

  // Event handler for caseType change
  const handleCaseTypeChange = (e) => {
    setCaseType(e.target.value);
  };

  // Event handler for complaintText change
  const handleComplaintTextChange = (e) => {
    setComplaintText(e.target.value);
  };

  // Function to submit the complaint (in a real app, this would send data to the server)
  const submitComplaint = () => {
    console.log(`Case Type: ${caseType}`);
    console.log(`Complaint Text: ${complaintText}`);
  };

  // JSX for the ComplaintForm component
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

// Export the ComplaintForm component as the default export
export default ComplaintForm;
