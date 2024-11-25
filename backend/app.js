const express = require('express');
const app = express();
const port = 3000;

const resources = [
  {
    type: "video",
    title: "Cómo Manejar las Pataletas",
    url: "https://www.youtube.com/watch?v=VY7rrpyPVxk",
    description: "Este video explica cómo calmar a los niños durante las crisis emocionales."
  },
  {
    type: "infographic",
    title: "Infografía sobre Manejo de la Frustración Infantil",
    url: "https://i.pinimg.com/736x/35/c6/3f/35c63f445f8802a2893e1893a8b5ea0e.jpg",
    description: "Infografía que muestra las estrategias más efectivas para manejar la frustración en los niños."
  },
  {
    type: "tutorial",
    title: "Ejercicio de Mindfulness para Niños",
    url: "https://www.youtube.com/watch?v=CDVzJ1n9EE0",
    description: "Un tutorial paso a paso para enseñar a los niños ejercicios de relajación."
  }
];

app.get('/resources', (req, res) => res.json(resources));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
