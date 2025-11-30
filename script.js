class Video {
  constructor(id, titulo, descripcion, link, fecha) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.link = link;
    this.fecha = fecha;
  }
}

const CONFIG = {
  webhookURL: atob("aHR0cHM6Ly9tYW1hbmlicnlhbjEyNTA1LmFwcC5uOG4uY2xvdWQvd2ViaG9vay83NmFmMTg4My0xODU5LTQxNzgtOWQ0ZC01YTc0MzMzM2IyM2U="),
  storageKey: "proyectos_likes_2025",
};

const videos = [
  new Video(
    1,
    "Proyecto 1: App de Ejemplo",
    "Este es un proyecto demostrativo de una aplicación móvil increíble. Incluye funcionalidades avanzadas y un diseño moderno. Aprenderás sobre componentes, navegación y gestión de estado.",
    "https://univalleedu-my.sharepoint.com/:v:/g/personal/mqb2029675_est_univalle_edu/IQAWdSeOEyEkSbJisKnv3X_DAZ2URapRbJFIXsAlKFCeSdY?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=3zlK5D",
    "Noviembre 2024"
  ),
  new Video(
    2,
    "Proyecto 2: Sistema de Gestión",
    "Demostración de un sistema de gestión completo con base de datos local. Manejo de formularios, validaciones y almacenamiento persistente de datos.",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "Noviembre 2024"
  ),
  new Video(
    3,
    "Proyecto 3: App con API REST",
    "Integración con servicios web mediante API REST. Consumo de datos externos, autenticación y manejo de respuestas asíncronas.",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "Noviembre 2024"
  ),
  new Video(
    4,
    "Proyecto 4: UI/UX Avanzado",
    "Diseño de interfaces de usuario con animaciones y transiciones fluidas. Mejores prácticas de experiencia de usuario en aplicaciones móviles.",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "Noviembre 2024"
  ),
  new Video(
    5,
    "Proyecto 5: Geolocalización",
    "Implementación de funcionalidades de GPS y mapas. Seguimiento en tiempo real y marcadores personalizados.",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "Noviembre 2024"
  ),
  new Video(
    6,
    "Proyecto 6: Notificaciones Push",
    "Sistema de notificaciones locales y remotas. Gestión de permisos y personalización de alertas.",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "Noviembre 2024"
  ),
];

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
                    🎬 Ver Video
                </button>
            </div>
            <div class="card-actions">
                <button class="like-btn" data-video="${video.id}">
                    <span class="like-icon">👍</span>
                    <span class="like-text">Me gusta</span>
                </button>
            </div>
        `;

    gallery.appendChild(card);
  });
}

async function cargarRanking() {
  try {
    const response = await fetch(CONFIG.webhookURL, {
      method: 'GET'
    });
    const data = await response.json();
    
    console.log(data[0].ranking);

    const rankingList = document.getElementById("ranking-list");
    rankingList.innerHTML = '';
    
    if (data[0].ranking && data[0].ranking.length > 0) {
      data[0].ranking.forEach((item, index) => {
        const video = videos.find(v => v.id === item.videoId);
        if (index >= 10){
          return;
        }
        if (video) {
          const rankingItem = document.createElement('div');
          rankingItem.className = 'ranking-item';
          rankingItem.innerHTML = `
            <span class="rank">#${index + 1}</span>
            <span class="title">${video.titulo}</span>
            <span class="likes">${item.likes} ${item.likes === 1 ? 'like' : 'likes'}</span>
          `;
          rankingList.appendChild(rankingItem);
        }
      });
    } 
    else {
      rankingList.innerHTML = '<p class="no-votes">Aún no hay votos registrados</p>';
    }
  } catch (error) {
    console.error('Error al cargar ranking:', error);
    document.getElementById("ranking-list").innerHTML = '<p class="error-msg">Error al cargar el ranking</p>';
  }
}

function abrirVideo(id) {
  const video = videos.find((v) => v.id === id);
  if (video) {
    window.open(video.link, "_blank");
  }
}

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

  const fingerprint = btoa(
    `${canvasData.slice(0, 50)}-${userAgent}-${screenRes}-${timezone}`
  );
  return fingerprint.slice(0, 32);
}

function yaDioLike(videoId) {
  const likes = JSON.parse(localStorage.getItem(CONFIG.storageKey) || "[]");
  const fingerprint = getFingerprint();
  return likes.some(
    (l) => l.videoId === videoId && l.fingerprint === fingerprint
  );
}

function registrarLikeLocal(videoId) {
  const likes = JSON.parse(localStorage.getItem(CONFIG.storageKey) || "[]");
  likes.push({
    videoId: videoId,
    fingerprint: getFingerprint(),
    timestamp: new Date().toISOString(),
  });
  localStorage.setItem(CONFIG.storageKey, JSON.stringify(likes));
}

let ultimoLikeTimestamp = 0;
const COOLDOWN_MS = 3000;

async function enviarLike(videoId) {
  const ahora = Date.now();
  if (ahora - ultimoLikeTimestamp < COOLDOWN_MS) {
    alert("⏳ Espera unos segundos antes de dar otro like");
    return false;
  }

  if (yaDioLike(videoId)) {
    alert("✅ Ya diste like a este proyecto");
    return false;
  }

  const video = videos.find((v) => v.id === videoId);

  const datos = {
    videoId: videoId,
    titulo: video.titulo,
    fingerprint: getFingerprint(),
    timestamp: new Date().toISOString(),
  };

  try {
    const response = await fetch(CONFIG.webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });

    if (!response.ok) {
      throw new Error("Error al enviar like");
    }

    const result = await response.json();
    console.log("✅ Like enviado exitosamente:", result);

    registrarLikeLocal(videoId);
    ultimoLikeTimestamp = ahora;

    const btn = document.querySelector(`[data-video="${videoId}"].like-btn`);
    btn.classList.add("liked");
    btn.querySelector(".like-text").textContent = "Te gusta";

    cargarRanking();

    alert(`✅ ¡Gracias por tu like!`);
    return true;
  } catch (error) {
    console.error("Error al enviar like:", error);
    alert("❌ Error al enviar el like. Intenta de nuevo.");
    return false;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  crearGaleria();
  cargarRanking();

  document.addEventListener("click", (e) => {
    if (e.target.closest(".like-btn")) {
      const btn = e.target.closest(".like-btn");
      const videoId = parseInt(btn.dataset.video);
      enviarLike(videoId);
    }
  });

  const likes = JSON.parse(localStorage.getItem(CONFIG.storageKey) || "[]");
  const fingerprint = getFingerprint();
  likes.forEach((like) => {
    if (like.fingerprint === fingerprint) {
      const btn = document.querySelector(`[data-video="${like.videoId}"].like-btn`);
      if (btn) {
        btn.classList.add("liked");
        btn.querySelector(".like-text").textContent = "Te gusta";
      }
    }
  });
});