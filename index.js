const app = require('./app');
const port = 4000;
app.listen(port, () => {
    console.log(`Listening on port at http://localhost:${port}`);
});

