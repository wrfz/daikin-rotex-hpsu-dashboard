export interface Category {
    de: string;
    en: string;
    it: string;
};

export interface SVGItem {
    entityId?: string;
    parent?: string;
    labelBox?: any;
    valueBox?: any;

    id: string;
    label_rect_id?: string;
    type: string;
    value_rect_id?: string;
    offset?: number;
    category?: Category;
    unit?: string;
    digits?: number;
    fontSize?: string;
    align?: string;
    suffix?: string;
    optional?: boolean;
    texts: {
        de: {
            label?: string;
            suffix?: string;
            desc: string;
        };
        en: {
            label?: string;
            suffix?: string;
            desc: string;
        };
        it: {
            label?: string;
            suffix?: string;
            desc: string;
        };
    };
}

export const svg_item_config: SVGItem[] = [
    {
        id: "ta",
        label_rect_id: "ta_label",
        type: "sensor",
        value_rect_id: "ta_val",
        offset: 6,
        category: {
            de: "Oben",
            en: "Top",
            it: "In alto"
        },
        unit: "°C",
        texts: {
            de: {
                label: "TA",
                desc: "TA - Außentemperatur"
            },
            en: {
                label: "TA",
                desc: "TA - Outside Temperature"
            },
            it: {
                label: "TA",
                desc: "TA - Temperatura esterna"
            }
        }
    },
    {
        id: "ta2",
        label_rect_id: "ta2_label",
        type: "sensor",
        value_rect_id: "ta2_val",
        offset: 6,
        unit: "°C",
        optional: true,
        parent: "TA2",
        texts: {
            de: {
                label: "TA2",
                desc: "TA2 - Im Außengerät"
            },
            en: {
                label: "TA2",
                desc: "TA2 - In the outdoor unit"
            },
            it: {
                label: "TA2",
                desc: "TA2 - Nell'unità esterna"
            }
        }
    },
    {
        id: "expansion_valve",
        label_rect_id: "eev_label",
        type: "sensor",
        value_rect_id: "eev_val",
        offset: 6,
        unit: "pls",
        digits: 0,
        texts: {
            de: {
                label: "EEV",
                desc: "Elektonisches Expansionsventil"
            },
            en: {
                label: "EEV",
                desc: "Electronic Expansion Valve"
            },
            it: {
                label: "EEV",
                desc: "Valvola di espansione elettronica"
            }
        }
    },
    {
        id: "pressure_equalization",
        type: "binary_sensor",
        texts: {
            de: {
                desc: "Druckausgleich"
            },
            en: {
                desc: "Pressure equalization"
            },
            it: {
                desc: "Equalizzazione della pressione"
            }
        }
    },
    {
        id: "kondensat",
        label_rect_id: "kondensat_label",
        type: "sensor",
        value_rect_id: "kondensat_value",
        offset: 6,
        unit: "°C",
        texts: {
            de: {
                label: "Kondensat",
                desc: "Kondensat"
            },
            en: {
                label: "Condensate",
                desc: "Condensate"
            },
            it: {
                label: "Condensato",
                desc: "Condensato"
            }
        }
	},
    {
        id: "umwaelzpumpe",
        label_rect_id: "uwp_label",
        type: "sensor",
        value_rect_id: "uwp_value",
        offset: 6,
        unit: "%",
        digits: 0,
        texts: {
            de: {
                label: "Umwälzpumpe",
                desc: "Umwälzpumpe"
            },
            en: {
                label: "Circulation pump",
                desc: "Circulation pump"
            },
            it: {
                label: "Pompa circ.",
                desc: "Pompa di circolazione"
            }
        }
    },
    {
        id: "umwaelzpumpe_an_aus",
        type: "binary_sensor",
        value_rect_id: "circ_pump_rect",
        offset: 2,
        fontSize: "30px",
        texts: {
            de: {
                desc: "Status Umwälzpumpe"
            },
            en: {
                desc: "Circulation pump status"
            },
            it: {
                desc: "Stato pompa di circolazione"
            }
        }
    },
    {
        id: "durchfluss",
        type: "sensor",
        label_rect_id: "flow_rate_label",
        value_rect_id: "flow_rate_value",
        offset: 6,
        digits: 0,
        texts: {
            de: {
                label: "Durchfluss",
                desc: "Durchfluss"
            },
            en: {
                label: "Flow rate",
                desc: "Flow rate"
            },
            it: {
                label: "Portata",
                desc: "Portata"
            }
        }
    },
    {
        id: "ruecklauf_1",
        type: "sensor",
        label_rect_id: "return_flow_label",
        value_rect_id: "return_flow_can_value",
        offset: 6,
        unit: "°C",
        texts: {
            de: {
                label: "Rücklauf",
                desc: "Rücklauf - CAN"
            },
            en: {
                label: "Return flow",
                desc: "Return flow - CAN"
            },
            it: {
                label: "Ritorno",
                desc: "Ritorno - CAN"
            }
        }
    },
    {
        id: "ruecklauf_2",
        type: "sensor",
        value_rect_id: "return_flow_uart_value",
        offset: 6,
        unit: "°C",
        texts: {
            de: {
                desc: "Rücklauf - UART"
            },
            en: {
                desc: "Return flow - UART"
            },
            it: {
                desc: "Ritorno - UART"
            }
        }
    },
    {
        id: "verdampfer",
        type: "sensor",
        label_rect_id: "evaporator_label",
        value_rect_id: "evaporator_value",
        offset: 6,
        category: {
            de: "Mitte",
            en: "Middle",
            it: "Centro"
        },
        unit: "°C",
        texts: {
            de: {
                label: "Verdampfer",
                desc: "Verdampfer"
            },
            en: {
                label: "Evaporator",
                desc: "Evaporator"
            },
            it: {
                label: "Evaporatore",
                desc: "Evaporatore"
            }
        }
    },
    {
        id: "hot_gas",
        type: "sensor",
        label_rect_id: "hot_gas_label",
        value_rect_id: "hot_gas_value",
        offset: 6,
        texts: {
            de: {
                label: "Heißgas",
                desc: "Heißgas"
            },
            en: {
                label: "Hot gas",
                desc: "Hot gas"
            },
            it: {
                label: "Gas caldo",
                desc: "Gas caldo"
            }
        }
    },
    {
        id: "hot_gas_condenser",
        type: "sensor",
        label_rect_id: "hot_gas_condenser_label",
        value_rect_id: "hot_gas_condenser_value",
        offset: 6,
        optional: true,
        parent: "hot_gas_condenser",
        texts: {
            de: {
                label: "Heißgas",
                desc: "Heißgas am Kondensator"
            },
            en: {
                label: "Hot gas",
                desc: "Hot gas at the condenser"
            },
            it: {
                label: "Gas caldo",
                desc: "Gas caldo al condensatore"
            }
        }
    },
    {
        id: "spread",
        type: "sensor",
        label_rect_id: "spread_label",
        value_rect_id: "spread_value",
        offset: 6,
        unit: "°C",
        texts: {
            de: {
                label: "Spreizung",
                desc: "Spreizung"
            },
            en: {
                label: "Spread",
                desc: "Temperature spread"
            },
            it: {
                label: "ΔT",
                desc: "Differenza di temperatura"
            }
        }
    },
    {
        id: "vorlauf_1",
        type: "sensor",
        label_rect_id: "flow_label",
        value_rect_id: "flow_can_value",
        offset: 6,
        unit: "°C",
        texts: {
            de: {
                label: "Vorlauf",
                desc: "Vorlauf - CAN"
            },
            en: {
                label: "Flow",
                desc: "Flow - CAN"
            },
            it: {
                label: "Mandata",
                desc: "Mandata - CAN"
            }
        }
    },
    {
        id: "vorlauf_2",
        type: "sensor",
        value_rect_id: "flow_uart_value",
        offset: 6,
        unit: "°C",
        texts: {
            de: {
                desc: "Vorlauf - UART"
            },
            en: {
                desc: "Flow - UART"
            },
            it: {
                desc: "Mandata - UART"
            }
        }
    },
    {
        id: "vorlauf_soll",
        type: "sensor",
        label_rect_id: "flow_setpoint_label",
        value_rect_id: "flow_setpoint_value",
        offset: 6,
        unit: "°C",
        texts: {
            de: {
                label: "Vorlauf-Soll",
                desc: "Vorlauf Soll"
            },
            en: {
                label: "Setpoint",
                desc: "Flow setpoint"
            },
            it: {
                label: "Impostata",
                desc: "Temperatura di mandata impostata"
            }
        }
    },
    {
        id: "wasserdruck",
        type: "sensor",
        label_rect_id: "pressure_label",
        value_rect_id: "pressure_value",
        offset: 6,
        texts: {
            de: {
                label: "Druck",
                desc: "Wasserdruck"
            },
            en: {
                label: "Pressure",
                desc: "Water Pressure"
            },
            it: {
                label: "Pressione",
                desc: "Pressione dell'acqua"
            }
        }
    },
    {
        id: "vorlauf_bh_1",
        type: "sensor",
        label_rect_id: "flow_bh_label",
        value_rect_id: "flow_bh_can_value",
        offset: 6,
        unit: "°C",
        texts: {
            de: {
                label: "Vorlauf BH",
                desc: "VorlaufBH - CAN"
            },
            en: {
                label: "Flow BH",
                desc: "Flow BH - CAN"
            },
            it: {
                label: "Mandata BH",
                desc: "Mandata al riscaldatore di backup - CAN"
            }
        }
    },
    {
        id: "vorlauf_bh_2",
        type: "sensor",
        value_rect_id: "flow_bh_uart_value",
        offset: 6,
        unit: "°C",
        texts: {
            de: {
                desc: "VorlaufBH - UART"
            },
            en: {
                desc: "Flow BH - UART"
            },
            it: {
                desc: "Flow BH - UART"
            }
        }
    },
    {
        id: "kompressor_an_aus",
        type: "binary_sensor",
        value_rect_id: "comp_rect",
        offset: 2,
        fontSize: "40px",
        texts: {
            de: {
                desc: "Status Kompressor"
            },
            en: {
                desc: "Compressor status"
            },
            it: {
                desc: "Stato del compressore"
            }
        }
    },
    {
        id: "luefter",
        type: "sensor",
        label_rect_id: "fan_label",
        value_rect_id: "fan_value",
        offset: 6,
        category: {
            de: "Unten",
            en: "Bottom",
            it: "In basso"
        },
        unit: "RPM",
        digits: 0,
        texts: {
            de: {
                label: "Lüfter",
                desc: "Lüfter Drehzahl"
            },
            en: {
                label: "Fan",
                desc: "Fan speed"
            },
            it: {
                label: "Ventilatore",
                desc: "Velocità del ventilatore"
            }
        }
    },
    {
        id: "verdichter",
        type: "sensor",
        label_rect_id: "compressor_label",
        value_rect_id: "compressor_value",
        offset: 6,
        unit: "RPM",
        digits: 0,
        texts: {
            de: {
                label: "Verdichter",
                desc: "Verdichter Drehzahl"
            },
            en: {
                label: "Compressor",
                desc: "Compressor speed"
            },
            it: {
                label: "Compressore",
                desc: "Velocità del compressore"
            }
        }
    },
    {
        id: "speicher",
        type: "sensor",
        label_rect_id: "storage_label",
        value_rect_id: "storage_value",
        offset: 6,
        unit: "°C",
        texts: {
            de: {
                label: "Speicher",
                desc: "Speicher Ist"
            },
            en: {
                label: "Storage",
                desc: "Current storage value"
            },
            it: {
                label: "Serbatoio",
                desc: "Temperatura serbatoio attuale"
            }
        }
    },
    {
        id: "speicher_soll",
        type: "select",
        label_rect_id: "storage_setpoint_label",
        value_rect_id: "storage_setpoint_value",
        offset: 6,
        texts: {
            de: {
                label: "Soll",
                desc: "Speicher Soll"
            },
            en: {
                label: "Setpoint",
                desc: "Storage setpoint"
            },
            it: {
                label: "Impostata",
                desc: "Temperatura serbatoio impostata"
            }
        }
    },
    {
        id: "buh_power",
        type: "sensor",
        label_rect_id: "buh_info_label",
        value_rect_id: "buh_info_value",
        offset: 6,
        unit: "kW",
        digits: 0,
        optional: true,
        parent: "buh",
        texts: {
            de: {
                label: "Heizstab",
                desc: "Heizstableistung"
            },
            en: {
                label: "Heating rod",
                desc: "Heating rod power"
            },
            it: {
                label: "Resistenza",
                desc: "Potenza della barra riscaldante"
            }
        }
    },
    {
        id: "mischer",
        type: "sensor",
        value_rect_id: "dhw_mixer_value",
        offset: 6,
        unit: "%",
        digits: 0,
        fontSize: "40px",
        texts: {
            de: {
                desc: "Mischer"
            },
            en: {
                desc: "Mixer"
            },
            it: {
                desc: "Miscelatore"
            }
        }
    },
    {
        id: "bypass",
        type: "sensor",
        value_rect_id: "bypass_value",
        offset: 6,
        unit: "%",
        digits: 0,
        fontSize: "40px",
        texts: {
            de: {
                desc: "Bypass"
            },
            en: {
                desc: "Bypass"
            },
            it: {
                desc: "Bypass"
            }
        }
    },
    {
        id: "fehlercode",
        type: "text_sensor",
        value_rect_id: "fehlercode_value",
        offset: 6,
        fontSize: "40px",
        align: "left",
        category: {
            de: "Info",
            en: "Info",
            it: "Info"
        },
        texts: {
            de: {
                suffix: "Fehlercode: ",
                desc: "Fehlercode"
            },
            en: {
                suffix: "Error code: ",
                desc: "Error code"
            },
            it: {
                suffix: "Codice errore: ",
                desc: "Codice di errore"
            }
        }
    },
    {
        id: "betriebsmodus",
        type: "select",
        value_rect_id: "betriebsmodus_value",
        offset: 6,
        fontSize: "40px",
        align: "left",
        texts: {
            de: {
                suffix: "Modus: ",
                desc: "Betriebsmodus"
            },
            en: {
                suffix: "Mode: ",
                desc: "Operating mode"
            },
            it: {
                suffix: "Modalità: ",
                desc: "Modalità di funzionamento"
            }
        }
    },
    {
        id: "betriebsart",
        type: "text_sensor",
        value_rect_id: "betriebsart_value",
        offset: 6,
        fontSize: "40px",
        align: "left",
        texts: {
            de: {
                suffix: "Betriebsart: ",
                desc: "Betriebsart"
            },
            en: {
                suffix: "Mode of oper.: ",
                desc: "Mode of operating"
            },
            it: {
                suffix: "Tipo di funzionamento.: ",
                desc: "Tipo di funzionamento"
            }
        }
    },
    {
        id: "thermische_leistung",
        type: "sensor",
        value_rect_id: "therm_leistung_value",
        offset: 6,
        fontSize: "40px",
        align: "left",
        suffix: "Therm. Leistung: ",
        texts: {
            de: {
                suffix: "Thermische Leistung: ",
                desc: "Thermische Leistung"
            },
            en: {
                suffix: "Thermal power: ",
                desc: "Thermal power"
            },
            it: {
                suffix: "Potenza termica: ",
                desc: "Potenza termica"
            }
        }
    },
    {
        id: "el_power",
        type: "sensor",
        value_rect_id: "el_power_value",
        offset: 6,
        fontSize: "40px",
        align: "left",
        optional: true,
        texts: {
            de: {
                suffix: "Elekrische Leistung: ",
                desc: "Elektrische Leistung"
            },
            en: {
                suffix: "Electric power: ",
                desc: "Electric power"
            },
            it: {
                suffix: "Potenza elettrica: ",
                desc: "Potenza elettrica"
            }
        }
    },
    {
        id: "cop",
        type: "sensor",
        value_rect_id: "cop_value",
        offset: 6,
        fontSize: "40px",
        align: "left",
        optional: true,
        texts: {
            de: {
                suffix: "COP: ",
                desc: "COP"
            },
            en: {
                suffix: "COP: ",
                desc: "COP"
            },
            it: {
                suffix: "COP: ",
                desc: "COP"
            }
        }
    },
    {
        id: "t_room_is",
        type: "sensor",
        value_rect_id: "t_room_is_value",
        offset: 6,
        fontSize: "40px",
        align: "left",
        optional: true,
        texts: {
            de: {
                suffix: "Raum-Ist: ",
                desc: "Raum-Ist"
            },
            en: {
                suffix: "Room setpoint: ",
                desc: "Room setpoint"
            },
            it: {
                suffix: "Temperatura ambiente impostata: ",
                desc: "Temperatura ambiente impostata"
            }
        }
    },
    {
        id: "system_date",
        type: "sensor",
        value_rect_id: "date_value",
        parent: "date_value",
        offset: 6,
        fontSize: "40px",
        optional: true,
        texts: {
            de: {
                desc: "Datum"
            },
            en: {
                desc: "Date"
            },
            it: {
                desc: "Data"
            }
        }
    },
    {
        id: "system_time",
        type: "sensor",
        value_rect_id: "time_value",
        parent: "time_value",
        offset: 6,
        fontSize: "40px",
        optional: true,
        texts: {
            de: {
                desc: "Zeit"
            },
            en: {
                desc: "Time"
            },
            it: {
                desc: "Ora"
            }
        }
    }
];

export const languages = ["de", "en", "it"];
export const text_map = {
    "de" : {
        "on": "An",
        "off": "Aus"
    },
    "en" : {
        "on": "On",
        "off": "Off"
    },
    "it" : {
        "on": "On",
        "off": "Off"
    }
};

export const validateConfig = function(config) {
    const validEntities = Object.fromEntries(
        Object.entries(config.entities ?? {}).filter(([key]) =>
            svg_item_config.some(entity_conf => entity_conf.id === key)
        )
    );

    return {
        ...config,
        entities: validEntities
    };
}