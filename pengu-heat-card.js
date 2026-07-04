const PENGU_HEAT_VERSION = "1.3.1";

const PENGU_HEAT_TRANSLATIONS = {
  en: {
    card_name: "Pengu Heat Card",
    card_desc: "Stylish heating schematics for solar thermal, heating circuits, and domestic hot water.",
    editor_title: "Pengu Heat Card editor",
    diagram: "Diagram",
    title: "Title",
    title_placeholder: "Optional title",
    language: "Language",
    auto: "Auto",
    english: "English",
    german: "German",
    show_labels: "Show equipment labels",
    layout: "Layout",
    appearance: "Appearance",
    custom_labels: "Custom labels",
    animate_flow: "Animate active flow lines",
    animate_status: "Animate active status badges",
    heat_source_only: "Standalone heat source",
    return_flow: "Return",
    heat_source_type: "Heat source type",
    heat_source_status_entity: "Heat source status entity",
    heat_source: "Heat source",
    heat_source_gas: "Gas boiler",
    heat_source_heat_pump: "Heat pump",
    heat_source_pellet: "Pellet boiler",
    heat_source_district_heating: "District heating",
    solar_thermal: "Solar thermal",
    heating_circuit: "Heating circuit",
    hot_water: "Domestic hot water",
    collector_entity: "Collector temperature entity",
    solar_pump_entity: "Solar pump entity",
    storage_entity: "Storage / solar tank temperature entity",
    outside_entity: "Outdoor temperature entity",
    flow_entity: "Heating flow temperature entity",
    heating_pump_entity: "Heating pump entity",
    burner_entity: "Heat source status entity",
    service_entity: "Maintenance / service entity",
    hot_water_entity: "Hot water temperature entity",
    buffer_entity: "Buffer temperature entity",
    circulation_pump_entity: "Circulation pump entity",
    return_entity: "Return temperature entity",
    demand_entity: "Hot water demand entity",
    collector: "Collector",
    solar_pump: "Solar pump",
    solar_storage: "Solar storage",
    outdoor: "Outdoor",
    heating_flow: "Flow",
    heating_pump: "Heating pump",
    burner: "Heat source",
    service: "Service",
    hot_water_temp: "Hot water",
    buffer: "Buffer",
    circulation_pump: "Circulation pump",
    circulation_return: "Circulation return",
    demand: "DHW demand",
    on: "On",
    off: "Off",
    active: "Active",
    inactive: "Inactive",
    open: "Open",
    closed: "Closed",
    unavailable: "Unavailable",
    not_configured: "Not configured",
    preview_note: "Select entities to populate the diagram.",
  },
  de: {
    card_name: "Pengu Heat Card",
    card_desc: "Stilvolle Heizungsschemata für Solarthermie, Heizkreise und Warmwasser.",
    editor_title: "Pengu Heat Card Editor",
    diagram: "Schema",
    title: "Titel",
    title_placeholder: "Optionaler Titel",
    language: "Sprache",
    auto: "Automatisch",
    english: "Englisch",
    german: "Deutsch",
    show_labels: "Anlagenbeschriftungen anzeigen",
    layout: "Ansicht",
    appearance: "Darstellung",
    custom_labels: "Eigene Labels",
    animate_flow: "Aktive Flusslinien animieren",
    animate_status: "Aktive Statusfelder animieren",
    heat_source_only: "Wärmeerzeuger separat",
    return_flow: "Rücklauf",
    heat_source_type: "Wärmeerzeuger",
    heat_source_status_entity: "Entität Wärmeerzeuger-Status",
    heat_source: "Wärmeerzeuger",
    heat_source_gas: "Gasheizung",
    heat_source_heat_pump: "Wärmepumpe",
    heat_source_pellet: "Pelletheizung",
    heat_source_district_heating: "Fernwärme",
    solar_thermal: "Solarthermie",
    heating_circuit: "Heizkreis",
    hot_water: "Warmwasser",
    collector_entity: "Entität Kollektortemperatur",
    solar_pump_entity: "Entität Solarpumpe",
    storage_entity: "Entität Speicher / Solar-Temperatur",
    outside_entity: "Entität Außentemperatur",
    flow_entity: "Entität Vorlauftemperatur",
    heating_pump_entity: "Entität Heizkreispumpe",
    burner_entity: "Entität Wärmeerzeuger-Status",
    service_entity: "Entität Wartung / Service",
    hot_water_entity: "Entität Warmwassertemperatur",
    buffer_entity: "Entität Puffertemperatur",
    circulation_pump_entity: "Entität Zirkulationspumpe",
    return_entity: "Entität Zirkulationsrücklauf",
    demand_entity: "Entität Warmwasser-Anforderung",
    collector: "Kollektor",
    solar_pump: "Solarpumpe",
    solar_storage: "Pufferspeicher",
    outdoor: "Außen",
    heating_flow: "HK1 VL",
    heating_pump: "Heizkreispumpe",
    burner: "Wärmeerzeuger",
    service: "Wartung",
    hot_water_temp: "Warmwasser",
    buffer: "Puffer",
    circulation_pump: "Zirkulationspumpe",
    circulation_return: "Zirk. Rücklauf",
    demand: "WW Anforderung",
    on: "Ein",
    off: "Aus",
    active: "Aktiv",
    inactive: "Inaktiv",
    open: "Offen",
    closed: "Geschlossen",
    unavailable: "Nicht verfügbar",
    not_configured: "Nicht konfiguriert",
    preview_note: "Bitte Entitäten auswählen, um das Schema zu füllen.",
  },
};

const PENGU_HEAT_DIAGRAMS = {
  solar_thermal: ["collector_entity", "pump_entity", "storage_entity"],
  heating_circuit: ["outside_entity", "flow_entity", "pump_entity", "burner_entity", "service_entity"],
  hot_water: ["hot_water_entity", "buffer_entity", "circulation_pump_entity", "return_entity", "demand_entity"],
  heat_source_only: ["flow_entity", "return_entity", "burner_entity", "service_entity"],
};

function localize(language, key) {
  const table = PENGU_HEAT_TRANSLATIONS[language] || PENGU_HEAT_TRANSLATIONS.en;
  return table[key] ?? PENGU_HEAT_TRANSLATIONS.en[key] ?? key;
}

function resolveLanguage(hass, config) {
  if (config?.language && config.language !== "auto") {
    return config.language;
  }
  const lang = hass?.language || hass?.locale?.language || navigator.language || "en";
  return `${lang}`.toLowerCase().startsWith("de") ? "de" : "en";
}

