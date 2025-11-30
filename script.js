// Clase Video para estructurar los datos
class Video {
  constructor(id, titulo, descripcion, link, fecha) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.link = link;
    this.fecha = fecha;
    this.votos = 0; // Contador de votos (se puede cargar desde la BD)
  }
}

// CONFIGURACIÓN DE VOTACIÓN
const CONFIG = {
  // URL del webhook de n8n - Production URL
  webhookURL:
    "https://mamanibryam12505.app.n8n.cloud/webhook-test/76af1883-1859-4178-9d4d-5a743333b23e",

  // Para votación única, usaremos localStorage + fingerprint básico
  storageKey: "proyectos_votados",
};

// Array de videos - Aquí puedes agregar tus videos de SharePoint
const videos = [
  new Video(
    1,
    "Proyecto 1: App de Ejemplo",
    "Este es un proyecto demostrativo de una aplicación móvil increíble. Incluye funcionalidades avanzadas y un diseño moderno. Aprenderás sobre componentes, navegación y gestión de estado.",
    "https://univalleedu-my.sharepoint.com/:v:/g/personal/mqb2029675_est_univalle_edu/IQAWdSeOEyEkSbJisKnv3X_DAZ2URapRbJFIXsAlKFCeSdY?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=3zlK5D", // Rickroll 😄
    "Noviembre 2025"
  ),
  new Video(
    2,
    "Proyecto 2: Sistema de Gestión",
    "Demostración de un sistema de gestión completo con base de datos local. Manejo de formularios, validaciones y almacenamiento persistente de datos.",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "Noviembre 2025"
  ),
  new Video(
    3,
    "Proyecto 3: App con API REST",
    "Integración con servicios web mediante API REST. Consumo de datos externos, autenticación y manejo de respuestas asíncronas.",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "Noviembre 2025"
  ),
  new Video(
    4,
    "Proyecto 4: UI/UX Avanzado",
    "Diseño de interfaces de usuario con animaciones y transiciones fluidas. Mejores prácticas de experiencia de usuario en aplicaciones móviles.",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "Noviembre 2025"
  ),
  new Video(
    5,
    "Proyecto 5: Geolocalización",
    "Implementación de funcionalidades de GPS y mapas. Seguimiento en tiempo real y marcadores personalizados.",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "Noviembre 2025"
  ),
  new Video(
    6,
    "Proyecto 6: Notificaciones Push",
    "Sistema de notificaciones locales y remotas. Gestión de permisos y personalización de alertas.",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "Noviembre 2025"
  ),
];

