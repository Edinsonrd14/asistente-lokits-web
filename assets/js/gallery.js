const galleryTrack = document.querySelector("#galleryTrack");
const galleryDots = document.querySelector("#galleryDots");
const galleryPrev = document.querySelector("#galleryPrev");
const galleryNext = document.querySelector("#galleryNext");
const galleryViewport = document.querySelector("#galleryViewport");
const galleryCategoryFilters = document.querySelectorAll(".gallery-category-btn");

const galleryItems = [
  /* =========================
     GUERRA
  ========================= */
  {
    icon: "⚔️",
    title: "Guerra actual",
    command: "!war",
    category: "Guerra",
    tag: "Guerra",
    message: [
      "⚔️ Guerra actual",
      "⚔️ Liga de Clanes",
      "",
      "⏳ Tiempo restante: 3h 0m",
      "📌 Tamaño: 30 vs 30",
      "",
      "🏰 Roman Empire™",
      "⭐ Estrellas: 35",
      "🗡️ Ataques: 44/60",
      "📍 Restantes: 16",
      "💥 Destrucción: 93.6%",
      "",
      "🏯 Dark Titans",
      "⭐ Estrellas: 33",
      "🗡️ Ataques: 41/60",
      "📍 Restantes: 19",
      "💥 Destrucción: 91.4%",
      "",
      "📌 Usa !attacks para ver pendientes."
    ]
  },
  {
    icon: "🎯",
    title: "Ataques pendientes",
    command: "!attacks",
    category: "Guerra",
    tag: "Guerra",
    message: [
      "🏆 Ataques pendientes",
      "🏟️ Liga de Clanes",
      "",
      "⭐ Equipo: 35 | Rival: 33",
      "⏰ Tiempo: 3h 0m",
      "",
      "⚔️ Pendientes",
      "",
      "#19 ♠️Black/King♠️ | 1⚔️",
      "#7 Douglas | 1⚔️",
      "#14 ElTigreRD | 2⚔️",
      "#22 ShadowMax | 1⚔️",
      "#25 KevinPro | 2⚔️",
      "#28 LaBestiaRD | 1⚔️",
      "#30 JuniorRD | 1⚔️",
      "",
      "📌 Total pendiente: 9 ataques."
    ]
  },
  {
    icon: "🏅",
    title: "Top guerra",
    command: "!top",
    category: "Guerra",
    tag: "Guerra",
    message: [
      "🏅 Top guerra",
      "🏰 Roman Empire™",
      "",
      "🥇 #3 Musashi ➜ #4",
      "⭐ 3 estrellas | 100%",
      "",
      "🥈 #8 Douglas ➜ #11",
      "⭐ 3 estrellas | 98%",
      "",
      "🥉 #12 ALFA ➜ #15",
      "⭐ 3 estrellas | 96%",
      "",
      "🏅 #17 Pedro ➜ #19",
      "⭐ 3 estrellas | 94%",
      "",
      "🏅 #21 ShadowMax ➜ #24",
      "⭐ 2 estrellas | 91%"
    ]
  },
  {
    icon: "❌",
    title: "Ataques bajos",
    command: "!failed",
    category: "Guerra",
    tag: "Guerra",
    message: [
      "❌ Ataques bajos",
      "🏰 Roman Empire™",
      "",
      "Filtro usado: todos",
      "",
      "#11 KevinRD ➜ #8",
      "⭐ 1 estrella | 67%",
      "",
      "#16 LuisPro ➜ #14",
      "⭐ 1 estrella | 72%",
      "",
      "#23 BryanX ➜ #21",
      "⭐ 2 estrellas | 81%",
      "",
      "#27 DarkAngel ➜ #18",
      "⭐ 0 estrellas | 49%",
      "",
      "📌 Puedes usar:",
      "!failed 0",
      "!failed 1",
      "!failed 2"
    ]
  },
  {
    icon: "0️⃣",
    title: "Fallidos 0 estrellas",
    command: "!failed 0",
    category: "Guerra",
    tag: "Guerra",
    message: [
      "❌ Ataques de 0 estrellas",
      "🏰 Roman Empire™",
      "",
      "#27 DarkAngel ➜ #18",
      "⭐ 0 estrellas | 49%",
      "",
      "#30 JuniorRD ➜ #22",
      "⭐ 0 estrellas | 42%",
      "",
      "📌 Total encontrados: 2",
      "⚠️ Revisar estrategia antes del próximo ataque."
    ]
  },
  {
    icon: "1️⃣",
    title: "Fallidos 1 estrella",
    command: "!failed 1",
    category: "Guerra",
    tag: "Guerra",
    message: [
      "⚠️ Ataques de 1 estrella",
      "🏰 Roman Empire™",
      "",
      "#11 KevinRD ➜ #8",
      "⭐ 1 estrella | 67%",
      "",
      "#16 LuisPro ➜ #14",
      "⭐ 1 estrella | 72%",
      "",
      "#24 CarlosRD ➜ #20",
      "⭐ 1 estrella | 69%",
      "",
      "📌 Total encontrados: 3"
    ]
  },
  {
    icon: "2️⃣",
    title: "Ataques 2 estrellas",
    command: "!failed 2",
    category: "Guerra",
    tag: "Guerra",
    message: [
      "⚔️ Ataques de 2 estrellas",
      "🏰 Roman Empire™",
      "",
      "#6 ALFA ➜ #5",
      "⭐ 2 estrellas | 89%",
      "",
      "#13 Pedro ➜ #10",
      "⭐ 2 estrellas | 84%",
      "",
      "#20 ShadowMax ➜ #17",
      "⭐ 2 estrellas | 81%",
      "",
      "📌 Ataques buenos, pero mejorables."
    ]
  },
  {
    icon: "🧹",
    title: "Limpieza de guerra",
    command: "!cleanup",
    category: "Guerra",
    tag: "Guerra",
    message: [
      "🧹 Limpieza de guerra",
      "🏰 Roman Empire™",
      "",
      "🎯 Objetivos recomendados",
      "#18 CarlosRD | TH16 | 2⭐ posible",
      "#21 ShadowWolf | TH15 | 3⭐ posible",
      "#24 KingMax | TH15 | 3⭐ posible",
      "#26 JuniorRD | TH14 | 3⭐ posible",
      "",
      "⚠️ Evitar ataques altos",
      "#3 DarkLord | TH18",
      "#5 TitanWar | TH18",
      "",
      "📌 Prioriza bases con mayor probabilidad."
    ]
  },
  {
    icon: "🧠",
    title: "Análisis avanzado",
    command: "!analysis",
    category: "Guerra",
    tag: "Guerra",
    message: [
      "🧠 Análisis de guerra",
      "🏰 Roman Empire™ vs Dark Titans",
      "",
      "📊 Balance general",
      "Equipo: +2⭐ arriba",
      "Destrucción: +2.2%",
      "Ataques restantes: 16",
      "",
      "🏠 Diferencia TH",
      "TH18: 4 vs 5",
      "TH17: 8 vs 7",
      "TH16: 10 vs 9",
      "",
      "📌 Recomendación",
      "Cuidar ataques altos y limpiar zona media."
    ]
  },
  {
    icon: "📈",
    title: "Pronóstico",
    command: "!forecast",
    category: "Guerra",
    tag: "Guerra",
    message: [
      "📈 Pronóstico de guerra",
      "🏰 Roman Empire™",
      "⚔️ Dark Titans",
      "",
      "📊 Estado: ventaja leve",
      "",
      "⚔️ Restan",
      "Equipo: 16 ataques",
      "Rival: 19 ataques",
      "",
      "⭐ Proyección",
      "Equipo: 44 - 47⭐",
      "Rival: 42 - 46⭐",
      "",
      "📌 Predicción",
      "Guerra cerrada. No desperdiciar ataques altos."
    ]
  },

  /* =========================
     CWL
  ========================= */
  {
    icon: "🏆",
    title: "Top CWL",
    command: "!cwltop",
    category: "CWL",
    tag: "CWL",
    message: [
      "🏅 Top CWL",
      "🏰 Roman Empire™",
      "📅 Temporada: 2026-06 CWL",
      "",
      "🏠 TH18",
      "1. ☆El padrino☆ | 22⭐",
      "2. The Hareigns | 22⭐",
      "3. TuMamA02 | 21⭐",
      "",
      "🏠 TH17",
      "1. ALFA | 23⭐",
      "2. Musashi | 21⭐",
      "3. Pedro | 18⭐",
      "",
      "🏠 TH16",
      "1. Douglas | 19⭐",
      "2. ShadowMax | 18⭐",
      "3. ElTigreRD | 17⭐",
      "",
      "📌 Basado en ataques registrados durante la liga."
    ]
  },
  {
    icon: "📋",
    title: "Resumen CWL",
    command: "!cwlsummary",
    category: "CWL",
    tag: "CWL",
    message: [
      "🏆 Resumen CWL",
      "🏰 Roman Empire™",
      "📅 Temporada: 2026-06",
      "",
      "⚔️ Guerras jugadas: 5",
      "🏆 Victorias: 4",
      "❌ Derrotas: 1",
      "⭐ Estrellas: 184",
      "🔥 Destrucción: 91.8%",
      "",
      "📍 Posición actual: #2",
      "🏆 Puntos CWL: 312",
      "",
      "📌 Faltan rondas por completar."
    ]
  },

  /* =========================
     RIVAL
  ========================= */
  {
    icon: "🔍",
    title: "Scout rival",
    command: "!rival",
    category: "Rival",
    tag: "Rival",
    message: [
      "🔎 CWL",
      "",
      "🏰 Roman Empire™",
      "🏯 DARK KNIGHTS",
      "📅 Temporada: 2026-06",
      "📌 Estado: Probable",
      "📊 Base: rondas visibles",
      "",
      "👥 Posibles jugadores",
      "",
      "#1 DarkLord | TH18",
      "#2 ZeusWar | TH18",
      "#3 TitanRD | TH18",
      "#4 GhostWar | TH17",
      "#5 MatadorPro | TH17",
      "#6 AlexKing | TH16",
      "",
      "⚠️ Estimación basada en rondas anteriores."
    ]
  },
  {
    icon: "📌",
    title: "Scout completo",
    command: "!rival full",
    category: "Rival",
    tag: "Rival",
    message: [
      "🔎 CWL avanzado",
      "",
      "🏰 Roman Empire™",
      "🏯 DARK KNIGHTS",
      "📅 Temporada: 2026-06",
      "📊 Rondas analizadas: 5",
      "",
      "✅ Más probables",
      "#1 DarkLord | TH18 | 5/5",
      "#2 ZeusWar | TH18 | 5/5",
      "#3 TitanRD | TH18 | 4/5",
      "#4 GhostWar | TH17 | 4/5",
      "",
      "🟡 Posibles rotativos",
      "#12 BryanRD | TH16 | 2/5",
      "#15 CarlosPro | TH15 | 2/5"
    ]
  },
  {
    icon: "📄",
    title: "Resumen rival",
    command: "!rival resumen",
    category: "Rival",
    tag: "Rival",
    message: [
      "🏯 Resumen del rival CWL",
      "",
      "🏰 DARK KNIGHTS",
      "🔖 #QWERTY9",
      "📅 Temporada: 2026-06",
      "📌 Estado: Probable",
      "",
      "👥 Jugadores detectados: 28",
      "",
      "🏠 TH más altos:",
      "TH18: 4",
      "TH17: 7",
      "TH16: 6",
      "TH15: 5",
      "",
      "📌 Rival fuerte en zona alta."
    ]
  },
  {
    icon: "👥",
    title: "Miembros rival",
    command: "!rival miembros",
    category: "Rival",
    tag: "Rival",
    message: [
      "🏯 Miembros del rival",
      "",
      "🏰 DARK KNIGHTS",
      "🔖 #QWERTY9",
      "👥 Miembros visibles: 48",
      "",
      "#1 DarkLord | TH18",
      "#2 ZeusWar | TH18",
      "#3 TitanRD | TH18",
      "#4 GhostWar | TH17",
      "#5 MatadorPro | TH17",
      "#6 AlexKing | TH16",
      "#7 BryanRD | TH16",
      "#8 CarlosPro | TH15",
      "",
      "⚠️ Esta no es una alineación confirmada."
    ]
  },
  {
    icon: "❓",
    title: "Ayuda rival",
    command: "!rival help",
    category: "Rival",
    tag: "Rival",
    message: [
      "🔎 Comandos Scout CWL",
      "",
      "!rival",
      "Ver jugadores del rival actual.",
      "",
      "!rival full",
      "Analizar todas las rondas del rival.",
      "",
      "!rival miembros",
      "Ver miembros visibles del clan rival.",
      "",
      "!rival resumen",
      "Ver resumen corto del rival.",
      "",
      "📌 Usa estos comandos durante CWL."
    ]
  },

  /* =========================
     AVISOS AUTOMÁTICOS REALES
  ========================= */
  {
    icon: "🔎",
    title: "Guerra encontrada",
    command: null,
    automatic: true,
    category: "Avisos",
    tag: "Aviso automático",
    message: [
      "🔎 Guerra encontrada",
      "",
      "🏰 Roman Empire™",
      "🆚 Dark Titans",
      "⚔️ Tipo: Liga de Clanes",
      "📌 Tamaño: 30 vs 30",
      "",
      "⏳ Preparación activa",
      "🕒 Inicia en: 18h 42m",
      "",
      "📌 El bot dará seguimiento automático a esta guerra."
    ]
  },
  {
    icon: "⏳",
    title: "Guerra por iniciar",
    command: null,
    automatic: true,
    category: "Avisos",
    tag: "Aviso automático",
    message: [
      "⏳ La guerra está por iniciar",
      "",
      "🏰 Roman Empire™",
      "🆚 Dark Titans",
      "",
      "⚔️ Liga de Clanes",
      "🕒 Inicia en: 30m",
      "",
      "📌 Revisa tus objetivos y prepara tus ataques.",
      "🔥 Buena suerte, clan."
    ]
  },
  {
    icon: "🔥",
    title: "Guerra iniciada",
    command: null,
    automatic: true,
    category: "Avisos",
    tag: "Aviso automático",
    message: [
      "🔥 Guerra iniciada",
      "",
      "🏰 Roman Empire™",
      "🆚 Dark Titans",
      "",
      "⚔️ Ya pueden atacar.",
      "⭐ Objetivo: asegurar estrellas temprano.",
      "",
      "📌 Usa !war para ver el estado.",
      "📌 Usa !attacks para revisar pendientes."
    ]
  },
  {
    icon: "⏰",
    title: "Queda poco tiempo",
    command: null,
    automatic: true,
    category: "Avisos",
    tag: "Aviso automático",
    message: [
      "⏰ Queda poco tiempo de guerra",
      "",
      "🏰 Roman Empire™",
      "🆚 Dark Titans",
      "",
      "⏳ Tiempo restante: 1h 0m",
      "⭐ Equipo: 35 | Rival: 33",
      "⚔️ Ataques pendientes: 9",
      "",
      "👥 Pendientes",
      "#7 Douglas | 1⚔️",
      "#14 ElTigreRD | 2⚔️",
      "#22 ShadowMax | 1⚔️",
      "#25 KevinPro | 2⚔️",
      "",
      "📌 No dejes ataques sin usar."
    ]
  },
  {
    icon: "✅",
    title: "Ataque aliado",
    command: null,
    automatic: true,
    category: "Avisos",
    tag: "Aviso automático",
    message: [
      "✅ Nuevo ataque aliado",
      "",
      "🏰 Roman Empire™",
      "",
      "👤 Douglas",
      "🎯 Atacó a #12 KingWar",
      "",
      "⭐ Resultado: 3 estrellas",
      "💥 Destrucción: 100%",
      "⏱️ Tiempo: 2m 48s",
      "",
      "📊 Marcador actual",
      "Equipo: 38⭐ | Rival: 33⭐"
    ]
  },
  {
    icon: "⚠️",
    title: "Ataque rival",
    command: null,
    automatic: true,
    category: "Avisos",
    tag: "Aviso automático",
    message: [
      "⚠️ Nuevo ataque rival",
      "",
      "🏯 Dark Titans",
      "",
      "👤 DarkLord",
      "🎯 Atacó a #8 Musashi",
      "",
      "⭐ Resultado: 2 estrellas",
      "💥 Destrucción: 89%",
      "",
      "📊 Marcador actual",
      "Equipo: 38⭐ | Rival: 35⭐",
      "",
      "📌 Mantener ventaja y limpiar bases medias."
    ]
  },
  {
    icon: "📊",
    title: "Resumen de ataques",
    command: null,
    automatic: true,
    category: "Avisos",
    tag: "Aviso automático",
    message: [
      "📊 Resumen de ataques",
      "⏰ Últimos 8 minutos",
      "",
      "🏰 Roman Empire™",
      "✅ Douglas ➜ #12 | 3⭐ 100%",
      "✅ ALFA ➜ #9 | 2⭐ 94%",
      "✅ Pedro ➜ #17 | 3⭐ 96%",
      "",
      "🏯 Dark Titans",
      "⚠️ DarkLord ➜ #8 | 2⭐ 89%",
      "⚠️ ZeusWar ➜ #4 | 2⭐ 91%",
      "",
      "⭐ Marcador: 41 - 37",
      "📌 Modo resumen activo."
    ]
  },
  {
    icon: "🏆",
    title: "Guerra perfecta",
    command: null,
    automatic: true,
    category: "Avisos",
    tag: "Aviso automático",
    message: [
      "🏆 ¡Guerra perfecta!",
      "",
      "🏰 Roman Empire™",
      "⭐ Estrellas máximas alcanzadas",
      "💥 Destrucción: 100%",
      "",
      "🔥 Excelente trabajo del clan.",
      "",
      "👑 Ataques destacados",
      "Musashi | 3⭐ 100%",
      "Douglas | 3⭐ 100%",
      "ALFA | 3⭐ 100%",
      "ElTigreRD | 3⭐ 100%"
    ]
  },
  {
    icon: "🏁",
    title: "Guerra finalizada",
    command: null,
    automatic: true,
    category: "Avisos",
    tag: "Aviso automático",
    message: [
      "🏁 Guerra finalizada",
      "",
      "🏰 Roman Empire™",
      "🏯 Dark Titans",
      "",
      "⭐ Resultado: 45 - 41",
      "💥 Destrucción: 96.4% - 92.8%",
      "",
      "🏆 Victoria del clan",
      "🔥 Racha actual: 6 victorias",
      "",
      "📌 Buen trabajo. Revisa !month para el reporte."
    ]
  },
  {
    icon: "👋",
    title: "Nuevo miembro",
    command: null,
    automatic: true,
    category: "Avisos",
    tag: "Aviso automático",
    message: [
      "👋 Nuevo miembro en el clan",
      "",
      "🏰 Roman Empire™",
      "",
      "👤 CarlosPro",
      "🏠 TH16",
      "🏆 Copas: 5,430",
      "⭐ Nivel: 214",
      "",
      "📌 Bienvenido al clan."
    ]
  },
  {
    icon: "🚪",
    title: "Salida de miembro",
    command: null,
    automatic: true,
    category: "Avisos",
    tag: "Aviso automático",
    message: [
      "🚪 Miembro salió del clan",
      "",
      "🏰 Roman Empire™",
      "",
      "👤 WarGhost",
      "🏠 TH15",
      "🏆 Copas: 4,980",
      "",
      "📌 Registro actualizado automáticamente."
    ]
  },

  /* =========================
     CLAN
  ========================= */
  {
    icon: "🏰",
    title: "Información del clan",
    command: "!clan",
    category: "Clan",
    tag: "Clan",
    message: [
      "🏰 Roman Empire™",
      "",
      "🔖 Tag: #ABC123",
      "👥 Miembros: 48/50",
      "🏆 Copas del clan: 52,340",
      "⚔️ Racha de guerra: 6",
      "🏟️ Liga: Cristal I",
      "🌐 Idioma: Español",
      "",
      "📌 Clan vinculado correctamente."
    ]
  },
  {
    icon: "🏛️",
    title: "Capital del Clan",
    command: "!capital",
    category: "Clan",
    tag: "Clan",
    message: [
      "🏛️ Capital del Clan",
      "",
      "🏰 Clan: Roman Empire™",
      "📌 Estado: En curso",
      "💰 Botín total: 1,284,500",
      "⚔️ Ataques usados: 236",
      "🏚️ Distritos destruidos: 18",
      "",
      "⚔️ Pendientes",
      "1- Douglas - 2⚔️",
      "2- ShadowMax - 1⚔️",
      "3- KevinPro - 3⚔️",
      "4- ElTigreRD - 1⚔️"
    ]
  },
  {
    icon: "👤",
    title: "Perfil jugador",
    command: "!player #TAG",
    category: "Clan",
    tag: "Clan",
    message: [
      "👤 Douglas",
      "🏰 Ayuntamiento: 17",
      "⭐ Nivel de experiencia: 238",
      "🏆 Copas: 5,842",
      "🏅 Máximo de copas: 6,104",
      "📈 Progreso basado en la API: 82%",
      "────────────────",
      "",
      "👑 HÉROES (88%)",
      "Rey Bárbaro: 95/100",
      "Reina Arquera: 95/100",
      "Centinela: 70/75",
      "Campeona: 45/50",
      "",
      "⚔️ TROPAS: 84%",
      "🪄 HECHIZOS: 79%",
      "⚒️ EQUIPAMIENTO: 76%"
    ]
  },

  /* =========================
     REPORTES
  ========================= */
  {
    icon: "📊",
    title: "Reporte mensual",
    command: "!month",
    category: "Reportes",
    tag: "Reportes",
    message: [
      "📊 Reporte mensual",
      "🏰 Roman Empire™",
      "📅 Junio 2026",
      "",
      "⚔️ Guerras jugadas: 12",
      "🏆 Victorias: 9",
      "❌ Derrotas: 3",
      "⭐ Estrellas totales: 312",
      "🔥 Promedio destrucción: 93.5%",
      "",
      "👑 Jugadores destacados",
      "1. Musashi | 42⭐",
      "2. ALFA | 39⭐",
      "3. Douglas | 36⭐",
      "4. ShadowMax | 34⭐"
    ]
  },
  {
    icon: "👤",
    title: "Reporte jugador",
    command: "!month #TAG",
    category: "Reportes",
    tag: "Reportes",
    message: [
      "📊 Reporte mensual de jugador",
      "👤 Douglas",
      "📅 Junio 2026",
      "",
      "⚔️ Guerras jugadas: 10",
      "🗡️ Ataques usados: 19/20",
      "⭐ Estrellas: 36",
      "🔥 Promedio destrucción: 92.7%",
      "🏅 Mejor ataque: 3⭐ 100%",
      "",
      "📌 Participación alta."
    ]
  },
  {
    icon: "📆",
    title: "Mes anterior",
    command: "!previousmonth",
    category: "Reportes",
    tag: "Reportes",
    message: [
      "📊 Reporte mes anterior",
      "🏰 Roman Empire™",
      "📅 Mayo 2026",
      "",
      "⚔️ Guerras jugadas: 11",
      "🏆 Victorias: 8",
      "❌ Derrotas: 3",
      "⭐ Estrellas totales: 286",
      "🔥 Promedio destrucción: 91.2%",
      "",
      "📌 Comparado con junio, el clan mejoró."
    ]
  },
  {
    icon: "👥",
    title: "Asistencia",
    command: "!attendance",
    category: "Reportes",
    tag: "Reportes",
    message: [
      "📋 Asistencia de guerra",
      "",
      "🏰 Roman Empire™",
      "⚔️ Guerras registradas: 12",
      "",
      "👑 Top activos",
      "#1 ALFA | 12/12",
      "#2 Musashi | 11/12",
      "#3 Douglas | 10/12",
      "#4 ElTigreRD | 9/12",
      "#5 ShadowMax | 9/12",
      "#6 CarlosRD | 8/12",
      "#7 KevinPro | 8/12"
    ]
  },

  /* =========================
     CONFIGURACIÓN
  ========================= */
  {
    icon: "⚙️",
    title: "Vincular clan",
    command: "!setclan #TAG",
    category: "Configuración",
    tag: "Configuración",
    message: [
      "✅ Clan vinculado correctamente.",
      "",
      "🏰 Clan: Roman Empire™",
      "🔖 Tag: #ABC123",
      "💬 Grupo: Activo",
      "",
      "📌 Este grupo ahora usará ese clan para comandos como:",
      "!war",
      "!attacks",
      "!clan",
      "!capital",
      "!month"
    ]
  },
  {
    icon: "🗑️",
    title: "Quitar clan",
    command: "!removeclan",
    category: "Configuración",
    tag: "Configuración",
    message: [
      "✅ Clan quitado de este grupo.",
      "",
      "Los comandos que dependen del clan ya no responderán hasta vincular uno nuevo.",
      "",
      "📌 Para vincular de nuevo usa:",
      "!setclan #TAG"
    ]
  },
  {
    icon: "🌐",
    title: "Cambiar idioma",
    command: "!lang es/en",
    category: "Configuración",
    tag: "Configuración",
    message: [
      "🌐 Idioma actualizado.",
      "",
      "Idioma actual: Español",
      "",
      "Ejemplos:",
      "!lang es",
      "!lang en",
      "",
      "📌 El bot responderá en el idioma seleccionado."
    ]
  },
  {
    icon: "🔔",
    title: "Configurar avisos de ataques",
    command: "!attacknotice",
    category: "Configuración",
    tag: "Configuración",
    message: [
      "🔔 Configuración de avisos de ataques",
      "",
      "📌 Estado: Activo",
      "⚙️ Modo: summary",
      "🎯 Alcance: allies",
      "⏰ Tiempo de resumen: 8 min",
      "",
      "Comandos disponibles:",
      "!attacknotice on",
      "!attacknotice off",
      "!attacknotice allies",
      "!attacknotice both",
      "!attackmode instant",
      "!attackmode summary",
      "!attacktime=8"
    ]
  },
  {
    icon: "✅",
    title: "Activar avisos de ataques",
    command: "!attacknotice on",
    category: "Configuración",
    tag: "Configuración",
    message: [
      "✅ Avisos de ataques activados.",
      "",
      "🔔 El bot avisará cuando se registren ataques nuevos.",
      "⚔️ Clan: Roman Empire™",
      "⚙️ Modo actual: summary",
      "",
      "📌 Puedes cambiar el modo con:",
      "!attackmode instant",
      "!attackmode summary"
    ]
  },
  {
    icon: "⛔",
    title: "Desactivar avisos de ataques",
    command: "!attacknotice off",
    category: "Configuración",
    tag: "Configuración",
    message: [
      "⛔ Avisos de ataques desactivados.",
      "",
      "El bot dejará de enviar avisos automáticos de ataques en este grupo.",
      "",
      "📌 Para activarlos nuevamente usa:",
      "!attacknotice on"
    ]
  },
  {
    icon: "👥",
    title: "Avisos de aliados",
    command: "!attacknotice allies",
    category: "Configuración",
    tag: "Configuración",
    message: [
      "🔔 Alcance actualizado",
      "",
      "🎯 Modo: allies",
      "El bot avisará principalmente sobre ataques del clan aliado.",
      "",
      "🏰 Clan: Roman Empire™",
      "⚔️ Guerra activa detectada",
      "",
      "📌 Para incluir ambos lados usa:",
      "!attacknotice both"
    ]
  },
  {
    icon: "⚔️",
    title: "Avisos de ambos lados",
    command: "!attacknotice both",
    category: "Configuración",
    tag: "Configuración",
    message: [
      "🔔 Alcance actualizado",
      "",
      "🎯 Modo: both",
      "El bot puede resumir ataques del equipo y del rival.",
      "",
      "⭐ Equipo: 35 | Rival: 33",
      "⏰ Tiempo: 3h 0m",
      "",
      "📌 Útil para seguimiento completo de guerra."
    ]
  },
  {
    icon: "⚡",
    title: "Modo instantáneo",
    command: "!attackmode instant",
    category: "Configuración",
    tag: "Configuración",
    message: [
      "⚙️ Modo de avisos actualizado",
      "",
      "🔔 Nuevo modo: instant",
      "",
      "El bot enviará avisos tan pronto detecte un ataque nuevo.",
      "",
      "📌 Recomendado para guerras importantes."
    ]
  },
  {
    icon: "📊",
    title: "Modo resumen",
    command: "!attackmode summary",
    category: "Configuración",
    tag: "Configuración",
    message: [
      "⚙️ Modo de avisos actualizado",
      "",
      "🔔 Nuevo modo: summary",
      "",
      "El bot agrupará ataques nuevos en un resumen.",
      "",
      "⏰ Tiempo actual: 8 min",
      "📌 Recomendado para no llenar el grupo."
    ]
  },
  {
    icon: "⏰",
    title: "Tiempo de resumen",
    command: "!attacktime=8",
    category: "Configuración",
    tag: "Configuración",
    message: [
      "⏰ Tiempo de resumen actualizado",
      "",
      "Nuevo intervalo: 8 minutos",
      "",
      "El bot esperará ese tiempo para agrupar ataques nuevos.",
      "",
      "Ejemplos:",
      "!attacktime=5",
      "!attacktime=8",
      "!attacktime=15"
    ]
  },
  {
    icon: "👤",
    title: "Configurar avisos de miembros",
    command: "!membernotice",
    category: "Configuración",
    tag: "Configuración",
    message: [
      "👥 Configuración de avisos de miembros",
      "",
      "📌 Estado: Activo",
      "✅ Entradas: Activadas",
      "🚪 Salidas: Activadas",
      "",
      "Comandos:",
      "!membernotice on",
      "!membernotice off",
      "",
      "📌 Útil para saber quién entra o sale del clan."
    ]
  },
  {
    icon: "✅",
    title: "Activar avisos de miembros",
    command: "!membernotice on",
    category: "Configuración",
    tag: "Configuración",
    message: [
      "✅ Avisos de miembros activados.",
      "",
      "El bot avisará cuando un jugador entre o salga del clan.",
      "",
      "Ejemplo de aviso:",
      "👤 Entró al clan: CarlosPro",
      "🏠 TH16 | 🏆 5430 copas"
    ]
  },
  {
    icon: "⛔",
    title: "Desactivar avisos de miembros",
    command: "!membernotice off",
    category: "Configuración",
    tag: "Configuración",
    message: [
      "⛔ Avisos de miembros desactivados.",
      "",
      "El bot no enviará avisos de entradas o salidas del clan.",
      "",
      "📌 Para activarlos usa:",
      "!membernotice on"
    ]
  },

  /* =========================
     BOT
  ========================= */
  {
    icon: "🛠️",
    title: "Estado del bot",
    command: "!status",
    category: "Bot",
    tag: "Bot",
    message: [
      "🛠️ Estado del bot",
      "",
      "✅ Conectado correctamente",
      "🏰 Clan vinculado: Roman Empire™",
      "💬 Grupo activo: Sí",
      "🌐 Idioma: Español",
      "🔔 Avisos de ataques: Activos",
      "👥 Avisos de miembros: Activos",
      "⚙️ Modo: Producción",
      "",
      "📌 Servicio disponible 24/7."
    ]
  },
  {
    icon: "🏓",
    title: "Prueba rápida",
    command: "!ping",
    category: "Bot",
    tag: "Bot",
    message: [
      "🏓 Pong!",
      "",
      "✅ El bot está respondiendo correctamente.",
      "📌 Puedes usar !status para ver más detalles."
    ]
  },

  /* =========================
     AYUDA
  ========================= */
  {
    icon: "❓",
    title: "Menú principal",
    command: "!help",
    category: "Ayuda",
    tag: "Ayuda",
    message: [
      "🤖 Asistente LOKITS",
      "",
      "⚔️ Guerra",
      "!war - Estado actual",
      "!attacks - Ataques pendientes",
      "!top - Mejores ataques",
      "!failed - Ataques bajos",
      "!cleanup - Limpieza de guerra",
      "",
      "🏰 Clan",
      "!clan - Información del clan",
      "!capital - Capital del Clan",
      "!player #TAG - Perfil de jugador",
      "",
      "📌 Usa !help more para ver más comandos."
    ]
  },
  {
    icon: "📚",
    title: "Ayuda avanzada",
    command: "!help more",
    category: "Ayuda",
    tag: "Ayuda",
    message: [
      "🤖 Asistente LOKITS - Más comandos",
      "",
      "⚔️ Guerra avanzada",
      "!analysis - Análisis de guerra",
      "!forecast - Pronóstico",
      "",
      "🏆 CWL",
      "!cwltop - Top CWL",
      "!cwlsummary - Resumen CWL",
      "!rival - Scout rival",
      "",
      "🔔 Avisos automáticos",
      "El bot puede avisar cuando:",
      "- Encuentra guerra",
      "- Inicia la guerra",
      "- Queda poco tiempo",
      "- Hay ataques aliados",
      "- Hay ataques del rival",
      "",
      "⚙️ Configuración",
      "!attacknotice",
      "!attackmode instant/summary",
      "!attacktime=8",
      "!membernotice",
      "!setclan #TAG",
      "!removeclan",
      "!lang es/en",
      "!status"
    ]
  }
];

