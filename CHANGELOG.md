# Changelog

## v2.0.1

- Fixed README hero banner clipping on GitHub.
- Improved banner proportions and responsive README rendering.

## v2.0.0

Major visual and structural redesign.

- Reduced the card to three focused diagrams: Solar thermal, Heat source / heating circuit, and Domestic hot water.
- Merged the former Heating circuit and Standalone heat source diagrams into one combined heat-source/heating-loop view.
- Legacy `heating_circuit` and `heat_source_only` configurations are automatically opened as the new `heat_source` diagram.
- Rebuilt the solar thermal pipework as a closed collector → storage heat exchanger → pump → collector circuit with no open pipe ends.
- Reworked domestic hot water as a logical hot-water/circulation loop and added a visible circulation-pump symbol.
- Removed maintenance/service from the heating view.
- Moved domestic-hot-water demand to the combined heat-source view where it belongs logically.
- Added consistent reusable storage-tank graphics across solar thermal and domestic hot water.
- Added three visual presets: Clean modern, Technical, and Compact.
- Replaced the old flow animation toggle with Off / Subtle / Normal modes. Subtle is the default.
- Added per-diagram visibility toggles for optional values.
- Added clickable equipment graphics in addition to clickable value labels. More-info/history remains the default action.
- Added a configurable tap action (`more-info` or `none`).
- Retained drag-and-drop label positioning and added a reset button.
- Unconfigured entities remain completely hidden.
- Enabled a live preview in the Home Assistant card picker via `window.customCards.preview`.
- Added entity-aware card suggestions for heating-related temperature entities on Home Assistant 2026.6+.
- Updated HACS validation workflow and repository metadata.

## v1.4.1

- Added click support for value labels and Home Assistant More-info/history.

## v1.4.0

- Added drag-and-drop label positioning and hid unconfigured entities.
