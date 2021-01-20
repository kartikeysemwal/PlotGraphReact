const express = require("express");

const app = express();

app.use(express.json({ extended: false }));

//routes
app.use("/api/createdata", require("./routes/data"));

//Set port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
