import React, { useState } from 'react';
import '../App.css';

const SurveyForm = ({ onSubmit }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    age: '',
    hobby: '',
    favoriteBook: '',
    favoriteSport: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && (
        <div className="form-group">
          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
          <button type="button" onClick={() => setStep(2)}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div className="form-group">
          <label>Hobby:</label>
          <input type="text" name="hobby" value={formData.hobby} onChange={handleChange} />
          {formData.hobby.toLowerCase().includes('reading') && (
            <div className="form-group">
              <label>Favorite Book:</label>
              <input type="text" name="favoriteBook" value={formData.favoriteBook} onChange={handleChange} />
            </div>
          )}
          {formData.hobby.toLowerCase().includes('sports') && (
            <div className="form-group">
              <label>Favorite Sport:</label>
              <input type="text" name="favoriteSport" value={formData.favoriteSport} onChange={handleChange} />
            </div>
          )}
          <button type="button" onClick={() => setStep(1)}>Back</button>
          <button type="submit">Submit</button>
        </div>
      )}
    </form>
  );
};

export default SurveyForm;
