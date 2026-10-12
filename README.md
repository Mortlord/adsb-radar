# ✈ ADS-B Radar — Private

Live ADS-B Flugzeug-Radar im Browser – GPS-basiert, mit Zugriff auf den eigenen Feeder.

Private Version mit erweiterten Funktionen (Feeder- und Fixpunkt-Modus, Kartenhintergrund, Regenradar, Flughafenwetter, Kompass-Ausrichtung). Nicht für die Öffentlichkeit bestimmt.

---

## Features

- **Live-Radar** – alle Flugzeuge im einstellbaren Radius (10–250 nm)
- **GPS-Standort** – automatisch über den Browser ermittelt
- **Eigener Feeder** – Umschalten auf die Daten des eigenen Pi (Ultrafeeder), fest auf den Feeder-Standort zentriert. Läuft serverseitig über den Owner-Token (`/feeder`), Feed und Koordinaten stehen nicht im Quelltext
- **Fixpunkt** – Live-Feed zentriert auf einen festen Beobachtungspunkt; Koordinaten nur im Backend (`/fixpoint`, Owner-Token)
- **Kartenhintergrund** – nicht-interaktive Esri-Dark-Gray-Karte hinter dem Radar ein-/ausblendbar, abgedunkelt über eine eigene Kartenebene
- **Regenradar (nur Feeder-Modus)** – DWD-Niederschlagsradar über dem Feeder-Bereich ein-/ausblendbar, zeigt Regen und Gewitterzellen, die Flugzeuge umfliegen. Wird alle 5 Minuten neu geladen und funktioniert auch ohne Kartenhintergrund. Im Live- und Fixpunkt-Modus ist der Knopf ausgeblendet
- **Flughafenwetter (METAR)** – in allen Modi ein-/ausblendbar. Zeigt nur Flughäfen mit aktueller Wettermeldung; Amber markiert IFR/LIFR, ein Punkt Gewitter oder CB. Antippen öffnet ein Panel mit Wind, Sicht, Temperatur/Taupunkt, QNH, Wettererscheinungen, Wolken, Trend und Rohmeldung. Flugzeuge haben beim Antippen Vorrang
- **Kompass-Ausrichtung (nur iPhone)** – im Live-Modus richtet sich das Radar an der Blickrichtung des Telefons aus (🧭). Geglättet mit 5°-Schwelle, startet immer im Normalbild (Nord oben). Im Feeder- und Kartenmodus bleibt das Radar Nord-oben
- **FR24-Style Detailansicht** – Airline, Flugzeugtyp, Callsign, Registration, Foto
- **Origin → Destination** – Routendaten via adsbdb / AeroDataBox
- **Favoriten** – Callsigns speichern und per Telegram benachrichtigt werden
- **Telegram-Benachrichtigungen** – Push-Alerts auch wenn die App geschlossen ist (08:00–23:59 Uhr)
- **Alert-Zone** – konfigurierbarer Radius für Benachrichtigungen
- **Auto-Refresh** alle 2 Sekunden
- **Höhe als Helligkeit:** je höher, desto heller (vier Stufen mit Grenzen bei 5.000, 15.000 und 30.000 ft); am Boden in Amber

---

## Datenquellen

| Quelle | Zweck |
|---|---|
| Eigener Feeder (Pi 5 / Ultrafeeder) | Lokale Live-Flugzeugdaten im Feeder-Modus |
| [adsb.fi](https://adsb.fi), ersatzweise [adsb.lol](https://adsb.lol) | Live-Flugzeugdaten im Live- und Fixpunkt-Modus, über das eigene Backend (direkt nur, wenn das Backend nicht erreichbar ist) |
| [adsbdb.com](https://adsbdb.com) | Routendaten Origin/Destination sowie Airline-Namen |
| AeroDataBox | Routen-Anreicherung (serverseitig, Whitelist) |
| Planespotters | Flugzeugfotos |
| [Esri](https://www.esri.com) | Kartenhintergrund (World Dark Gray) |
| [Deutscher Wetterdienst](https://www.dwd.de) | Regenradar (Niederschlagsradar, WMS), direkt vom Browser geladen |
| [Aviation Weather Center](https://aviationweather.gov) (NOAA) | Flughafenwetter (METAR), über das eigene Backend (`/metar`) |

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
