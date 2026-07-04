# Pengu Heat Card

![Pengu Heat Card](./assets/pengu-logo.svg)

A stylish visual heat card for **Home Assistant** dashboards.

Pengu Heat Card provides animated heating schematics for **solar thermal systems**, **heating circuits**, **domestic hot water** and **standalone heat sources**. It is designed for installations using **Technische Alternative CMI / TA C.M.I.**, **eBUS**, **Modbus**, **MQTT**, **ESPHome**, REST sensors or any other heating controller that exposes entities to Home Assistant.

Repository: `https://github.com/Borderlane-HA/Pengu-Heat-Card`

> Note for HACS: use the repository URL without `/tree/main`.

---

## Supported use cases

Pengu Heat Card is useful for heating systems and controllers such as:

- **Technische Alternative CMI / TA C.M.I.**
- **UVR16x2 / UVR610 / CAN-EZ / CAN-MTx** style installations exposed through CMI sensors
- **Solar thermal collectors**
- **Buffer tanks / thermal storage**
- **Domestic hot water storage**
- **Circulation pumps**
- **Gas boilers**
- **Heat pumps**
- **Pellet boilers**
- **District heating / Fernwärme**
- **eBUS based heating systems**
- **Modbus based heating controllers**
- **MQTT / ESPHome / template sensor based integrations**

The card does not require a specific integration. If your heating controller provides sensors, binary sensors or switches in Home Assistant, you can map them to the card through the graphical editor.

---

## Highlights

- ✅ Appears in **Add card** as **Pengu Heat Card**
- ✅ Full **GUI editor** — not YAML-only
- ✅ German and English labels
- ✅ Designed for TA CMI and other heating controller dashboards
- ✅ 4 built-in diagram types:
  - Solar thermal
  - Heating circuit
  - Domestic hot water
  - Standalone heat source / burner
- ✅ Selectable heat source:
  - Gas boiler
  - Heat pump
  - Pellet boiler
  - District heating
- ✅ Works with sensors, binary sensors, switches and similar Home Assistant entities
- ✅ More status colors for temperatures and states
- ✅ Optional animations for active flow lines and active status badges
- ✅ Freely configurable labels for each diagram
- ✅ HACS-compatible repository structure

---

## Deutsche Kurzbeschreibung

**Pengu Heat Card** ist eine visuelle Home Assistant Karte für Heizungsanlagen, Solarthermie, Warmwasser und Wärmeerzeuger.

Die Karte eignet sich besonders für Anlagen mit **Technische Alternative CMI / TA C.M.I.**, aber auch für andere Heizungssteuerungen, die über **eBUS**, **Modbus**, **MQTT**, **ESPHome**, REST oder Template-Sensoren in Home Assistant eingebunden sind.

Die Konfiguration erfolgt über den **grafischen Karten-Editor**. YAML ist für die normale Nutzung nicht nötig.

---

## Installation

### HACS custom repository

1. Open **HACS** in Home Assistant.
2. Open the three-dot menu.
3. Select **Custom repositories**.
4. Add this repository URL:

   ```text
   https://github.com/Borderlane-HA/Pengu-Heat-Card
   ```

5. Category: **Dashboard**.
6. Install **Pengu Heat Card**.
7. Reload the browser or restart the Home Assistant frontend if the card does not appear immediately.

### Manual installation

1. Download `pengu-heat-card.js` from this repository.
2. Copy it to:

   ```text
   /config/www/pengu-heat-card.js
   ```

3. Add the resource in Home Assistant:

   ```yaml
   url: /local/pengu-heat-card.js
   type: module
   ```

4. Open your dashboard and add **Pengu Heat Card**.

---

## Add the card

After installation, open a dashboard and choose:

**Add card → Pengu Heat Card**

Then select one of the four diagram types in the GUI editor:

- **Solar thermal**
- **Heating circuit**
- **Domestic hot water**
- **Standalone heat source / burner**

No manual YAML is required for normal use.

---

## GUI configuration

### Global options

- Title
- Language: `Auto`, `Deutsch`, `English`
- Show equipment labels
- Animate active flow lines
- Animate active status badges
- Custom labels for all displayed values

### Solar thermal

Typical entities:

- Collector temperature
- Solar pump state or pump speed
- Solar storage / buffer temperature

### Heating circuit

Typical entities:

- Outdoor temperature
- Heating flow temperature
- Heating pump state or pump speed
- Heat source status
- Maintenance / service status

Selectable heat source types:

```yaml
heat_source_type: gas
```

```yaml
heat_source_type: heat_pump
```

