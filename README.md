# ✈ ADS-B Radar

Live ADS-B Flugzeug-Radar im Browser – GPS-basiert, überall nutzbar.

👉 [Radar öffnen](https://adsb-radar.de)

---

## Features

- **Live-Radar** – alle Flugzeuge im einstellbaren Radius (10–250 nm)
- **GPS-Standort** – automatisch über den Browser ermittelt
- **FR24-Style Detailansicht** – Airline, Flugzeugtyp, Callsign, Registration
- **Origin → Destination** – Routendaten via adsbdb
- **Favoriten** – Callsigns speichern und per Telegram benachrichtigt werden
- **Telegram-Benachrichtigungen** – Push-Alerts auch wenn die App geschlossen ist (08:00–23:59 Uhr)
- **Alert-Zone** – konfigurierbarer Radius für Benachrichtigungen
- **Auto-Refresh** alle 60 Sekunden
- **Farbkodierung nach Höhe:** grün (< 5.000 ft) → gelb → blau → rot (> 30.000 ft)

---

## Datenquellen

| Quelle | Zweck |
|---|---|
| [airplanes.live](https://airplanes.live) | Live-Flugzeugdaten (kostenlos, öffentlich) |
| [adsbdb.com](https://adsbdb.com) | Routendaten Origin/Destination sowie Airline-Namen |

---

## Telegram-Benachrichtigungen einrichten

1. Telegram öffnen → [@adsb_radar_bot](https://t.me/adsb_radar_bot) → `/start`
2. Chat-ID abrufen: [get-chat-id](https://web-production-a6fc8.up.railway.app/get-chat-id)
3. Chat-ID im Favoriten-Panel der App eintragen und speichern
4. Favoriten-Callsigns hinzufügen
5. App einmal öffnen – danach laufen Benachrichtigungen im Hintergrund

---

## Hinweis

Die App benötigt Zugriff auf den GPS-Standort des Geräts. Wird der Zugriff verweigert, erscheint eine entsprechende Meldung. Standortzugriff in den Browser-Einstellungen erlauben und Seite neu laden.

---

## Impressum & Datenschutz

[adsb-radar.de/legal.html](https://adsb-radar.de/legal.html)
