const fs = require("fs");
const docx = require("docx");
const { WidthType,VerticalAlign, TextRun } = require("docx");

const fecha_envio = "Julio 29 del 2023";
const titulo = "Desarrollo de sistema para generacion de planillas";
const organizacion = "UCAB Guayana";
const empresa = {
    nombre: "TIMACA LLC",
    direccion: "No tiene direccion",
    telefono: "4249749230"
}
const alumno = {
    nombre: "Luis C. Somoza",
    cedula: "27656348",
    telefono: "4249749230",
    email: "lcsomoza.19@est.ucab.edu.ve",
    oficina: '',
    habitacion: '',
    fecha_inicio: '',
    horario_propuesto: ''
}
const tutor_empresarial = {
    nombre: "Pedro Perez",
    cedula: "12345678",
    email: "pperez.19@gmail.com",
    telefono: "4249749230",
    profesion: "Ingeniero Civil",
    oficina: '',
    habitacion: '',
    graduado: 5,
    tutor_tg: false,
    profesor_ucab: false,
    experiencia: 8,
    cargo: "Gerente de operaciones",
    fecha_entrega: new Date()
}

const tam_cuadro_titulo = 280;
const oneHundred = [
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
    new docx.TableCell({
        children: [],
        width: {
            size: tam_cuadro_titulo,
            type: docx.WidthType.DXA
        },
    }),
]
const doc = new docx.Document({
    creator: "Luis C. Somoza",
    title: "Planilla de propuesta de TEG",
    description: "Planilla de propuesta de TEG",
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
                        text: 'Ciudad Guayanna, ' + fecha_envio,
                        font: "Times New Roman",
                    })
                ],
                alignment: docx.AlignmentType.RIGHT,
                spacing: {
                    after: 100,
                    line: 355,
                    lineRule: docx.LineRuleType.AUTO,
                },
            }),
            new docx.Paragraph({
                style: "aside",
                children: [
                    new docx.TextRun({
                        text: 'Señores',
                        font: "Times New Roman",
                    }),
                ],
                spacing: {
                    after: 100,
                    line: 355,
                    lineRule: docx.LineRuleType.AUTO,
                }
            }),    
            new docx.Paragraph({
                style: "aside",
                children: [
                    new docx.TextRun({
                        text: 'Consejo de Escuela de Ingenieria Informatica',
                        font: "Times New Roman",
                    }),
                ],
                spacing: {
                    after: 100,
                    line: 355,
                    lineRule: docx.LineRuleType.AUTO,
                }
            }),
            new docx.Paragraph({
                style: "aside",
                children: [
                    new docx.TextRun({
                        text: 'Facultad de Ingenieria',
                        font: "Times New Roman",
                    }),
                ],
                spacing: {
                    after: 100,
                    line: 355,
                    lineRule: docx.LineRuleType.AUTO,
                }
            }),
            new docx.Paragraph({
                style: "aside",
                children: [
                    new docx.TextRun({
                        text: 'Universidad Catolica Andres Bello',
                        font: "Times New Roman",
                    }),
                ],
                spacing: {
                    after: 100,
                    line: 355,
                    lineRule: docx.LineRuleType.AUTO,
                }
            }),
            new docx.Paragraph({
                style: "aside",
                children: [
                    new docx.TextRun({
                        text: 'Presente. -',
                        font: "Times New Roman",
                    }),
                ],
                spacing: {
                    after: 200,
                    line: 355,
                    lineRule: docx.LineRuleType.AUTO,
                }
            }),
            new docx.Paragraph({
                style: "aside",
                children: [
                    new docx.TextRun({
                        text: "Por medio de la presente hago constar que estoy dispuesto a supervisar, en calidad de Tutor Académico el Trabajo Experimental de Grado (TEG) titulado: " + '"'+titulo+'", que será desarrollado por el (los) alumno(s):',
                        font: "Times New Roman",
                    })
                ],
                alignment: docx.AlignmentType.JUSTIFIED,
                indent: {
                    firstLine: 400
                },
                spacing: {
                    after: 100,
                    line: 355,
                    lineRule: docx.LineRuleType.AUTO,
                }
            }),
            new docx.Paragraph({
                style: "aside",
                bullet: {
                    level: 0
                },
                children: [
                    new docx.TextRun({
                        text: alumno.nombre +", C.I.N. " + alumno.cedula,
                        font: "Times New Roman",
                    })
                ],
                alignment: docx.AlignmentType.JUSTIFIED,
                spacing: {
                    line: 355,
                    lineRule: docx.LineRuleType.AUTO,
                }
            }),
            new docx.Paragraph({
                style: "aside",
                children: [
                    new docx.TextRun({
                        text: "Para lo cual solicito la aprobación de este Consejo de Escuela. Así mismo hago constar que he leído el extracto con la descripción de las funciones del Tutor y estoy conforme con la responsabilidad que me corresponde asumir.",
                        font: "Times New Roman",
                    })
                ],
                alignment: docx.AlignmentType.JUSTIFIED,
                spacing: {
                    after: 200,
                    line: 355,
                    lineRule: docx.LineRuleType.AUTO,
                }
            }),
            new docx.Paragraph({
                style: "aside",
                children: [
                    new docx.TextRun({
                        text: "Atentamente, ",
                        font: "Times New Roman",
                    })
                ],
                spacing: {
                    after: 25,
                    line: 355,
                    lineRule: docx.LineRuleType.AUTO,
                }
            }),
            //INSERTAMOS TABLA DE DATOS DE TUTOR ACADEMICO AQUI
            new docx.Table({
                columnWidths: [3000, 4500],
                rows: [
                    new docx.TableRow({
                        height: {
                            value: 500, 
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
                                width: {
                                    size: 1000,
                                    type: docx.WidthType.DXA
                                },
                                children: [],
                                verticalAlign: VerticalAlign.CENTER,
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
                                width: {
                                    size: 10000,
                                    type: docx.WidthType.DXA
                                },
                                children: [
                                    new docx.Paragraph({
                                        style: "aside",
                                        children: [
                                            new docx.TextRun({
                                                text: "       Tutor Academico",
                                                bold: true,
                                            })
                                        ],
                                        alignment: docx.AlignmentType.LEFT
                                    })
                                ]
                            }),
                        ]
                    }),
                    new docx.TableRow({
                        height: {
                            value: 500, 
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
                                verticalAlign: VerticalAlign.CENTER,
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
                            value: 500, 
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
                                verticalAlign: VerticalAlign.CENTER,
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
                            value: 500, 
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
                                verticalAlign: VerticalAlign.CENTER,
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
                            value: 500, 
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
                                verticalAlign: VerticalAlign.CENTER,
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
                            })
                        ]
                    }),
                    new docx.TableRow({
                        height: {
                            value: 500, 
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
                                        children: [
                                            new docx.TextRun({
                                                text: "Fecha",
                                            })
                                        ],
                                        alignment: docx.AlignmentType.CENTER
                                    })
                                ],
                                verticalAlign: VerticalAlign.CENTER,
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
                            })
                        ]
                    }),
                ]
            }),
            ///////////////////////////////////////////////////
            ///////////////////////////////////////////////////
            ///////////////////////////////////////////////////
            new docx.Paragraph({
                style: "aside",
                children: [
                    new docx.TextRun({
                        text: ""
                    })
                ],
                spacing: {
                    before: 200,
                    after: 100,
                    line: 355,
                    lineRule: docx.LineRuleType.AUTO,
                }
            }),
            ///////////////////////////////////////////////////
            //////////////INSERTAMOS TABLA PARA FIRMA///////////
            ///////////////////////////////////////////////////
            new docx.Table({
                columnWidths: [3000, 4500],
                indent: {
                    size: 5500,
                    type: WidthType.DXA,
                },
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
                                        style: "aside",
                                        children: [
                                            new docx.TextRun({
                                                text: "Firma"
                                            }),
                                        ]
                                    })
                                ],
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
                                verticalAlign: VerticalAlign.CENTER,
                            }),
                            new docx.TableCell({
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
                                width: {
                                    size: 3000,
                                    type: docx.WidthType.DXA
                                },
                            }),
                        ]
                    }),
                ],
            }),
            ///////////////////////////////////////////////////
            ///////////////////////////////////////////////////
            ///////////////////////////////////////////////////
            //Salto de página
            new docx.Paragraph({
                children:[ new docx.PageBreak()]
            }),
            new docx.Paragraph({
                heading: docx.HeadingLevel.HEADING_1,
                children:[ 
                    new docx.TextRun({
                        text: "PLANILLA RESUMEN DE DATOS DE LA PROPUESTA DE TEG "
                    })
                ]
            }),
            new docx.Paragraph({
                style: "aside",
                children:[ 
                    new docx.TextRun({
                        text: "Tema Propuesto: <no debe exceder los 200 caracteres y debe colocar cada carácter en una casilla>"
                    })
                ],
                spacing: {
                    after: 200,
                    line: 355,
                    lineRule: docx.LineRuleType.AUTO,
                }
            }),
            //Aqui se tiene que insertar la tabla 50 x 4 y extraer letra a letra el titulo
            new docx.Table({
                rows: [
                    new docx.TableRow({
                        children: oneHundred
                    }),
                    new docx.TableRow({
                        children: oneHundred
                    }),
                    new docx.TableRow({
                        children: oneHundred
                    }),
                    new docx.TableRow({
                        children: oneHundred
                    })
                ]
            }),
            //////////////////////////////////////////////////////////////////////////////
            new docx.Paragraph({
                style: "aside",
                children:[ 
                    new docx.TextRun({
                        text: "Organización donde desarrollará el TEG: "
                    })
                ],
                spacing: {
                    before: 200,
                    after: 200,
                    line: 355,
                    lineRule: docx.LineRuleType.AUTO,
                }
            }),
            new docx.Table({
                columnWidths: [3000, 4500],
                rows: [
                    new docx.TableRow({
                        height: {
                            value: 500, 
                            rule: docx.HeightRule.EXACT
                        },
                        children: [
                            new docx.TableCell({
                                width: {
                                    size: 10000,
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
                                verticalAlign: VerticalAlign.CENTER,
                            }),
                        ]
                    }),
                ],
            }),
            new docx.Paragraph({
                style: "aside",
                children: [
                    new TextRun({
                        text: ""
                    })
                ],
                spacing: {
                    after: 200,
                    before: 200
                }
            }),
            //Seccion de datos de alumno
            new docx.Paragraph({
                style: "aside",
                children: [
                    new TextRun({
                        text: "Datos de los Alumnos: "
                    })
                ],
                spacing: {
                    after: 200,
                    line: 355,
                    lineRule: docx.LineRuleType.AUTO,
                }
            }),
            new docx.Table({
                columnWidths: [3000, 4500],
                rows: [
                    new docx.TableRow({
                        height: {
                            value: 500, 
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
                                verticalAlign: VerticalAlign.CENTER,
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
                                verticalAlign: VerticalAlign.CENTER,
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
                                verticalAlign: VerticalAlign.CENTER,
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
                                verticalAlign: VerticalAlign.CENTER,
                            }),
                        ]
                    }),
                    new docx.TableRow({
                        height: {
                            value: 500, 
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
                                verticalAlign: VerticalAlign.CENTER,
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
                                verticalAlign: VerticalAlign.CENTER,
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
                                verticalAlign: VerticalAlign.CENTER,
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
                                verticalAlign: VerticalAlign.CENTER,
                            })
                        ]
                    }),
                
                ],
            }),
            new docx.Paragraph({
                style: "aside",
                children: [
                    new TextRun({
                        text: ""
                    })
                ],
                spacing: {
                    after: 200,
                    before: 200
                }
            }),
            new docx.Paragraph({
                style: "aside",
                children: [
                    new TextRun({
                        text: "Datos del Tutor Académico:"
                    })
                ],
                spacing: {
                    after: 200,
                    line: 355,
                    lineRule: docx.LineRuleType.AUTO,
                }
            }),
            //Datos de tutor academico
            new docx.Table({
                columnWidths: [3000, 4500],
                rows: [
                    new docx.TableRow({
                        height: {
                            value: 500, 
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
                                verticalAlign: VerticalAlign.CENTER,
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
                            value: 500, 
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
                                verticalAlign: VerticalAlign.CENTER,
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
                            value: 500, 
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
                                verticalAlign: VerticalAlign.CENTER,
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
                            value: 500, 
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
                                verticalAlign: VerticalAlign.CENTER,
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
                            value: 500, 
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
                                verticalAlign: VerticalAlign.CENTER,
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
                            value: 500, 
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
                                verticalAlign: VerticalAlign.CENTER,
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
                            value: 500, 
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
                                verticalAlign: VerticalAlign.CENTER,
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
            /////////////////////////////////////////////////////////////////////////////////////
            new docx.Paragraph({
                children:[ new docx.PageBreak()]
            }),
            new docx.Paragraph({
                style: "aside",
                children:[ 
                    new docx.TextRun({
                        text: "Datos Alumno1"
                    })
                ],
                spacing: {
                    after: 200,
                    line: 355,
                    lineRule: docx.LineRuleType.AUTO,
                }
            }),
            new docx.Table({
                columnWidths: [3000, 4500],
                rows: [
                    new docx.TableRow({
                        height: {
                            value: 500, 
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
                                verticalAlign: VerticalAlign.CENTER,
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
                            value: 500, 
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
                                verticalAlign: VerticalAlign.CENTER,
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
                            value: 500, 
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
                                verticalAlign: VerticalAlign.CENTER,
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
                            value: 500, 
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
                                verticalAlign: VerticalAlign.CENTER,
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
                            })
                        ]
                    }),
                ]
            }),
            new docx.Paragraph({
                style: "aside",
                children:[ 
                    new docx.TextRun({
                        text: "Datos Alumno2"
                    })
                ],
                spacing: {
                    before: 200,
                    after: 200
                }
            }),
            new docx.Table({
                columnWidths: [3000, 4500],
                rows: [
                    new docx.TableRow({
                        height: {
                            value: 500, 
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
                                verticalAlign: VerticalAlign.CENTER,
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
                            value: 500, 
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
                                verticalAlign: VerticalAlign.CENTER,
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
                            value: 500, 
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
                                verticalAlign: VerticalAlign.CENTER,
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
                            value: 500, 
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
                                verticalAlign: VerticalAlign.CENTER,
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
                            })
                        ]
                    }),
                    new docx.TableRow({
                        height: {
                            value: 500, 
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
                                                text: "Fecha",
                                            })
                                        ],
                                        alignment: docx.AlignmentType.CENTER
                                    })
                                ],
                                verticalAlign: VerticalAlign.CENTER,
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
                style: "aside",
                children:[ 
                    new docx.TextRun({
                        text: "Datos Tutor Academico"
                    })
                ],
                spacing: {
                    before: 200,
                    after: 200
                }
            }),
            new docx.Table({
                columnWidths: [3000, 4500],
                rows: [
                    new docx.TableRow({
                        height: {
                            value: 500, 
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
                                        alignment: docx.AlignmentType.LEFT
                                    })
                                ],
                                verticalAlign: VerticalAlign.CENTER,
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
                            value: 500, 
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
                                        alignment: docx.AlignmentType.LEFT
                                    })
                                ],
                                verticalAlign: VerticalAlign.CENTER,
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
                            value: 500, 
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
                                        alignment: docx.AlignmentType.LEFT
                                    })
                                ],
                                verticalAlign: VerticalAlign.CENTER,
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
                            value: 500, 
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
                                        alignment: docx.AlignmentType.LEFT
                                    })
                                ],
                                verticalAlign: VerticalAlign.CENTER,
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
                                        
                                    }),
                                ],
                                width: {
                                    size: 10000,
                                    type: docx.WidthType.DXA
                                },
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
                                        
                                    }),
                                ],
                                width: {
                                    size: 10000,
                                    type: docx.WidthType.DXA
                                },
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
                                        
                                    }),
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
                            value: 500, 
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
                                        alignment: docx.AlignmentType.LEFT
                                    })
                                ],
                                verticalAlign: VerticalAlign.CENTER,
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
                                    size: 5000,
                                    type: docx.WidthType.DXA
                                },
                            })
                        ]
                    }),
                ]
            }),
            new docx.Paragraph({
                children:[ new docx.PageBreak()]
            }),
            new docx.Paragraph({
                children:[ 
                    new docx.TextRun({
                        text: "Datos de la Empresa:"
                    })
                ],
                spacing: {
                    after: 200
                }
            }),
            new docx.Table({
                columnWidths: [3000, 4500],
                rows: [
                    new docx.TableRow({
                        height: {
                            value: 500, 
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
                                verticalAlign: VerticalAlign.CENTER,
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
                            value: 500, 
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
                                verticalAlign: VerticalAlign.CENTER,
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
                            value: 500, 
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
                                verticalAlign: VerticalAlign.CENTER,
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
                                    size: 5000,
                                    type: docx.WidthType.DXA
                                },
                            })
                        ]
                    }),
                    new docx.TableRow({
                        height: {
                            value: 500, 
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
                                verticalAlign: VerticalAlign.CENTER,
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
                                    size: 5000,
                                    type: docx.WidthType.DXA
                                },
                            })
                        ]
                    }),
                    new docx.TableRow({
                        height: {
                            value: 500, 
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
                                        children: [
                                            new docx.TextRun({
                                                text: "Fecha",
                                            })
                                        ],
                                        alignment: docx.AlignmentType.CENTER
                                    })
                                ],
                                verticalAlign: VerticalAlign.CENTER,
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
                                    size: 5000,
                                    type: docx.WidthType.DXA
                                },
                            })
                        ]
                    }),
                ]
            }),
            new docx.Paragraph({
                children:[ 
                    new docx.TextRun({
                        text: "Historial de revisiones"
                    })
                ],
            }),
            new docx.Table({
                columnWidths: [3000, 4500],
                rows: [
                    new docx.TableRow({
                        height: {
                            value: 500, 
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
                                verticalAlign: VerticalAlign.CENTER,
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
                            value: 500, 
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
                                verticalAlign: VerticalAlign.CENTER,
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
                            value: 500, 
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
                                verticalAlign: VerticalAlign.CENTER,
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
                            value: 500, 
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
                                verticalAlign: VerticalAlign.CENTER,
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
                            })
                        ]
                    }),
                    new docx.TableRow({
                        height: {
                            value: 500, 
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
                                        children: [
                                            new docx.TextRun({
                                                text: "Fecha",
                                            })
                                        ],
                                        alignment: docx.AlignmentType.CENTER
                                    })
                                ],
                                verticalAlign: VerticalAlign.CENTER,
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
                            })
                        ]
                    }),
                ]
            }),
            new docx.Table({
                columnWidths: [3000, 4500],
                rows: [
                    new docx.TableRow({
                        height: {
                            value: 500, 
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
                                verticalAlign: VerticalAlign.CENTER,
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
                            value: 500, 
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
                                verticalAlign: VerticalAlign.CENTER,
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
                            value: 500, 
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
                                verticalAlign: VerticalAlign.CENTER,
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
                            value: 500, 
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
                                verticalAlign: VerticalAlign.CENTER,
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
                            })
                        ]
                    }),
                    new docx.TableRow({
                        height: {
                            value: 500, 
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
                                        children: [
                                            new docx.TextRun({
                                                text: "Fecha",
                                            })
                                        ],
                                        alignment: docx.AlignmentType.CENTER
                                    })
                                ],
                                verticalAlign: VerticalAlign.CENTER,
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
                            })
                        ]
                    }),
                ]
            }),

        ]
    }]
});

docx.Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("Planilla Propuesta TEG.docx", buffer);
});

