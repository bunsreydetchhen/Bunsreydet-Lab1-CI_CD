import app from "./app.js";

const port = process.envPORT ?? 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});