const PENGU_HEAT_VERSION = "2.0.0";

const PENGU_HEAT_TRANSLATIONS = {
  en: {
    card_name: "Pengu Heat Card",
    card_desc: "Visual heating schematics for solar thermal, heat sources and domestic hot water.",
    diagram: "Diagram",
    title: "Title",
    title_placeholder: "Optional title",
    language: "Language",
    auto: "Auto",
    english: "English",
    german: "German",
    appearance: "Appearance",
    visibility: "Visible values",
    custom_labels: "Custom labels",
    label_positions: "Label positions",
    drag_labels_hint: "Drag the labels to fine tune their position. Positions are saved as percentages.",
    reset_positions: "Reset label positions",
    show_labels: "Show equipment labels",
    visual_style: "Visual style",
    style_modern: "Clean modern",
    style_technical: "Technical",
    style_compact: "Compact",
    animation_mode: "Flow animation",
    animation_off: "Off",
    animation_subtle: "Subtle",
    animation_normal: "Normal",
    animate_status: "Animate active status values",
    tap_action: "Tap action",
    tap_more_info: "More info / history",
    tap_none: "None",
    solar_thermal: "Solar thermal",
    heat_source: "Heat source / heating circuit",
    hot_water: "Domestic hot water",
    heat_source_type: "Heat source type",
    heat_source_gas: "Gas boiler",
    heat_source_heat_pump: "Heat pump",
    heat_source_pellet: "Pellet boiler",
    heat_source_district_heating: "District heating",
    collector_entity: "Collector temperature entity",
    solar_pump_entity: "Solar pump entity",
    storage_entity: "Solar storage temperature entity",
    outside_entity: "Outdoor temperature entity",
    flow_entity: "Flow temperature entity",
    return_entity: "Return temperature entity",
    heating_pump_entity: "Heating pump entity",
    burner_entity: "Heat source status entity",
    dhw_demand_entity: "Domestic hot water demand entity",
    hot_water_entity: "Hot water temperature entity",
    buffer_entity: "Storage / buffer temperature entity",
    circulation_pump_entity: "Circulation pump entity",
    collector: "Collector",
    solar_pump: "Solar pump",
    solar_storage: "Solar storage",
    outdoor: "Outdoor",
    heating_flow: "Flow",
    return_flow: "Return",
    heating_pump: "Heating pump",
    heat_source_status: "Heat source",
    dhw_demand: "DHW demand",
    hot_water_temp: "Hot water",
    buffer: "Storage",
    circulation_pump: "Circulation pump",
    circulation_return: "Circulation return",
    show_outdoor: "Show outdoor temperature",
    show_heating_pump: "Show heating pump value",
    show_heat_source_status: "Show heat source status",
    show_return_temp: "Show return temperature",
    show_dhw_demand: "Show DHW demand",
    show_solar_pump: "Show solar pump value",
    show_circulation_pump: "Show circulation pump value",
    on: "On",
    off: "Off",
    unavailable: "Unavailable",
    preview_note: "Select entities to populate the values.",
    legacy_note: "Older heating circuit / standalone heat source configurations are automatically opened in the combined heat source view.",
  },
  de: {
    card_name: "Pengu Heat Card",
    card_desc: "Visuelle Heizungsschemata für Solarthermie, Wärmeerzeuger und Warmwasser.",
    diagram: "Schema",
    title: "Titel",
    title_placeholder: "Optionaler Titel",
    language: "Sprache",
    auto: "Automatisch",
    english: "Englisch",
    german: "Deutsch",
    appearance: "Darstellung",
    visibility: "Sichtbare Werte",
    custom_labels: "Eigene Labels",
    label_positions: "Label-Positionen",
    drag_labels_hint: "Labels per Drag & Drop verschieben. Die Positionen werden prozentual gespeichert.",
    reset_positions: "Label-Positionen zurücksetzen",
    show_labels: "Anlagenbeschriftungen anzeigen",
    visual_style: "Darstellungsstil",
    style_modern: "Clean modern",
    style_technical: "Technisch",
    style_compact: "Kompakt",
    animation_mode: "Flussanimation",
    animation_off: "Aus",
    animation_subtle: "Dezent",
    animation_normal: "Normal",
    animate_status: "Aktive Statuswerte animieren",
    tap_action: "Aktion beim Tippen",
    tap_more_info: "Mehr Info / Historie",
    tap_none: "Keine",
    solar_thermal: "Solarthermie",
    heat_source: "Wärmeerzeuger / Heizkreis",
    hot_water: "Warmwasser",
    heat_source_type: "Wärmeerzeuger",
    heat_source_gas: "Gasheizung",
    heat_source_heat_pump: "Wärmepumpe",
    heat_source_pellet: "Pelletheizung",
    heat_source_district_heating: "Fernwärme",
    collector_entity: "Entität Kollektortemperatur",
    solar_pump_entity: "Entität Solarpumpe",
    storage_entity: "Entität Solar-/Speichertemperatur",
    outside_entity: "Entität Außentemperatur",
    flow_entity: "Entität Vorlauftemperatur",
    return_entity: "Entität Rücklauftemperatur",
    heating_pump_entity: "Entität Heizkreispumpe",
    burner_entity: "Entität Wärmeerzeuger-Status",
    dhw_demand_entity: "Entität Warmwasser-Anforderung",
    hot_water_entity: "Entität Warmwassertemperatur",
    buffer_entity: "Entität Speicher-/Puffertemperatur",
    circulation_pump_entity: "Entität Zirkulationspumpe",
    collector: "Kollektor",
    solar_pump: "Solarpumpe",
    solar_storage: "Pufferspeicher",
    outdoor: "Außen",
    heating_flow: "Vorlauf",
    return_flow: "Rücklauf",
    heating_pump: "Heizkreispumpe",
    heat_source_status: "Wärmeerzeuger",
    dhw_demand: "WW Anforderung",
    hot_water_temp: "Warmwasser",
    buffer: "Puffer",
    circulation_pump: "Zirkulationspumpe",
    circulation_return: "Zirk. Rücklauf",
    show_outdoor: "Außentemperatur anzeigen",
    show_heating_pump: "Heizkreispumpe anzeigen",
    show_heat_source_status: "Wärmeerzeuger-Status anzeigen",
    show_return_temp: "Rücklauftemperatur anzeigen",
    show_dhw_demand: "Warmwasser-Anforderung anzeigen",
    show_solar_pump: "Solarpumpenwert anzeigen",
    show_circulation_pump: "Zirkulationspumpe anzeigen",
    on: "Ein",
    off: "Aus",
    unavailable: "Nicht verfügbar",
    preview_note: "Entitäten auswählen, um Werte anzuzeigen.",
    legacy_note: "Ältere Heizkreis- und Wärmeerzeuger-Konfigurationen werden automatisch in die kombinierte Wärmeerzeuger-Ansicht übernommen.",
  },
};

const PENGU_HEAT_DIAGRAMS = {
  solar_thermal: ["collector_entity", "pump_entity", "storage_entity"],
  heat_source: ["outside_entity", "flow_entity", "return_entity", "pump_entity", "burner_entity", "dhw_demand_entity"],
  hot_water: ["hot_water_entity", "buffer_entity", "circulation_pump_entity", "return_entity"],
};

function localize(language, key) {
  const table = PENGU_HEAT_TRANSLATIONS[language] || PENGU_HEAT_TRANSLATIONS.en;
  return table[key] ?? PENGU_HEAT_TRANSLATIONS.en[key] ?? key;
}

function resolveLanguage(hass, config) {
  if (config?.language && config.language !== "auto") return config.language;
  const lang = hass?.language || hass?.locale?.language || navigator.language || "en";
  return `${lang}`.toLowerCase().startsWith("de") ? "de" : "en";
}

function normalizeDiagram(diagram) {
  if (diagram === "heating_circuit" || diagram === "heat_source_only") return "heat_source";
  return ["solar_thermal", "heat_source", "hot_water"].includes(diagram) ? diagram : "solar_thermal";
}

