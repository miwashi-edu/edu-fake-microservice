const app = require('./server');
const { PORT } = require('./config');

const server = app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    console.log(`Ctrl-C to stop server!`);
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