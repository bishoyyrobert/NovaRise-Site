const express = require("express");

const projectsRoutes = require("./routes/projects.routes");

const contactRoutes = require("./routes/contact.route");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("NovaRise Backend API is running");
});

app.use("/api/projects", projectsRoutes);

app.use("/api/contact", contactRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});