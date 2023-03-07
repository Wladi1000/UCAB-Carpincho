import * as docx from 'docx';
import file_saver from 'file-saver'
const { saveAs } = file_saver
// Load the full build.
import lodash from 'lodash';
const { _ } =  lodash;
const { TableRow,BorderStyle } = docx;
const { WidthType,Paragraph } = docx;
const { VerticalAlign, Document } = docx;
const { TextRun, AlignmentType } = docx;
const { SectionType, Header } = docx;
const { HeightRule,TableCell } = docx;
const { Footer, LineRuleType } = docx;
const { Table, PageBreak } = docx;
const { HeadingLevel,Packer } = docx;
//const { TableRow,BorderStyle } = docx;
const tam_cuadro_titulo = 280;

const generarCriterio = (text) => {
    return (new TableRow({
                    height: {
                        value: 300,
                        rule: HeightRule.EXACT
                    },
                    children: [
                        new TableCell({
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: text
                                        })
                                    ],
                                })
                            ],
                            width: {
                                size: 5000,
                                type: WidthType.DXA
                            }
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: text
                                        })
                                    ],
                                })
                            ],
                            width: {
                                size: 1000,
                                type: WidthType.DXA
                            }
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: text
                                        })
                                    ],
                                })
                            ],
                            width: {
                                size: 1000,
                                type: WidthType.DXA
                            }
                        }),

                    ]
                }));
}

