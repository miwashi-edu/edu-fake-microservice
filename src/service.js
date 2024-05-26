const app = require('./server'); // Ensure correct relative path
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

// Optional: Handle process termination signals to gracefully shut down the server
const shutdown = () => {
    console.log('Gracefully shutting down...');
    server.close(() => {
        console.log('Server shut down.');
        process.exit(0);
    });
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