function styleMap(extra = "") {
  return `
    :host {
      display: block;
      --phc-bg: var(--ha-card-background, var(--card-background-color, #ffffff));
      --phc-soft-bg: color-mix(in srgb, var(--phc-bg) 85%, #eef4fa 15%);
      --phc-text: var(--primary-text-color, #1f2937);
      --phc-muted: color-mix(in srgb, var(--phc-text) 65%, white 35%);
      --phc-line-red: #ef4444;
      --phc-line-blue: #3b82f6;
      --phc-red-soft: #fff2f2;
      --phc-blue-soft: #eef6ff;
      --phc-orange-soft: #fff7ed;
      --phc-green-soft: #effcf4;
      --phc-yellow-soft: #fffbea;
      --phc-border: color-mix(in srgb, var(--phc-text) 8%, transparent 92%);
      --phc-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
      --phc-radius: 22px;
      font-family: var(--paper-font-body1_-_font-family, Roboto, "Noto Sans", sans-serif);
      color: var(--phc-text);
    }
    .card {
      background: linear-gradient(180deg, color-mix(in srgb, var(--phc-bg) 92%, white 8%) 0%, color-mix(in srgb, var(--phc-bg) 94%, #edf4fb 6%) 100%);
      border-radius: var(--phc-radius);
      padding: 18px;
      box-sizing: border-box;
      overflow: hidden;
      min-height: 320px;
    }
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
      gap: 12px;
    }
    .card-title {
      font-size: 1.05rem;
      font-weight: 700;
      letter-spacing: 0.01em;
      color: var(--phc-text);
      line-height: 1.2;
    }
    .card-subtitle {
      font-size: 0.82rem;
      color: var(--phc-muted);
      margin-top: 2px;
    }
    .badge {
      font-size: 0.75rem;
      color: var(--phc-muted);
      background: color-mix(in srgb, var(--phc-bg) 70%, white 30%);
      border: 1px solid var(--phc-border);
      border-radius: 999px;
      padding: 4px 10px;
      white-space: nowrap;
    }
    .diagram-shell {
      position: relative;
      border-radius: 22px;
      min-height: 280px;
      background:
        radial-gradient(circle at 18% 10%, rgba(255,255,255,0.96), transparent 28%),
        linear-gradient(180deg, rgba(255,255,255,0.72), rgba(248,250,252,0.58));
      border: 1px solid rgba(148, 163, 184, 0.18);
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.75);
      overflow: hidden;
    }
    .canvas {
      position: relative;
      width: 100%;
      aspect-ratio: 10 / 7;
      min-height: 280px;
    }
    .diagram-svg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }
    .layer {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }
    .pill {
      position: absolute;
      min-width: min(90px, 22vw);
      max-width: min(136px, 30vw);
      border-radius: 12px;
      background: rgba(255,255,255,0.96);
      border: 1px solid rgba(203, 213, 225, 0.9);
      box-shadow: 0 3px 8px rgba(15, 23, 42, 0.05);
      padding: 6px 8px 7px;
      text-align: center;
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      transform: translate(-50%, -50%);
      box-sizing: border-box;
    }
    .pill-label {
      display: block;
      font-size: clamp(0.55rem, 1vw, 0.62rem);
      line-height: 1.05;
      font-weight: 700;
      letter-spacing: 0.01em;
      margin-bottom: 3px;
      color: #64748b;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .pill-value {
      display: block;
      font-size: clamp(0.78rem, 1.5vw, 0.96rem);
      line-height: 1.05;
      font-weight: 800;
      letter-spacing: 0.01em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .pill.red { background: linear-gradient(180deg, rgba(255,250,250,0.98), rgba(255,244,244,0.96)); border-color: rgba(254, 202, 202, 0.95); }
    .pill.blue { background: linear-gradient(180deg, rgba(249,252,255,0.98), rgba(241,246,255,0.96)); border-color: rgba(191, 219, 254, 0.95); }
    .pill.orange { background: linear-gradient(180deg, rgba(255,252,248,0.98), rgba(255,247,237,0.96)); border-color: rgba(254, 215, 170, 0.95); }
    .pill.green { background: linear-gradient(180deg, rgba(249,255,251,0.98), rgba(240,253,244,0.96)); border-color: rgba(187, 247, 208, 0.95); }
    .pill.yellow { background: linear-gradient(180deg, rgba(255,254,250,0.98), rgba(254,252,232,0.96)); border-color: rgba(253, 230, 138, 0.95); }
    .pill.gray { background: linear-gradient(180deg, rgba(252,252,253,0.98), rgba(248,250,252,0.96)); }
    .pill.red .pill-value { color: #dc2626; }
    .pill.blue .pill-value { color: #1d4ed8; }
    .pill.orange .pill-value { color: #ea580c; }
    .pill.green .pill-value { color: #15803d; }
    .pill.yellow .pill-value { color: #a16207; }
    .pill.gray .pill-value { color: var(--phc-text); }
    .equipment-label {
      position: absolute;
      font-size: clamp(0.56rem, 1.1vw, 0.68rem);
      font-weight: 600;
      color: rgba(71, 85, 105, 0.88);
      text-shadow: 0 1px 0 rgba(255,255,255,0.9);
      pointer-events: none;
      text-align: center;
      transform: translate(-50%, -50%);
    }
    .empty-note {
      position: absolute;
      left: 50%;
      bottom: 14px;
      transform: translateX(-50%);
      background: rgba(255,255,255,0.9);
      border: 1px dashed rgba(148, 163, 184, 0.5);
      border-radius: 999px;
      color: var(--phc-muted);
      padding: 6px 12px;
      font-size: 0.75rem;
      max-width: calc(100% - 24px);
      text-align: center;
    }
    .status-on { color: #15803d !important; }
    .status-off { color: #dc2626 !important; }
    .status-neutral { color: #475569 !important; }
    .status-warning { color: #d97706 !important; }
    .status-ok { color: #15803d !important; }
    .status-active { color: #2563eb !important; }
    .status-idle { color: #64748b !important; }
    .pipe-red { stroke: var(--phc-line-red); }
    .pipe-blue { stroke: var(--phc-line-blue); }
    .pulse { animation: phcPulse 1.8s ease-in-out infinite; }
    @keyframes phcPulse {
      0% { transform: scale(1); text-shadow: 0 0 0 rgba(37, 99, 235, 0); }
      50% { transform: scale(1.04); text-shadow: 0 0 12px rgba(37, 99, 235, 0.18); }
      100% { transform: scale(1); text-shadow: 0 0 0 rgba(37, 99, 235, 0); }
    }
    .pipe-active { opacity: 1; }
    .pipe-inactive { opacity: 0.3; stroke: #cbd5e1 !important; }
    .pipe-animate { stroke-dasharray: 6 14; animation: phcFlow 3.6s linear infinite; }
    .pipe-red.pipe-active { filter: none; }
    .pipe-blue.pipe-active { filter: none; }
    @keyframes phcFlow { from { stroke-dashoffset: 0; } to { stroke-dashoffset: -28; } }
    ${extra}
  `;
}

function isConfigured(config, keys) {
  return keys.some((key) => Boolean(config?.[key]));
}

