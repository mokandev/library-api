import app from './app';

const PORT = 8000;
app.listen(PORT, 'localhost', () => {
	console.log(`HTTP Server running on port ${PORT}`);
});
