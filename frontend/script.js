// Función para cerrar sesión
function logout() {
    console.log("Cerrando sesión...");
    window.location.href = "login.html";
  }
  
  // URL base de la API
  const API_URL = "http://localhost:3000";
  
  // Función para cargar contenido según el tipo seleccionado
  async function loadContent(type) {
    const data = await fetchData(type);
    displayContent(data, type);
  }
  
 // Función para cargar el contenido basado en el tipo y mostrar la sección correspondiente
async function loadContent(type) {
  // Ocultar todas las secciones
  const allSections = document.querySelectorAll('.content-section');
  allSections.forEach(section => section.style.display = 'none');

  // Mostrar la sección correspondiente
  const contentSection = document.getElementById(type);
  if (contentSection) {
    contentSection.style.display = 'block';  // Mostrar la sección seleccionada
  }

  // Obtener y mostrar el contenido
  const content = await fetchData(type);
  const contentContainer = document.getElementById(`${type}-content`);
  
  // Limpiar contenido previo
  contentContainer.innerHTML = '';

  if (content.length > 0) {
    content.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('content-item');
      
      if (type === 'faq') {
        div.innerHTML = `<h5>${item.question}</h5><p>${item.answer}</p>`;
      } else if (type === 'activities' || type === 'tips') {
        div.innerHTML = `<h5>${item.title}</h5><p>${item.description}</p>`;
      } else if (type === 'resources') {
        let resourceContent = `<h5>${item.title}</h5><p>${item.description}</p>`;
        if (item.type === 'video' || item.type === 'tutorial') {
          resourceContent += `<a href="${item.url}" target="_blank">Ver recurso</a>`;
        } else if (item.type === 'infographic') {
          resourceContent += `<a href="${item.url}" target="_blank">Ver infografía</a>`;
        }
        div.innerHTML = resourceContent;
      }
      
      contentContainer.appendChild(div);
    });
  } else {
    contentContainer.innerHTML = '<p>No hay contenido disponible.</p>';
  }
}

// Simulación de datos obtenidos de la API
async function fetchData(type) {
  const mockData = {
    faq: [
      { question: "¿Cómo manejo una pataleta?", answer: "Es importante mantener la calma..." },
      { question: "¿Cuándo debo intervenir?", answer: "Interviene cuando la seguridad del niño..." }
    ],
    activities: [
      { title: "Ejercicio de respiración", description: "Realiza respiraciones profundas con tu hijo..." },
      { title: "Juego de calma", description: "Haz que tu hijo juegue con bloques de construcción..." }
    ],
    tips: [
      { title: "Consejo 1", description: "Sé paciente y constante en tus respuestas." },
      { title: "Consejo 2", description: "Usa un tono calmado cuando hables." }
    ],
    resources: [
      { title: "Video: Manejo de frustración", description: "Ver video explicativo.", type: "video", url: "https://www.youtube.com/watch?v=VY7rrpyPVxk" },
      { title: "Infografía: Estrategias de calma", description: "Descarga la infografía.", type: "infographic", url: "https://i.pinimg.com/736x/35/c6/3f/35c63f445f8802a2893e1893a8b5ea0e.jpg" },
      { title: "Tutorial: Técnicas para calmar a tu hijo", description: "Tutorial paso a paso", type: "tutorial", url: "https://www.youtube.com/watch?v=CDVzJ1n9EE0" }
    ]
  };

  return mockData[type] || [];
}


  
  // Función para mostrar contenido dinámico en la página
  function displayContent(data, type) {
    const results = document.getElementById("results");
    results.innerHTML = "";
  
    data.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("item");
  
        if (type === "resources") {
            if (item.type === "video") {
                div.innerHTML = `
                    <h3>${item.title}</h3>
                    <div class="video-container">
                        <iframe src="${item.url}" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <p>${item.description}</p>
                `;
            } else if (item.type === "infographic") {
                div.innerHTML = `
                    <h3>${item.title}</h3>
                    <div class="infographic">
                        <img src="${item.url}" alt="${item.title}">
                    </div>
                    <p>${item.description}</p>
                `;
            } else if (item.type === "tutorial") {
                div.innerHTML = `
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <button onclick="window.location.href='${item.url}'">Ver Tutorial</button>
                `;
            }
        } else {
            if (type === "faq") {
                div.innerHTML = `<h3>${item.question}</h3><p>${item.answer}</p>`;
            } else {
                div.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
            }
        }
  
        results.appendChild(div);
    });
  }
  
  // Evento para los botones de categorías
  document.querySelectorAll(".service-button").forEach(button => {
    button.addEventListener("click", () => {
        const type = button.getAttribute("data-type");
        loadContent(type);
    });
  });
  