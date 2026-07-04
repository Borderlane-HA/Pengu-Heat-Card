# Pengu Heat Card

![Pengu Heat Card](./assets/pengu-logo.svg)

**Pengu Heat Card** is a Home Assistant custom card for heating diagrams that can be configured **fully through the GUI**.

Version **1.2.0** adds more status colors, optional animations, freely configurable labels and a standalone heat-source / burner schema.

It is designed for installations such as:

- **Solar thermal**
- **Heating circuit / floor heating / radiator heating** with selectable heat source: gas boiler, heat pump, pellet boiler or district heating
- **Domestic hot water / circulation**

The card is intentionally visual and inspired by heating controller schematics, so you can map your entities onto a clear flow diagram.

## Highlights

- ✅ **Shows up in “Add card”** via `window.customCards`
- ✅ **Full GUI editor** (not YAML-only)
- ✅ **German and English** UI labels
- ✅ Selectable heating source for the heating circuit: gas, heat pump, pellet boiler, district heating
- ✅ 4 built-in layouts:
  - Solar thermal
  - Heating circuit
  - Domestic hot water
  - Standalone heat source / burner
- ✅ Works with sensors, binary sensors, switches and similar state entities
- ✅ Stylish inline SVG illustrations included directly in the card
- ✅ More status colors and optional animations
- ✅ Freely configurable labels
- ✅ HACS-compatible repository structure

---

## German quick summary

Die Karte taucht in Home Assistant direkt im **Karten-Dialog** auf und kann komplett über den **grafischen Editor** konfiguriert werden. Es gibt drei Schemata: **Solarthermie**, **Heizkreis** und **Warmwasser**. Die Beschriftung kann auf **Deutsch**, **Englisch** oder **Automatisch** gestellt werden.

---

## Installation

### Option 1: HACS (recommended)

1. Open **HACS**.
2. Go to **Custom repositories**.
3. Add your GitHub repository URL.
4. Category: **Dashboard**.
5. Install **Pengu Heat Card**.
6. Reload the browser or Home Assistant frontend.

### Option 2: Manual install

1. Copy `pengu-heat-card.js` to:

   ```
   /config/www/pengu-heat-card.js
   ```

2. Add the resource in Home Assistant:

   ```yaml
   url: /local/pengu-heat-card.js
   type: module
   ```

3. Open your dashboard and add the card.

---

## Add the card

After installation, open a dashboard and choose:

**Add card → Pengu Heat Card**

Then select one of the four diagrams in the GUI editor:

- **Solar thermal**
- **Heating circuit**
- **Domestic hot water**
- **Standalone heat source / burner**

No manual YAML is required for normal use.

---

## GUI configuration

### Solar thermal

Fields:
- Collector temperature entity
- Solar pump entity
- Storage / solar tank temperature entity

### Heating circuit

Fields:
- Heat source type: gas boiler, heat pump, pellet boiler or district heating
- Outdoor temperature entity
- Heating flow temperature entity
- Heating pump entity
- Heat source status entity
- Maintenance / service entity

### Domestic hot water

Fields:
- Hot water temperature entity
- Buffer temperature entity
- Circulation pump entity
- Return temperature entity
- Hot water demand entity

Additional global options:
- Title
- Language (`Auto`, `Deutsch`, `English`)
- Show equipment labels
- Animate active flow lines
- Animate active status badges
- Freely configurable labels

---

## YAML examples

You do **not** need YAML for standard use, but here are examples.

### Solar thermal

```yaml
type: custom:pengu-heat-card
diagram: solar_thermal
title: Solarthermie
language: de
collector_entity: sensor.kollektor_temp
pump_entity: sensor.solar_pumpe
storage_entity: sensor.pufferspeicher_solar
show_labels: false
```

### Heating circuit

```yaml
type: custom:pengu-heat-card
diagram: heating_circuit
title: Heizkreis 1
language: de
outside_entity: sensor.aussentemperatur
flow_entity: sensor.hk1_vorlauf
pump_entity: sensor.hk1_pumpe
heat_source_type: heat_pump
burner_entity: binary_sensor.waermepumpe_aktiv
service_entity: binary_sensor.wartung
show_labels: false
```

### Domestic hot water

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
```

---

## Repository structure

```text
pengu-heat-card/
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

## Heating source options

For the heating circuit diagram you can choose:

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

The same status entity field is used for the selected heat source. For example it can be a gas burner status, heat pump compressor status, pellet boiler status or district heating valve / transfer station status.

## Notes

- The illustrations are embedded as SVG directly in the card, so no extra image hosting is required.
- The visual editor is implemented as a custom Lovelace config editor.
- The card automatically appears in the Lovelace card picker through `window.customCards`.
- The language can either follow the Home Assistant UI language automatically or be forced to German / English.

---

## Publish on GitHub

1. Create a new public GitHub repository, e.g. `pengu-heat-card`
2. Upload all files from this ZIP
3. Create a release like `v1.0.0`
4. Add the repository to HACS as a custom repository
5. Optional: submit it to the HACS default list later

---

## License

MIT


## New in v1.2.0

### Standalone heat source / burner

You can now use a dedicated separate heat-source view:

```yaml
type: custom:pengu-heat-card
diagram: heat_source_only
title: Wärmeerzeuger
language: de
heat_source_type: heat_pump
flow_entity: sensor.kessel_vorlauf
return_entity: sensor.kessel_ruecklauf
burner_entity: binary_sensor.waermeerzeuger_aktiv
service_entity: binary_sensor.wartung
label_heat_source: Wärmeerzeuger
label_heating_flow: Vorlauf
label_return_flow: Rücklauf
animate_flow: true
animate_status: true
```
