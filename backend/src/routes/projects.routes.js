const express = require("express");

const projects = require("../data/projects.data");

const validateProject = require("../middlewares/validateProject.middleWare");

const router = express.Router();

// GET all projects
router.get("/", (req, res) => {
  res.json(projects);
});

// GET one project by id
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const project = projects.find((project) => project.id === id);

  if (!project) {
    return res.status(404).json({
      message: "Project not found"
    });
  }

  res.json(project);
});

// POST create new project
router.post("/", validateProject, (req, res) => {
  const newProject = {
    id: projects.length + 1,
    title: req.body.title,
    client: req.body.client,
    category: req.body.category,
    description: req.body.description,
    image: req.body.image
  };

  projects.push(newProject);

  res.status(201).json({
    message: "Project created successfully",
    data: newProject
  });
});

// PUT update project
router.put("/:id", validateProject, (req, res) => {
  const id = parseInt(req.params.id);

  const project = projects.find((project) => project.id === id);

  if (!project) {
    return res.status(404).json({
      message: "Project not found"
    });
  }

  project.title = req.body.title;
  project.client = req.body.client;
  project.category = req.body.category;
  project.description = req.body.description;
  project.image = req.body.image;

  res.json({
    message: "Project updated successfully",
    data: project
  });
});

// DELETE project
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex === -1) {
    return res.status(404).json({
      message: "Project not found"
    });
  }

  const deletedProject = projects.splice(projectIndex, 1);

  res.json({
    message: "Project deleted successfully",
    data: deletedProject[0]
  });
});

module.exports = router;