// Función para crear las cards dinámicamente
function crearGaleria() {
  const gallery = document.getElementById("gallery");

  videos.forEach((video, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
            <div class="card-header">
                <div class="card-number">Proyecto #${video.id}</div>
                <h3 class="card-title">${video.titulo}</h3>
                <div class="card-date">📅 ${video.fecha}</div>
            </div>
            <div class="card-body">
                <p class="card-description">${video.descripcion}</p>
            </div>
            <div class="card-footer">
                <button class="view-btn" onclick="abrirVideo(${video.id})">
                    Ver Video
                </button>
                <span class="video-icon">🎬</span>
            </div>
            <div class="card-actions">
                <div class="rating">
                    <span class="star" data-video="${video.id}" data-rating="1">⭐</span>
                    <span class="star" data-video="${video.id}" data-rating="2">⭐</span>
                    <span class="star" data-video="${video.id}" data-rating="3">⭐</span>
                    <span class="star" data-video="${video.id}" data-rating="4">⭐</span>
                    <span class="star" data-video="${video.id}" data-rating="5">⭐</span>
                </div>
                <div class="vote-count" id="votos-${video.id}">
                    ${video.votos} votos
                </div>
            </div>
        `;

    gallery.appendChild(card);
  });
}

// Función para abrir el modal con el video
function abrirVideo(id) {
  const video = videos.find((v) => v.id === id);

  if (video) {
    document.getElementById("modalTitle").textContent = video.titulo;
    document.getElementById("modalDescription").textContent = video.descripcion;
    document.getElementById("videoFrame").src = video.link;
    document.getElementById("videoModal").style.display = "block";

    // Guardar el ID del video actual para el botón de abrir en nueva pestaña
    document.getElementById("videoModal").dataset.currentVideoId = id;

    // Prevenir scroll del body cuando el modal está abierto
    document.body.style.overflow = "hidden";
  }
}

// Función para abrir video en nueva pestaña
function abrirEnNuevaPestaña() {
  const videoId = document.getElementById("videoModal").dataset.currentVideoId;
  const video = videos.find((v) => v.id === parseInt(videoId));

  if (video) {
    // Convertir el link de embed a link normal si es necesario
    let linkDirecto = video.link;

    // Si es un link de embed de YouTube, convertirlo a link normal
    if (linkDirecto.includes("youtube.com/embed/")) {
      linkDirecto = linkDirecto.replace("/embed/", "/watch?v=");
    }

    window.open(linkDirecto, "_blank");
  }
}

// Función para cerrar el modal
function cerrarModal() {
  document.getElementById("videoModal").style.display = "none";
  document.getElementById("videoFrame").src = "";

  // Restaurar scroll del body
  document.body.style.overflow = "auto";
}

// Función para obtener fingerprint básico del usuario
function getFingerprint() {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  ctx.textBaseline = "top";
  ctx.font = "14px 'Arial'";
  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = "#f60";
  ctx.fillRect(125, 1, 62, 20);
  ctx.fillStyle = "#069";
  ctx.fillText("Browser Fingerprint", 2, 15);

  const canvasData = canvas.toDataURL();
  const userAgent = navigator.userAgent;
  const screenRes = `${screen.width}x${screen.height}`;
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // Crear un hash simple
  const fingerprint = btoa(
    `${canvasData.slice(0, 50)}-${userAgent}-${screenRes}-${timezone}`
  );
  return fingerprint.slice(0, 32);
}

// Verificar si ya votó por este proyecto
function yaVoto(videoId) {
  const votados = JSON.parse(localStorage.getItem(CONFIG.storageKey) || "[]");
  const fingerprint = getFingerprint();
  return votados.some(
    (v) => v.videoId === videoId && v.fingerprint === fingerprint
  );
}

// Registrar voto localmente
function registrarVotoLocal(videoId, rating) {
  const votados = JSON.parse(localStorage.getItem(CONFIG.storageKey) || "[]");
  votados.push({
    videoId: videoId,
    rating: rating,
    fingerprint: getFingerprint(),
    timestamp: new Date().toISOString(),
  });
  localStorage.setItem(CONFIG.storageKey, JSON.stringify(votados));
}

// Función para enviar voto a n8n o webhook
async function enviarVoto(videoId, rating) {
  if (yaVoto(videoId)) {
    alert("Ya has votado por este proyecto");
    return false;
  }

  const video = videos.find((v) => v.id === videoId);

  const datos = {
    videoId: videoId,
    titulo: video.titulo,
    rating: rating,
    fingerprint: getFingerprint(),
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    screenResolution: `${screen.width}x${screen.height}`,
  };

  try {
    // Enviar voto a n8n
    const response = await fetch(CONFIG.webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });

    if (!response.ok) {
      throw new Error("Error al enviar voto");
    }

    const result = await response.json();
    console.log("✅ Voto enviado exitosamente:", result);

    // Registrar localmente
    registrarVotoLocal(videoId, rating);

    // Actualizar contador visual
    video.votos++;
    document.getElementById(
      `votos-${videoId}`
    ).textContent = `${video.votos} votos`;

    // Marcar estrellas como votadas y mostrar el rating
    const card = document
      .querySelector(`[data-video="${videoId}"]`)
      .closest(".card");
    card.classList.add("voted");

    // Iluminar permanentemente las estrellas votadas
    iluminarEstrellas(videoId, rating, true);

    alert(`✅ ¡Gracias por tu voto! (${rating} estrellas)`);
    return true;
  } catch (error) {
    console.error("Error al enviar voto:", error);
    alert("❌ Error al enviar el voto. Intenta de nuevo.");
    return false;
  }
}

// Función para iluminar estrellas hasta el rating seleccionado
function iluminarEstrellas(videoId, rating, permanente = false) {
  const estrellas = document.querySelectorAll(`[data-video="${videoId}"].star`);

  estrellas.forEach((estrella, index) => {
    if (index < rating) {
      estrella.style.filter = "grayscale(0%)";
      estrella.style.opacity = "1";
      if (permanente) {
        estrella.style.transform = "scale(1.1)";
      }
    } else {
      if (!permanente) {
        estrella.style.filter = "grayscale(100%)";
        estrella.style.opacity = "0.5";
        estrella.style.transform = "scale(1)";
      }
    }
  });
}

// Función para resetear estrellas
function resetearEstrellas(videoId) {
  const card = document
    .querySelector(`[data-video="${videoId}"]`)
    ?.closest(".card");

  // Si ya votó, mantener el estado voted
  if (card && card.classList.contains("voted")) {
    return;
  }

  const estrellas = document.querySelectorAll(`[data-video="${videoId}"].star`);
  estrellas.forEach((estrella) => {
    estrella.style.filter = "grayscale(100%)";
    estrella.style.opacity = "0.5";
    estrella.style.transform = "scale(1)";
  });
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  crearGaleria();

  // Inicializar sistema de estrellas con hover
  document.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("star")) {
      const videoId = parseInt(e.target.dataset.video);
      const rating = parseInt(e.target.dataset.rating);

      // Verificar si ya votó
      const card = e.target.closest(".card");
      if (!card.classList.contains("voted")) {
        iluminarEstrellas(videoId, rating);
      }
    }
  });

  // Resetear estrellas cuando sale el mouse
  document.addEventListener("mouseout", (e) => {
    if (e.target.classList.contains("star")) {
      const videoId = parseInt(e.target.dataset.video);
      resetearEstrellas(videoId);
    }
  });

  // Click para votar
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("star")) {
      const videoId = parseInt(e.target.dataset.video);
      const rating = parseInt(e.target.dataset.rating);
      enviarVoto(videoId, rating);
    }
  });

  // Marcar proyectos ya votados y mostrar su rating
  const votados = JSON.parse(localStorage.getItem(CONFIG.storageKey) || "[]");
  const fingerprint = getFingerprint();
  votados.forEach((voto) => {
    if (voto.fingerprint === fingerprint) {
      const card = document
        .querySelector(`[data-video="${voto.videoId}"]`)
        ?.closest(".card");
      if (card) {
        card.classList.add("voted");
        // Mostrar las estrellas votadas
        iluminarEstrellas(voto.videoId, voto.rating, true);
      }
    }
  });

  // Cerrar modal al hacer click en la X
  document.querySelector(".close").addEventListener("click", cerrarModal);

  // Cerrar modal al hacer click fuera del contenido
  document.getElementById("videoModal").addEventListener("click", (e) => {
    if (e.target.id === "videoModal") {
      cerrarModal();
    }
  });

  // Cerrar modal con la tecla ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      cerrarModal();
    }
  });
});

/* 
   NOTA SOBRE SHAREPOINT:
   
   Para usar videos de SharePoint, necesitas:
   1. Obtener el enlace de "compartir" del video
   2. Asegurarte de que el enlace tenga permisos adecuados
   3. SharePoint puede generar enlaces embebidos
   
   Formato típico de SharePoint:
   "https://tu-organizacion.sharepoint.com/:v:/s/tu-sitio/ruta-al-video"
   
   Para hacer el video embebible, SharePoint suele tener una opción
   "Insertar" o "Embed" que te da un iframe con el formato correcto.
   
   Si el SharePoint es privado, los usuarios necesitarán:
   - Estar autenticados en la organización
   - Tener permisos de acceso al archivo/carpeta
   
   Alternativas:
   - Usar enlaces de "compartir con cualquier persona"
   - Configurar permisos de solo lectura
   - Usar Microsoft Stream si está disponible
*/
