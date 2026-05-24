# ✈ ADSB Radar

Live ADS-B Flugzeug-Radar im Browser – GPS-basiert, überall nutzbar.

**👉 [Radar öffnen](https://YOUR-USERNAME.github.io/adsb-radar/)**

---

## Features

- **Live-Radar** – alle Flugzeuge im einstellbaren Radius (10–500 nm)
- **GPS-Standort** – automatisch oder manuell wählbar (8 Städte-Presets)
- **FR24-Style Detailansicht** – Airline, Flugzeugtyp, Callsign, Registration
- **Origin → Destination** – Routendaten via OpenSky Network
- **Alert-Zone** – Benachrichtigung wenn Flugzeug den konfigurierbaren Radius unterschreitet
- **Auto-Refresh** alle 30 Sekunden
- **Farbkodierung** nach Höhe: grün (< 5.000 ft) → gelb → blau → rot (> 30.000 ft)

## Datenquellen

| Quelle | Zweck |
|--------|-------|
| [api.adsb.lol](https://api.adsb.lol) | Live-Flugzeugdaten (kostenlos, öffentlich) |
| [OpenSky Network](https://opensky-network.org) | Routendaten Origin/Destination |

## GitHub Pages einrichten

1. Dieses Repo forken oder klonen
2. **Settings → Pages → Source: Deploy from branch → `main` / `/(root)`**
3. Nach ~1 Minute erreichbar unter `https://USERNAME.github.io/adsb-radar/`

## Lokal starten (optional)

Für lokale Entwicklung ohne GitHub Pages – erfordert kein Python:

```
start.bat  doppelklicken   (Windows – PowerShell)
```

Oder mit Python:
```bash
python server.py
```

Öffnet automatisch `http://localhost:8080`.

## Roadmap → Raspberry Pi Version

Die nächste Ausbaustufe ist eine native Pi-App (pygame) mit:
- GPS-Modul (gpsd) für echten mobilen Betrieb
- Offline-fähig – kein Browser nötig
- SQLite-Logging für Statistiken
- Touchscreen-optimiertes UI
