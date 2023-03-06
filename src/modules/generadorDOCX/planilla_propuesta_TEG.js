import * as fs from 'fs';
import docx from 'docx';
import { BorderStyle,TableRow,HeightRule, TableCell,WidthType,Paragraph, TextRun, AlignmentType, VerticalAlign } from 'docx'
const sin_bordes = {
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
}
function is_char(value)
{
    if (Object.prototype.toString.call(value) !== '[object String]')
     return false;
    return value && value.length === 1;
}
 
const planilla_propuesta_TEG = {
    fecha_envio : "Julio 29 del 2023",
    titulo : "Desarrollo de sistema para generacion de planillas",
    organizacion : "UCAB Guayana",
    alumno : [{
        nombre: "Luis C. Somoza",
        cedula: "27656348",
        telefono: "4249749230",
        email: "lcsomoza.19@est.ucab.edu.ve",
        oficina: '',
        habitacion: '',
        fecha_inicio: '',
        horario_propuesto: ''
    },
    {
        nombre: "Luis C. Somoza 2",
        cedula: "27656348",
        telefono: "4249749230",
        email: "lcsomoza.19@est.ucab.edu.ve",
        oficina: '',
        habitacion: '',
        fecha_inicio: '',
        horario_propuesto: ''
    }
    ],
    empresa : {
        nombre: "TIMACA LLC",
        direccion: "No tiene direccion",
        telefono: "4249749230"
    },
    tutor_academico : {
        nombre: "Pedro Perez",
        cedula: "12345678",
        email: "pperez.19@gmail.com",
        telefono: "4249749230",
        profesion: "Ingeniero Civil",
        oficina: 'Datos oficina',
        habitacion: 'Datos habitacion',
        graduado: "5",
        tutor_tg: false,
        profesor_ucab: false,
        experiencia: "8",
        cargo: "Gerente de operaciones",
        fecha_entrega: new Date()
    },


}
const tam_cuadro_titulo = 280;
const generar50Celdas = (titulo) => {
    const lista = []
    for (let j = 0; j < 50; j++){
            if(is_char(titulo[j])){

                let celda = new TableCell({
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: titulo[j]
                                })
                            ]
                        })
                    ],
                    width: {
                        size: tam_cuadro_titulo,
                        type: WidthType.DXA
                    },
                });

                lista.push(celda);
                
            }else{
                let celdaVacia = new TableCell({
                                    children: [],
                                    width: {
                                        size: tam_cuadro_titulo,
                                        type: WidthType.DXA
                                    },
                                 });
                lista.push(celdaVacia);           
            }

    }
    return lista;

}
const generarTituloOneHundred = (titulo) => {
    const rows = [];
    let mitad = 50
    let extraer = titulo.slice(0,50);
    let copia = titulo;
    for (let i = 0; i < 4; i++){
        let fila = new TableRow({
                children: generar50Celdas(extraer)
        })
        rows.push(fila);
        copia = titulo.slice(mitad, titulo.length);
        extraer = copia.slice(0,50)
        mitad=mitad+50;
    }
    return rows
}
const titulo = "Probando el titulo de trabajo de grado de la tesis/Probando el titulo de trabajo de grado de la tesis/Probando el titulo de trabajo de grado de la tesis";
//generarTituloOneHundred(titulo)
const generarDatosAlumnos = () => {
            const lista = [];
            planilla_propuesta_TEG.alumno.forEach( (element) => {
                const resultado = new Paragraph({
                    style: "aside",
                    bullet: {
                        level: 0
                    },
                    children: [
                        new TextRun({
                            text: element.nombre +", C.I.N. " + element.cedula,
                            font: "Times New Roman",
                        })
                    ],
                    alignment: AlignmentType.JUSTIFIED,
                    spacing: {
                        line: 355,
                        lineRule: docx.LineRuleType.AUTO,
                    }
                })
                lista.push(resultado);
            })
            return lista;
}

