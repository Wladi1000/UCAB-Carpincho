const fs = require("fs");
const docx = require("docx");
const { Alignment } = require("docx");

const nombre_profesor = 'Franklin Bello';
const modalidad = 'TEG';
const alumno= 'Luis C Somoza';
const propuesta = "Creacion de robots para el mantenimiento de la biblioteca";
const tutor = 'Jannelly Bello';
const correo_administrador = 'lmedinac@ucab.edu.ve';
const administrador = "Luz E. Medina";
const fecha = "";

const doc = new docx.Document({
    creator: "Luis C. Somoza",
    title: "Carta de designación - Revisor de propuesta de trabajo de grado",
    description: "Carta de designación - Revisor de propuesta de trabajo de grado",
    styles: {
        default: {
            heading1: {
                run: {
                    size: 30,
                    bold: true,
                    italics: true,
                    color: "FF0000",
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
                    size: 22,
                },
                paragraph: {
                    spacing: {
                        line: 276,
                    },
                },
            },
            {
                id: "despedida",
                name: "Despedida",
                basedOn: "Normal",
                next: "Normal",
                run: {
                    size: 26,
                },
                paragraph: {
                    spacing: {
                        line: 276,
                    },
                },
            }
        ]
    },
    sections: [{
        properties: {
            type: docx.SectionType.CONTINUOUS,
            margin: {
                top: 200,
                right: 200,
                bottom: 200,
                left: 200,
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
                        text: 'Puerto Ordaz, 03 noviembre 2022.',
                        font: "Trebuchet MS",
                    })
                ],
                alignment: docx.AlignmentType.RIGHT,
                spacing: {
                    after: 200,
                    line: 355,
                    lineRule: docx.LineRuleType.AUTO,
                },
            }),
            new docx.Paragraph({
                style: "aside",
                children: [
                    new docx.TextRun({
                        text: 'Asunto:',
                        bold: true,
                        font: "Trebuchet MS"
                    }),
                    new docx.TextRun({
                        text: ' Designación de Profesor Revisor',
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
                        text: 'Estimado(a) Profesor(a):',
                        bold: true,
                        font: "Trebuchet MS"
                    }),
                    new docx.TextRun({
                        text: ' ' + nombre_profesor,
                        bold: true,
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
                        text: 'Saludándole cordialmente ',
                        font: "Trebuchet MS"
                    })
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
                        text: 'Mediante la presente, la Escuela de Ingeniería Informática desea darle un especial agradecimiento por su colaboración como profesor(a) experto(a), en el tema, en la revisión de la propuesta de Trabajo de Grado, modalidad ',
                        font: "Trebuchet MS"
                    }),
                    new docx.TextRun({
                        text: modalidad,
                        bold: true,
                        font: "Trebuchet MS"
                    }),
                    new docx.TextRun({
                        text: ' titulada: ',
                        font: "Trebuchet MS"
                    }),
                    new docx.TextRun({
                        text: `"${propuesta}". `,
                        bold: true,
                        font: "Trebuchet MS"
                    }),
                    new docx.TextRun({
                        text: 'Elaborada por el(la) estudiante: ',
                        font: "Trebuchet MS"
                    }),
                    new docx.TextRun({
                        text: alumno,
                        bold: true,
                        font: "Trebuchet MS"
                    }),
                    new docx.TextRun({
                        text: ' bajo la tutoría de ',
                        font: "Trebuchet MS"
                    }),
                    new docx.TextRun({
                        text: tutor +'.',
                        bold: true,
                        font: "Trebuchet MS"
                    })
                ],
                alignment: docx.AlignmentType.JUSTIFIED,
                indent: {
                    firstLine: 400
                },
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
                        text: "Adjunto la propuesta y la planilla de evaluación personalizada con los puntos a evaluar, esta debe ser completada en todos sus ítems y luego enviada al correo electronico ",
                        font: "Trebuchet MS"
                    }),
                    new docx.TextRun({
                        text: correo_administrador + ' ',
                        font: "Trebuchet MS"
                    }),
                    new docx.TextRun({
                        text: "lo más pronto le sea posible.",
                        font: "Trebuchet MS"
                    })
                ],
                alignment: docx.AlignmentType.JUSTIFIED,
                indent: {
                    firstLine: 400
                },
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
                        text: "En caso que tenga a bien realizar alguna observación o sugerencia a la propuesta, le agradecemos realizar contacto con el(la) estudiante: ",
                        font: "Trebuchet MS"
                    }),
                    new docx.TextRun({
                        text: alumno + '; ',
                        font: "Trebuchet MS"
                    }),
                    new docx.TextRun({
                        text: "el(los) cuales estará(n) al pendiente para incorporar sus observaciones, antes de la evaluación definitiva en Consejo de Escuela de Ingeniería Informatica. ",
                        font: "Trebuchet MS"
                    })
                ],
                alignment: docx.AlignmentType.JUSTIFIED,
                indent: {
                    firstLine: 400
                },
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
                        text: "El tema presentado por el estudiante ya ha sido considerado como tema válido de Trabajo de Grado por el Comité de Trabajos de Grado de la Escuela de Ingeniería Informática. En caso que usted, como ",
                        font: "Trebuchet MS"
                    }),
                    new docx.TextRun({
                        text: "revisor(a) experto(a), ",
                        bold: true,
                        font: "Trebuchet MS"
                    }),
                    new docx.TextRun({
                        text: "considere que el mismo debe ser rechazado, agradecemos detallar sus razones por escrito, previa reunión con  los  estudiantes.",
                        font: "Trebuchet MS"
                    })
                ],
                indent: {
                    firstLine: 400
                },
                spacing: {
                    after: 200,
                    line: 355,
                    lineRule: docx.LineRuleType.AUTO,
                }
            }),
            new docx.Paragraph({
                style: "despedida",
                children: [
                    new docx.TextRun({
                        text: administrador,
                        italics: true,
                        bold: true,
                        font: "Courgette"
                    })
                ],
                spacing: {
                    after: 200,
                    line: 355,
                    lineRule: docx.LineRuleType.AUTO,
                }
            })
        ],
    }]
});

docx.Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("Carta Modelo Designacion Revisor.docx", buffer);
});

