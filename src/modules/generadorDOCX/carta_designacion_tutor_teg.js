import * as fs from 'fs'
import docx from 'docx'
const { Paragraph } = docx
//Modelo de los datos de la carta de designación para inserción de datos
const Carta_designacion = {
    propuesta: {
        titulo: '',
        modalidad: '',
        alumnno: [{
            cedula: '',
            nombres: '',
            apellidos: ''
        }],
        tutor: ''
    },
    fecha_designacion: '',
    CDE: '',
    administrador: ''
}

const alumnos = [ 
    {
        cedula: '27656348',
        nombres: 'Luis Carlos',
        apellidos: 'Somoza Ledezma'
    },
    {
        cedula: '27301846',
        nombres: 'Wladimir Josue',
        apellidos: 'SanVicente Suarez'
    }
]
let flag = 1;
const generaTitulo = (titulo) => {
    if(flag === 1){
        flag = 0;
        const fila = new docx.TableCell({
            children: [
                new Paragraph({
                    children: [
                        new docx.TextRun({
                            text: titulo
                        })
                    ]
                })
            ],
            rowSpan: 2,
        })
        return fila;
    }
    return;
}
const encabezadoTablaAlumno = new docx.TableRow({
    children : [
        new docx.TableCell({
            width: {
                size: 3505,
                type: docx.WidthType.DXA
            },
            children: [
                new docx.Paragraph({
                    children: [
                        new docx.TextRun({
                            text: "Estudiante",
                            bold: true,
                        })
                    ],
                    alignment: docx.AlignmentType.CENTER
                })
            ],
            verticalAlign: docx.VerticalAlign.CENTER,
        }),
        new docx.TableCell({
            width: {
                size: 3505,
                type: docx.WidthType.DXA
            },
            children: [
                new docx.Paragraph({
                    children: [
                        new docx.TextRun({
                            text: "Cedula",
                            bold: true,
                        })
                    ],
                    alignment: docx.AlignmentType.CENTER
                })
            ]
        }),
        new docx.TableCell({
            width: {
                size: 3505,
                type: docx.WidthType.DXA
            },
            children: [
                new docx.Paragraph({
                    children: [
                        new docx.TextRun({
                            text: "Titulo Trabajo de Grado",
                            bold: true,
                        })
                    ],
                    alignment: docx.AlignmentType.CENTER
                })
            ],
            verticalAlign: docx.VerticalAlign.CENTER,
        })
    ]
});
const generarTablaAlumno = (alumnos,titulo) => {
    console.log("Ejecutando generarTablaAlumno()")
    const filas = [];
    filas.push(encabezadoTablaAlumno)
    //filas.push(encabezadoTablaAlumno)
    
    alumnos.forEach(alumno => {
        let fila = new docx.TableRow({
            children: [
                new docx.TableCell({
                    children: [
                        new Paragraph({
                            children: [
                                new docx.TextRun({
                                    text: alumno.apellidos + ', ' + alumno.nombres
                                })
                            ]
                        })
                    ]
                }),
                new docx.TableCell({
                    children: [
                        new Paragraph({
                            children: [
                                new docx.TextRun({
                                    text: alumno.cedula
                                })
                            ]
                        })
                    ]
                }),
                generaTitulo(titulo)
            ]
        })
        filas.push(fila)
    });
    

    return filas

}
export const generarCartaDesignacionTutorTEG = (Carta_designacion) => {
    const doc = new docx.Document({
        creator: "Luis C. Somoza & Wladimir San Vicente",
        title: "Carta de designación - Tutor de propuesta de trabajo de grado experimental",
        description: "Carta de designación - Tutor de propuesta de trabajo de grado experimental",
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
                        size: 20,
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
                    top: 150,
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
                            text: Carta_designacion.fecha_designacion,
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
                            text: 'Profesor(a):',
                            bold: true,
                            font: "Trebuchet MS"
                        }),
                        new docx.TextRun({
                            text: ' ' + Carta_designacion.propuesta.tutor,
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
                            text: 'Me es grato dirigirme a Usted en oportunidad de informarle que en Consejo de Escuela CE No ' + Carta_designacion.CDE,
                            font: "Trebuchet MS"
                        }),
                        new docx.TextRun({
                            text: " Fecha: " + Carta_designacion.fecha_designacion,
                            bold: true,
                            font: "Trebuchet MS"
                        }),
                        new docx.TextRun({
                            text: ', ha sido confirmado como Tutor Académico del Trabajo Experimental de Grado: ',
                            font: "Trebuchet MS"
                        }),
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
                new docx.Table({
                    columnWidths: [3505, 5505],
                    rows: generarTablaAlumno(alumnos,Carta_designacion.propuesta.titulo)
                }),
                new docx.Paragraph({
                    style: "aside",
                    children: [
                        new docx.TextRun({
                            text: "Para la realización de la tutoría se anexan los siguientes documentos: ",
                            font: "Trebuchet MS"
                        })
                    ],
                    alignment: docx.AlignmentType.JUSTIFIED,
                    indent: {
                        firstLine: 400
                    },
                    spacing: {
                        before: 200,
                        after: 200,
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
                            text: "Propuesta de Trabajo de Grado aprobada ",
                            font: "Trebuchet MS"
                        })
                    ],
                    alignment: docx.AlignmentType.JUSTIFIED,
                    spacing: {
                        after: 50,
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
                            text: "Guía Informe Trabajo Grado IINF Gy, donde se detalla el contenido y formato que debe tener el Informe de Trabajo Grado, el cual usted debe garantizar al emitir la Carta Culminación TG. ",
                            font: "Trebuchet MS"
                        })
                    ],
                    alignment: docx.AlignmentType.JUSTIFIED,
                    spacing: {
                        after: 50,
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
                            text: "Reglamento Trabajo de Grado de la Facultad de Ingeniería, vigente y que rige lo relativo a la elaboración y presentación del Trabajo de Grado en la Facultad. ",
                            font: "Trebuchet MS"
                        })
                    ],
                    alignment: docx.AlignmentType.JUSTIFIED,
                    spacing: {
                        after: 50,
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
                            text: "Modelo Carta Culminación TG Tutor Académico, en la cual el Tutor Académico, certifica que tanto el Trabajo de Grado como el Informe del mismo, están terminados y listos para su defensa. ",
                            font: "Trebuchet MS"
                        })
                    ],
                    alignment: docx.AlignmentType.JUSTIFIED,
                    spacing: {
                        after: 50,
                        line: 355,
                        lineRule: docx.LineRuleType.AUTO,
                    }
                }),
                new docx.Paragraph({
                    style: "aside",
                    children: [
                        new docx.TextRun({
                            text: "Para la entrega formal del Trabajo Experimental de Grado, usted, como Tutor Académico, debe enviar a la Escuela el informe después de revisado, junto a la Carta Culminación TG.",
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
                            text: "Le informo que, en el marco de la política de investigación de la Facultad de Ingeniería, se espera que este trabajo, que corresponde con un proyecto de investigación, genere un producto de publicación, bien en algunas de las revistas de la Universidad como: Guayana Sustentable, TEKHNÉ, Educab, otra de la UCAB, alguna revista nacional o Internacional del área del trabajo o en la plataforma SABER-UCAB.",
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
                    style: "aside",
                    children: [
                        new docx.TextRun({
                            text: "Para que el alumno pueda participar en el Acto de Grado de abril 2023, debe realizar la entrega formal del informe de TG con fecha tope el 14/10/2022",
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
                    style: "aside",
                    children: [
                        new docx.TextRun({
                            text: "Agradezco confirme la recepción de la presente comunicación",
                            font: "Trebuchet MS",
                            italics: true
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
                    style: "aside",
                    children: [
                        new docx.TextRun({
                            text: "Saludandole cordialmente",
                            font: "Trebuchet MS",
                            italics: true
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
                    style: "aside",
                    children: [
                        new docx.TextRun({
                            text: "Atentamente,",
                            font: "Trebuchet MS",
                            italics: true
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
                            text: Carta_designacion.administrador,
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
        fs.writeFileSync("Carta Modelo Designacion Tutor Academico TEG.docx", buffer);
    });
}