const encabezadoTablaAlumno = new TableRow({
    height: {
        value: 500, 
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
})
const generarNombresAlumno = () => {

    const lista = []
    let alumno2 = null;
    let alumno1 = null;
    console.log(planilla_propuesta_TEG.alumno[0] !== null);
    console.log(planilla_propuesta_TEG.alumno[1] !== null);
   if (planilla_propuesta_TEG.alumno[0] !== null){
    alumno1 = new TableRow({
        height: {
            value: 500, 
            rule: HeightRule.EXACT
        },
        children : [
            new TableCell({
                borders: sin_bordes,
                children: [
                    new Paragraph({
                        style: "aside",
                        children: [
                            new TextRun({
                                text: "Nombre de alumno 1",
                                bold: true
                            })
                        ],
                        alignment: AlignmentType.LEFT
                    })
                ],
                verticalAlign: VerticalAlign.CENTER,
            }),
            new TableCell({
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
                    new Paragraph({
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
                            new TextRun({
                                text: planilla_propuesta_TEG.alumno[0].nombre,
                            })
                        ],
                    })
                ],
            })
        ]
    });
   }
   if (planilla_propuesta_TEG.alumno[1] !== null){
    alumno2 = new TableRow({
        height: {
            value: 500, 
            rule: HeightRule.EXACT
        },
        children : [
            new TableCell({
                borders: sin_bordes,
                children: [
                    new Paragraph({
                        style: "aside",
                        children: [
                            new TextRun({
                                text: "Nombre de alumno 2",
                                bold: true
                            })
                        ],
                        alignment: AlignmentType.LEFT
                    })
                ],
                verticalAlign: VerticalAlign.CENTER,
            }),
            new TableCell({
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
                    new Paragraph({
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
                            new TextRun({
                                text: planilla_propuesta_TEG.alumno[1].nombre,
                            })
                        ],
                    })
                ],
            })
        ]
    });
   }
   lista.push(alumno1);
   lista.push(alumno2);

   const titulo = new TableRow({
    height: {
        value: 500, 
        rule: HeightRule.EXACT
    },
    children : [
        new TableCell({
            borders: sin_bordes,
            children: [
                new Paragraph({
                    style: "aside",
                    children: [
                        new TextRun({
                            text: "Titulo del trabajo experimental de grado",
                            bold: true
                        })
                    ],
                    alignment: AlignmentType.LEFT
                })
            ],
            verticalAlign: VerticalAlign.CENTER,
        }),
        new TableCell({
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
                new Paragraph({
                    children: [
                        new TextRun({
                            text: planilla_propuesta_TEG.titulo,
                        })
                    ],
                })
            ],
        })
    ]
});
const organizacion = new TableRow({
    height: {
        value: 500, 
        rule: HeightRule.EXACT
    },
    children : [
        new TableCell({
            borders: sin_bordes,
            children: [
                new Paragraph({
                    style: "aside",
                    children: [
                        new TextRun({
                            text: "Organización donde se organizará el TEG",
                            bold: true
                        })
                    ],
                    alignment: AlignmentType.LEFT
                })
            ],
            verticalAlign: VerticalAlign.CENTER,
        }),
        new TableCell({
            children: [
                new Paragraph({
                    children: [
                        new TextRun({
                            text: planilla_propuesta_TEG.organizacion,
                        })
                    ],
                })
            ],
            borders: sin_bordes,
        })
    ]
});
    lista.push(titulo)
    lista.push(organizacion)
    return lista;
}
const generarFilaAlumno = () => {
    const filas = [];
    filas.push(encabezadoTablaAlumno);
    planilla_propuesta_TEG.alumno.forEach( (element) => {
        const fila = new TableRow({
            height: {
                value: 500, 
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
                                    text: element.nombre
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
                                    text: element.cedula
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
                                    text: element.telefono
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
                                    text: element.email
                                }),
                            ]
                        })
                    ],
                    verticalAlign: VerticalAlign.CENTER,
                })
            ]
        });
        filas.push(fila);
    })
    return filas;
}
const generarTablaDatosAlumno = (object) => {
            let alumno = {...object};
            let tablaAlumno = [];
            
            tablaAlumno = [
                new TableRow({
                    children: [
                        new TableCell({
                                borders: sin_bordes,
                                children: [
                                    new Paragraph({
                                        text: "Nombre"
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
                                        text: alumno.nombre
                                    })
                                ],
                                width: {
                                    size: 3000,
                                    type: WidthType.DXA
                                }
                        }),
                    ]
                }),
                new TableRow({
                    children: [
                        new TableCell({
                                borders: sin_bordes,
                                children: [
                                    new Paragraph({
                                        text: "C.I.N"
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
                                        text: alumno.cedula
                                    })
                                ],
                                width: {
                                    size: 1000,
                                    type: WidthType.DXA
                                }
                        }),
                    ]
                }),
                new TableRow({
                    children: [
                        new TableCell({
                                borders: sin_bordes,
                                children: [
                                    new Paragraph({
                                        text: "E-mail"
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
                                        text: alumno.email
                                    })
                                ],
                                width: {
                                    size: 1000,
                                    type: WidthType.DXA
                                }
                        }),
                    ]
                }),
                new TableRow({
                    children: [
                        new TableCell({
                                borders: sin_bordes,
                                children: [
                                    new Paragraph({
                                        text: "Telefonos"
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
                                        text: alumno.telefono
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
                                    text: "Oficina"
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
                                    text: alumno.oficina
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
                                    text: "Habitacion"
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
                                    text: alumno.habitacion
                                })
                            ],
                            width: {
                                size: 1000,
                                type: WidthType.DXA
                            }
                        }),
                    ]
                }),
        ]

    return tablaAlumno;
}
export const generarPlanillaPropuestaTEG = (planilla_propuesta_TEG) => {
    const doc = new docx.Document({
        creator: "Luis C. Somoza & Wladimir SanVicente",
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
                type: docx.SectionType.CONTINUOUS,
                margin: {
                    right: 150,
                    bottom: 150,
                    left: 150,
                }
            },
            headers: {
                default: new docx.Header({
                    children: [new Paragraph({
                        children: [
                            new docx.ImageRun({
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
                default: new docx.Footer({
                    children: [
                        new Paragraph({
                            children: [
                                new docx.ImageRun({
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
                            text: 'Ciudad Guayanna, ' + planilla_propuesta_TEG.fecha_envio,
                            font: "Times New Roman",
                        })
                    ],
                    alignment: AlignmentType.RIGHT,
                    spacing: {
                        after: 100,
                        line: 355,
                        lineRule: docx.LineRuleType.AUTO,
                    },
                }),
                new Paragraph({
                    style: "aside",
                    children: [
                        new TextRun({
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
                new Paragraph({
                    style: "aside",
                    children: [
                        new TextRun({
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
                new Paragraph({
                    style: "aside",
                    children: [
                        new TextRun({
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
                new Paragraph({
                    style: "aside",
                    children: [
                        new TextRun({
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
                new Paragraph({
                    style: "aside",
                    children: [
                        new TextRun({
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
                new Paragraph({
                    style: "aside",
                    children: [
                        new TextRun({
                            text: "Por medio de la presente hago constar que estoy dispuesto a supervisar, en calidad de Tutor Académico el Trabajo Experimental de Grado (TEG) titulado: " + '"'+planilla_propuesta_TEG.titulo+'", que será desarrollado por el (los) alumno(s):',
                            font: "Times New Roman",
                        })
                    ],
                    alignment: AlignmentType.JUSTIFIED,
                    indent: {
                        firstLine: 400
                    },
                    spacing: {
                        after: 100,
                        line: 355,
                        lineRule: docx.LineRuleType.AUTO,
                    }
                }),
                //Aqui se imprimen los los alumnos y sus datos
                generarDatosAlumnos(planilla_propuesta_TEG.alumno)[0],
                generarDatosAlumnos(planilla_propuesta_TEG.alumno)[1],
                new Paragraph({
                    style: "aside",
                    children: [
                        new TextRun({
                            text: "Para lo cual solicito la aprobación de este Consejo de Escuela. Así mismo hago constar que he leído el extracto con la descripción de las funciones del Tutor y estoy conforme con la responsabilidad que me corresponde asumir.",
                            font: "Times New Roman",
                        })
                    ],
                    alignment: AlignmentType.JUSTIFIED,
                    spacing: {
                        after: 200,
                        line: 355,
                        lineRule: docx.LineRuleType.AUTO,
                    }
                }),
                new Paragraph({
                    style: "aside",
                    children: [
                        new TextRun({
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
                        new TableRow({
                            height: {
                                value: 500, 
                                rule: HeightRule.EXACT
                            },
                            children : [
                                new TableCell({
                                    borders: sin_bordes,
                                    width: {
                                        size: 1000,
                                        type: WidthType.DXA
                                    },
                                    children: [],
                                    verticalAlign: VerticalAlign.CENTER,
                                }),
                                new TableCell({
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
                                        type: WidthType.DXA
                                    },
                                    children: [
                                        new Paragraph({
                                            style: "aside",
                                            children: [
                                                new TextRun({
                                                    text: "       Tutor Academico",
                                                    bold: true,
                                                })
                                            ],
                                            alignment: AlignmentType.LEFT
                                        })
                                    ]
                                }),
                            ]
                        }),
                        new TableRow({
                            height: {
                                value: 500, 
                                rule: HeightRule.EXACT
                            },
                            children : [
                                new TableCell({
                                    borders: sin_bordes,
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: planilla_propuesta_TEG.tutor_academico.nombre,
                                                })
                                            ],
                                        })
                                    ],
                                })
                            ]
                        }),
                        new TableRow({
                            height: {
                                value: 500, 
                                rule: HeightRule.EXACT
                            },
                            children : [
                                new TableCell({
                                    borders: sin_bordes,
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
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: planilla_propuesta_TEG.tutor_academico.cedula,
                                                })
                                            ],
                                        })
                                    ],
                                })
                            ]
                        }),
                        new TableRow({
                            height: {
                                value: 500, 
                                rule: HeightRule.EXACT
                            },
                            children : [
                                new TableCell({
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
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: planilla_propuesta_TEG.tutor_academico.email,
                                                })
                                            ],
                                        })
                                    ],
                                })
                            ]
                        }),
                        new TableRow({
                            height: {
                                value: 500, 
                                rule: HeightRule.EXACT
                            },
                            children : [
                                new TableCell({
                                    borders: sin_bordes,
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: planilla_propuesta_TEG.tutor_academico.telefono,
                                                })
                                            ],
                                        })
                                    ],
                                })
                            ]
                        }),
                        new TableRow({
                            height: {
                                value: 500, 
                                rule: HeightRule.EXACT
                            },
                            children : [
                                new TableCell({
                                    borders: sin_bordes,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: "Fecha",
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
                                        new Paragraph({
                                            style: "aside",
                                            children: [
                                                new TextRun({
                                                    text: planilla_propuesta_TEG.tutor_academico.fecha_entrega.toString(),
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
                new Paragraph({
                    style: "aside",
                    children: [
                        new TextRun({
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
                        new TableRow({
                            height: {
                                value: 500, 
                                rule: HeightRule.EXACT
                            },
                            children: [
                                new TableCell({
                                    children: [
                                        new Paragraph({
                                            style: "aside",
                                            children: [
                                                new TextRun({
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
                                new TableCell({
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
                                        type: WidthType.DXA
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
                new Paragraph({
                    children:[ new docx.PageBreak()]
                }),
                new Paragraph({
                    heading: docx.HeadingLevel.HEADING_1,
                    children:[ 
                        new TextRun({
                            text: "PLANILLA RESUMEN DE DATOS DE LA PROPUESTA DE TEG "
                        })
                    ]
                }),
                new Paragraph({
                    style: "aside",
                    children:[ 
                        new TextRun({
                            text: "Tema Propuesto: ",
                            bold: true
                        }),
                        new TextRun({
                            text: "<no debe exceder los 200 caracteres y debe colocar cada carácter en una casilla>"
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
                    rows: generarTituloOneHundred(titulo)
                }),
                //////////////////////////////////////////////////////////////////////////////
                new Paragraph({
                    style: "aside",
                    children:[ 
                        new TextRun({
                            text: "Organización donde desarrollará el TEG: ",
                            bold: true
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
                        new TableRow({
                            height: {
                                value: 500, 
                                rule: HeightRule.EXACT
                            },
                            children: [
                                new TableCell({
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                    children: [
                                        new Paragraph({
                                            style: "aside",
                                            children: [
                                                new TextRun({
                                                    text: planilla_propuesta_TEG.organizacion
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
                new Paragraph({
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
                new Paragraph({
                    style: "aside",
                    children: [
                        new TextRun({
                            text: "Datos de los Alumnos: ",
                            bold: true
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
                    rows: generarFilaAlumno()
                }),
                new Paragraph({
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
                new Paragraph({
                    style: "aside",
                    children: [
                        new TextRun({
                            text: "Datos del Tutor Académico:",
                            bold: true
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
                        new TableRow({
                            height: {
                                value: 500, 
                                rule: HeightRule.EXACT
                            },
                            children : [
                                new TableCell({
                                    borders: sin_bordes,
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: planilla_propuesta_TEG.tutor_academico.nombre,
                                                })
                                            ],
                                        })
                                    ],
                                })
                            ]
                        }),
                        new TableRow({
                            height: {
                                value: 500, 
                                rule: HeightRule.EXACT
                            },
                            children : [
                                new TableCell({
                                    borders: sin_bordes,
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
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: planilla_propuesta_TEG.tutor_academico.cedula,
                                                })
                                            ],
                                        })
                                    ],
                                })
                            ]
                        }),
                        new TableRow({
                            height: {
                                value: 500, 
                                rule: HeightRule.EXACT
                            },
                            children : [
                                new TableCell({
                                    borders: sin_bordes,
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
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: planilla_propuesta_TEG.tutor_academico.profesion,
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
                                value: 500, 
                                rule: HeightRule.EXACT
                            },
                            children : [
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: planilla_propuesta_TEG.tutor_academico.experiencia,
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
                                value: 500, 
                                rule: HeightRule.EXACT
                            },
                            children : [
                                new TableCell({
                                    borders: sin_bordes,
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
                                        new Paragraph({
                                            style: "aside",
                                            children: [
                                                new TextRun({
                                                    text: planilla_propuesta_TEG.tutor_academico.cargo,
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
                                value: 500, 
                                rule: HeightRule.EXACT
                            },
                            children : [
                                new TableCell({
                                    borders: sin_bordes,
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
                                        new Paragraph({
                                            style: "aside",
                                            children: [
                                                new TextRun({
                                                    text: planilla_propuesta_TEG.tutor_academico.email,
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
                                value: 500, 
                                rule: HeightRule.EXACT
                            },
                            children : [
                                new TableCell({
                                    borders: sin_bordes,
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
                                        new Paragraph({
                                            style: "aside",
                                            children: [
                                                new TextRun({
                                                    text: planilla_propuesta_TEG.tutor_academico.telefono,
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
                /////////////////////////////////////////////////////////////////////////////////////
                new Paragraph({
                    children:[ new docx.PageBreak()]
                }),
                new Paragraph({
                    style: "aside",
                    children:[ 
                        new TextRun({
                            text: "Datos Alumno 1",
                            bold: true
                        })
                    ],
                    spacing: {
                        after: 200,
                        line: 355,
                        lineRule: docx.LineRuleType.AUTO,
                    }
                }),
                new docx.Table({
                    columnWidths: [1000, 5000],
                    //Inserte tabla de alumnos aqui
                    rows: generarTablaDatosAlumno(planilla_propuesta_TEG.alumno[0])
                                      
                  
                }),
                new Paragraph({
                    style: "aside",
                    children:[ 
                        new TextRun({
                            text: "Datos Alumno 2",
                            bold: true
                        })
                    ],
                    spacing: {
                        after: 200,
                        line: 355,
                        lineRule: docx.LineRuleType.AUTO,
                    }
                }),
                new docx.Table({
                    columnWidths: [1000, 5000],
                    //Inserte tabla de alumnos aqui
                    rows: generarTablaDatosAlumno(planilla_propuesta_TEG.alumno[1])
                                      
                  
                }),
                new Paragraph({
                    style: "aside",
                    children:[ 
                        new TextRun({
                            text: ""
                        })
                    ],
                    spacing: {
                        before: 200,
                        after: 200
                    }
                }),
                new Paragraph({
                    style: "aside",
                    children:[ 
                        new TextRun({
                            text: "Datos Tutor Academico",
                            bold: true
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
                        new TableRow({
                            height: {
                                value: 500, 
                                rule: HeightRule.EXACT
                            },
                            children : [
                                new TableCell({
                                    borders: sin_bordes,
                                    children: [
                                        new Paragraph({
                                            style: "aside",
                                            children: [
                                                new TextRun({
                                                    text: "Nombre",
                                                })
                                            ],
                                            alignment: AlignmentType.LEFT
                                        })
                                    ],
                                    verticalAlign: VerticalAlign.CENTER,
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: planilla_propuesta_TEG.tutor_academico.nombre,
                                                })
                                            ],
                                            
                                        }),
                                    ],
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                            
                                        }),
                                    ],
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                            
                                        }),
                                    ],
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                            
                                        }),
                                    ],
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                            
                                        }),
                                    ],
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                            
                                        }),
                                    ],
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                            
                                        }),
                                    ],
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                            
                                        }),
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
                                value: 500, 
                                rule: HeightRule.EXACT
                            },
                            children : [
                                new TableCell({
                                    borders: sin_bordes,
                                    children: [
                                        new Paragraph({
                                            style: "aside",
                                            children: [
                                                new TextRun({
                                                    text: "C.I.N",
                                                })
                                            ],
                                            alignment: AlignmentType.LEFT
                                        })
                                    ],
                                    verticalAlign: VerticalAlign.CENTER,
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: planilla_propuesta_TEG.tutor_academico.cedula,
                                                })
                                            ],
                                            
                                        }),
                                    ],
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                            
                                        }),
                                    ],
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                            
                                        }),
                                    ],
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                            
                                        }),
                                    ],
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                            
                                        }),
                                    ],
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                            
                                        }),
                                    ],
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                            
                                        }),
                                    ],
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                            
                                        }),
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
                                value: 500, 
                                rule: HeightRule.EXACT
                            },
                            children : [
                                new TableCell({
                                    borders: sin_bordes,
                                    children: [
                                        new Paragraph({
                                            style: "aside",
                                            children: [
                                                new TextRun({
                                                    text: "Telefonos",
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: planilla_propuesta_TEG.tutor_academico.telefono,
                                                })
                                            ],
                                            
                                        }),
                                    ],
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                new TableCell({
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
                                        new Paragraph({
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
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: "Oficina",
                                                })
                                            ],
                                            alignment: AlignmentType.LEFT   
                                        }),
                                    ],
                                    verticalAlign: VerticalAlign.CENTER,
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: planilla_propuesta_TEG.tutor_academico.oficina,
                                                })
                                            ],
                                            
                                        })
                                    ],
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: "Habitación",
                                                })
                                            ],
                                            alignment: AlignmentType.LEFT
                                        })
                                    ],
                                    verticalAlign: VerticalAlign.CENTER,
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: planilla_propuesta_TEG.tutor_academico.habitacion,
                                                })
                                            ],
                                            
                                        }),
                                    ],
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                value: 500, 
                                rule: HeightRule.EXACT
                            },
                            children : [
                                new TableCell({
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
                                        new Paragraph({
                                            style: "aside",
                                            children: [
                                                new TextRun({
                                                    text: "Email",
                                                })
                                            ],
                                            alignment: AlignmentType.LEFT
                                        })
                                    ],
                                    verticalAlign: VerticalAlign.CENTER,
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: planilla_propuesta_TEG.tutor_academico.email,
                                                })
                                            ],
                                            
                                        }),
                                    ],
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                            
                                        }),
                                    ],
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                            
                                        }),
                                    ],
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                            
                                        }),
                                    ],
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                            
                                        }),
                                    ],
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                            
                                        }),
                                    ],
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                            
                                        }),
                                    ],
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                            
                                        }),
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
                                value: 500, 
                                rule: HeightRule.EXACT
                            },
                            children : [
                                new TableCell({
                                    borders: sin_bordes,
                                    children: [
                                        new Paragraph({
                                            style: "aside",
                                            children: [
                                                new TextRun({
                                                    text: "Cargo",
                                                })
                                            ],
                                            alignment: AlignmentType.LEFT
                                        })
                                    ],
                                    verticalAlign: VerticalAlign.CENTER,
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: planilla_propuesta_TEG.tutor_academico.cargo,
                                                })
                                            ],
                                            
                                        }),
                                    ],
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                            
                                        }),
                                    ],
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                            
                                        }),
                                    ],
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                            
                                        }),
                                    ],
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                            
                                        }),
                                    ],
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                            
                                        }),
                                    ],
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                            
                                        }),
                                    ],
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                            
                                        }),
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
                                value: 500, 
                                rule: HeightRule.EXACT
                            },
                            children : [
                                new TableCell({
                                    borders: sin_bordes,
                                    children: [
                                        new Paragraph({
                                            style: "aside",
                                            children: [
                                                new TextRun({
                                                    text: "Años de graduado",
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: planilla_propuesta_TEG.tutor_academico.graduado,
                                                })
                                            ],
                                            
                                        })
                                    ],
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                new TableCell({
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
                                        new Paragraph({
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
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: "Tutor TG",
                                                })
                                            ],
                                            alignment: AlignmentType.LEFT   
                                        }),
                                    ],
                                    verticalAlign: VerticalAlign.CENTER,
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: "SI",
                                                    bold: true
                                                })
                                            ],
                                            
                                        }),
                                    ],
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                            alignment: AlignmentType.LEFT
                                        })
                                    ],
                                    verticalAlign: VerticalAlign.CENTER,
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                value: 500, 
                                rule: HeightRule.EXACT
                            },
                            children : [
                                new TableCell({
                                    borders: sin_bordes,
                                    children: [
                                        new Paragraph({
                                            style: "aside",
                                            children: [
                                                new TextRun({
                                                    text: "Profesor UCAB",
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: "SI",
                                                    bold: true
                                                })
                                            ],
                                            
                                        })
                                    ],
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                new TableCell({
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
                                        new Paragraph({
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
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: "Escuela:",
                                                })
                                            ],
                                            alignment: AlignmentType.LEFT   
                                        }),
                                    ],
                                    verticalAlign: VerticalAlign.CENTER,
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: " Ingenieria Informática",
                                                })
                                            ],
                                            
                                        })
                                    ],
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                            
                                        }),
                                    ],
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                            alignment: AlignmentType.LEFT
                                        })
                                    ],
                                    verticalAlign: VerticalAlign.CENTER,
                                    width: {
                                        size: 10000,
                                        type: WidthType.DXA
                                    },
                                }),
                                new TableCell({
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
                                        new Paragraph({
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
                        
                    ]
                }),
                new Paragraph({
                    children:[ new docx.PageBreak()]
                }),
                new Paragraph({
                    children:[ 
                        new TextRun({
                            text: "Datos de la Empresa:",
                            bold: true
                    
                        })
                    ],
                    spacing: {
                        after: 200
                    },
                    style: "aside",
                    alignment: AlignmentType.CENTER
                }),
                new docx.Table({
                    columnWidths: [3000, 4500],
                    rows: [
                        new TableRow({
                            height: {
                                value: 500, 
                                rule: HeightRule.EXACT
                            },
                            children : [
                                new TableCell({
                                    borders: sin_bordes,
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
                                        new Paragraph({
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
                                                new TextRun({
                                                    text: planilla_propuesta_TEG.empresa.nombre,
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
                        new TableRow({
                            height: {
                                value: 500, 
                                rule: HeightRule.EXACT
                            },
                            children : [
                                new TableCell({
                                    borders: sin_bordes,
                                    children: [
                                        new Paragraph({
                                            style: "aside",
                                            children: [
                                                new TextRun({
                                                    text: "Dirección",
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
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: planilla_propuesta_TEG.empresa.direccion,
                                                })
                                            ],
                                        })
                                    ],
                                })
                            ]
                        }),
                        new TableRow({
                            height: {
                                value: 500, 
                                rule: HeightRule.EXACT
                            },
                            children : [
                                new TableCell({
                                    borders: sin_bordes,
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
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: planilla_propuesta_TEG.empresa.telefono,
                                                })
                                            ],
                                        })
                                    ],
                                    width: {
                                        size: 5000,
                                        type: WidthType.DXA
                                    },
                                })
                            ]
                        }),
                    ]
                }),
                new Paragraph({
                    children: [
                    ],
                    spacing: {
                        before: 100,
                        after: 100
                    }
                }),
                new Paragraph({
                    style: "aside",
                    children:[ 
                        new TextRun({
                            text: "Historial de revisiones",
                            bold: true
                        })
                    ],
                    alignment: AlignmentType.CENTER
                }),
                new Paragraph({
                    children: [
                    ],
                    spacing: {
                        before: 100,
                        after: 100
                    }
                }),
                new docx.Table({
                    columnWidths: [1000, 2500],
                    rows: generarNombresAlumno()
                }),
                new Paragraph({
                    children: [
                    ],
                    spacing: {
                        before: 200,
                        after: 200
                    }
                }),
                new docx.Table({
                    columnWidths: [3000, 4500],
                    indent: {
                        size: 50,
                        type: WidthType.DXA
                    },
                    rows: [
                        new TableRow({
                            height: {
                                value: 500, 
                                rule: HeightRule.EXACT
                            },
                            children : [
                                new TableCell({
                                    children: [
                                        new Paragraph({
                                            style: "aside",
                                            children: [
                                                new TextRun({
                                                    text: "Fecha                ",
                                                    bold: true
                                                })
                                            ],
                                            alignment: AlignmentType.CENTER
                                        })
                                    ],
                                    verticalAlign: VerticalAlign.CENTER,
                                    width: {
                                        size: 1200,
                                        type: WidthType.DXA
                                    }
                                }),
                                new TableCell({
                                    children: [
                                        new Paragraph({
                                            style: "aside",
                                            children: [
                                                new TextRun({
                                                    text: "Razón de la observación",
                                                    bold: true
                                                })
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                    ],
                                    verticalAlign: VerticalAlign.CENTER,
                                }),
                                new TableCell({
                                    children: [
                                        new Paragraph({
                                            style: "aside",
                                            children: [
                                                new TextRun({
                                                    text: "Modificación realizada",
                                                    bold: true
                                                })
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                    ],
                                    verticalAlign: VerticalAlign.CENTER,
                                }),
                            ]
                        }),
                        new TableRow({
                            height: {
                                value: 500, 
                                rule: HeightRule.EXACT
                            },
                            children : [
                                new TableCell({
                                    children: [
                                        new Paragraph({
                                            style: "aside",
                                            children: [
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                            alignment: AlignmentType.CENTER
                                        })
                                    ],
                                    verticalAlign: VerticalAlign.CENTER,
                                }),
                                new TableCell({
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                        })
                                    ],
                                }),
                                new TableCell({
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
                                }),
                            ]
                        }),
                        new TableRow({
                            height: {
                                value: 500, 
                                rule: HeightRule.EXACT
                            },
                            children : [
                                new TableCell({
                                    children: [
                                        new Paragraph({
                                            style: "aside",
                                            children: [
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                            alignment: AlignmentType.CENTER
                                        })
                                    ],
                                    verticalAlign: VerticalAlign.CENTER,
                                }),
                                new TableCell({
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                        })
                                    ],
                                }),
                                new TableCell({
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
                                }),
                            ]
                        }),
                        new TableRow({
                            height: {
                                value: 500, 
                                rule: HeightRule.EXACT
                            },
                            children : [
                                new TableCell({
                                    children: [
                                        new Paragraph({
                                            style: "aside",
                                            children: [
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                            alignment: AlignmentType.CENTER
                                        })
                                    ],
                                    verticalAlign: VerticalAlign.CENTER,
                                }),
                                new TableCell({
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                        })
                                    ],
                                }),
                                new TableCell({
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
                                }),
                            ]
                        }),
                        new TableRow({
                            height: {
                                value: 500, 
                                rule: HeightRule.EXACT
                            },
                            children : [
                                new TableCell({
                                    children: [
                                        new Paragraph({
                                            style: "aside",
                                            children: [
                                                new TextRun({
                                                    text: "",
                                                })
                                            ],
                                            alignment: AlignmentType.CENTER
                                        })
                                    ],
                                    verticalAlign: VerticalAlign.CENTER,
                                }),
                                new TableCell({
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
                                        size: 4000,
                                        type: WidthType.DXA
                                    }
                                }),
                                new TableCell({
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
                                        size: 4000,
                                        type: WidthType.DXA
                                    }
                                }),
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
}


