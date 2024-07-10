import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import JobApplicationForm from './components/JobApplicationForm';
import SurveyForm from './components/SurveyForm';
import './App.css';

function App() {
  const [contactFormData, setContactFormData] = useState(null);
  const [jobApplicationData, setJobApplicationData] = useState(null);
  const [surveyFormData, setSurveyFormData] = useState(null);

  return (
    <div className="app">
      <div className="form-section" style={{ backgroundColor: '#FFEB3B' }}>
        <h2>Contact Form</h2>
        <ContactForm onSubmit={setContactFormData} />
        {contactFormData && (
          <div className="form-output">
            <h3>Form Output:</h3>
            <pre>{JSON.stringify(contactFormData, null, 2)}</pre>
          </div>
        )}
      </div>

      <div className="form-section" style={{ backgroundColor: '#FF5722' }}>
        <h2>Job Application Form</h2>
        <JobApplicationForm onSubmit={setJobApplicationData} />
        {jobApplicationData && (
          <div className="form-output">
            <h3>Form Output:</h3>
            <pre>{JSON.stringify(jobApplicationData, null, 2)}</pre>
          </div>
        )}
      </div>

      <div className="form-section" style={{ backgroundColor: '#03A9F4' }}>
        <h2>Survey Form</h2>
        <SurveyForm onSubmit={setSurveyFormData} />
        {surveyFormData && (
          <div className="form-output">
            <h3>Form Output:</h3>
            <pre>{JSON.stringify(surveyFormData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
