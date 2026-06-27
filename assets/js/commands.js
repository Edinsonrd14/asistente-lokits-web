const commandsContainer = document.querySelector("#commandsContainer");
const commandSearch = document.querySelector("#commandSearch");
const commandFilters = document.querySelectorAll(".command-filter");
const commandsCounter = document.querySelector("#commandsCounter");
const commandDetailPanel = document.querySelector("#commandDetailPanel");

let allCommands = [];
let activeCategory = "Todos";

function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getCategoryIcon(category) {
  const icons = {
    "Guerra": "⚔️",
    "CWL": "🏆",
    "Rival CWL": "🔍",
    "Clan": "🏰",
    "Reportes": "📊",
    "Avisos": "🔔",
    "Configuración": "⚙️",
    "Bot": "🛠️",
    "Ayuda": "❓"
  };

  return icons[category] || "🤖";
}

function getAccessClass(access) {
  return access === "Admin" ? "access-admin" : "access-group";
}

function renderCommandDetail(command) {
  if (!commandDetailPanel) return;

  commandDetailPanel.innerHTML = `
    <span class="detail-label">${command.category}</span>
    <h3>${command.command}</h3>
    <p>${command.description}</p>

    <div class="detail-example">
      <small>Ejemplo de uso</small>
      <strong>${command.example}</strong>
    </div>

    <div class="detail-access ${getAccessClass(command.access)}">
      ${command.access}
    </div>
  `;
}

function renderCommands(commands) {
  if (!commandsContainer) return;

  commandsContainer.innerHTML = "";

  if (commandsCounter) {
    commandsCounter.textContent = `${commands.length} comando(s) encontrado(s)`;
  }

  if (commands.length === 0) {
    commandsContainer.innerHTML = `
      <div class="no-commands">
        No se encontraron comandos con ese filtro.
      </div>
    `;
    return;
  }

  commands.forEach((command, index) => {
    const card = document.createElement("article");
    card.className = "command-card";
    card.innerHTML = `
      <div class="command-card-top">
        <span class="command-icon">${getCategoryIcon(command.category)}</span>
        <span class="command-access ${getAccessClass(command.access)}">${command.access}</span>
      </div>

      <h3>${command.command}</h3>
      <strong>${command.title}</strong>
      <p>${command.description}</p>

      <div class="command-card-bottom">
        <span>${command.category}</span>
        <small>${command.example}</small>
      </div>
    `;

    card.addEventListener("click", () => {
      document
        .querySelectorAll(".command-card")
        .forEach((item) => item.classList.remove("selected"));

      card.classList.add("selected");
      renderCommandDetail(command);
    });

    commandsContainer.appendChild(card);

    if (index === 0) {
      card.classList.add("selected");
      renderCommandDetail(command);
    }
  });
}

function filterCommands() {
  const searchValue = normalizeText(commandSearch?.value || "");

  const filteredCommands = allCommands.filter((command) => {
    const matchesCategory =
      activeCategory === "Todos" || command.category === activeCategory;

    const commandText = normalizeText(
      `${command.command} ${command.category} ${command.title} ${command.description} ${command.example}`
    );

    const matchesSearch = commandText.includes(searchValue);

    return matchesCategory && matchesSearch;
  });

  renderCommands(filteredCommands);
}

async function loadCommands() {
  if (!commandsContainer) return;

  try {
    const response = await fetch("assets/data/commands.json");

    if (!response.ok) {
      throw new Error("No se pudo cargar commands.json");
    }

    allCommands = await response.json();
    renderCommands(allCommands);
  } catch (error) {
    commandsContainer.innerHTML = `
      <div class="no-commands">
        No se pudieron cargar los comandos. Revisa la ruta de commands.json.
      </div>
    `;

    if (commandsCounter) {
      commandsCounter.textContent = "Error cargando comandos";
    }

    console.error("Error cargando comandos:", error);
  }
}

if (commandSearch) {
  commandSearch.addEventListener("input", filterCommands);
}

commandFilters.forEach((button) => {
  button.addEventListener("click", () => {
    commandFilters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    activeCategory = button.dataset.category;
    filterCommands();
  });
});

loadCommands();