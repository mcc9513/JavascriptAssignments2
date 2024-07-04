//Set up express server
const express = require('express'); // Import the Express module
const app = express(); // Create an instance of an Express application
const PORT = 3000; // Define the port number to listen on

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`); // Log a message when the server starts successfully
});

//make data store for items
let items = []; // Create an empty array to store the items

//Create: POST route for new items
app.use(express.json()); //middleware for JSON request body parsing
app.post('/items', (req, res) => {
    const newItem = {
        id: items.length + 1, // Generate a unique ID
        name: req.body.name // Get the name of the item from the request body
    };
    items.push(newItem); // Add the new item to the items array
    res.status(201).json(newItem); // Send the new item as a response
});

//Read: GET route to retrieve all items, then a GET route to retrieve a single item
app.get('/items', (req, res) => {
    res.json(items); // Respond with the items array
});
app.get('/items/:id', (req, res) => {
    const id = parseInt(req.params.id); // Get the ID parameter from the request
    const item = items.find(item => item.id === id); // Find the item with the corresponding ID
    if (item) {
        res.json(item); // Respond with the item object
    } else {
        res.status(404).send(`Item ${id} not found`); // Respond with an error message
    }
});

//Update: PUT route to update an item
app.put('/items/:id', (req, res) => {
    const id = parseInt(req.params.id); // Get the ID parameter from the request
    const item = items.find(item => item.id === id); // Find the item with the corresponding ID
    if (item) {
        item.name = req.body.name; // Update the name of the item
        res.json(item); // Respond with the updated item
    } else {
        res.status(404).send(`Item ${id} not found`); // Respond with an error message
    }
});

//Delete: DELETE route to delete an item
app.delete('/items/:id', (req, res) => {
    const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
    if (itemIndex === -1) return res.status(404).send('Item not found');
  
    const deletedItem = items.splice(itemIndex, 1); // Remove the item from the array
    res.json(deletedItem[0]); // Respond with the deleted item
  });

// Handle non-existent routes
app.use((req, res, next) => {
    res.status(404).send('Error: Page Not Found'); // Respond with a 404 status for unknown routes
  });
  