function formatValue(hass, entityId, language, options = {}) {
  if (!entityId) {
    return localize(language, "not_configured");
  }
  const stateObj = hass?.states?.[entityId];
  if (!stateObj) {
    return localize(language, "unavailable");
  }

  const state = stateObj.state;
  if (["unavailable", "unknown", null, undefined].includes(state)) {
    return localize(language, "unavailable");
  }

  const domain = entityId.split(".")[0];
  const lcState = `${state}`.toLowerCase();

  if (options.boolean || ["binary_sensor", "switch", "input_boolean"].includes(domain)) {
    if (["on", "home", "heat", "active", "true", "open", "detected"].includes(lcState)) {
      return localize(language, "on");
    }
    if (["off", "not_home", "idle", "inactive", "false", "closed", "clear"].includes(lcState)) {
      return localize(language, "off");
    }
    return stateObj.attributes?.friendly_name ? `${state}` : `${state}`;
  }

  const unit = options.unit ?? stateObj.attributes?.unit_of_measurement ?? "";
  const numeric = Number(state);
  if (Number.isFinite(numeric)) {
    const decimals = options.decimals ?? (Math.abs(numeric) >= 100 ? 0 : 1);
    const formatter = new Intl.NumberFormat(language === "de" ? "de-DE" : "en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
    return `${formatter.format(numeric)}${unit ? ` ${unit}` : ""}`;
  }

  return `${state}${unit ? ` ${unit}` : ""}`;
}


function getStateObj(hass, entityId) {
  if (!entityId) return null;
  return hass?.states?.[entityId] || null;
}

function getNumericValue(hass, entityId) {
  const stateObj = getStateObj(hass, entityId);
  if (!stateObj) return null;
  const numeric = Number(stateObj.state);
  return Number.isFinite(numeric) ? numeric : null;
}

function isEntityActive(hass, entityId) {
  const stateObj = getStateObj(hass, entityId);
  if (!stateObj) return false;
  const lcState = `${stateObj.state}`.toLowerCase();
  if (["on", "home", "heat", "active", "true", "open", "detected", "running"].includes(lcState)) return true;
  if (["off", "not_home", "idle", "inactive", "false", "closed", "clear", "standby"].includes(lcState)) return false;
  const numeric = Number(stateObj.state);
  return Number.isFinite(numeric) ? numeric > 0 : false;
}

function getTemperatureTone(hass, entityId) {
  const numeric = getNumericValue(hass, entityId);
  if (!Number.isFinite(numeric)) return "gray";
  if (numeric < 10) return "blue";
  if (numeric < 25) return "green";
  if (numeric < 45) return "yellow";
  if (numeric < 65) return "orange";
  return "red";
}

function getStatusClass(active, animate = false, mode = "default") {
  let base = "status-neutral";
  if (mode === "warning") {
    base = active ? "status-warning" : "status-ok";
  } else if (mode === "demand") {
    base = active ? "status-active" : "status-idle";
  } else {
    base = active ? "status-on" : "status-off";
  }
  return `${base}${active && animate ? ' pulse' : ''}`;
}

function getPipeClass(color, active, animate) {
  return `${color} ${active ? 'pipe-active' : 'pipe-inactive'}${active && animate ? ' pipe-animate' : ''}`;
}

function getLabel(config, language, customKey, fallbackKey, fallbackText = null) {
  return config?.[customKey] || fallbackText || localize(language, fallbackKey);
}

function pillHtml({ left, top, width, label, value, tone = "gray", valueClass = "", extraClass = "" }) {
  const style = [`left:${left};`, `top:${top};`, width ? `width:${width};` : ""].join(" ");
  return `
    <div class="pill ${tone} ${extraClass}" style="${style}">
      <span class="pill-label">${label}</span>
      <span class="pill-value ${valueClass}">${value}</span>
    </div>
  `;
}

function labelHtml(show, text, left, top, width) {
  if (!show) return "";
  const style = [`left:${left};`, `top:${top};`, width ? `width:${width};` : ""].join(" ");
  return `<div class="equipment-label" style="${style}">${text}</div>`;
}

function commonSymbols() {
  return `
    <defs>
      <linearGradient id="phcTankBlue" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stop-color="#e8f2ff"/>
        <stop offset="100%" stop-color="#b7d4ff"/>
      </linearGradient>
      <linearGradient id="phcTankWarm" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stop-color="#ffe5e5"/>
        <stop offset="100%" stop-color="#ffc3c3"/>
      </linearGradient>
      <linearGradient id="phcBufferMix" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stop-color="#fff1da"/>
        <stop offset="55%" stop-color="#ffb454"/>
        <stop offset="100%" stop-color="#8bc3ff"/>
      </linearGradient>
      <linearGradient id="phcMetal" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="#f8fafc"/>
        <stop offset="100%" stop-color="#cbd5e1"/>
      </linearGradient>
      <linearGradient id="phcSolar" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="#1e40af"/>
        <stop offset="100%" stop-color="#2563eb"/>
      </linearGradient>
      <filter id="shadowSoft" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="3.2" flood-color="#0f172a" flood-opacity="0.14"/>
      </filter>
    </defs>
  `;
}

function renderSolarDiagram(hass, config, language) {
  const showLabels = Boolean(config.show_labels);
  const animateFlow = config.animate_flow !== false;
  const animateStatus = config.animate_status !== false;
  const collectorLabel = getLabel(config, language, "label_collector", "collector");
  const pumpLabel = getLabel(config, language, "label_solar_pump", "solar_pump");
  const storageLabel = getLabel(config, language, "label_solar_storage", "solar_storage");
  const collector = formatValue(hass, config.collector_entity, language, { unit: "°C" });
  const pump = formatValue(hass, config.pump_entity, language, { decimals: 0 });
  const storage = formatValue(hass, config.storage_entity, language, { unit: "°C" });
  const pumpActive = isEntityActive(hass, config.pump_entity);
  const hasData = isConfigured(config, PENGU_HEAT_DIAGRAMS.solar_thermal);
  const redPipe = getPipeClass("pipe-red", pumpActive, animateFlow);
  const bluePipe = getPipeClass("pipe-blue", pumpActive, animateFlow);

  const svg = `
    <svg class="diagram-svg" viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      ${commonSymbols()}
      <rect x="0" y="0" width="1000" height="700" fill="transparent"/>

      <g filter="url(#shadowSoft)">
        <circle cx="112" cy="120" r="27" fill="#f59e0b"/>
        <g stroke="#f59e0b" stroke-width="5" stroke-linecap="round">
          <line x1="112" y1="64" x2="112" y2="36"/>
          <line x1="112" y1="204" x2="112" y2="176"/>
          <line x1="56" y1="120" x2="28" y2="120"/>
          <line x1="196" y1="120" x2="168" y2="120"/>
          <line x1="72" y1="80" x2="50" y2="58"/>
          <line x1="152" y1="160" x2="174" y2="182"/>
          <line x1="72" y1="160" x2="50" y2="182"/>
          <line x1="152" y1="80" x2="174" y2="58"/>
        </g>
      </g>

      <g transform="translate(166,184)" filter="url(#shadowSoft)">
        <polygon points="14,126 276,126 304,146 34,146" fill="#cbd5e1" opacity="0.72"/>
        <polygon points="38,0 248,0 280,108 6,108" fill="url(#phcSolar)" stroke="#475569" stroke-width="5"/>
        <g stroke="#8db6ff" stroke-width="3.5" opacity="0.92">
          <line x1="80" y1="3" x2="48" y2="105"/>
          <line x1="128" y1="3" x2="96" y2="105"/>
          <line x1="176" y1="3" x2="144" y2="105"/>
          <line x1="224" y1="3" x2="192" y2="105"/>
          <line x1="22" y1="24" x2="262" y2="24"/>
          <line x1="14" y1="50" x2="270" y2="50"/>
          <line x1="6" y1="76" x2="278" y2="76"/>
        </g>
      </g>

      <g transform="translate(412,388)" filter="url(#shadowSoft)">
        <rect x="0" y="0" width="96" height="154" rx="18" fill="#334155"/>
        <rect x="16" y="14" width="64" height="48" rx="10" fill="#e2e8f0" opacity="0.2"/>
        <circle cx="28" cy="30" r="13" fill="#ffffff" stroke="#ef4444" stroke-width="3.5"/>
        <circle cx="68" cy="30" r="13" fill="#ffffff" stroke="#3b82f6" stroke-width="3.5"/>
        <line x1="28" y1="30" x2="34" y2="22" stroke="#0f172a" stroke-width="2.2" stroke-linecap="round"/>
        <line x1="68" y1="30" x2="61" y2="23" stroke="#0f172a" stroke-width="2.2" stroke-linecap="round"/>
        <circle cx="48" cy="86" r="21" fill="#f8fafc" stroke="#94a3b8" stroke-width="5"/>
        <polygon points="43,72 60,86 43,100" fill="#475569"/>
        <rect x="40" y="111" width="16" height="27" rx="8" fill="#0f172a"/>
      </g>

      <g transform="translate(702,210)" filter="url(#shadowSoft)">
        <ellipse cx="74" cy="16" rx="64" ry="17" fill="#cbd5e1"/>
        <rect x="10" y="16" width="128" height="252" rx="64" fill="url(#phcMetal)"/>
        <rect x="10" y="150" width="128" height="118" rx="0" fill="url(#phcTankBlue)" opacity="0.95"/>
        <rect x="10" y="100" width="128" height="50" fill="rgba(255,255,255,0.28)"/>
        <ellipse cx="74" cy="268" rx="64" ry="17" fill="#60a5fa" opacity="0.9"/>
        <rect x="8" y="14" width="132" height="256" rx="64" fill="none" stroke="#94a3b8" stroke-width="4"/>
      </g>

      <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="9">
        <path d="M 460 388 L 460 230 L 548 230 L 700 230" class="${redPipe}"/>
        <path d="M 700 230 L 700 360" class="${redPipe}"/>
        <path d="M 700 500 L 524 500 L 460 500 L 460 542" class="${bluePipe}"/>
        <path d="M 460 230 L 420 230 L 420 170 L 420 150" class="${redPipe}"/>
      </g>

      <g>
        <circle cx="700" cy="500" r="7.5" fill="#f8fafc" stroke="#64748b" stroke-width="2.5"/>
        <circle cx="700" cy="360" r="7.5" fill="#f8fafc" stroke="#64748b" stroke-width="2.5"/>
      </g>
    </svg>
  `;

  const overlay = `
    ${pillHtml({ left: "56%", top: "16%", width: "19%", label: collectorLabel, value: collector, tone: getTemperatureTone(hass, config.collector_entity) })}
    ${pillHtml({ left: "77%", top: "16%", width: "20%", label: storageLabel, value: storage, tone: getTemperatureTone(hass, config.storage_entity) })}
    ${pillHtml({ left: "46%", top: "77%", width: "18%", label: pumpLabel, value: pump, tone: pumpActive ? "green" : "gray", valueClass: getStatusClass(pumpActive, animateStatus, "demand") })}
    ${labelHtml(showLabels, collectorLabel, "22%", "34%", "18%")}
    ${labelHtml(showLabels, pumpLabel, "47%", "66%", "18%")}
    ${labelHtml(showLabels, storageLabel, "79%", "70%", "18%")}
    ${!hasData ? `<div class="empty-note">${localize(language, "preview_note")}</div>` : ""}
  `;

  return { svg, overlay };
}

function renderHeatSourceSvg(type) {
  if (type === "heat_pump") {
    return `
      <g transform="translate(40,250)" filter="url(#shadowSoft)">
        <rect x="0" y="35" width="150" height="195" rx="18" fill="url(#phcMetal)" stroke="#cbd5e1" stroke-width="4"/>
        <rect x="18" y="58" width="114" height="92" rx="12" fill="#dbeafe" stroke="#93c5fd" stroke-width="3"/>
        <circle cx="75" cy="104" r="34" fill="#eff6ff" stroke="#64748b" stroke-width="5"/>
        <path d="M75 70c15 16 15 52 0 68M41 104c18-8 50-8 68 0M55 80c8 20 32 34 52 34" fill="none" stroke="#60a5fa" stroke-width="5" stroke-linecap="round"/>
        <rect x="24" y="168" width="102" height="34" rx="8" fill="#334155"/>
        <circle cx="44" cy="185" r="5" fill="#22c55e"/>
        <circle cx="64" cy="185" r="5" fill="#60a5fa"/>
        <circle cx="84" cy="185" r="5" fill="#f97316"/>
        <path d="M126 20c26 0 46 20 46 46" fill="none" stroke="#94a3b8" stroke-width="8" stroke-linecap="round"/>
      </g>
    `;
  }

  if (type === "pellet") {
    return `
      <g transform="translate(40,250)" filter="url(#shadowSoft)">
        <rect x="0" y="20" width="132" height="230" rx="16" fill="url(#phcMetal)" stroke="#cbd5e1" stroke-width="4"/>
        <path d="M138 42h72l-18 190h-48z" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="4"/>
        <g fill="#a16207">
          <circle cx="158" cy="82" r="6"/><circle cx="178" cy="98" r="6"/><circle cx="154" cy="120" r="6"/>
          <circle cx="184" cy="142" r="6"/><circle cx="162" cy="166" r="6"/><circle cx="180" cy="192" r="6"/>
        </g>
        <rect x="18" y="170" width="94" height="54" rx="10" fill="#334155"/>
        <rect x="26" y="180" width="32" height="34" rx="6" fill="#64748b"/>
        <path d="M50 160c0-14 9-24 20-33 12 8 18 18 18 31 0 14-9 24-19 24s-19-9-19-22z" fill="#f97316"/>
        <path d="M64 150c0-8 5-15 10-19 7 5 10 12 10 19 0 9-6 14-10 14s-10-5-10-14z" fill="#fde68a"/>
        <path d="M74 20 v-28 l16 -18" fill="none" stroke="#94a3b8" stroke-width="8" stroke-linecap="round"/>
      </g>
    `;
  }

  if (type === "district_heating") {
    return `
      <g transform="translate(40,250)" filter="url(#shadowSoft)">
        <rect x="0" y="34" width="160" height="196" rx="18" fill="url(#phcMetal)" stroke="#cbd5e1" stroke-width="4"/>
        <rect x="26" y="62" width="108" height="128" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="3"/>
        <g stroke-linecap="round" stroke-width="8" fill="none">
          <path d="M52 80v94" stroke="#ef4444"/>
          <path d="M80 80v94" stroke="#f97316"/>
          <path d="M108 80v94" stroke="#3b82f6"/>
        </g>
        <path d="M36 106h88M36 148h88" stroke="#94a3b8" stroke-width="5" stroke-linecap="round"/>
        <g transform="translate(184,52)">
          <rect x="0" y="56" width="80" height="120" rx="8" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="4"/>
          <path d="M0 56l40-38 40 38" fill="#cbd5e1" stroke="#94a3b8" stroke-width="4"/>
          <rect x="18" y="84" width="16" height="20" fill="#93c5fd"/>
          <rect x="46" y="84" width="16" height="20" fill="#93c5fd"/>
          <rect x="18" y="122" width="16" height="20" fill="#93c5fd"/>
          <rect x="46" y="122" width="16" height="20" fill="#93c5fd"/>
        </g>
      </g>
    `;
  }

  return `
    <g transform="translate(40,250)" filter="url(#shadowSoft)">
      <rect x="0" y="20" width="130" height="230" rx="16" fill="url(#phcMetal)" stroke="#cbd5e1" stroke-width="4"/>
      <rect x="18" y="170" width="94" height="54" rx="10" fill="#334155"/>
      <rect x="26" y="180" width="32" height="34" rx="6" fill="#64748b"/>
      <path d="M50 160c0-14 9-24 20-33 12 8 18 18 18 31 0 14-9 24-19 24s-19-9-19-22z" fill="#f97316"/>
      <path d="M64 150c0-8 5-15 10-19 7 5 10 12 10 19 0 9-6 14-10 14s-10-5-10-14z" fill="#fde68a"/>
      <path d="M74 20 v-28 l16 -18" fill="none" stroke="#94a3b8" stroke-width="8" stroke-linecap="round"/>
    </g>
  `;
}

function renderHeatingDiagram(hass, config, language) {
  const showLabels = Boolean(config.show_labels);
  const animateFlow = config.animate_flow !== false;
  const animateStatus = config.animate_status !== false;
  const heatSourceType = config.heat_source_type || "gas";
  const heatSourceLabel = getLabel(config, language, "label_heat_source", "heat_source", localize(language, `heat_source_${heatSourceType}`));
  const outsideLabel = getLabel(config, language, "label_outdoor", "outdoor");
  const flowLabel = getLabel(config, language, "label_heating_flow", "heating_flow");
  const pumpLabel = getLabel(config, language, "label_heating_pump", "heating_pump");
  const serviceLabel = getLabel(config, language, "label_service", "service");
  const outside = formatValue(hass, config.outside_entity, language, { unit: "°C" });
  const flow = formatValue(hass, config.flow_entity, language, { unit: "°C" });
  const pump = formatValue(hass, config.pump_entity, language, { decimals: 0 });
  const sourceStatus = formatValue(hass, config.burner_entity, language, { boolean: true });
  const service = formatValue(hass, config.service_entity, language, { boolean: true });
  const sourceActive = isEntityActive(hass, config.burner_entity);
  const pumpActive = isEntityActive(hass, config.pump_entity);
  const serviceActive = isEntityActive(hass, config.service_entity);
  const circuitActive = sourceActive || pumpActive;
  const hasData = isConfigured(config, PENGU_HEAT_DIAGRAMS.heating_circuit);
  const redPipe = getPipeClass("pipe-red", circuitActive, animateFlow);
  const bluePipe = getPipeClass("pipe-blue", circuitActive, animateFlow);

  const svg = `
    <svg class="diagram-svg" viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      ${commonSymbols()}
      <g transform="translate(40,62)" filter="url(#shadowSoft)">
        <path d="M32 38c0-18 15-32 34-32 8 0 15 2 21 7 8-11 21-18 35-18 21 0 39 15 43 35 2 0 4 0 6 0 18 0 32 14 32 31 0 17-14 31-32 31H36C16 92 0 77 0 58c0-15 12-28 27-30 2 0 3 0 5 0z" fill="#dbe4f0"/>
        <g transform="translate(132,0)">
          <rect x="0" y="0" width="18" height="70" rx="9" fill="#dbeafe" stroke="#93c5fd" stroke-width="3"/>
          <circle cx="9" cy="54" r="10" fill="#60a5fa"/>
          <rect x="6" y="8" width="6" height="40" rx="3" fill="#3b82f6"/>
        </g>
        <g stroke="#93c5fd" stroke-width="4" stroke-linecap="round">
          <line x1="18" y1="98" x2="36" y2="114"/>
          <line x1="54" y1="98" x2="54" y2="122"/>
          <line x1="90" y1="98" x2="72" y2="114"/>
        </g>
      </g>
      ${renderHeatSourceSvg(heatSourceType)}
      <g transform="translate(505,315)" filter="url(#shadowSoft)">
        <circle cx="0" cy="0" r="34" fill="#f8fafc" stroke="#94a3b8" stroke-width="8"/>
        <polygon points="-8,-18 18,0 -8,18" fill="#475569"/>
      </g>
      <g transform="translate(770,250)" filter="url(#shadowSoft)">
        <rect x="0" y="20" width="170" height="190" rx="12" fill="url(#phcMetal)" stroke="#cbd5e1" stroke-width="4"/>
        <rect x="24" y="52" width="18" height="120" rx="9" fill="#e2e8f0" stroke="#cbd5e1"/>
        <rect x="56" y="52" width="18" height="120" rx="9" fill="#e2e8f0" stroke="#cbd5e1"/>
        <rect x="88" y="52" width="18" height="120" rx="9" fill="#e2e8f0" stroke="#cbd5e1"/>
        <rect x="120" y="52" width="18" height="120" rx="9" fill="#e2e8f0" stroke="#cbd5e1"/>
      </g>
      <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="10">
        <path d="M 170 360 L 470 360" class="${redPipe}"/>
        <path d="M 540 360 L 770 360" class="${redPipe}"/>
        <path d="M 935 494 L 935 584 L 190 584" class="${bluePipe}"/>
        <path d="M 190 584 L 170 584" class="${bluePipe}"/>
      </g>
      <g>
        <circle cx="770" cy="360" r="9" fill="#dbeafe" stroke="#64748b" stroke-width="3"/>
        <circle cx="936" cy="494" r="9" fill="#dbeafe" stroke="#64748b" stroke-width="3"/>
      </g>
    </svg>
  `;

  const overlay = `
    ${pillHtml({ left: "25%", top: "15%", label: outsideLabel, value: outside, tone: getTemperatureTone(hass, config.outside_entity) })}
    ${pillHtml({ left: "78%", top: "18%", label: flowLabel, value: flow, tone: getTemperatureTone(hass, config.flow_entity) })}
    ${pillHtml({ left: "51%", top: "62%", width: "28%", label: pumpLabel, value: pump, tone: pumpActive ? "green" : "gray", valueClass: getStatusClass(pumpActive, animateStatus, "demand") })}
    ${pillHtml({ left: "22%", top: "84%", width: "28%", label: heatSourceLabel, value: sourceStatus, tone: sourceActive ? "green" : "orange", valueClass: getStatusClass(sourceActive, animateStatus) })}
    ${pillHtml({ left: "78%", top: "84%", width: "24%", label: serviceLabel, value: service, tone: serviceActive ? "yellow" : "green", valueClass: getStatusClass(serviceActive, animateStatus, "warning") })}
    ${labelHtml(showLabels, heatSourceLabel, "19%", "74%", "26%")}
    ${labelHtml(showLabels, pumpLabel, "51%", "53%", "20%")}
    ${labelHtml(showLabels, flowLabel, "82%", "39%", "20%")}
    ${!hasData ? `<div class="empty-note">${localize(language, "preview_note")}</div>` : ""}
  `;

  return { svg, overlay };
}

function renderHotWaterDiagram(hass, config, language) {
  const showLabels = Boolean(config.show_labels);
  const animateFlow = config.animate_flow !== false;
  const animateStatus = config.animate_status !== false;
  const hotWaterLabel = getLabel(config, language, "label_hot_water_temp", "hot_water_temp");
  const demandLabel = getLabel(config, language, "label_demand", "demand");
  const pumpLabel = getLabel(config, language, "label_circulation_pump", "circulation_pump");
  const bufferLabel = getLabel(config, language, "label_buffer", "buffer");
  const returnLabel = getLabel(config, language, "label_circulation_return", "circulation_return");
  const hotWater = formatValue(hass, config.hot_water_entity, language, { unit: "°C" });
  const buffer = formatValue(hass, config.buffer_entity, language, { unit: "°C" });
  const circulationPump = formatValue(hass, config.circulation_pump_entity, language, { boolean: true });
  const returnTemp = formatValue(hass, config.return_entity, language, { unit: "°C" });
  const demand = formatValue(hass, config.demand_entity, language, { boolean: true });
  const demandActive = isEntityActive(hass, config.demand_entity);
  const circulationActive = isEntityActive(hass, config.circulation_pump_entity);
  const loopActive = demandActive || circulationActive;
  const hasData = isConfigured(config, PENGU_HEAT_DIAGRAMS.hot_water);
  const redPipe = getPipeClass("pipe-red", loopActive, animateFlow);
  const bluePipe = getPipeClass("pipe-blue", loopActive, animateFlow);

  const svg = `
    <svg class="diagram-svg" viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      ${commonSymbols()}
      <g transform="translate(210,134)" filter="url(#shadowSoft)">
        <ellipse cx="98" cy="22" rx="74" ry="22" fill="#cbd5e1"/>
        <rect x="24" y="22" width="148" height="260" fill="url(#phcMetal)"/>
        <rect x="24" y="22" width="148" height="138" fill="url(#phcTankWarm)"/>
        <rect x="24" y="160" width="148" height="122" fill="url(#phcBufferMix)"/>
        <ellipse cx="98" cy="282" rx="74" ry="22" fill="#93c5fd"/>
        <rect x="20" y="18" width="156" height="268" rx="74" fill="none" stroke="#94a3b8" stroke-width="4"/>
        <path d="M68 230c20-40 40-40 60 0s40 40 60 0" fill="none" stroke="#60a5fa" stroke-width="6"/>
        <path d="M68 248c20-40 40-40 60 0s40 40 60 0" fill="none" stroke="#60a5fa" stroke-width="6"/>
      </g>
      <g transform="translate(670,115)" filter="url(#shadowSoft)">
        <path d="M58 0c-7 18-18 28-18 42 0 20 16 36 36 36s36-16 36-36c0-14-11-24-18-42" fill="url(#phcMetal)" stroke="#cbd5e1" stroke-width="3"/>
        <path d="M44 56h28" stroke="#64748b" stroke-width="5" stroke-linecap="round"/>
        <path d="M24 74v18" stroke="#94a3b8" stroke-width="6" stroke-linecap="round"/>
        <path d="M92 74v18" stroke="#94a3b8" stroke-width="6" stroke-linecap="round"/>
        <g stroke="#38bdf8" stroke-width="5" stroke-linecap="round">
          <line x1="34" y1="98" x2="30" y2="112"/>
          <line x1="58" y1="98" x2="54" y2="112"/>
          <line x1="82" y1="98" x2="78" y2="112"/>
        </g>
      </g>
      <g transform="translate(650,388)" filter="url(#shadowSoft)">
        <circle cx="0" cy="0" r="28" fill="#f8fafc" stroke="#94a3b8" stroke-width="8"/>
        <polygon points="-8,-16 14,0 -8,16" fill="#475569"/>
      </g>
      <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="10">
        <path d="M 380 176 L 650 176 L 650 132" class="${redPipe}"/>
        <path d="M 380 300 L 650 300 L 650 360" class="${redPipe}"/>
        <path d="M 650 416 L 650 560 L 380 560" class="${bluePipe}"/>
      </g>
      <g>
        <circle cx="380" cy="176" r="9" fill="#dbeafe" stroke="#64748b" stroke-width="3"/>
        <circle cx="380" cy="300" r="9" fill="#dbeafe" stroke="#64748b" stroke-width="3"/>
        <circle cx="380" cy="560" r="9" fill="#dbeafe" stroke="#64748b" stroke-width="3"/>
      </g>
    </svg>
  `;

  const overlay = `
    ${pillHtml({ left: "30%", top: "14%", label: hotWaterLabel, value: hotWater, tone: getTemperatureTone(hass, config.hot_water_entity) })}
    ${pillHtml({ left: "74%", top: "14%", width: "28%", label: demandLabel, value: demand, tone: demandActive ? "orange" : "gray", valueClass: getStatusClass(demandActive, animateStatus, "demand") })}
    ${pillHtml({ left: "66%", top: "44%", width: "30%", label: pumpLabel, value: circulationPump, tone: circulationActive ? "green" : "gray", valueClass: getStatusClass(circulationActive, animateStatus, "demand") })}
    ${pillHtml({ left: "30%", top: "68%", label: bufferLabel, value: buffer, tone: getTemperatureTone(hass, config.buffer_entity) })}
    ${pillHtml({ left: "66%", top: "70%", width: "28%", label: returnLabel, value: returnTemp, tone: getTemperatureTone(hass, config.return_entity) })}
    ${labelHtml(showLabels, hotWaterLabel, "22%", "40%", "22%")}
    ${labelHtml(showLabels, pumpLabel, "70%", "58%", "24%")}
    ${labelHtml(showLabels, returnLabel, "72%", "78%", "24%")}
    ${!hasData ? `<div class="empty-note">${localize(language, "preview_note")}</div>` : ""}
  `;

  return { svg, overlay };
}

function renderHeatSourceOnlyDiagram(hass, config, language) {
  const showLabels = Boolean(config.show_labels);
  const animateFlow = config.animate_flow !== false;
  const animateStatus = config.animate_status !== false;
  const heatSourceType = config.heat_source_type || "gas";
  const sourceLabel = getLabel(config, language, "label_heat_source", "heat_source", localize(language, `heat_source_${heatSourceType}`));
  const flowLabel = getLabel(config, language, "label_heating_flow", "heating_flow");
  const returnLabel = getLabel(config, language, "label_return_flow", "return_flow");
  const serviceLabel = getLabel(config, language, "label_service", "service");
  const sourceStatus = formatValue(hass, config.burner_entity, language, { boolean: true });
  const flow = formatValue(hass, config.flow_entity, language, { unit: "°C" });
  const ret = formatValue(hass, config.return_entity, language, { unit: "°C" });
  const service = formatValue(hass, config.service_entity, language, { boolean: true });
  const sourceActive = isEntityActive(hass, config.burner_entity);
  const serviceActive = isEntityActive(hass, config.service_entity);
  const redPipe = getPipeClass("pipe-red", sourceActive, animateFlow);
  const bluePipe = getPipeClass("pipe-blue", sourceActive, animateFlow);
  const hasData = isConfigured(config, PENGU_HEAT_DIAGRAMS.heat_source_only);

  const svg = `
    <svg class="diagram-svg" viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      ${commonSymbols()}
      ${renderHeatSourceSvg(heatSourceType)}
      <g transform="translate(720,248)" filter="url(#shadowSoft)">
        <rect x="0" y="16" width="170" height="220" rx="18" fill="url(#phcMetal)" stroke="#cbd5e1" stroke-width="4"/>
        <rect x="26" y="48" width="118" height="54" rx="12" fill="#eef2ff" stroke="#c7d2fe" stroke-width="3"/>
        <rect x="26" y="132" width="118" height="54" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="3"/>
        <path d="M54 74h62" stroke="#ef4444" stroke-width="8" stroke-linecap="round"/>
        <path d="M54 158h62" stroke="#3b82f6" stroke-width="8" stroke-linecap="round"/>
      </g>
      <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="10">
        <path d="M 220 360 L 720 360" class="${redPipe}"/>
        <path d="M 720 520 L 210 520" class="${bluePipe}"/>
      </g>
      <g>
        <circle cx="720" cy="360" r="9" fill="#dbeafe" stroke="#64748b" stroke-width="3"/>
        <circle cx="720" cy="520" r="9" fill="#dbeafe" stroke="#64748b" stroke-width="3"/>
      </g>
    </svg>
  `;

  const overlay = `
    ${pillHtml({ left: "25%", top: "18%", width: "28%", label: sourceLabel, value: sourceStatus, tone: sourceActive ? "green" : "orange", valueClass: getStatusClass(sourceActive, animateStatus) })}
    ${pillHtml({ left: "78%", top: "18%", label: flowLabel, value: flow, tone: getTemperatureTone(hass, config.flow_entity) })}
    ${pillHtml({ left: "78%", top: "74%", label: returnLabel, value: ret, tone: getTemperatureTone(hass, config.return_entity) })}
    ${pillHtml({ left: "50%", top: "84%", width: "24%", label: serviceLabel, value: service, tone: serviceActive ? "yellow" : "green", valueClass: getStatusClass(serviceActive, animateStatus, "warning") })}
    ${labelHtml(showLabels, sourceLabel, "20%", "74%", "26%")}
    ${labelHtml(showLabels, flowLabel, "82%", "40%", "20%")}
    ${labelHtml(showLabels, returnLabel, "82%", "74%", "20%")}
    ${!hasData ? `<div class="empty-note">${localize(language, "preview_note")}</div>` : ""}
  `;

  return { svg, overlay };
}

class PenguHeatCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static getConfigElement() {
    return document.createElement("pengu-heat-card-editor");
  }

  static getStubConfig() {
    return {
      type: "custom:pengu-heat-card",
      diagram: "solar_thermal",
      language: "auto",
      show_labels: false,
      animate_flow: true,
      animate_status: true,
    };
  }

  setConfig(config) {
    if (!config) {
      throw new Error("Invalid configuration");
    }
    const diagram = config.diagram || "solar_thermal";
    if (!["solar_thermal", "heating_circuit", "hot_water", "heat_source_only"].includes(diagram)) {
      throw new Error("Invalid diagram type");
    }
    this._config = {
      language: "auto",
      show_labels: false,
      animate_flow: true,
      animate_status: true,
      ...config,
      diagram,
    };
    this._render();
  }

  set hass(hass) {
    this._hass = hass;
    this._render();
  }

  connectedCallback() {
    this._render();
  }

  getCardSize() {
    return 5;
  }

  _render() {
    if (!this.shadowRoot || !this._config) return;
    const language = resolveLanguage(this._hass, this._config);
    const diagramName = localize(language, this._config.diagram);
    const title = this._config.title || diagramName;
    let content;
    if (this._config.diagram === "solar_thermal") {
      content = renderSolarDiagram(this._hass, this._config, language);
    } else if (this._config.diagram === "heating_circuit") {
      content = renderHeatingDiagram(this._hass, this._config, language);
    } else if (this._config.diagram === "heat_source_only") {
      content = renderHeatSourceOnlyDiagram(this._hass, this._config, language);
    } else {
      content = renderHotWaterDiagram(this._hass, this._config, language);
    }

    this.shadowRoot.innerHTML = `
      <style>${styleMap()}</style>
      <ha-card>
        <div class="card">
          <div class="card-header">
            <div>
              <div class="card-title">${title}</div>
            </div>
          </div>
          <div class="diagram-shell">
            <div class="canvas">
              ${content.svg}
              <div class="layer">${content.overlay}</div>
            </div>
          </div>
        </div>
      </ha-card>
    `;
  }
}

class PenguHeatCardEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._config = {
      diagram: "solar_thermal",
      language: "auto",
      show_labels: false,
      animate_flow: true,
      animate_status: true,
    };
  }

  set hass(hass) {
    this._hass = hass;

    // Important: do not re-render the whole editor on every Home Assistant
    // state update. Re-rendering while an ha-entity-picker dropdown is open
    // closes the picker and can reset the current selection/search.
    if (!this.shadowRoot || !this.shadowRoot.hasChildNodes()) {
      this._render();
      return;
    }

    this.shadowRoot.querySelectorAll("ha-entity-picker").forEach((picker) => {
      const key = picker.dataset.key;
      picker.hass = this._hass;
      picker.value = this._config[key] || "";
      if (typeof picker.requestUpdate === "function") {
        picker.requestUpdate();
      }
    });
  }

  setConfig(config) {
    const nextConfig = {
      diagram: "solar_thermal",
      language: "auto",
      show_labels: false,
      animate_flow: true,
      animate_status: true,
      ...config,
    };

    const unchanged = JSON.stringify(this._config) === JSON.stringify(nextConfig);
    this._config = nextConfig;

    if (!unchanged || !this.shadowRoot || !this.shadowRoot.hasChildNodes()) {
      this._render();
    }
  }

  _fieldDef(language) {
    return {
      solar_thermal: [
        ["collector_entity", localize(language, "collector_entity")],
        ["pump_entity", localize(language, "solar_pump_entity")],
        ["storage_entity", localize(language, "storage_entity")],
      ],
      heating_circuit: [
        ["outside_entity", localize(language, "outside_entity")],
        ["flow_entity", localize(language, "flow_entity")],
        ["pump_entity", localize(language, "heating_pump_entity")],
        ["burner_entity", localize(language, "heat_source_status_entity")],
        ["service_entity", localize(language, "service_entity")],
      ],
      hot_water: [
        ["hot_water_entity", localize(language, "hot_water_entity")],
        ["buffer_entity", localize(language, "buffer_entity")],
        ["circulation_pump_entity", localize(language, "circulation_pump_entity")],
        ["return_entity", localize(language, "return_entity")],
        ["demand_entity", localize(language, "demand_entity")],
      ],
      heat_source_only: [
        ["flow_entity", localize(language, "flow_entity")],
        ["return_entity", localize(language, "return_entity")],
        ["burner_entity", localize(language, "heat_source_status_entity")],
        ["service_entity", localize(language, "service_entity")],
      ],
    };
  }

  _labelDef(language) {
    return {
      solar_thermal: [
        ["label_collector", localize(language, "collector")],
        ["label_solar_pump", localize(language, "solar_pump")],
        ["label_solar_storage", localize(language, "solar_storage")],
      ],
      heating_circuit: [
        ["label_outdoor", localize(language, "outdoor")],
        ["label_heating_flow", localize(language, "heating_flow")],
        ["label_heating_pump", localize(language, "heating_pump")],
        ["label_heat_source", localize(language, "heat_source")],
        ["label_service", localize(language, "service")],
      ],
      hot_water: [
        ["label_hot_water_temp", localize(language, "hot_water_temp")],
        ["label_buffer", localize(language, "buffer")],
        ["label_circulation_pump", localize(language, "circulation_pump")],
        ["label_circulation_return", localize(language, "circulation_return")],
        ["label_demand", localize(language, "demand")],
      ],
      heat_source_only: [
        ["label_heat_source", localize(language, "heat_source")],
        ["label_heating_flow", localize(language, "heating_flow")],
        ["label_return_flow", localize(language, "return_flow")],
        ["label_service", localize(language, "service")],
      ],
    };
  }

  _render() {
    if (!this.shadowRoot) return;
    const language = resolveLanguage(this._hass, this._config);
    const fields = this._fieldDef(language)[this._config.diagram || "solar_thermal"];
    const labelFields = this._labelDef(language)[this._config.diagram || "solar_thermal"];
    const heatSourceControls =
      ["heating_circuit", "heat_source_only"].includes(this._config.diagram)
        ? `
                  <div class="field">
                    <label for="heat_source_type">${localize(language, "heat_source_type")}</label>
                    <select id="heat_source_type" data-key="heat_source_type">
                      <option value="gas" ${(this._config.heat_source_type || "gas") === "gas" ? "selected" : ""}>${localize(language, "heat_source_gas")}</option>
                      <option value="heat_pump" ${this._config.heat_source_type === "heat_pump" ? "selected" : ""}>${localize(language, "heat_source_heat_pump")}</option>
                      <option value="pellet" ${this._config.heat_source_type === "pellet" ? "selected" : ""}>${localize(language, "heat_source_pellet")}</option>
                      <option value="district_heating" ${this._config.heat_source_type === "district_heating" ? "selected" : ""}>${localize(language, "heat_source_district_heating")}</option>
                    </select>
                  </div>
                `
        : "";

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: var(--paper-font-body1_-_font-family, Roboto, "Noto Sans", sans-serif);
          color: var(--primary-text-color, #1f2937);
        }
        .editor {
          display: grid;
          gap: 16px;
          padding: 8px 4px 0;
        }
        .panel {
          border: 1px solid rgba(148, 163, 184, 0.25);
          border-radius: 16px;
          padding: 18px;
          background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
        }
        .panel-title {
          font-size: 0.95rem;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 14px;
        }
        .field {
          display: grid;
          gap: 6px;
        }
        label {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--secondary-text-color, #475569);
        }
        input, select {
          width: 100%;
          border-radius: 12px;
          border: 1px solid rgba(148, 163, 184, 0.45);
          background: var(--card-background-color, #fff);
          color: var(--primary-text-color, #111827);
          padding: 10px 12px;
          font: inherit;
          box-sizing: border-box;
        }
        ha-entity-picker {
          width: 100%;
        }
        .toggle {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .hint {
          font-size: 0.75rem;
          color: var(--secondary-text-color, #64748b);
          margin-top: 4px;
        }
      </style>
      <div class="editor">
        <div class="panel">
          <div class="panel-title">${localize(language, "editor_title")}</div>
          <div class="grid">
            <div class="field">
              <label for="diagram">${localize(language, "diagram")}</label>
              <select id="diagram" data-key="diagram">
                <option value="solar_thermal" ${this._config.diagram === "solar_thermal" ? "selected" : ""}>${localize(language, "solar_thermal")}</option>
                <option value="heating_circuit" ${this._config.diagram === "heating_circuit" ? "selected" : ""}>${localize(language, "heating_circuit")}</option>
                <option value="hot_water" ${this._config.diagram === "hot_water" ? "selected" : ""}>${localize(language, "hot_water")}</option>
                <option value="heat_source_only" ${this._config.diagram === "heat_source_only" ? "selected" : ""}>${localize(language, "heat_source_only")}</option>
              </select>
            </div>
            <div class="field">
              <label for="language">${localize(language, "language")}</label>
              <select id="language" data-key="language">
                <option value="auto" ${this._config.language === "auto" ? "selected" : ""}>${localize(language, "auto")}</option>
                <option value="de" ${this._config.language === "de" ? "selected" : ""}>${localize(language, "german")}</option>
                <option value="en" ${this._config.language === "en" ? "selected" : ""}>${localize(language, "english")}</option>
              </select>
            </div>
            <div class="field">
              <label for="title">${localize(language, "title")}</label>
              <input id="title" data-key="title" type="text" value="${this._config.title || ""}" placeholder="${localize(language, "title_placeholder")}">
            </div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-title">${localize(language, "appearance")}</div>
          <div class="grid">
            <div class="field toggle">
              <input id="show_labels" data-key="show_labels" type="checkbox" ${this._config.show_labels ? "checked" : ""}>
              <label for="show_labels">${localize(language, "show_labels")}</label>
            </div>
            <div class="field toggle">
              <input id="animate_flow" data-key="animate_flow" type="checkbox" ${this._config.animate_flow !== false ? "checked" : ""}>
              <label for="animate_flow">${localize(language, "animate_flow")}</label>
            </div>
            <div class="field toggle">
              <input id="animate_status" data-key="animate_status" type="checkbox" ${this._config.animate_status !== false ? "checked" : ""}>
              <label for="animate_status">${localize(language, "animate_status")}</label>
            </div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-title">${localize(language, this._config.diagram)}</div>
          <div class="grid">
            ${heatSourceControls}
            ${fields
              .map(
                ([key, label]) => `
                  <div class="field">
                    <label>${label}</label>
                    <ha-entity-picker data-key="${key}" .hass="${this._hass}" .value="${this._config[key] || ""}" allow-custom-entity></ha-entity-picker>
                  </div>
                `
              )
              .join("")}
          </div>
          <div class="hint">${localize(language, "card_desc")}</div>
        </div>
        <div class="panel">
          <div class="panel-title">${localize(language, "custom_labels")}</div>
          <div class="grid">
            ${labelFields.map(([key, label]) => `
              <div class="field">
                <label>${label}</label>
                <input data-key="${key}" type="text" value="${this._config[key] || ""}" placeholder="${label}">
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `;

    this._bindEditorEvents();
    this._assignHassToPickers();
  }

  _assignHassToPickers() {
    this.shadowRoot.querySelectorAll("ha-entity-picker").forEach((picker) => {
      const key = picker.dataset.key;
      picker.hass = this._hass;
      picker.value = this._config[key] || "";
      if (typeof picker.requestUpdate === "function") {
        picker.requestUpdate();
      }
    });
  }

  _bindEditorEvents() {
    this.shadowRoot.querySelectorAll("input[data-key], select[data-key]").forEach((el) => {
      el.addEventListener("change", (ev) => this._handleValueChange(ev));
      if (el.tagName === "INPUT" && el.type === "text") {
        el.addEventListener("input", (ev) => this._handleValueChange(ev));
      }
    });

    this.shadowRoot.querySelectorAll("ha-entity-picker").forEach((picker) => {
      picker.addEventListener("value-changed", (ev) => this._handlePickerChange(ev));
      picker.addEventListener("change", (ev) => this._handlePickerChange(ev));
    });
  }

  _handlePickerChange(ev) {
    const key = ev.currentTarget?.dataset?.key;
    if (!key) return;
    const nextValue = ev.detail?.value ?? ev.currentTarget?.value ?? "";
    this._updateConfigValue(key, nextValue);
  }

  _handleValueChange(ev) {
    const key = ev.currentTarget?.dataset?.key;
    if (!key) return;
    const nextValue = ev.currentTarget.type === "checkbox" ? ev.currentTarget.checked : ev.currentTarget.value;
    this._updateConfigValue(key, nextValue);
  }

  _updateConfigValue(key, value) {
    const nextConfig = { ...this._config };
    if (value === "" || value === null || value === undefined) {
      delete nextConfig[key];
    } else {
      nextConfig[key] = value;
    }

    if (key === "diagram") {
      Object.keys(nextConfig).forEach((existingKey) => {
        const isEntityField = existingKey.endsWith("_entity") || ["pump_entity", "return_entity", "buffer_entity", "storage_entity"].includes(existingKey);
        if (isEntityField && !(PENGU_HEAT_DIAGRAMS[value] || []).includes(existingKey)) {
          delete nextConfig[existingKey];
        }
      });
    }

    this._config = nextConfig;
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: nextConfig },
        bubbles: true,
        composed: true,
      })
    );

    if (key === "diagram" || key === "language" || key === "heat_source_type") {
      this._render();
    }
  }
}

if (!customElements.get("pengu-heat-card")) {
  customElements.define("pengu-heat-card", PenguHeatCard);
}
if (!customElements.get("pengu-heat-card-editor")) {
  customElements.define("pengu-heat-card-editor", PenguHeatCardEditor);
}

window.customCards = window.customCards || [];
window.customCards.push({
  type: "pengu-heat-card",
  name: "Pengu Heat Card",
  description: "Stylish heating schematics with a full GUI editor for Home Assistant.",
});

console.info(`%c PENGU-HEAT-CARD %c ${PENGU_HEAT_VERSION} `, "color: white; background: #2563eb; font-weight: 700;", "color: #2563eb; background: white; font-weight: 700;");