function normalizeConfig(config = {}) {
  const legacyAnimation = config.animate_flow === false ? "off" : "subtle";
  return {
    language: "auto",
    diagram: normalizeDiagram(config.diagram),
    visual_style: "modern",
    animation_mode: config.animation_mode || legacyAnimation,
    animate_status: config.animate_status === true,
    tap_action: "more-info",
    show_labels: false,
    show_outdoor: true,
    show_heating_pump: true,
    show_heat_source_status: true,
    show_return_temp: true,
    show_dhw_demand: true,
    show_solar_pump: true,
    show_circulation_pump: true,
    ...config,
    diagram: normalizeDiagram(config.diagram),
  };
}

function escapeHtml(value) {
  return `${value ?? ""}`
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function styleMap() {
  return `
    :host {
      display: block;
      --phc-bg: var(--ha-card-background, var(--card-background-color, #ffffff));
      --phc-text: var(--primary-text-color, #172033);
      --phc-muted: color-mix(in srgb, var(--phc-text) 60%, transparent 40%);
      --phc-border: color-mix(in srgb, var(--phc-text) 10%, transparent 90%);
      --phc-red: #ef4444;
      --phc-blue: #3b82f6;
      --phc-green: #16a34a;
      --phc-orange: #f97316;
      --phc-radius: 22px;
      font-family: var(--paper-font-body1_-_font-family, Roboto, "Noto Sans", sans-serif);
      color: var(--phc-text);
    }
    ha-card { overflow: hidden; }
    .card {
      background: linear-gradient(180deg, color-mix(in srgb, var(--phc-bg) 96%, white 4%), color-mix(in srgb, var(--phc-bg) 95%, #eef4fb 5%));
      border-radius: var(--phc-radius);
      padding: 18px;
      box-sizing: border-box;
      overflow: hidden;
    }
    .card.style-technical { --phc-radius: 10px; }
    .card.style-technical .diagram-shell,
    .card.style-technical .pill { border-radius: 8px; box-shadow: none; }
    .card.style-technical .diagram-shell { background: color-mix(in srgb, var(--phc-bg) 97%, #eef2f7 3%); }
    .card.style-compact { padding: 12px; }
    .card.style-compact .diagram-shell { border-radius: 16px; }
    .card.style-compact .canvas { min-height: 240px; aspect-ratio: 10 / 6.0; }
    .card.style-compact .pill { padding: 5px 7px 6px; min-width: min(82px, 21vw); }
    .card-header { display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:12px; }
    .card-title { font-size:1.06rem; font-weight:750; line-height:1.2; letter-spacing:.005em; }
    .diagram-shell {
      position: relative;
      border: 1px solid rgba(148, 163, 184, .22);
      border-radius: 22px;
      background:
        radial-gradient(circle at 18% 8%, rgba(255,255,255,.95), transparent 28%),
        linear-gradient(180deg, rgba(255,255,255,.78), rgba(248,250,252,.60));
      box-shadow: inset 0 1px 0 rgba(255,255,255,.75);
      overflow:hidden;
    }
    .canvas { position:relative; width:100%; aspect-ratio:10/6.4; min-height:280px; }
    .diagram-svg { position:absolute; inset:0; width:100%; height:100%; }
    .layer { position:absolute; inset:0; pointer-events:none; }
    .pill {
      position:absolute;
      min-width:min(90px,22vw);
      max-width:min(150px,31vw);
      padding:6px 8px 7px;
      border-radius:12px;
      border:1px solid rgba(203,213,225,.88);
      background:rgba(255,255,255,.95);
      box-shadow:0 3px 10px rgba(15,23,42,.06);
      text-align:center;
      transform:translate(-50%,-50%);
      box-sizing:border-box;
      pointer-events:auto;
      user-select:none;
      backdrop-filter:blur(4px);
    }
    .pill-label { display:block; font-size:clamp(.55rem,1vw,.63rem); font-weight:700; color:#64748b; line-height:1.05; margin-bottom:3px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
    .pill-value { display:block; font-size:clamp(.78rem,1.5vw,.96rem); font-weight:800; line-height:1.05; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
    .pill.red { background:linear-gradient(180deg,#fffafa,#fff3f3); border-color:#fecaca; }
    .pill.orange { background:linear-gradient(180deg,#fffdf8,#fff7ed); border-color:#fed7aa; }
    .pill.yellow { background:linear-gradient(180deg,#fffefa,#fefce8); border-color:#fde68a; }
    .pill.green { background:linear-gradient(180deg,#fbfffc,#f0fdf4); border-color:#bbf7d0; }
    .pill.blue { background:linear-gradient(180deg,#fbfdff,#eff6ff); border-color:#bfdbfe; }
    .pill.gray { background:linear-gradient(180deg,#ffffff,#f8fafc); }
    .pill.red .pill-value { color:#dc2626; }
    .pill.orange .pill-value { color:#ea580c; }
    .pill.yellow .pill-value { color:#a16207; }
    .pill.green .pill-value { color:#15803d; }
    .pill.blue .pill-value { color:#2563eb; }
    .pill.gray .pill-value { color:#475569; }
    .click-target { cursor:pointer; transition:filter .15s ease, opacity .15s ease; }
    .pill.click-target { transition:transform .12s ease, box-shadow .12s ease, border-color .12s ease; }
    .pill.click-target:hover { transform:translate(-50%,-50%) scale(1.025); box-shadow:0 6px 16px rgba(15,23,42,.12); border-color:rgba(59,130,246,.45); }
    .tap-none .click-target { cursor:default; }
    .tap-none .pill.click-target:hover { transform:translate(-50%,-50%); box-shadow:0 3px 10px rgba(15,23,42,.06); border-color:rgba(203,213,225,.88); }
    .equipment-label { position:absolute; transform:translate(-50%,-50%); font-size:clamp(.55rem,1.05vw,.68rem); font-weight:650; color:#64748b; pointer-events:none; text-align:center; }
    .empty-note { position:absolute; left:50%; bottom:12px; transform:translateX(-50%); padding:6px 11px; border:1px dashed rgba(148,163,184,.5); border-radius:999px; background:rgba(255,255,255,.88); color:#64748b; font-size:.73rem; white-space:nowrap; max-width:calc(100% - 24px); overflow:hidden; text-overflow:ellipsis; }
    .pipe-red { stroke:var(--phc-red); }
    .pipe-blue { stroke:var(--phc-blue); }
    .pipe-neutral { stroke:#94a3b8; }
    .pipe-active { opacity:1; }
    .pipe-inactive { opacity:.32; stroke:#cbd5e1 !important; }
    .flow-subtle.pipe-active { animation:phcFlowSubtle 2.9s ease-in-out infinite; }
    .flow-normal.pipe-active { stroke-dasharray:7 15; animation:phcFlowNormal 3.3s linear infinite; }
    @keyframes phcFlowSubtle { 0%,100% { opacity:.82; } 50% { opacity:1; } }
    @keyframes phcFlowNormal { from { stroke-dashoffset:0; } to { stroke-dashoffset:-44; } }
    .status-pulse { animation:phcStatusPulse 2.2s ease-in-out infinite; }
    @keyframes phcStatusPulse { 0%,100% { transform:scale(1); } 50% { transform:scale(1.035); } }
  `;
}

function getStateObj(hass, entityId) {
  return entityId ? hass?.states?.[entityId] || null : null;
}

function getNumericValue(hass, entityId) {
  const stateObj = getStateObj(hass, entityId);
  const numeric = Number(stateObj?.state);
  return Number.isFinite(numeric) ? numeric : null;
}

function isEntityActive(hass, entityId) {
  const stateObj = getStateObj(hass, entityId);
  if (!stateObj) return false;
  const value = `${stateObj.state}`.toLowerCase();
  if (["on", "home", "heat", "active", "true", "open", "detected", "running"].includes(value)) return true;
  if (["off", "not_home", "idle", "inactive", "false", "closed", "clear", "standby"].includes(value)) return false;
  const numeric = Number(stateObj.state);
  return Number.isFinite(numeric) ? numeric > 0 : false;
}

function formatValue(hass, entityId, language, options = {}) {
  if (!entityId) return "";
  const stateObj = getStateObj(hass, entityId);
  if (!stateObj || ["unavailable", "unknown", null, undefined].includes(stateObj.state)) return localize(language, "unavailable");
  const domain = entityId.split(".")[0];
  const value = `${stateObj.state}`.toLowerCase();
  if (options.boolean || ["binary_sensor", "switch", "input_boolean"].includes(domain)) {
    if (["on", "home", "heat", "active", "true", "open", "detected", "running"].includes(value)) return localize(language, "on");
    if (["off", "not_home", "idle", "inactive", "false", "closed", "clear", "standby"].includes(value)) return localize(language, "off");
    return `${stateObj.state}`;
  }
  const unit = options.unit ?? stateObj.attributes?.unit_of_measurement ?? "";
  const numeric = Number(stateObj.state);
  if (Number.isFinite(numeric)) {
    const decimals = options.decimals ?? (Math.abs(numeric) >= 100 ? 0 : 1);
    const formatter = new Intl.NumberFormat(language === "de" ? "de-DE" : "en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    return `${formatter.format(numeric)}${unit ? ` ${unit}` : ""}`;
  }
  return `${stateObj.state}${unit ? ` ${unit}` : ""}`;
}

function getTemperatureTone(hass, entityId) {
  const value = getNumericValue(hass, entityId);
  if (!Number.isFinite(value)) return "gray";
  if (value < 10) return "blue";
  if (value < 25) return "green";
  if (value < 45) return "yellow";
  if (value < 65) return "orange";
  return "red";
}

function getPipeClass(color, active, config) {
  const mode = config.animation_mode || (config.animate_flow === false ? "off" : "subtle");
  const animation = active && mode === "subtle" ? " flow-subtle" : active && mode === "normal" ? " flow-normal" : "";
  return `${color} ${active ? "pipe-active" : "pipe-inactive"}${animation}`;
}

function getStatusClass(active, config) {
  return active && config.animate_status ? "status-pulse" : "";
}

function getLabel(config, language, customKey, fallbackKey) {
  return config?.[customKey] || localize(language, fallbackKey);
}

function isConfigured(config, keys) {
  return keys.some((key) => Boolean(config?.[key]));
}

function getPosition(config, key, defaults) {
  const x = Number(config?.[`${key}_x`]);
  const y = Number(config?.[`${key}_y`]);
  return {
    left: Number.isFinite(x) ? `${Math.max(3, Math.min(97, x))}%` : defaults.left,
    top: Number.isFinite(y) ? `${Math.max(3, Math.min(97, y))}%` : defaults.top,
    width: defaults.width,
  };
}

function dataEntityAttr(entityId) {
  return entityId ? `data-entity-id="${escapeHtml(entityId)}" class="click-target"` : "";
}

function pillHtml(config, positionKey, entityId, defaults, options = {}) {
  if (!entityId || options.visible === false) return "";
  const position = getPosition(config, positionKey, defaults);
  const classes = ["pill", options.tone || "gray", "click-target"].filter(Boolean).join(" ");
  return `<div class="${classes}" data-entity-id="${escapeHtml(entityId)}" style="left:${position.left};top:${position.top};${position.width ? `width:${position.width};` : ""}">
    <span class="pill-label">${escapeHtml(options.label)}</span>
    <span class="pill-value ${escapeHtml(options.valueClass || "")}">${escapeHtml(options.value)}</span>
  </div>`;
}

function equipmentLabelHtml(show, text, left, top) {
  if (!show) return "";
  return `<div class="equipment-label" style="left:${left};top:${top};">${escapeHtml(text)}</div>`;
}

function commonSymbols() {
  return `<defs>
    <linearGradient id="phcSolar" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1e3a8a"/><stop offset="1" stop-color="#2563eb"/></linearGradient>
    <linearGradient id="phcMetal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f8fafc"/><stop offset="1" stop-color="#dbe3ec"/></linearGradient>
    <linearGradient id="phcTankWater" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fecaca"/><stop offset=".50" stop-color="#fed7aa"/><stop offset="1" stop-color="#93c5fd"/></linearGradient>
    <linearGradient id="phcTankSolar" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f8fafc"/><stop offset=".48" stop-color="#eaf2fb"/><stop offset="1" stop-color="#bfdbfe"/></linearGradient>
    <filter id="phcShadow" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#0f172a" flood-opacity=".12"/></filter>
    <filter id="phcShadowSmall" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="2" stdDeviation="2.4" flood-color="#0f172a" flood-opacity=".10"/></filter>
  </defs>`;
}

function renderTankSvg({ x, y, width = 150, height = 290, mode = "water", id = "tank", entityId = "", coil = false, portSide = "left" }) {
  const r = width / 2;
  const fill = mode === "solar" ? "url(#phcTankSolar)" : "url(#phcTankWater)";
  const portX = portSide === "right" ? x + width : x;
  const topPortY = y + height * .34;
  const bottomPortY = y + height * .76;
  return `<g ${dataEntityAttr(entityId)} filter="url(#phcShadowSmall)">
    <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${r}" fill="${fill}" stroke="#94a3b8" stroke-width="4"/>
    <ellipse cx="${x + r}" cy="${y + 14}" rx="${r - 8}" ry="13" fill="#e2e8f0" opacity=".86"/>
    <ellipse cx="${x + r}" cy="${y + height - 14}" rx="${r - 8}" ry="13" fill="#60a5fa" opacity=".72"/>
    <circle cx="${portX}" cy="${topPortY}" r="7.5" fill="#f8fafc" stroke="#64748b" stroke-width="2.5"/>
    <circle cx="${portX}" cy="${bottomPortY}" r="7.5" fill="#f8fafc" stroke="#64748b" stroke-width="2.5"/>
    ${coil ? `<path d="M ${portX} ${topPortY} C ${x + width * .30} ${topPortY}, ${x + width * .30} ${y + height * .56}, ${x + width * .55} ${y + height * .56} S ${x + width * .80} ${y + height * .66}, ${x + width * .55} ${y + height * .66} S ${x + width * .30} ${bottomPortY}, ${portX} ${bottomPortY}" fill="none" stroke="#f59e0b" stroke-width="6" stroke-linecap="round" opacity=".9"/>` : ""}
  </g>`;
}

function renderPumpSvg({ cx, cy, entityId = "", scale = 1 }) {
  return `<g ${dataEntityAttr(entityId)} transform="translate(${cx},${cy}) scale(${scale})" filter="url(#phcShadowSmall)">
    <circle cx="0" cy="0" r="31" fill="#f8fafc" stroke="#94a3b8" stroke-width="7"/>
    <path d="M -8 -17 L 18 0 L -8 17 Z" fill="#475569"/>
    <circle cx="0" cy="0" r="3" fill="#ffffff"/>
  </g>`;
}

function renderSolarPanelSvg(entityId = "") {
  return `<g ${dataEntityAttr(entityId)} transform="translate(118,170)" filter="url(#phcShadow)">
    <polygon points="18,122 300,122 324,142 42,142" fill="#cbd5e1" opacity=".72"/>
    <polygon points="44,0 270,0 302,108 10,108" fill="url(#phcSolar)" stroke="#475569" stroke-width="5"/>
    <g stroke="#8fb7ff" stroke-width="3.4" opacity=".92">
      <line x1="82" y1="3" x2="52" y2="105"/><line x1="132" y1="3" x2="102" y2="105"/><line x1="182" y1="3" x2="152" y2="105"/><line x1="232" y1="3" x2="202" y2="105"/>
      <line x1="28" y1="25" x2="280" y2="25"/><line x1="20" y1="52" x2="289" y2="52"/><line x1="12" y1="79" x2="297" y2="79"/>
    </g>
    <circle cx="302" cy="42" r="7" fill="#f8fafc" stroke="#64748b" stroke-width="2.5"/>
    <circle cx="302" cy="90" r="7" fill="#f8fafc" stroke="#64748b" stroke-width="2.5"/>
  </g>`;
}

function renderSunSvg() {
  return `<g transform="translate(88,95)" filter="url(#phcShadowSmall)"><circle cx="0" cy="0" r="27" fill="#f59e0b"/><g stroke="#f59e0b" stroke-width="5" stroke-linecap="round"><line x1="0" y1="-52" x2="0" y2="-78"/><line x1="0" y1="52" x2="0" y2="78"/><line x1="-52" y1="0" x2="-78" y2="0"/><line x1="52" y1="0" x2="78" y2="0"/><line x1="-37" y1="-37" x2="-56" y2="-56"/><line x1="37" y1="37" x2="56" y2="56"/><line x1="-37" y1="37" x2="-56" y2="56"/><line x1="37" y1="-37" x2="56" y2="-56"/></g></g>`;
}

function renderWeatherSvg(entityId = "") {
  return `<g ${dataEntityAttr(entityId)} transform="translate(92,92)" filter="url(#phcShadowSmall)">
    <path d="M15 46c0-18 14-32 33-32 8 0 16 3 22 8 8-12 21-19 36-19 23 0 42 16 46 38 20 1 36 16 36 35 0 20-17 36-38 36H38C17 112 0 96 0 76c0-16 11-29 27-34-4 1-8 2-12 4z" fill="#dce7f3"/>
    <g transform="translate(134,-8)"><rect x="0" y="0" width="18" height="72" rx="9" fill="#dbeafe" stroke="#93c5fd" stroke-width="3"/><circle cx="9" cy="57" r="10" fill="#60a5fa"/><rect x="6" y="9" width="6" height="41" rx="3" fill="#3b82f6"/></g>
  </g>`;
}

function renderRadiatorSvg(entityId = "") {
  return `<g ${dataEntityAttr(entityId)} transform="translate(780,270)" filter="url(#phcShadowSmall)">
    <rect x="0" y="0" width="165" height="205" rx="14" fill="url(#phcMetal)" stroke="#cbd5e1" stroke-width="4"/>
    <g fill="#e7edf4" stroke="#cbd5e1" stroke-width="1.5"><rect x="22" y="34" width="17" height="132" rx="8"/><rect x="52" y="34" width="17" height="132" rx="8"/><rect x="82" y="34" width="17" height="132" rx="8"/><rect x="112" y="34" width="17" height="132" rx="8"/></g>
    <circle cx="0" cy="70" r="7.5" fill="#f8fafc" stroke="#64748b" stroke-width="2.5"/><circle cx="165" cy="170" r="7.5" fill="#f8fafc" stroke="#64748b" stroke-width="2.5"/>
  </g>`;
}

function renderHeatSourceSvg(type, entityId = "") {
  const commonOpen = `<g ${dataEntityAttr(entityId)} transform="translate(72,250)" filter="url(#phcShadow)">`;
  if (type === "heat_pump") {
    return `${commonOpen}<rect x="0" y="0" width="190" height="215" rx="18" fill="url(#phcMetal)" stroke="#cbd5e1" stroke-width="4"/><rect x="23" y="24" width="144" height="118" rx="12" fill="#eaf4ff" stroke="#bfdbfe" stroke-width="3"/><circle cx="95" cy="83" r="42" fill="#f8fbff" stroke="#64748b" stroke-width="5"/><path d="M95 43c16 18 16 62 0 80M55 83c21-10 59-10 80 0M69 54c10 26 38 43 65 43" fill="none" stroke="#60a5fa" stroke-width="5" stroke-linecap="round"/><rect x="28" y="165" width="134" height="27" rx="7" fill="#334155"/><circle cx="51" cy="178" r="5" fill="#22c55e"/><circle cx="70" cy="178" r="5" fill="#60a5fa"/><circle cx="89" cy="178" r="5" fill="#f97316"/><circle cx="190" cy="90" r="7" fill="#f8fafc" stroke="#64748b" stroke-width="2.5"/><circle cx="190" cy="182" r="7" fill="#f8fafc" stroke="#64748b" stroke-width="2.5"/></g>`;
  }
  if (type === "pellet") {
    return `${commonOpen}<rect x="0" y="0" width="150" height="215" rx="18" fill="url(#phcMetal)" stroke="#cbd5e1" stroke-width="4"/><path d="M158 20h76l-17 178h-43z" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="4"/><g fill="#a16207"><circle cx="181" cy="59" r="6"/><circle cx="204" cy="79" r="6"/><circle cx="184" cy="103" r="6"/><circle cx="207" cy="129" r="6"/><circle cx="190" cy="155" r="6"/></g><rect x="22" y="151" width="106" height="42" rx="10" fill="#334155"/><path d="M53 137c0-14 9-25 21-34 12 8 19 19 19 33 0 15-10 25-20 25s-20-10-20-24z" fill="#f97316"/><path d="M68 129c0-8 5-15 11-20 7 5 11 12 11 20 0 9-6 15-11 15s-11-6-11-15z" fill="#fde68a"/><circle cx="150" cy="90" r="7" fill="#f8fafc" stroke="#64748b" stroke-width="2.5"/><circle cx="150" cy="182" r="7" fill="#f8fafc" stroke="#64748b" stroke-width="2.5"/></g>`;
  }
  if (type === "district_heating") {
    return `${commonOpen}<rect x="0" y="0" width="200" height="215" rx="18" fill="url(#phcMetal)" stroke="#cbd5e1" stroke-width="4"/><rect x="30" y="28" width="140" height="132" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="3"/><g stroke-linecap="round" stroke-width="8" fill="none"><path d="M60 46v96" stroke="#ef4444"/><path d="M100 46v96" stroke="#f59e0b"/><path d="M140 46v96" stroke="#3b82f6"/></g><path d="M44 78h112M44 116h112" stroke="#94a3b8" stroke-width="5" stroke-linecap="round"/><rect x="42" y="176" width="116" height="20" rx="6" fill="#334155"/><circle cx="200" cy="90" r="7" fill="#f8fafc" stroke="#64748b" stroke-width="2.5"/><circle cx="200" cy="182" r="7" fill="#f8fafc" stroke="#64748b" stroke-width="2.5"/></g>`;
  }
  return `${commonOpen}<rect x="0" y="0" width="170" height="215" rx="18" fill="url(#phcMetal)" stroke="#cbd5e1" stroke-width="4"/><rect x="23" y="151" width="124" height="42" rx="10" fill="#334155"/><rect x="34" y="160" width="38" height="24" rx="6" fill="#64748b"/><path d="M57 138c0-16 10-28 23-38 14 9 22 22 22 37 0 17-11 28-23 28s-22-11-22-27z" fill="#f97316"/><path d="M74 128c0-9 6-17 12-22 8 6 12 14 12 22 0 10-7 16-12 16s-12-6-12-16z" fill="#fde68a"/><path d="M89 0v-34l20-19" fill="none" stroke="#94a3b8" stroke-width="8" stroke-linecap="round"/><circle cx="170" cy="90" r="7" fill="#f8fafc" stroke="#64748b" stroke-width="2.5"/><circle cx="170" cy="182" r="7" fill="#f8fafc" stroke="#64748b" stroke-width="2.5"/></g>`;
}

function renderTapSvg(entityId = "") {
  return `<g ${dataEntityAttr(entityId)} transform="translate(720,105)" filter="url(#phcShadowSmall)">
    <path d="M0 55h62c22 0 34 12 34 29v16h-24V87c0-6-5-10-12-10H0z" fill="#e2e8f0" stroke="#94a3b8" stroke-width="4"/>
    <path d="M25 53V27h34v26" fill="none" stroke="#94a3b8" stroke-width="7" stroke-linecap="round"/>
    <path d="M80 107v28M94 107v35M108 107v25" stroke="#38bdf8" stroke-width="5" stroke-linecap="round"/>
  </g>`;
}

function renderSolarDiagram(hass, config, language) {
  const collectorLabel = getLabel(config, language, "label_collector", "collector");
  const pumpLabel = getLabel(config, language, "label_solar_pump", "solar_pump");
  const storageLabel = getLabel(config, language, "label_solar_storage", "solar_storage");
  const collector = formatValue(hass, config.collector_entity, language, { unit: "°C" });
  const pump = formatValue(hass, config.pump_entity, language, { decimals: 0 });
  const storage = formatValue(hass, config.storage_entity, language, { unit: "°C" });
  const pumpActive = isEntityActive(hass, config.pump_entity);
  const redPipe = getPipeClass("pipe-red", pumpActive, config);
  const bluePipe = getPipeClass("pipe-blue", pumpActive, config);
  const showLabels = Boolean(config.show_labels);
  const hasData = isConfigured(config, PENGU_HEAT_DIAGRAMS.solar_thermal);

  const svg = `<svg class="diagram-svg" viewBox="0 0 1000 640" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    ${commonSymbols()}
    ${renderSunSvg()}
    ${renderSolarPanelSvg(config.collector_entity)}
    ${renderTankSvg({ x: 735, y: 170, width: 150, height: 300, mode: "solar", id: "solar", entityId: config.storage_entity, coil: true })}
    <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="9">
      <path d="M420 212 H590 V272 H735" class="${redPipe}"/>
      <path d="M735 398 H585 V475 H535" class="${bluePipe}"/>
      <path d="M465 475 H420 V260" class="${bluePipe}"/>
    </g>
    ${renderPumpSvg({ cx: 500, cy: 475, entityId: config.pump_entity, scale: .92 })}
  </svg>`;

  const overlay = `
    ${pillHtml(config, "label_collector", config.collector_entity, { left:"49%", top:"15%", width:"20%" }, { label:collectorLabel, value:collector, tone:getTemperatureTone(hass, config.collector_entity) })}
    ${pillHtml(config, "label_solar_storage", config.storage_entity, { left:"80%", top:"15%", width:"21%" }, { label:storageLabel, value:storage, tone:getTemperatureTone(hass, config.storage_entity) })}
    ${pillHtml(config, "label_solar_pump", config.pump_entity, { left:"50%", top:"84%", width:"19%" }, { label:pumpLabel, value:pump, tone:pumpActive ? "green" : "gray", visible:config.show_solar_pump !== false, valueClass:getStatusClass(pumpActive, config) })}
    ${equipmentLabelHtml(showLabels, collectorLabel, "25%", "47%")}
    ${equipmentLabelHtml(showLabels, storageLabel, "82%", "78%")}
    ${equipmentLabelHtml(showLabels, pumpLabel, "50%", "70%")}
    ${!hasData ? `<div class="empty-note">${escapeHtml(localize(language, "preview_note"))}</div>` : ""}
  `;
  return { svg, overlay };
}

function renderHeatSourceDiagram(hass, config, language) {
  const heatSourceType = config.heat_source_type || "gas";
  const outsideLabel = getLabel(config, language, "label_outdoor", "outdoor");
  const flowLabel = getLabel(config, language, "label_heating_flow", "heating_flow");
  const returnLabel = getLabel(config, language, "label_return_flow", "return_flow");
  const pumpLabel = getLabel(config, language, "label_heating_pump", "heating_pump");
  const sourceLabel = config.label_heat_source || localize(language, `heat_source_${heatSourceType}`);
  const demandLabel = getLabel(config, language, "label_dhw_demand", "dhw_demand");
  const outside = formatValue(hass, config.outside_entity, language, { unit:"°C" });
  const flow = formatValue(hass, config.flow_entity, language, { unit:"°C" });
  const ret = formatValue(hass, config.return_entity, language, { unit:"°C" });
  const pump = formatValue(hass, config.pump_entity, language, { decimals:0 });
  const sourceStatus = formatValue(hass, config.burner_entity, language, { boolean:true });
  const dhwDemand = formatValue(hass, config.dhw_demand_entity, language, { boolean:true });
  const sourceActive = isEntityActive(hass, config.burner_entity);
  const pumpActive = isEntityActive(hass, config.pump_entity);
  const demandActive = isEntityActive(hass, config.dhw_demand_entity);
  const active = sourceActive || pumpActive;
  const sourcePortX = { heat_pump:262, pellet:222, district_heating:272, gas:242 }[heatSourceType] || 242;
  const redPipe = getPipeClass("pipe-red", active, config);
  const bluePipe = getPipeClass("pipe-blue", active, config);
  const showLabels = Boolean(config.show_labels);
  const hasData = isConfigured(config, PENGU_HEAT_DIAGRAMS.heat_source);

  const svg = `<svg class="diagram-svg" viewBox="0 0 1000 640" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    ${commonSymbols()}
    ${config.outside_entity && config.show_outdoor !== false ? renderWeatherSvg(config.outside_entity) : ""}
    ${renderHeatSourceSvg(heatSourceType, config.burner_entity)}
    ${renderRadiatorSvg(config.flow_entity || config.return_entity)}
    <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="9">
      <path d="M${sourcePortX} 340 H470" class="${redPipe}"/>
      <path d="M530 340 H780" class="${redPipe}"/>
      <path d="M945 440 V535 H${sourcePortX} V432" class="${bluePipe}"/>
    </g>
    ${renderPumpSvg({ cx:500, cy:340, entityId:config.pump_entity, scale:.95 })}
  </svg>`;

  const overlay = `
    ${pillHtml(config, "label_outdoor", config.outside_entity, { left:"25%", top:"16%", width:"20%" }, { label:outsideLabel, value:outside, tone:getTemperatureTone(hass, config.outside_entity), visible:config.show_outdoor !== false })}
    ${pillHtml(config, "label_heating_flow", config.flow_entity, { left:"72%", top:"16%", width:"20%" }, { label:flowLabel, value:flow, tone:getTemperatureTone(hass, config.flow_entity) })}
    ${pillHtml(config, "label_heating_pump", config.pump_entity, { left:"51%", top:"65%", width:"22%" }, { label:pumpLabel, value:pump, tone:pumpActive ? "green" : "gray", visible:config.show_heating_pump !== false, valueClass:getStatusClass(pumpActive, config) })}
    ${pillHtml(config, "label_heat_source", config.burner_entity, { left:"22%", top:"84%", width:"24%" }, { label:sourceLabel, value:sourceStatus, tone:sourceActive ? "green" : "gray", visible:config.show_heat_source_status !== false, valueClass:getStatusClass(sourceActive, config) })}
    ${pillHtml(config, "label_return_flow", config.return_entity, { left:"75%", top:"84%", width:"20%" }, { label:returnLabel, value:ret, tone:getTemperatureTone(hass, config.return_entity), visible:config.show_return_temp !== false })}
    ${pillHtml(config, "label_dhw_demand", config.dhw_demand_entity, { left:"43%", top:"16%", width:"22%" }, { label:demandLabel, value:dhwDemand, tone:demandActive ? "orange" : "gray", visible:config.show_dhw_demand !== false, valueClass:getStatusClass(demandActive, config) })}
    ${equipmentLabelHtml(showLabels, sourceLabel, "17%", "75%")}
    ${equipmentLabelHtml(showLabels, pumpLabel, "50%", "55%")}
    ${equipmentLabelHtml(showLabels, localize(language, "heating_flow"), "86%", "54%")}
    ${!hasData ? `<div class="empty-note">${escapeHtml(localize(language, "preview_note"))}</div>` : ""}
  `;
  return { svg, overlay };
}

function renderHotWaterDiagram(hass, config, language) {
  const hotWaterLabel = getLabel(config, language, "label_hot_water_temp", "hot_water_temp");
  const bufferLabel = getLabel(config, language, "label_buffer", "buffer");
  const pumpLabel = getLabel(config, language, "label_circulation_pump", "circulation_pump");
  const returnLabel = getLabel(config, language, "label_circulation_return", "circulation_return");
  const hotWater = formatValue(hass, config.hot_water_entity, language, { unit:"°C" });
  const buffer = formatValue(hass, config.buffer_entity, language, { unit:"°C" });
  const pump = formatValue(hass, config.circulation_pump_entity, language, { boolean:false, decimals:0 });
  const ret = formatValue(hass, config.return_entity, language, { unit:"°C" });
  const circulationActive = isEntityActive(hass, config.circulation_pump_entity);
  const redPipe = getPipeClass("pipe-red", true, { ...config, animation_mode: circulationActive ? config.animation_mode : "off" });
  const bluePipe = getPipeClass("pipe-blue", circulationActive, config);
  const showLabels = Boolean(config.show_labels);
  const hasData = isConfigured(config, PENGU_HEAT_DIAGRAMS.hot_water);

  const svg = `<svg class="diagram-svg" viewBox="0 0 1000 640" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    ${commonSymbols()}
    ${renderTankSvg({ x:170, y:165, width:170, height:325, mode:"water", id:"dhw", entityId:config.hot_water_entity || config.buffer_entity, coil:false, portSide:"right" })}
    ${renderTapSvg(config.hot_water_entity)}
    <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="9">
      <path d="M340 275 H720" class="${redPipe}"/>
      <path d="M720 275 V160" class="${redPipe}"/>
      <path d="M640 275 V420" class="${redPipe}"/>
      <path d="M640 480 V430" class="${bluePipe}"/>
      <path d="M640 480 V520 H340 V412" class="${bluePipe}"/>
    </g>
    ${renderPumpSvg({ cx:640, cy:450, entityId:config.circulation_pump_entity, scale:.9 })}
  </svg>`;

  const overlay = `
    ${pillHtml(config, "label_hot_water_temp", config.hot_water_entity, { left:"30%", top:"14%", width:"21%" }, { label:hotWaterLabel, value:hotWater, tone:getTemperatureTone(hass, config.hot_water_entity) })}
    ${pillHtml(config, "label_buffer", config.buffer_entity, { left:"30%", top:"84%", width:"21%" }, { label:bufferLabel, value:buffer, tone:getTemperatureTone(hass, config.buffer_entity) })}
    ${pillHtml(config, "label_circulation_pump", config.circulation_pump_entity, { left:"72%", top:"58%", width:"27%" }, { label:pumpLabel, value:pump, tone:circulationActive ? "green" : "gray", visible:config.show_circulation_pump !== false, valueClass:getStatusClass(circulationActive, config) })}
    ${pillHtml(config, "label_circulation_return", config.return_entity, { left:"72%", top:"84%", width:"24%" }, { label:returnLabel, value:ret, tone:getTemperatureTone(hass, config.return_entity), visible:config.show_return_temp !== false })}
    ${equipmentLabelHtml(showLabels, localize(language, "hot_water_temp"), "25%", "70%")}
    ${equipmentLabelHtml(showLabels, pumpLabel, "64%", "68%")}
    ${!hasData ? `<div class="empty-note">${escapeHtml(localize(language, "preview_note"))}</div>` : ""}
  `;
  return { svg, overlay };
}

class PenguHeatCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode:"open" });
  }

  static getConfigElement() {
    return document.createElement("pengu-heat-card-editor");
  }

  static getStubConfig() {
    return {
      diagram:"solar_thermal",
      language:"auto",
      visual_style:"modern",
      animation_mode:"subtle",
      animate_status:false,
      tap_action:"more-info",
      show_labels:false,
    };
  }

  setConfig(config) {
    if (!config) throw new Error("Invalid configuration");
    this._config = normalizeConfig(config);
    this._render();
  }

  set hass(hass) {
    this._hass = hass;
    this._render();
  }

  connectedCallback() { this._render(); }
  getCardSize() { return 5; }

  _render() {
    if (!this.shadowRoot || !this._config) return;
    const language = resolveLanguage(this._hass, this._config);
    const title = this._config.title || localize(language, this._config.diagram);
    let content;
    if (this._config.diagram === "solar_thermal") content = renderSolarDiagram(this._hass, this._config, language);
    else if (this._config.diagram === "hot_water") content = renderHotWaterDiagram(this._hass, this._config, language);
    else content = renderHeatSourceDiagram(this._hass, this._config, language);
    const style = ["modern", "technical", "compact"].includes(this._config.visual_style) ? this._config.visual_style : "modern";
    const tapClass = this._config.tap_action === "none" ? "tap-none" : "";
    this.shadowRoot.innerHTML = `<style>${styleMap()}</style><ha-card><div class="card style-${style} ${tapClass}">
      <div class="card-header"><div class="card-title">${escapeHtml(title)}</div></div>
      <div class="diagram-shell"><div class="canvas">${content.svg}<div class="layer">${content.overlay}</div></div></div>
    </div></ha-card>`;
    this._bindInteractions();
  }

  _bindInteractions() {
    if (this._config.tap_action === "none") return;
    this.shadowRoot.querySelectorAll("[data-entity-id]").forEach((target) => {
      target.addEventListener("click", (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        const entityId = target.getAttribute("data-entity-id");
        if (!entityId) return;
        this.dispatchEvent(new CustomEvent("hass-more-info", { detail:{ entityId }, bubbles:true, composed:true }));
      });
    });
  }
}

class PenguHeatCardEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode:"open" });
    this._config = normalizeConfig({});
  }

  set hass(hass) {
    this._hass = hass;
    if (!this.shadowRoot?.hasChildNodes()) {
      this._render();
      return;
    }
    this._assignHassToPickers();
  }

  setConfig(config) {
    const next = normalizeConfig(config || {});
    const changed = JSON.stringify(next) !== JSON.stringify(this._config);
    this._config = next;
    if (changed || !this.shadowRoot?.hasChildNodes()) this._render();
  }

  _fieldDef(language) {
    return {
      solar_thermal: [
        ["collector_entity", localize(language,"collector_entity")],
        ["pump_entity", localize(language,"solar_pump_entity")],
        ["storage_entity", localize(language,"storage_entity")],
      ],
      heat_source: [
        ["outside_entity", localize(language,"outside_entity")],
        ["flow_entity", localize(language,"flow_entity")],
        ["return_entity", localize(language,"return_entity")],
        ["pump_entity", localize(language,"heating_pump_entity")],
        ["burner_entity", localize(language,"burner_entity")],
        ["dhw_demand_entity", localize(language,"dhw_demand_entity")],
      ],
      hot_water: [
        ["hot_water_entity", localize(language,"hot_water_entity")],
        ["buffer_entity", localize(language,"buffer_entity")],
        ["circulation_pump_entity", localize(language,"circulation_pump_entity")],
        ["return_entity", localize(language,"return_entity")],
      ],
    };
  }

  _labelDef(language) {
    return {
      solar_thermal: [
        ["label_collector", localize(language,"collector")],
        ["label_solar_pump", localize(language,"solar_pump")],
        ["label_solar_storage", localize(language,"solar_storage")],
      ],
      heat_source: [
        ["label_outdoor", localize(language,"outdoor")],
        ["label_heating_flow", localize(language,"heating_flow")],
        ["label_return_flow", localize(language,"return_flow")],
        ["label_heating_pump", localize(language,"heating_pump")],
        ["label_heat_source", localize(language,"heat_source_status")],
        ["label_dhw_demand", localize(language,"dhw_demand")],
      ],
      hot_water: [
        ["label_hot_water_temp", localize(language,"hot_water_temp")],
        ["label_buffer", localize(language,"buffer")],
        ["label_circulation_pump", localize(language,"circulation_pump")],
        ["label_circulation_return", localize(language,"circulation_return")],
      ],
    };
  }

  _positionDef(language) {
    return {
      solar_thermal: [
        ["label_collector", localize(language,"collector"),49,15],
        ["label_solar_storage", localize(language,"solar_storage"),80,15],
        ["label_solar_pump", localize(language,"solar_pump"),50,84],
      ],
      heat_source: [
        ["label_outdoor", localize(language,"outdoor"),25,16],
        ["label_dhw_demand", localize(language,"dhw_demand"),43,16],
        ["label_heating_flow", localize(language,"heating_flow"),72,16],
        ["label_heating_pump", localize(language,"heating_pump"),51,65],
        ["label_heat_source", localize(language,"heat_source_status"),22,84],
        ["label_return_flow", localize(language,"return_flow"),75,84],
      ],
      hot_water: [
        ["label_hot_water_temp", localize(language,"hot_water_temp"),30,14],
        ["label_buffer", localize(language,"buffer"),30,84],
        ["label_circulation_pump", localize(language,"circulation_pump"),72,58],
        ["label_circulation_return", localize(language,"circulation_return"),72,84],
      ],
    };
  }

  _visibilityDef(language) {
    if (this._config.diagram === "solar_thermal") return [["show_solar_pump", localize(language,"show_solar_pump")]];
    if (this._config.diagram === "hot_water") return [["show_circulation_pump", localize(language,"show_circulation_pump")],["show_return_temp", localize(language,"show_return_temp")]];
    return [
      ["show_outdoor", localize(language,"show_outdoor")],
      ["show_heating_pump", localize(language,"show_heating_pump")],
      ["show_heat_source_status", localize(language,"show_heat_source_status")],
      ["show_return_temp", localize(language,"show_return_temp")],
      ["show_dhw_demand", localize(language,"show_dhw_demand")],
    ];
  }

  _positionValue(key, axis, fallback) {
    const value = Number(this._config?.[`${key}_${axis}`]);
    return Number.isFinite(value) ? Math.max(3, Math.min(97, value)) : fallback;
  }

  _render() {
    if (!this.shadowRoot) return;
    const language = resolveLanguage(this._hass, this._config);
    const fields = this._fieldDef(language)[this._config.diagram];
    const labels = this._labelDef(language)[this._config.diagram];
    const positions = this._positionDef(language)[this._config.diagram];
    const visibility = this._visibilityDef(language);
    const heatSourceControl = this._config.diagram === "heat_source" ? `<div class="field"><label>${localize(language,"heat_source_type")}</label><select data-key="heat_source_type">
      <option value="gas" ${(this._config.heat_source_type || "gas") === "gas" ? "selected" : ""}>${localize(language,"heat_source_gas")}</option>
      <option value="heat_pump" ${this._config.heat_source_type === "heat_pump" ? "selected" : ""}>${localize(language,"heat_source_heat_pump")}</option>
      <option value="pellet" ${this._config.heat_source_type === "pellet" ? "selected" : ""}>${localize(language,"heat_source_pellet")}</option>
      <option value="district_heating" ${this._config.heat_source_type === "district_heating" ? "selected" : ""}>${localize(language,"heat_source_district_heating")}</option>
    </select></div>` : "";

    this.shadowRoot.innerHTML = `<style>
      :host { display:block; font-family:var(--paper-font-body1_-_font-family,Roboto,sans-serif); color:var(--primary-text-color); }
      .editor { display:grid; gap:14px; padding:4px 0; }
      .panel { border:1px solid rgba(148,163,184,.28); border-radius:14px; padding:14px; background:var(--card-background-color,#fff); }
      .panel-title { font-weight:750; font-size:.95rem; margin-bottom:12px; }
      .grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:12px; }
      .field { display:flex; flex-direction:column; gap:6px; min-width:0; }
      .field label { font-size:.78rem; font-weight:650; color:var(--secondary-text-color,#64748b); }
      input[type=text], select { width:100%; box-sizing:border-box; min-height:42px; padding:9px 10px; border:1px solid rgba(148,163,184,.42); border-radius:10px; background:var(--card-background-color,#fff); color:var(--primary-text-color); }
      .toggle { display:flex; flex-direction:row; align-items:center; gap:8px; min-height:36px; }
      .toggle label { color:var(--primary-text-color); }
      .hint { margin-top:10px; font-size:.72rem; color:var(--secondary-text-color,#64748b); line-height:1.35; }
      .position-canvas { position:relative; width:100%; aspect-ratio:10/5.7; min-height:190px; border-radius:14px; border:1px dashed rgba(148,163,184,.55); background:linear-gradient(180deg,rgba(248,250,252,.9),rgba(241,245,249,.75)); overflow:hidden; touch-action:none; }
      .drag-chip { position:absolute; transform:translate(-50%,-50%); padding:7px 10px; border:1px solid #bfdbfe; border-radius:10px; background:#fff; box-shadow:0 3px 8px rgba(15,23,42,.08); color:#334155; font-size:.72rem; font-weight:700; cursor:grab; user-select:none; touch-action:none; white-space:nowrap; }
      .drag-chip:active { cursor:grabbing; }
      .reset { margin-top:10px; min-height:38px; border:1px solid rgba(148,163,184,.4); border-radius:10px; padding:7px 10px; background:transparent; color:var(--primary-text-color); cursor:pointer; }
      @media(max-width:760px){ .grid{grid-template-columns:1fr;} }
    </style><div class="editor">
      <div class="panel"><div class="panel-title">Pengu Heat Card</div><div class="grid">
        <div class="field"><label>${localize(language,"diagram")}</label><select data-key="diagram">
          <option value="solar_thermal" ${this._config.diagram === "solar_thermal" ? "selected" : ""}>${localize(language,"solar_thermal")}</option>
          <option value="heat_source" ${this._config.diagram === "heat_source" ? "selected" : ""}>${localize(language,"heat_source")}</option>
          <option value="hot_water" ${this._config.diagram === "hot_water" ? "selected" : ""}>${localize(language,"hot_water")}</option>
        </select></div>
        <div class="field"><label>${localize(language,"language")}</label><select data-key="language"><option value="auto" ${this._config.language === "auto" ? "selected" : ""}>${localize(language,"auto")}</option><option value="de" ${this._config.language === "de" ? "selected" : ""}>${localize(language,"german")}</option><option value="en" ${this._config.language === "en" ? "selected" : ""}>${localize(language,"english")}</option></select></div>
        <div class="field"><label>${localize(language,"title")}</label><input data-key="title" type="text" value="${escapeHtml(this._config.title || "")}" placeholder="${escapeHtml(localize(language,"title_placeholder"))}"></div>
        ${heatSourceControl}
      </div></div>

      <div class="panel"><div class="panel-title">${localize(language,"appearance")}</div><div class="grid">
        <div class="field"><label>${localize(language,"visual_style")}</label><select data-key="visual_style"><option value="modern" ${this._config.visual_style === "modern" ? "selected" : ""}>${localize(language,"style_modern")}</option><option value="technical" ${this._config.visual_style === "technical" ? "selected" : ""}>${localize(language,"style_technical")}</option><option value="compact" ${this._config.visual_style === "compact" ? "selected" : ""}>${localize(language,"style_compact")}</option></select></div>
        <div class="field"><label>${localize(language,"animation_mode")}</label><select data-key="animation_mode"><option value="off" ${this._config.animation_mode === "off" ? "selected" : ""}>${localize(language,"animation_off")}</option><option value="subtle" ${this._config.animation_mode === "subtle" ? "selected" : ""}>${localize(language,"animation_subtle")}</option><option value="normal" ${this._config.animation_mode === "normal" ? "selected" : ""}>${localize(language,"animation_normal")}</option></select></div>
        <div class="field"><label>${localize(language,"tap_action")}</label><select data-key="tap_action"><option value="more-info" ${this._config.tap_action !== "none" ? "selected" : ""}>${localize(language,"tap_more_info")}</option><option value="none" ${this._config.tap_action === "none" ? "selected" : ""}>${localize(language,"tap_none")}</option></select></div>
        <div class="field toggle"><input data-key="show_labels" type="checkbox" ${this._config.show_labels ? "checked" : ""}><label>${localize(language,"show_labels")}</label></div>
        <div class="field toggle"><input data-key="animate_status" type="checkbox" ${this._config.animate_status ? "checked" : ""}><label>${localize(language,"animate_status")}</label></div>
      </div></div>

      <div class="panel"><div class="panel-title">${localize(language,this._config.diagram)}</div><div class="grid">${fields.map(([key,label]) => `<div class="field"><label>${escapeHtml(label)}</label><ha-entity-picker data-key="${key}" allow-custom-entity></ha-entity-picker></div>`).join("")}</div><div class="hint">${escapeHtml(localize(language,"legacy_note"))}</div></div>

      <div class="panel"><div class="panel-title">${localize(language,"visibility")}</div><div class="grid">${visibility.map(([key,label]) => `<div class="field toggle"><input data-key="${key}" type="checkbox" ${this._config[key] !== false ? "checked" : ""}><label>${escapeHtml(label)}</label></div>`).join("")}</div></div>

      <div class="panel"><div class="panel-title">${localize(language,"custom_labels")}</div><div class="grid">${labels.map(([key,label]) => `<div class="field"><label>${escapeHtml(label)}</label><input data-key="${key}" type="text" value="${escapeHtml(this._config[key] || "")}" placeholder="${escapeHtml(label)}"></div>`).join("")}</div></div>

      <div class="panel"><div class="panel-title">${localize(language,"label_positions")}</div><div class="position-canvas">${positions.map(([key,label,x,y]) => `<div class="drag-chip" data-position-key="${key}" style="left:${this._positionValue(key,"x",x)}%;top:${this._positionValue(key,"y",y)}%;">${escapeHtml(this._config[key] || label)}</div>`).join("")}</div><button class="reset" type="button" id="resetPositions">${escapeHtml(localize(language,"reset_positions"))}</button><div class="hint">${escapeHtml(localize(language,"drag_labels_hint"))}</div></div>
    </div>`;
    this._bindEditorEvents();
    this._bindPositionDrag();
    this._assignHassToPickers();
  }

  _assignHassToPickers() {
    this.shadowRoot?.querySelectorAll("ha-entity-picker").forEach((picker) => {
      const key = picker.dataset.key;
      picker.hass = this._hass;
      picker.value = this._config[key] || "";
      picker.requestUpdate?.();
    });
  }

  _bindEditorEvents() {
    this.shadowRoot.querySelectorAll("input[data-key], select[data-key]").forEach((el) => {
      const eventName = el.tagName === "SELECT" || el.type === "checkbox" ? "change" : "input";
      el.addEventListener(eventName, () => {
        const key = el.dataset.key;
        const value = el.type === "checkbox" ? el.checked : el.value;
        this._updateConfigValue(key, value);
      });
    });
    this.shadowRoot.querySelectorAll("ha-entity-picker").forEach((picker) => {
      picker.addEventListener("value-changed", (ev) => this._updateConfigValue(picker.dataset.key, ev.detail?.value || ""));
      picker.addEventListener("change", (ev) => this._updateConfigValue(picker.dataset.key, ev.target?.value || ""));
    });
    this.shadowRoot.getElementById("resetPositions")?.addEventListener("click", () => {
      const next = { ...this._config };
      Object.keys(next).filter((key) => /_x$|_y$/.test(key)).forEach((key) => delete next[key]);
      this._config = next;
      this._emitConfig();
      this._render();
    });
  }

  _bindPositionDrag() {
    this.shadowRoot.querySelectorAll(".drag-chip").forEach((chip) => {
      chip.addEventListener("pointerdown", (ev) => {
        ev.preventDefault();
        const canvas = chip.closest(".position-canvas");
        const key = chip.dataset.positionKey;
        if (!canvas || !key) return;
        const move = (event) => {
          const rect = canvas.getBoundingClientRect();
          const x = Math.max(3, Math.min(97, ((event.clientX - rect.left) / rect.width) * 100));
          const y = Math.max(3, Math.min(97, ((event.clientY - rect.top) / rect.height) * 100));
          chip.style.left = `${x}%`; chip.style.top = `${y}%`; chip.dataset.x = x.toFixed(1); chip.dataset.y = y.toFixed(1);
        };
        const stop = (event) => {
          move(event);
          chip.releasePointerCapture?.(event.pointerId);
          chip.removeEventListener("pointermove", move); chip.removeEventListener("pointerup", stop); chip.removeEventListener("pointercancel", stop);
          const next = { ...this._config, [`${key}_x`]:Number(chip.dataset.x), [`${key}_y`]:Number(chip.dataset.y) };
          this._config = next; this._emitConfig();
        };
        chip.setPointerCapture?.(ev.pointerId); chip.addEventListener("pointermove", move); chip.addEventListener("pointerup", stop); chip.addEventListener("pointercancel", stop);
      });
    });
  }

  _updateConfigValue(key, value) {
    const next = { ...this._config };
    if (value === "" || value === null || value === undefined) delete next[key]; else next[key] = value;
    if (key === "diagram") {
      next.diagram = normalizeDiagram(value);
      const allowed = new Set(PENGU_HEAT_DIAGRAMS[next.diagram]);
      Object.keys(next).forEach((existingKey) => {
        const isEntity = existingKey.endsWith("_entity") || ["pump_entity","return_entity","buffer_entity","storage_entity"].includes(existingKey);
        if (isEntity && !allowed.has(existingKey)) delete next[existingKey];
      });
    }
    this._config = normalizeConfig(next);
    this._emitConfig();
    if (["diagram","language","heat_source_type","visual_style"].includes(key)) this._render();
  }

  _emitConfig() {
    this.dispatchEvent(new CustomEvent("config-changed", { detail:{ config:this._config }, bubbles:true, composed:true }));
  }
}

