const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, 'public');
app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(publicDirectoryPath, 'home.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(publicDirectoryPath, 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(publicDirectoryPath, 'contact.html'));
});

app.get('/location', (req, res) => {
    res.sendFile(path.join(publicDirectoryPath, 'location.html'));
});

app.get('/services', (req, res) => {
    res.sendFile(path.join(publicDirectoryPath, 'services.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});