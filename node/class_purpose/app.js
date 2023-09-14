// Import required modules
const express = require('express');
const app = express();

// Middleware to parse JSON data in requests
app.use(express.json());

// Dummy data for demonstration (replace this with your database)
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
];

// Routes for handling CRUD operations on "items"
app.get('/api/items', (req, res) => {
  res.json(items);
});

app.get('/api/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = items.find((item) => item.id === itemId);
  if (!item) {
    res.status(404).json({ message: 'Item not found' });
  } else {
    res.json(item);
  }
});

app.post('/api/items', (req, res) => {
  const newItem = req.body;
  newItem.id = items.length + 1;
  items.push(newItem);
  res.status(201).json(newItem);
});

app.put('/api/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const itemIndex = items.findIndex((item) => item.id === itemId);
  if (itemIndex === -1) {
    res.status(404).json({ message: 'Item not found' });
  } else {
    items[itemIndex] = { ...items[itemIndex], ...req.body };
    res.json(items[itemIndex]);
  }
});

app.delete('/api/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  items = items.filter((item) => item.id !== itemId);
  res.json({ message: 'Item deleted successfully' });
});

// Start the server
const port = 3000; // You can change this to any available port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
