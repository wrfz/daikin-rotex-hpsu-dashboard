function $656ade2323340eda$export$71511d61b312f219(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else {
        for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}


const $eb5cfe1dd9fe4e85$export$9b06e6104ce35b16 = [
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
                unit: "\xb0C",
                value_rect_id: "ta_val",
                texts: {
                    de: {
                        desc: "TA - Au\xdfentemperatur"
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
                unit: "\xb0C",
                optional: true,
                value_rect_id: "ta2_val",
                texts: {
                    de: {
                        desc: "TA2 - Im Au\xdfenger\xe4t"
                    },
                    en: {
                        desc: "TA2 - In the outdoor unit"
                    },
                    it: {
                        desc: "TA2 - Nell'unit\xe0 esterna"
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
        ]
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
                unit: "\xb0C",
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
                        desc: "Umw\xe4lzpumpe"
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
                label: "Umw\xe4lzpumpe"
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
                        desc: "Status Umw\xe4lzpumpe"
                    },
                    en: {
                        desc: "Circulation pump status"
                    },
                    it: {
                        desc: "Stato pompa di circolazione"
                    }
                }
            }
        ]
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
                unit: "\xb0C",
                value_rect_id: "return_flow_can_value",
                texts: {
                    de: {
                        desc: "R\xfccklauf - CAN"
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
                unit: "\xb0C",
                value_rect_id: "return_flow_uart_value",
                texts: {
                    de: {
                        desc: "R\xfccklauf - UART"
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
                label: "R\xfccklauf"
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
                unit: "\xb0C",
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
                unit: "\xb0C",
                value_rect_id: "hot_gas_value",
                texts: {
                    de: {
                        desc: "Hei\xdfgas"
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
                label: "Hei\xdfgas"
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
                unit: "\xb0C",
                optional: true,
                value_rect_id: "hot_gas_condenser_value",
                texts: {
                    de: {
                        desc: "Hei\xdfgas am Kondensator"
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
                label: "Hei\xdfgas"
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
                unit: "\xb0C",
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
                label: "\u0394T"
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
                unit: "\xb0C",
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
                unit: "\xb0C",
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
                unit: "\xb0C",
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
                unit: "\xb0C",
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
                unit: "\xb0C",
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
        ]
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
                        desc: "L\xfcfter Drehzahl"
                    },
                    en: {
                        desc: "Fan speed"
                    },
                    it: {
                        desc: "Velocit\xe0 del ventilatore"
                    }
                }
            }
        ],
        texts: {
            de: {
                label: "L\xfcfter"
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
                        desc: "Velocit\xe0 del compressore"
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
                unit: "\xb0C",
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
                unit: "\xb0C",
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
                unit: [
                    "W",
                    "kW"
                ],
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
        ]
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
        ]
    },
    {
        group_id: "Info",
        visual_container: true,
        reorderable: true,
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
                        suffix: "Modalit\xe0: ",
                        desc: "Modalit\xe0 di funzionamento"
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
                unit: "\xb0C",
                optional: true,
                value_rect_id: "t_room_is_value",
                texts: {
                    de: {
                        suffix: "Raum-Ist: ",
                        desc: "Raum-Ist"
                    },
                    en: {
                        suffix: "Room actual: ",
                        desc: "Room actual"
                    },
                    it: {
                        suffix: "Temperatura ambiente attuale: ",
                        desc: "Temperatura ambiente attuale"
                    }
                }
            },
            {
                id: "room_setpoint",
                domain: "input_number",
                optional: true,
                value_rect_id: "t_room_set_value",
                texts: {
                    de: {
                        suffix: "Raum-Soll: ",
                        desc: "Raum-Soll"
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
            }
        ]
    }
];
const $eb5cfe1dd9fe4e85$export$d0d68bb9ed2c643d = [
    "de",
    "en",
    "it"
];
const $eb5cfe1dd9fe4e85$export$cfaf3f619f4fde4d = "glass-light";
const $eb5cfe1dd9fe4e85$export$1ecca0613f5e56d2 = [
    {
        id: "glass-dark",
        file: "hpsu_glass_dark.svg",
        labels: {
            de: "Glas, dunkel",
            en: "Glass, dark",
            it: "Vetro, scuro"
        }
    },
    {
        id: "glass-light",
        file: "hpsu_glass_light.svg",
        labels: {
            de: "Glas, hell",
            en: "Glass, light",
            it: "Vetro, chiaro"
        }
    },
    {
        id: "glass-petrol",
        file: "hpsu_glass_petrol.svg",
        labels: {
            de: "Glas, Petrol",
            en: "Glass, petrol",
            it: "Vetro, petrolio"
        }
    }
];
const $eb5cfe1dd9fe4e85$export$6fb81034e128eb0 = (id)=>($eb5cfe1dd9fe4e85$export$1ecca0613f5e56d2.find((l)=>l.id === id) ?? $eb5cfe1dd9fe4e85$export$1ecca0613f5e56d2.find((l)=>l.id === $eb5cfe1dd9fe4e85$export$cfaf3f619f4fde4d)).file;
const $eb5cfe1dd9fe4e85$export$f8cda7abf1aa048 = {
    "de": {
        "on": "An",
        "off": "Aus"
    },
    "en": {
        "on": "On",
        "off": "Off"
    },
    "it": {
        "on": "On",
        "off": "Off"
    }
};
const $eb5cfe1dd9fe4e85$export$e92e609e56507ea0 = function(config) {
    return $eb5cfe1dd9fe4e85$export$c3b47695b093ece9((Array.isArray(config?.info_entities) ? config.info_entities : []).map((e)=>e?.key));
};
const $eb5cfe1dd9fe4e85$export$c3b47695b093ece9 = function(saved) {
    const ids = $eb5cfe1dd9fe4e85$export$9b06e6104ce35b16.filter((i)=>i.reorderable).flatMap((i)=>i.values.map((v)=>v.id));
    const given = (Array.isArray(saved) ? saved : []).filter((id, n, a)=>ids.includes(id) && a.indexOf(id) === n);
    return [
        ...given,
        ...ids.filter((id)=>!given.includes(id))
    ];
};
const $eb5cfe1dd9fe4e85$export$127f9a442b42d18 = function(config) {
    const ids = new Set($eb5cfe1dd9fe4e85$export$9b06e6104ce35b16.flatMap((item)=>item.values.map((v)=>v.id)));
    const flat = {
        ...config.entities ?? {},
        ...config.can_entities ?? {},
        ...config.uart_entities ?? {}
    };
    for (const e of Array.isArray(config.info_entities) ? config.info_entities : [])if (e && typeof e.key === "string" && e.entity) flat[e.key] = e.entity;
    const entities = Object.fromEntries(Object.entries(flat).filter(([key, value])=>ids.has(key) && value));
    return {
        ...config,
        entities: entities,
        canDevice: config.can_device ?? config.canDevice,
        uartDevice: config.uart_device ?? config.uartDevice
    };
};
const $eb5cfe1dd9fe4e85$export$fa8157df3262779b = function(config) {
    const { entities: entities, canDevice: canDevice, uartDevice: uartDevice, can_entities: can_entities, uart_entities: uart_entities, info_entities: info_entities, can_device: can_device, uart_device: uart_device, ...rest } = config;
    const infoIds = $eb5cfe1dd9fe4e85$export$c3b47695b093ece9(undefined);
    const can = {};
    const uart = {};
    for (const item of $eb5cfe1dd9fe4e85$export$9b06e6104ce35b16)for (const v of item.values){
        const e = entities?.[v.id];
        if (!e || infoIds.includes(v.id)) continue;
        (v.device === "UART" ? uart : can)[v.id] = e;
    }
    const order = $eb5cfe1dd9fe4e85$export$e92e609e56507ea0(config);
    const isDefault = order.every((id, n)=>id === infoIds[n]);
    const anyInfo = infoIds.some((id)=>entities?.[id]);
    const none = (o)=>Object.keys(o).length ? o : undefined;
    return {
        ...rest,
        can_device: canDevice,
        uart_device: uartDevice,
        can_entities: none(can),
        uart_entities: none(uart),
        info_entities: anyInfo || !isDefault ? order.map((key)=>entities?.[key] ? {
                key: key,
                entity: entities[key]
            } : {
                key: key
            }) : undefined
    };
};




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $14742f68afc766d6$export$da64fc29f17f9d0e = (t)=>(e, o)=>{
        void 0 !== o ? o.addInitializer(()=>{
            customElements.define(t, e);
        }) : customElements.define(t, e);
    };


/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $def2de46b9306e8a$var$t = globalThis, $def2de46b9306e8a$export$b4d10f6001c083c2 = $def2de46b9306e8a$var$t.ShadowRoot && (void 0 === $def2de46b9306e8a$var$t.ShadyCSS || $def2de46b9306e8a$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $def2de46b9306e8a$var$s = Symbol(), $def2de46b9306e8a$var$o = new WeakMap;
class $def2de46b9306e8a$export$505d1e8739bad805 {
    constructor(t, e, o){
        if (this._$cssResult$ = !0, o !== $def2de46b9306e8a$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($def2de46b9306e8a$export$b4d10f6001c083c2 && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = $def2de46b9306e8a$var$o.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $def2de46b9306e8a$var$o.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const $def2de46b9306e8a$export$8d80f9cac07cdb3 = (t)=>new $def2de46b9306e8a$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $def2de46b9306e8a$var$s), $def2de46b9306e8a$export$dbf350e5966cf602 = (t, ...e)=>{
    const o = 1 === t.length ? t[0] : e.reduce((e, s, o)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[o + 1], t[0]);
    return new $def2de46b9306e8a$export$505d1e8739bad805(o, t, $def2de46b9306e8a$var$s);
}, $def2de46b9306e8a$export$2ca4a66ec4cecb90 = (s, o)=>{
    if ($def2de46b9306e8a$export$b4d10f6001c083c2) s.adoptedStyleSheets = o.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet);
    else for (const e of o){
        const o = document.createElement("style"), n = $def2de46b9306e8a$var$t.litNonce;
        void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
    }
}, $def2de46b9306e8a$export$ee69dfd951e24778 = $def2de46b9306e8a$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $def2de46b9306e8a$export$8d80f9cac07cdb3(e);
    })(t) : t;


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { is: $19fe8e3abedf4df0$var$i, defineProperty: $19fe8e3abedf4df0$var$e, getOwnPropertyDescriptor: $19fe8e3abedf4df0$var$h, getOwnPropertyNames: $19fe8e3abedf4df0$var$r, getOwnPropertySymbols: $19fe8e3abedf4df0$var$o, getPrototypeOf: $19fe8e3abedf4df0$var$n } = Object, $19fe8e3abedf4df0$var$a = globalThis, $19fe8e3abedf4df0$var$c = $19fe8e3abedf4df0$var$a.trustedTypes, $19fe8e3abedf4df0$var$l = $19fe8e3abedf4df0$var$c ? $19fe8e3abedf4df0$var$c.emptyScript : "", $19fe8e3abedf4df0$var$p = $19fe8e3abedf4df0$var$a.reactiveElementPolyfillSupport, $19fe8e3abedf4df0$var$d = (t, s)=>t, $19fe8e3abedf4df0$export$7312b35fbf521afb = {
    toAttribute (t, s) {
        switch(s){
            case Boolean:
                t = t ? $19fe8e3abedf4df0$var$l : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, s) {
        let i = t;
        switch(s){
            case Boolean:
                i = null !== t;
                break;
            case Number:
                i = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    i = JSON.parse(t);
                } catch (t) {
                    i = null;
                }
        }
        return i;
    }
}, $19fe8e3abedf4df0$export$53a6892c50694894 = (t, s)=>!$19fe8e3abedf4df0$var$i(t, s), $19fe8e3abedf4df0$var$b = {
    attribute: !0,
    type: String,
    converter: $19fe8e3abedf4df0$export$7312b35fbf521afb,
    reflect: !1,
    useDefault: !1,
    hasChanged: $19fe8e3abedf4df0$export$53a6892c50694894
};
Symbol.metadata ??= Symbol("metadata"), $19fe8e3abedf4df0$var$a.litPropertyMetadata ??= new WeakMap;
class $19fe8e3abedf4df0$export$c7c07a37856565d extends HTMLElement {
    static addInitializer(t) {
        this._$Ei(), (this.l ??= []).push(t);
    }
    static get observedAttributes() {
        return this.finalize(), this._$Eh && [
            ...this._$Eh.keys()
        ];
    }
    static createProperty(t, s = $19fe8e3abedf4df0$var$b) {
        if (s.state && (s.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((s = Object.create(s)).wrapped = !0), this.elementProperties.set(t, s), !s.noAccessor) {
            const i = Symbol(), h = this.getPropertyDescriptor(t, i, s);
            void 0 !== h && $19fe8e3abedf4df0$var$e(this.prototype, t, h);
        }
    }
    static getPropertyDescriptor(t, s, i) {
        const { get: e, set: r } = $19fe8e3abedf4df0$var$h(this.prototype, t) ?? {
            get () {
                return this[s];
            },
            set (t) {
                this[s] = t;
            }
        };
        return {
            get: e,
            set (s) {
                const h = e?.call(this);
                r?.call(this, s), this.requestUpdate(t, h, i);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) ?? $19fe8e3abedf4df0$var$b;
    }
    static _$Ei() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d("elementProperties"))) return;
        const t = $19fe8e3abedf4df0$var$n(this);
        t.finalize(), void 0 !== t.l && (this.l = [
            ...t.l
        ]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d("finalized"))) return;
        if (this.finalized = !0, this._$Ei(), this.hasOwnProperty($19fe8e3abedf4df0$var$d("properties"))) {
            const t = this.properties, s = [
                ...$19fe8e3abedf4df0$var$r(t),
                ...$19fe8e3abedf4df0$var$o(t)
            ];
            for (const i of s)this.createProperty(i, t[i]);
        }
        const t = this[Symbol.metadata];
        if (null !== t) {
            const s = litPropertyMetadata.get(t);
            if (void 0 !== s) for (const [t, i] of s)this.elementProperties.set(t, i);
        }
        this._$Eh = new Map;
        for (const [t, s] of this.elementProperties){
            const i = this._$Eu(t, s);
            void 0 !== i && this._$Eh.set(i, t);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s) {
        const i = [];
        if (Array.isArray(s)) {
            const e = new Set(s.flat(1 / 0).reverse());
            for (const s of e)i.unshift((0, $def2de46b9306e8a$export$ee69dfd951e24778)(s));
        } else void 0 !== s && i.push((0, $def2de46b9306e8a$export$ee69dfd951e24778)(s));
        return i;
    }
    static _$Eu(t, s) {
        const i = s.attribute;
        return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    constructor(){
        super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
    }
    _$Ev() {
        this._$ES = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t)=>t(this));
    }
    addController(t) {
        (this._$EO ??= new Set).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
    }
    removeController(t) {
        this._$EO?.delete(t);
    }
    _$E_() {
        const t = new Map, s = this.constructor.elementProperties;
        for (const i of s.keys())this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
        t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
        const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return (0, $def2de46b9306e8a$export$2ca4a66ec4cecb90)(t, this.constructor.elementStyles), t;
    }
    connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t)=>t.hostConnected?.());
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        this._$EO?.forEach((t)=>t.hostDisconnected?.());
    }
    attributeChangedCallback(t, s, i) {
        this._$AK(t, i);
    }
    _$ET(t, s) {
        const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
        if (void 0 !== e && !0 === i.reflect) {
            const h = (void 0 !== i.converter?.toAttribute ? i.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb).toAttribute(s, i.type);
            this._$Em = t, null == h ? this.removeAttribute(e) : this.setAttribute(e, h), this._$Em = null;
        }
    }
    _$AK(t, s) {
        const i = this.constructor, e = i._$Eh.get(t);
        if (void 0 !== e && this._$Em !== e) {
            const t = i.getPropertyOptions(e), h = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== t.converter?.fromAttribute ? t.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb;
            this._$Em = e;
            const r = h.fromAttribute(s, t.type);
            this[e] = r ?? this._$Ej?.get(e) ?? r, this._$Em = null;
        }
    }
    requestUpdate(t, s, i, e = !1, h) {
        if (void 0 !== t) {
            const r = this.constructor;
            if (!1 === e && (h = this[t]), i ??= r.getPropertyOptions(t), !((i.hasChanged ?? $19fe8e3abedf4df0$export$53a6892c50694894)(h, s) || i.useDefault && i.reflect && h === this._$Ej?.get(t) && !this.hasAttribute(r._$Eu(t, i)))) return;
            this.C(t, s, i);
        }
        !1 === this.isUpdatePending && (this._$ES = this._$EP());
    }
    C(t, s, { useDefault: i, reflect: e, wrapped: h }, r) {
        i && !(this._$Ej ??= new Map).has(t) && (this._$Ej.set(t, r ?? s ?? this[t]), !0 !== h || void 0 !== r) || (this._$AL.has(t) || (this.hasUpdated || i || (s = void 0), this._$AL.set(t, s)), !0 === e && this._$Em !== t && (this._$Eq ??= new Set).add(t));
    }
    async _$EP() {
        this.isUpdatePending = !0;
        try {
            await this._$ES;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
            if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
                for (const [t, s] of this._$Ep)this[t] = s;
                this._$Ep = void 0;
            }
            const t = this.constructor.elementProperties;
            if (t.size > 0) for (const [s, i] of t){
                const { wrapped: t } = i, e = this[s];
                !0 !== t || this._$AL.has(s) || void 0 === e || this.C(s, void 0, i, e);
            }
        }
        let t = !1;
        const s = this._$AL;
        try {
            t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach((t)=>t.hostUpdate?.()), this.update(s)) : this._$EM();
        } catch (s) {
            throw t = !1, this._$EM(), s;
        }
        t && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        this._$EO?.forEach((t)=>t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$EM() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$ES;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        this._$Eq &&= this._$Eq.forEach((t)=>this._$ET(t, this[t])), this._$EM();
    }
    updated(t) {}
    firstUpdated(t) {}
}
$19fe8e3abedf4df0$export$c7c07a37856565d.elementStyles = [], $19fe8e3abedf4df0$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, $19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d("elementProperties")] = new Map, $19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d("finalized")] = new Map, $19fe8e3abedf4df0$var$p?.({
    ReactiveElement: $19fe8e3abedf4df0$export$c7c07a37856565d
}), ($19fe8e3abedf4df0$var$a.reactiveElementVersions ??= []).push("2.1.2");


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $9cd908ed2625c047$var$o = {
    attribute: !0,
    type: String,
    converter: (0, $19fe8e3abedf4df0$export$7312b35fbf521afb),
    reflect: !1,
    hasChanged: (0, $19fe8e3abedf4df0$export$53a6892c50694894)
}, $9cd908ed2625c047$export$8d623b1670eb40f4 = (t = $9cd908ed2625c047$var$o, e, r)=>{
    const { kind: n, metadata: i } = r;
    let s = globalThis.litPropertyMetadata.get(i);
    if (void 0 === s && globalThis.litPropertyMetadata.set(i, s = new Map), "setter" === n && ((t = Object.create(t)).wrapped = !0), s.set(r.name, t), "accessor" === n) {
        const { name: o } = r;
        return {
            set (r) {
                const n = e.get.call(this);
                e.set.call(this, r), this.requestUpdate(o, n, t, !0, r);
            },
            init (e) {
                return void 0 !== e && this.C(o, void 0, t, e), e;
            }
        };
    }
    if ("setter" === n) {
        const { name: o } = r;
        return function(r) {
            const n = this[o];
            e.call(this, r), this.requestUpdate(o, n, t, !0, r);
        };
    }
    throw Error("Unsupported decorator location: " + n);
};
function $9cd908ed2625c047$export$d541bacb2bda4494(t) {
    return (e, o)=>"object" == typeof o ? $9cd908ed2625c047$export$8d623b1670eb40f4(t, e, o) : ((t, e, o)=>{
            const r = e.hasOwnProperty(o);
            return e.constructor.createProperty(o, t), r ? Object.getOwnPropertyDescriptor(e, o) : void 0;
        })(t, e, o);
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $04c21ea1ce1f6057$export$ca000e230c0caa3e(r) {
    return (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        ...r,
        state: !0,
        attribute: !1
    });
}


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $b4269277b3c48b0c$export$b2b799818fbabcf3(t) {
    return (n, o)=>{
        const c = "function" == typeof n ? n : n[o];
        Object.assign(c, t);
    };
}


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $25e9c5a8f7ecfc69$export$51987bb50e1f6752 = (e, t, c)=>(c.configurable = !0, c.enumerable = !0, Reflect.decorate && "object" != typeof t && Object.defineProperty(e, t, c), c);


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $02a1f3a787c54a30$export$2fa187e846a241c4(e, r) {
    return (n, s, i)=>{
        const o = (t)=>t.renderRoot?.querySelector(e) ?? null;
        if (r) {
            const { get: e, set: r } = "object" == typeof s ? n : i ?? (()=>{
                const t = Symbol();
                return {
                    get () {
                        return this[t];
                    },
                    set (e) {
                        this[t] = e;
                    }
                };
            })();
            return (0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(n, s, {
                get () {
                    let t = e.call(this);
                    return void 0 === t && (t = o(this), (null !== t || this.hasUpdated) && r.call(this, t)), t;
                }
            });
        }
        return (0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(n, s, {
            get () {
                return o(this);
            }
        });
    };
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ let $ed34c589b230c255$var$e;
function $ed34c589b230c255$export$dcd0d083aa86c355(r) {
    return (n, o)=>(0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(n, o, {
            get () {
                return (this.renderRoot ?? ($ed34c589b230c255$var$e ??= document.createDocumentFragment())).querySelectorAll(r);
            }
        });
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $ea50f1870b80cbec$export$163dfc35cc43f240(r) {
    return (n, e)=>(0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(n, e, {
            async get () {
                return await this.updateComplete, this.renderRoot?.querySelector(r) ?? null;
            }
        });
}



/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $563fcf7ce7e6c5aa$export$4682af2d9ee91415(o) {
    return (e, n)=>{
        const { slot: r, selector: s } = o ?? {}, c = "slot" + (r ? `[name=${r}]` : ":not([name])");
        return (0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(e, n, {
            get () {
                const t = this.renderRoot?.querySelector(c), e = t?.assignedElements(o) ?? [];
                return void 0 === s ? e : e.filter((t)=>t.matches(s));
            }
        });
    };
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $728f1385dd7bf557$export$1bdbe53f9df1b8(n) {
    return (o, r)=>{
        const { slot: e } = n ?? {}, s = "slot" + (e ? `[name=${e}]` : ":not([name])");
        return (0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(o, r, {
            get () {
                const t = this.renderRoot?.querySelector(s);
                return t?.assignedNodes(n) ?? [];
            }
        });
    };
}





/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $f58f44579a4747ac$var$t = globalThis, $f58f44579a4747ac$var$i = (t)=>t, $f58f44579a4747ac$var$s = $f58f44579a4747ac$var$t.trustedTypes, $f58f44579a4747ac$var$e = $f58f44579a4747ac$var$s ? $f58f44579a4747ac$var$s.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $f58f44579a4747ac$var$h = "$lit$", $f58f44579a4747ac$var$o = `lit$${Math.random().toFixed(9).slice(2)}$`, $f58f44579a4747ac$var$n = "?" + $f58f44579a4747ac$var$o, $f58f44579a4747ac$var$r = `<${$f58f44579a4747ac$var$n}>`, $f58f44579a4747ac$var$l = document, $f58f44579a4747ac$var$c = ()=>$f58f44579a4747ac$var$l.createComment(""), $f58f44579a4747ac$var$a = (t)=>null === t || "object" != typeof t && "function" != typeof t, $f58f44579a4747ac$var$u = Array.isArray, $f58f44579a4747ac$var$d = (t)=>$f58f44579a4747ac$var$u(t) || "function" == typeof t?.[Symbol.iterator], $f58f44579a4747ac$var$f = "[ \t\n\f\r]", $f58f44579a4747ac$var$v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $f58f44579a4747ac$var$_ = /-->/g, $f58f44579a4747ac$var$m = />/g, $f58f44579a4747ac$var$p = RegExp(`>|${$f58f44579a4747ac$var$f}(?:([^\\s"'>=/]+)(${$f58f44579a4747ac$var$f}*=${$f58f44579a4747ac$var$f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $f58f44579a4747ac$var$g = /'/g, $f58f44579a4747ac$var$$ = /"/g, $f58f44579a4747ac$var$y = /^(?:script|style|textarea|title)$/i, $f58f44579a4747ac$var$x = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $f58f44579a4747ac$export$c0bb0b647f701bb5 = $f58f44579a4747ac$var$x(1), $f58f44579a4747ac$export$7ed1367e7fa1ad68 = $f58f44579a4747ac$var$x(2), $f58f44579a4747ac$export$47d5b44d225be5b4 = $f58f44579a4747ac$var$x(3), $f58f44579a4747ac$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $f58f44579a4747ac$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $f58f44579a4747ac$var$C = new WeakMap, $f58f44579a4747ac$var$P = $f58f44579a4747ac$var$l.createTreeWalker($f58f44579a4747ac$var$l, 129);
function $f58f44579a4747ac$var$V(t, i) {
    if (!$f58f44579a4747ac$var$u(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $f58f44579a4747ac$var$e ? $f58f44579a4747ac$var$e.createHTML(i) : i;
}
const $f58f44579a4747ac$var$N = (t, i)=>{
    const s = t.length - 1, e = [];
    let n, l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", c = $f58f44579a4747ac$var$v;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, f = 0;
        for(; f < s.length && (c.lastIndex = f, u = c.exec(s), null !== u);)f = c.lastIndex, c === $f58f44579a4747ac$var$v ? "!--" === u[1] ? c = $f58f44579a4747ac$var$_ : void 0 !== u[1] ? c = $f58f44579a4747ac$var$m : void 0 !== u[2] ? ($f58f44579a4747ac$var$y.test(u[2]) && (n = RegExp("</" + u[2], "g")), c = $f58f44579a4747ac$var$p) : void 0 !== u[3] && (c = $f58f44579a4747ac$var$p) : c === $f58f44579a4747ac$var$p ? ">" === u[0] ? (c = n ?? $f58f44579a4747ac$var$v, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? $f58f44579a4747ac$var$p : '"' === u[3] ? $f58f44579a4747ac$var$$ : $f58f44579a4747ac$var$g) : c === $f58f44579a4747ac$var$$ || c === $f58f44579a4747ac$var$g ? c = $f58f44579a4747ac$var$p : c === $f58f44579a4747ac$var$_ || c === $f58f44579a4747ac$var$m ? c = $f58f44579a4747ac$var$v : (c = $f58f44579a4747ac$var$p, n = void 0);
        const x = c === $f58f44579a4747ac$var$p && t[i + 1].startsWith("/>") ? " " : "";
        l += c === $f58f44579a4747ac$var$v ? s + $f58f44579a4747ac$var$r : d >= 0 ? (e.push(a), s.slice(0, d) + $f58f44579a4747ac$var$h + s.slice(d) + $f58f44579a4747ac$var$o + x) : s + $f58f44579a4747ac$var$o + (-2 === d ? i : x);
    }
    return [
        $f58f44579a4747ac$var$V(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")),
        e
    ];
};
class $f58f44579a4747ac$var$S {
    constructor({ strings: t, _$litType$: i }, e){
        let r;
        this.parts = [];
        let l = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = $f58f44579a4747ac$var$N(t, i);
        if (this.el = $f58f44579a4747ac$var$S.createElement(f, e), $f58f44579a4747ac$var$P.currentNode = this.el.content, 2 === i || 3 === i) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = $f58f44579a4747ac$var$P.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith($f58f44579a4747ac$var$h)) {
                    const i = v[a++], s = r.getAttribute(t).split($f58f44579a4747ac$var$o), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: l,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? $f58f44579a4747ac$var$I : "?" === e[1] ? $f58f44579a4747ac$var$L : "@" === e[1] ? $f58f44579a4747ac$var$z : $f58f44579a4747ac$var$H
                    }), r.removeAttribute(t);
                } else t.startsWith($f58f44579a4747ac$var$o) && (d.push({
                    type: 6,
                    index: l
                }), r.removeAttribute(t));
                if ($f58f44579a4747ac$var$y.test(r.tagName)) {
                    const t = r.textContent.split($f58f44579a4747ac$var$o), i = t.length - 1;
                    if (i > 0) {
                        r.textContent = $f58f44579a4747ac$var$s ? $f58f44579a4747ac$var$s.emptyScript : "";
                        for(let s = 0; s < i; s++)r.append(t[s], $f58f44579a4747ac$var$c()), $f58f44579a4747ac$var$P.nextNode(), d.push({
                            type: 2,
                            index: ++l
                        });
                        r.append(t[i], $f58f44579a4747ac$var$c());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === $f58f44579a4747ac$var$n) d.push({
                    type: 2,
                    index: l
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf($f58f44579a4747ac$var$o, t + 1));)d.push({
                        type: 7,
                        index: l
                    }), t += $f58f44579a4747ac$var$o.length - 1;
                }
            }
            l++;
        }
    }
    static createElement(t, i) {
        const s = $f58f44579a4747ac$var$l.createElement("template");
        return s.innerHTML = t, s;
    }
}
function $f58f44579a4747ac$var$M(t, i, s = t, e) {
    if (i === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = $f58f44579a4747ac$var$a(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = $f58f44579a4747ac$var$M(t, h._$AS(t, i.values), h, e)), i;
}
class $f58f44579a4747ac$var$R {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? $f58f44579a4747ac$var$l).importNode(i, !0);
        $f58f44579a4747ac$var$P.currentNode = e;
        let h = $f58f44579a4747ac$var$P.nextNode(), o = 0, n = 0, r = s[0];
        for(; void 0 !== r;){
            if (o === r.index) {
                let i;
                2 === r.type ? i = new $f58f44579a4747ac$var$k(h, h.nextSibling, this, t) : 1 === r.type ? i = new r.ctor(h, r.name, r.strings, this, t) : 6 === r.type && (i = new $f58f44579a4747ac$var$Z(h, this, t)), this._$AV.push(i), r = s[++n];
            }
            o !== r?.index && (h = $f58f44579a4747ac$var$P.nextNode(), o++);
        }
        return $f58f44579a4747ac$var$P.currentNode = $f58f44579a4747ac$var$l, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $f58f44579a4747ac$var$k {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = $f58f44579a4747ac$var$M(this, t, i), $f58f44579a4747ac$var$a(t) ? t === $f58f44579a4747ac$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && this._$AR(), this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee) : t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : $f58f44579a4747ac$var$d(t) ? this.k(t) : this._(t);
    }
    O(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    _(t) {
        this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && $f58f44579a4747ac$var$a(this._$AH) ? this._$AA.nextSibling.data = t : this.T($f58f44579a4747ac$var$l.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = $f58f44579a4747ac$var$S.createElement($f58f44579a4747ac$var$V(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new $f58f44579a4747ac$var$R(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $f58f44579a4747ac$var$C.get(t.strings);
        return void 0 === i && $f58f44579a4747ac$var$C.set(t.strings, i = new $f58f44579a4747ac$var$S(t)), i;
    }
    k(t) {
        $f58f44579a4747ac$var$u(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new $f58f44579a4747ac$var$k(this.O($f58f44579a4747ac$var$c()), this.O($f58f44579a4747ac$var$c()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, s) {
        for(this._$AP?.(!1, !0, s); t !== this._$AB;){
            const s = $f58f44579a4747ac$var$i(t).nextSibling;
            $f58f44579a4747ac$var$i(t).remove(), t = s;
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
    }
}
class $f58f44579a4747ac$var$H {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = $f58f44579a4747ac$var$M(this, t, i, 0), o = !$f58f44579a4747ac$var$a(t) || t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = $f58f44579a4747ac$var$M(this, e[s + n], i, n), r === $f58f44579a4747ac$export$9c068ae9cc5db4e8 && (r = this._$AH[n]), o ||= !$f58f44579a4747ac$var$a(r) || r !== this._$AH[n], r === $f58f44579a4747ac$export$45b790e32b2810ee ? t = $f58f44579a4747ac$export$45b790e32b2810ee : t !== $f58f44579a4747ac$export$45b790e32b2810ee && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === $f58f44579a4747ac$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class $f58f44579a4747ac$var$I extends $f58f44579a4747ac$var$H {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === $f58f44579a4747ac$export$45b790e32b2810ee ? void 0 : t;
    }
}
class $f58f44579a4747ac$var$L extends $f58f44579a4747ac$var$H {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== $f58f44579a4747ac$export$45b790e32b2810ee);
    }
}
class $f58f44579a4747ac$var$z extends $f58f44579a4747ac$var$H {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = $f58f44579a4747ac$var$M(this, t, i, 0) ?? $f58f44579a4747ac$export$45b790e32b2810ee) === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return;
        const s = this._$AH, e = t === $f58f44579a4747ac$export$45b790e32b2810ee && s !== $f58f44579a4747ac$export$45b790e32b2810ee || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== $f58f44579a4747ac$export$45b790e32b2810ee && (s === $f58f44579a4747ac$export$45b790e32b2810ee || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class $f58f44579a4747ac$var$Z {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $f58f44579a4747ac$var$M(this, t);
    }
}
const $f58f44579a4747ac$export$8613d1ca9052b22e = {
    M: $f58f44579a4747ac$var$h,
    P: $f58f44579a4747ac$var$o,
    A: $f58f44579a4747ac$var$n,
    C: 1,
    L: $f58f44579a4747ac$var$N,
    R: $f58f44579a4747ac$var$R,
    D: $f58f44579a4747ac$var$d,
    V: $f58f44579a4747ac$var$M,
    I: $f58f44579a4747ac$var$k,
    H: $f58f44579a4747ac$var$H,
    N: $f58f44579a4747ac$var$L,
    U: $f58f44579a4747ac$var$z,
    B: $f58f44579a4747ac$var$I,
    F: $f58f44579a4747ac$var$Z
}, $f58f44579a4747ac$var$B = $f58f44579a4747ac$var$t.litHtmlPolyfillSupport;
$f58f44579a4747ac$var$B?.($f58f44579a4747ac$var$S, $f58f44579a4747ac$var$k), ($f58f44579a4747ac$var$t.litHtmlVersions ??= []).push("3.3.3");
const $f58f44579a4747ac$export$b3890eb0ae9dca99 = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new $f58f44579a4747ac$var$k(i.insertBefore($f58f44579a4747ac$var$c(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
};




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $ab210b2da7b39b9d$var$s = globalThis;
class $ab210b2da7b39b9d$export$3f2f9f5909897157 extends (0, $19fe8e3abedf4df0$export$c7c07a37856565d) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        const t = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t.firstChild, t;
    }
    update(t) {
        const r = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, $f58f44579a4747ac$export$b3890eb0ae9dca99)(r, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(!0);
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(!1);
    }
    render() {
        return 0, $f58f44579a4747ac$export$9c068ae9cc5db4e8;
    }
}
$ab210b2da7b39b9d$export$3f2f9f5909897157._$litElement$ = !0, $ab210b2da7b39b9d$export$3f2f9f5909897157["finalized"] = !0, $ab210b2da7b39b9d$var$s.litElementHydrateSupport?.({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$var$o = $ab210b2da7b39b9d$var$s.litElementPolyfillSupport;
$ab210b2da7b39b9d$var$o?.({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$export$f5c524615a7708d6 = {
    _$AK: (t, e, r)=>{
        t._$AK(e, r);
    },
    _$AL: (t)=>t._$AL
};
($ab210b2da7b39b9d$var$s.litElementVersions ??= []).push("4.2.2");


/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $a00bca1a101a9088$export$6acf61af03e62db = !1;




const $d067581fc0d59830$var$ensureArray = (value)=>{
    return Array.isArray(value) ? value : [
        value
    ];
};
// Sensors grouped by function. Ids that are not listed end up in "other".
const $d067581fc0d59830$var$FUNCTION_GROUPS = [
    {
        key: "refrigerant",
        ids: [
            "kompressor_an_aus",
            "verdichter",
            "expansion_valve",
            "pressure_equalization",
            "hot_gas",
            "hot_gas_condenser",
            "kondensat",
            "verdampfer",
            "luefter",
            "ta",
            "ta2"
        ]
    },
    {
        key: "heating",
        ids: [
            "umwaelzpumpe",
            "umwaelzpumpe_an_aus",
            "durchfluss",
            "vorlauf_1",
            "vorlauf_2",
            "vorlauf_bh_1",
            "vorlauf_bh_2",
            "ruecklauf",
            "ruecklauf_2",
            "vorlauf_soll",
            "spread",
            "wasserdruck",
            "bypass"
        ]
    },
    {
        key: "hotwater",
        ids: [
            "speicher",
            "speicher_soll",
            "mischer",
            "buh_power"
        ]
    },
    {
        key: "info",
        ids: [
            "fehlercode",
            "betriebsmodus",
            "betriebsart",
            "thermische_leistung",
            "el_power",
            "cop",
            "t_room_is",
            "room_setpoint"
        ]
    }
];
// Values that exist for both buses are shown side by side (CAN left, UART right)
const $d067581fc0d59830$var$PAIRS = [
    [
        "ruecklauf",
        "ruecklauf_2"
    ],
    [
        "vorlauf_1",
        "vorlauf_2"
    ],
    [
        "vorlauf_bh_1",
        "vorlauf_bh_2"
    ]
];
const $d067581fc0d59830$var$CLOSE_PATH = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";
const $d067581fc0d59830$var$TEXTS = {
    de: {
        appearance: "Darstellung",
        devices: "Ger\xe4te",
        sensors: "Sensoren",
        layout: "Layout",
        animations: "Animationen",
        background: "Hintergrund",
        box: "Textfelder",
        text: "Text",
        show: "Hintergrund anzeigen",
        custom: "Eigene Farben verwenden",
        color: "Farbe",
        opacity: "Deckkraft",
        fill: "F\xfcllung",
        fill_opacity: "Deckkraft der F\xfcllung",
        border: "Rahmen",
        border_opacity: "Deckkraft des Rahmens",
        value_color: "Textfarbe",
        label_color: "Farbe der Beschriftung",
        custom_help: "Aus: es gilt der Stil des Layouts.",
        canDevice: "CAN-Ger\xe4t",
        uartDevice: "UART-Ger\xe4t",
        devices_help: "Die Ger\xe4te schr\xe4nken die Auswahl der Sensoren ein.",
        assigned: "zugeordnet",
        group_by: "Gruppieren nach",
        by_function: "Funktion",
        by_bus: "Bus (CAN / UART)",
        search: "Suchen",
        clear: "Leeren",
        no_match: "Keine Treffer",
        refrigerant: "K\xe4ltekreis",
        heating: "Heizwasser",
        hotwater: "Warmwasser und Speicher",
        info: "Info und Betrieb",
        other: "Weitere",
        bus_can: "CAN",
        bus_uart: "UART",
        bus_other: "Extern / ohne Ger\xe4t",
        unit_warning: "Einheit {actual}, erwartet {expected}",
        drag_hint: "Ziehen zum Sortieren"
    },
    en: {
        appearance: "Appearance",
        devices: "Devices",
        sensors: "Sensors",
        layout: "Layout",
        animations: "Animations",
        background: "Background",
        box: "Text boxes",
        text: "Text",
        show: "Show background",
        custom: "Use custom colours",
        color: "Colour",
        opacity: "Opacity",
        fill: "Fill",
        fill_opacity: "Fill opacity",
        border: "Border",
        border_opacity: "Border opacity",
        value_color: "Text colour",
        label_color: "Label colour",
        custom_help: "Off: the style of the layout applies.",
        canDevice: "CAN device",
        uartDevice: "UART device",
        devices_help: "The devices narrow down the sensor choices.",
        assigned: "assigned",
        group_by: "Group by",
        by_function: "Function",
        by_bus: "Bus (CAN / UART)",
        search: "Search",
        clear: "Clear",
        no_match: "No matches",
        refrigerant: "Refrigerant circuit",
        heating: "Heating water",
        hotwater: "Hot water and tank",
        info: "Info and operation",
        other: "Other",
        bus_can: "CAN",
        bus_uart: "UART",
        bus_other: "External / no device",
        unit_warning: "Unit {actual}, expected {expected}",
        drag_hint: "Drag to reorder"
    }
};
class $d067581fc0d59830$export$70410bc798970b36 extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    async setConfig(config) {
        // HACK: This call is necessary to load the ha-entity-picker components.
        const cardHelpers = await window.loadCardHelpers();
        const entitiesCard = await cardHelpers.createCardElement({
            type: "entities",
            entities: []
        });
        await entitiesCard.constructor.getConfigElement();
        // HACK end
        // switch states are kept while the config is the one this editor just wrote; an external change (YAML) recomputes them
        if (JSON.stringify(config) !== this.lastFired) {
            const has = (g)=>!!g && Object.keys(g).some((k)=>k !== "show" && g[k] !== undefined);
            this.ui = {
                background: has(config.background),
                box: has(config.box),
                text: has(config.text)
            };
        }
        this.config = (0, $eb5cfe1dd9fe4e85$export$127f9a442b42d18)(config);
        this.svgItemConfig = (0, $eb5cfe1dd9fe4e85$export$9b06e6104ce35b16).map((svg_item)=>({
                ...svg_item,
                values: svg_item.values.map((value)=>({
                        ...value,
                        entityId: this.config.entities?.[value.id] || null
                    }))
            }));
    }
    willUpdate(changedProperties) {
        if (changedProperties.has("hass") && this.hass?.language) {
            const lang = this.hass.language.split("-")[0];
            this.language = (0, $eb5cfe1dd9fe4e85$export$d0d68bb9ed2c643d).includes(lang) ? lang : "en";
        }
    }
    tr(key) {
        return $d067581fc0d59830$var$TEXTS[this.language]?.[key] ?? $d067581fc0d59830$var$TEXTS.en[key] ?? key;
    }
    allValues() {
        return this.svgItemConfig.flatMap((item)=>item.values.map((value)=>({
                    item: item,
                    value: value
                })));
    }
    description(value) {
        return value.texts[this.language]?.desc || value.texts.en?.desc || value.id;
    }
    render() {
        if (!this.config) return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)``;
        const tabs = [
            "appearance",
            "devices",
            "sensors"
        ];
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <div class="card-config">
                <div class="tabs" role="tablist">
                    ${tabs.map((id)=>(0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
                        <button class="tab ${this.tab === id ? "active" : ""}" role="tab"
                            aria-selected=${this.tab === id}
                            @click=${()=>{
                this.tab = id;
            }}>
                            ${this.tr(id)}
                        </button>
                    `)}
                </div>
                ${this.tab === "appearance" ? this.renderAppearance() : (0, $f58f44579a4747ac$export$45b790e32b2810ee)}
                ${this.tab === "devices" ? this.renderDevices() : (0, $f58f44579a4747ac$export$45b790e32b2810ee)}
                ${this.tab === "sensors" ? this.renderSensors() : (0, $f58f44579a4747ac$export$45b790e32b2810ee)}
            </div>
        `;
    }
    // ---- tab: appearance ---------------------------------------------------------------------------------
    renderAppearance() {
        const opacity = {
            number: {
                min: 0,
                max: 100,
                step: 1,
                mode: "slider",
                unit_of_measurement: "%"
            }
        };
        const showBg = this.config.background?.show !== false;
        const bgOn = showBg && this.ui.background;
        const schema = [
            {
                name: "layout",
                selector: {
                    select: {
                        mode: "dropdown",
                        options: (0, $eb5cfe1dd9fe4e85$export$1ecca0613f5e56d2).map((l)=>({
                                value: l.id,
                                label: l.labels[this.language] ?? l.labels.en
                            }))
                    }
                }
            },
            {
                name: "animations",
                selector: {
                    boolean: {}
                }
            },
            {
                type: "expandable",
                name: "background",
                title: this.tr("background"),
                schema: [
                    {
                        name: "show",
                        selector: {
                            boolean: {}
                        }
                    },
                    {
                        name: "custom",
                        selector: {
                            boolean: {}
                        },
                        disabled: !showBg
                    },
                    {
                        name: "color",
                        selector: {
                            color_rgb: {}
                        },
                        disabled: !bgOn
                    },
                    {
                        name: "opacity",
                        selector: opacity,
                        disabled: !bgOn
                    }
                ]
            },
            {
                type: "expandable",
                name: "box",
                title: this.tr("box"),
                schema: [
                    {
                        name: "custom",
                        selector: {
                            boolean: {}
                        }
                    },
                    {
                        name: "fill",
                        selector: {
                            color_rgb: {}
                        },
                        disabled: !this.ui.box
                    },
                    {
                        name: "fill_opacity",
                        selector: opacity,
                        disabled: !this.ui.box
                    },
                    {
                        name: "border",
                        selector: {
                            color_rgb: {}
                        },
                        disabled: !this.ui.box
                    },
                    {
                        name: "border_opacity",
                        selector: opacity,
                        disabled: !this.ui.box
                    }
                ]
            },
            {
                type: "expandable",
                name: "text",
                title: this.tr("text"),
                schema: [
                    {
                        name: "custom",
                        selector: {
                            boolean: {}
                        }
                    },
                    {
                        name: "value_color",
                        selector: {
                            color_rgb: {}
                        },
                        disabled: !this.ui.text
                    },
                    {
                        name: "label_color",
                        selector: {
                            color_rgb: {}
                        },
                        disabled: !this.ui.text
                    }
                ]
            }
        ];
        const data = {
            layout: this.config.layout ?? (0, $eb5cfe1dd9fe4e85$export$cfaf3f619f4fde4d),
            animations: this.config.animations !== false,
            background: {
                show: showBg,
                custom: this.ui.background,
                opacity: 100,
                ...this.config.background ?? {}
            },
            box: {
                custom: this.ui.box,
                fill_opacity: 100,
                border_opacity: 100,
                ...this.config.box ?? {}
            },
            text: {
                custom: this.ui.text,
                ...this.config.text ?? {}
            }
        };
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <ha-form
                .hass=${this.hass}
                .data=${data}
                .schema=${schema}
                .computeLabel=${(s)=>this.labelFor(s)}
                .computeHelper=${(s)=>s.name === "custom" ? this.tr("custom_help") : ""}
                @value-changed=${this._appearanceChanged}>
            </ha-form>
        `;
    }
    labelFor(schema) {
        return this.tr(schema.name);
    }
    // Only values that differ from the defaults are written to the card config.
    static compact(group, defaults) {
        const result = {};
        for (const [key, value] of Object.entries(group ?? {})){
            if (key === "custom" || value === undefined || value === null || value === "") continue;
            if (JSON.stringify(value) === JSON.stringify(defaults[key])) continue;
            result[key] = value;
        }
        return Object.keys(result).length ? result : undefined;
    }
    _appearanceChanged(event) {
        event.stopPropagation();
        const data = event.detail.value;
        const compact = $d067581fc0d59830$export$70410bc798970b36.compact;
        // switching off resets everything below it
        const bg = {
            ...data.background
        };
        const ui = {
            ...this.ui
        };
        if (bg.show === false) {
            ui.background = false;
            delete bg.color;
            delete bg.opacity;
        } else {
            ui.background = !!bg.custom;
            if (!ui.background) {
                delete bg.color;
                delete bg.opacity;
            }
        }
        const box = {
            ...data.box
        };
        ui.box = !!box.custom;
        if (!ui.box) for (const key of [
            "fill",
            "fill_opacity",
            "border",
            "border_opacity"
        ])delete box[key];
        const text = {
            ...data.text
        };
        ui.text = !!text.custom;
        if (!ui.text) {
            delete text.value_color;
            delete text.label_color;
        }
        this.ui = ui;
        this._fire({
            ...this.config,
            layout: data.layout === (0, $eb5cfe1dd9fe4e85$export$cfaf3f619f4fde4d) ? undefined : data.layout,
            animations: data.animations === false ? false : undefined,
            background: compact(bg, {
                show: true,
                opacity: 100
            }),
            box: compact(box, {
                fill_opacity: 100,
                border_opacity: 100
            }),
            text: compact(text, {})
        });
    }
    // ---- tab: devices --------------------------------------------------------------------------------------
    renderDevices() {
        const assigned = Object.values(this.config.entities ?? {}).filter(Boolean).length;
        const total = this.allValues().length;
        const schema = [
            {
                name: "canDevice",
                selector: {
                    device: {}
                }
            },
            {
                name: "uartDevice",
                selector: {
                    device: {}
                }
            }
        ];
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <ha-form
                .hass=${this.hass}
                .data=${{
            canDevice: this.config.canDevice,
            uartDevice: this.config.uartDevice
        }}
                .schema=${schema}
                .computeLabel=${(s)=>this.tr(s.name)}
                @value-changed=${this._devicesChanged}>
            </ha-form>
            <p class="hint">${this.tr("devices_help")}</p>
            <p class="hint">${assigned} / ${total} ${this.tr("assigned")}</p>
        `;
    }
    _devicesChanged(event) {
        event.stopPropagation();
        const data = event.detail.value;
        this._fire({
            ...this.config,
            canDevice: data.canDevice,
            uartDevice: data.uartDevice
        });
    }
    // ---- tab: sensors / info ---------------------------------------------------------------------------------
    renderSensors() {
        const all = this.allValues();
        let groups;
        if (this.groupBy === "function") {
            const used = new Set();
            groups = $d067581fc0d59830$var$FUNCTION_GROUPS.map((g)=>{
                const entries = g.ids.map((id)=>all.find((e)=>e.value.id === id)).filter((e)=>!!e);
                entries.forEach((e)=>used.add(e.value.id));
                if (g.key === "info") entries.sort((a, b)=>this.infoOrder().indexOf(a.value.id) - this.infoOrder().indexOf(b.value.id));
                return {
                    key: g.key,
                    title: this.tr(g.key),
                    entries: entries
                };
            });
            const rest = all.filter((e)=>!used.has(e.value.id));
            if (rest.length) groups.push({
                title: this.tr("other"),
                entries: rest
            });
        } else groups = [
            {
                title: this.tr("bus_can"),
                entries: all.filter((e)=>e.value.device === "CAN")
            },
            {
                title: this.tr("bus_uart"),
                entries: all.filter((e)=>e.value.device === "UART")
            },
            {
                title: this.tr("bus_other"),
                entries: all.filter((e)=>!e.value.device)
            }
        ].filter((g)=>g.entries.length);
        const query = this.search.trim().toLowerCase();
        const matches = (e)=>{
            if (!query) return true;
            const entityName = e.value.entityId ? this.hass.states[e.value.entityId]?.attributes?.friendly_name ?? "" : "";
            return [
                this.description(e.value),
                e.value.id,
                e.value.entityId ?? "",
                entityName,
                e.value.device ?? ""
            ].join(" ").toLowerCase().includes(query);
        };
        const rendered = groups.map((group)=>this.renderGroup(group.title, group.entries, matches, query, group.key === "info" && this.groupBy === "function"));
        const anyMatch = groups.some((g)=>g.entries.some(matches));
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <div class="toolbar">
                <ha-selector
                    .hass=${this.hass}
                    .selector=${{
            select: {
                mode: "dropdown",
                options: [
                    {
                        value: "function",
                        label: this.tr("by_function")
                    },
                    {
                        value: "bus",
                        label: this.tr("by_bus")
                    }
                ]
            }
        }}
                    .label=${this.tr("group_by")}
                    .value=${this.groupBy}
                    @value-changed=${(e)=>{
            e.stopPropagation();
            this.groupBy = e.detail.value;
        }}>
                </ha-selector>
                <div class="search">
                    <ha-selector
                        .hass=${this.hass}
                        .selector=${{
            text: {}
        }}
                        .label=${this.tr("search")}
                        .required=${false}
                        .value=${this.search}
                        @value-changed=${(e)=>{
            e.stopPropagation();
            this.search = String(e.detail.value ?? "");
        }}>
                    </ha-selector>
                    ${this.search ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
                        <ha-icon-button class="clear" .label=${this.tr("clear")} .path=${$d067581fc0d59830$var$CLOSE_PATH}
                            @click=${()=>{
            this.search = "";
        }}></ha-icon-button>` : (0, $f58f44579a4747ac$export$45b790e32b2810ee)}
                </div>
            </div>
            ${rendered}
            ${query && !anyMatch ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<p class="hint">${this.tr("no_match")}</p>` : (0, $f58f44579a4747ac$export$45b790e32b2810ee)}
        `;
    }
    renderGroup(title, entries, matches, query, sortable = false) {
        const visible = entries.filter(matches);
        if (!visible.length) return 0, $f58f44579a4747ac$export$45b790e32b2810ee;
        const assigned = entries.filter((e)=>e.value.entityId).length;
        // CAN / UART pairs side by side (only in the grouping by function)
        const rows = [];
        const done = new Set();
        for (const e of visible){
            if (done.has(e.value.id)) continue;
            if (sortable && !query) {
                done.add(e.value.id);
                rows.push(this.renderSortableRow(e.item, e.value));
                continue;
            }
            const pair = this.groupBy === "function" ? $d067581fc0d59830$var$PAIRS.find((p)=>p.includes(e.value.id)) : undefined;
            const partner = pair ? visible.find((v)=>v.value.id === (pair[0] === e.value.id ? pair[1] : pair[0])) : undefined;
            if (pair && partner) {
                const [first, second] = pair[0] === e.value.id ? [
                    e,
                    partner
                ] : [
                    partner,
                    e
                ];
                done.add(first.value.id);
                done.add(second.value.id);
                rows.push((0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<div class="pair">${this.renderRow(first.item, first.value)}${this.renderRow(second.item, second.value)}</div>`);
            } else {
                done.add(e.value.id);
                rows.push(this.renderRow(e.item, e.value));
            }
        }
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <ha-expansion-panel outlined .header=${`${title} (${assigned}/${entries.length})`} ?expanded=${query !== ""}>
                <div class="rows">${rows}</div>
            </ha-expansion-panel>
        `;
    }
    infoOrder() {
        return (0, $eb5cfe1dd9fe4e85$export$e92e609e56507ea0)(this.config);
    }
    renderSortableRow(svg_item, value_item) {
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <div class="sortable"
                @dragover=${(ev)=>{
            if (this.dragId) ev.preventDefault();
        }}
                @drop=${(ev)=>this._dropInfo(ev, value_item.id)}>
                <span class="handle" draggable="true" title=${this.tr("drag_hint")}
                    @dragstart=${(ev)=>{
            this.dragId = value_item.id;
            ev.dataTransfer?.setData("text/plain", value_item.id);
            const row = ev.target.closest(".sortable");
            if (row) ev.dataTransfer?.setDragImage(row, 0, 0);
        }}
                    @dragend=${()=>{
            this.dragId = null;
        }}>⠿</span>
                <div class="grow">${this.renderRow(svg_item, value_item)}</div>
            </div>`;
    }
    _dropInfo(ev, targetId) {
        ev.preventDefault();
        const from = this.dragId;
        this.dragId = null;
        if (!from || from === targetId) return;
        const old = this.infoOrder();
        const order = old.filter((id)=>id !== from);
        const at = order.indexOf(targetId);
        order.splice(old.indexOf(from) < old.indexOf(targetId) ? at + 1 : at, 0, from);
        const ids = (0, $eb5cfe1dd9fe4e85$export$9b06e6104ce35b16).filter((i)=>i.reorderable).flatMap((i)=>i.values.map((v)=>v.id));
        const isDefault = order.every((id, n)=>id === ids[n]);
        this._fire({
            ...this.config,
            info_entities: isDefault ? undefined : order.map((key)=>({
                    key: key
                }))
        });
    }
    renderRow(svg_item, value_item) {
        const bus = value_item.device ? ` \xb7 ${value_item.device}` : "";
        const warning = this.unitWarning(value_item);
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <div class="row">
                <ha-selector
                    .hass=${this.hass}
                    .selector=${{
            entity: {
                include_entities: this.getRelevantEntityIds(svg_item, value_item)
            }
        }}
                    .label=${this.description(value_item) + bus}
                    .required=${false}
                    .value=${value_item.entityId}
                    @value-changed=${this._entityChanged}
                    data-id=${value_item.id}>
                </ha-selector>
                ${warning ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<div class="warning">${warning}</div>` : (0, $f58f44579a4747ac$export$45b790e32b2810ee)}
            </div>
        `;
    }
    // Warns when the chosen entity reports another unit than the card expects (e.g. °F instead of °C).
    unitWarning(value_item) {
        if (!value_item.entityId || value_item.unit === undefined) return "";
        const state = this.hass.states[value_item.entityId];
        const actual = state?.attributes?.unit_of_measurement;
        const expected = $d067581fc0d59830$var$ensureArray(value_item.unit);
        if (!state || !actual || expected.includes(actual)) return "";
        return this.tr("unit_warning").replace("{actual}", String(actual)).replace("{expected}", expected.join(", "));
    }
    getRelevantEntityIds(svg_item, value_item) {
        const relevantEntityIds = [];
        const targetDeviceId = value_item.device === "UART" ? this.config.uartDevice : this.config.canDevice;
        const targetUnit = $d067581fc0d59830$var$ensureArray(value_item.unit);
        for(const entityId in this.hass.states){
            if (!Object.prototype.hasOwnProperty.call(this.hass.states, entityId)) continue;
            const entity = this.hass.states[entityId];
            const domain = entityId.substring(0, entityId.indexOf('.'));
            if (value_item.device && targetDeviceId) {
                const entityRegistryEntry = this.hass.entities[entityId];
                if (!entityRegistryEntry || entityRegistryEntry.device_id !== targetDeviceId) continue;
            }
            if (value_item.domain !== undefined && value_item.domain !== domain) continue;
            if (domain !== "select" && domain !== "input_number") {
                const unitOfMeasurement = entity.attributes.unit_of_measurement;
                if (!targetUnit.includes(unitOfMeasurement)) continue;
            }
            relevantEntityIds.push(entityId);
        }
        // never drop the entity that is already selected, otherwise the picker reports "unknown entity"
        if (value_item.entityId && this.hass.states[value_item.entityId] && !relevantEntityIds.includes(value_item.entityId)) relevantEntityIds.push(value_item.entityId);
        return relevantEntityIds;
    }
    _entityChanged(event) {
        event.stopPropagation();
        const picker = event.target;
        const updatedEntities = {
            ...this.config.entities
        };
        const entityId = picker.getAttribute("data-id");
        if (entityId) {
            const value = event.detail.value;
            if (value) updatedEntities[entityId] = value;
            else delete updatedEntities[entityId]; // cleared with the cross
        }
        this.svgItemConfig = this.svgItemConfig.map((item)=>({
                ...item,
                values: item.values.map((v)=>({
                        ...v,
                        entityId: updatedEntities[v.id] || null
                    }))
            }));
        this._fire({
            ...this.config,
            entities: $d067581fc0d59830$export$70410bc798970b36.sortRecordBySvgOrder(updatedEntities, this.svgItemConfig)
        });
    }
    _fire(config) {
        const clean = (c)=>{
            const out = {};
            for (const [key, value] of Object.entries(c))if (value !== undefined && value !== null && value !== "") out[key] = value;
            return out;
        };
        // this.config stays in the flat working form; what is stored (and shown in YAML) is the three-section form
        this.config = clean(config);
        const stored = clean((0, $eb5cfe1dd9fe4e85$export$fa8157df3262779b)(this.config));
        this.lastFired = JSON.stringify(stored);
        this.dispatchEvent(new CustomEvent('config-changed', {
            detail: {
                config: stored
            },
            bubbles: true,
            composed: true
        }));
    }
    static sortRecordBySvgOrder(data, svgItems) {
        const dataKeys = Object.keys(data);
        const sortedEntries = svgItems.flatMap((item)=>item.values).filter((value)=>dataKeys.includes(value.id)).map((value)=>[
                value.id,
                data[value.id]
            ]);
        return Object.fromEntries(sortedEntries);
    }
    static get styles() {
        return (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
            .sortable { display: flex; align-items: center; gap: 4px; }
            .sortable .grow { flex: 1; min-width: 0; }
            .handle { cursor: grab; user-select: none; padding: 0 6px; font-size: 20px; color: var(--secondary-text-color); }
            .card-config {
                display: flex;
                flex-direction: column;
                padding: 16px;
                gap: 8px;
            }
            .tabs {
                display: flex;
                gap: 4px;
                border-bottom: 1px solid var(--divider-color);
                margin-bottom: 8px;
                overflow-x: auto;
            }
            .tab {
                background: none;
                border: none;
                border-bottom: 2px solid transparent;
                color: var(--secondary-text-color);
                cursor: pointer;
                font: inherit;
                font-weight: 500;
                padding: 10px 14px;
            }
            .tab.active {
                color: var(--primary-color);
                border-bottom-color: var(--primary-color);
            }
            .toolbar {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 8px;
            }
            .rows {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
                gap: 8px 12px;
                padding: 8px 0;
            }
            .pair {
                grid-column: 1 / -1;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
                gap: 8px 12px;
            }
            .search {
                position: relative;
            }
            .search ha-selector {
                display: block;
            }
            .search .clear {
                position: absolute;
                right: 4px;
                top: 50%;
                transform: translateY(-50%);
                --mdc-icon-button-size: 36px;
                z-index: 1;
            }
            .row ha-selector, ha-selector, ha-form {
                display: block;
            }
            ha-expansion-panel {
                margin-top: 8px;
            }
            .warning {
                color: var(--warning-color, orange);
                font-size: 12px;
                padding: 2px 4px;
            }
            .hint {
                color: var(--secondary-text-color);
                font-size: 13px;
                margin: 4px 2px;
            }
        `;
    }
    constructor(...args){
        super(...args), this.language = "en", this.svgItemConfig = [], this.tab = "appearance", this.groupBy = "function", this.search = "", // UI-only switches ("use own colours"); they are not stored, the colours themselves are the setting
        this.ui = {
            background: false,
            box: false,
            text: false
        }, this.lastFired = "", // ---- order of the info box (drag and drop, stored as the order of info_entities) ------------------------------------------
        this.dragId = null;
    }
}
(0, $656ade2323340eda$export$71511d61b312f219)([
    (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        attribute: false
    })
], $d067581fc0d59830$export$70410bc798970b36.prototype, "hass", void 0);
(0, $656ade2323340eda$export$71511d61b312f219)([
    (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        type: Object
    })
], $d067581fc0d59830$export$70410bc798970b36.prototype, "config", void 0);
(0, $656ade2323340eda$export$71511d61b312f219)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $d067581fc0d59830$export$70410bc798970b36.prototype, "language", void 0);
(0, $656ade2323340eda$export$71511d61b312f219)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $d067581fc0d59830$export$70410bc798970b36.prototype, "svgItemConfig", void 0);
(0, $656ade2323340eda$export$71511d61b312f219)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $d067581fc0d59830$export$70410bc798970b36.prototype, "tab", void 0);
(0, $656ade2323340eda$export$71511d61b312f219)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $d067581fc0d59830$export$70410bc798970b36.prototype, "groupBy", void 0);
(0, $656ade2323340eda$export$71511d61b312f219)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $d067581fc0d59830$export$70410bc798970b36.prototype, "search", void 0);
(0, $656ade2323340eda$export$71511d61b312f219)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $d067581fc0d59830$export$70410bc798970b36.prototype, "ui", void 0);




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $107bb7d062dde330$export$9ba3b3f20a85bfa = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
}, $107bb7d062dde330$export$99b43ad1ed32e735 = (t)=>(...e)=>({
            _$litDirective$: t,
            values: e
        });
