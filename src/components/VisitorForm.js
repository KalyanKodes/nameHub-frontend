import React, { useState } from 'react';
import axios from 'axios';

const VisitorForm = ({ addVisitor }) => {
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post('https://namehub.onrender.com/addVisitor', { name });
      addVisitor({ name, createdAt: new Date() }); // Add the visitor to state
      setName('');
    } catch (error) {
      console.error('Error adding visitor:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="visitor-form">
      <h2>Enter Your Name</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
          disabled={isSubmitting}
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default VisitorForm;
