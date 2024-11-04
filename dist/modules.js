export const entities_configuration = [
    { confEntityId: "t_aussen_1", label: "Außentemperatur", type: "sensor", rectId: "T-Aussen-1-Value", offset: 6, category: "Reihe 1", unit: "°C" },
    { confEntityId: "t_aussen_2", label: "T-Außen", type: "sensor", rectId: "T-Aussen-2-Value", offset: 6, unit: "°C" },
    { confEntityId: "expansions_ventil", label: "EEV", type: "sensor", rectId: "EEV-Value", offset: 6, unit: "%" },
    { confEntityId: "kondensat", label: "Kondensat", type: "sensor", rectId: "Kondensat-Value", offset: 6, unit: "°C" },
    { confEntityId: "umwaelzpumpe", label: "Umwälzpumpe", type: "sensor", rectId: "Umwaelzpumpe-Value", offset: 6, unit: "%" },
    { confEntityId: "umwaelzpumpe_an_aus", label: "Außentemperatur", type: "binary_sensor", rectId: "circulation_pump_on_off_rect", fontSize: "30px", offset: 2 },
    { confEntityId: "durchfluss", label: "Durchfluss", type: "sensor", rectId: "Durchfluss-Value", offset: 6 },
    { confEntityId: "ruecklauf_1", label: "Rücklauf 1", type: "sensor", rectId: "Ruecklauf-1-Value", offset: 6, unit: "°C" },
    { confEntityId: "ruecklauf_2", label: "Rücklauf 2", type: "sensor", rectId: "Ruecklauf-2-Value", offset: 6, unit: "°C" },
    { confEntityId: "verdampfer", label: "Verdampfer", type: "sensor", rectId: "Verdampfer-Value", offset: 6, category: "Reihe 2", unit: "°C" },
    { confEntityId: "vorlauf_1", label: "Vorlauf 1", type: "sensor", rectId: "Vorlauf-1-Value", offset: 6, unit: "°C" },
    { confEntityId: "vorlauf_2", label: "Vorlauf 2", type: "sensor", rectId: "Vorlauf-2-Value", offset: 6, unit: "°C" },
    { confEntityId: "vorlauf_soll", label: "VorlaufSoll", type: "sensor", rectId: "Vorlauf-Soll-Value", offset: 6, unit: "°C" },
    { confEntityId: "wasserdruck", label: "Wasserdruck", type: "sensor", rectId: "Druck-Value", offset: 6 },
    { confEntityId: "vorlauf_bh_1", label: "VorlaufBH 1", type: "sensor", rectId: "Vorlauf-BH-1-Value", offset: 6, unit: "°C" },
    { confEntityId: "vorlauf_bh_2", label: "VorlaufBH 2", type: "sensor", rectId: "Vorlauf-BH-2-Value", offset: 6, unit: "°C" },
    { confEntityId: "kompressor_an_aus", label: "Kompressor AN/AUS", type: "binary_sensor", rectId: "compressor_on_off_rect", fontSize: "40px", offset: 2 },
    { confEntityId: "luefter", label: "Lüfter", type: "sensor", rectId: "Luefter-Value", offset: 6, category: "Reihe 3", unit: "RPM" },
    { confEntityId: "verdichter", label: "Verdichter", type: "sensor", rectId: "Verdichter-Value", offset: 6, unit: "RPM" },
    { confEntityId: "speicher", label: "Speicher", type: "sensor", rectId: "Speicher-Value", offset: 6, unit: "°C" },
    { confEntityId: "speicher_soll", label: "SpeicherSoll", type: "select", rectId: "Speicher-Soll-Value", offset: 6, unit: "°C" },
    { confEntityId: "mischer", label: "Mischer", type: "sensor", rectId: "DHW-Mixer-Value", fontSize: "40px", offset: 6, unit: "%" },
    { confEntityId: "bypass", label: "Beipass", type: "sensor", rectId: "Bypass-Value", fontSize: "40px", offset: 6, unit: "%" }
];

function getConfig() {
    return "config";
}