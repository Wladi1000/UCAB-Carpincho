import * as fs from 'fs'
import docx from 'docx'
const { Paragraph } = docx

const generarCriterio = (text) => {
    return (new docx.TableRow({
                    height: {
                        value: 300,
                        rule: docx.HeightRule.EXACT
                    },
                    children: [
                        new docx.TableCell({
                            children: [
                                new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text: text
                                        })
                                    ],
                                })
                            ],
                            width: {
                                size: 5000,
                                type: docx.WidthType.DXA
                            }
                        }),
                        new docx.TableCell({
                            children: [
                                new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text: text
                                        })
                                    ],
                                })
                            ],
                            width: {
                                size: 1000,
                                type: docx.WidthType.DXA
                            }
                        }),
                        new docx.TableCell({
                            children: [
                                new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text: text
                                        })
                                    ],
                                })
                            ],
                            width: {
                                size: 1000,
                                type: docx.WidthType.DXA
                            }
                        }),

                    ]
                }));
}

const Carta_designacion = {
    propuesta: {
        titulo: '',
        modalidad: '',
        alumnno: [{
            cedula: '',
            nombres: '',
            apellidos: ''
        }],
        tutor_empresarial: {
            nombres: '',
            apellidos: '',
            cedula: ''
        },
        tutor: ''
    },
    fecha_designacion: '',
    CDE: '',
    administrador: '',
    empresa: '',

}