```yaml
heat_source_type: pellet
```

```yaml
heat_source_type: district_heating
```

### Domestic hot water

Typical entities:

- Hot water temperature
- Buffer temperature
- Circulation pump state
- Circulation return temperature
- Hot water demand state

### Standalone heat source / burner

Typical entities:

- Heat source status
- Heating flow temperature
- Return temperature
- Maintenance / service status

This is useful when you want a separate card only for a boiler, heat pump, pellet boiler or district heating transfer station.

---

## YAML examples

You do **not** need YAML for standard use, but these examples show the available configuration keys.

### Solar thermal / Solarthermie

```yaml
type: custom:pengu-heat-card
diagram: solar_thermal
title: Solarthermie
language: de
collector_entity: sensor.kollektor_temp
pump_entity: sensor.solar_pumpe
storage_entity: sensor.pufferspeicher_solar
show_labels: false
animate_flow: true
animate_status: true
label_collector: Kollektor
label_solar_pump: Solarpumpe
label_solar_storage: Solarspeicher
```

### Heating circuit / Heizkreis

```yaml
type: custom:pengu-heat-card
diagram: heating_circuit
title: Heizkreis 1
language: de
heat_source_type: heat_pump
outside_entity: sensor.aussentemperatur
flow_entity: sensor.hk1_vorlauf
pump_entity: sensor.hk1_pumpe
burner_entity: binary_sensor.waermepumpe_aktiv
service_entity: binary_sensor.wartung
show_labels: false
animate_flow: true
animate_status: true
label_heat_source: Wärmepumpe
label_heating_flow: HK1 Vorlauf
label_heating_pump: HK1 Pumpe
```

### Domestic hot water / Warmwasser

```yaml
type: custom:pengu-heat-card
diagram: hot_water
title: Warmwasser
language: de
hot_water_entity: sensor.warmwasser_temp
buffer_entity: sensor.puffer_temp
circulation_pump_entity: switch.zirkulationspumpe
return_entity: sensor.zirkulation_ruecklauf
demand_entity: binary_sensor.ww_anforderung
show_labels: false
animate_flow: true
animate_status: true
label_hot_water_temp: Warmwasser
label_buffer: Puffer
label_circulation_pump: Zirkulationspumpe
label_circulation_return: Zirk. Rücklauf
label_demand: WW Anforderung
```

### Standalone heat source / Wärmeerzeuger separat

```yaml
type: custom:pengu-heat-card
diagram: heat_source_only
title: Wärmeerzeuger
language: de
heat_source_type: pellet
flow_entity: sensor.kessel_vorlauf
return_entity: sensor.kessel_ruecklauf
burner_entity: binary_sensor.pelletkessel_aktiv
service_entity: binary_sensor.wartung
show_labels: false
animate_flow: true
animate_status: true
label_heat_source: Pelletkessel
label_heating_flow: Vorlauf
label_return_flow: Rücklauf
label_service: Wartung
```

---

## Repository structure

```text
Pengu-Heat-Card/
├─ .github/
│  └─ workflows/
│     └─ validate.yml
├─ assets/
│  └─ pengu-logo.svg
├─ dist/
│  └─ pengu-heat-card.js
├─ hacs.json
├─ LICENSE
├─ package.json
├─ pengu-heat-card.js
└─ README.md
```

---

## Notes

- The illustrations are embedded as SVG directly in the card.
- The visual editor is implemented as a custom Lovelace config editor.
- The card automatically appears in the Lovelace card picker through `window.customCards`.
- The language can either follow the Home Assistant UI language automatically or be forced to German / English.
- The same card can be used for CMI, eBUS, Modbus, MQTT, ESPHome or template-based sensors because it only depends on Home Assistant entities.

---

## License

MIT

## v1.2.1 Editor Fix

This release fixes a GUI editor issue where Home Assistant state refreshes could re-render the editor while an entity picker was open. Entity selection should now stay stable while searching and choosing entities.

## v1.2.2 Fixes

This release fixes responsive badge placement, restores selected entity values correctly when reopening the GUI editor and removes the version badge from the visible card header.

## v1.2.3 UI Polish

This release makes the value badges smaller and cleaner, with a more compact visual style and lighter spacing.

## v1.3.0 Visual Refresh

This release refreshes the overall UI with cleaner badges, more polished pipe animations and a redesigned solar thermal schematic.

## v1.3.1 UI Cleanup

This release removes the fixed schema subtitle from the card header and replaces arrow-style flow indicators with cleaner plain pipes and more subtle animations.
