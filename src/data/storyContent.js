// storyContent.js
// Estructura:
// escolar[tipo] → capitulo1 | capitulo2[opcionElegidaEnCap1] | capitulo3[opcionElegidaEnCap2]
// Tipos: "abuso_sexual" | "acoso_sexual" | "hostigamiento_sexual" | "corrupcion_menores"

export const escolar = {

  // ─────────────────────────────────────────────
  // 1. ABUSO SEXUAL
  // ─────────────────────────────────────────────
  abuso_sexual: {
    label: "Abuso Sexual",

    capitulo1: {
      titulo: "Capítulo 1: Lo que nadie quiere ver",
      descripcion: [
        "En una escuela primaria pública, un docente de educación física lleva meses ganándose la confianza de los estudiantes con privilegios especiales: los deja salir antes, les regala dulces, los llama a quedarse después de clase. Nadie lo cuestiona.",
        "Una estudiante comienza a mostrar señales de alerta: pesadillas, negativa a ir a la escuela, cambios bruscos de humor. Su maestra de grupo lo nota, pero el protocolo escolar es difuso y el miedo a equivocarse paraliza la respuesta.",
      ],
      pregunta: "¿Cuál es la primera reacción del sistema escolar?",
      opciones: [
        { id: "a", titulo: "Activar el protocolo", desc: "La directora decide reportar el caso al departamento de orientación y notifica a los padres de familia." },
        { id: "b", titulo: "Hablar primero con el docente", desc: "Se decide confrontar internamente al maestro antes de involucrar a instancias externas." },
        { id: "c", titulo: "Esperar más evidencia", desc: "La escuela decide no actuar aún, temiendo levantar falsas acusaciones sin pruebas claras." },
      ],
    },

    capitulo2: {
      a: {
        titulo: "Capítulo 2: El engranaje institucional",
        descripcion: [
          "El protocolo se activó, pero nadie parece conocerlo a fondo. Orientación convoca a los padres, pero el maestro sigue frente a grupo mientras se 'investiga internamente'. La niña siente que el sistema la expone sin protegerla.",
          "La supervisión escolar exige 'no alarmar a la comunidad' y pide discreción. Los padres, desconcertados, no saben si denunciar en la fiscalía o esperar la resolución interna.",
        ],
        pregunta: "¿Qué camino toman los padres?",
        opciones: [
          { id: "a", titulo: "Denuncia en fiscalía", desc: "Deciden no esperar a la escuela y presentan denuncia formal ante la Fiscalía Especializada." },
          { id: "b", titulo: "Buscar apoyo externo", desc: "Contactan a una organización civil de protección a la infancia para orientarse antes de actuar." },
          { id: "c", titulo: "Confiar en la escuela", desc: "Deciden dar tiempo al proceso interno, esperando que la institución resuelva el caso con justicia." },
        ],
      },
      b: {
        titulo: "Capítulo 2: La confrontación que protege al agresor",
        descripcion: [
          "La dirección citó al docente. Él lo negó todo y amenazó con demandar por difamación. La conversación fue a puerta cerrada, sin testigos, sin registro. La estudiante nunca fue escuchada formalmente.",
          "Ahora el maestro está alerta. Cambia su comportamiento públicamente y se gana simpatías del resto del personal. La narrativa empieza a voltear hacia la familia: '¿por qué esperaron tanto para hablar?'.",
        ],
        pregunta: "¿Cómo responde la familia ante esta situación?",
        opciones: [
          { id: "a", titulo: "Exigir intervención externa", desc: "La familia denuncia ante la Supervisión de Zona y exige la suspensión inmediata del docente." },
          { id: "b", titulo: "Retirar a la estudiante", desc: "Deciden cambiar a la niña de escuela para protegerla mientras buscan asesoría legal." },
          { id: "c", titulo: "Aceptar la versión oficial", desc: "Presionados y sin apoyo, terminan aceptando la versión de la escuela y el caso queda sin resolución." },
        ],
      },
      c: {
        titulo: "Capítulo 2: El peso de la espera",
        descripcion: [
          "Pasaron tres semanas. El docente sigue dando clases. La estudiante desarrolla crisis de ansiedad cada mañana antes de entrar a la escuela. Su rendimiento cae al mínimo. Nadie ha hablado con ella.",
          "Otros padres empiezan a notar cambios en sus propios hijos. Un rumor circula en el grupo de WhatsApp de la escuela. La dirección pide 'no difundir información no verificada'.",
        ],
        pregunta: "¿Qué detona finalmente la acción?",
        opciones: [
          { id: "a", titulo: "Otra víctima habla", desc: "Una segunda estudiante revela a su madre lo ocurrido, lo que obliga a la escuela a actuar." },
          { id: "b", titulo: "La prensa se entera", desc: "Un familiar filtra información a un medio local y la presión pública obliga a la Secretaría de Educación a intervenir." },
          { id: "c", titulo: "La niña habla sola", desc: "Sin apoyo adulto, la estudiante encuentra la fuerza para contarle a su orientadora escolar directamente." },
        ],
      },
    },

    capitulo3: {
      // flujos de cap2.a
      aa: {
        titulo: "Capítulo 3: La justicia que llega tarde",
        descripcion: [
          "La fiscalía abrió carpeta de investigación. Pero los tiempos institucionales son lentos: citas que se cancelan, peritos que no aparecen, formularios que se pierden. La familia lleva meses en un proceso que prometía ser ágil.",
          "El docente fue suspendido preventivamente, pero con goce de sueldo. La estudiante tuvo que cambiar de escuela 'para su protección'. Ella siente que quien fue castigada fue ella.",
        ],
        pregunta: "¿Cuál es el siguiente paso para la familia?",
        opciones: [
          { id: "a", titulo: "Persistir con acompañamiento", desc: "Se unen a una red de apoyo legal y psicológico para no abandonar el proceso." },
          { id: "b", titulo: "Explorar vías alternativas", desc: "Buscan la Comisión de Derechos Humanos para documentar las fallas institucionales." },
          { id: "c", titulo: "Priorizar la recuperación", desc: "Deciden pausar el proceso legal para enfocarse en la salud emocional de su hija." },
        ],
      },
      ab: {
        titulo: "Capítulo 3: La red que sostiene",
        descripcion: [
          "La organización civil tomó el caso. Asignaron una abogada especializada en derechos de infancia y una psicóloga para acompañar a la familia. Por primera vez, alguien les explica el proceso sin abrumarlos.",
          "Con asesoría, la familia presenta denuncia formal. La organización documenta también las fallas del protocolo escolar. El caso ya no es solo de una niña: es evidencia de un sistema que falló.",
        ],
        pregunta: "¿Cómo concluye esta etapa?",
        opciones: [
          { id: "a", titulo: "El docente es imputado", desc: "Con la evidencia documentada, la fiscalía logra vincular al docente a proceso." },
          { id: "b", titulo: "La escuela es sancionada", desc: "La Secretaría de Educación inicia un procedimiento disciplinario contra la dirección por omisión." },
          { id: "c", titulo: "El caso visibiliza el problema", desc: "El caso se convierte en referente para exigir protocolos obligatorios en escuelas de la región." },
        ],
      },
      ac: {
        titulo: "Capítulo 3: La institución que se protege a sí misma",
        descripcion: [
          "La escuela cerró el caso internamente. El docente fue 'reubicado' a otro plantel. Nadie fue sancionado formalmente. La familia recibió una disculpa de palabra en una reunión privada.",
          "La estudiante sigue cargando lo ocurrido. Sin proceso, sin reconocimiento, sin justicia. La escuela continúa operando igual. Y el docente frente a otro grupo.",
        ],
        pregunta: "¿Qué queda después del silencio?",
        opciones: [
          { id: "a", titulo: "La familia no se rinde", desc: "Meses después, con más fuerza, deciden denunciar ante la fiscalía y la CNDH." },
          { id: "b", titulo: "Otras familias actúan", desc: "Padres de familia organizan una red de vigilancia y exigen a la SEP auditar al docente reubicado." },
          { id: "c", titulo: "El silencio se rompe diferente", desc: "La propia estudiante, años después, comparte su historia y se convierte en activista." },
        ],
      },
      // flujos de cap2.b
      ba: {
        titulo: "Capítulo 3: La denuncia que cambia el rumbo",
        descripcion: [
          "La Supervisión de Zona intervino. Por primera vez, alguien externo a la escuela tomó nota formal del caso. El docente fue suspendido sin goce de sueldo mientras se investiga.",
          "Pero la maquinaria burocrática es lenta. La familia necesita sostener la presión para que el expediente no se archive. Cada semana que pasa, el riesgo de que el caso sea minimizado crece.",
        ],
        pregunta: "¿Cómo sostiene la familia la presión?",
        opciones: [
          { id: "a", titulo: "Con apoyo legal", desc: "Contratan a una abogada para acompañar el proceso administrativo y penal en paralelo." },
          { id: "b", titulo: "Con otras familias", desc: "Se unen a otras familias afectadas y presentan una queja colectiva ante la SEP." },
          { id: "c", titulo: "Con documentación propia", desc: "Registran cada comunicación, reunión y respuesta institucional para construir un expediente sólido." },
        ],
      },
      bb: {
        titulo: "Capítulo 3: El cambio que protege, pero no sana",
        descripcion: [
          "La estudiante está en una escuela nueva. El ambiente es diferente, más tranquilo. Pero lleva consigo lo que pasó. Los recuerdos no cambian de escuela.",
          "La familia busca atención psicológica, pero el sistema público tiene listas de espera de meses. La atención privada es costosa. El daño emocional avanza sin el apoyo necesario.",
        ],
        pregunta: "¿Qué hace la familia para acceder a apoyo?",
        opciones: [
          { id: "a", titulo: "Buscar organizaciones civiles", desc: "Localizan una organización que ofrece terapia gratuita para infancias víctimas de violencia." },
          { id: "b", titulo: "Acudir al DIF municipal", desc: "Solicitan atención al DIF, que los canaliza a un programa de intervención familiar." },
          { id: "c", titulo: "Construir red de apoyo", desc: "La familia y amigos crean un entorno de contención mientras esperan atención especializada." },
        ],
      },
      bc: {
        titulo: "Capítulo 3: Cuando la institución gana",
        descripcion: [
          "La versión oficial prevaleció. El docente siguió en su puesto. La familia fue señalada discretamente como 'conflictiva'. La estudiante escucha comentarios en los pasillos.",
          "El silencio institucional tiene peso. La familia empieza a dudar de su propia memoria. El sistema no los venció con argumentos, sino con el agotamiento.",
        ],
        pregunta: "¿Qué les queda a la familia?",
        opciones: [
          { id: "a", titulo: "Recuperar la narrativa", desc: "Deciden documentar todo y buscar a un periodista de investigación para visibilizar el caso." },
          { id: "b", titulo: "Buscar justicia restaurativa", desc: "Contactan a una organización que trabaja con mediación y justicia para infancias." },
          { id: "c", titulo: "Proteger hacia adelante", desc: "Sin poder cambiar lo pasado, enfocan su energía en proteger a sus otros hijos y a los de su comunidad." },
        ],
      },
      // flujos de cap2.c
      ca: {
        titulo: "Capítulo 3: Voces que se suman",
        descripcion: [
          "La segunda víctima habló. Su testimonio coincide en detalles con el de la primera estudiante. La escuela ya no puede contener el caso internamente. La Supervisión de Zona interviene de oficio.",
          "Dos familias, una misma historia. Ahora la pregunta no es si algo pasó, sino por qué tardó tanto en ser atendido.",
        ],
        pregunta: "¿Cómo avanzan juntas las familias?",
        opciones: [
          { id: "a", titulo: "Denuncia conjunta", desc: "Presentan una denuncia penal conjunta con el acompañamiento de una organización especializada." },
          { id: "b", titulo: "Queja ante la CNDH", desc: "Documentan las fallas institucionales y presentan queja ante la Comisión Nacional de Derechos Humanos." },
          { id: "c", titulo: "Presión comunitaria", desc: "Convocan a la comunidad escolar a una asamblea para exigir transparencia y cambios estructurales." },
        ],
      },
      cb: {
        titulo: "Capítulo 3: La exposición que fuerza la respuesta",
        descripcion: [
          "El medio publicó la nota. La Secretaría de Educación emitió un comunicado en 24 horas. Se anunció una 'investigación interna urgente'. El docente fue suspendido ese mismo día.",
          "Pero la familia no buscaba titulares. Buscaba justicia. La exposición mediática trae presión, pero también vulnerabilidad. El nombre de la escuela, el barrio, los detalles filtran información que la niña no eligió compartir.",
        ],
        pregunta: "¿Cómo navega la familia la atención pública?",
        opciones: [
          { id: "a", titulo: "Limitar la exposición", desc: "Deciden no dar más declaraciones y canalizan todo a través de un abogado que protege la identidad de la niña." },
          { id: "b", titulo: "Usar la visibilidad", desc: "Deciden hablar públicamente, pero con condiciones: sin revelar datos de la menor y exigiendo reformas concretas." },
          { id: "c", titulo: "Retirarse del escrutinio", desc: "Agotados por la exposición, se retiran de los medios y buscan resolver el caso por vías legales privadas." },
        ],
      },
      cc: {
        titulo: "Capítulo 3: La voz que nadie esperaba",
        descripcion: [
          "La estudiante lo contó ella sola. Sin que nadie la presionara, sin que nadie le creyera del todo al principio. La orientadora la escuchó, tomó notas, y esta vez siguió el protocolo.",
          "Es la primera vez que alguien del sistema escolar actúa correctamente. Pero el camino que queda por delante sigue siendo largo y difícil.",
        ],
        pregunta: "¿Qué sigue después de que ella habló?",
        opciones: [
          { id: "a", titulo: "Activación del protocolo real", desc: "La orientadora sigue los pasos correctos: notificación a padres, reporte a dirección y contacto con la fiscalía." },
          { id: "b", titulo: "Acompañamiento psicológico", desc: "Se prioriza la estabilidad emocional de la niña antes de cualquier acción legal o institucional." },
          { id: "c", titulo: "La comunidad se organiza", desc: "El caso moviliza a docentes y padres para exigir formación en detección y prevención de abuso." },
        ],
      },
    },
  },

  // ─────────────────────────────────────────────
  // 2. ACOSO SEXUAL
  // ─────────────────────────────────────────────
  acoso_sexual: {
    label: "Acoso Sexual",

    capitulo1: {
      titulo: "Capítulo 1: Los comentarios que nadie frena",
      descripcion: [
        "En una secundaria técnica, un grupo de estudiantes mayores sistemáticamente hace comentarios sobre el cuerpo de una compañera más joven. Sucede en el pasillo, en el recreo, frente a docentes que miran hacia otro lado.",
        "La estudiante comienza a ir al baño a la hora del recreo para evitar los pasillos. Cambió su ropa para 'no llamar la atención'. Nadie en la escuela ha intervenido formalmente.",
      ],
      pregunta: "¿Cuál es la primera respuesta del entorno escolar?",
      opciones: [
        { id: "a", titulo: "Una maestra interviene", desc: "Una docente que presenció un incidente decide hablar con la directora y con los padres de los involucrados." },
        { id: "b", titulo: "Amigas de la víctima actúan", desc: "Un grupo de compañeras decide acompañarla siempre y confrontar verbalmente a los acosadores." },
        { id: "c", titulo: "Nadie hace nada visible", desc: "El acoso continúa porque el entorno normaliza los comentarios como 'juegos' o 'cosas de chavos'." },
      ],
    },

    capitulo2: {
      a: {
        titulo: "Capítulo 2: La queja que el sistema minimiza",
        descripcion: [
          "La directora recibió el reporte. Llamó a los estudiantes acosadores a su oficina y les dio 'una llamada de atención'. No se notificó formalmente a sus padres, no se abrió expediente.",
          "La maestra que reportó siente que hizo lo correcto pero que el sistema anuló su acción. La estudiante acosada lo sabe: si la escuela no actuó con la maestra, no actuará con ella.",
        ],
        pregunta: "¿Qué hace la maestra ante la inacción?",
        opciones: [
          { id: "a", titulo: "Escalar el reporte", desc: "Documenta el caso por escrito y lo escala a la Supervisión de Zona exigiendo respuesta formal." },
          { id: "b", titulo: "Acompañar a la familia", desc: "Se acerca a los padres de la estudiante para orientarlos sobre cómo presentar una queja formal." },
          { id: "c", titulo: "Crear un espacio seguro", desc: "Ante la inacción institucional, habilita su aula como espacio seguro y sensibiliza a su grupo." },
        ],
      },
      b: {
        titulo: "Capítulo 2: La solidaridad que no debería ser la solución",
        descripcion: [
          "Las compañeras forman un escudo humano cotidiano. El acoso disminuye en los espacios visibles, pero los acosadores buscan momentos donde la estudiante esté sola: salida de la escuela, transporte.",
          "La carga de proteger a su amiga empieza a pesar sobre el grupo. Una de ellas fue insultada por un acosador. La escuela sigue sin intervenir formalmente.",
        ],
        pregunta: "¿Qué pasa cuando la solidaridad no es suficiente?",
        opciones: [
          { id: "a", titulo: "Las amigas reportan juntas", desc: "El grupo de compañeras presenta una queja colectiva ante la dirección con fechas y descripciones." },
          { id: "b", titulo: "Buscan a un adulto aliado", desc: "Identifican a una maestra de confianza y le presentan todo lo que ha pasado." },
          { id: "c", titulo: "El grupo se fractura", desc: "La presión y los ataques dividen al grupo; la estudiante acosada queda más vulnerable que antes." },
        ],
      },
      c: {
        titulo: "Capítulo 2: La normalización que destruye",
        descripcion: [
          "El acoso escaló. Ya no son solo comentarios: son fotografías tomadas sin consentimiento en los pasillos, notas en el escritorio, mensajes por redes sociales. La estudiante dejó de participar en clases.",
          "Un docente que presenció un episodio dijo a la clase: 'ya dejen de pelear'. Nadie lo corrigió. La escuela sigue funcionando como si nada pasara.",
        ],
        pregunta: "¿Qué quiebra el silencio institucional?",
        opciones: [
          { id: "a", titulo: "La familia exige respuesta", desc: "Los padres van a la escuela con un registro escrito de todos los episodios y exigen una reunión formal." },
          { id: "b", titulo: "Un docente actúa solo", desc: "Un maestro decide documentar lo que presenció y lo reporta a la Supervisión de Zona sin avisar a la dirección." },
          { id: "c", titulo: "La estudiante habla en clase", desc: "En un momento inesperado, la estudiante narra ante todo el grupo lo que ha vivido. El silencio cambia." },
        ],
      },
    },

    capitulo3: {
      aa: {
        titulo: "Capítulo 3: El expediente que importa",
        descripcion: [
          "La Supervisión de Zona abrió un expediente formal. Los acosadores y sus familias fueron citados. Por primera vez, la escuela tuvo que explicar por qué no actuó antes.",
          "La estudiante siente algo nuevo: que el sistema reconoce lo que vivió. No es justicia completa, pero es un comienzo real.",
        ],
        pregunta: "¿Cómo concluye el proceso?",
        opciones: [
          { id: "a", titulo: "Sanción a los acosadores", desc: "Los estudiantes reciben una suspensión formal y sus familias firman un acta de compromiso." },
          { id: "b", titulo: "Protocolo actualizado", desc: "La escuela es obligada a actualizar su protocolo de actuación ante acoso y capacitar a su personal." },
          { id: "c", titulo: "Ambas medidas", desc: "Se aplican sanciones y se exige actualización del protocolo, sentando un precedente en la zona escolar." },
        ],
      },
      ab: {
        titulo: "Capítulo 3: Familia informada, familia fuerte",
        descripcion: [
          "Los padres, ya orientados, presentaron una queja formal ante la dirección con copia a la Supervisión de Zona. La escuela no pudo ignorarlos: había registro escrito.",
          "La maestra y la familia trabajan juntos. La estudiante lo siente: hay adultos que la creen y actúan. Eso cambia algo importante en ella.",
        ],
        pregunta: "¿Cuál es el resultado?",
        opciones: [
          { id: "a", titulo: "Cambios estructurales", desc: "La queja obliga a la escuela a implementar un comité de convivencia escolar activo." },
          { id: "b", titulo: "Justicia para la estudiante", desc: "Los acosadores son sancionados y la estudiante recibe acompañamiento psicológico de la escuela." },
          { id: "c", titulo: "Visibilización del caso", desc: "El caso se convierte en referente para otras familias de la zona que vivían situaciones similares." },
        ],
      },
      ac: {
        titulo: "Capítulo 3: El aula que protege",
        descripcion: [
          "El espacio que la maestra creó se convirtió en referencia. Otros estudiantes comenzaron a acercarse. Ella escucha, orienta, documenta casos con permiso de los involucrados.",
          "La dirección lo nota y no sabe cómo reaccionar. El cambio no vino de arriba, vino del interior de un aula.",
        ],
        pregunta: "¿Qué sigue para este espacio?",
        opciones: [
          { id: "a", titulo: "La dirección lo institucionaliza", desc: "Ante los resultados visibles, la dirección decide adoptar el modelo a nivel escuela." },
          { id: "b", titulo: "Otros docentes se suman", desc: "Tres maestras más abren espacios similares en sus aulas. La cultura escolar empieza a cambiar." },
          { id: "c", titulo: "Se convierte en proyecto formal", desc: "La maestra presenta el modelo ante la Supervisión de Zona como propuesta de intervención replicable." },
        ],
      },
      ba: {
        titulo: "Capítulo 3: La queja que abre puertas",
        descripcion: [
          "La queja colectiva impactó diferente a una individual. La dirección no pudo minimizarla. Se convocó a una reunión con todos los padres involucrados.",
          "La estudiante acosada lo vio: sus amigas hablaron por ella y con ella. Por primera vez, los acosadores tuvieron que mirar a la cara las consecuencias de sus actos.",
        ],
        pregunta: "¿Cuál es el desenlace?",
        opciones: [
          { id: "a", titulo: "Sanciones y protocolo", desc: "La escuela aplica sanciones y se compromete a actualizar su reglamento en 30 días." },
          { id: "b", titulo: "Proceso de reparación", desc: "Se inicia un proceso de reparación del daño donde los acosadores reconocen su responsabilidad." },
          { id: "c", titulo: "La escuela es auditada", desc: "La Supervisión de Zona abre una auditoría para revisar todos los casos de acoso no atendidos." },
        ],
      },
      bb: {
        titulo: "Capítulo 3: El adulto que hace la diferencia",
        descripcion: [
          "La maestra escuchó todo. Con calma, sin juzgar, tomó notas. Les dijo que lo que describían era acoso sexual y que tenía un nombre y consecuencias legales.",
          "Con su orientación, el grupo y la familia de la estudiante construyeron una queja documentada. La maestra ofreció ser testigo formal si era necesario.",
        ],
        pregunta: "¿Cómo termina esta historia?",
        opciones: [
          { id: "a", titulo: "Con justicia real", desc: "Los acosadores son sancionados formalmente y la escuela implementa un protocolo nuevo." },
          { id: "b", titulo: "Con acompañamiento continuo", desc: "La estudiante recibe apoyo psicológico y la maestra sigue siendo su punto de confianza en la escuela." },
          { id: "c", titulo: "Con transformación colectiva", desc: "El caso genera un taller de prevención de acoso sexual que se integra al calendario escolar." },
        ],
      },
      bc: {
        titulo: "Capítulo 3: Reconstruir desde la fractura",
        descripcion: [
          "El grupo se separó. La estudiante quedó sin su red de apoyo justo cuando más la necesitaba. Los acosadores lo notaron.",
          "Pero algo quedó: ella misma había visto que había personas dispuestas a acompañarla. Eso no desaparece del todo.",
        ],
        pregunta: "¿Cómo se reconstruye el camino?",
        opciones: [
          { id: "a", titulo: "Con apoyo profesional", desc: "La familia busca orientación psicológica para la estudiante y apoyo legal para documentar el caso." },
          { id: "b", titulo: "Con nuevas alianzas", desc: "La estudiante encuentra apoyo en una organización juvenil fuera de la escuela." },
          { id: "c", titulo: "Con su propia voz", desc: "Decide hablar directamente con la directora, sola, con todo documentado." },
        ],
      },
      ca: {
        titulo: "Capítulo 3: El registro que cambia todo",
        descripcion: [
          "La familia llegó con fechas, descripciones, fotos de mensajes, nombres. La dirección no pudo ignorarlos. Por primera vez en meses, la escuela tuvo que dar respuestas.",
          "El registro meticuloso de la familia se convirtió en el expediente que la institución no quiso construir. Ahora era evidencia.",
        ],
        pregunta: "¿Cuál es el resultado de la queja?",
        opciones: [
          { id: "a", titulo: "Sanciones formales", desc: "Los acosadores son suspendidos y sus familias reciben una citación formal con acta." },
          { id: "b", titulo: "Cambio de directora", desc: "La Supervisión de Zona determina que la dirección falló en su obligación y abre un proceso administrativo." },
          { id: "c", titulo: "Protocolo de emergencia", desc: "La escuela implementa un protocolo inmediato de atención y prevención de acoso sexual." },
        ],
      },
      cb: {
        titulo: "Capítulo 3: Cuando un docente actúa solo",
        descripcion: [
          "El reporte del docente llegó a la Supervisión de Zona sin pasar por la dirección. Eso fue inusual. Y efectivo.",
          "La dirección fue convocada a explicar por qué no había actuado. El docente que reportó se convirtió en testigo clave del proceso.",
        ],
        pregunta: "¿Cómo avanza el caso?",
        opciones: [
          { id: "a", titulo: "Con investigación formal", desc: "La Supervisión abre un proceso formal que incluye entrevistas a estudiantes, padres y personal docente." },
          { id: "b", titulo: "Con intervención de la SEP", desc: "El caso escala a la Secretaría de Educación, que envía un equipo de intervención a la escuela." },
          { id: "c", titulo: "Con cambios inmediatos", desc: "La directora es obligada a implementar medidas correctivas en un plazo de 15 días hábiles." },
        ],
      },
      cc: {
        titulo: "Capítulo 3: La voz que cambia la sala",
        descripcion: [
          "Cuando ella habló, el salón quedó en silencio. Algunos compañeros bajaron la mirada. Otros la miraron con algo nuevo: reconocimiento.",
          "La maestra, que estaba presente, tomó la decisión más importante de su carrera ese día: creerle, documentar, actuar.",
        ],
        pregunta: "¿Qué pasa después de que ella habló?",
        opciones: [
          { id: "a", titulo: "La escuela actúa de inmediato", desc: "La maestra activa el protocolo ese mismo día y la dirección convoca a una reunión urgente." },
          { id: "b", titulo: "El grupo toma posición", desc: "Varios compañeros deciden apoyarla formalmente como testigos ante la dirección." },
          { id: "c", titulo: "Se abre un diálogo real", desc: "La maestra facilita un espacio de diálogo estructurado donde se nombra el acoso y sus consecuencias." },
        ],
      },
    },
  },

  // ─────────────────────────────────────────────
  // 3. HOSTIGAMIENTO SEXUAL
  // ─────────────────────────────────────────────
  hostigamiento_sexual: {
    label: "Hostigamiento Sexual",

    capitulo1: {
      titulo: "Capítulo 1: El poder que abusa de la confianza",
      descripcion: [
        "Un subdirector de bachillerato utiliza su posición para hacer comentarios inapropiados a estudiantes que piden permisos, constancias o revisiones de calificaciones. Siempre a solas, siempre con la puerta entreabierta.",
        "Varias estudiantes han aprendido a ir acompañadas a su oficina o a evitarlo por completo. Ninguna ha hablado formalmente. El miedo a no graduarse, a perder una beca, a no ser creída, pesa más.",
      ],
      pregunta: "¿Qué detona la primera acción?",
      opciones: [
        { id: "a", titulo: "Una estudiante habla", desc: "Una estudiante decide contarle a su tutora lo que ocurrió en la última visita a la subdirección." },
        { id: "b", titulo: "Un testigo reporta", desc: "Un docente que escuchó a través de la puerta decide documentar lo que oyó y reportarlo." },
        { id: "c", titulo: "Las estudiantes se organizan", desc: "Un grupo de estudiantes afectadas decide reunirse, comparar experiencias y actuar de forma colectiva." },
      ],
    },

    capitulo2: {
      a: {
        titulo: "Capítulo 2: Ser creída no es suficiente",
        descripcion: [
          "La tutora la creyó. Pero cuando lo llevó a la dirección, la respuesta fue pedir 'más pruebas'. La estudiante no tiene grabaciones, no tiene testigos directos. Solo su palabra contra la de un funcionario con 15 años en la institución.",
          "Le sugirieron 'evitar situaciones incómodas' y 'ser más cuidadosa'. La tutora está frustrada. La estudiante se arrepiente de haber hablado.",
        ],
        pregunta: "¿Cómo responde la tutora ante el bloqueo institucional?",
        opciones: [
          { id: "a", titulo: "Busca asesoría jurídica", desc: "Contacta a una abogada especializada para orientar a la estudiante sobre sus derechos y opciones." },
          { id: "b", titulo: "Identifica a más afectadas", desc: "Discretamente, habla con otras estudiantes para saber si han vivido situaciones similares." },
          { id: "c", titulo: "Documenta todo", desc: "Empieza a registrar por escrito cada comunicación, reunión y respuesta institucional." },
        ],
      },
      b: {
        titulo: "Capítulo 2: El testigo que rompe el patrón",
        descripcion: [
          "El reporte del docente llegó a la dirección. Era inusual: un testimonio adulto, con fecha, descripción y firma. La dirección no pudo ignorarlo como ignoraba los rumores.",
          "El subdirector fue convocado a una reunión privada. Negó todo. Pero el expediente ya existía. Y el docente que reportó se mantuvo firme.",
        ],
        pregunta: "¿Cómo avanza el caso?",
        opciones: [
          { id: "a", titulo: "Más testimonios se suman", desc: "Otras estudiantes, al saber que hay un reporte formal, deciden agregar sus propios testimonios." },
          { id: "b", titulo: "Intervención de la Supervisión", desc: "La dirección, ante la presión, reporta el caso a la Supervisión de Zona para cubrirse institucionalmente." },
          { id: "c", titulo: "El subdirector es separado", desc: "Como medida cautelar, el subdirector es removido de sus funciones mientras se investiga." },
        ],
      },
      c: {
        titulo: "Capítulo 2: La fuerza del colectivo",
        descripcion: [
          "Seis estudiantes. Seis historias distintas, con el mismo nombre al centro. Cuando se sentaron juntas y compararon, el patrón fue innegable: mismas palabras, mismos momentos, mismo lugar.",
          "Decidieron no ir a la dirección primero. Fueron directamente a la Supervisión de Zona con un documento firmado por todas.",
        ],
        pregunta: "¿Cuál es la respuesta institucional?",
        opciones: [
          { id: "a", titulo: "Investigación formal abierta", desc: "La Supervisión abre expediente y designa a una persona externa para coordinar la investigación." },
          { id: "b", titulo: "Presión para retirar la queja", desc: "Funcionarios contactan a las familias para 'resolver el asunto internamente' antes de que escale." },
          { id: "c", titulo: "El subdirector es suspendido", desc: "Como medida inmediata, el subdirector es suspendido con goce de sueldo mientras se investiga." },
        ],
      },
    },

    capitulo3: {
      aa: {
        titulo: "Capítulo 3: El derecho que nadie explicó",
        descripcion: [
          "La abogada les explicó que el hostigamiento sexual por parte de una figura de autoridad escolar es un delito tipificado. Que no necesitan grabaciones. Que la credibilidad también es evidencia.",
          "Con esa información, la estudiante decidió no retractarse. Decidió presentar una denuncia formal ante la Fiscalía, con la tutora y la abogada como acompañantes.",
        ],
        pregunta: "¿Cómo avanza la denuncia?",
        opciones: [
          { id: "a", titulo: "Con acompañamiento completo", desc: "La abogada, la tutora y una organización civil acompañan todo el proceso legal." },
          { id: "b", titulo: "Con más testimonios", desc: "Otras estudiantes se suman a la denuncia, fortaleciendo el expediente." },
          { id: "c", titulo: "Con exigencia de remoción", desc: "Se solicita la remoción definitiva del subdirector como medida cautelar urgente." },
        ],
      },
      ab: {
        titulo: "Capítulo 3: Las voces que confirman el patrón",
        descripcion: [
          "Cuatro estudiantes más. La tutora las escuchó una por una. Sus relatos coincidían en detalles que ninguna podría haber inventado por separado.",
          "Con esos testimonios, el caso dejó de ser 'una queja individual' para convertirse en evidencia de una conducta sistemática.",
        ],
        pregunta: "¿Qué pasa con los testimonios colectivos?",
        opciones: [
          { id: "a", titulo: "Se presenta denuncia colectiva", desc: "Las estudiantes y la tutora presentan una denuncia conjunta ante la Fiscalía y la SEP." },
          { id: "b", titulo: "La CNDH interviene", desc: "Los testimonios son presentados ante la Comisión Nacional de Derechos Humanos." },
          { id: "c", titulo: "La institución actúa primero", desc: "Ante la evidencia, la dirección inicia un proceso disciplinario formal antes de que llegue a instancias externas." },
        ],
      },
      ac: {
        titulo: "Capítulo 3: El expediente que no se puede ignorar",
        descripcion: [
          "El registro meticuloso de la tutora se convirtió en el expediente más sólido del caso. Cada 'no hay pruebas' institucional quedó documentado como parte del patrón de encubrimiento.",
          "Con ese material, la tutora y la estudiante se presentaron ante la Supervisión de Zona y ante la Fiscalía el mismo día.",
        ],
        pregunta: "¿Cuál es el resultado?",
        opciones: [
          { id: "a", titulo: "El subdirector es imputado", desc: "Con el expediente completo, la fiscalía vincula al subdirector a proceso penal." },
          { id: "b", titulo: "La dirección es investigada", desc: "La documentación de encubrimiento abre un proceso paralelo contra la dirección del plantel." },
          { id: "c", titulo: "Se exige reforma institucional", desc: "El caso se usa para exigir protocolos obligatorios de atención a hostigamiento en todos los planteles de la zona." },
        ],
      },
      ba: {
        titulo: "Capítulo 3: El efecto dominó",
        descripcion: [
          "Cuando las otras estudiantes supieron que había un reporte formal, algo cambió. El miedo seguía ahí, pero ya no estaban solas. Una a una, fueron agregando sus testimonios.",
          "El caso pasó de ser 'la queja de una estudiante' a ser evidencia de una conducta reiterada. Eso cambia todo en términos legales.",
        ],
        pregunta: "¿Cómo termina el proceso?",
        opciones: [
          { id: "a", titulo: "Con remoción definitiva", desc: "El subdirector es removido definitivamente de sus funciones y se abre proceso penal." },
          { id: "b", titulo: "Con cambio institucional", desc: "La institución implementa un protocolo de atención obligatorio y un comité de vigilancia." },
          { id: "c", titulo: "Con acompañamiento a las víctimas", desc: "Las estudiantes reciben apoyo psicológico y legal durante todo el proceso." },
        ],
      },
      bb: {
        titulo: "Capítulo 3: La investigación que no puede detenerse",
        descripcion: [
          "La Supervisión de Zona asignó a una coordinadora externa para llevar la investigación. La dirección del plantel fue apartada del proceso para evitar conflicto de interés.",
          "Por primera vez, la investigación avanza sin que la institución investigada sea quien decide su ritmo.",
        ],
        pregunta: "¿Cuál es el desenlace?",
        opciones: [
          { id: "a", titulo: "El subdirector es sancionado", desc: "La investigación concluye con una sanción administrativa formal y proceso penal abierto." },
          { id: "b", titulo: "El plantel es auditado", desc: "La auditoría revela otros casos no atendidos, lo que amplía el alcance de la investigación." },
          { id: "c", titulo: "Se crean nuevos protocolos", desc: "El caso se convierte en el argumento central para reformar los protocolos de la zona escolar." },
        ],
      },
      bc: {
        titulo: "Capítulo 3: La medida que llega tarde, pero llega",
        descripcion: [
          "El subdirector fue separado de sus funciones. Las estudiantes lo supieron al llegar a la escuela un lunes. No hubo comunicado oficial, no hubo explicación pública.",
          "Pero el alivio fue real. Y la pregunta también: ¿qué pasa con todo lo que ya ocurrió?",
        ],
        pregunta: "¿Qué exigen las estudiantes ahora?",
        opciones: [
          { id: "a", titulo: "Proceso formal y transparente", desc: "Exigen saber qué proceso se abrió, quién lo lleva y cuáles serán las consecuencias reales." },
          { id: "b", titulo: "Reparación del daño", desc: "Solicitan apoyo psicológico institucional y reconocimiento formal de lo ocurrido." },
          { id: "c", titulo: "Garantías de no repetición", desc: "Piden que la institución implemente mecanismos permanentes para prevenir futuros casos." },
        ],
      },
      ca: {
        titulo: "Capítulo 3: La investigación que cambia el caso",
        descripcion: [
          "La investigadora externa llegó a la escuela. No era parte del sistema que había ignorado las quejas. Escuchó a las estudiantes, revisó el expediente, entrevistó al personal.",
          "Su informe fue contundente: patrón documentado, omisión institucional, responsabilidad del subdirector y de quienes no actuaron.",
        ],
        pregunta: "¿Cuál es el resultado del informe?",
        opciones: [
          { id: "a", titulo: "Proceso penal abierto", desc: "La Fiscalía recibe el informe y vincula al subdirector a proceso por hostigamiento sexual." },
          { id: "b", titulo: "Sanción institucional", desc: "La SEP inicia un proceso de separación definitiva del subdirector y de la dirección del plantel." },
          { id: "c", titulo: "Reforma del protocolo", desc: "El informe se convierte en base para reformar los protocolos de atención a nivel estatal." },
        ],
      },
      cb: {
        titulo: "Capítulo 3: Resistir la presión",
        descripcion: [
          "Llamaron a las familias. Les dijeron que 'esto podía resolverse internamente'. Que 'hacer escándalo' perjudicaría a sus hijas. Que el subdirector 'llevaría años en la institución sin problemas'.",
          "Dos familias aceptaron retirarse. Cuatro no. Las cuatro que se mantuvieron sostuvieron el proceso.",
        ],
        pregunta: "¿Cómo sostienen las familias el proceso?",
        opciones: [
          { id: "a", titulo: "Con acompañamiento legal", desc: "Contratan a una abogada especializada que asesora a las cuatro familias en conjunto." },
          { id: "b", titulo: "Con visibilidad pública", desc: "Deciden hacer pública la situación a través de medios y redes sociales, con protección de identidades." },
          { id: "c", titulo: "Con apoyo de la CNDH", desc: "Presentan queja ante la Comisión Nacional de Derechos Humanos documentando la presión recibida." },
        ],
      },
      cc: {
        titulo: "Capítulo 3: La suspensión que no es el final",
        descripcion: [
          "El subdirector fue suspendido. Las estudiantes respiraron. Pero la suspensión con goce de sueldo no es justicia: es un paréntesis.",
          "Saben que si no hay proceso formal, él puede regresar. Y que otras estudiantes en otras escuelas pueden estar viviendo lo mismo.",
        ],
        pregunta: "¿Qué deciden hacer las estudiantes?",
        opciones: [
          { id: "a", titulo: "Presentar denuncia penal", desc: "Deciden formalizar la denuncia ante la Fiscalía para que la suspensión derive en proceso real." },
          { id: "b", titulo: "Exigir proceso disciplinario", desc: "Solicitan a la SEP que abra un proceso disciplinario formal paralelo al penal." },
          { id: "c", titulo: "Organizarse más allá de la escuela", desc: "Crean una red de estudiantes para documentar y visibilizar casos similares en otras instituciones." },
        ],
      },
    },
  },

  // ─────────────────────────────────────────────
  // 4. CORRUPCIÓN DE MENORES
  // ─────────────────────────────────────────────
  corrupcion_menores: {
    label: "Corrupción de Menores",

    capitulo1: {
      titulo: "Capítulo 1: La frontera que se mueve despacio",
      descripcion: [
        "En una escuela secundaria, un docente de computación permite que los estudiantes 'accedan libremente' a contenido en internet durante las clases. Dice que los trata 'como adultos'. Algunos estudiantes lo admiran por eso.",
        "Lo que comenzó como permisividad se fue convirtiendo en algo más: contenido sexual explícito en pantallas compartidas, comentarios sobre el cuerpo de las y los estudiantes, normalización de prácticas que ningún menor debería presenciar en un espacio escolar.",
      ],
      pregunta: "¿Quién nota primero que algo está mal?",
      opciones: [
        { id: "a", titulo: "Un estudiante habla en casa", desc: "Un estudiante le cuenta a su madre lo que pasa en las clases de computación sin dimensionar la gravedad." },
        { id: "b", titulo: "Una docente lo percibe", desc: "Una maestra nota cambios en el lenguaje y comportamiento de los estudiantes del grupo y comienza a indagar." },
        { id: "c", titulo: "Un estudiante se niega", desc: "Un estudiante se incomoda ante el contenido y se niega a participar. Sus compañeros lo presionan." },
      ],
    },

    capitulo2: {
      a: {
        titulo: "Capítulo 2: Lo que los adultos hacen con lo que saben",
        descripcion: [
          "La madre escuchó a su hijo. No lo minimizó. Fue a la escuela al día siguiente. La directora la recibió con escepticismo: 'los niños a veces exageran, hay que verificar'.",
          "Mientras se 'verifica', el docente sigue frente al grupo. La madre sale de la escuela sin certezas y con la sensación de que proteger a su hijo depende solo de ella.",
        ],
        pregunta: "¿Qué hace la madre ante la inacción?",
        opciones: [
          { id: "a", titulo: "Busca asesoría legal", desc: "Contacta a un abogado especializado en derechos de infancia para entender qué puede hacer." },
          { id: "b", titulo: "Habla con otras familias", desc: "Discretamente contacta a madres y padres de otros estudiantes del mismo grupo." },
          { id: "c", titulo: "Denuncia directamente", desc: "Decide presentar una denuncia formal ante la Fiscalía sin esperar la respuesta de la escuela." },
        ],
      },
      b: {
        titulo: "Capítulo 2: La investigación que nace desde adentro",
        descripcion: [
          "La maestra comenzó a preguntar, con cuidado, a estudiantes de confianza. Lo que escuchó la perturbó: llevaba meses pasando. Los estudiantes no lo habían dicho porque 'el profe era buena onda'.",
          "Con esa información, fue directamente a la Supervisión de Zona, sin pasar por la dirección de la escuela. Había aprendido que los problemas serios no se resuelven donde se generan.",
        ],
        pregunta: "¿Cómo responde la Supervisión de Zona?",
        opciones: [
          { id: "a", titulo: "Intervención inmediata", desc: "La Supervisión designa a una persona para visitar la escuela y tomar testimonios de los estudiantes." },
          { id: "b", titulo: "Solicita más evidencia", desc: "Pide a la maestra documentar más casos antes de actuar, lo que retrasa la intervención." },
          { id: "c", titulo: "Notifica a la dirección", desc: "Informa a la dirección del plantel para que 'resuelva internamente', lo que pone en riesgo el proceso." },
        ],
      },
      c: {
        titulo: "Capítulo 2: El estudiante que dice no",
        descripcion: [
          "El rechazo del estudiante creó un quiebre en la dinámica del grupo. Algunos compañeros lo presionaron. Pero otros, en privado, le dijeron que también se sentían incómodos.",
          "El docente lo ignoró públicamente, pero empezó a bajarlo la calificación. Ese patrón, la represalia académica, fue lo que finalmente alertó a su familia.",
        ],
        pregunta: "¿Cómo responde la familia al identificar el patrón?",
        opciones: [
          { id: "a", titulo: "Documenta las calificaciones", desc: "Comparan las calificaciones previas y posteriores y construyen evidencia del patrón de represalia." },
          { id: "b", titulo: "Confrontan a la escuela", desc: "Van a la dirección con el estudiante y exponen tanto la situación del aula como la represalia." },
          { id: "c", titulo: "Contactan a otras familias", desc: "Preguntan a otros padres si sus hijos han vivido algo similar en esa clase." },
        ],
      },
    },

    capitulo3: {
      aa: {
        titulo: "Capítulo 3: El derecho a que te crean",
        descripcion: [
          "El abogado fue claro: lo que describía el estudiante constituía corrupción de menores, un delito. Y que la escuela tenía obligación de actuar al primer reporte. No lo hizo.",
          "Con esa certeza, la madre y el abogado presentaron denuncia formal ante la Fiscalía. El docente fue citado a declarar.",
        ],
        pregunta: "¿Cómo avanza el proceso legal?",
        opciones: [
          { id: "a", titulo: "Con más testimonios", desc: "Otros estudiantes del grupo se suman a la denuncia con el apoyo de sus familias." },
          { id: "b", titulo: "Con evidencia digital", desc: "Se recuperan registros del historial de navegación de las computadoras del aula." },
          { id: "c", titulo: "Con acompañamiento especializado", desc: "Una organización civil se une al proceso para acompañar a las familias y documentar el caso." },
        ],
      },
      ab: {
        titulo: "Capítulo 3: La red que confirma el patrón",
        descripcion: [
          "Habló con tres madres. Las tres conocían situaciones similares. Una de ellas tenía capturas de pantalla que su hijo le había mostrado meses atrás sin saber qué hacer con ellas.",
          "Juntas tenían algo que ninguna tenía sola: un patrón documentado y corroborado. Decidieron presentar una queja conjunta.",
        ],
        pregunta: "¿Cómo presentan la queja?",
        opciones: [
          { id: "a", titulo: "Ante la Fiscalía", desc: "Presentan denuncia penal conjunta con toda la evidencia recopilada por las familias." },
          { id: "b", titulo: "Ante la SEP y la Supervisión", desc: "Presentan queja administrativa simultánea para que el docente sea suspendido de inmediato." },
          { id: "c", titulo: "Ante ambas instancias", desc: "Presentan denuncia penal y queja administrativa en paralelo, con el asesoramiento de un abogado." },
        ],
      },
      ac: {
        titulo: "Capítulo 3: La fiscalía que actúa",
        descripcion: [
          "La denuncia fue clara, directa y con suficiente información para que la Fiscalía actuara. El docente fue citado a declarar en menos de dos semanas.",
          "La escuela, al recibir la notificación de la Fiscalía, suspendió al docente de inmediato. Lo que no hicieron por voluntad propia, lo hicieron porque no tuvieron opción.",
        ],
        pregunta: "¿Qué sigue en el proceso?",
        opciones: [
          { id: "a", titulo: "Peritaje de equipos", desc: "La Fiscalía solicita un peritaje de las computadoras del aula para recuperar el historial." },
          { id: "b", titulo: "Testimonios de estudiantes", desc: "Con protocolos adecuados, se toman testimonios de los menores involucrados." },
          { id: "c", titulo: "Vinculación a proceso", desc: "Con la evidencia reunida, el juez vincula al docente a proceso penal." },
        ],
      },
      ba: {
        titulo: "Capítulo 3: La evidencia que no miente",
        descripcion: [
          "El perito informático recuperó el historial completo de las máquinas del aula. Las fechas, los sitios, los horarios: todo coincidía con el horario de clase del docente.",
          "La evidencia digital es difícil de negar. El docente cambió su versión tres veces ante la Fiscalía.",
        ],
        pregunta: "¿Cuál es el resultado?",
        opciones: [
          { id: "a", titulo: "Vinculación a proceso", desc: "El docente es vinculado a proceso penal con la evidencia digital como prueba principal." },
          { id: "b", titulo: "Separación definitiva", desc: "La SEP inicia proceso de separación definitiva del cargo con base en la evidencia." },
          { id: "c", titulo: "Ambas medidas en paralelo", desc: "Se procesan simultáneamente el expediente penal y el administrativo." },
        ],
      },
      bb: {
        titulo: "Capítulo 3: Esperar cuando no hay tiempo",
        descripcion: [
          "La Supervisión pidió más evidencia. Mientras tanto, el docente siguió frente al grupo. La maestra documentó cada día que pasaba sin intervención.",
          "Ese registro del tiempo transcurrido se convirtió en evidencia de omisión institucional.",
        ],
        pregunta: "¿Cómo presiona la maestra para que haya acción?",
        opciones: [
          { id: "a", titulo: "Escala a la SEP directamente", desc: "Envía su documentación directamente a la Secretaría de Educación sin esperar a la Supervisión." },
          { id: "b", titulo: "Contacta a una organización civil", desc: "Busca apoyo de una ONG especializada que pueda acompañar el proceso y hacer presión institucional." },
          { id: "c", titulo: "Alerta a las familias", desc: "Informa discretamente a las familias del grupo para que también presenten quejas formales." },
        ],
      },
      bc: {
        titulo: "Capítulo 3: Cuando la institución se convierte en obstáculo",
        descripcion: [
          "La dirección fue notificada por la Supervisión. En lugar de actuar, llamó a la maestra a su oficina y le pidió 'discreción' y 'no alarmar a los padres'.",
          "La maestra tenía ahora dos problemas: el docente y la dirección. Decidió que no podía resolver ambos desde adentro.",
        ],
        pregunta: "¿Qué hace la maestra?",
        opciones: [
          { id: "a", titulo: "Denuncia el encubrimiento", desc: "Documenta la conversación con la directora y la incluye en su reporte a la Fiscalía." },
          { id: "b", titulo: "Busca aliados dentro", desc: "Identifica a otros docentes dispuestos a firmar un reporte conjunto." },
          { id: "c", titulo: "Actúa con las familias", desc: "Informa a las familias del grupo y las orienta para presentar sus propias denuncias directamente." },
        ],
      },
      ca: {
        titulo: "Capítulo 3: La evidencia construida con cuidado",
        descripcion: [
          "Las calificaciones antes y después. Los mensajes. Los testimonios de otros estudiantes que también notaron el cambio. La familia construyó un expediente sin saber que eso era lo que estaban haciendo.",
          "Cuando lo presentaron ante la Supervisión de Zona, nadie pudo decir que era insuficiente.",
        ],
        pregunta: "¿Cuál es la respuesta institucional?",
        opciones: [
          { id: "a", titulo: "Suspensión inmediata", desc: "La Supervisión suspende al docente preventivamente mientras se abre investigación formal." },
          { id: "b", titulo: "Denuncia a la Fiscalía", desc: "La Supervisión está obligada a reportar el caso a la Fiscalía por tratarse de un posible delito." },
          { id: "c", titulo: "Auditoría del aula", desc: "Se ordena una revisión de los equipos de cómputo del aula como parte de la investigación." },
        ],
      },
      cb: {
        titulo: "Capítulo 3: La confrontación que abre el caso",
        descripcion: [
          "Fueron a la dirección con todo: el estudiante, la familia, los registros de calificaciones, una descripción escrita de lo ocurrido en el aula. La directora no pudo ignorarlos.",
          "El docente fue citado a la dirección ese mismo día. Por primera vez, tuvo que responder frente a alguien con autoridad.",
        ],
        pregunta: "¿Qué sigue después de la confrontación?",
        opciones: [
          { id: "a", titulo: "La dirección actúa", desc: "La directora reporta el caso a la Supervisión de Zona y suspende al docente preventivamente." },
          { id: "b", titulo: "La familia escala", desc: "Ante una respuesta insuficiente, la familia presenta denuncia directamente ante la Fiscalía." },
          { id: "c", titulo: "Otros estudiantes hablan", desc: "La confrontación abre la puerta para que otros estudiantes del grupo compartan sus propias experiencias." },
        ],
      },
      cc: {
        titulo: "Capítulo 3: La comunidad que se organiza",
        descripcion: [
          "Cuatro familias se reunieron. Cada una tenía una pieza del mismo rompecabezas. Juntas tenían la imagen completa.",
          "Decidieron presentar la queja de forma colectiva, con asesoría legal, ante la Fiscalía y la SEP simultáneamente.",
        ],
        pregunta: "¿Cuál es el resultado de la acción colectiva?",
        opciones: [
          { id: "a", titulo: "El docente es suspendido", desc: "La SEP suspende al docente en 48 horas ante la denuncia simultánea en dos instancias." },
          { id: "b", titulo: "Se abre investigación formal", desc: "La Fiscalía abre carpeta de investigación y solicita peritaje de los equipos del aula." },
          { id: "c", titulo: "Ambas medidas", desc: "El docente es suspendido y se abre investigación penal en paralelo, con acompañamiento a las familias." },
        ],
      },
    },
  },
};

export function getCap3Key(decisionCap1, decisionCap2) {
  return `${decisionCap1}${decisionCap2}`;
}