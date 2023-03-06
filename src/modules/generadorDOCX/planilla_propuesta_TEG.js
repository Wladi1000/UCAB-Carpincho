import * as fs from 'fs';
import docx from 'docx';
const { WidthType, VerticalAlign, TextRun } = docx;

const sin_bordes = {
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

                let celda = new docx.TableCell({
                    children: [
                        new docx.Paragraph({
                            children: [
                                new docx.TextRun({
                                    text: titulo[j]
                                })
                            ]
                        })
                    ],
                    width: {
                        size: tam_cuadro_titulo,
                        type: docx.WidthType.DXA
                    },
                });

                lista.push(celda);
                
            }else{
                let celdaVacia = new docx.TableCell({
                                    children: [],
                                    width: {
                                        size: tam_cuadro_titulo,
                                        type: docx.WidthType.DXA
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
        let fila = new docx.TableRow({
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
                const resultado = new docx.Paragraph({
                    style: "aside",
                    bullet: {
                        level: 0
                    },
                    children: [
                        new docx.TextRun({
                            text: element.nombre +", C.I.N. " + element.cedula,
                            font: "Times New Roman",
                        })
                    ],
                    alignment: docx.AlignmentType.JUSTIFIED,
                    spacing: {
                        line: 355,
                        lineRule: docx.LineRuleType.AUTO,
                    }
                })
                lista.push(resultado);
            })
            return lista;
}

const encabezadoTablaAlumno = new docx.TableRow({
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
})
const generarNombresAlumno = () => {

    const lista = []
    let alumno2 = null;
    let alumno1 = null;
    console.log(planilla_propuesta_TEG.alumno[0] !== null);
    console.log(planilla_propuesta_TEG.alumno[1] !== null);
   if (planilla_propuesta_TEG.alumno[0] !== null){
    alumno1 = new docx.TableRow({
        height: {
            value: 500, 
            rule: docx.HeightRule.EXACT
        },
        children : [
            new docx.TableCell({
                borders: sin_bordes,
                children: [
                    new docx.Paragraph({
                        style: "aside",
                        children: [
                            new docx.TextRun({
                                text: "Nombre de alumno 1",
                                bold: true
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
    alumno2 = new docx.TableRow({
        height: {
            value: 500, 
            rule: docx.HeightRule.EXACT
        },
        children : [
            new docx.TableCell({
                borders: sin_bordes,
                children: [
                    new docx.Paragraph({
                        style: "aside",
                        children: [
                            new docx.TextRun({
                                text: "Nombre de alumno 2",
                                bold: true
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

   const titulo = new docx.TableRow({
    height: {
        value: 500, 
        rule: docx.HeightRule.EXACT
    },
    children : [
        new docx.TableCell({
            borders: sin_bordes,
            children: [
                new docx.Paragraph({
                    style: "aside",
                    children: [
                        new docx.TextRun({
                            text: "Titulo del trabajo experimental de grado",
                            bold: true
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
                            text: planilla_propuesta_TEG.titulo,
                        })
                    ],
                })
            ],
        })
    ]
});
const organizacion = new docx.TableRow({
    height: {
        value: 500, 
        rule: docx.HeightRule.EXACT
    },
    children : [
        new docx.TableCell({
            borders: sin_bordes,
            children: [
                new docx.Paragraph({
                    style: "aside",
                    children: [
                        new docx.TextRun({
                            text: "Organización donde se organizará el TEG",
                            bold: true
                        })
                    ],
                    alignment: docx.AlignmentType.LEFT
                })
            ],
            verticalAlign: VerticalAlign.CENTER,
        }),
        new docx.TableCell({
            children: [
                new docx.Paragraph({
                    children: [
                        new docx.TextRun({
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
        const fila = new docx.TableRow({
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
                                    text: element.nombre
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
                                    text: element.cedula
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
                                    text: element.telefono
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
                new docx.TableRow({
                    children: [
                        new docx.TableCell({
                                borders: sin_bordes,
                                children: [
                                    new docx.Paragraph({
                                        text: "Nombre"
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
                                        text: alumno.nombre
                                    })
                                ],
                                width: {
                                    size: 3000,
                                    type: docx.WidthType.DXA
                                }
                        }),
                    ]
                }),
                new docx.TableRow({
                    children: [
                        new docx.TableCell({
                                borders: sin_bordes,
                                children: [
                                    new docx.Paragraph({
                                        text: "C.I.N"
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
                                        text: alumno.cedula
                                    })
                                ],
                                width: {
                                    size: 1000,
                                    type: docx.WidthType.DXA
                                }
                        }),
                    ]
                }),
                new docx.TableRow({
                    children: [
                        new docx.TableCell({
                                borders: sin_bordes,
                                children: [
                                    new docx.Paragraph({
                                        text: "E-mail"
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
                                        text: alumno.email
                                    })
                                ],
                                width: {
                                    size: 1000,
                                    type: docx.WidthType.DXA
                                }
                        }),
                    ]
                }),
                new docx.TableRow({
                    children: [
                        new docx.TableCell({
                                borders: sin_bordes,
                                children: [
                                    new docx.Paragraph({
                                        text: "Telefonos"
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
                                        text: alumno.telefono
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
                                    text: "Oficina"
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
                                    text: alumno.oficina
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
                                    text: "Habitacion"
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
                                    text: alumno.habitacion
                                })
                            ],
                            width: {
                                size: 1000,
                                type: docx.WidthType.DXA
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
                            text: 'Ciudad Guayanna, ' + planilla_propuesta_TEG.fecha_envio,
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
                            text: "Por medio de la presente hago constar que estoy dispuesto a supervisar, en calidad de Tutor Académico el Trabajo Experimental de Grado (TEG) titulado: " + '"'+planilla_propuesta_TEG.titulo+'", que será desarrollado por el (los) alumno(s):',
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
                //Aqui se imprimen los los alumnos y sus datos
                generarDatosAlumnos(planilla_propuesta_TEG.alumno)[0],
                generarDatosAlumnos(planilla_propuesta_TEG.alumno)[1],
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
                                    borders: sin_bordes,
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
                                    borders: sin_bordes,
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
                                                    text: planilla_propuesta_TEG.tutor_academico.nombre,
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
                                    borders: sin_bordes,
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
                                                    text: planilla_propuesta_TEG.tutor_academico.cedula,
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
                                                    text: planilla_propuesta_TEG.tutor_academico.email,
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
                                    borders: sin_bordes,
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
                                                    text: planilla_propuesta_TEG.tutor_academico.telefono,
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
                                    borders: sin_bordes,
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
                            text: "Tema Propuesto: ",
                            bold: true
                        }),
                        new docx.TextRun({
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
                new docx.Paragraph({
                    style: "aside",
                    children:[ 
                        new docx.TextRun({
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
                        new docx.TableRow({
                            height: {
                                value: 500, 
                                rule: docx.HeightRule.EXACT
                            },
                            children : [
                                new docx.TableCell({
                                    borders: sin_bordes,
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
                                                    text: planilla_propuesta_TEG.tutor_academico.nombre,
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
                                    borders: sin_bordes,
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
                                                    text: planilla_propuesta_TEG.tutor_academico.cedula,
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
                                    borders: sin_bordes,
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
                                                    text: planilla_propuesta_TEG.tutor_academico.profesion,
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
                                                    text: planilla_propuesta_TEG.tutor_academico.experiencia,
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
                                    borders: sin_bordes,
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
                                                    text: planilla_propuesta_TEG.tutor_academico.cargo,
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
                                    borders: sin_bordes,
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
                                                    text: planilla_propuesta_TEG.tutor_academico.email,
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
                                    borders: sin_bordes,
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
                                                    text: planilla_propuesta_TEG.tutor_academico.telefono,
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
                new docx.Paragraph({
                    style: "aside",
                    children:[ 
                        new docx.TextRun({
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
                new docx.Paragraph({
                    style: "aside",
                    children:[ 
                        new docx.TextRun({
                            text: ""
                        })
                    ],
                    spacing: {
                        before: 200,
                        after: 200
                    }
                }),
                new docx.Paragraph({
                    style: "aside",
                    children:[ 
                        new docx.TextRun({
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
                        new docx.TableRow({
                            height: {
                                value: 500, 
                                rule: docx.HeightRule.EXACT
                            },
                            children : [
                                new docx.TableCell({
                                    borders: sin_bordes,
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
                                                    text: planilla_propuesta_TEG.tutor_academico.nombre,
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
                                    borders: sin_bordes,
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
                                                    text: planilla_propuesta_TEG.tutor_academico.cedula,
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
                                    borders: sin_bordes,
                                    children: [
                                        new docx.Paragraph({
                                            style: "aside",
                                            children: [
                                                new docx.TextRun({
                                                    text: "Telefonos",
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
                                                    text: planilla_propuesta_TEG.tutor_academico.telefono,
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
                                            
                                        })
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
                                            
                                        })
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
                                                    text: "Oficina",
                                                })
                                            ],
                                            alignment: docx.AlignmentType.LEFT   
                                        }),
                                    ],
                                    verticalAlign: docx.VerticalAlign.CENTER,
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
                                                    text: planilla_propuesta_TEG.tutor_academico.oficina,
                                                })
                                            ],
                                            
                                        })
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
                                                    text: "Habitación",
                                                })
                                            ],
                                            alignment: docx.AlignmentType.LEFT
                                        })
                                    ],
                                    verticalAlign: docx.VerticalAlign.CENTER,
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
                                                    text: planilla_propuesta_TEG.tutor_academico.habitacion,
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
                                                    text: planilla_propuesta_TEG.tutor_academico.email,
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
                                    borders: sin_bordes,
                                    children: [
                                        new docx.Paragraph({
                                            style: "aside",
                                            children: [
                                                new docx.TextRun({
                                                    text: "Cargo",
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
                                                    text: planilla_propuesta_TEG.tutor_academico.cargo,
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
                                    borders: sin_bordes,
                                    children: [
                                        new docx.Paragraph({
                                            style: "aside",
                                            children: [
                                                new docx.TextRun({
                                                    text: "Años de graduado",
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
                                                    text: planilla_propuesta_TEG.tutor_academico.graduado,
                                                })
                                            ],
                                            
                                        })
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
                                            
                                        })
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
                                            
                                        })
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
                                                    text: "Tutor TG",
                                                })
                                            ],
                                            alignment: docx.AlignmentType.LEFT   
                                        }),
                                    ],
                                    verticalAlign: docx.VerticalAlign.CENTER,
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
                                                    text: "SI",
                                                    bold: true
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
                                            
                                        })
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
                                            alignment: docx.AlignmentType.LEFT
                                        })
                                    ],
                                    verticalAlign: docx.VerticalAlign.CENTER,
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
                                    borders: sin_bordes,
                                    children: [
                                        new docx.Paragraph({
                                            style: "aside",
                                            children: [
                                                new docx.TextRun({
                                                    text: "Profesor UCAB",
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
                                                    text: "SI",
                                                    bold: true
                                                })
                                            ],
                                            
                                        })
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
                                            
                                        })
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
                                            
                                        })
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
                                                    text: "Escuela:",
                                                })
                                            ],
                                            alignment: docx.AlignmentType.LEFT   
                                        }),
                                    ],
                                    verticalAlign: docx.VerticalAlign.CENTER,
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
                                                    text: " Ingenieria Informática",
                                                })
                                            ],
                                            
                                        })
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
                                            alignment: docx.AlignmentType.LEFT
                                        })
                                    ],
                                    verticalAlign: docx.VerticalAlign.CENTER,
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
                                            
                                        })
                                    ],
                                    width: {
                                        size: 10000,
                                        type: docx.WidthType.DXA
                                    },
                                }),
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
                            text: "Datos de la Empresa:",
                            bold: true
                    
                        })
                    ],
                    spacing: {
                        after: 200
                    },
                    style: "aside",
                    alignment: docx.AlignmentType.CENTER
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
                                    borders: sin_bordes,
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
                                                    text: planilla_propuesta_TEG.empresa.nombre,
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
                        new docx.TableRow({
                            height: {
                                value: 500, 
                                rule: docx.HeightRule.EXACT
                            },
                            children : [
                                new docx.TableCell({
                                    borders: sin_bordes,
                                    children: [
                                        new docx.Paragraph({
                                            style: "aside",
                                            children: [
                                                new docx.TextRun({
                                                    text: "Dirección",
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
                                                    text: planilla_propuesta_TEG.empresa.direccion,
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
                                    borders: sin_bordes,
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
                                            children: [
                                                new docx.TextRun({
                                                    text: planilla_propuesta_TEG.empresa.telefono,
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
                    children: [
                    ],
                    spacing: {
                        before: 100,
                        after: 100
                    }
                }),
                new docx.Paragraph({
                    style: "aside",
                    children:[ 
                        new docx.TextRun({
                            text: "Historial de revisiones",
                            bold: true
                        })
                    ],
                    alignment: docx.AlignmentType.CENTER
                }),
                new docx.Paragraph({
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
                new docx.Paragraph({
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
                        new docx.TableRow({
                            height: {
                                value: 500, 
                                rule: docx.HeightRule.EXACT
                            },
                            children : [
                                new docx.TableCell({
                                    children: [
                                        new docx.Paragraph({
                                            style: "aside",
                                            children: [
                                                new docx.TextRun({
                                                    text: "Fecha                ",
                                                    bold: true
                                                })
                                            ],
                                            alignment: docx.AlignmentType.CENTER
                                        })
                                    ],
                                    verticalAlign: VerticalAlign.CENTER,
                                    width: {
                                        size: 1200,
                                        type: docx.WidthType.DXA
                                    }
                                }),
                                new docx.TableCell({
                                    children: [
                                        new docx.Paragraph({
                                            style: "aside",
                                            children: [
                                                new docx.TextRun({
                                                    text: "Razón de la observación",
                                                    bold: true
                                                })
                                            ],
                                            alignment: docx.AlignmentType.CENTER
                                        }),
                                    ],
                                    verticalAlign: VerticalAlign.CENTER,
                                }),
                                new docx.TableCell({
                                    children: [
                                        new docx.Paragraph({
                                            style: "aside",
                                            children: [
                                                new docx.TextRun({
                                                    text: "Modificación realizada",
                                                    bold: true
                                                })
                                            ],
                                            alignment: docx.AlignmentType.CENTER
                                        }),
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
                            children : [
                                new docx.TableCell({
                                    children: [
                                        new docx.Paragraph({
                                            style: "aside",
                                            children: [
                                                new docx.TextRun({
                                                    text: "",
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
                                                    text: "",
                                                })
                                            ],
                                        })
                                    ],
                                }),
                                new docx.TableCell({
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
                                    children: [
                                        new docx.Paragraph({
                                            style: "aside",
                                            children: [
                                                new docx.TextRun({
                                                    text: "",
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
                                                    text: "",
                                                })
                                            ],
                                        })
                                    ],
                                }),
                                new docx.TableCell({
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
                                    children: [
                                        new docx.Paragraph({
                                            style: "aside",
                                            children: [
                                                new docx.TextRun({
                                                    text: "",
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
                                                    text: "",
                                                })
                                            ],
                                        })
                                    ],
                                }),
                                new docx.TableCell({
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
                                    children: [
                                        new docx.Paragraph({
                                            style: "aside",
                                            children: [
                                                new docx.TextRun({
                                                    text: "",
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
                                            style: "aside",
                                            children: [
                                                new docx.TextRun({
                                                    text: "",
                                                })
                                            ],
                                        })
                                    ],
                                    width: {
                                        size: 4000,
                                        type: docx.WidthType.DXA
                                    }
                                }),
                                new docx.TableCell({
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
                                        size: 4000,
                                        type: docx.WidthType.DXA
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