let filteredItems = [...galleryItems];
let cardStep = 0;
let currentIndex = 0;
let startX = 0;
let currentX = 0;
let isDragging = false;

function createGalleryCard(item) {
  const messageLines = item.message
    .map((line) => {
      if (line === "") return `<br>`;
      return `<p>${line}</p>`;
    })
    .join("");

  const commandBox = item.automatic
    ? `
      <div class="gallery-mini-auto-label">
        🔔 Aviso automático
        <small>Enviado por el bot</small>
      </div>
    `
    : `
      <div class="gallery-mini-command">
        ${item.command}
        <small>11:27 AM ✓✓</small>
      </div>
    `;

  const footerCommand = item.command ? item.command : "Automático";

  return `
    <article class="gallery-mini-card">
      <div class="gallery-mini-phone">
        <div class="gallery-mini-header">
          <div class="gallery-mini-user">
            <img src="assets/images/logo/logo-base.png" alt="Asistente LOKITS" />
            <div>
              <strong>Asistente LOKITS</strong>
              <small>En línea</small>
            </div>
          </div>

          <span class="gallery-mini-status"></span>
        </div>

        <div class="gallery-mini-chat">
          ${commandBox}

          <div class="gallery-mini-response">
            ${messageLines}
          </div>
        </div>

        <div class="gallery-mini-input">
          <span>Escribe un comando</span>
          <strong>➤</strong>
        </div>
      </div>

      <div class="gallery-mini-info">
        <h3>${item.title}</h3>
        <p>${item.automatic ? "Ejemplo de aviso automático enviado por el bot." : `Ejemplo del comando ${item.command} dentro de WhatsApp.`}</p>
        <span>${item.icon} ${item.tag}</span>
      </div>
    </article>
  `;
}

