const fs = require("fs");
const docx = require("docx");
const { WidthType,VerticalAlign } = require("docx");

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

const doc = new docx.Document({
    creator: "Luis C. Somoza",
    title: "Planilla de propuesta de TEG",
    description: "Planilla de propuesta de TEG",
    styles: {
        default: {
            heading1: {
                run: {
                    size: 30,
                    bold: true,
                },
                paragraph: {
                    spacing: {
                        after: 200,
                    },
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
                    size: 20,
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
                        font: "Trebuchet MS",
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
                        font: "Trebuchet MS"
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
                        font: "Trebuchet MS"
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
                        font: "Trebuchet MS"
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
                        font: "Trebuchet MS"
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
                        font: "Trebuchet MS"
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
                        font: "Trebuchet MS"
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
                        font: "Trebuchet MS"
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
                        font: "Trebuchet MS"
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
                        font: "Trebuchet MS"
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
                        children : [
                            new docx.TableCell({
                                width: {
                                    size: 1000,
                                    type: docx.WidthType.DXA
                                },
                                children: [
                                ],
                                verticalAlign: VerticalAlign.CENTER,
                            }),
                            new docx.TableCell({
                                width: {
                                    size: 10000,
                                    type: docx.WidthType.DXA
                                },
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: "Tutor Academico",
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
                        children : [
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: "alumno",
                                            })
                                        ],
                                        alignment: docx.AlignmentType.CENTER
                                    })
                                ],
                                verticalAlign: VerticalAlign.CENTER,
                            }),
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: "cedula",
                                            })
                                        ],
                                    })
                                ],
                            })
                        ]
                    }),
                    new docx.TableRow({
                        children : [
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: "alumno",
                                            })
                                        ],
                                        alignment: docx.AlignmentType.CENTER
                                    })
                                ],
                                verticalAlign: VerticalAlign.CENTER,
                            }),
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: "cedula",
                                            })
                                        ],
                                    })
                                ],
                            })
                        ]
                    }),
                    new docx.TableRow({
                        children : [
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: "alumno",
                                            })
                                        ],
                                        alignment: docx.AlignmentType.CENTER
                                    })
                                ],
                                verticalAlign: VerticalAlign.CENTER,
                            }),
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: "cedula",
                                            })
                                        ],
                                    })
                                ],
                            })
                        ]
                    }),
                    new docx.TableRow({
                        children : [
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: "alumno",
                                            })
                                        ],
                                        alignment: docx.AlignmentType.CENTER
                                    })
                                ],
                                verticalAlign: VerticalAlign.CENTER,
                            }),
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: "cedula",
                                            })
                                        ],
                                    })
                                ],
                            })
                        ]
                    }),
                    new docx.TableRow({
                        children : [
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: "alumno",
                                            })
                                        ],
                                        alignment: docx.AlignmentType.CENTER
                                    })
                                ],
                                verticalAlign: VerticalAlign.CENTER,
                            }),
                            new docx.TableCell({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: "cedula",
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
        ]
    }]
});

docx.Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("Planilla Propuesta TEG.docx", buffer);
});

