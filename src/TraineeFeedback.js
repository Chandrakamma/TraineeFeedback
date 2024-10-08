import React, { useState } from 'react';
import './TraineeFeedback.css'; // Import CSS file for styling

function TraineeFeedback() {
  const [feedback, setFeedback] = useState({
    firstName: '',
    lastName: '',
    date: '',
    trainingRating: '',
    enjoyedMost: '',
    keyLearnings: '',
    confusingSubject: '',
    valuableLearning: '',
    trainerRating: '',
    overallRating: '',
    additionalComments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(feedback);
    setFeedback({
      firstName: '',
      lastName: '',
      date: '',
      trainingRating: '',
      enjoyedMost: '',
      keyLearnings: '',
      confusingSubject: '',
      valuableLearning: '',
      trainerRating: '',
      overallRating: '',
      additionalComments: ''
    });
  };

  return (
    <div className="feedback-container">
      <h1>Training Feedback</h1>
      <form onSubmit={handleSubmit}>
        <div className="question">
          <label>
            First Name<span className="required">*</span>:
            <input 
              type="text" 
              name="firstName" 
              value={feedback.firstName} 
              onChange={handleChange} 
              required 
            />
          </label>
        </div>
        <div className="question">
          <label>
            Last Name<span className="required">*</span>:
            <input 
              type="text" 
              name="lastName" 
              value={feedback.lastName} 
              onChange={handleChange} 
              required 
            />
          </label>
        </div>
        <div className="question">
          <label>
            Date (MM-DD-YYYY)<span className="required">*</span>:
            <input 
              type="text" 
              name="date" 
              value={feedback.date} 
              onChange={handleChange} 
              placeholder="MM-DD-YYYY"
              required 
            />
          </label>
        </div>
        <div className="question">
          <label>
            Please rate training content<span className="required">*</span>:
            <select 
              name="trainingRating" 
              value={feedback.trainingRating} 
              onChange={handleChange} 
              required
            >
              <option value="">Select</option>
              <option value="1">1 - Worst</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5 - Best</option>
            </select>
          </label>
        </div>
        <div className="question">
          <label>
            What did you enjoy most about the training?<span className="required">*</span>:
            <textarea 
              name="enjoyedMost" 
              value={feedback.enjoyedMost} 
              onChange={handleChange} 
              required
            />
          </label>
        </div>
        <div className="question">
          <label>
            Please list 2-3 key learnings from today's curriculum, and how you anticipate applying them to your work in the future.<span className="required">*</span>:
            <textarea 
              name="keyLearnings" 
              value={feedback.keyLearnings} 
              onChange={handleChange} 
              required
            />
          </label>
        </div>
        <div className="question">
          <label>
            Was there any subject matter that you found confusing? If so, please provide specific examples.
            <textarea 
              name="confusingSubject" 
              value={feedback.confusingSubject} 
              onChange={handleChange} 
            />
          </label>
        </div>
        <div className="question">
          <label>
            What is the most valuable thing you learned today (knowledge or skills)?<span className="required">*</span>:
            <textarea 
              name="valuableLearning" 
              value={feedback.valuableLearning} 
              onChange={handleChange} 
              required
            />
          </label>
        </div>
        <div className="question">
          <label>
            Please rate your trainer<span className="required">*</span>:
            <select 
              name="trainerRating" 
              value={feedback.trainerRating} 
              onChange={handleChange} 
              required
            >
              <option value="">Select</option>
              <option value="1">1 - Worst</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5 - Best</option>
            </select>
          </label>
        </div>
        <div className="question">
          <label>
            Please rate the overall training<span className="required">*</span>:
            <select 
              name="overallRating" 
              value={feedback.overallRating} 
              onChange={handleChange} 
              required
            >
              <option value="">Select</option>
              <option value="1">1 - Worst</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5 - Best</option>
            </select>
          </label>
        </div>
        <div className="question">
          <label>
            Any additional comments you wish to share?
            <textarea 
              name="additionalComments" 
              value={feedback.additionalComments} 
              onChange={handleChange} 
            />
          </label>
        </div>
        <div className="button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default TraineeFeedback;