const generarCelda = (text, width, after, before) => {
    console.log(text);
    console.log(width);
    console.log(after);
    console.log(before);
    return (new TableCell({
        children: [
            new Paragraph({
                children: [
                    new TextRun({
                        text: text
                    })
                ],
                spacing: {
                    after: after,
                    before: before
                }
            })
        ],
        width: {
            value: width,
            type: WidthType.DXA
        }
    }));
}
const doc = new Document({
    creator: "Luis C. Somoza",
    title: "Planilla de evaluaciòn de revisor de TEG",
    description: "Planilla de evaluaciòn de revisor de TEG",
    styles: {
        default: {
            heading1: {
                run: {
                    size: 23,
                    bold: true,
                },
                paragraph: {
                    spacing: {
                        after: 200,
                    },
                    alignment: AlignmentType.CENTER,
                },
            },
        },
        paragraphStyles: [
            {
                id: "aside",
                name: "Aside",
                basedOn: "Normal",
                next: "Normal",
                run: {
                    size: 22,
                },
                paragraph: {
                    spacing: {
                        line: 200,
                    },
                },
            }
        ]
    },
    sections: [{
        properties: {
            type: SectionType.CONTINUOUS,
            margin: {
                right: 150,
                bottom: 150,
                left: 150,
            }
        },
        headers: {
            default: new Header({
                children: [new Paragraph({
                    children: [
                        new ImageRun({
                            data: fs.readFileSync('logo.png'),
                            transformation: {
                                width: 400,
                                height: 100,
                            },
                        }),
                    ],
                    alignment: AlignmentType.LEFT
                })],
            }),
        },
        footers: {
            default: new Footer({
                children: [
                    new Paragraph({
                        children: [
                            new ImageRun({
                                data: fs.readFileSync('Untitled.png'),
                                transformation: {
                                    width: 600,
                                    height: 15,
                                },
                                alignment: AlignmentType.CENTER
                            }),
                        ],
                        alignment: AlignmentType.CENTER
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "UNIVERSIDAD CATÓLICA ANDRÉS BELLO – Extensión Guayana",
                            })
                        ],
                        alignment: AlignmentType.CENTER
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "Avenida Atlántico, Ciudad Guayana 8050",
                            })
                        ],
                        alignment: AlignmentType.CENTER
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "Bolívar, Venezuela. Teléfono: +58-286-6000111"
                            })
                        ],
                        alignment: AlignmentType.CENTER
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: "URL: http://www.guayanaweb.ucab.edu.ve/escuela-de-ingenieria-informatica.html"
                            })
                        ],
                        alignment: AlignmentType.CENTER
                    })
                ],
            }),
        },
        children: [
           new Paragraph({
            style: "aside",
            children: [
                new TextRun({
                    text: "Evaluación Propuesta Trabajo Experimental de Grado (TEG)",
                    bold: true
                })
            ],
            alignment: AlignmentType.CENTER,
            spacing: {
                after: 200
            }
           }),
           new Paragraph({
            style: "aside",
            children: [
                new TextRun({
                    text: "Tema propuesto: ",
                    bold: true
                })
            ],
            spacing: {
                after: 100
            }
           }),
        new Table({
            rows: [
                new TableRow({
                    height: {
                        value: 500,
                        rule: HeightRule.EXACT
                    },
                    children: [
                        new TableCell({
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Probando"
                                        })
                                    ],
                                })
                            ],
                            width: {
                                size: 10000,
                                type: WidthType.DXA
                            }
                        })
                    ]
                }),
            ]
        }),
        //FIN DE TABLA
        new Paragraph({
            children: [
                new TextRun({
                    text: "Organización donde desarrollará el TEG: ",
                    bold: true
                })
            ],
            spacing: {
                after: 200
            }
        }),
        new Table({
            rows: [
                new TableRow({
                    height: {
                        value: 500,
                        rule: HeightRule.EXACT
                    },
                    children: [
                        new TableCell({
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Probando"
                                        })
                                    ],
                                })
                            ],
                            width: {
                                size: 10000,
                                type: WidthType.DXA
                            }
                        })
                    ]
                })
            ]
        }),
        new Paragraph({
            children: [
                new TextRun({
                    text: "Criterios de evaluación: ",
                    bold: true
                })
            ],
            spacing: {
                after: 200
            }
        }),
        //Tabla de criterios
        new Table({
            indent: {
                size: 500,
                type: WidthType.DXA
            },
            rows: [
                new TableRow({
                    height: {
                        value: 300,
                        rule: HeightRule.EXACT
                    },
                    children: [
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Criterios",
                                            bold: true
                                        })
                                    ],
                                    alignment: AlignmentType.CENTER
                                })
                            ],
                            width: {
                                size: 5000,
                                type: WidthType.DXA
                            }
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Aprobado",
                                            bold: true
                                        })
                                    ],
                                    alignment: AlignmentType.CENTER
                                })
                            ],
                            width: {
                                size: 1500,
                                type: WidthType.DXA
                            }
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Reprobado",
                                            bold: true
                                        })
                                    ],
                                    alignment: AlignmentType.CENTER
                                })
                            ],
                            width: {
                                size: 1500,
                                type: WidthType.DXA
                            }
                        }),
                    ]
                }),
                generarCriterio(),
                generarCriterio(),
                generarCriterio(),
                generarCriterio(),
                generarCriterio(),
                generarCriterio(),
            ]
        }),
        new Paragraph({
            children: [
                new TextRun({
                    text: "Observación:",
                    bold: true
                }),
                new TextRun({
                    text: "En caso de reprobar algún criterio, la propuesta estaría rechazada. Indicar al final la razón de rechazo."
                }),
            ],
            spacing: {
                after: 100
            }
        }),
        new Paragraph({
            children: [
                new TextRun({
                    text: "Datos del Estudiante:",
                    bold: true
                }),
            ],
            spacing: {
                after: 100,
                before: 100
            }
        }),
        new Table({
            columnWidths: [3000, 4500],
            rows: [
                new TableRow({
                    height: {
                        value: 300, 
                        rule: HeightRule.EXACT
                    },
                    children: [
                        new TableCell({
                            width: {
                                size: 2700,
                                type: WidthType.DXA
                            },
                            children: [
                                new Paragraph({
                                    style: "aside",
                                    children: [
                                        new TextRun({
                                            text: "Nombre",
                                            bold: true
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                })
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            width: {
                                size: 2000,
                                type: WidthType.DXA
                            },
                            children: [
                                new Paragraph({
                                    style: "aside",
                                    children: [
                                        new TextRun({
                                            text: "C.I.N",
                                            bold: true
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                })
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            width: {
                                size: 2400,
                                type: WidthType.DXA
                            },
                            children: [
                                new Paragraph({
                                    style: "aside",
                                    children: [
                                        new TextRun({
                                            text: "Telefono",
                                            bold: true
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                })
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            width: {
                                size: 2700,
                                type: WidthType.DXA
                            },
                            children: [
                                new Paragraph({
                                    style: "aside",
                                    children: [
                                        new TextRun({
                                            text: "Email",
                                            bold: true
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                })
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                    ]
                }),
                new TableRow({
                    height: {
                        value: 300, 
                        rule: HeightRule.EXACT
                    },
                    children: [
                        new TableCell({
                            width: {
                                size: 500,
                                type: WidthType.DXA
                            },
                            children: [
                                new Paragraph({
                                    style: "aside",
                                    children: [
                                        new TextRun({
                                            text: ""
                                        }),
                                    ]
                                })
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            width: {
                                size: 500,
                                type: WidthType.DXA
                            },
                            children: [
                                new Paragraph({
                                    style: "aside",
                                    children: [
                                        new TextRun({
                                            text: ""
                                        }),
                                    ]
                                })
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            width: {
                                size: 500,
                                type: WidthType.DXA
                            },
                            children: [
                                new Paragraph({
                                    style: "aside",
                                    children: [
                                        new TextRun({
                                            text: ""
                                        }),
                                    ]
                                })
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            width: {
                                size: 500,
                                type: WidthType.DXA
                            },
                            children: [
                                new Paragraph({
                                    style: "aside",
                                    children: [
                                        new TextRun({
                                            text: ""
                                        }),
                                    ]
                                })
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        })
                    ]
                }),
            
            ],
        }),
        new Paragraph({
            children: [
                new TextRun({
                    text: "Datos del Tutor Académico:",
                    bold: true
                })
            ],
            spacing: {
                after: 100,
                before:100
            }
        }),
        //Datos del tutor academico
        new Table({
            columnWidths: [3000, 4500],
            rows: [
                new TableRow({
                    height: {
                        value: 400, 
                        rule: HeightRule.EXACT
                    },
                    children : [
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                },
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                },
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                }
                            },
                            children: [
                                new Paragraph({
                                    style: "aside",
                                    children: [
                                        new TextRun({
                                            text: "Nombre",
                                        })
                                    ],
                                    alignment: AlignmentType.CENTER
                                })
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                },
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                },
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                }
                            },
                            children: [
                                new Paragraph({
                                    style: "aside",
                                    borders: {
                                        top: {
                                            style: BorderStyle.NONE,
                                            size: 1,
                                            color: "ff0000",
                                        },
                                        left: {
                                            style: BorderStyle.NONE,
                                            size: 1,
                                            color: "ff0000",
                                        },
                                        right: {
                                            style: BorderStyle.NONE,
                                            size: 1,
                                            color: "ff0000",
                                        }
                                    },
                                    children: [
                                        new TextRun({
                                            text: "",
                                        })
                                    ],
                                })
                            ],
                        })
                    ]
                }),
                new TableRow({
                    height: {
                        value: 400, 
                        rule: HeightRule.EXACT
                    },
                    children : [
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                },
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                },
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                }
                            },
                            children: [
                                new Paragraph({
                                    style: "aside",
                                    children: [
                                        new TextRun({
                                            text: "C.I.N",
                                        })
                                    ],
                                    alignment: AlignmentType.CENTER
                                })
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                },
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                },
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                }
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "",
                                        })
                                    ],
                                })
                            ],
                        })
                    ]
                }),
                new TableRow({
                    height: {
                        value: 400, 
                        rule: HeightRule.EXACT
                    },
                    children : [
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                },
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                },
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                }
                            },
                            children: [
                                new Paragraph({
                                    style: "aside",
                                    children: [
                                        new TextRun({
                                            text: "Profesion",
                                        })
                                    ],
                                    alignment: AlignmentType.CENTER
                                })
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                },
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                },
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                }
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "",
                                        })
                                    ],
                                })
                            ],
                            width: {
                                size: 10000,
                                type: WidthType.DXA
                            },
                        })
                    ]
                }),
                new TableRow({
                    height: {
                        value: 400, 
                        rule: HeightRule.EXACT
                    },
                    children : [
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                },
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                },
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                }
                            },
                            children: [
                                new Paragraph({
                                    style: "aside",
                                    children: [
                                        new TextRun({
                                            text: "Años de experiencia",
                                        })
                                    ],
                                    alignment: AlignmentType.CENTER
                                })
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                },
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                },
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                }
                            },
                            children: [
                                new Paragraph({
                                    borders: {
                                        top: {
                                            style: BorderStyle.NONE,
                                            size: 1,
                                            color: "ff0000",
                                        },
                                        left: {
                                            style: BorderStyle.NONE,
                                            size: 1,
                                            color: "ff0000",
                                        },
                                        right: {
                                            style: BorderStyle.NONE,
                                            size: 1,
                                            color: "ff0000",
                                        }
                                    },
                                    children: [
                                        new TextRun({
                                            text: "",
                                        })
                                    ],
                                    
                                })
                            ],
                            width: {
                                size: 10000,
                                type: WidthType.DXA
                            },
                        }),
                    ]
                }),
                new TableRow({
                    height: {
                        value: 400, 
                        rule: HeightRule.EXACT
                    },
                    children : [
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                },
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                },
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                }
                            },
                            children: [
                                new Paragraph({
                                    style: "aside",
                                    children: [
                                        new TextRun({
                                            text: "Cargo Actual",
                                        })
                                    ],
                                    alignment: AlignmentType.CENTER
                                })
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                },
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                },
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                }
                            },
                            children: [
                                new Paragraph({
                                    style: "aside",
                                    children: [
                                        new TextRun({
                                            text: "",
                                        })
                                    ],
                                })
                            ],
                            width: {
                                size: 10000,
                                type: WidthType.DXA
                            },
                        })
                    ]
                }),
                new TableRow({
                    height: {
                        value: 400, 
                        rule: HeightRule.EXACT
                    },
                    children : [
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                },
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                },
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                }
                            },
                            children: [
                                new Paragraph({
                                    style: "aside",
                                    children: [
                                        new TextRun({
                                            text: "Email",
                                        })
                                    ],
                                    alignment: AlignmentType.CENTER
                                })
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                },
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                },
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                }
                            },
                            children: [
                                new Paragraph({
                                    style: "aside",
                                    children: [
                                        new TextRun({
                                            text: "",
                                        })
                                    ],
                                })
                            ],
                            width: {
                                size: 10000,
                                type: WidthType.DXA
                            },
                        })
                    ]
                }),
                new TableRow({
                    height: {
                        value: 400, 
                        rule: HeightRule.EXACT
                    },
                    children : [
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                },
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                },
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                }
                            },
                            children: [
                                new Paragraph({
                                    style: "aside",
                                    children: [
                                        new TextRun({
                                            text: "Telefono",
                                        })
                                    ],
                                    alignment: AlignmentType.CENTER
                                })
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                },
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                },
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 1,
                                    color: "ff0000",
                                }
                            },
                            children: [
                                new Paragraph({
                                    style: "aside",
                                    children: [
                                        new TextRun({
                                            text: "",
                                        })
                                    ],
                                })
                            ],
                            width: {
                                size: 10000,
                                type: WidthType.DXA
                            },
                        })
                    ]
                }),
            ]
        }),
        new Paragraph({
            children: [
                new TextRun({
                    text: "Para ser llenado por el revisor:",
                    bold: true
                })
            ],
            spacing: {
                before: 100,
                after: 100
            }
        }),
        new Table({
            width: {
                size: 9000,
                type: WidthType.DXA
            },
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            borders: {
                                top: {
                                    size: 1,
                                    color: "#ffffff",
                                    style: BorderStyle.NONE
                                },
                                bottom: {
                                    size: 1,
                                    color: "#ffffff",
                                    style: BorderStyle.NONE
                                },
                                right:{
                                    size: 1,
                                    color: "#ffffff",
                                    style: BorderStyle.NONE
                                },
                                left: {
                                    size: 1,
                                    color: "#ffffff",
                                    style: BorderStyle.NONE
                                }
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Apellidos, Nombres: "
                                        })
                                    ],
                                    alignment: AlignmentType.LEFT
                                })
                            ],
                            width: {
                                size: 2000,
                                type: WidthType.DXA
                            },
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    size: 1,
                                    color: "#ffffff",
                                    style: BorderStyle.NONE
                                },
                                bottom: {
                                    size: 1,
                                    color: "#ffffff",
                                    style: BorderStyle.NONE
                                },
                                right:{
                                    size: 1,
                                    color: "#ffffff",
                                    style: BorderStyle.NONE
                                },
                                left: {
                                    size: 1,
                                    color: "#ffffff",
                                    style: BorderStyle.NONE
                                }
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Lárez Mata, Jesús José"
                                        })
                                    ],
                                    alignment: AlignmentType.LEFT
                                })
                            ],
                            width: {
                                size: 2000,
                                type: WidthType.DXA
                            },
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    size: 1,
                                    color: "#ffffff",
                                    style: BorderStyle.NONE
                                },
                                bottom: {
                                    size: 1,
                                    color: "#ffffff",
                                    style: BorderStyle.NONE
                                },
                                right:{
                                    size: 1,
                                    color: "#ffffff",
                                    style: BorderStyle.NONE
                                },
                                left: {
                                    size: 1,
                                    color: "#ffffff",
                                    style: BorderStyle.NONE
                                }
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ""
                                        })
                                    ],
                                    alignment: AlignmentType.LEFT
                                })
                            ],
                            
                        }),
                        
                    ]
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            borders: {
                                top: {
                                    size: 1,
                                    color: "#ffffff",
                                    style: BorderStyle.NONE
                                },
                                bottom: {
                                    size: 1,
                                    color: "#ffffff",
                                    style: BorderStyle.NONE
                                },
                                right:{
                                    size: 1,
                                    color: "#ffffff",
                                    style: BorderStyle.NONE
                                },
                                left: {
                                    size: 1,
                                    color: "#ffffff",
                                    style: BorderStyle.NONE
                                }
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Decisión Final: "
                                        })
                                    ]
                                })
                            ]
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    size: 1,
                                    color: "#ffffff",
                                    style: BorderStyle.NONE
                                },
                                bottom: {
                                    size: 1,
                                    color: "#ffffff",
                                    style: BorderStyle.NONE
                                },
                                right:{
                                    size: 1,
                                    color: "#ffffff",
                                    style: BorderStyle.NONE
                                },
                                left: {
                                    size: 1,
                                    color: "#ffffff",
                                    style: BorderStyle.NONE
                                }
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Aprobado: "
                                        })
                                    ]
                                })
                            ],
                            width: {
                                size: 1500,
                                type: WidthType.DXA
                            },
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    size: 1,
                                    color: "#ffffff",
                                    style: BorderStyle.NONE
                                },
                                bottom: {
                                    size: 1,
                                    color: "#ffffff",
                                    style: BorderStyle.NONE
                                },
                                right:{
                                    size: 1,
                                    color: "#ffffff",
                                    style: BorderStyle.NONE
                                },
                                left: {
                                    size: 1,
                                    color: "#ffffff",
                                    style: BorderStyle.NONE
                                }
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Reprobada:"
                                        })
                                    ]
                                })
                            ],
                            width: {
                                size: 1500,
                                type: WidthType.DXA
                            },
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    size: 1,
                                    color: "#ffffff",
                                    style: BorderStyle.NONE
                                },
                                bottom: {
                                    size: 1,
                                    color: "#ffffff",
                                    style: BorderStyle.NONE
                                },
                                right:{
                                    size: 1,
                                    color: "#ffffff",
                                    style: BorderStyle.NONE
                                },
                                left: {
                                    size: 1,
                                    color: "#ffffff",
                                    style: BorderStyle.NONE
                                }
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: "Fecha: "
                                        })
                                    ],
                                    alignment: AlignmentType.RIGHT
                                })
                            ],
                            width: {
                                size: 2000,
                                type: WidthType.DXA
                            },
                        }),
                        new TableCell({
                            borders: {
                                top: {
                                    size: 1,
                                    color: "#ffffff",
                                    style: BorderStyle.NONE
                                },
                                bottom: {
                                    size: 1,
                                    color: "#ffffff",
                                    style: BorderStyle.NONE
                                },
                                right:{
                                    size: 1,
                                    color: "#ffffff",
                                    style: BorderStyle.NONE
                                },
                                left: {
                                    size: 1,
                                    color: "#ffffff",
                                    style: BorderStyle.NONE
                                }
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: " "
                                        })
                                    ]
                                })
                            ]
                        }),
                    ]
                }),
            ]
        }),
        new Paragraph({
            children: [
                new TextRun({
                    text: "Observaciones (solo en caso de ser rechazado el documento):"
                })
            ],
            spacing: {
                before: 10,
                after: 10
            }
        }),
        new Table({
            indent: {
                size: 3000,
                type: WidthType.DXA
            },
            rows: [
                new TableRow({
                    height: {
                        value: 700,
                        rule: HeightRule.EXACT
                    },
                    children: [
                        new TableCell({
                            borders: {
                                top: {
                                    size: 1,
                                    color: "#FFFFFF",
                                    style: BorderStyle.NONE
                                },
                                left: {
                                    size: 1,
                                    color: "#FFFFFF",
                                    style: BorderStyle.NONE
                                },
                                right: {
                                    size: 1,
                                    color: "#FFFFFF",
                                    style: BorderStyle.NONE
                                }
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun("")
                                    ]
                                })
                            ],
                            width: {
                                size: 3000,
                                type: WidthType.DXA
                            }
                        }),
                    ],
                }),
                new TableRow({
                    height: {
                        value: 700,
                        rule: HeightRule.EXACT
                    },
                    children: [
                        new TableCell({
                            borders: {
                                left: {
                                    size: 1,
                                    color: "#FFFFFF",
                                    style: BorderStyle.NONE
                                },
                                right: {
                                    size: 1,
                                    color: "#FFFFFF",
                                    style: BorderStyle.NONE
                                },
                                bottom: {
                                    size: 1,
                                    color: "#FFFFFF",
                                    style: BorderStyle.NONE
                                }
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun("Firma Revisor")
                                    ],
                                    alignment: AlignmentType.CENTER
                                }),
                            ],
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 3000,
                                type: WidthType.DXA
                            }
                        }),
                    ],
                }),
            ]
        }),


        ],
    }],
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("Evaluaciòn Propuesta TEG - Revisor.docx", buffer);
});

