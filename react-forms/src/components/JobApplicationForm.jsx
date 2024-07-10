import React, { useState } from 'react';
import '../App.css';

const JobApplicationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: null,
    experiences: [{ company: '', role: '', years: '' }]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0]
    });
  };

  const handleExperienceChange = (index, e) => {
    const newExperiences = formData.experiences.map((experience, i) => {
      if (i !== index) return experience;
      return { ...experience, [e.target.name]: e.target.value };
    });
    setFormData({ ...formData, experiences: newExperiences });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experiences: [...formData.experiences, { company: '', role: '', years: '' }]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Resume:</label>
        <input type="file" name="resume" onChange={handleFileChange} />
      </div>
      <h3>Work Experience:</h3>
      {formData.experiences.map((experience, index) => (
        <div key={index} className="form-group">
          <label>Company:</label>
          <input
            type="text"
            name="company"
            value={experience.company}
            onChange={(e) => handleExperienceChange(index, e)}
          />
          <label>Role:</label>
          <input
            type="text"
            name="role"
            value={experience.role}
            onChange={(e) => handleExperienceChange(index, e)}
          />
          <label>Years:</label>
          <input
            type="number"
            name="years"
            value={experience.years}
            onChange={(e) => handleExperienceChange(index, e)}
          />
        </div>
      ))}
      <button type="button" onClick={addExperience}>Add Experience</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default JobApplicationForm;
