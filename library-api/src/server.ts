import app from './app';
import { env } from './env';

const PORT = env.PORT;
app.listen(PORT, 'localhost', () => {
	console.log(`HTTP Server running on port ${PORT}`);
});
