export const entities_configuration = [
    { id: "t_aussen_1",          label: "Außentemperatur",                  type: "sensor",        rectId: "aussentemp_val",        offset: 6, category: "Reihe 1", unit: "°C" },
    { id: "t_aussen_2",          label: "T-Außen",                          type: "sensor",        rectId: "taussen_val",           offset: 6, unit: "°C" },
    { id: "expansions_ventil",   label: "Elektonisches Expansionsventil",   type: "sensor",        rectId: "eev_val",               offset: 6, unit: "%" },
    { id: "kondensat",           label: "Kondensat",                        type: "sensor",        rectId: "Kondensat-Value",       offset: 6, unit: "°C" },
    { id: "umwaelzpumpe",        label: "Umwälzpumpe",                      type: "sensor",        rectId: "Umwaelzpumpe-Value",    offset: 6, unit: "%" },
    { id: "umwaelzpumpe_an_aus", label: "Status Umwälzpumpe",               type: "binary_sensor", rectId: "circ_pump_rect",        offset: 2, fontSize: "30px" },
    { id: "durchfluss",          label: "Durchfluss",                       type: "sensor",        rectId: "Durchfluss-Value",      offset: 6 },
    { id: "ruecklauf_1",         label: "Rücklauf CAN",                     type: "sensor",        rectId: "Ruecklauf-1-Value",     offset: 6, unit: "°C" },
    { id: "ruecklauf_2",         label: "Rücklauf UART",                    type: "sensor",        rectId: "Ruecklauf-2-Value",     offset: 6, unit: "°C" },
    { id: "verdampfer",          label: "Verdampfer",                       type: "sensor",        rectId: "Verdampfer-Value",      offset: 6, category: "Reihe 2", unit: "°C" },
    { id: "vorlauf_1",           label: "Vorlauf CAN",                      type: "sensor",        rectId: "Vorlauf-1-Value",       offset: 6, unit: "°C" },
    { id: "vorlauf_2",           label: "Vorlauf UART",                     type: "sensor",        rectId: "Vorlauf-2-Value",       offset: 6, unit: "°C" },
    { id: "vorlauf_soll",        label: "Vorlauf Soll",                     type: "sensor",        rectId: "Vorlauf-Soll-Value",    offset: 6, unit: "°C" },
    { id: "wasserdruck",         label: "Wasserdruck",                      type: "sensor",        rectId: "Druck-Value",           offset: 6 },
    { id: "vorlauf_bh_1",        label: "VorlaufBH CAN",                    type: "sensor",        rectId: "Vorlauf-BH-1-Value",    offset: 6, unit: "°C" },
    { id: "vorlauf_bh_2",        label: "VorlaufBH UART",                   type: "sensor",        rectId: "Vorlauf-BH-2-Value",    offset: 6, unit: "°C" },
    { id: "kompressor_an_aus",   label: "Status Kompressor",                type: "binary_sensor", rectId: "comp_rect",             offset: 2, fontSize: "40px" },
    { id: "luefter",             label: "Lüfter",                           type: "sensor",        rectId: "Luefter-Value",         offset: 6, category: "Reihe 3", unit: "RPM" },
    { id: "verdichter",          label: "Verdichter",                       type: "sensor",        rectId: "Verdichter-Value",      offset: 6, unit: "RPM" },
    { id: "speicher",            label: "Speicher Ist",                     type: "sensor",        rectId: "Speicher-Value",        offset: 6, unit: "°C" },
    { id: "speicher_soll",       label: "Speicher Soll",                    type: "select",        rectId: "Speicher-Soll-Value",   offset: 6, unit: "°C" },
    { id: "mischer",             label: "Mischer",                          type: "sensor",        rectId: "DHW-Mixer-Value",       offset: 6, unit: "%", fontSize: "40px" },
    { id: "bypass",              label: "Bypass",                           type: "sensor",        rectId: "Bypass-Value",          offset: 6, unit: "%", fontSize: "40px" },
    { id: "betriebsmodus",       label: "Betriebsmodus",                    type: "select",        rectId: "info_1",                offset: 6, fontSize: "40px", align: "left", "suffix": "Modus: " },
    { id: "betriebsart",         label: "Betriebsart",                      type: "text_sensor",   rectId: "info_2",                offset: 6, fontSize: "40px", align: "left", "suffix": "Betriebsart: " },
    { id: "thermische_leistung", label: "Thermische Leistung",              type: "sensor",        rectId: "info_3",                offset: 6, fontSize: "40px", align: "left", "suffix": "Therm. Leistung: " }
];

function getConfig() {
    return "config";
}