function calculateCardStep() {
  const firstCard = document.querySelector(".gallery-mini-card");

  if (!firstCard) {
    cardStep = 0;
    return;
  }

  const cardWidth = firstCard.getBoundingClientRect().width;
  const trackStyles = window.getComputedStyle(galleryTrack);
  const gap = parseFloat(trackStyles.columnGap || trackStyles.gap || 18);

  cardStep = cardWidth + gap;
}

function getMaxIndex() {
  if (!galleryViewport || !galleryTrack || cardStep === 0) return 0;

  const visibleCards = Math.max(
    1,
    Math.floor(galleryViewport.offsetWidth / cardStep)
  );

  return Math.max(0, filteredItems.length - visibleCards);
}

function updateGallery() {
  if (!galleryTrack) return;

  calculateCardStep();

  const maxIndex = getMaxIndex();

  if (currentIndex > maxIndex) {
    currentIndex = maxIndex;
  }

  galleryTrack.style.transform = `translateX(-${currentIndex * cardStep}px)`;

  document.querySelectorAll(".gallery-dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

function renderDots() {
  if (!galleryDots) return;

  calculateCardStep();

  const maxIndex = getMaxIndex();
  const totalDots = maxIndex + 1;

  galleryDots.innerHTML = Array.from({ length: totalDots })
    .map((_, index) => {
      return `
        <button 
          class="gallery-dot ${index === currentIndex ? "active" : ""}" 
          data-index="${index}" 
          aria-label="Ir al grupo ${index + 1}">
        </button>
      `;
    })
    .join("");

  document.querySelectorAll(".gallery-dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      currentIndex = Number(dot.dataset.index);
      updateGallery();
    });
  });
}

