import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VisitorList = ({ visitors, setVisitors }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch the list of visitors from the backend
    const fetchVisitors = async () => {
      try {
        const response = await axios.get('https://namehub.onrender.com/visitors');
        setVisitors(response.data);
      } catch (error) {
        console.error('Error fetching visitors:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVisitors();
  }, [setVisitors]);

  return (
    <div className="visitor-list">
      <h2>Visitors</h2>
      {isLoading ? (
        <p>Loading visitors...</p>
      ) : (
        visitors.map((visitor, index) => (
          <div key={index} className="visitor-card">
            <p>
              <strong>Name:</strong> {visitor.name}
            </p>
            <p>
              <strong>Visited At:</strong> {new Date(visitor.createdAt).toLocaleString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default VisitorList;
