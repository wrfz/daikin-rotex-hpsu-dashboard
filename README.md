# Daikin/Rotex - HPSU Dashboard

Dieses Projekt stellt eine Home Assistant-Dashboard-Komponente bereit, die es ermöglicht, Informationen einer Daikin/Rotex HPSU Wärmepumpen übersichtlich darzustellen. Die Integration bietet eine benutzerfreundliche Benutzeroberfläche zur Überwachung von Leistungsparametern, Energieerzeugung und Umgebungsbedingungen. Die Komponente ist leicht anpassbar und kann in wenigen Schritten installiert werden.

<img src="https://github.com/user-attachments/assets/ee3f0226-8207-433d-90dc-95f7b17109de" alt="grafik" width="500" />

# Anforderungen

- Home Assistant: Version 2024.4 oder höher
- HACS (Home Assistant Community Store): Installiert und konfiguriert
- Anbindung an eine Daikin/Rotex HPSU Wärmepumpe: [ESP32 - ESPHome-Anbindung](https://github.com/Trunks1982/Daikin-Rotex-HPSU-CAN)

# Installation

1) Öffne die HACS-Integration in Home Assistant.
2) Klicke rechts oben auf die drei Punkte und wähle **Benutzerdefinierte Repositorys**.
3) Gib das Repository ein: https://github.com/wrfz/daikin-rotex-hpsu-dashboard und wähle die Kategorie **Dashboard** aus.
4) Klicke auf Hinzufügen und installiere die Karte anschließend über die Benutzeroberfläche.

# Konfiguration

Erstelle als nächstes ein hpsu-dashboard-card als ein Fullscreen - **Panel** mit der folgenden Konfiguration:

    title: Home
    views:
      - title: Schema
        path: hpsu_schema
        type: panel
        cards:
          - type: custom:hpsu-dashboard-card
            entities:
              t_aussen_1: sensor.rotex_aussentemperatur
              t_aussen_2: sensor.rotex_t_aussen
              expansions_ventil: sensor.rotex_expansionsventil
              kondensat: sensor.rotex_temperatur_fl_ssigkeitsleitung
              umwaelzpumpe: sensor.rotex_umwaelzpumpe
              umwaelzpumpe_an_aus: binary_sensor.rotex_status_kesselpumpe
              durchfluss: sensor.rotex_durchfluss
              ruecklauf_1: sensor.rotex_ruecklauftemperatur_heizung
              ruecklauf_2: sensor.rotex_r_cklauftemperatur
              verdampfer: sensor.rotex_lamellenw_rmetauscher_temperatur
              vorlauf_1: sensor.rotex_heizkreis_vorlauf_tv
              vorlauf_2: sensor.rotex_vorlauftemeratur_tv
              vorlauf_soll: sensor.rotex_vorlauf_soll
              wasserdruck: sensor.rotex_wasserdruck
              vorlauf_bh_1: sensor.rotex_vorlauftemperatur_heizung_tvbh
              vorlauf_bh_2: sensor.rotex_vorlauftemeratur_tvbh
              kompressor_an_aus: binary_sensor.rotex_status_kompressor
              luefter: sensor.rotex_ventilatordrehzahl
              verdichter: sensor.rotex_kompressor_drehzahl
              speicher: sensor.rotex_warmwassertemperatur
              speicher_soll: select.rotex_t_ww_soll1
              mischer: sensor.rotex_dhw_mischer_position
              bypass: sensor.rotex_bpv
