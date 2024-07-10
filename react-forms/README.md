# React Form Handling Examples

This repository contains examples demonstrating how to handle forms in React applications, including basic form handling, job application forms, and dynamic survey forms.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Running the Application](#running-the-application)
5. [Project Structure](#project-structure)
6. [Examples](#examples)
   - [Basic Form Handling](#basic-form-handling)
   - [Job Application Form](#job-application-form)
   - [Dynamic Survey Form](#dynamic-survey-form)

## Getting Started

These instructions will help you set up and run the project on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/) (version 12 or later)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Installation

1. **Clone the Repository**

   Open your terminal and run the following command to clone the repository:

   ```bash
   git clone https://github.com/your-username/react-form-handling-examples.git
   ```

   Replace `your-username` with your actual GitHub username.

2. **Navigate to the Project Directory**

   ```bash
   cd react-form-handling-examples
   ```

3. **Install Dependencies**

   Run the following command to install the required dependencies:

   ```bash
   npm install
   ```

## Running the Application

After installing the dependencies, you can run the application using the following command:

```bash
npm start
```

This will start the development server and open the application in your default web browser. If it doesn't open automatically, you can visit `http://localhost:3000` to see the app.

## Project Structure

Here's an overview of the project structure:

```
react-form-handling-examples/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── ContactForm.jsx
│   │   ├── JobApplicationForm.jsx
│   │   └── SurveyForm.jsx
│   ├── App.jsx
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

- **public/**: Contains the public assets and the HTML file.
- **src/**: Contains the source code for the React application.
  - **components/**: Contains the React components for the different form examples.
  - **App.jsx**: The main App component that renders the examples.
  - **index.js**: The entry point of the application.
- **package.json**: Contains the project dependencies and scripts.
- **README.md**: The README file you're currently reading.

## Examples

### Basic Form Handling

This example demonstrates how to manage form input and handle form submissions in React.

**File:** `src/components/ContactForm.jsx`

```jsx
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
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
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label>Message:</label>
        <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
```

### Job Application Form

This example demonstrates a more complex form handling scenario, including file uploads and dynamic fields.

**File:** `src/components/JobApplicationForm.jsx`

```jsx
import React, { useState } from 'react';

const JobApplicationForm = () => {
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
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label>Resume:</label>
        <input type="file" name="resume" onChange={handleFileChange} />
      </div>
      <h3>Work Experience:</h3>
      {formData.experiences.map((experience, index) => (
        <div key={index}>
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
```

### Dynamic Survey Form

This example demonstrates a survey form that dynamically generates questions based on the user's previous answers.

**File:** `src/components/SurveyForm.jsx`

```jsx
import React, { useState } from 'react';

const SurveyForm = () => {
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
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && (
        <div>
          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
          <button type="button" onClick={() => setStep(2)}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <label>Hobby:</label>
          <input type="text" name="hobby" value={formData.hobby} onChange={handleChange} />
          {formData.hobby.toLowerCase().includes('reading') && (
            <div>
              <label>Favorite Book:</label>
              <input type="text" name="favoriteBook" value={formData.favoriteBook} onChange={handleChange} />
            </div>
          )}
          {formData.hobby.toLowerCase().includes('sports') && (
            <div>
              <label>Favorite Sport:</label>
              <input type="text" name="favoriteSport" value={formData.favoriteSport} onChange={handleChange} />
            </

div>
          )}
          <button type="button" onClick={() => setStep(1)}>Back</button>
          <button type="submit">Submit</button>
        </div>
      )}
    </form>
  );
};

export default SurveyForm;
```

## Contributing

Feel free to submit issues or pull requests if you find any bugs or have suggestions for improvements.