class $107bb7d062dde330$export$befdefbdce210f91 {
    constructor(t){}
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AT(t, e, i) {
        this._$Ct = t, this._$AM = e, this._$Ci = i;
    }
    _$AS(t, e) {
        return this.update(t, e);
    }
    update(t, e) {
        return this.render(...e);
    }
}




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class $a4df01ff0b0132fe$export$3bebd1f0e3943985 extends (0, $107bb7d062dde330$export$befdefbdce210f91) {
    constructor(i){
        if (super(i), this.it = (0, $f58f44579a4747ac$export$45b790e32b2810ee), i.type !== (0, $107bb7d062dde330$export$9ba3b3f20a85bfa).CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
    }
    render(r) {
        if (r === (0, $f58f44579a4747ac$export$45b790e32b2810ee) || null == r) return this._t = void 0, this.it = r;
        if (r === (0, $f58f44579a4747ac$export$9c068ae9cc5db4e8)) return r;
        if ("string" != typeof r) throw Error(this.constructor.directiveName + "() called with a non-string value");
        if (r === this.it) return this._t;
        this.it = r;
        const s = [
            r
        ];
        return s.raw = s, this._t = {
            _$litType$: this.constructor.resultType,
            strings: s,
            values: []
        };
    }
}
$a4df01ff0b0132fe$export$3bebd1f0e3943985.directiveName = "unsafeHTML", $a4df01ff0b0132fe$export$3bebd1f0e3943985.resultType = 1;
const $a4df01ff0b0132fe$export$b6e69390c23686fb = (0, $107bb7d062dde330$export$99b43ad1ed32e735)($a4df01ff0b0132fe$export$3bebd1f0e3943985);


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class $33e813419ea8f3a8$var$t extends (0, $a4df01ff0b0132fe$export$3bebd1f0e3943985) {
}
$33e813419ea8f3a8$var$t.directiveName = "unsafeSVG", $33e813419ea8f3a8$var$t.resultType = 2;
const $33e813419ea8f3a8$export$1cb98903879b8bf5 = (0, $107bb7d062dde330$export$99b43ad1ed32e735)($33e813419ea8f3a8$var$t);




var $a399cc6bbb0eb26a$export$4661a56c3a27d933 = /*#__PURE__*/ function(DashboardState) {
    DashboardState["Loading"] = "loading";
    DashboardState["Ready"] = "ready";
    DashboardState["Error"] = "error";
    return DashboardState;
}({});
class $a399cc6bbb0eb26a$export$9de59f1af66e4f03 extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    setConfig(config) {
        this.config = (0, $eb5cfe1dd9fe4e85$export$127f9a442b42d18)(config);
        this.svg_item_config = (0, $eb5cfe1dd9fe4e85$export$9b06e6104ce35b16).map((svg_item)=>({
                ...svg_item,
                values: svg_item.values.map((value)=>({
                        ...value,
                        entityId: this.config.entities?.[value.id] || null
                    }))
            }));
        if (this.hasUpdated && this._state === "ready") this.updateAnimations();
        // Layout switched while the card is already shown (e.g. in the card editor): reload the SVG.
        if (this.hasUpdated && this.loadedLayoutFile !== null && ((0, $eb5cfe1dd9fe4e85$export$6fb81034e128eb0)(this.config.layout) !== this.loadedLayoutFile || this.styleSignature() !== this.loadedStyleSignature)) {
            this.clickHandlersAdded = false;
            this._state = "loading";
            this.svgContent = null;
            this.updateComplete.then(()=>this.createDashboard());
        }
    }
    willUpdate(changed) {
        if (changed.has("hass") && this.hass?.language) {
            // Use config language if set, otherwise use Home Assistant language
            const configLang = this.config?.language;
            const lang = configLang || this.hass.language.split("-")[0];
            this.language = (0, $eb5cfe1dd9fe4e85$export$d0d68bb9ed2c643d).includes(lang) ? lang : "de";
        }
    }
    async firstUpdated() {
        await this.createDashboard();
    }
    async createDashboard() {
        const file = (0, $eb5cfe1dd9fe4e85$export$6fb81034e128eb0)(this.config?.layout);
        const url = this.makeURL(file);
        try {
            const response = await fetch(url, {
                cache: "no-cache"
            }); // always revalidate, layouts are updated independently of the JS
            if (!response.ok) throw new Error(`Failed to fetch '${url}' (${response.status})`);
            const rawSvgString = await response.text();
            this.loadedLayoutFile = file;
            this.loadedStyleSignature = this.styleSignature();
            this.svgContent = this.createSvgWithLabels(rawSvgString);
            this._state = "ready";
        } catch (e) {
            console.error(e);
            this.svgContent = null;
        }
    }
    addClickHandlers() {
        const setClickHandler = (elementId, entityId)=>{
            const element = this.shadowRoot.getElementById(elementId);
            if (element && entityId) {
                element.addEventListener("click", ()=>{
                    this.handleStateClick(entityId);
                });
                element.setAttribute("cursor", "pointer");
            }
        };
        this.svg_item_config.forEach((svg_item)=>{
            svg_item.values.forEach((value_item)=>{
                if (value_item.valueBox && value_item.entityId) {
                    const id = `${value_item.valueBox.id}_text`;
                    setClickHandler(id, value_item.entityId);
                }
            });
        });
        const pressureEqualizationEntityId = this.findEntityIdById(this.svg_item_config, "pressure_equalization");
        // Layouts without status texts show on/off on the symbol itself; clicking it opens the details.
        setClickHandler("compressor-symbol", this.findEntityIdById(this.svg_item_config, "kompressor_an_aus"));
        setClickHandler("pump-symbol", this.findEntityIdById(this.svg_item_config, "umwaelzpumpe_an_aus"));
        setClickHandler("eev-symbol", pressureEqualizationEntityId);
    }
    updated(changedProperties) {
        if (this.isPanelView()) this.setAttribute('panel-view', '');
        else this.removeAttribute('panel-view');
        if (this._state == "ready") {
            this.updateLabels();
            this.updateOpacity();
            this.updateAnimations();
            this.updateDynamicStyle();
            if (!this.clickHandlersAdded) {
                this.addClickHandlers();
                this.clickHandlersAdded = true;
            }
        }
    }
    static getConfigElement() {
        return document.createElement("hpsu-dashboard-card-editor");
    }
    static{
        this.styles = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
        .card-config {
            display: flex;
            flex-direction: column;
            padding: 16px;
        }
        h2 {
            font-size: 20px;
            margin-bottom: 16px;
        }
        paper-input {
            margin-bottom: 16px;
        }

        svg {
            display: block;
            width: 100%;
            height: 100%;
        }

        :host([panel-view]) {
            display: block;
            max-height: 100vh;
            overflow: auto;
        }

        :host([panel-view]) svg {
            display: block;
            width: calc(100vw - var(--mdc-drawer-width, 256px));
            max-height: 100vh;
            overflow: auto;
        }

        @media (min-width: 768px) {
            :host([panel-view]) svg {
                max-height: calc(100vh - var(--header-height, 64px));
            }
        }

        @media (max-width: 767px) {
            :host([panel-view]) svg {
                width: auto;
                height: calc(100vh - var(--header-height, 56px));
            }
        }
        `;
    }
    render() {
        return this.renderContent();
    }
    renderContent() {
        switch(this._state){
            case "error":
                return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`Fehler beim Laden des HPSU Dashboards.`;
            case "ready":
                return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<ha-card>${this.svgContent ? (0, $33e813419ea8f3a8$export$1cb98903879b8bf5)(this.svgContent) : (0, $f58f44579a4747ac$export$45b790e32b2810ee)}</ha-card>`;
            default:
                return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<ha-card></ha-card>`;
        }
    }
    createSvgWithLabels(svgString) {
        if (!svgString) return null;
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgString, "image/svg+xml");
        const svgElement = svgDoc.documentElement;
        if (!svgElement || svgElement.tagName.toLowerCase() !== "svg") {
            console.error("The SVG was not parsed correctly.");
            return null;
        }
        this.layoutStyle = {
            radius: svgElement.getAttribute("data-box-radius") ?? undefined,
            fill: svgElement.getAttribute("data-box-fill") ?? undefined,
            stroke: svgElement.getAttribute("data-box-stroke") ?? undefined,
            strokeWidth: svgElement.getAttribute("data-box-stroke-width") ?? undefined,
            text: svgElement.getAttribute("data-text-color") ?? undefined,
            label: svgElement.getAttribute("data-label-color") ?? undefined,
            // the SVG styles the states itself (CSS on [data-state]); the card only sets the state
            ownStates: svgElement.hasAttribute("data-own-state-style")
        };
        this.applyStyleOverrides(svgElement);
        svgElement.setAttribute("preserveAspectRatio", "xMidYMid meet");
        svgElement.style.display = "block";
        this.createStateLabels(svgDoc);
        return new XMLSerializer().serializeToString(svgElement);
    }
    // Style overrides from the card config (editor tab "appearance"). They only replace single values of the
    // layout; the defaults and the look stay in the SVG.
    styleSignature() {
        const c = this.config ?? {};
        return JSON.stringify([
            c.background,
            c.box,
            c.text
        ]);
    }
    parseColor(value) {
        if (!value) return undefined;
        const hex = value.trim().match(/^#([0-9a-f]{3,8})$/i);
        if (hex) {
            let h = hex[1];
            if (h.length === 3 || h.length === 4) h = h.split("").map((x)=>x + x).join("");
            const n = parseInt(h.slice(0, 6), 16);
            return [
                n >> 16 & 255,
                n >> 8 & 255,
                n & 255,
                h.length === 8 ? parseInt(h.slice(6, 8), 16) / 255 : 1
            ];
        }
        const m = value.match(/rgba?\(([^)]+)\)/);
        if (m) {
            const p = m[1].split(",").map((x)=>parseFloat(x));
            return [
                p[0],
                p[1],
                p[2],
                p[3] ?? 1
            ];
        }
        return undefined;
    }
    // colour from the config (or the layout's own colour if only the opacity is set) with the opacity applied
    composeColor(color, opacity, base) {
        if (color === undefined && opacity === undefined) return undefined;
        const own = Array.isArray(color) && color.length >= 3 ? color.map(Number) : undefined;
        const fallback = this.parseColor(base);
        const rgb = own ?? fallback?.slice(0, 3);
        if (!rgb) return undefined;
        const alpha = opacity !== undefined ? Math.min(100, Math.max(0, Number(opacity))) / 100 : own ? 1 : fallback?.[3] ?? 1;
        return alpha >= 1 ? `rgb(${rgb[0]},${rgb[1]},${rgb[2]})` : `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${alpha})`;
    }
    applyStyleOverrides(svgElement) {
        const cfg = this.config ?? {};
        if (cfg.box) {
            const fill = this.composeColor(cfg.box.fill, cfg.box.fill_opacity, this.layoutStyle.fill);
            const border = this.composeColor(cfg.box.border, cfg.box.border_opacity, this.layoutStyle.stroke);
            if (fill) this.layoutStyle.fill = fill;
            if (border) this.layoutStyle.stroke = border;
        }
        if (cfg.text) {
            const value = this.composeColor(cfg.text.value_color, undefined, undefined);
            const label = this.composeColor(cfg.text.label_color, undefined, undefined);
            if (value) this.layoutStyle.text = value;
            if (label) this.layoutStyle.label = label;
        }
        // background: the SVG draws it from --bg-color / --bg-opacity (with its own defaults)
        const style = svgElement.style;
        if (cfg.background?.show === false) svgElement.setAttribute("data-bg", "off");
        else if (cfg.background) {
            const color = this.composeColor(cfg.background.color, undefined, undefined);
            if (color) style.setProperty("--bg-color", color);
            if (cfg.background.opacity !== undefined) style.setProperty("--bg-opacity", String(Math.min(100, Math.max(0, Number(cfg.background.opacity))) / 100));
        }
    }
    strToFloat(str) {
        if (str === "" || str === undefined || str === null || str.trim() === "") return 0;
        return parseFloat(str);
    }
    createStateLabels(svgDoc) {
        const haCard = this.haCardElement;
        if (!haCard) return;
        let style = getComputedStyle(haCard);
        let rootStyle = getComputedStyle(document.body); // Oder document.documentElement
        let backgroundColor = style.getPropertyValue('--ha-card-background').trim();
        let borderColor = style.getPropertyValue('--ha-card-border-color').trim();
        if (borderColor === "") borderColor = style.getPropertyValue('--divider-color').trim();
        if (borderColor === "") borderColor = '#000000ff';
        let borderWidth = style.getPropertyValue('--ha-card-border-width').trim();
        let globalWidth = rootStyle.getPropertyValue('--ha-card-border-width').trim();
        console.log("global-width: " + globalWidth + ", " + this.strToFloat(borderWidth) + "|" + borderWidth);
        if (this.strToFloat(borderWidth) === 0) {
            if (backgroundColor === "") borderWidth = "5px";
            else borderWidth = "0px";
        }
        if (backgroundColor === "") backgroundColor = "none";
        //const borderWidth = "5px";
        let borderRadius = style.getPropertyValue('--ha-card-border-radius').trim();
        /*if (parseFloat(borderRadius) === 0) {
            let rootStyle = getComputedStyle(document.body); // Oder document.documentElement
            let globalRadius = rootStyle.getPropertyValue('--ha-card-border-radius').trim();
            borderRadius = "10px"; //globalRadius;
        }*/ const secondaryTextColor = this.layoutStyle.label ?? (style.getPropertyValue('--secondary-text-color').trim() || '#808080');
        console.log("bg-color:" + backgroundColor + "|radius: " + borderRadius + "|border-color: " + borderColor + "|border-width:" + borderWidth);
        // A layout may bring its own box style (rounded corners, colours); it wins over the HA theme.
        if (this.layoutStyle.radius !== undefined) borderRadius = this.layoutStyle.radius;
        if (this.layoutStyle.fill !== undefined) backgroundColor = this.layoutStyle.fill;
        if (this.layoutStyle.stroke !== undefined) borderColor = this.layoutStyle.stroke;
        if (this.layoutStyle.strokeWidth !== undefined) borderWidth = this.layoutStyle.strokeWidth;
        let currentBackgroundColor = backgroundColor;
        this.svg_item_config.forEach((svg_item)=>{
            const group = svgDoc.getElementById(svg_item.group_id ?? "");
            svg_item.labelBox = svg_item.label_rect_id ? svgDoc.getElementById(svg_item.label_rect_id) : null;
            // Create label text
            if (group && svg_item.labelBox) {
                svg_item.labelBox.setAttribute("fill", backgroundColor);
                svg_item.labelBox.setAttribute("stroke", borderColor);
                svg_item.labelBox.setAttribute("stroke-width", borderWidth);
                svg_item.labelBox.setAttribute("rx", borderRadius);
                svg_item.labelBox.setAttribute("ry", borderRadius);
                const labelText = this.createText(svg_item.labelBox);
                group.appendChild(labelText);
                labelText.setAttribute("font-size", "35");
                labelText.setAttribute("fill", secondaryTextColor);
                labelText.textContent = svg_item.texts?.[this.language] ? svg_item.texts[this.language].label : svg_item.group_id + "<missing>";
                this.layoutText(labelText, svg_item.labelBox, "middle", 3);
            }
            // Create parent rect with round corners
            var roundCorners = this.strToFloat(borderRadius) > 0;
            if (svg_item.visual_container && group && roundCorners) {
                const bbox = this.getBBox(group);
                const parent_box = this.createRect(svg_item.group_id);
                parent_box.setAttribute("x", bbox.x.toString());
                parent_box.setAttribute("y", bbox.y.toString());
                parent_box.setAttribute("width", bbox.width.toString());
                parent_box.setAttribute("height", bbox.height.toString());
                parent_box.setAttribute("fill", backgroundColor);
                parent_box.setAttribute("stroke", borderColor);
                parent_box.setAttribute("stroke-width", borderWidth);
                parent_box.setAttribute("rx", borderRadius);
                parent_box.setAttribute("ry", borderRadius);
                group.insertBefore(parent_box, group.firstChild);
                currentBackgroundColor = "none";
            }
            const hadLabel = !!svg_item.labelBox;
            if (roundCorners && svg_item.labelBox) this.removeSVGElement(svg_item.labelBox);
            // With a layout-owned rounded container the single frame is drawn by the container;
            // inner value boxes get no stroke of their own, only a thin divider line on top.
            const ownFrame = this.layoutStyle.radius !== undefined && currentBackgroundColor === "none";
            // Create value texts
            svg_item.values.forEach((value_item)=>{
                value_item.valueBox = svgDoc.getElementById(value_item.value_rect_id ?? "");
                if (value_item.valueBox) {
                    let currentBorderColor = borderColor;
                    value_item.valueBox.setAttribute("fill", currentBackgroundColor);
                    value_item.valueBox.setAttribute("stroke", ownFrame ? "none" : currentBorderColor);
                    value_item.valueBox.setAttribute("stroke-width", borderWidth);
                    //svg_item.valueBox.setAttribute("rx", borderRadius);
                    //svg_item.valueBox.setAttribute("ry", borderRadius);
                    if (group && ownFrame && (hadLabel || svg_item.reorderable || svg_item.values.indexOf(value_item) > 0)) {
                        const box = value_item.valueBox;
                        const bx = this.strToFloat(box.getAttribute("x") ?? "");
                        const by = this.strToFloat(box.getAttribute("y") ?? "");
                        const bw = this.strToFloat(box.getAttribute("width") ?? "");
                        const divider = document.createElementNS("http://www.w3.org/2000/svg", "line");
                        divider.setAttribute("id", `${value_item.value_rect_id}_divider`);
                        divider.setAttribute("x1", bx.toString());
                        divider.setAttribute("x2", (bx + bw).toString());
                        divider.setAttribute("y1", by.toString());
                        divider.setAttribute("y2", by.toString());
                        divider.setAttribute("stroke", borderColor);
                        divider.setAttribute("stroke-width", "1.5");
                        divider.setAttribute("stroke-opacity", "0.6");
                        const boxTransform = box.getAttribute("transform");
                        if (boxTransform) divider.setAttribute("transform", boxTransform);
                        group.appendChild(divider);
                    }
                    if (group) {
                        value_item.entityId = this.config.entities?.[value_item.id] ?? null;
                        const valueText = this.createText(value_item.valueBox);
                        group.appendChild(valueText);
                    } else console.warn(`Rect with ID ${value_item.value_rect_id} parent not found.`);
                }
            });
        });
    }
    removeSVGElement(childElement) {
        const parentElement = childElement.parentElement;
        if (parentElement) parentElement.removeChild(childElement);
    }
    getBBox(group) {
        const clonedGroup = group.cloneNode(true);
        const cleanupCallback = (child, parent)=>{
            const tagName = child.tagName.toLowerCase();
            if (tagName === 'path') {
                parent.removeChild(child);
                return true;
            }
            if (tagName === 'rect') child.setAttribute('fill', 'rgba(0, 0, 0, 0.01)');
            return false;
        };
        this.processNode(clonedGroup, cleanupCallback);
        const tempSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        tempSvg.style.cssText = `
            position: absolute;
            opacity: 0;
            pointer-events: none;
            width: 0;
            height: 0;
            overflow: hidden;
        `;
        tempSvg.appendChild(clonedGroup);
        this.shadowRoot.appendChild(tempSvg);
        try {
            return clonedGroup.getBBox();
        } finally{
            this.shadowRoot.removeChild(tempSvg);
        }
    }
    processNode(node, callback) {
        for(let i = node.children.length - 1; i >= 0; i--){
            const child = node.children[i];
            if (child.tagName.toLowerCase() === 'g') this.processNode(child, callback);
            else {
                const wasRemoved = callback(child, node);
                if (wasRemoved) continue;
            }
        }
    }
    createText(box) {
        const textText = document.createElementNS("http://www.w3.org/2000/svg", "text");
        textText.id = `${box.id}_text`;
        textText.setAttribute("dominant-baseline", "middle");
        textText.setAttribute("stroke-width", "1");
        const transform = box.getAttribute('transform');
        if (transform) textText.setAttribute("transform", transform);
        return textText;
    }
    createRect(group_id) {
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.id = `${group_id}_rect`;
        return rect;
    }
    layoutText(text, box, align, yOffset) {
        const xPos = parseFloat(box.getAttribute('x') ?? "");
        const yPos = parseFloat(box.getAttribute('y') ?? "");
        const width = parseFloat(box.getAttribute('width') ?? "");
        const height = parseFloat(box.getAttribute('height') ?? "");
        if (align == "left") {
            text.setAttribute("x", xPos.toString());
            text.setAttribute("text-anchor", "start");
        } else {
            text.setAttribute("x", (xPos + width / 2).toString());
            text.setAttribute("text-anchor", "middle");
        }
        if (yOffset != undefined) text.setAttribute("y", (yPos + height / 2 + yOffset).toString());
    }
    updateLabels() {
        const haCard = this.haCardElement;
        if (!haCard) return;
        if (this.config) {
            if (this.svg_item_config) {
                let style = getComputedStyle(haCard);
                const primaryTextColor = this.layoutStyle.text ?? (style.getPropertyValue('--primary-text-color').trim() || 'black');
                this.svg_item_config.forEach((svg_item)=>{
                    svg_item.values.forEach((value_item)=>{
                        const newState = value_item.entityId ? this.hass.states[value_item.entityId] : null;
                        const parentBox = svg_item.parent ? this.shadowRoot.getElementById(svg_item.parent) : null;
                        if (parentBox) parentBox.style.display = newState ? "block" : "none";
                        // optional value without entity: do not leave an empty box behind.
                        // value_item.valueBox belongs to the parsed SVG document, so look up the live element.
                        const liveBox = value_item.optional === true && value_item.value_rect_id ? this.shadowRoot.getElementById(value_item.value_rect_id) : null;
                        if (liveBox) {
                            liveBox.style.display = newState ? "" : "none";
                            const liveDivider = this.shadowRoot.getElementById(`${value_item.value_rect_id}_divider`);
                            if (liveDivider) liveDivider.style.display = newState ? "" : "none";
                        }
                        const id = `${value_item.value_rect_id}_text`;
                        const valueText = this.shadowRoot.querySelector(`#${id}`);
                        if (valueText) {
                            const fontSize = svg_item.fontSize || "56";
                            if (!newState) {
                                valueText.textContent = "N/D";
                                this.textState(valueText, "na", {
                                    "fill": "orange",
                                    "font-size": "30px"
                                });
                                valueText.setAttribute("display", value_item.optional === true ? "none" : "block");
                            } else if (newState.state == "unknown" || newState.state == "unavailable") {
                                valueText.textContent = "N/A";
                                this.textState(valueText, "unavailable", {
                                    "fill": "orange",
                                    "font-size": "30px"
                                });
                            } else {
                                let entityState = newState.state || "--";
                                valueText.setAttribute("font-size", fontSize);
                                if (this.isBooleanSensor(value_item.entityId)) {
                                    const lang_map = (0, $eb5cfe1dd9fe4e85$export$f8cda7abf1aa048)[this.language];
                                    valueText.textContent = entityState === "on" ? lang_map.on : entityState === "off" ? lang_map.off : "<invalid>";
                                    this.textState(valueText, entityState === "on" ? "on" : "off", {
                                        "fill": entityState === "on" ? "yellow" : "silver"
                                    });
                                } else {
                                    entityState = this.formatNumber(newState, svg_item.digits ?? 1);
                                    if (entityState == "Warmwasserbereitung") entityState = "Warmwasser";
                                    if (value_item.texts[this.language].suffix) entityState = value_item.texts[this.language].suffix + entityState;
                                    valueText.textContent = entityState;
                                    if (value_item.id != "fehlercode" || value_item.texts[this.language].suffix == "Fehlercode: " && "Kein Fehler" || value_item.texts[this.language].suffix == "Error code: " && "No Error" || value_item.texts[this.language].suffix == "Codice errore: " && "Nessun errore") this.textState(valueText, "normal", {
                                        "fill": primaryTextColor
                                    });
                                    else this.textState(valueText, "error", {
                                        "fill": "red"
                                    });
                                }
                            }
                            this.layoutText(valueText, value_item.valueBox, value_item.valueBox.getAttribute("data-align") ?? svg_item.align, svg_item.offset);
                        } else if (value_item.value_rect_id) console.warn("Value text not found: " + value_item.entityId);
                    });
                    if (svg_item.reorderable) this.layoutRows(svg_item);
                });
            }
        }
    }
    // Rows of a reorderable box (info box): configured order, only the shown rows, packed from the top at their normal height.
    // The container shrinks to the shown rows.
    layoutRows(svg_item) {
        const root = this.shadowRoot;
        const slots = svg_item.values.filter((v)=>v.valueBox).map((v)=>({
                y: parseFloat(v.valueBox.getAttribute("y")),
                h: parseFloat(v.valueBox.getAttribute("height"))
            })).sort((a, b)=>a.y - b.y);
        const byId = new Map(svg_item.values.map((v)=>[
                v.id,
                v
            ]));
        let k = 0;
        for (const id of (0, $eb5cfe1dd9fe4e85$export$e92e609e56507ea0)(this.config)){
            const v = byId.get(id);
            if (!v || !v.value_rect_id) continue;
            const rect = root.getElementById(v.value_rect_id);
            const text = root.getElementById(`${v.value_rect_id}_text`);
            const divider = root.getElementById(`${v.value_rect_id}_divider`);
            const shown = !v.optional || !!v.entityId && !!this.hass.states[v.entityId];
            if (rect) rect.style.display = shown ? "" : "none";
            if (text) text.setAttribute("display", shown ? "block" : "none");
            if (divider) divider.style.display = shown && k > 0 ? "" : "none";
            if (!shown) continue;
            const slot = slots[k++];
            if (rect) {
                rect.setAttribute("y", String(slot.y));
                rect.setAttribute("height", String(slot.h));
            }
            if (text) text.setAttribute("y", String(slot.y + slot.h / 2 + (svg_item.offset ?? 0)));
            if (divider) {
                divider.setAttribute("y1", String(slot.y));
                divider.setAttribute("y2", String(slot.y));
            }
        }
        const container = root.getElementById(`${svg_item.group_id}_rect`);
        if (container) {
            const top = parseFloat(container.getAttribute("y") ?? "0");
            container.style.display = k > 0 ? "" : "none";
            if (k > 0) container.setAttribute("height", String(Math.max(0, slots[k - 1].y + slots[k - 1].h - top)));
        }
    }
    // Sets the semantic state of a value text. Layouts that style the states themselves (data-own-state-style)
    // only get the state; other (custom) SVGs get inline colours.
    textState(el, state, fallback) {
        el.setAttribute("data-state", state);
        if (!this.layoutStyle.ownStates || state === "normal") for (const [name, value] of Object.entries(fallback))el.setAttribute(name, value);
    }
    // Everything that depends on the look is described by the SVG itself:
    //   data-run-map   {elementId: {entity, mode: "on" | "gt0"}}  -> the card sets data-state="on|off|unknown" on that element
    //   data-temp-vars {--k-name: {entity: [ids], min, max}}      -> the card sets --k-name (0..1) on the <svg>
    // How "on", "off" or a value looks (colours, paused animations) is defined by CSS inside the SVG.
    updateDynamicStyle() {
        const svg = this.shadowRoot?.querySelector("ha-card svg");
        if (!svg || !this.config || !this.hass) return;
        const parse = (attr)=>{
            try {
                return JSON.parse(svg.getAttribute(attr) ?? "{}");
            } catch  {
                return {};
            }
        };
        const stateOf = (key)=>{
            const entityId = this.config.entities?.[key];
            return entityId ? this.hass.states[entityId]?.state : undefined;
        };
        for (const [id, rule] of Object.entries(parse("data-run-map"))){
            const element = this.shadowRoot.getElementById(id);
            if (!element) continue;
            const state = stateOf(rule.entity);
            let result = "unknown";
            if (state !== undefined && state !== "unknown" && state !== "unavailable") result = (rule.mode === "gt0" ? parseFloat(state) > 0 : state === "on") ? "on" : "off";
            element.setAttribute("data-state", result);
        }
        for (const [name, rule] of Object.entries(parse("data-temp-vars"))){
            let value = NaN;
            for (const key of Array.isArray(rule.entity) ? rule.entity : [
                rule.entity
            ]){
                const candidate = parseFloat(stateOf(key) ?? "");
                if (Number.isFinite(candidate)) {
                    value = candidate;
                    break;
                }
            }
            if (Number.isFinite(value) && rule.max !== rule.min) {
                const k = Math.min(1, Math.max(0, (value - rule.min) / (rule.max - rule.min)));
                svg.style.setProperty(name, k.toFixed(3));
            } else svg.style.removeProperty(name); // the SVG falls back to its own default
        }
    }
    // "animations: false" freezes everything; how is defined by the SVG (svg[data-animations="off"])
    updateAnimations() {
        const svg = this.shadowRoot?.querySelector("ha-card svg");
        if (!svg) return;
        svg.setAttribute("data-animations", this.config?.animations === false ? "off" : "on");
    }
    updateOpacity() {
        if (this.config) {
            const dhwOpenArrows = this.shadowRoot.querySelector(`#dhw-open-arrows`);
            const dhwClosedArrows = this.shadowRoot.querySelector(`#dhw-closed-arrows`);
            const bpvOpenArrows = this.shadowRoot.querySelector(`#bpv-open-arrows`);
            const bpvClosedArrows = this.shadowRoot.querySelector(`#bpv-closed-arrows`);
            const mixerEntity = this.config.entities?.['mischer'] ?? null;
            const bypassEntity = this.config.entities?.['bypass'] ?? null;
            // valve flaps (layouts with T-piece valves): angle follows the percentage
            const setFlap = (id, entity)=>{
                const flap = this.shadowRoot.getElementById(id);
                if (!flap) return;
                const raw = entity && this.hass.states[entity] ? parseFloat(this.hass.states[entity].state) : 0;
                const share = Math.min(1, Math.max(0, Number.isFinite(raw) ? raw / 100 : 0));
                const [px, py] = (flap.getAttribute("data-pivot") ?? "0 0").split(" ");
                const a0 = parseFloat(flap.getAttribute("data-a0") ?? "0");
                const a1 = parseFloat(flap.getAttribute("data-a1") ?? "0");
                flap.setAttribute("transform", `rotate(${a0 + (a1 - a0) * share} ${px} ${py})`);
            };
            setFlap("dhw-flap", mixerEntity);
            setFlap("bpv-flap", bypassEntity);
            if (!dhwOpenArrows || !dhwClosedArrows || !bpvOpenArrows || !bpvClosedArrows) return;
            const mixer_id = this.config.entities?.['mischer'] ?? null;
            const bypass_id = this.config.entities?.['bypass'] ?? null;
            const mischerState = mixer_id && this.hass.states[mixer_id] ? parseFloat(this.hass.states[mixer_id].state) : 0;
            const bpvState = bypass_id && this.hass.states[bypass_id] ? parseFloat(this.hass.states[bypass_id].state) : 0;
            dhwOpenArrows.style.opacity = (mischerState / 100.0).toString();
            dhwClosedArrows.style.opacity = ((100.0 - mischerState) / 100.0).toString();
            bpvOpenArrows.style.opacity = (bpvState / 100.0).toString();
            bpvClosedArrows.style.opacity = ((100.0 - bpvState) / 100.0).toString();
        }
    }
    handleStateClick(entityId) {
        this.dispatchEvent(new CustomEvent("hass-more-info", {
            detail: {
                entityId: entityId
            },
            bubbles: true,
            composed: true
        }));
    }
    makeURL(filename) {
        // Resolve next to this card's own script, independent of install location
        // (/hacsfiles/, /local/, /local/community/, ...).
        // Not import.meta.url: Parcel inlines it as "file:///src/card.ts".
        const scriptName = "hpsu-dashboard-card.js";
        const scriptEl = Array.from(document.querySelectorAll("script[src]")).find((s)=>new URL(s.src, document.baseURI).pathname.endsWith(`/${scriptName}`));
        const scriptUrl = scriptEl?.src ?? performance.getEntriesByType("resource").map((e)=>e.name).find((n)=>new URL(n, document.baseURI).pathname.endsWith(`/${scriptName}`));
        if (!scriptUrl) {
            console.warn(`hpsu-dashboard-card: cannot locate ${scriptName}, using default path`);
            return `/local/community/daikin-rotex-hpsu-dashboard/${filename}`;
        }
        const url = new URL(filename, scriptUrl);
        // Reuse the script's own query string (hacstag / v=...) as cache key.
        url.search = new URL(scriptUrl).search;
        return url.href;
    }
    isPanelView() {
        let node = this;
        while(node){
            if (node.tagName?.toLowerCase() === "hui-panel-view") return true;
            node = node.getRootNode()?.host;
        }
        return false;
    }
    formatNumber(entity, digits) {
        if (!entity || !entity.state) return "--";
        const number = Number(entity.state);
        if (isNaN(number)) return entity.state;
        const formatted = new Intl.NumberFormat(this.hass.language, {
            minimumFractionDigits: digits,
            maximumFractionDigits: digits
        }).format(number);
        const suffix = entity.attributes?.unit_of_measurement;
        return suffix ? `${formatted} ${suffix}` : formatted;
    }
    isBooleanSensor(entityId) {
        return this.hass?.states[entityId]?.entity_id?.startsWith("binary_sensor.") ?? false;
    }
    isPositiveNumber(value) {
        return !!value && !isNaN(Number(value)) && Number(value) > 0;
    }
    findEntityIdById(entities, id) {
        const value = entities.flatMap((item)=>item.values).find((value)=>value.id === id);
        return value?.entityId ?? undefined;
    }
    constructor(...args){
        super(...args), this._state = "loading", this.language = "de", this.svgContent = null, this.svg_item_config = [], this.clickHandlersAdded = false, this.loadedLayoutFile = null, this.loadedStyleSignature = null, // Optional box/text styling provided by the SVG layout itself (data-* attributes on the <svg> root).
        this.layoutStyle = {};
    }
}
(0, $656ade2323340eda$export$71511d61b312f219)([
    (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        attribute: false
    })
], $a399cc6bbb0eb26a$export$9de59f1af66e4f03.prototype, "hass", void 0);
(0, $656ade2323340eda$export$71511d61b312f219)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $a399cc6bbb0eb26a$export$9de59f1af66e4f03.prototype, "_state", void 0);
(0, $656ade2323340eda$export$71511d61b312f219)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $a399cc6bbb0eb26a$export$9de59f1af66e4f03.prototype, "language", void 0);
(0, $656ade2323340eda$export$71511d61b312f219)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $a399cc6bbb0eb26a$export$9de59f1af66e4f03.prototype, "svgContent", void 0);
(0, $656ade2323340eda$export$71511d61b312f219)([
    (0, $02a1f3a787c54a30$export$2fa187e846a241c4)('ha-card')
], $a399cc6bbb0eb26a$export$9de59f1af66e4f03.prototype, "haCardElement", void 0);
customElements.define("hpsu-dashboard-card", $a399cc6bbb0eb26a$export$9de59f1af66e4f03);
customElements.define("hpsu-dashboard-card-editor", (0, $d067581fc0d59830$export$70410bc798970b36));
window.customCards = window.customCards || [];
window.customCards.push({
    type: "hpsu-dashboard-card",
    name: "HPSU Dashboard",
    description: "A Lovelace card for visualizing the Daikin HPSU status.",
    preview: true
});


export {$a399cc6bbb0eb26a$export$4661a56c3a27d933 as DashboardState, $a399cc6bbb0eb26a$export$9de59f1af66e4f03 as HPSUDashboardCard};
//# sourceMappingURL=hpsu-dashboard-card.js.map