if (!customElements.get("pengu-heat-card")) customElements.define("pengu-heat-card", PenguHeatCard);
if (!customElements.get("pengu-heat-card-editor")) customElements.define("pengu-heat-card-editor", PenguHeatCardEditor);

window.customCards = window.customCards || [];
if (!window.customCards.some((card) => card.type === "pengu-heat-card")) {
  window.customCards.push({
    type:"pengu-heat-card",
    name:"Pengu Heat Card",
    preview:true,
    description:"Visual heating schematics for solar thermal, heat sources and domestic hot water with a full GUI editor.",
    documentationURL:"https://github.com/Borderlane-HA/Pengu-Heat-Card",
    getEntitySuggestion:(hass, entityId) => {
      const state = hass?.states?.[entityId];
      if (!state) return null;
      const name = `${state.attributes?.friendly_name || entityId}`.toLowerCase();
      const deviceClass = state.attributes?.device_class;
      if (deviceClass === "temperature" && /(kollektor|collector|solar)/.test(name)) return { config:{ type:"custom:pengu-heat-card", diagram:"solar_thermal", collector_entity:entityId } };
      if (deviceClass === "temperature" && /(warmwasser|hot water|dhw)/.test(name)) return { config:{ type:"custom:pengu-heat-card", diagram:"hot_water", hot_water_entity:entityId } };
      if (deviceClass === "temperature" && /(vorlauf|flow|heizkreis|heating)/.test(name)) return { config:{ type:"custom:pengu-heat-card", diagram:"heat_source", flow_entity:entityId } };
      return null;
    },
  });
}

console.info(`%c PENGU-HEAT-CARD %c ${PENGU_HEAT_VERSION} `, "color:white;background:#2563eb;font-weight:700;", "color:#2563eb;background:white;font-weight:700;");
