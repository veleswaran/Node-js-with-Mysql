const books = [
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    // Add more books as needed
  ];
// ... (previously defined code)

// Route to show all books
app1.get('/api/books', (req, res) => {
    res.json(books);
  });
  
  // ... (previously defined code)
  
  // Start the server
  const port = 3000; // You can change this to any available port
  app1.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
  