export const generarCartaDesignacionTutorTIG = (Carta_designacion) => {
    const doc = new docx.Document({
        creator: "Luis C. Somoza & Wladimir SanVicente",
        title: "Planilla de evaluaciòn de revisor de TIG",
        description: "Planilla de evaluaciòn de revisor de TIG",
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
                        alignment: docx.AlignmentType.CENTER,
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
                type: docx.SectionType.CONTINUOUS,
                margin: {
                    right: 150,
                    bottom: 150,
                    left: 150,
                }
            },
            headers: {
                default: new docx.Header({
                    children: [new docx.Paragraph({
                        children: [
                            new docx.ImageRun({
                                data: fs.readFileSync('logo.png'),
                                transformation: {
                                    width: 400,
                                    height: 100,
                                },
                            }),
                        ],
                        alignment: docx.AlignmentType.LEFT
                    })],
                }),
            },
            footers: {
                default: new docx.Footer({
                    children: [
                        new docx.Paragraph({
                            children: [
                                new docx.ImageRun({
                                    data: fs.readFileSync('Untitled.png'),
                                    transformation: {
                                        width: 600,
                                        height: 15,
                                    },
                                    alignment: docx.AlignmentType.CENTER
                                }),
                            ],
                            alignment: docx.AlignmentType.CENTER
                        }),
                        new docx.Paragraph({
                            children: [
                                new docx.TextRun({
                                    text: "UNIVERSIDAD CATÓLICA ANDRÉS BELLO – Extensión Guayana",
                                })
                            ],
                            alignment: docx.AlignmentType.CENTER
                        }),
                        new docx.Paragraph({
                            children: [
                                new docx.TextRun({
                                    text: "Avenida Atlántico, Ciudad Guayana 8050",
                                })
                            ],
                            alignment: docx.AlignmentType.CENTER
                        }),
                        new docx.Paragraph({
                            children: [
                                new docx.TextRun({
                                    text: "Bolívar, Venezuela. Teléfono: +58-286-6000111"
                                })
                            ],
                            alignment: docx.AlignmentType.CENTER
                        }),
                        new docx.Paragraph({
                            children: [
                                new docx.TextRun({
                                    text: "URL: http://www.guayanaweb.ucab.edu.ve/escuela-de-ingenieria-informatica.html"
                                })
                            ],
                            alignment: docx.AlignmentType.CENTER
                        })
                    ],
                }),
            },
            children: [
               new docx.Paragraph({
                style: "aside",
                children: [
                    new docx.TextRun({
                        text: "Evaluación Propuesta Trabajo Experimental de Grado (TIG)",
                        bold: true
                    })
                ],
                alignment: docx.AlignmentType.CENTER,
                spacing: {
                    after: 200
                }
               }),
               new docx.Paragraph({
                style: "aside",
                children: [
                    new docx.TextRun({
                        text: "Tema propuesto: ",
                        bold: true
                    })
                ],
                spacing: {
                    after: 100
                }
               }),
                new docx.Table({
                    rows: [
                        new docx.TableRow({
                            height: {
                                value: 500,
                                rule: docx.HeightRule.EXACT
                            },
                            children: [
                                new docx.TableCell({
                                    children: [
                                        new docx.Paragraph({
                                            children: [
                                                new docx.TextRun({
                                                    text: "Probando"
                                                })
                                            ],
                                        })
                                    ],
                                    width: {
                                        size: 10000,
                                        type: docx.WidthType.DXA
                                    }
                                })
                            ]
                        }),
                    ]
                }),
            //FIN DE TABLA
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: "Organización donde desarrollará el TIG: ",
                        bold: true
                    })
                ],
                spacing: {
                    after: 200
                }
            }),
            new docx.Table({
                rows: [
                    new docx.TableRow({
                        height: {
                            value: 500,
                            rule: docx.HeightRule.EXACT
                        },
                        children: [
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: "Probando"
                                            })
                                        ],
                                    })
                                ],
                                width: {
                                    size: 10000,
                                    type: docx.WidthType.DXA
                                }
                            })
                        ]
                    })
                ]
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: "Criterios de evaluación: ",
                        bold: true
                    })
                ],
                spacing: {
                    after: 200
                }
            }),
            //Tabla de criterios
            new docx.Table({
                indent: {
                    size: 500,
                    type: docx.WidthType.DXA
                },
                rows: [
                    new docx.TableRow({
                        height: {
                            value: 300,
                            rule: docx.HeightRule.EXACT
                        },
                        children: [
                            new docx.TableCell({
                                verticalAlign: docx.VerticalAlign.CENTER,
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: "Criterios",
                                                bold: true
                                            })
                                        ],
                                        alignment: docx.AlignmentType.CENTER
                                    })
                                ],
                                width: {
                                    size: 5000,
                                    type: docx.WidthType.DXA
                                }
                            }),
                            new docx.TableCell({
                                verticalAlign: docx.VerticalAlign.CENTER,
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: "Aprobado",
                                                bold: true
                                            })
                                        ],
                                        alignment: docx.AlignmentType.CENTER
                                    })
                                ],
                                width: {
                                    size: 1500,
                                    type: docx.WidthType.DXA
                                }
                            }),
                            new docx.TableCell({
                                verticalAlign: docx.VerticalAlign.CENTER,
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: "Reprobado",
                                                bold: true
                                            })
                                        ],
                                        alignment: docx.AlignmentType.CENTER
                                    })
                                ],
                                width: {
                                    size: 1500,
                                    type: docx.WidthType.DXA
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
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: "Observación:",
                        bold: true
                    }),
                    new docx.TextRun({
                        text: "En caso de reprobar algún criterio, la propuesta estaría rechazada. Indicar al final la razón de rechazo."
                    }),
                ],
                spacing: {
                    after: 100
                }
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: "Datos del Estudiante:",
                        bold: true
                    }),
                ],
                spacing: {
                    after: 100,
                    before: 100
                }
            }),
            new docx.Table({
                columnWidths: [3000, 4500],
                rows: [
                    new docx.TableRow({
                        height: {
                            value: 300, 
                            rule: docx.HeightRule.EXACT
                        },
                        children: [
                            new docx.TableCell({
                                width: {
                                    size: 2700,
                                    type: docx.WidthType.DXA
                                },
                                children: [
                                    new docx.Paragraph({
                                        style: "aside",
                                        children: [
                                            new docx.TextRun({
                                                text: "Nombre",
                                                bold: true
                                            }),
                                        ],
                                        alignment: docx.AlignmentType.CENTER,
                                    })
                                ],
                                verticalAlign: docx.VerticalAlign.CENTER,
                            }),
                            new docx.TableCell({
                                width: {
                                    size: 2000,
                                    type: docx.WidthType.DXA
                                },
                                children: [
                                    new docx.Paragraph({
                                        style: "aside",
                                        children: [
                                            new docx.TextRun({
                                                text: "C.I.N",
                                                bold: true
                                            }),
                                        ],
                                        alignment: docx.AlignmentType.CENTER,
                                    })
                                ],
                                verticalAlign: docx.VerticalAlign.CENTER,
                            }),
                            new docx.TableCell({
                                width: {
                                    size: 2400,
                                    type: docx.WidthType.DXA
                                },
                                children: [
                                    new docx.Paragraph({
                                        style: "aside",
                                        children: [
                                            new docx.TextRun({
                                                text: "Telefono",
                                                bold: true
                                            }),
                                        ],
                                        alignment: docx.AlignmentType.CENTER,
                                    })
                                ],
                                verticalAlign: docx.VerticalAlign.CENTER,
                            }),
                            new docx.TableCell({
                                width: {
                                    size: 2700,
                                    type: docx.WidthType.DXA
                                },
                                children: [
                                    new docx.Paragraph({
                                        style: "aside",
                                        children: [
                                            new docx.TextRun({
                                                text: "Email",
                                                bold: true
                                            }),
                                        ],
                                        alignment: docx.AlignmentType.CENTER,
                                    })
                                ],
                                verticalAlign: docx.VerticalAlign.CENTER,
                            }),
                        ]
                    }),
                    new docx.TableRow({
                        height: {
                            value: 300, 
                            rule: docx.HeightRule.EXACT
                        },
                        children: [
                            new docx.TableCell({
                                width: {
                                    size: 500,
                                    type: docx.WidthType.DXA
                                },
                                children: [
                                    new docx.Paragraph({
                                        style: "aside",
                                        children: [
                                            new docx.TextRun({
                                                text: ""
                                            }),
                                        ]
                                    })
                                ],
                                verticalAlign: docx.VerticalAlign.CENTER,
                            }),
                            new docx.TableCell({
                                width: {
                                    size: 500,
                                    type: docx.WidthType.DXA
                                },
                                children: [
                                    new docx.Paragraph({
                                        style: "aside",
                                        children: [
                                            new docx.TextRun({
                                                text: ""
                                            }),
                                        ]
                                    })
                                ],
                                verticalAlign: docx.VerticalAlign.CENTER,
                            }),
                            new docx.TableCell({
                                width: {
                                    size: 500,
                                    type: docx.WidthType.DXA
                                },
                                children: [
                                    new docx.Paragraph({
                                        style: "aside",
                                        children: [
                                            new docx.TextRun({
                                                text: ""
                                            }),
                                        ]
                                    })
                                ],
                                verticalAlign: docx.VerticalAlign.CENTER,
                            }),
                            new docx.TableCell({
                                width: {
                                    size: 500,
                                    type: docx.WidthType.DXA
                                },
                                children: [
                                    new docx.Paragraph({
                                        style: "aside",
                                        children: [
                                            new docx.TextRun({
                                                text: ""
                                            }),
                                        ]
                                    })
                                ],
                                verticalAlign: docx.VerticalAlign.CENTER,
                            })
                        ]
                    }),
                
                ],
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
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
            new docx.Table({
                columnWidths: [3000, 4500],
                rows: [
                    new docx.TableRow({
                        height: {
                            value: 400, 
                            rule: docx.HeightRule.EXACT
                        },
                        children : [
                            new docx.TableCell({
                                borders: {
                                    top: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    },
                                    bottom: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    },
                                    left: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    },
                                    right: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    }
                                },
                                children: [
                                    new docx.Paragraph({
                                        style: "aside",
                                        children: [
                                            new docx.TextRun({
                                                text: "Nombre",
                                            })
                                        ],
                                        alignment: docx.AlignmentType.CENTER
                                    })
                                ],
                                verticalAlign: docx.VerticalAlign.CENTER,
                            }),
                            new docx.TableCell({
                                borders: {
                                    top: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    },
                                    left: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    },
                                    right: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    }
                                },
                                children: [
                                    new docx.Paragraph({
                                        style: "aside",
                                        borders: {
                                            top: {
                                                style: docx.BorderStyle.NONE,
                                                size: 1,
                                                color: "ff0000",
                                            },
                                            left: {
                                                style: docx.BorderStyle.NONE,
                                                size: 1,
                                                color: "ff0000",
                                            },
                                            right: {
                                                style: docx.BorderStyle.NONE,
                                                size: 1,
                                                color: "ff0000",
                                            }
                                        },
                                        children: [
                                            new docx.TextRun({
                                                text: "",
                                            })
                                        ],
                                    })
                                ],
                            })
                        ]
                    }),
                    new docx.TableRow({
                        height: {
                            value: 400, 
                            rule: docx.HeightRule.EXACT
                        },
                        children : [
                            new docx.TableCell({
                                borders: {
                                    top: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    },
                                    bottom: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    },
                                    left: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    },
                                    right: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    }
                                },
                                children: [
                                    new docx.Paragraph({
                                        style: "aside",
                                        children: [
                                            new docx.TextRun({
                                                text: "C.I.N",
                                            })
                                        ],
                                        alignment: docx.AlignmentType.CENTER
                                    })
                                ],
                                verticalAlign: docx.VerticalAlign.CENTER,
                            }),
                            new docx.TableCell({
                                borders: {
                                    top: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    },
                                    left: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    },
                                    right: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    }
                                },
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: "",
                                            })
                                        ],
                                    })
                                ],
                            })
                        ]
                    }),
                    new docx.TableRow({
                        height: {
                            value: 400, 
                            rule: docx.HeightRule.EXACT
                        },
                        children : [
                            new docx.TableCell({
                                borders: {
                                    top: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    },
                                    bottom: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    },
                                    left: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    },
                                    right: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    }
                                },
                                children: [
                                    new docx.Paragraph({
                                        style: "aside",
                                        children: [
                                            new docx.TextRun({
                                                text: "Profesion",
                                            })
                                        ],
                                        alignment: docx.AlignmentType.CENTER
                                    })
                                ],
                                verticalAlign: docx.VerticalAlign.CENTER,
                            }),
                            new docx.TableCell({
                                borders: {
                                    top: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    },
                                    left: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    },
                                    right: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    }
                                },
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: "",
                                            })
                                        ],
                                    })
                                ],
                                width: {
                                    size: 10000,
                                    type: docx.WidthType.DXA
                                },
                            })
                        ]
                    }),
                    new docx.TableRow({
                        height: {
                            value: 400, 
                            rule: docx.HeightRule.EXACT
                        },
                        children : [
                            new docx.TableCell({
                                borders: {
                                    top: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    },
                                    bottom: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    },
                                    left: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    },
                                    right: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    }
                                },
                                children: [
                                    new docx.Paragraph({
                                        style: "aside",
                                        children: [
                                            new docx.TextRun({
                                                text: "Años de experiencia",
                                            })
                                        ],
                                        alignment: docx.AlignmentType.CENTER
                                    })
                                ],
                                verticalAlign: docx.VerticalAlign.CENTER,
                            }),
                            new docx.TableCell({
                                borders: {
                                    top: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    },
                                    left: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    },
                                    right: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    }
                                },
                                children: [
                                    new docx.Paragraph({
                                        borders: {
                                            top: {
                                                style: docx.BorderStyle.NONE,
                                                size: 1,
                                                color: "ff0000",
                                            },
                                            left: {
                                                style: docx.BorderStyle.NONE,
                                                size: 1,
                                                color: "ff0000",
                                            },
                                            right: {
                                                style: docx.BorderStyle.NONE,
                                                size: 1,
                                                color: "ff0000",
                                            }
                                        },
                                        children: [
                                            new docx.TextRun({
                                                text: "",
                                            })
                                        ],
                                        
                                    })
                                ],
                                width: {
                                    size: 10000,
                                    type: docx.WidthType.DXA
                                },
                            }),
                        ]
                    }),
                    new docx.TableRow({
                        height: {
                            value: 400, 
                            rule: docx.HeightRule.EXACT
                        },
                        children : [
                            new docx.TableCell({
                                borders: {
                                    top: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    },
                                    bottom: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    },
                                    left: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    },
                                    right: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    }
                                },
                                children: [
                                    new docx.Paragraph({
                                        style: "aside",
                                        children: [
                                            new docx.TextRun({
                                                text: "Cargo Actual",
                                            })
                                        ],
                                        alignment: docx.AlignmentType.CENTER
                                    })
                                ],
                                verticalAlign: docx.VerticalAlign.CENTER,
                            }),
                            new docx.TableCell({
                                borders: {
                                    top: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    },
                                    left: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    },
                                    right: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    }
                                },
                                children: [
                                    new docx.Paragraph({
                                        style: "aside",
                                        children: [
                                            new docx.TextRun({
                                                text: "",
                                            })
                                        ],
                                    })
                                ],
                                width: {
                                    size: 10000,
                                    type: docx.WidthType.DXA
                                },
                            })
                        ]
                    }),
                    new docx.TableRow({
                        height: {
                            value: 400, 
                            rule: docx.HeightRule.EXACT
                        },
                        children : [
                            new docx.TableCell({
                                borders: {
                                    top: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    },
                                    bottom: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    },
                                    left: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    },
                                    right: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    }
                                },
                                children: [
                                    new docx.Paragraph({
                                        style: "aside",
                                        children: [
                                            new docx.TextRun({
                                                text: "Email",
                                            })
                                        ],
                                        alignment: docx.AlignmentType.CENTER
                                    })
                                ],
                                verticalAlign: docx.VerticalAlign.CENTER,
                            }),
                            new docx.TableCell({
                                borders: {
                                    top: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    },
                                    left: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    },
                                    right: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    }
                                },
                                children: [
                                    new docx.Paragraph({
                                        style: "aside",
                                        children: [
                                            new docx.TextRun({
                                                text: "",
                                            })
                                        ],
                                    })
                                ],
                                width: {
                                    size: 10000,
                                    type: docx.WidthType.DXA
                                },
                            })
                        ]
                    }),
                    new docx.TableRow({
                        height: {
                            value: 400, 
                            rule: docx.HeightRule.EXACT
                        },
                        children : [
                            new docx.TableCell({
                                borders: {
                                    top: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    },
                                    bottom: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    },
                                    left: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    },
                                    right: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    }
                                },
                                children: [
                                    new docx.Paragraph({
                                        style: "aside",
                                        children: [
                                            new docx.TextRun({
                                                text: "Telefono",
                                            })
                                        ],
                                        alignment: docx.AlignmentType.CENTER
                                    })
                                ],
                                verticalAlign: docx.VerticalAlign.CENTER,
                            }),
                            new docx.TableCell({
                                borders: {
                                    top: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    },
                                    left: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    },
                                    right: {
                                        style: docx.BorderStyle.NONE,
                                        size: 1,
                                        color: "ff0000",
                                    }
                                },
                                children: [
                                    new docx.Paragraph({
                                        style: "aside",
                                        children: [
                                            new docx.TextRun({
                                                text: "",
                                            })
                                        ],
                                    })
                                ],
                                width: {
                                    size: 10000,
                                    type: docx.WidthType.DXA
                                },
                            })
                        ]
                    }),
                ]
            }),
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: "Para ser llenado por el revisor:",
                        bold: true
                    })
                ],
                spacing: {
                    before: 100,
                    after: 100
                }
            }),
            new docx.Table({
                width: {
                    size: 9000,
                    type: docx.WidthType.DXA
                },
                rows: [
                    new docx.TableRow({
                        children: [
                            new docx.TableCell({
                                borders: {
                                    top: {
                                        size: 1,
                                        color: "#ffffff",
                                        style: docx.BorderStyle.NONE
                                    },
                                    bottom: {
                                        size: 1,
                                        color: "#ffffff",
                                        style: docx.BorderStyle.NONE
                                    },
                                    right:{
                                        size: 1,
                                        color: "#ffffff",
                                        style: docx.BorderStyle.NONE
                                    },
                                    left: {
                                        size: 1,
                                        color: "#ffffff",
                                        style: docx.BorderStyle.NONE
                                    }
                                },
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: "Apellidos, Nombres: "
                                            })
                                        ],
                                        alignment: docx.AlignmentType.LEFT
                                    })
                                ],
                                width: {
                                    size: 2000,
                                    type: docx.WidthType.DXA
                                },
                            }),
                            new docx.TableCell({
                                borders: {
                                    top: {
                                        size: 1,
                                        color: "#ffffff",
                                        style: docx.BorderStyle.NONE
                                    },
                                    bottom: {
                                        size: 1,
                                        color: "#ffffff",
                                        style: docx.BorderStyle.NONE
                                    },
                                    right:{
                                        size: 1,
                                        color: "#ffffff",
                                        style: docx.BorderStyle.NONE
                                    },
                                    left: {
                                        size: 1,
                                        color: "#ffffff",
                                        style: docx.BorderStyle.NONE
                                    }
                                },
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: "Lárez Mata, Jesús José"
                                            })
                                        ],
                                        alignment: docx.AlignmentType.LEFT
                                    })
                                ],
                                width: {
                                    size: 2000,
                                    type: docx.WidthType.DXA
                                },
                            }),
                            new docx.TableCell({
                                borders: {
                                    top: {
                                        size: 1,
                                        color: "#ffffff",
                                        style: docx.BorderStyle.NONE
                                    },
                                    bottom: {
                                        size: 1,
                                        color: "#ffffff",
                                        style: docx.BorderStyle.NONE
                                    },
                                    right:{
                                        size: 1,
                                        color: "#ffffff",
                                        style: docx.BorderStyle.NONE
                                    },
                                    left: {
                                        size: 1,
                                        color: "#ffffff",
                                        style: docx.BorderStyle.NONE
                                    }
                                },
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: ""
                                            })
                                        ],
                                        alignment: docx.AlignmentType.LEFT
                                    })
                                ],
                                
                            }),
                            
                        ]
                    }),
                    new docx.TableRow({
                        children: [
                            new docx.TableCell({
                                borders: {
                                    top: {
                                        size: 1,
                                        color: "#ffffff",
                                        style: docx.BorderStyle.NONE
                                    },
                                    bottom: {
                                        size: 1,
                                        color: "#ffffff",
                                        style: docx.BorderStyle.NONE
                                    },
                                    right:{
                                        size: 1,
                                        color: "#ffffff",
                                        style: docx.BorderStyle.NONE
                                    },
                                    left: {
                                        size: 1,
                                        color: "#ffffff",
                                        style: docx.BorderStyle.NONE
                                    }
                                },
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: "Decisión Final: "
                                            })
                                        ]
                                    })
                                ]
                            }),
                            new docx.TableCell({
                                borders: {
                                    top: {
                                        size: 1,
                                        color: "#ffffff",
                                        style: docx.BorderStyle.NONE
                                    },
                                    bottom: {
                                        size: 1,
                                        color: "#ffffff",
                                        style: docx.BorderStyle.NONE
                                    },
                                    right:{
                                        size: 1,
                                        color: "#ffffff",
                                        style: docx.BorderStyle.NONE
                                    },
                                    left: {
                                        size: 1,
                                        color: "#ffffff",
                                        style: docx.BorderStyle.NONE
                                    }
                                },
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: "Aprobado: "
                                            })
                                        ]
                                    })
                                ],
                                width: {
                                    size: 1500,
                                    type: docx.WidthType.DXA
                                },
                            }),
                            new docx.TableCell({
                                borders: {
                                    top: {
                                        size: 1,
                                        color: "#ffffff",
                                        style: docx.BorderStyle.NONE
                                    },
                                    bottom: {
                                        size: 1,
                                        color: "#ffffff",
                                        style: docx.BorderStyle.NONE
                                    },
                                    right:{
                                        size: 1,
                                        color: "#ffffff",
                                        style: docx.BorderStyle.NONE
                                    },
                                    left: {
                                        size: 1,
                                        color: "#ffffff",
                                        style: docx.BorderStyle.NONE
                                    }
                                },
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: "Reprobada:"
                                            })
                                        ]
                                    })
                                ],
                                width: {
                                    size: 1500,
                                    type: docx.WidthType.DXA
                                },
                            }),
                            new docx.TableCell({
                                borders: {
                                    top: {
                                        size: 1,
                                        color: "#ffffff",
                                        style: docx.BorderStyle.NONE
                                    },
                                    bottom: {
                                        size: 1,
                                        color: "#ffffff",
                                        style: docx.BorderStyle.NONE
                                    },
                                    right:{
                                        size: 1,
                                        color: "#ffffff",
                                        style: docx.BorderStyle.NONE
                                    },
                                    left: {
                                        size: 1,
                                        color: "#ffffff",
                                        style: docx.BorderStyle.NONE
                                    }
                                },
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: "Fecha: "
                                            })
                                        ],
                                        alignment: docx.AlignmentType.RIGHT
                                    })
                                ],
                                width: {
                                    size: 2000,
                                    type: docx.WidthType.DXA
                                },
                            }),
                            new docx.TableCell({
                                borders: {
                                    top: {
                                        size: 1,
                                        color: "#ffffff",
                                        style: docx.BorderStyle.NONE
                                    },
                                    bottom: {
                                        size: 1,
                                        color: "#ffffff",
                                        style: docx.BorderStyle.NONE
                                    },
                                    right:{
                                        size: 1,
                                        color: "#ffffff",
                                        style: docx.BorderStyle.NONE
                                    },
                                    left: {
                                        size: 1,
                                        color: "#ffffff",
                                        style: docx.BorderStyle.NONE
                                    }
                                },
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
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
            new docx.Paragraph({
                children: [
                    new docx.TextRun({
                        text: "Observaciones (solo en caso de ser rechazado el documento):"
                    })
                ],
                spacing: {
                    before: 10,
                    after: 10
                }
            }),
            new docx.Table({
                indent: {
                    size: 3000,
                    type: docx.WidthType.DXA
                },
                rows: [
                    new docx.TableRow({
                        height: {
                            value: 700,
                            rule: docx.HeightRule.EXACT
                        },
                        children: [
                            new docx.TableCell({
                                borders: {
                                    top: {
                                        size: 1,
                                        color: "#FFFFFF",
                                        style: docx.BorderStyle.NONE
                                    },
                                    left: {
                                        size: 1,
                                        color: "#FFFFFF",
                                        style: docx.BorderStyle.NONE
                                    },
                                    right: {
                                        size: 1,
                                        color: "#FFFFFF",
                                        style: docx.BorderStyle.NONE
                                    }
                                },
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun("")
                                        ]
                                    })
                                ],
                                width: {
                                    size: 3000,
                                    type: docx.WidthType.DXA
                                }
                            }),
                        ],
                    }),
                    new docx.TableRow({
                        height: {
                            value: 700,
                            rule: docx.HeightRule.EXACT
                        },
                        children: [
                            new docx.TableCell({
                                borders: {
                                    left: {
                                        size: 1,
                                        color: "#FFFFFF",
                                        style: docx.BorderStyle.NONE
                                    },
                                    right: {
                                        size: 1,
                                        color: "#FFFFFF",
                                        style: docx.BorderStyle.NONE
                                    },
                                    bottom: {
                                        size: 1,
                                        color: "#FFFFFF",
                                        style: docx.BorderStyle.NONE
                                    }
                                },
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun("Firma Revisor")
                                        ],
                                        alignment: docx.AlignmentType.CENTER
                                    }),
                                ],
                                verticalAlign: docx.VerticalAlign.CENTER,
                                width: {
                                    size: 3000,
                                    type: docx.WidthType.DXA
                                }
                            }),
                        ],
                    }),
                ]
            }),
    
    
            ],
        }],
    });
    
    docx.Packer.toBuffer(doc).then((buffer) => {
        fs.writeFileSync("Evaluaciòn Propuesta TIG - Revisor.docx", buffer);
    });
}

