const tripsRouter = require('./routes/trips');
app.use('/api/trips', tripsRouter);


import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api/hello') // example backend endpoint
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => setMessage('Error fetching backend'));
  }, []);

  return (
    <div>
      <h1>Wasel Frontend</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App; 