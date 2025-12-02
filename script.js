class Video {
  constructor(id, titulo, link) {
    this.id = id;
    this.titulo = titulo;
    this.link = link;
  }
}

const CONFIG = {
  webhookURL: "https://bryanmtest.app.n8n.cloud/webhook/bbe54098-bcff-40f8-ae19-10f57f1f9a7a",
  storageKey: "proyectos_likes_2025",
};

const videos = [
  // Paralelo A
  new Video(
    1,
    "Proyecto 1: Análisis de Seguridad en Android",
    "https://univalleedu-my.sharepoint.com/:v:/g/personal/mqb2029675_est_univalle_edu/IQAWdSeOEyEkSbJisKnv3X_DAUKRmEtBnEGukraymzjqU8U?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=AS4kvK"
  ),
  new Video(
    2,
    "Proyecto 2: Análisis de Archivos multimedia infectados",
    "https://univalleedu-my.sharepoint.com/:v:/g/personal/mqb2029675_est_univalle_edu/IQADwEJIPUWASYv2VuhLiEqTAdQfAz41a4qIyRr6uLIjpIA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=lt3jym"
  ),
  new Video(
    3,
    "Proyecto 3: SafeGuard Mobile, Análisis de permisos en Android",
    "https://univalleedu-my.sharepoint.com/:v:/g/personal/mqb2029675_est_univalle_edu/IQAlhXt-Dq1QQK7oHsOAfHcYAb7OOc64O706aXeBD7ytI0Y?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=15kaQO"
  ),
  new Video(
    4,
    "Proyecto 4: Monitoreo ambiental en tiempo real",
    "https://univalleedu-my.sharepoint.com/:v:/g/personal/mqb2029675_est_univalle_edu/IQC-Jm5WUzpQRKqD9U1cIxvYAeHpmJMiXMRmDPkNiUrzEW8?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=M2wUbf"
  ),
  new Video(
    5,
    "Proyecto 5: Control de transporte publico en tiempo real y Optimizacion de rutas con ML",
    "https://univalleedu-my.sharepoint.com/:v:/g/personal/mqb2029675_est_univalle_edu/IQAHmPn3I90EToXmM2uxRIljAaNc3iwxjhOGZ3Npb4cLdAU?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=CJY1wO"
  ),
  new Video(
    6,
    "Proyecto 6: Aprendizaje del ingles con ML y realidad aumentada",
    "https://univalleedu-my.sharepoint.com/:v:/g/personal/mqb2029675_est_univalle_edu/IQBkkCeS041cS7IVJcEgnjTUAWEfMjgyJmAUEb8rFDiKeyQ?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=zExqhB"
  ),  
  new Video(
    7,
    "Proyecto 7: Asistente personal y gestions de agendas con ML",
    "https://univalleedu-my.sharepoint.com/:v:/g/personal/mqb2029675_est_univalle_edu/IQA8NUvNRgOARaQxjQeG3TZ_AZzwihkAiXbU478O3gGP-t0?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=5lkgMF"
  ),
  new Video(
    8,
    "Proyecto 8: Estudio de los insectos y la biologia con realidad aumentada",
    "https://univalleedu-my.sharepoint.com/:v:/g/personal/mqb2029675_est_univalle_edu/IQBwE2JSMuTqRaGVBKuAMc7oAYFKSY9TgQwGoUuZnWJgpbs?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=Ka05Ig"
  ),
  new Video (
    9,
    "Proyecto 9: Aplicacion de la realidad aumentada en el aprendizaje musical",
    "https://univalleedu-my.sharepoint.com/:v:/g/personal/mqb2029675_est_univalle_edu/IQB6bgceklG_QLSgZ269I9RUAelGP8iwi8SQ4QktWj7nGNQ?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=fvbjYY"
  ),
  new Video (
    10,
    "Proyecto 10: Cambio de sonido y entorno reactivo con realidad aumentada",
    "https://univalleedu-my.sharepoint.com/:v:/g/personal/mqb2029675_est_univalle_edu/IQDa98T00hg0SL0abDmMY5OvAfNSm3qz2uyyHVqzmSq50vM?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=Ap5uaS"
  ),
  new Video (
    11,
    "Proyecto 11: Enseñanza de historia boliviana con realidad aumentada",
    "https://univalleedu-my.sharepoint.com/:v:/g/personal/mqb2029675_est_univalle_edu/IQDXR10OYtvoTqFBDsmR9X53AUa_AJqQQUJjlCOL0Gskruc?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=VtyTmR"
  ),
  new Video (
    12,
    "Proyecto 12: Enseñanza de figuras historicas de bolivia con realidad aumentada",
    "https://univalleedu-my.sharepoint.com/:v:/g/personal/mqb2029675_est_univalle_edu/IQBcFQEQD_M1R7f8m4N4E4oQASej7zdMzUBO-M71XGmPxXA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=1VUsSI"
  ),
  new Video (
    13,
    "Proyecto 13: Educacion del sistema solar usando realidad aumentada",
    "https://univalleedu-my.sharepoint.com/:v:/g/personal/mqb2029675_est_univalle_edu/IQCfvZ9CHDvhS5zkkCglUqlGAXWkEmzGUjgyDQM-ADCTJf8?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=ugsKAq"
  ),
  new Video (
    14,
    "Proyecto 14: Educacion sobre mecanica y automoviles con realidad virtual",
    "https://univalleedu-my.sharepoint.com/:v:/g/personal/mqb2029675_est_univalle_edu/IQDguxgA1feMS4ExTy2H9f0EAddGo4s76d1j_7UhOdG6OCQ?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=Icu7kK"
  ),
  new Video(
    15,
    "Proyecto 15: Gestor de permisos de aplicaciones en Android",
    "https://univalleedu-my.sharepoint.com/:v:/g/personal/mqb2029675_est_univalle_edu/IQASBXnpdvuCSrVJMfJ28yGtAXK3ZsSfqePmJh0pZvQDPDg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=lqsadY"
  ),
  new Video(
    16,
    "Proyecto 16: Proteccion de archivos y contraseñas con autenticación biométrica",
    "https://univalleedu-my.sharepoint.com/:v:/g/personal/mqb2029675_est_univalle_edu/IQBrQGaEp4JOQ5Z3I7Uwzd4aAQQ0GxxZYkGSHHpFX5yABE8?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=HCwbwq"
  ),

  // Paralelo B
  new Video(
    17,
    "Proyecto 17: Deteccion y combate ante malware y phising",
    "https://univalleedu-my.sharepoint.com/:v:/g/personal/mqb2029675_est_univalle_edu/IQCNv00Jm_T6TaZnvm79Ys24ASJzditBLQGNsA5ik_CZsTM?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=b2suU5"
  ),
  new Video (
    18,
    "Proyecto 18: Keylogger con envio de datos a firebase",
    "https://univalleedu-my.sharepoint.com/:v:/g/personal/mqb2029675_est_univalle_edu/IQDXjfdd-aFcTqbAvse84MeAAYRBn7ZznrerZuGwqupY6zI?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=U94KT5"
  ),
  new Video (
    19,
    "Proyecto 19: Asistente inteligente de apoyo universitario",
    "https://univalleedu-my.sharepoint.com/:v:/g/personal/mqb2029675_est_univalle_edu/IQCvWIawYFyfSZcvOblrWvnOATfHCUvVtWHby3NuK41Ases?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=IBuDNF"
  ),
  new Video (
    20,
    "Proyecto 20: Deteccion de neumonia analizando imágenes radiológicas",
    "https://univalleedu-my.sharepoint.com/:v:/g/personal/mqb2029675_est_univalle_edu/IQAGnFdaxxIxQYSriEOovMMDAXBk8j2rM1hmYCDa8BhKwXs?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=ItAgLY"
  ),
  new Video(
    21,
    "Proyecto 21: Apoyo a la educacion gamificado con realidad aumentada",
    "https://univalleedu-my.sharepoint.com/:v:/g/personal/mqb2029675_est_univalle_edu/IQC0clmxDDclRY-1vruEiRU9AZVxAdJ19RrasogY3F2gEUw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=GbEP7T"
  ),

  // Paralelo C
  new Video(
    22,
    "Proyecto 22: Analisis de sitios web para identificar vulnerabilidades y realizar ataques DDoS",
    "https://univalleedu-my.sharepoint.com/:v:/g/personal/mqb2029675_est_univalle_edu/IQApqMZcIMQTQpiPxuAgcPzQAaWyoQSefGQ8_I_RrVl8Kx0?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=RmhIIN"
  ),
  new Video(
    23,
    "Proyecto 23: Enseñanza de conceptos sobre la protección de puertos y creación de contraseñas seguras",
    "https://univalleedu-my.sharepoint.com/:v:/g/personal/mqb2029675_est_univalle_edu/IQB4tzRlCrfCT4f5_HE8sgYsAetpdqiQBShl5Vp5M9UF3sY?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=DWJRls"
  ),
  new Video (
    24,
    "Proyecto 24: VPN privado para proteccion de datos en redes publicas",
    "https://univalleedu-my.sharepoint.com/:v:/g/personal/mqb2029675_est_univalle_edu/IQDaMWtuFMxYTaI2_lNoe7nGAUn7qdZN_oynliyP-o9LApg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=sFsnFF"
  ),
  new Video (
    25,
    "Proyecto 25: Videojuego para enseñar conceptos de seguridad informatica con realidad aumentada",
    "https://univalleedu-my.sharepoint.com/:v:/g/personal/mqb2029675_est_univalle_edu/IQCTT0zLl0I0QIfLz6_NxrAtAQLbgLJcdVWpLL5NdcgPeF8?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=jQRhYR"
  ),
  new Video (
    26,
    "Proyecto 26: Analisis detallado de aplicaciones para identificar porcentaje de riesgo basado en permisos",
    "https://univalleedu-my.sharepoint.com/:v:/g/personal/mqb2029675_est_univalle_edu/IQATxNwav_JxS7DF4k-YnGQOAQ8U1KEnf9uGME8EM5gMGeo?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=9c8nhR"
  ),
  new Video (
    27,
    "Proyecto 27: Aplicacion para mejorar el aprendizaje sobre el cuerpo humano utilizando realidad aumentada",
    "https://univalleedu-my.sharepoint.com/:v:/g/personal/mqb2029675_est_univalle_edu/IQCZ22nbMpd4T7WLrPig9lVGAT4w_4CL2uksnu2FIqjSQMQ?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=YWFsfG"
  ),
];