function renderGallery() {
  if (!galleryTrack) return;

  galleryTrack.innerHTML = filteredItems.map(createGalleryCard).join("");
  currentIndex = 0;

  setTimeout(() => {
    calculateCardStep();
    renderDots();
    updateGallery();
  }, 50);
}

function filterGallery(category) {
  if (category === "Todos") {
    filteredItems = [...galleryItems];
  } else {
    filteredItems = galleryItems.filter((item) => item.category === category);
  }

  renderGallery();
}

function goToNextSlide() {
  const maxIndex = getMaxIndex();

  if (currentIndex >= maxIndex) {
    currentIndex = 0;
  } else {
    currentIndex += 1;
  }

  updateGallery();
}

function goToPrevSlide() {
  const maxIndex = getMaxIndex();

  if (currentIndex <= 0) {
    currentIndex = maxIndex;
  } else {
    currentIndex -= 1;
  }

  updateGallery();
}

if (galleryNext) {
  galleryNext.addEventListener("click", goToNextSlide);
}

if (galleryPrev) {
  galleryPrev.addEventListener("click", goToPrevSlide);
}

galleryCategoryFilters.forEach((button) => {
  button.addEventListener("click", () => {
    galleryCategoryFilters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    filterGallery(button.dataset.category);
  });
});

if (galleryViewport) {
  galleryViewport.addEventListener("touchstart", (event) => {
    startX = event.touches[0].clientX;
    isDragging = true;
  });

  galleryViewport.addEventListener("touchmove", (event) => {
    if (!isDragging) return;
    currentX = event.touches[0].clientX;
  });

  galleryViewport.addEventListener("touchend", () => {
    if (!isDragging) return;

    const diff = startX - currentX;

    if (diff > 50) {
      goToNextSlide();
    }

    if (diff < -50) {
      goToPrevSlide();
    }

    isDragging = false;
    startX = 0;
    currentX = 0;
  });
}

window.addEventListener("resize", () => {
  calculateCardStep();
  renderDots();
  updateGallery();
});

renderGallery();