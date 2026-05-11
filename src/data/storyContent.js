// storyContent.js
// Estructura:
// escolar[tipo] → capitulo1 | capitulo2[opcionElegidaEnCap1] | capitulo3[opcionElegidaEnCap2]
// Tipos: "abuso_sexual" | "acoso_sexual" | "hostigamiento_sexual" | "corrupcion_menores"

export const stories = {

  escolar: {
    capitulo1: {
      titulo: "Capítulo 1: Lo que nadie quiere ver",
      descripcion: [
        "En una escuela primaria {nombre} pública, un docente de educación física lleva meses ganándose la confianza de los estudiantes con privilegios especiales: los deja salir antes, les regala dulces, los llama a quedarse después de clase. Nadie lo cuestiona.",
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

  hogar: {
    infancia: {
      capitulo1: {
        titulo: "Capítulo 1: Lo que nadie quiere ver",
        descripcion: [
          "{nombre} últimamente, cuando suena el timbre de salida en la escuela, algo se resiste. Se queda haciendo preguntas que no necesita preguntar, borrando el pizarrón sin que nadie se lo pida, acomodando su mochila despacio. Sus maestros piensan que solo es alguien con mucha curiosidad o responsable. {nombre} sabe que solo está demorando lo inevitable: llegar a casa.",
          "No podría explicar por qué. Su casa se supone que es un lugar seguro. Y sin embargo, algo ahí lo incomoda de una manera que no sabe nombrar.",
          "Esa noche, mientras cena, la televisión muestra una nota sobre delitos cometidos contra niños y adolescentes en el país.",

          { tipo: "dato", delito: ["Abuso sexual", "Hostigamiento sexual"], sublabel: "Dato de Contexto" },

          "{nombre} no dice nada. Pero esa noche tarda mucho en dormirse."
        ],
        pregunta: "¿Qué debería hacer {nombre}?",
        opciones: [
          { id: "a", titulo: "Pedir ayuda a un profesor para investigar más", desc: "Busca a su maestro favorito para entender lo que vio en las noticias." },
          { id: "b", titulo: "Seguir guardando silencio", desc: "Decide no decir nada y seguir cargando con lo que siente." },
          { id: "c", titulo: "Hablar con su mejor amigo", desc: "Le dice a su amigo que no quiere ir a casa. Su amigo lo invita a la suya." },
        ],
      },

      capitulo2: {
        a: {
          titulo: "Capítulo 2: Pedir ayuda a un profesor para investigar más",
          descripcion: [
            "Al día siguiente, {nombre} busca a su maestro/a favorito/a. No sabe bien cómo empezar, así que pregunta por lo más fácil: si lo que vio en la televisión es verdad.",
            "El maestro/a lo invita a sentarse. Le dice que sí, que desafortunadamente es real, y que hay cosas importantes que los niños deben saber para protegerse. Le explica con calma:",
            "El abuso sexual es cualquier contacto o comportamiento sexual hacia una persona sin su consentimiento. Cuando la víctima es un menor, el agresor casi siempre es alguien cercano: un familiar, un conocido, alguien de confianza. ",

            { tipo: "dato", delito: ["Abuso sexual"], sublabel: "Dato de Contexto" },

            "El hostigamiento sexual incluye comentarios, gestos, roces o conductas de naturaleza sexual que generan incomodidad o miedo. No necesita ser violento para ser un delito. ",

            { tipo: "dato", delito: ["Hostigamiento sexual"], sublabel: "Dato de Contexto" },

            "{nombre} escucha. El maestro/a habla con calma. Y algo en esa conversación hace que {nombre} sienta, por primera vez, que lo que le pasa en casa podría tener nombre.",
            "Guarda silencio un momento. Luego dice, despacio, que en su casa lo acarician de una manera que se siente rara. Que pensó que era una nueva forma de mostrarle cariño. Pero que algo no se siente bien.",
            "El maestro/a lo escucha sin interrumpirlo."


          ],

          pregunta: "¿Qué debería hacer el maestro?",
          opciones: [
            { id: "a", titulo: "Buscar ayuda", desc: "Activa el protocolo escolar y busca apoyo con las autoridades correspondientes." },
            { id: "b", titulo: "Decidir ignorarlo", desc: "Prefiere no involucrarse, pensando que quizás es solo la imaginación del niño." },
          ],
        },
        b: {
          titulo: "Capítulo 2: Permanecer callado",
          descripcion: [
            "{nombre} no le dice nada a nadie. Los días pasan y él los deja pasar. Sus amigos notan que algo está diferente: ya no quiere jugar en el recreo, contesta con monosílabos, a veces se queda mirando la nada. Le dicen que si le duele algo. {nombre} dice que no. Le dicen que si está enojado. {nombre} dice que tampoco.",
            "Sus amigos, sin saber exactamente qué hacer, le comentan a un maestro que {nombre} 'se ve raro'.",
            "El maestro se acerca a {nombre} con cuidado. Le habla sobre la importancia de expresar lo que uno siente. Le cuenta que hay situaciones en la vida que pesan tanto que la gente tarda años en hablar de ellas. Que existen delitos como la violación y el incesto que sus víctimas carga solas durante mucho tiempo, convencidas de que nadie las va a creer. ",
            { tipo: "dato", delito: ["Violación"], sublabel: "Dato de Contexto Nacional" },
            { tipo: "dato", delito: ["Incesto"], sublabel: "Dato de Contexto Nacional" },
          ],
          dato: "En 2024, de los 33.5 millones de delitos ocurridos en México, solo el 9.6% se denunció, y el 93.2% no se investigó (cifra negra). En el caso específico de delitos sexuales, el subregistro es aún mayor: la violación tiene una cifra negra del 91.8% y el hostigamiento o intimidación sexual del 97.7%. INEGI/ENVIPE 2024.",
          sublabelDato: "Dato de Contexto Nacional",
          pregunta: "¿Cómo debería reaccionar {nombre}?",
          opciones: [
            { id: "a", titulo: "{nombre} decide hablar con el maestro", desc: "Se anima a contarle al maestro lo que ha estado viviendo en casa." },
            { id: "b", titulo: "{nombre} decide seguir callado", desc: "No tiene energía para hablar. Asiente con la cabeza y sigue igual" },
          ],
        },
        c: {
          titulo: "Capítulo 2: Habla con su mejor amigo",
          descripcion: [
            "{nombre} no sabe cómo hablar con un adulto. Pero sí sabe hablar con su mejor amigo. Le dice que no quiere irse a su casa.",
            "Su amigo, sin preguntar demasiado, lo invita a la suya. La mamá les hace de comer. Hacen la tarea en la misma mesa. Juegan en el patio hasta que oscurece. Es una tarde ordinaria y perfecta, el tipo de tarde que {nombre} había olvidado que existía.",
            "Al final del día, mientras recogen los juguetes, {nombre} le cuenta a su amigo sobre las cosas que pasan en su casa. No sabe bien cómo llamarlas. Solo sabe que se sienten raras.",
            "Su amigo lo escucha. Y aunque es solo un niño, algo en él reconoce que eso no suena normal. Esa noche, le cuenta a sus papás.",
            "Sus papás se quedan en silencio. Escuchar que algo así puede estarle pasando a alguien cercano es diferente a verlo en las noticias. El papá decide investigar sobre la  Corrupción de menores y Retención o sustracción de menores",
           
            { tipo: "dato", delito: ["Corrupción de menores", "Retención o sustracción de menores e incapaces"], sublabel: "Dato de Contexto Nacional" },
          
          ],
          dato: "Según la ENDIREH 2021 del INEGI, apenas el 13.1% de las mujeres víctimas de violencia sexual lo denuncian, y la principal razón para no hacerlo es la normalización: consideraron que se trató de algo sin importancia que no les afectó.",
          sublabelDato: "Dato de Contexto Nacional",
          pregunta: "¿Cómo deberían actuar los papas del amigo de {nombre}?",
          opciones: [
            { id: "a", titulo: "Deciden tomar acción", desc: "Buscan orientación y hacen lo posible por ayudar, aunque no sepan bien cómo." },
            { id: "b", titulo: "Fingir que no saben nada", desc: "Le dicen a su hijo que se aleje. No es su problema y no quieren complicaciones." },
          ],
        },
      },

      capitulo3: {
        // flujos de cap2.a
        aa: {
          titulo: "Capítulo 3: El maestro/a decide buscar ayuda",
          descripcion: [
            "El maestro/a sabe que lo que {nombre} acaba de decir no puede quedarse en esa conversación. No es fácil. Hay que hablar con el director, con trabajo social, con la familia. Hay momentos incómodos y preguntas difíciles. {nombre} tiene que repetir cosas que le cuesta decir.",
            "Pero también hay momentos distintos: una trabajadora social que lo escucha sin juzgarlo, una psicóloga que le dice que lo que siente tiene sentido, y el lento, gradual alivio de no cargar algo tan pesado solo.",
            "Semanas después, {nombre} sigue llegando tarde a casa. Pero ya no por miedo: ahora porque de verdad le gusta quedarse a platicar con su maestro/a.",

          ],
          dato: "Según UNICEF (2024), las consecuencias del abuso sexual se agravan aún más cuando los niños y niñas retrasan el momento de revelar sus experiencias, a veces durante largos periodos de tiempo. Las supervivientes suelen arrastrar el trauma hasta la edad adulta, con mayor riesgo de enfermedades de transmisión sexual, abuso de sustancias, aislamiento social y trastornos mentales como ansiedad y depresión, además de dificultades para forjar relaciones sanas. ",
          sublabelDato: "Dato de Contexto Nacional",
          pregunta: "A veces, la persona que más necesitamos no es un héroe. Es alguien que sabe escuchar y que decide actuar. ¿Cuántos personas esperan que alguien dé ese paso?",

        },
        ab: {
          titulo: "Capítulo 3: El maestro/a decide ignorarlo",
          descripcion: [
            "El maestro/a escucha a {nombre}. Pero lo que el niño describe suena vago, confuso. ¿Acaso no podría ser solo la imaginación de un niño sensible? Decide no involucrarse: no es su responsabilidad, no quiere malinterpretar, no quiere causar un problema donde quizás no lo hay.",
            "{nombre} nota el cambio en la mirada del maestro/a. Entiende que habló de más. Guarda todo de nuevo.",
            "Las semanas siguientes, el maestro/a observa que {nombre} está cada vez más apático. Menos participativo. Llega tarde, se va rápido, no ríe. Algo en él empieza a dudar: ¿y si sí era verdad? Pero aceptar eso significaría aceptar que tuvo la oportunidad de actuar y no lo hizo.",
            "Cuando finalmente se atreve a acercarse a {nombre} de nuevo, el niño lo mira un segundo y baja la vista. Ya no confía.",
          ],
          dato: "En un artículo publicado en Tribuna Noticias, Antonio (2026) señala que el miedo, la culpa, la dependencia económica y la manipulación emocional son factores que inhiben la denuncia. Además, menciona que la revictimización institucional, los procesos largos y la falta de personal capacitado también dificultan que las víctimas denuncien.",
          sublabelDato: "Dato de Contexto Nacional",
          pregunta: "No creerle a un niño no es neutralidad: es una decisión. Y esa decisión también tiene consecuencias. ¿Cuántas veces se confunde 'no involucrarse' con 'proteger'?",

        },
        // flujos de cap2.b
        ba: {
          titulo: "Capítulo 3: Hablar cambia el rumbo",
          descripcion: [
            "{nombre} escucha al maestro. Respira. Y empieza a contar, despacio, sin saber bien si las palabras van a salir bien formadas",
            "No salen perfectas. Pero salen.",
            "El maestro lo escucha hasta el final. Luego le dice que hizo algo muy valiente. Que a partir de ese momento, no está solo.",
            "Lo que sigue no es sencillo: hay adultos involucrados, conversaciones incómodas, noches difíciles. Pero también hay un proceso que empieza a moverse. Y {nombre}, lentamente, empieza a entender que lo que le pasaba no era normal, y que él no tuvo la culpa.",

          ],
          dato: "La OMS recomienda específicamente servicios de respuesta y apoyo para detectar los casos a tiempo, y atención continua a los niños maltratados y a sus familias para evitar que el maltrato se reproduzca y para paliar sus consecuencias. ",
          sublabelDato: "Dato de Contexto Nacional",
          pregunta: "Hablar es difícil. Pero el silencio tiene un costo que no siempre se ve desde afuera. A veces la valentía no se parece a lo que imaginamos: a veces es solo encontrar las palabras y decirlas en voz baja.",

        },
        bb: {
          titulo: "Capítulo 3: Seguir callado hasta que alguien actue ",
          descripcion: [
            "{nombre} ni siquiera escucha del todo lo que el maestro le dice. Está demasiado cansado. Hablar requeriría un esfuerzo que no tiene. Asiente con la cabeza para que lo dejen en paz, y sigue igual.",
            "Pero los maestros no lo dejan en paz. En silencio y sin que {nombre} lo sepa, empiezan a documentar lo que observan: su apatía, sus llegadas tarde, su desconexión. La escuela activa un protocolo de atención a alumnos en situación de riesgo.",
            "Una trabajadora social empieza a visitarlo con regularidad. No le hace preguntas directas. Solo habla con él. Le pregunta cómo estuvo su día. Qué comió. Si le gusta el fútbol.",
            "Semanas después, en una de esas conversaciones ordinarias, {nombre} dice algo que no planeaba decir. Algo pequeño, casi de pasada. Pero suficiente.",
            "La trabajadora social anota. Y el proceso empieza.",
          ],
          dato: "La OMS recomienda específicamente servicios de respuesta y apoyo para detectar los casos a tiempo, y atención continua a los niños maltratados y a sus familias para evitar que el maltrato se reproduzca y para paliar sus consecuencias. ",
          sublabelDato: "Dato de Contexto Nacional",
          pregunta: "A veces los niños no pueden pedir ayuda porque nadie les enseñó cómo. Pero los adultos alrededor sí pueden aprender a ver. ¿Estamos mirando con suficiente atención?",

        },
        // flujos de cap2.c
        ca: {
          titulo: "Capítulo 3: Los papás del amigo deciden actuar",
          descripcion: [
            "Los papás del amigo no son expertos. No saben exactamente qué pasos seguir. Pero saben que no pueden quedarse sin hacer nada.",
            "Buscan orientación: llaman al DIF, a una línea de apoyo, preguntan en la escuela. El proceso es más lento y burocrático de lo que esperaban, pero no se detienen.",
            "{nombre}, que nunca imaginó que alguien más iba a luchar por él, ve cómo adultos que ni siquiera son su familia mueven cielo y tierra para que esté bien.",
            "Meses después, {nombre} vuelve a correr en el recreo. Vuelve a hacer preguntas en clase. Y cuando suena el timbre de salida, ya no busca razones para quedarse.",

          ],
          dato: "UNICEF también destaca que la atención temprana debe incluir escucha, protección, atención médica, apoyo psicológico y denuncia, ya que una intervención adecuada puede disminuir el impacto emocional y prevenir nuevas agresiones.",
          sublabelDato: "Dato de Contexto Nacional",
          pregunta: "No hace falta ser el adulto perfecto para hacer lo correcto. A veces basta con escuchar a un niño, creerle, y no quedarse quieto. ¿Qué pasaría si todos actuáramos así?",

        },
        cb: {
          titulo: "Capítulo 3: Ignorar es el camino más fácil",
          descripcion: [
            "Los papás del amigo están asustados. Lo que escucharon es demasiado grande, demasiado complicado. Deciden que no es su problema involucrarse: bastante tienen con cuidar a su propio hijo. Le dicen que ya no juegue con {nombre}. Que se meta en lo suyo.",
            "El amigo obedece, aunque no entiende del todo por qué.",
            "{nombre} nota que su amigo lo evita. No sabe qué hizo mal. El silencio que ya cargaba se vuelve más pesado.",
            "Las semanas siguientes, {nombre} se aisla más. Come solo. No responde en clase. Pero hay algo que los papás del amigo no calcularon: que la escuela también observa. Y que los protocolos existen precisamente para los casos en que los adultos cercanos fallan.",
            "Eventualmente, la red escolar llega hasta {nombre}. Tarde, con más cicatrices de las necesarias. Pero llega.",
          ],
          dato: "De acuerdo con datos de la ENVIPE del INEGI, alrededor del 95% de los delitos sexuales contra menores no se denuncian, lo que dificulta que las víctimas reciban apoyo y protección a tiempo.",
          sublabelDato: "Dato de Contexto Nacional",
          pregunta: "Alejarse de un niño que pide ayuda no es proteger a los propios: es abandonar a alguien que ya estaba solo. Los datos nos dicen que esto pasa más de lo que queremos creer. ¿Qué tipo de comunidad queremos ser?",

        },
      },

    },

    adolescencia: {
      capitulo1: {
        titulo: "Capítulo 1:  DOLESCENCIA Lo que nadie quiere ver",
        descripcion: [
          "{nombre} últimamente, cuando suena el timbre de salida en la escuela, algo en él se resiste. Se queda haciendo preguntas que no necesita preguntar, borrando el pizarrón sin que nadie se lo pida, acomodando su mochila despacio. Sus maestros piensan que es curioso o responsable. {nombre} sabe que solo está demorando lo inevitable: llegar a casa.",
          "No podría explicar por qué. Su casa se supone que es un lugar seguro. Y sin embargo, algo ahí lo incomoda de una manera que no sabe nombrar.",
          "Esa noche, mientras cena, la televisión muestra una nota sobre delitos cometidos contra niños y adolescentes en el país.",

          { tipo: "dato", delito: ["Abuso sexual", "Hostigamiento sexual"], sublabel: "Dato de Contexto" },

          "{nombre} no dice nada. Pero esa noche tarda mucho en dormirse."
        ],

        pregunta: "¿Qué debería hacer {nombre}?",
        opciones: [
          { id: "a", titulo: "Pedir ayuda a un profesor para investigar más", desc: "Busca a su maestro favorito para entender lo que vio en las noticias." },
          { id: "b", titulo: "Seguir guardando silencio", desc: "Decide no decir nada y seguir cargando con lo que siente." },
          { id: "c", titulo: "Hablar con su mejor amigo", desc: "Le dice a su amigo que no quiere ir a casa. Su amigo lo invita a la suya." },
        ],
      },

      capitulo2: {
        a: {
          titulo: "Capítulo 2: DOLESCENCIAPedir ayuda a un profesor para investigar más",
          descripcion: [
            "Al día siguiente, {nombre} busca a su maestro/a favorito/a. No sabe bien cómo empezar, así que pregunta por lo más fácil: si lo que vio en la televisión es verdad.",
            "El maestro/a lo invita a sentarse. Le dice que sí, que desafortunadamente es real, y que hay cosas importantes que los niños deben saber para protegerse. Le explica con calma:",
            "El abuso sexual es cualquier contacto o comportamiento sexual hacia una persona sin su consentimiento. Cuando la víctima es un menor, el agresor casi siempre es alguien cercano: un familiar, un conocido, alguien de confianza. ",

            { tipo: "dato", delito: ["Abuso sexual"], sublabel: "Dato de Contexto" },

            "El hostigamiento sexual incluye comentarios, gestos, roces o conductas de naturaleza sexual que generan incomodidad o miedo. No necesita ser violento para ser un delito. ",

            { tipo: "dato", delito: ["Hostigamiento sexual"], sublabel: "Dato de Contexto" },

            "{nombre} escucha. El maestro/a habla con calma, sin alarmarlo. Y algo en esa conversación hace que {nombre} sienta, por primera vez, que lo que le pasa en casa podría tener nombre.",
            "Se queda callado un momento. Luego dice, despacio, que en su casa lo acarician de una manera que se siente rara. Que pensó que era una nueva forma de mostrarle cariño. Pero que algo no se siente bien.",
            "El maestro/a lo escucha sin interrumpirlo."


          ],
          dato: "Cponer cosas sobre las personas que buscan ayuda",
          sublabelDato: "Dato de Contexto Nacional",

          pregunta: "¿Qué debería hacer el maestro?",
          opciones: [
            { id: "a", titulo: "Buscar ayuda", desc: "Activa el protocolo escolar y busca apoyo con las autoridades correspondientes." },
            { id: "b", titulo: "Decidir ignorarlo", desc: "Prefiere no involucrarse, pensando que quizás es solo la imaginación del niño." },
          ],
        },
        b: {
          titulo: "Capítulo 2:DOLESCENCIA Permanecer callado",
          descripcion: [
            "{nombre} no le dice nada a nadie. Los días pasan y él los deja pasar. Sus amigos notan que algo está diferente: ya no quiere jugar en el recreo, contesta con monosílabos, a veces se queda mirando la nada. Le dicen que si le duele algo. {nombre} dice que no. Le dicen que si está enojado. {nombre} dice que tampoco.",
            "Sus amigos, sin saber exactamente qué hacer, le comentan a un maestro que {nombre} 'se ve raro'.",
            "El maestro se acerca a {nombre} con cuidado. Le habla sobre la importancia de expresar lo que uno siente. Le cuenta que hay situaciones en la vida que pesan tanto que la gente tarda años en hablar de ellas. Que existen delitos como la violación y el incesto que sus víctimas carga solas durante mucho tiempo, convencidas de que nadie las va a creer. ",
            { tipo: "dato", texto: " en [ESTADO] datos sobre ese tipo de delito en el estado", sublabel: "Dato de Contexto Nacional" },
          ],
          dato: "Cponer cosas sobre las personas que guardan silencio",
          sublabelDato: "Dato de Contexto Nacional",
          pregunta: "¿Cómo debería reaccionar {nombre}?",
          opciones: [
            { id: "a", titulo: "{nombre} decide hablar con el maestro", desc: "Se anima a contarle al maestro lo que ha estado viviendo en casa." },
            { id: "b", titulo: "{nombre} decide seguir callado", desc: "No tiene energía para hablar. Asiente con la cabeza y sigue igual" },
          ],
        },
        c: {
          titulo: "Capítulo 2:DOLESCENCIA Habla con su mejor amigo",
          descripcion: [
            "{nombre} no sabe cómo hablar con un adulto. Pero sí sabe hablar con su mejor amigo. Le dice que no quiere irse a su casa.",
            "Su amigo, sin preguntar demasiado, lo invita a la suya. La mamá les hace de comer. Hacen la tarea en la misma mesa. Juegan en el patio hasta que oscurece. Es una tarde ordinaria y perfecta, el tipo de tarde que {nombre} había olvidado que existía.",
            "Al final del día, mientras recogen los juguetes, {nombre} le cuenta a su amigo sobre las cosas que pasan en su casa. No sabe bien cómo llamarlas. Solo sabe que se sienten raras.",
            "Su amigo lo escucha. Y aunque es solo un niño, algo en él reconoce que eso no suena normal. Esa noche, le cuenta a sus papás.",
            "Sus papás se quedan en silencio. Escuchar que algo así puede estarle pasando a alguien cercano es diferente a verlo en las noticias. El papá decide investigar sobre la  Corrupción de menores y Retención o sustracción ",

          ],
          dato: "Caddato sobre eso.",
          sublabelDato: "Dato de Contexto Nacional",
          pregunta: "¿Cómo deberían actuar los papas del amigo de {nombre}?",
          opciones: [
            { id: "a", titulo: "Deciden tomar acción", desc: "Buscan orientación y hacen lo posible por ayudar, aunque no sepan bien cómo." },
            { id: "b", titulo: "Fingir que no saben nada", desc: "Le dicen a su hijo que se aleje. No es su problema y no quieren complicaciones." },
          ],
        },
      },

      capitulo3: {
        // flujos de cap2.a
        aa: {
          titulo: "Capítulo 3: EDOLESCENCIAl maestro/a decide buscar ayuda",
          descripcion: [
            "El maestro/a sabe que lo que {nombre} acaba de decir no puede quedarse en esa conversación. No es fácil. Hay que hablar con el director, con trabajo social, con la familia. Hay momentos incómodos y preguntas difíciles. {nombre} tiene que repetir cosas que le cuesta decir.",
            "Pero también hay momentos distintos: una trabajadora social que lo escucha sin juzgarlo, una psicóloga que le dice que lo que siente tiene sentido, y el lento, gradual alivio de no cargar algo tan pesado solo.",
            "Semanas después, {nombre} sigue llegando tarde a casa. Pero ya no por miedo: ahora porque de verdad le gusta quedarse a platicar con su maestro/a.",

          ],
          dato: "En México,datoooo 3 a 7 años. Solo el 1% termina en condena.",
          sublabelDato: "Dato de Contexto Nacional",
          pregunta: "A veces, la persona que más necesitamos no es un héroe. Es alguien que sabe escuchar y que decide actuar. ¿Cuántos personas esperan que alguien dé ese paso?",

        },
        ab: {
          titulo: "Capítulo 3: DOLESCENCIADOLESCENCIAEl maestro/a decide ignorarlo",
          descripcion: [
            "El maestro/a escucha a {nombre}. Pero lo que el niño describe suena vago, confuso. ¿Acaso no podría ser solo la imaginación de un niño sensible? Decide no involucrarse: no es su responsabilidad, no quiere malinterpretar, no quiere causar un problema donde quizás no lo hay.",
            "{nombre} nota el cambio en la mirada del maestro/a. Entiende que habló de más. Guarda todo de nuevo.",
            "Las semanas siguientes, el maestro/a observa que {nombre} está cada vez más apático. Menos participativo. Llega tarde, se va rápido, no ríe. Algo en él empieza a dudar: ¿y si sí era verdad? Pero aceptar eso significaría aceptar que tuvo la oportunidad de actuar y no lo hizo.",
            "Cuando finalmente se atreve a acercarse a {nombre} de nuevo, el niño lo mira un segundo y baja la vista. Ya no confía.",
          ],
          dato: "Las familias acompañadas por organizaciones civiles especializadas tienen 3 vece algooooos más probabilidades de sostener una denuncia hasta su resolución.",
          sublabelDato: "Dato de Contexto Nacional",
          pregunta: "No creerle a un niño no es neutralidad: es una decisión. Y esa decisión también tiene consecuencias. ¿Cuántas veces se confunde 'no involucrarse' con 'proteger'?",

        },
        // flujos de cap2.b
        ba: {
          titulo: "Capítulo 3: DOLESCENCIAHablar cambia el rumbo",
          descripcion: [
            "{nombre} escucha al maestro. Respira. Y empieza a contar, despacio, sin saber bien si las palabras van a salir bien formadas",
            "No salen perfectas. Pero salen.",
            "El maestro lo escucha hasta el final. Luego le dice que hizo algo muy valiente. Que a partir de ese momento, no está solo.",
            "Lo que sigue no es sencillo: hay adultos involucrados, conversaciones incómodas, noches difíciles. Pero también hay un proceso que empieza a moverse. Y {nombre}, lentamente, empieza a entender que lo que le pasaba no era normal, y que él no tuvo la culpa.",

          ],
          dato: "Solo el 22% de las denuncias ante supervisiDATOOOO tigación formal ante la Secretaría de Educación.",
          sublabelDato: "Dato de Contexto Nacional",
          pregunta: "Hablar es difícil. Pero el silencio tiene un costo que no siempre se ve desde afuera. A veces la valentía no se parece a lo que imaginamos: a veces es solo encontrar las palabras y decirlas en voz baja.",

        },
        bb: {
          titulo: "Capítulo 3: DOLESCENCIA Seguir callado hasta que alguien actue ",
          descripcion: [
            "{nombre} ni siquiera escucha del todo lo que el maestro le dice. Está demasiado cansado. Hablar requeriría un esfuerzo que no tiene. Asiente con la cabeza para que lo dejen en paz, y sigue igual.",
            "Pero los maestros no lo dejan en paz. En silencio y sin que {nombre} lo sepa, empiezan a documentar lo que observan: su apatía, sus llegadas tarde, su desconexión. La escuela activa un protocolo de atención a alumnos en situación de riesgo.",
            "Una trabajadora social empieza a visitarlo con regularidad. No le hace preguntas directas. Solo habla con él. Le pregunta cómo estuvo su día. Qué comió. Si le gusta el fútbol.",
            "Semanas después, en una de esas conversaciones ordinarias, {nombre} dice algo que no planeaba decir. Algo pequeño, casi de pasada. Pero suficiente.",
            "La trabajadora social anota. Y el proceso empieza.",
          ],
          dato: "En México, solo 1 de cada 5 niñas y niDATOOO izada tras el evento.",
          sublabelDato: "Dato de Contexto Nacional",
          pregunta: "A veces los niños no pueden pedir ayuda porque nadie les enseñó cómo. Pero los adultos alrededor sí pueden aprender a ver. ¿Estamos mirando con suficiente atención?",

        },
        // flujos de cap2.c
        ca: {
          titulo: "Capítulo 3: DOLESCENCIA Los papás del amigo deciden actuar",
          descripcion: [
            "Los papás del amigo no son expertos. No saben exactamente qué pasos seguir. Pero saben que no pueden quedarse sin hacer nada.",
            "Buscan orientación: llaman al DIF, a una línea de apoyo, preguntan en la escuela. El proceso es más lento y burocrático de lo que esperaban, pero no se detienen.",
            "{nombre}, que nunca imaginó que alguien más iba a luchar por él, ve cómo adultos que ni siquiera son su familia mueven cielo y tierra para que esté bien.",
            "Meses después, {nombre} vuelve a correr en el recreo. Vuelve a hacer preguntas en clase. Y cuando suena el timbre de salida, ya no busca razones para quedarse.",

          ],
          dato: "En el 60% de los casos de abus DAOTOO",
          sublabelDato: "Dato de Contexto Nacional",
          pregunta: "No hace falta ser el adulto perfecto para hacer lo correcto. A veces basta con escuchar a un niño, creerle, y no quedarse quieto. ¿Qué pasaría si todos actuáramos así?",

        },
        cb: {
          titulo: "Capítulo 3: DOLESCENCIA Ignorar es el camino más fácil",
          descripcion: [
            "Los papás del amigo están asustados. Lo que escucharon es demasiado grande, demasiado complicado. Deciden que no es su problema involucrarse: bastante tienen con cuidar a su propio hijo. Le dicen que ya no juegue con {nombre}. Que se meta en lo suyo.",
            "El amigo obedece, aunque no entiende del todo por qué.",
            "{nombre} nota que su amigo lo evita. No sabe qué hizo mal. El silencio que ya cargaba se vuelve más pesado.",
            "Las semanas siguientes, {nombre} se aisla más. Come solo. No responde en clase. Pero hay algo que los papás del amigo no calcularon: que la escuela también observa. Y que los protocolos existen precisamente para los casos en que los adultos cercanos fallan.",
            "Eventualmente, la red escolar llega hasta {nombre}. Tarde, con más cicatrices de las necesarias. Pero llega.",
          ],
          dato: "La sobre cuaanas veces llega tarde la ayuda ",
          sublabelDato: "Dato de Contexto Nacional",
          pregunta: "Alejarse de un niño que pide ayuda no es proteger a los propios: es abandonar a alguien que ya estaba solo. Los datos nos dicen que esto pasa más de lo que queremos creer. ¿Qué tipo de comunidad queremos ser?",

        },
      },
    }


  },

};

export function getCap3Key(decisionCap1, decisionCap2) {
  return `${decisionCap1}${decisionCap2}`;
}