export interface Category {
    de: string;
    en: string;
    it: string;
};

export interface SVGValue {
    id: string;
    entityId?: string;
    device?: "CAN" | "UART";
    domain: string;
    unit?: string | string[];
    optional?: boolean;
    value_rect_id?: string;
    valueBox?: any;
    texts: {
        de: {
            suffix?: string;
            desc: string;
        };
        en: {
            suffix?: string;
            desc: string;
        };
        it: {
            suffix?: string;
            desc: string;
        };
    };
}

export interface SVGItem {
    parent?: string;
    labelBox?: any;
    group_id: string;
    label_rect_id?: string;
    visual_container?: boolean;
    offset?: number;
    category?: Category;
    digits?: number;
    fontSize?: string;
    align?: string;
    suffix?: string;
    values: SVGValue[];
    texts?: {
        de: {
            label?: string;
        };
        en: {
            label?: string;
        };
        it: {
            label?: string;
        };
    };
}

export const svg_item_config: SVGItem[] = [
    {
        group_id: "TA",
        label_rect_id: "ta_label",
        offset: 6,
        category: {
            de: "Oben",
            en: "Top",
            it: "In alto"
        },
        visual_container: true,
        values: [
            {
                id: "ta",
                device: "CAN",
                domain: "sensor",
				unit: "°C",
                value_rect_id: "ta_val",
                texts: {
                    de: {
                        desc: "TA - Außentemperatur"
                    },
                    en: {
                        desc: "TA - Outside Temperature"
                    },
                    it: {
                        desc: "TA - Temperatura esterna"
                    }
                }
            }
        ],
        texts: {
            de: {
                label: "TA"
            },
            en: {
                label: "TA"
            },
            it: {
                label: "TA"
            }
        }
    },
    {
        group_id: "TA2",
        label_rect_id: "ta2_label",
        offset: 6,
        parent: "TA2",
        visual_container: true,
        values: [
            {
                id: "ta2",
                device: "CAN",
                domain: "sensor",
                unit: "°C",
                optional: true,
                value_rect_id: "ta2_val",
                texts: {
                    de: {
                        desc: "TA2 - Im Außengerät"
                    },
                    en: {
                        desc: "TA2 - In the outdoor unit"
                    },
                    it: {
                        desc: "TA2 - Nell'unità esterna"
                    }
                }
            }
        ],
        texts: {
            de: {
                label: "TA2"
            },
            en: {
                label: "TA2"
            },
            it: {
                label: "TA2"
            }
        }
    },
    {
        group_id: "EEV",
        label_rect_id: "eev_label",
        offset: 6,
        digits: 0,
        visual_container: true,
        values: [
            {
                id: "expansion_valve",
                device: "UART",
                domain: "sensor",
				unit: "pls",
                value_rect_id: "eev_val",
                texts: {
                    de: {
                        desc: "Elektonisches Expansionsventil"
                    },
                    en: {
                        desc: "Electronic Expansion Valve"
                    },
                    it: {
                        desc: "Valvola di espansione elettronica"
                    }
                }
            }
        ],
        texts: {
            de: {
                label: "EEV"
            },
            en: {
                label: "EEV"
            },
            it: {
                label: "EEV"
            }
        }
    },
    {
        group_id: "eev-schema",
        values: [
            {
                id: "pressure_equalization",
                device: "UART",
                domain: "binary_sensor",
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
            }
        ],
    },
    {
        group_id: "Kondensat",
        label_rect_id: "kondensat_label",
        visual_container: true,
        offset: 6,
        values: [
            {
                id: "kondensat",
                device: "UART",
                domain: "sensor",
				unit: "°C",
                value_rect_id: "kondensat_value",
                texts: {
                    de: {
                        desc: "Kondensat"
                    },
                    en: {
                        desc: "Condensate"
                    },
                    it: {
                        desc: "Condensato"
                    }
                }
            }
        ],
        texts: {
            de: {
                label: "Kondensat"
            },
            en: {
                label: "Condensate"
            },
            it: {
                label: "Condensato"
            }
        }
    },
    {
        group_id: "Umwaelzpumpe",
        label_rect_id: "uwp_label",
        visual_container: true,
        offset: 6,
        digits: 0,
        values: [
            {
                id: "umwaelzpumpe",
                device: "CAN",
                domain: "sensor",
				unit: "%",
                value_rect_id: "uwp_value",
                texts: {
                    de: {
                        desc: "Umwälzpumpe"
                    },
                    en: {
                        desc: "Circulation pump"
                    },
                    it: {
                        desc: "Pompa di circolazione"
                    }
                }
            }
        ],
        texts: {
            de: {
                label: "Umwälzpumpe"
            },
            en: {
                label: "Circulation pump"
            },
            it: {
                label: "Pompa circ."
            }
        }
    },
    {
        group_id: "Umwaelzpumpe-Status",
        offset: 2,
        fontSize: "30px",
        values: [
            {
                id: "umwaelzpumpe_an_aus",
                device: "CAN",
                domain: "binary_sensor",
                value_rect_id: "circ_pump_rect",
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
            }
        ],
    },
    {
        group_id: "Durchfluss",
        label_rect_id: "flow_rate_label",
        visual_container: true,
        offset: 6,
        digits: 0,
        values: [
            {
                id: "durchfluss",
                device: "CAN",
                domain: "sensor",
				unit: "L/h",
                value_rect_id: "flow_rate_value",
                texts: {
                    de: {
                        desc: "Durchfluss"
                    },
                    en: {
                        desc: "Flow rate"
                    },
                    it: {
                        desc: "Portata"
                    }
                }
            }
        ],
        texts: {
            de: {
                label: "Durchfluss"
            },
            en: {
                label: "Flow rate"
            },
            it: {
                label: "Portata"
            }
        }
    },
    {
        group_id: "Ruecklauf",
        label_rect_id: "return_flow_label",
        visual_container: true,
        offset: 6,
        values: [
            {
                id: "ruecklauf",
                device: "CAN",
                domain: "sensor",
				unit: "°C",
                value_rect_id: "return_flow_can_value",
                texts: {
                    de: {
                        desc: "Rücklauf - CAN"
                    },
                    en: {
                        desc: "Return flow - CAN"
                    },
                    it: {
                        desc: "Ritorno - CAN"
                    }
                }
            },
            {
                id: "ruecklauf_2",
                device: "UART",
                domain: "sensor",
                unit: "°C",
                value_rect_id: "return_flow_uart_value",
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
            }
        ],
        texts: {
            de: {
                label: "Rücklauf"
            },
            en: {
                label: "Return flow"
            },
            it: {
                label: "Ritorno"
            }
        }
    },
    {
        group_id: "Verdampfer",
        label_rect_id: "evaporator_label",
        visual_container: true,
        offset: 6,
        category: {
            de: "Mitte",
            en: "Middle",
            it: "Centro"
        },
        values: [
            {
                id: "verdampfer",
                device: "UART",
                domain: "sensor",
				unit: "°C",
                value_rect_id: "evaporator_value",
                texts: {
                    de: {
                        desc: "Verdampfer"
                    },
                    en: {
                        desc: "Evaporator"
                    },
                    it: {
                        desc: "Evaporatore"
                    }
                }
            }
        ],
        texts: {
            de: {
                label: "Verdampfer"
            },
            en: {
                label: "Evaporator"
            },
            it: {
                label: "Evaporatore"
            }
        }
    },
    {
        group_id: "hot_gas",
        label_rect_id: "hot_gas_label",
        visual_container: true,
        offset: 6,
        values: [
            {
                id: "hot_gas",
                device: "UART",
                domain: "sensor",
				unit: "°C",
                value_rect_id: "hot_gas_value",
                texts: {
                    de: {
                        desc: "Heißgas"
                    },
                    en: {
                        desc: "Hot gas"
                    },
                    it: {
                        desc: "Gas caldo"
                    }
                }
            }
        ],
        texts: {
            de: {
                label: "Heißgas"
            },
            en: {
                label: "Hot gas"
            },
            it: {
                label: "Gas caldo"
            }
        }
    },
    {
        group_id: "hot_gas_condenser",
        label_rect_id: "hot_gas_condenser_label",
        visual_container: true,
        offset: 6,
        parent: "hot_gas_condenser",
        values: [
            {
                id: "hot_gas_condenser",
                domain: "sensor",
                unit: "°C",
                optional: true,
                value_rect_id: "hot_gas_condenser_value",
                texts: {
                    de: {
                        desc: "Heißgas am Kondensator"
                    },
                    en: {
                        desc: "Hot gas at the condenser"
                    },
                    it: {
                        desc: "Gas caldo al condensatore"
                    }
                }
            }
        ],
        texts: {
            de: {
                label: "Heißgas"
            },
            en: {
                label: "Hot gas"
            },
            it: {
                label: "Gas caldo"
            }
        }
    },
    {
        group_id: "Spreizung",
        label_rect_id: "spread_label",
        visual_container: true,
        offset: 6,
        values: [
            {
                id: "spread",
                device: "CAN",
                domain: "sensor",
				unit: "°C",
                value_rect_id: "spread_value",
                texts: {
                    de: {
                        desc: "Spreizung"
                    },
                    en: {
                        desc: "Temperature spread"
                    },
                    it: {
                        desc: "Differenza di temperatura"
                    }
                }
            }
        ],
        texts: {
            de: {
                label: "Spreizung"
            },
            en: {
                label: "Spread"
            },
            it: {
                label: "ΔT"
            }
        }
    },
    {
        group_id: "Vorlauf",
        label_rect_id: "flow_label",
        visual_container: true,
        offset: 6,
        values: [
            {
                id: "vorlauf_1",
                device: "CAN",
				domain: "sensor",
				unit: "°C",
                value_rect_id: "flow_can_value",
                texts: {
                    de: {
                        desc: "Vorlauf - CAN"
                    },
                    en: {
                        desc: "Flow - CAN"
                    },
                    it: {
                        desc: "Mandata - CAN"
                    }
                }
            },
            {
                id: "vorlauf_2",
                device: "UART",
				domain: "sensor",
                unit: "°C",
                value_rect_id: "flow_uart_value",
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
            }
        ],
        texts: {
            de: {
                label: "Vorlauf"
            },
            en: {
                label: "Flow"
            },
            it: {
                label: "Mandata"
            }
        }
    },
    {
        group_id: "Vorlauf-Soll",
        label_rect_id: "flow_setpoint_label",
        visual_container: true,
        offset: 6,
        values: [
            {
                id: "vorlauf_soll",
                device: "CAN",
				domain: "sensor",
				unit: "°C",
                value_rect_id: "flow_setpoint_value",
                texts: {
                    de: {
                        desc: "Vorlauf Soll"
                    },
                    en: {
                        desc: "Flow setpoint"
                    },
                    it: {
                        desc: "Temperatura di mandata impostata"
                    }
                }
            }
        ],
        texts: {
            de: {
                label: "Vorlauf-Soll"
            },
            en: {
                label: "Setpoint"
            },
            it: {
                label: "Impostata"
            }
        }
    },
    {
        group_id: "Druck",
        label_rect_id: "pressure_label",
        visual_container: true,
        offset: 6,
        values: [
            {
                id: "wasserdruck",
                device: "CAN",
				domain: "sensor",
				unit: "bar",
                value_rect_id: "pressure_value",
                texts: {
                    de: {
                        desc: "Wasserdruck"
                    },
                    en: {
                        desc: "Water Pressure"
                    },
                    it: {
                        desc: "Pressione dell'acqua"
                    }
                }
            }
        ],
        texts: {
            de: {
                label: "Druck"
            },
            en: {
                label: "Pressure"
            },
            it: {
                label: "Pressione"
            }
        }
    },
    {
        group_id: "Vorlauf-BH",
        label_rect_id: "flow_bh_label",
        visual_container: true,
        offset: 6,
        values: [
            {
                id: "vorlauf_bh_1",
                device: "CAN",
				domain: "sensor",
				unit: "°C",
                value_rect_id: "flow_bh_can_value",
                texts: {
                    de: {
                        desc: "VorlaufBH - CAN"
                    },
                    en: {
                        desc: "Flow BH - CAN"
                    },
                    it: {
                        desc: "Mandata al riscaldatore di backup - CAN"
                    }
                }
            },
            {
                id: "vorlauf_bh_2",
                device: "UART",
				domain: "sensor",
                unit: "°C",
                value_rect_id: "flow_bh_uart_value",
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
            }
        ],
        texts: {
            de: {
                label: "Vorlauf BH"
            },
            en: {
                label: "Flow BH"
            },
            it: {
                label: "Mandata BH"
            }
        }
    },
    {
        group_id: "compressor_on_off_group",
        offset: 2,
        fontSize: "40px",
        values: [
            {
                id: "kompressor_an_aus",
                device: "CAN",
				domain: "binary_sensor",
                value_rect_id: "comp_rect",
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
            }
        ],
    },
    {
        group_id: "Luefter",
        label_rect_id: "fan_label",
        visual_container: true,
        offset: 6,
        category: {
            de: "Unten",
            en: "Bottom",
            it: "In basso"
        },
        digits: 0,
        values: [
            {
                id: "luefter",
                device: "UART",
				domain: "sensor",
				unit: "RPM",
                value_rect_id: "fan_value",
                texts: {
                    de: {
                        desc: "Lüfter Drehzahl"
                    },
                    en: {
                        desc: "Fan speed"
                    },
                    it: {
                        desc: "Velocità del ventilatore"
                    }
                }
            }
        ],
        texts: {
            de: {
                label: "Lüfter"
            },
            en: {
                label: "Fan"
            },
            it: {
                label: "Ventilatore"
            }
        }
    },
    {
        group_id: "Verdichter",
        label_rect_id: "compressor_label",
        visual_container: true,
        offset: 6,
        digits: 0,
        values: [
            {
                id: "verdichter",
                device: "UART",
				domain: "sensor",
				unit: "RPM",
                value_rect_id: "compressor_value",
                texts: {
                    de: {
                        desc: "Verdichter Drehzahl"
                    },
                    en: {
                        desc: "Compressor speed"
                    },
                    it: {
                        desc: "Velocità del compressore"
                    }
                }
            }
        ],
        texts: {
            de: {
                label: "Verdichter"
            },
            en: {
                label: "Compressor"
            },
            it: {
                label: "Compressore"
            }
        }
    },
    {
        group_id: "Speicher",
        label_rect_id: "storage_label",
        visual_container: true,
        offset: 6,
        values: [
            {
                id: "speicher",
                device: "CAN",
				domain: "sensor",
				unit: "°C",
                value_rect_id: "storage_value",
                texts: {
                    de: {
                        desc: "Speicher Ist"
                    },
                    en: {
                        desc: "Current storage value"
                    },
                    it: {
                        desc: "Temperatura serbatoio attuale"
                    }
                }
            }
        ],
        texts: {
            de: {
                label: "Speicher"
            },
            en: {
                label: "Storage"
            },
            it: {
                label: "Serbatoio"
            }
        }
    },
    {
        group_id: "Speicher-Soll",
        label_rect_id: "storage_setpoint_label",
        visual_container: true,
        offset: 6,
        values: [
            {
                id: "speicher_soll",
                device: "CAN",
				domain: "select",
				unit: "°C",
                value_rect_id: "storage_setpoint_value",
                texts: {
                    de: {
                        desc: "Speicher Soll"
                    },
                    en: {
                        desc: "Storage setpoint"
                    },
                    it: {
                        desc: "Temperatura serbatoio impostata"
                    }
                }
            }
        ],
        texts: {
            de: {
                label: "Soll"
            },
            en: {
                label: "Setpoint"
            },
            it: {
                label: "Impostata"
            }
        }
    },
    {
        group_id: "buh",
        label_rect_id: "buh_info_label",
        visual_container: true,
        offset: 6,
        digits: 0,
        parent: "buh",
        values: [
            {
                id: "buh_power",
				domain: "sensor",
                unit: ["W", "kW"],
                optional: true,
                value_rect_id: "buh_info_value",
                texts: {
                    de: {
                        desc: "Heizstableistung"
                    },
                    en: {
                        desc: "Heating rod power"
                    },
                    it: {
                        desc: "Potenza della barra riscaldante"
                    }
                }
            }
        ],
        texts: {
            de: {
                label: "Heizstab"
            },
            en: {
                label: "Heating rod"
            },
            it: {
                label: "Resistenza"
            }
        }
    },
    {
        group_id: "DHW-Valve",
        offset: 6,
        digits: 0,
        fontSize: "40px",
        values: [
            {
                id: "mischer",
                device: "CAN",
				domain: "sensor",
				unit: "%",
                value_rect_id: "dhw_mixer_value",
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
            }
        ],
    },
    {
        group_id: "BPV-Valve",
        offset: 6,
        digits: 0,
        fontSize: "40px",
        values: [
            {
                id: "bypass",
                device: "CAN",
				domain: "sensor",
				unit: "%",
                value_rect_id: "bypass_value",
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
            }
        ],
    },
    {
        group_id: "Info",
        visual_container: true,
        offset: 6,
        fontSize: "40px",
        align: "left",
        category: {
            de: "Info",
            en: "Info",
            it: "Info"
        },
        values: [
            {
                id: "fehlercode",
                device: "CAN",
				domain: "sensor",
                value_rect_id: "fehlercode_value",
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
                device: "CAN",
				domain: "sensor",
                value_rect_id: "betriebsmodus_value",
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
                device: "CAN",
				domain: "sensor",
                value_rect_id: "betriebsart_value",
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
                device: "CAN",
				domain: "sensor",
				unit: "kW",
                value_rect_id: "therm_leistung_value",
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
				domain: "sensor",
                unit: "kW",
                optional: true,
                value_rect_id: "el_power_value",
                texts: {
                    de: {
                        suffix: "Elektrische Leistung: ",
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
                domain: "sensor",
                optional: true,
                value_rect_id: "cop_value",
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
                domain: "sensor",
                unit: "°C",
                optional: true,
                value_rect_id: "t_room_is_value",
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
        ],
    },
    {
        group_id: "DateTime",
        parent: "date_value",
        offset: 6,
        fontSize: "40px",
        values: [
            {
                id: "system_date",
                device: "CAN",
                domain: "sensor",
                optional: true,
                value_rect_id: "date_value",
                texts: {
                    de: {
                        desc: "Datum"
                    },
                    en: {
                        desc: "Date"
                    },
                    it: {
                        desc: "Ora"
                    }
                }
            },
            {
                id: "system_time",
                device: "CAN",
                domain: "sensor",
                optional: true,
                value_rect_id: "time_value",
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
        ],
    }
];

export const languages = ["de", "en", "it"];

export interface LayoutOption {
    id: string;
    file: string;
    labels: { de: string; en: string; it: string };
}

export const DEFAULT_LAYOUT = "glass-light";

export const layouts: LayoutOption[] = [
    { id: "glass-dark", file: "hpsu_glass_dark.svg", labels: { de: "Glas, dunkel", en: "Glass, dark", it: "Vetro, scuro" } },
    { id: "glass-light", file: "hpsu_glass_light.svg", labels: { de: "Glas, hell", en: "Glass, light", it: "Vetro, chiaro" } },
    { id: "glass-petrol", file: "hpsu_glass_petrol.svg", labels: { de: "Glas, Petrol", en: "Glass, petrol", it: "Vetro, petrolio" } },
];

export const layoutFile = (id?: string): string =>
    (layouts.find(l => l.id === id) ?? layouts.find(l => l.id === DEFAULT_LAYOUT)!).file;
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
            svg_item_config.some(item =>
                item.values.some(value => value.id === key)
            )
        )
    );

    return {
        ...config,
        entities: validEntities
    };
};