function crearGaleria() {
  const gallery = document.getElementById("gallery");

  videos.forEach((video, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.animationDelay = `${index * 0.1}s`;

    // Estructura simplificada: Header (con # y título) + Footer (botones)
    card.innerHTML = `
            <div class="card-header compact">
                <h3 class="card-title">${video.titulo}</h3>
            </div>
            <div class="card-footer compact">
                <button class="view-btn" onclick="abrirVideo(${video.id})">
                    🎬 Ver
                </button>
                <button class="like-btn" data-video="${video.id}">
                    <span class="like-icon">👍</span>
                    <span class="like-text">Like</span>
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
    
    // Ajuste para manejar la estructura de respuesta de n8n
    // Si n8n devuelve un array con un objeto que contiene 'ranking', o directamente el objeto
    const rankingData = Array.isArray(data) ? data[0].ranking : data.ranking;

    const rankingList = document.getElementById("ranking-list");
    rankingList.innerHTML = '';
    
    if (rankingData && rankingData.length > 0) {
      rankingData.forEach((item, index) => {
        // Limitar a los top 10
        if (index >= 10) return;

        const video = videos.find(v => v.id === item.videoId);
        if (video) {
          const rankingItem = document.createElement('div');
          rankingItem.className = 'ranking-item';
          rankingItem.innerHTML = `
            <span class="rank">#${index + 1}</span>
            <span class="title">${video.titulo}</span>
            <span class="likes">${item.likes}</span>
          `;
          rankingList.appendChild(rankingItem);
        }
      });
    } else {
      rankingList.innerHTML = '<p class="no-votes">Sin votos aún</p>';
    }
  } catch (error) {
    console.error('Error al cargar ranking:', error);
    document.getElementById("ranking-list").innerHTML = '<p class="error-msg">Error carga</p>';
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
    alert("⏳ Espera unos segundos");
    return false;
  }

  if (yaDioLike(videoId)) {
    alert("✅ Ya diste like");
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
    console.log("✅ Like enviado:", result);

    registrarLikeLocal(videoId);
    ultimoLikeTimestamp = ahora;

    const btn = document.querySelector(`[data-video="${videoId}"].like-btn`);
    btn.classList.add("liked");
    btn.querySelector(".like-text").textContent = "Listo";

    cargarRanking();

    alert(`✅ ¡Gracias!`);
    return true;
  } catch (error) {
    console.error("Error al enviar like:", error);
    alert("❌ Error al enviar. Intenta de nuevo.");
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
        btn.querySelector(".like-text").textContent = "Listo";
      }
    }
  });
});
