# ✈ ADS-B Radar — Private

Live ADS-B Flugzeug-Radar im Browser – GPS-basiert, mit Zugriff auf den eigenen Feeder.

Private Version mit erweiterten Funktionen (Feeder-Modus, Kartenhintergrund, Kompass-Ausrichtung). Nicht für die Öffentlichkeit bestimmt.

---

## Features

- **Live-Radar** – alle Flugzeuge im einstellbaren Radius (10–250 nm)
- **GPS-Standort** – automatisch über den Browser ermittelt
- **Eigener Feeder** – Umschalten auf die Daten des eigenen Pi (Ultrafeeder), fest auf den Feeder-Standort zentriert. Läuft serverseitig über den Owner-Token (`/feeder`), Feed und Koordinaten stehen nicht im Quelltext
- **Kartenhintergrund** – nicht-interaktive CartoDB-Dark-Karte hinter dem Radar ein-/ausblendbar (🗺)
- **Kompass-Ausrichtung (nur iPhone)** – im Live-Modus richtet sich das Radar an der Blickrichtung des Telefons aus (🧭). Geglättet mit 5°-Schwelle, startet immer im Normalbild (Nord oben). Im Feeder- und Kartenmodus bleibt das Radar Nord-oben
- **FR24-Style Detailansicht** – Airline, Flugzeugtyp, Callsign, Registration, Foto
- **Origin → Destination** – Routendaten via adsbdb / AeroDataBox
- **Favoriten** – Callsigns speichern und per Telegram benachrichtigt werden
- **Telegram-Benachrichtigungen** – Push-Alerts auch wenn die App geschlossen ist (08:00–23:59 Uhr)
- **Alert-Zone** – konfigurierbarer Radius für Benachrichtigungen
- **Auto-Refresh** alle 60 Sekunden
- **Farbkodierung nach Höhe:** grün (< 5.000 ft) → gelb → blau → rot (> 30.000 ft)

---

## Datenquellen

| Quelle | Zweck |
|---|---|
| Eigener Feeder (Pi 5 / Ultrafeeder) | Lokale Live-Flugzeugdaten im Feeder-Modus |
| [airplanes.live](https://airplanes.live) | Live-Flugzeugdaten im Live-Modus |
| [adsbdb.com](https://adsbdb.com) | Routendaten Origin/Destination sowie Airline-Namen |
| AeroDataBox | Routen-Anreicherung (serverseitig, Whitelist) |
| Planespotters | Flugzeugfotos |

---

## Kompass-Ausrichtung (iPhone)

1. App im Live-Modus öffnen (nicht Feeder, nicht Kartenmodus)
2. 🧭-Knopf antippen
3. iOS fragt einmalig nach Bewegungs-/Ausrichtungszugriff – erlauben
4. Das Radar folgt jetzt der Blickrichtung des Telefons

Der Knopf erscheint nur auf dem iPhone. Bei jedem App-Start steht das Radar zunächst Nord-oben; die Ausrichtung wird bewusst nicht gespeichert. Erneutes Antippen schaltet zurück auf Nord-oben.

---

## Telegram-Benachrichtigungen einrichten

1. Telegram öffnen → [@adsb_radar_bot](https://t.me/adsb_radar_bot) → `/start`
2. Owner-Token im Favoriten-Panel eintragen und speichern (schaltet zugleich den Feeder-Zugriff frei)
3. Favoriten-Callsigns hinzufügen
4. App einmal öffnen – danach laufen Benachrichtigungen im Hintergrund

---

## Hinweis

Die App benötigt Zugriff auf den GPS-Standort des Geräts. Wird der Zugriff verweigert, erscheint eine entsprechende Meldung. Standortzugriff in den Browser-Einstellungen erlauben und Seite neu laden.

Die Kompass-Funktion benötigt zusätzlich Zugriff auf die Geräteausrichtung (iOS fragt beim ersten Antippen) und läuft nur über HTTPS in Safari bzw. der installierten PWA.

---

## Impressum & Datenschutz

[adsb-radar.de/legal.html](https://adsb-radar.de/legal.html)
