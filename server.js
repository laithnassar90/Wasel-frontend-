const express = require('express');
const cors = require('cors');
const path = require('path');

// Import routes
const authRoutes = require('./routes/auth');

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use('/api/auth', authRoutes);

// Health check route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Wasel backend 🚀' });
});

// Serve static files (optional, for frontend build)
// app.use(express.static(path.join(__dirname, 'frontend', 'my-app', 'build')));

// Global 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler middleware (optional, for catching errors)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Start the server
const PORT = process.env.PORT || 3001;
const server = app.listen(PORT, () => {
  console.log(`✅ Wasel backend running on port ${PORT}`);
});

// Handle server errors
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Try changing the port or killing the process using it.`);
  } else {
    console.error('Server error:', err);
  }
});