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
            language: de # Überschreibt die Sprache in Home Assistant
            entities:
              ta: sensor.hpsu_can_aussentemperatur
              ta2: sensor.hpsu_can_ta2
              expansion_valve: sensor.hpsu_uart_expansionsventil
              pressure_equalization: binary_sensor.hpsu_uart_druckausgleich
              kondensat: sensor.hpsu_uart_temperatur_fl_ssigkeitsleitung
              umwaelzpumpe: sensor.hpsu_can_umwaelzpumpe
              umwaelzpumpe_an_aus: binary_sensor.hpsu_can_status_kesselpumpe
              durchfluss: sensor.hpsu_can_durchfluss
              ruecklauf_1: sensor.hpsu_can_ruecklauftemperatur_heizung
              ruecklauf_2: sensor.hpsu_uart_r_cklauftemperatur
              verdampfer: sensor.hpsu_uart_temperatur_lamellenw_rmetauscher
              hot_gas: sensor.hpsu_uart_temperatur_nach_k_ltemittelverdichter
              hot_gas_condenser: sensor.thermometer_hei_gas_am_kondensator
              vorlauf_1: sensor.hpsu_can_heizkreis_vorlauf_tv
              vorlauf_2: sensor.hpsu_uart_vorlauftemeratur_tv
              vorlauf_soll: sensor.hpsu_can_vorlauf_soll
              wasserdruck: sensor.hpsu_can_wasserdruck
              vorlauf_bh_1: sensor.hpsu_can_vorlauftemperatur_heizung_tvbh
              vorlauf_bh_2: sensor.hpsu_uart_vorlauftemeratur_tvbh
              kompressor_an_aus: binary_sensor.hpsu_can_status_kompressor
              luefter: sensor.hpsu_uart_ventilatordrehzahl
              verdichter: sensor.hpsu_uart_kompressor_drehzahl
              speicher: sensor.hpsu_can_warmwassertemperatur
              speicher_soll: select.hpsu_can_t_ww_soll1
              mischer: sensor.hpsu_can_dhw_mischer_position
              bypass: sensor.hpsu_can_bpv
              betriebsmodus: select.hpsu_can_betriebsmodus
              betriebsart: sensor.hpsu_can_betriebsart
              fehlercode: sensor.hpsu_can_fehlercode
              thermische_leistung: sensor.hpsu_can_thermische_leistung
              cop: sensor.hpsu_cop_clipped
              spread: sensor.hpsu_can_spreizung

