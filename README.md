# ✈ ADSB Radar

Live ADS-B Flugzeug-Radar im Browser – GPS-basiert, überall nutzbar.

👉 [Radar öffnen](https://mortlord.github.io/adsb-radar/)

---

## Features

- **Live-Radar** – alle Flugzeuge im einstellbaren Radius (10–500 nm)
- **GPS-Standort** – automatisch über den Browser ermittelt
- **FR24-Style Detailansicht** – Airline, Flugzeugtyp, Callsign, Registration
- **Origin → Destination** – Routendaten via adsbdb
- **Alert-Zone** – Benachrichtigung wenn ein Flugzeug den konfigurierbaren Radius unterschreitet
- **Auto-Refresh** alle 30 Sekunden
- **Farbkodierung nach Höhe:** grün (< 5.000 ft) → gelb → blau → rot (> 30.000 ft)

---

## Datenquellen

| Quelle | Zweck |
|---|---|
| [airplanes.live](https://airplanes.live) | Live-Flugzeugdaten (kostenlos, öffentlich) |
| [adsbdb.com](https://adsbdb.com) | Routendaten Origin/Destination sowie Airline-Namen |

---

## Hinweis

Die App benötigt Zugriff auf den GPS-Standort des Geräts. Wird der Zugriff verweigert, erscheint eine entsprechende Meldung. Standortzugriff in den Browser-Einstellungen erlauben und Seite neu laden.

---

## GitHub Pages einrichten

1. Dieses Repo forken oder klonen
2. **Settings → Pages → Source:** Deploy from branch → `main` / `/(root)`
3. Nach ~1 Minute erreichbar unter `https://USERNAME.github.io/adsb-radar/`

---

## Lokal starten (optional)

Für lokale Entwicklung ohne GitHub Pages – erfordert kein Python:

```
start.bat  doppelklicken   (Windows – PowerShell)
```

Oder mit Python:

```
python server.py
```

Öffnet automatisch [http://localhost:8080](http://localhost:8080).

