export const stories = {
 escuela: {
  infancia: {
    capitulo1: {
      titulo: "Capítulo 1: El monstruo del taller",
      descripcion: [
        "Al comenzar el ciclo escolar, {nombre} entraba con entusiasmo a la clase de Arte. Le contaba a sus papás con detalle las obras que hacía, los colores que mezclaba, lo que aprendía cada semana.",
        "Pero en algún momento, eso empezó a cambiar.",
        "El docente de la materia comenzó a pedirle a {nombre} que se quedara al final de cada clase a ordenar los \"materiales\". Durante esos minutos, se acercaba demasiado por la espalda y lo tocaba de formas que le incomodaban, con el pretexto de \"corregirle la postura\" al pintar.",
        "Para asegurar su silencio, el docente le regalaba materiales diciéndole que era su premio por ser el mejor alumno.",
        "{nombre} no sabe cómo decirlo con palabras. Así que dibuja en su libreta un monstruo gigante, parado a lo lejos, observando a un niño pequeño.",

        { tipo: "dato", delito: ["Abuso sexual", "Hostigamiento sexual"], sublabel: "Dato de Contexto" },

        "El silencio en los niños no siempre es pasivo: a menudo intentan comunicar la violencia que viven a través del arte, el juego o cambios repentinos en su conducta."
      ],
      pregunta: "¿Qué debería hacer {nombre} con el dibujo?",
      opciones: [
        { id: "a", titulo: "Dejar la libreta abierta sobre el escritorio de otra maestra", desc: "La deja en un lugar donde alguien más pueda verla, sin decir nada." },
        { id: "b", titulo: "Arrancar la hoja, tirarla y negarse a volver al taller", desc: "Destruye el dibujo y decide no regresar a esas clases." },
        { id: "c", titulo: "Dárselo a su hermano/a mayor a la hora de la salida", desc: "Se lo entrega en silencio, esperando que alguien en casa entienda." },
      ],
    },

    capitulo2: {
      a: {
        titulo: "Capítulo 2: El mensaje descifrado",
        descripcion: [
          "Otra maestra encuentra la libreta abierta. En lugar de ignorarla o cerrarla sin más, algo en el dibujo la detiene: el monstruo, el niño, la distancia entre ambos.",
          "Al día siguiente, le pide a {nombre} que le cuente la historia detrás del monstruo. {nombre}, sintiéndose apenas un poco más seguro, empieza a hablar.",
          "Le cuenta sobre las tardes en el taller. Sobre los materiales como premio. Sobre las manos del instructor corrigiéndole la postura.",

          { tipo: "dato", delito: ["Abuso sexual"], sublabel: "Dato de Contexto" },

          "La maestra lo escucha sin interrumpirlo. Sin cambiar la cara. Sin decirle que quizás lo malinterpretó."
        ],
        pregunta: "¿Qué debería hacer la maestra?",
        opciones: [
          { id: "a", titulo: "Llevar las pruebas a dirección y activar el protocolo", desc: "Sigue los canales institucionales correctos para proteger a {nombre}." },
          { id: "b", titulo: "Ir a reclamarle directamente al instructor sin avisar a nadie", desc: "Decide confrontarlo a solas, creyendo que puede resolver la situación." },
        ],
      },
      b: {
        titulo: "Capítulo 2: El peso del silencio",
        descripcion: [
          "{nombre} arranca el dibujo y lo tira. En casa dice que odia el arte, que el taller le aburre, que ya no quiere ir.",
          "Sus papás no preguntan más. Asumen que es una fase.",
          "Pero el instructor no desaparece. Lo intercepta en los pasillos y le exige que regrese a clases, amenazándolo: si no vuelve, le dirá a sus papás que fue él quien robó materiales del taller.",
          "{nombre} se congela. No sabe si alguien le creería.",

          { tipo: "dato", delito: ["Hostigamiento sexual"], sublabel: "Dato de Contexto" },
        ],
        pregunta: "¿Cómo debería reaccionar {nombre}?",
        opciones: [
          { id: "a", titulo: "Vencer el miedo y contarle la amenaza al prefecto", desc: "Busca a un adulto de confianza en la escuela y le dice lo que está pasando." },
          { id: "b", titulo: "Ceder al chantaje y regresar al taller", desc: "Por miedo a que lo regañen, decide obedecer y volver." },
        ],
      },
      c: {
        titulo: "Capítulo 2: La red de apoyo en casa",
        descripcion: [
          "A la hora de la salida, {nombre} le da el dibujo a su hermano/a mayor sin decir nada. Solo se lo pone en la mano.",
          "El hermano/a lo observa. Conoce bien a {nombre} y sabe que algo no está bien. Le hace preguntas sencillas, sin presionarlo.",
          "Poco a poco, {nombre} le confiesa lo que pasa en las tardes del taller: los materiales como premio, las manos del instructor, las excusas para quedarse solos.",
          "El hermano/a llega a casa y lo cuenta todo.",

          { tipo: "dato", delito: ["Abuso sexual", "Corrupción de menores"], sublabel: "Dato de Contexto" },
        ],
        pregunta: "¿Cómo debería reaccionar la familia?",
        opciones: [
          { id: "a", titulo: "Presentarse en la escuela para exigir la investigación del instructor", desc: "Van directamente a la institución a exigir que se actúe." },
          { id: "b", titulo: "Sacar a {nombre} de esa escuela sin dar explicaciones", desc: "Deciden alejarlo del peligro lo antes posible, sin denunciar." },
        ],
      },
    },

    capitulo3: {
      aa: {
        titulo: "Capítulo 3: El monstruo pierde su poder",
        descripcion: [
          "La maestra no subestima lo que escuchó. Sigue el protocolo al pie de la letra: informa a la dirección, contacta a la familia de {nombre} y evita alertar al instructor.",
          "La investigación revela que los \"premios\" existían, y que {nombre} no fue el único alumno afectado.",
          "El instructor es separado del plantel de forma permanente y enfrenta cargos formales.",
          "Con el tiempo, {nombre} vuelve a abrir su libreta. Los trazos oscuros y temblorosos van cediendo paso a colores brillantes. Ha entendido que los adultos a su alrededor saben cómo cuidarlo.",
        ],
        dato: "Según UNICEF (2024), las consecuencias del abuso sexual se agravan cuando los niños retrasan la revelación, a veces durante años. Una intervención temprana y bien dirigida puede prevenir secuelas emocionales permanentes.",
        sublabelDato: "Dato de Contexto",
        fuenteDato: "UNICEF. (2024). Más de 370 millones de niñas y mujeres en todo el mundo se ven sometidas a violaciones y abusos sexuales en la infancia [Comunicado de prensa]. https://www.unicef.org/es/comunicados-prensa/mas-370-millones-ninas-mujeres-mundo-sometidas-violaciones-abusos-sexuales-infancia",
        pregunta: "El arte y el juego son la voz de los niños cuando las palabras no alcanzan. ¿Qué tan dispuestos estamos a leer entre líneas?",
      },
      ab: {
        titulo: "Capítulo 3: Un acto imprudente",
        descripcion: [
          "Llevada por el coraje, la maestra confronta al instructor a solas. Él reacciona rápido: niega todo, deshace las evidencias que guardaba en el taller y acusa a la maestra de difamación.",
          "Sin haber seguido los canales correctos, el caso se estanca. El instructor permanece en la escuela, ahora más cauteloso y más vigilante.",
          "{nombre} se da cuenta de que la persona que intentó ayudarlo no pudo. Guarda todo de nuevo. Esta vez con menos esperanza.",
        ],
        pregunta: "Las buenas intenciones no bastan si no están acompañadas del procedimiento correcto. ¿Por qué es tan peligroso intentar resolver esto en solitario?",
      },
      ba: {
        titulo: "Capítulo 3: Desarmar la amenaza",
        descripcion: [
          "{nombre} busca al prefecto y le cuenta la amenaza. Que el instructor lo obligó a regresar. Que le dijo que, si no volvía, lo acusaría de robar.",
          "El prefecto le dice con calma que nada de eso es su culpa. Que él no hizo nada malo.",
          "Al investigar discretamente, descubren que el mismo chantaje se había usado con otros tres alumnos de grados inferiores.",
          "Lo que {nombre} sentía desaparece cuando ve al docente de arte salir de la escuela por última vez.",
        ],
        dato: "El chantaje y la entrega de objetos como \"premio\" son tácticas de manipulación habituales para asegurar el silencio de los menores durante períodos prolongados.",
        sublabelDato: "Dato de Prevención",
        fuenteDato: "Montiel, I., Carbonell, E., & Pereda, N. (2016). Estrategias de persuasión en grooming online de menores: un análisis cualitativo con agresores en prisión. Psychosocial Intervention, 26(3), 139–146. https://doi.org/10.1016/j.psi.2017.02.001",
        pregunta: "Romper el silencio a tiempo es el único antídoto contra el chantaje. ¿Cómo construimos la confianza necesaria para que un niño hable antes de colapsar?",
      },
      bb: {
        titulo: "Capítulo 3: El taller de los secretos",
        descripcion: [
          "El miedo es más grande. {nombre} cede y regresa al taller.",
          "El instructor, sabiendo que tiene el control, va cruzando los límites con más frecuencia y menos cuidado.",
          "La personalidad de {nombre} se apaga. Deja de hablar con sus amigos. Sus calificaciones caen.",
          "El ciclo de violencia se asienta en su rutina. La escuela, que debería ser un lugar seguro, se convierte en su prisión.",
        ],
        dato: "Ceder ante las amenazas del agresor aísla a la víctima, intensifica la violencia y genera secuelas emocionales severas que pueden acompañarla durante años.",
        sublabelDato: "Dato de Impacto Psicológico",
        fuenteDato: "Echeburúa, E., & Guerricaechevarría, C. (2006). Especial consideración de algunos ámbitos de victimación. Cuadernos de Medicina Forense, 12(43–44), 75–82. https://scielo.isciii.es/scielo.php?script=sci_arttext&pid=S1135-76062006000100006",
        pregunta: "Cuando el miedo encadena a un alumno, su comportamiento cambia radicalmente. ¿Cuántos gritos de auxilio silenciosos se nos escapan cada día?",
      },
      ca: {
        titulo: "Capítulo 3: Un escudo familiar",
        descripcion: [
          "La familia no titubea. Al día siguiente se presentan en la escuela, exigen la renuncia inmediata del docente e interponen una denuncia formal.",
          "La presión familiar obliga a la institución a rendir cuentas y evita que el caso sea encubierto.",
          "{nombre} observa a su familia defenderlo con firmeza. Esa imagen se le queda grabada.",
          "Descubre que en casa hay un escudo que nadie podrá atravesar fácilmente.",
        ],
        pregunta: "Saberse respaldado desde el hogar cambia radicalmente cómo un niño enfrenta la violencia. ¿Cómo fortalecemos esa primera red de protección?",
      },
      cb: {
        titulo: "Capítulo 3: Huir no frena el daño",
        descripcion: [
          "La familia, por miedo al escándalo o sin saber cómo enfrentar el proceso, decide dar de baja a {nombre} de la escuela, alegando un cambio de domicilio.",
          "{nombre} queda a salvo físicamente. Pero el impacto emocional no recibe atención. Y el instructor permanece en su puesto, sin consecuencias.",
          "Meses después, otro niño ocupa el lugar de {nombre} en el taller. Y cae exactamente en la misma trampa.",
        ],
        pregunta: "Proteger a los nuestros es un instinto natural. Pero, ¿qué responsabilidad tenemos con los niños que se quedan atrás?",
      },
    },

    capitulo4: {
      // flujos de cap3.a (docente fue imputado)
      aaa: {
        titulo: "Capítulo 4: El costo de la verdad",
        descripcion: [
          "El docente fue imputado. Habrá juicio. La escuela emitió un comunicado insuficiente. En el recreo, algunos compañeros de la víctima la señalan: 'por tu culpa nos tienen a todos asustados'. Otros la protegen. La comunidad se partió.",
          "La familia celebra la imputación, pero la victoria es agria. {nombre} siente el peso de las miradas. La escuela que debió protegerla desde el inicio ahora la trata como si ella fuera el problema.",
          "Meses después, durante el juicio, {nombre} tiene que revivir lo ocurrido en una sala repleta. Los abogados defensores cuestionan cada detalle. La presión es abrumadora.",
        ],
        pregunta: "¿Qué necesita {nombre} para continuar?",
        opciones: [
          { id: "a", titulo: "Acompañamiento especializado", desc: "La familia gestiona una psicóloga que trabaje específicamente con víctimas de abuso durante procesos judiciales." },
          { id: "b", titulo: "Cambio de escuela", desc: "Deciden que {nombre} merece un nuevo ambiente donde no sea identificada por lo que le pasó." },
          { id: "c", titulo: "Convertir el dolor en acción", desc: "{nombre} solicita participar en talleres de prevención en su escuela para que otros sepan qué hizo mal el sistema." },
        ],
      },

      aab: {
        titulo: "Capítulo 4: Cuando la institución reconoce",
        descripcion: [
          "La Secretaría de Educación sancionó a la directora por omisión. La escuela fue obligada a implementar un protocolo actualizado. Se ofreció una disculpa pública hacia {nombre}.",
          "Pero las disculpas no borran meses de negligencia. La familia ve esto como un primer paso, no como una solución completa. El daño a {nombre} sigue siendo real, independientemente de los cambios institucionales.",
          "Lo importante ahora es que otros casos puedan identificarse a tiempo. La experiencia de {nombre} se convirtió en lección para toda la región educativa.",
        ],
        pregunta: "¿Cómo la familia convierte esta experiencia en prevención?",
        opciones: [
          { id: "a", titulo: "Asesoría a otras familias", desc: "La familia comienza a aconsejar a otras familias que enfrentan situaciones similares con base en lo aprendido." },
          { id: "b", titulo: "Capacitación docente", desc: "Trabajan con la SEP para diseñar un taller sobre señales de alerta y protocolo correcto de denuncia." },
          { id: "c", titulo: "Red de monitoreo comunitario", desc: "Organizan a padres de familia para crear un sistema de vigilancia que detecte comportamientos sospechosos." },
        ],
      },

      aac: {
        titulo: "Capítulo 4: Del activismo al agotamiento",
        descripcion: [
          "{nombre} habló en conferencias de prensa. Participó en campañas de prevención. Se convirtió en la cara de un movimiento que exige justicia.",
          "Pero a los 14 años, quería simplemente ser una adolescente. La carga de representar a todas las víctimas es enorme. Los medios la llaman para cada nota sobre abuso. La actividad que comenzó como sanación se convirtió en otra forma de exposición.",
          "Su familia se da cuenta: la están usando. Y {nombre} está pagando otro precio por un sistema que debió protegerla desde el inicio.",
        ],
        pregunta: "¿Qué hace la familia para proteger a {nombre} de nuevamente ser victimizada?",
        opciones: [
          { id: "a", titulo: "Pausar la visibilidad pública", desc: "Deciden que {nombre} merece privacidad. Dejan de participar en eventos públicos y se enfocan en su recuperación personal." },
          { id: "b", titulo: "Tomar control del mensaje", desc: "Negocia directamente qué entrevistas hace, cuándo, y bajo qué condiciones. Su voz, su cronograma." },
          { id: "c", titulo: "Transicionar a liderazgo juvenil", desc: "{nombre} elige continuar, pero ahora con un rol de decisión real en las políticas, no solo como testigo." },
        ],
      },

      aba: {
        titulo: "Capítulo 4: La otra cara del apoyo",
        descripcion: [
          "La organización civil asignó a una abogada excelente. Excelente, pero ausente. Siempre ocupada, deltas de comunicación lentas. La familia se siente como un número más en el expediente.",
          "Cuando finalmente hay movimiento, es rápido pero sin explicación. {nombre} recibe una citación para una entrevista forense sin preparación previa. Se supone que 'el protocolo lo maneja'.",
          "La familia comienza a cuestionarse: ¿el apoyo real, o solo el apoyo que cabe en la agenda de quien promete ayudar?",
        ],
        pregunta: "¿Cómo la familia se empodera en su propio caso?",
        opciones: [
          { id: "a", titulo: "Exigir transparencia", desc: "Solicitan reuniones regulares y un cronograma claro de pasos legales que puedan anticiparse." },
          { id: "b", titulo: "Buscar segundo abogado", desc: "Contratan a su propio abogado en paralelo para verificar que sus derechos se respeten." },
          { id: "c", titulo: "Documentación propia", desc: "Mantienen su propio registro de cada comunicación, reunión y promesa hecha durante el proceso." },
        ],
      },

      abb: {
        titulo: "Capítulo 4: La escuela que aprende",
        descripcion: [
          "Con asesoría de la organización civil, la escuela cambió. El protocolo se implementó correctamente. Los docentes recibieron formación. Los directivos comprenden sus responsabilidades.",
          "Lo único que no cambió es lo que le sucedió a {nombre}. Pero ahora, el siguiente niño o niña que muestre señales de alerta no tendrá que esperar meses. El sistema los encontrará.",
          "Ese es el tipo de victoria que es dura de celebrar cuando eres quien sufrió, pero que cuesta caro olvidar cuando eres quien pasará después.",
        ],
        pregunta: "¿De qué manera {nombre} participa en asegurar que el cambio sea real?",
        opciones: [
          { id: "a", titulo: "Auditorías periódicas", desc: "{nombre} forma parte de un comité que verifica que la escuela cumpla con el protocolo cada semestre." },
          { id: "b", titulo: "Educación de pares", desc: "Participa en charlas dirigidas a estudiantes, normalizando la idea de pedir ayuda si algo no es correcto." },
          { id: "c", titulo: "Documento de lecciones aprendidas", desc: "Colabora en un informe que documenta qué salió mal y qué se hizo para corregirlo, modelo para otras escuelas." },
        ],
      },

      abc: {
        titulo: "Capítulo 4: Cuando el apoyo no fue suficiente",
        descripcion: [
          "El docente sigue en la cárcel esperando juicio. La organización civil movió cielos y tierra. Pero los traumas no respetan los tiempos judiciales.",
          "{nombre} desarrolló fobia social. Cambió de escuela, pero carga la experiencia. La terapia que la organización proporciona es grupal, genérica. Lo que {nombre} necesita es atención muy especializada.",
          "La organización hizo su trabajo. Pero hay una grieta entre lo que las instituciones pueden hacer y lo que una víctima realmente necesita para sanar.",
        ],
        pregunta: "¿Cómo la familia cierra esa grieta?",
        opciones: [
          { id: "a", titulo: "Terapia privada de largo plazo", desc: "Buscan recursos para pagar terapia especializada en trauma, aunque sea una carga económica significativa." },
          { id: "b", titulo: "Comunidades de sanación", desc: "Se unen a redes de otros sobrevivientes donde encuentran comprensión que los profesionales no siempre dan." },
          { id: "c", titulo: "Reconstrucción desde la base", desc: "Toda la familia entra en proceso terapéutico para entender cómo el trauma de {nombre} les afectó a todos." },
        ],
      },

      aca: {
        titulo: "Capítulo 4: La caja negra institucional",
        descripcion: [
          "Pasó un año. El caso cerró sin resolución. El docente fue reubicado 'administrativamente'. La familia solicitó acceso a los expedientes y le dijeron que están 'bajo secreto de investigación'.",
          "Nunca sabrán exactamente qué pasó en las puertas cerradas de la escuela. La justicia es opaca. El cierre no es un verdadero cierre.",
          "{nombre} creció en ese año, pero creció dentro de una pregunta sin respuesta. A veces eso es más pesado que la culpa o la ira.",
        ],
        pregunta: "¿Cómo la familia busca respuestas cuando las instituciones cierran filas?",
        opciones: [
          { id: "a", titulo: "Amparo legal", desc: "Presentan un amparo para obligar a revelar documentos públicos que les pertenecen por derecho." },
          { id: "b", titulo: "Queja ante CNDH", desc: "Documentan la falta de transparencia y presenta una queja ante la Comisión Nacional de Derechos Humanos." },
          { id: "c", titulo: "Aceptar la incertidumbre", desc: "Deciden cerrar este capítulo sin respuestas completas y enfocan su energía en sanar sin esperar justicia." },
        ],
      },

      baa: {
        titulo: "Capítulo 4: La nueva escuela como refugio",
        descripcion: [
          "{nombre} tiene una directora nueva. Una que lee los protocolos en serio. Una que pregunta: '¿cómo está?' y espera la respuesta real.",
          "Los compañeros no saben lo que pasó. Eso es importante. {nombre} puede ser simplemente un estudiante, no 'la víctima'. Puede tener un mal día sin que todo el mundo especule.",
          "La cicatriz sigue ahí, pero el ambiente es diferente. Menos tóxico. Casi sanador.",
        ],
        pregunta: "¿Cómo {nombre} reconstruye su identidad como estudiante?",
        opciones: [
          { id: "a", titulo: "Volviendo a lo que ama", desc: "{nombre} se suma a actividades: deporte, arte, clubs. Lugares donde puede sentir competencia, no vulnerabilidad." },
          { id: "b", titulo: "Amistades auténticas", desc: "Poco a poco, construye amistades genuinas basadas en quién es ahora, no en lo que le pasó." },
          { id: "c", titulo: "Mentoría de pares", desc: "Busca a un estudiante de años mayores que haya vivido algo similar y que pueda entender sin juzgar." },
        ],
      },

      bab: {
        titulo: "Capítulo 4: Esperanza frágil",
        descripcion: [
          "La escuela fue sancionada. Se implementó un protocolo. {nombre} ve cambios. No los que hubiera querido hace un año, pero cambios.",
          "A veces pasa por la oficina de la directora antigua y siente rabia. A veces se pregunta por qué le tomó tanto al sistema actuar. Pero también nota que hay estudiantes nuevos a quienes sí detectaron rápido. Para los que vienen después, hay una red.",
          "Eso no lo hace menos víctima. Pero lo hace menos sola.",
        ],
        pregunta: "¿Cómo {nombre} trasforma su experiencia sin negar el daño?",
        opciones: [
          { id: "a", titulo: "Escribir su propia historia", desc: "{nombre} comienza a journaling, no como terapia impuesta, sino como narrativa que ella controla." },
          { id: "b", titulo: "Voluntariado en prevención", desc: "Se ofrece a colaborar en talleres de prevención, pero solo cuando siente que tiene la energía emocional." },
          { id: "c", titulo: "Reclamar normalidad", desc: "Decide que su vida no girará alrededor del trauma. Busca metas personales: universidad, viajes, sueños propios." },
        ],
      },

      bac: {
        titulo: "Capítulo 4: El costo de esperar",
        descripcion: [
          "Si hubiera protocolo desde el inicio, si la escuela hubiera actuado en los primeros meses, si los adultos hubieran hablado entre ellos, si... La familia vive en los 'si'.",
          "{nombre} está en tratamiento psicológico intensivo. Perdió casi un año académico. Sus relaciones sociales fueron impactadas. El costo de la negligencia institucional es incalculable.",
          "Ahora la pregunta no es si el sistema falló, sino qué sistema se necesita para que nadie más pague ese precio.",
        ],
        pregunta: "¿Cómo la familia convierte el aprendizaje en acción colectiva?",
        opciones: [
          { id: "a", titulo: "Capacitación a docentes", desc: "Trabaja con la escuela para que todos los maestros sepan identificar señales desde el primer día." },
          { id: "b", titulo: "Manual de protocolos", desc: "Documenta todo lo que salió mal y propone un manual que sea realmente accesible para escuelas de la región." },
          { id: "c", titulo: "Política pública", desc: "Busca contacto con diputados para proponer cambios legislativos que hagan los protocolos obligatorios y verificables." },
        ],
      },

      caa: {
        titulo: "Capítulo 4: La grieta que se abre",
        descripcion: [
          "Otras dos familias salieron a hablar. Ahora son tres casos documentados contra el mismo docente. La fiscalía reabrió el caso. La presión pública es inevitable.",
          "Pero para {nombre}, esto es complicado. Cada nueva víctima que sale a hablar es valiente, pero también reactiva lo suyo. El número de víctimas no es un triunfo, es un síntoma de un sistema que falló a múltiples personas.",
          "La justicia que llega tarde para todos es mejor que no llegar para nadie, pero sigue siendo tarde.",
        ],
        pregunta: "¿Cómo las tres familias trabajan juntas sin retraumatizarse?",
        opciones: [
          { id: "a", titulo: "Coordinación con expertos", desc: "Trabajan con una organización especializada que maneja el caso colectivo sin exponer excesivamente a las víctimas." },
          { id: "b", titulo: "Roles diferenciados", desc: "Cada familia elige cuánto participa en lo público. Algunos aportan desde el anonimato, otros aceptan visibilidad." },
          { id: "c", titulo: "Autocuidado colectivo", desc: "Las familias se reúnen solo para apoyarse mutuamente, no para estrategia legal que queda en manos de abogados." },
        ],
      },

      cab: {
        titulo: "Capítulo 4: El poder de la presión pública",
        descripcion: [
          "La fiscalía actuó rápido. La Secretaría de Educación intervino. El docente fue separado del cargo. Pero la presión que forzó todo esto fue mediática, no institucional.",
          "Eso muestra una verdad incómoda: el sistema protege mejor a quienes pueden hacer ruido en público que a quienes sufren en silencio.",
          "Para {nombre} y sus compañeras, la visibilidad fue necesaria. Pero también fue un nuevo peso: ahora sus historias están en archivos públicos para siempre.",
        ],
        pregunta: "¿Cómo las familias navegan la visibilidad permanente?",
        opciones: [
          { id: "a", titulo: "Retomar el control narrativo", desc: "Publican su propio documento explicando su caso en sus propios términos, no en los que los medios deciden." },
          { id: "b", titulo: "Privacidad deliberada", desc: "Deciden no hacer más declaraciones públicas. El caso sigue en justiciales, pero sin su participación directa." },
          { id: "c", titulo: "Transformar el trauma en educación", desc: "Aceptan que la historia es pública, pero aseguran que sea usada para prevención, no para sensacionalismo." },
        ],
      },

      cac: {
        titulo: "Capítulo 4: La estudiante que convocó un movimiento",
        descripcion: [
          "Sin prensa, sin abogados famosos, sin estrategia política. Solo una estudiante que decidió hablar. La orientadora que la escuchó. Una red de compañeros que la creyeron. Y poco a poco, como en efecto dominó, otras voces se sumaron.",
          "La asamblea que convocó {nombre} fue a la escuela completa. Padres, docentes, autoridades municipales. Habló de lo que vio, lo que sufrió, y lo que necesitaba: un sistema que realmente proteja.",
          "No fue activismo. Fue simplemente nombrar lo que pasó.",
        ],
        pregunta: "¿Cuál es el legado que {nombre} deja en su escuela?",
        opciones: [
          { id: "a", titulo: "Protocolo vivo", desc: "La escuela adopta el protocolo que {nombre} propuso. La estudiante se convierte en referente para futuras víctimas." },
          { id: "b", titulo: "Cultura de confianza", desc: "El ambiente cambia. Los estudiantes entienden que denunciar no es ser delatón, es cuidarse entre sí." },
          { id: "c", titulo: "Recurso comunitario", desc: "{nombre} sigue en la escuela como símbolo vivo de que el cambio es posible cuando se habla." },
        ],
      },
    },
  },
  adolescencia: {
    capitulo1: {
      titulo: "Capítulo 1: El blanco del grupo",
      descripcion: [
        "Era el inicio del ciclo escolar y {nombre} llegó emocionado al regreso a clases. Durante el primer día, el docente pidió que todos se presentaran frente al grupo. {nombre} estaba tan nervioso que tropezó al pasar al frente, esto provoco risas de todos sus compañeros. Fue un momento incómodo que la mayoría olvidó pronto. Pero un compañero en particular fijó en {nombre} una atención no muy buena.",
        "Al pasar los días, ese compañero comenzó a molestarlo. Lo que empezó como acoso escolar se transformó rápidamente.",
        "Al notar que {nombre} se paralizaba ante el miedo y no oponía resistencia, el agresor y su grupo empezaron a ir cada vez más lejos. Las burlas se convirtieron en comentarios humillantes sobre el cuerpo de {nombre} y en rumores degradantes que corrían por los pasillos. El grupo de alumnos malos, comenzaron a acorralarlo en los baños o en zonas vacías de la escuela, cruzando los límites con tocamientos forzados que dejaban a {nombre} con miedo.",
        "Para asegurarse de que no hablara, el grupo lo rodeaba en el receso, lo obligaban a consumir sustancias ilícitas, amenazándolo con golpearlo si se negaba a \"madurar\".",
        "Una mañana, {nombre} se encierra en uno de los cubículos del baño escolar. Escucha las risas del grupo afuera, esperándolo. Ya no puede seguir viviendo así.",

        { tipo: "dato", delito: ["Acoso sexual", "Hostigamiento sexual", "Abuso sexual", "Corrupción de menores"], sublabel: "Dato de Contexto" },

        "La violencia sexual entre compañeros a menudo se disfraza bajo la etiqueta de \"bullying\". Cuando hay tocamientos no consensuados, contenido sexual forzado y coerción grupal, se trata de delitos graves que destruyen la salud mental del adolescente."
      ],
      pregunta: "¿Qué debería hacer {nombre} en este momento?",
      opciones: [
        { id: "a", titulo: "Ir directo a Orientación Educativa y contarlo todo", desc: "Espera a que se vayan, sale del baño y busca al orientador para hablar." },
        { id: "b", titulo: "Confrontar al grupo a golpes", desc: "La frustración es más fuerte que el miedo. Decide defenderse por la fuerza." },
        { id: "c", titulo: "Escapar y regresar a su casa", desc: "No puede enfrentar al grupo ni confiar en nadie. Busca una salida." },
      ],
    },

    capitulo2: {
    a: {
      titulo: "Capítulo 2: La búsqueda de ayuda",
      descripcion: [
        "{nombre} esperó en silencio hasta que los pasos del grupo se alejaron por el pasillo. {nombre} salió corriendo del baño y fue directo a la oficina de Orientación Educativa. Al entrar, con la voz entrecortada, le contó al orientador todo lo que estaba pasando: los tocamientos en los pasillos, las amenazas.",

        "El orientador lo escuchó con atención, pero su respuesta no fue la que {nombre} esperaba. Solo le dijo: \"A veces los muchachos a esta edad tienen juegos muy pesados. ¿Estás seguro de que no lo estás malinterpretando? Son acusaciones graves y, sin pruebas, es difícil sancionarlos\".",

        "{nombre} sintió demasiada desesperanza. Había reunido todo su valor para hablar. Y parecía que no le creían.",

        {
          tipo: "dato",
          delito: ["Acoso sexual", "Hostigamiento sexual"],
          sublabel: "Dato de Contexto"
        },

        "232 personas de entre 1 y 17 años fueron atendidas en hospitales del país por violencia sexual en escuelas. 78% de las víctimas eran mujeres y 22% hombres."
      ],

      fuenteDato:
        "Instituto Nacional de Estadística y Geografía (INEGI). (2022). Encuesta Nacional sobre Discriminación (ENADIS) 2022. INEGI. https://www.inegi.org.mx/programas/enadis/2022/",

      pregunta: "¿Qué debería hacer {nombre} ante esta respuesta?",

      opciones: [
        {
          id: "a",
          titulo: "Mantenerse firme y exigir que llamen a sus padres",
          desc: "No acepta el \"no\". Insiste en que se levante un reporte formal."
        },
        {
          id: "b",
          titulo: "Sentirse derrotado y regresar al salón",
          desc: "Agacha la cabeza, acepta que \"quizás exageró\" y sale de la oficina."
        }
      ]
    },
      b: {
        titulo: "Capítulo 2: Violencia contra violencia",
        descripcion: [
          "La frustración fue más fuerte que el miedo. {nombre} empujó la puerta del cubículo y, sin pensarlo, se lanzó contra el grupo.",
          "Pero la ventaja numérica era evidente. El grupo sometió a {nombre} entre golpes y burlas, hasta que un prefecto escuchó el ruido y entró a separarlos.",
          "Tanto {nombre} como el grupo fueron llevados a la dirección. El director, molesto por el escándalo, no preguntó motivos. Vio una pelea escolar y suspendió a todos por tres días. El agresor miraba a {nombre} con una sonrisa; había ganado de nuevo, y ahora {nombre} iba a ser castigado como si fuera el problema.",

          { tipo: "dato", delito: ["Abuso sexual", "Hostigamiento sexual"], sublabel: "Dato de Contexto" },

          "Responder a la violencia sexual con violencia física suele ser un acto de desesperación. Lamentablemente, esto muchas veces lleva a que el sistema sancione a la víctima por romper el reglamento, desviando la atención de los delitos reales."
        ],
        pregunta: "¿Qué debe hacer {nombre} estando en la dirección?",
        opciones: [
          { id: "a", titulo: "Romper en llanto y revelar la verdad al director", desc: "{nombre} grita todo lo que ha estado callando." },
          { id: "b", titulo: "Guardar silencio y aceptar la suspensión", desc: "Por orgullo y miedo, firma el reporte y se va a casa sin decir nada." },
        ],
      },
      c: {
        titulo: "Capítulo 2: La huida silenciosa",
        descripcion: [
          "{nombre} no podía enfrentar al grupo. Tampoco sentía la confianza para hablar con ningún maestro. Esperó a que sonara la campana y el baño quedara vacío. Con cuidado, se escapo por la parte trasera de la escuela, saltó una barda baja y caminó rápido hasta su casa.",
          "Llegó mucho antes de su hora de salida. Sus padres estaban en la sala. Se sorprendieron al verlo entrar temblando. Su mamá se acercó de inmediato y le preguntó qué estaba haciendo ahí a esa hora.",

          { tipo: "dato", delito: ["Hostigamiento sexual", "Abuso sexual"], sublabel: "Dato de Contexto" },

          "Faltar a clases, escaparse de la escuela y el aislamiento repentino son señales silenciosas frecuentes cuando un adolescente está sufriendo hostigamiento o abuso grave."
        ],
        pregunta: "¿Cómo debería reaccionar {nombre} con sus padres?",
        opciones: [
          { id: "a", titulo: "Derrumbarse y contarles la verdad", desc: "Ya no puede sostener el peso solo. Les cuenta todo lo que ha estado viviendo." },
          { id: "b", titulo: "Mentirles y encerrarse en su cuarto", desc: "Dice que se sintió mal y desaparece detrás de la puerta." },
        ],
      },
    },

    capitulo3: {
      aa: {
        titulo: "Capítulo 3: Insistir marca la diferencia",
        descripcion: [
          "{nombre} se armó de valor, se negó a salir de la oficina y exigió que llamaran a su casa. Al llegar, sus padres se enfurecieron al escuchar cómo el orientador intentaba minimizar la situación.",
          "Con el respaldo de su familia, exigieron hablar con el director y levantaron un acta formal, advirtiendo que llevarían el caso a las autoridades si la escuela no actuaba.",
          "La presión obligó a la institución a investigar. Descubrieron que no era la primera vez que ese grupo acosaba a alguien. El grupo fueron expulsados.",
          "{nombre} aprendió que su voz tenía poder.",
        ],
        pregunta: "A veces las autoridades no quieren ver el problema. ¿Por qué es fundamental insistir y no dejarnos convencer de que la violencia que sufrimos \"no es para tanto\"?",
      },
      ab: {
        titulo: "Capítulo 3: El costo de rendirse",
        descripcion: [
          "Sintiéndose invalidado, {nombre} agachó la cabeza, aceptó que \"quizás exageraba\" y regresó a clases. El orientador no hizo ningún reporte.",
          "El grupo de agresores se enteró de que {nombre} había ido a quejarse. El acoso y los tocamientos se volvieron mucho más agresivos y constantes.",
          "Semanas después, {nombre} dejó de asistir a la escuela por completo, perdiendo el año escolar mientras la institución seguía convencida de que todo habían sido \"juegos de adolescentes\".",
        ],
        pregunta: "Cuando un adulto le dice a un joven que ignore el abuso, lo está dejando solo frente a sus agresores. ¿De qué sirve tener autoridades si no protegen a quienes lo necesitan?",
      },
      ba: {
        titulo: "Capítulo 3: La verdad que cambia todo",
        descripcion: [
          "{nombre} se rompió. Empezó a llorar de frustración y, frente al director y al agresor, gritó todo: las humillaciones, los tocamientos forzados.",
          "El director se quedó helado. La gravedad del asunto cambió por completo la dirección de la conversación. La suspensión por la pelea se detuvo de inmediato y se activó el protocolo de violencia sexual.",
          "Los agresores al darse cuenta de que su secreto ya no era suyo se preocuparon.",
        ],
        pregunta: "¿Estamos dispuestos a indagar qué es lo que realmente provoca que un joven explote? ¿O solo vemos la reacción sin preguntarnos qué la originó?",
      },
      bb: {
        titulo: "Capítulo 3: Una paz prestada",
        descripcion: [
          "Por orgullo y terror, {nombre} no dijo nada. Firmó el reporte de mala conducta y se fue a casa suspendido por tres días.",
          "Sus padres lo regañaron por pelear.",
          "Durante esos tres días, la paz de no ver a sus agresores se convirtió en un terror al pensar en el regreso. El grupo se sintió intocable: al saber que {nombre} prefería ser castigado antes que delatarlos.",
        ],
        pregunta: "Comprar unos días de paz con el silencio tiene un costo altísimo. ¿Qué le pasa a la mente de un joven cuando prefiere cargar con la culpa de otros para poder escapar?",
      },
      ca: {
        titulo: "Capítulo 3: El refugio que siempre estuvo ahí",
        descripcion: [
          "Al ver la preocupación genuina en los ojos de su mamá, {nombre} no pudo sostener más la mentira. Llorando en el sofá de su casa, le contó todo lo que vivía en los pasillos de la escuela.",
          "Sus padres lo abrazaron. Le dijeron que estaba a salvo y que él no tenía la culpa de nada.",
          "Al día siguiente, no lo enviaron solo. Fueron directamente a presentar una denuncia formal.",
          "{nombre} descubrió que su hogar era un refugio real.",
        ],
        dato: "Un entorno familiar basado en la confianza y el apoyo incondicional es el factor principal para que un adolescente logre verbalizar el trauma y reciba ayuda a tiempo.",
        sublabelDato: "Dato de Contexto",
        fuenteDato: "Echeburúa, E., & Guerricaechevarría, C. (2006). Especial consideración de algunos ámbitos de victimación. Cuadernos de Medicina Forense, 12(43–44), 75–82. https://scielo.isciii.es/scielo.php?script=sci_arttext&pid=S1135-76062006000100006",
        pregunta: "No hay monstruo escolar que pueda contra una familia unida. ¿Cómo construimos en casa la confianza suficiente para que nuestros hijos corran hacia nosotros cuando sientan miedo?",
      },
      cb: {
        titulo: "Capítulo 3: El secreto que lo consumió",
        descripcion: [
          "{nombre} le dijo a su mamá que se sentía mal del estómago. Se encerró en su cuarto y apagó el celular.",
          "Las mentiras se acumularon con los días. Fingía ir a la escuela, pero se escondía en parques cercanos. Eventualmente, la escuela llamó a sus padres por las faltas. Reprobó todas las materias.",
          "El trauma sin atención y el aislamiento lo consumieron por dentro. Y en la escuela, al ver que {nombre} ya no regresaba, el grupo de agresores simplemente buscó a otro alumno tímido para empezar de nuevo.",
        ],
        dato: "La deserción escolar es una de las consecuencias más invisibles de la violencia sexual no atendida entre compañeros, truncando el futuro de la víctima mientras los agresores quedan impunes.",
        sublabelDato: "Dato de Contexto",
        fuenteDato: "UNESCO. (s.f.). Entornos de aprendizaje seguros: Prevención y tratamiento de la violencia escolar. https://www.unesco.org/es/health-education/safe-learning-environments",
        pregunta: "Huir protege el cuerpo, pero ¿qué le pasa al alma cuando el secreto se guarda para siempre?",
      },
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
          fuenteDato: "UNICEF. (2024, octubre). Más de 370 millones de niñas y mujeres en el mundo han sido sometidas a violaciones o abusos sexuales en la infancia [Comunicado de prensa]. https://www.unicef.org/es/comunicados-prensa/mas-370-millones-ninas-mujeres-mundo-sometidas-violaciones-abusos-sexuales-infancia",
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
          fuenteDato: "Tribuna Noticias. (2026, abril). ¿Por qué no se denuncia el abuso sexual infantil en México? https://tribunanoticias.mx/por-que-no-se-denuncia-el-abuso-sexual-infantil-en-mexico/", 
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
          fuenteDato: "Organización Mundial de la Salud. (2022). Maltrato infantil [Nota descriptiva]. https://www.who.int/es/news-room/fact-sheets/detail/child-maltreatment",
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
          fuenteDato: "Organización Mundial de la Salud. (2022). Maltrato infantil [Nota descriptiva]. https://www.who.int/es/news-room/fact-sheets/detail/child-maltreatment",
         
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
          dato: "UNICEF destaca que la atención temprana debe incluir escucha, protección, atención médica, apoyo psicológico y denuncia, ya que una intervención adecuada puede disminuir el impacto emocional y prevenir nuevas agresiones.",
          sublabelDato: "Dato de Contexto Nacional",
          fuenteDato: "UNICEF México. (s.f.). Violencia sexual contra la infancia. https://www.unicef.org/mexico/violencia-sexual-contra-la-infancia",
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
        titulo: "Capítulo 1: Un día común que se siente diferente",
        descripcion: [
          "{nombre} suele ser una persona muy ocupada: por la mañana va a clases, después regresa a casa a comer, y debe salir corriendo a su clase de natación. El resto del día lo ocupa para tareas y demás pendientes del hogar. Sin embargo, {nombre} no se caracteriza por ser muy organizado/a tiende a dejar cosas tiradas, mal acomodadas o sucias fuera de su lugar. No lo ve como un gran problema; tiene muchas cosas que hacer y simplemente no le alcanza el tiempo. ",
          "Sin embargo, en los últimos días, alguien en su casa ha estado ayudándole con todo lo que suele dejar mal puesto, evitándole regaños y peleas. Además, esa persona ha estado dándole masajes cuando {nombre} regresa de natación.",
          "Al principio le gustó, era relajante y poco frecuente. Solo que con el tiempo, {nombre} empezó a notar que los masajes se volvían más recurrentes e 'intensos'. Poco a poco fue sintiendo cada vez más incomodidad.",

          { tipo: "dato", delito: ["Abuso sexual", "Hostigamiento sexual"], sublabel: "Dato de Contexto" },

          "La información que leyó, hizo que se cuestionará su situación. "
        ],

        pregunta: "¿Qué debería hacer {nombre}?",
        opciones: [
          { id: "a", titulo: "Pedir consejo a su mejor amigo", desc: "Quizás una perspectiva externa le ayude a identificar si algo está mal." },
          { id: "b", titulo: "Ignorar el hecho, y tratar de llegar más tarde", desc: "Si llega tarde, ya no habrá masajes y no tendrá que estar rechazándolos constantemente. " },
          { id: "c", titulo: "Decirle a su familiar que se detenga: ", desc: "Ir directo al grano, al final de cuentas son familia, no pasa nada." },
        ],
      },

      capitulo2: {
        a: {
          titulo: "Capítulo 2: Pedir consejo a su mejor amigo",
          descripcion: [
            "{nombre} busca a su amigo Toño y le platica cómo han sido los últimos días al llegar a casa. Le dice que ya no tiene ganas de estar ahí si sabe que ese familiar se encuentra presente.",
            "Toño siente que la situación suena extraña, así que deciden investigar juntos sobre delitos sexuales. En internet encuentran información sobre hostigamiento y abuso sexual.",
            { tipo: "dato", delito: ["Abuso sexual"], sublabel: "Dato de Contexto" },

            { tipo: "dato", delito: ["Hostigamiento sexual"], sublabel: "Dato de Contexto" },

            "Toño y {nombre} se dan cuenta de que lo que está viviendo {nombre} podría encajar en algo parecido. Aun así, los dos dudan, se trata de un familiar, quizás sea solo un comportamiento peculiar, sin ninguna intención mala. {nombre} se convence de que es algo normal y que con el tiempo pasará.",
            " Toño no piensa igual.",
          ],

          pregunta: "¿Qué debería hacer Toño?",
          opciones: [
            { id: "a", titulo: "Buscar un adulto de confianza para consultarlo", desc: "Que alguien con más experiencia les ayude a identificar si lo que vive su amigo realmente puede considerarse un delito." },
            { id: "b", titulo: "Olvidar la conversación", desc: "Parece una situación extraña, pero no es su asunto cada quien resuelve sus cosas." },
          ],
        },
        b: {
          titulo: "Capítulo 2:Ignorar el hecho y tratar de llegar más tarde",
          descripcion: [
            "Wendy, la maestra de natación de {nombre}, empieza a notar que {nombre} se queda cada vez más tarde en la unidad deportiva y que su estado de ánimo ha cambiado: pasó de ser una persona alegre a llegar sin ánimos. Decide preguntarle directamente si todo está bien. Al hacerlo, le toca el hombro para que la conversación se sienta más cercana pero {nombre} reacciona alejándose, y no logran hablar.",
            "Pasan los días. Wendy vuelve a intentarlo, pero esta vez no pregunta directamente. En cambio, le habla sobre situaciones que lamentablemente algunos adolescentes viven, y menciona delitos como la corrupción, retención o sustracción de menores.",
            
            { tipo: "dato", delito: ["Corrupción de menores", "Retención o sustracción de menores e incapaces"], sublabel: "Dato de Contexto Nacional" },

            "{nombre} siente incomodidad al escuchar esa información, pero también impotencia por no saber qué hacer. Aunque Wendy le parece una buena persona, {nombre} siente que hablar significaría admitir algo que le da vergüenza y miedo.",
            
          ],
          dato: "poner algo sobre el miedo, la vergüenza y la culpa que sienten las víctimas de delitos sexuales, y cómo eso afecta su disposición a hablar.",
          sublabelDato: "Dato de Contexto Nacional",
          pregunta: "¿Cómo debería hacer {nombre}?",
          opciones: [
            { id: "a", titulo: "Confiar en su maestra", desc: "Hablar sobre lo que ha estado pasando en casa." },
            { id: "b", titulo: " Seguir guardando silencio", desc: "Si se evita, en algún punto todo se va a solucionar solo." },
          ],
        },
        c: {
          titulo: "Capítulo 2:Decirle al familiar que se detenga",
          descripcion: [
            "{nombre} habla con su familiar. Este le hace caso y se disculpa. Todo parece ir bien por un par de días... pero después el familiar empieza a dar regalos sin motivo aparente, y a reclamar que le ha estado ayudando a recoger su desorden. Poco a poco, vuelven las ofertas de masajes. Como {nombre} no quiere otro conflicto y siente que los regalos crean una deuda, termina aceptando de nuevo.",
            "{nombre} se siente fatal. Siente culpa, confusión y vergüenza: ¿cómo va a hablar mal de alguien a quien su familia respeta? Decide buscar en internet esos comportamientos que su familiar tiene hacia él/ella.",
            "Encuentra mucha información alarmante.",
            { tipo: "dato", delito: ["Violación"], sublabel: "Dato de Contexto Nacional" },
            { tipo: "dato", delito: ["Incesto"], sublabel: "Dato de Contexto Nacional" },

          ],
          pregunta: "¿Qué debería hacer {nombre} con lo que acaba de encontrar?",
          opciones: [
            { id: "a", titulo: "Buscar ayuda fuera de casa", desc: "Acercarse a algún maestro o servicio de orientación que le ayude." },
            { id: "b", titulo: "Confiar en que su familiar dijo que no va a volver a pasar", desc: "Quizás esta vez sí cumpla su palabra." },
          ],
        },
      },

      capitulo3: {
        // flujos de cap2.a
        aa: {
          titulo: "Capítulo 3: Buscar un adulto de confianza para consultarlo",
          descripcion: [
            "Toño decide no quedarse callado. Habla con un adulto de confianza (un maestro de su escuela) y le describe la situación de {nombre}. El adulto los escucha con seriedad y le explica que los límites del cuerpo no dependen de quien los cruce, y que incomodidad persistente nunca debe ignorarse. ",
            "Juntos encuentran la forma de apoyar a {nombre} para dar el siguiente paso. El maestro se acerca a {nombre} y le dice que ha estado pensando en lo que le contó su amigo, y que aunque no es fácil de hablar, él está ahí para escucharlo si alguna vez quiere contarle más. {nombre} se queda callado, pero algo en esa invitación hace que se sienta un poco más seguro.",
            

          ],
          dato: "UNICEF señala que es necesario cuestionar y cambiar las normas sociales y culturales que permiten que ocurra la violencia sexual y que disuaden a los niños y niñas de pedir ayuda. Solo una parte de los niños que son víctimas de maltrato cuenta alguna vez lo que les ha ocurrido, y muy pocos reciben el apoyo que necesitan.",
          sublabelDato: "Dato de Contexto Nacional",
          fuenteDato: "UNICEF. (2024, 29 de noviembre). Más de 370 millones de niñas y mujeres en todo el mundo se ven sometidas a violaciones y abusos sexuales en la infancia. https://www.unicef.org/argentina/comunicados-prensa/370-millones-ninas-mujeres-violencia. Organización Mundial de la Salud & UNICEF. (2022). Directrices de la OMS sobre intervenciones parentales para prevenir el maltrato infantil. National Center for Biotechnology Information. https://www.ncbi.nlm.nih.gov/books/NBK601635/",
          pregunta: "A veces la valentía no es enfrentar algo solo, sino saber a quién pedir ayuda. Un amigo que actúa puede cambiar una historia completa.",

        },
        ab: {
          titulo: "Capítulo 3: Olvidar la conversación",
          descripcion: [
            "Toño decide no intervenir. Los días pasan, {nombre} sigue llegando tarde a casa tratando de evitar la situación, y la incomodidad crece sin que nadie más lo sepa. Sin un apoyo externo, {nombre} carga solo/a con algo que no debería cargar nadie en silencio",
            "Toño se siente mal por no haber hecho nada, pero también se convence de que no era su asunto. A veces, piensa, la gente tiene problemas y no es necesario involucrarse. Además, él también tiene sus propios problemas y responsabilidades.",
            ],
          dato: "De acuerdo con una publicación de Milenio (2021), en México se registran aproximadamente 5.4 millones de casos de abuso sexual infantil al año, de los cuales más del 98% no son denunciados, es decir, al menos 9 de cada 10 casos permanecen en silencio.",
          sublabelDato: "Dato de Contexto Nacional",
          fuenteDato: "Milenio. (2021, 24 de noviembre). Abuso sexual infantil en México: incidencia y denuncias. https://www.milenio.com/policia/abuso-sexual-infantil-mexico-incidencia-denuncias",
          pregunta: "Quedarse callado frente al malestar de alguien que queremos no es respetar su privacidad, es dejarlo/a solo/a. A veces la amistad más importante es la que se atreve a preguntar una vez más.",

        },
        // flujos de cap2.b
        ba: {
          titulo: "Capítulo 3: Confiar en su maestra",
          descripcion: [
            "{nombre} decide quedarse un momento más después del entrenamiento y, poco a poco, le cuenta a Wendy lo que ha vivido. Wendy la/lo escucha sin interrumpir, sin juzgar. Le explica que lo que describe tiene un nombre, que no es su culpa, y que hay personas capacitadas para ayudar.",
            "{nombre} siente un alivio enorme al poder hablar de algo que ha estado guardando por tanto tiempo. Siente que por primera vez alguien lo entiende",
            "Wendy le dice que lo que sigue no es fácil, pero que él no está solo. Le ofrece acompañarlo a hablar con un orientador escolar, y le asegura que lo va a apoyar en cada paso del proceso.",
          ],
          dato: "De acuerdo con una publicación de Milenio (2021), en México el 75% de los casos el agresor era una persona conocida por la niña y de confianza para sus padres. El 70% de los casos ocurrió en el hogar.",
          sublabelDato: "Dato de Contexto Nacional",
          fuenteDato: "Milenio. (2021, 24 de noviembre). Abuso sexual infantil en México: incidencia y denuncias. https://www.milenio.com/policia/abuso-sexual-infantil-mexico-incidencia-denuncias",
          pregunta: "Hablar de algo que duele o da miedo es uno de los actos más valientes que existen. Y la persona correcta, en el momento correcto, puede convertirse en el ancla que necesita alguien. ",

        },
        bb: {
          titulo: "Capítulo 3: Seguir guardando silencio",
          descripcion: [
            "{nombre} sigue callado/a. Los días en la unidad deportiva se alargan, pero el problema en casa no desaparece. La situación sigue, y {nombre} carga cada vez con más peso emocional sin tener a nadie que lo sostenga.",
            "Pero Wendy seguía al tanto. {nombre} no cooperaba , pero aun así Wendy busco ayuda con la dirección de la unidad deportiva y con la escuela. ",
            "Tardo un poco pero {nombre} finalmente acepta la ayuda.",
           
          ],
          dato: "Según datos de la Red por los Derechos de la Infancia en México (REDIM) y proyecciones del INEGI para 2025, una víctima de abuso sexual infantil tarda en promedio entre 15 y 22 años en hablar por primera vez del suceso.",
          sublabelDato: "Dato de Contexto Nacional",
          fuenteDato: "Yo Influyo. (2026, 11 de marzo). Las víctimas de abuso infantil pueden denunciar siempre. https://www.yoinfluyo.com/mexico/analisis-social/las-victimas-de-abuso-infantil-pueden-denunciar-siempre/",
          pregunta: "El silencio puede sentirse como protección, pero con el tiempo se convierte en una trampa. Las situaciones que dañan raramente se resuelven solas, necesitan ser nombradas.",

        },
        // flujos de cap2.c
        ca: {
          titulo: "Capítulo 3:  Buscar ayuda fuera de casa",
          descripcion: [
            "{nombre} imprime o guarda lo que encontró y decide acercarse a alguien fuera del núcleo familiar: el orientador de la escuela. Esa persona le ayuda a entender que los regalos no crean deudas del cuerpo, que el vínculo familiar no justifica ningún tipo de abuso, y que pedir ayuda no es traicionar a nadie.",
            " Juntos buscan ayuda profesional. El proceso no es fácil, hay momentos de incertidumbre, de miedo, de frustración.  {nombre} empieza a entender que lo que le pasó no es su culpa, y que merece estar bien.",
          ],
          dato: "Según UNICEF, los niños, niñas y adolescentes víctimas de abuso sexual con frecuencia callan por miedo, culpa, impotencia, desvalimiento o vergüenza. En el 80% de los casos los agresores son miembros de la familia o entorno cercano.",
          sublabelDato: "Dato de Contexto Nacional",
          fuenteDato: "UNICEF Argentina. (2016). Abuso sexual infantil: Hablar es empezar a prevenir. Serie Las Violencias, N°5. https://www.unicef.org/argentina/media/1156/file/SerieLasViolencias5.pdf",
          pregunta: "Nadie merece sentir que su cuerpo es un pago. Buscar ayuda es proteger a la persona más importante en ella: tú.",

        },
        cb: {
          titulo: "Capítulo 3:  Confiar en que su familiar dijo que no va a volver a pasar",
          descripcion: [
            "{nombre} decide creerle una vez más. Guarda la información que encontró y espera. Los regalos siguen llegando, la presión también. Sin un apoyo externo, {nombre} queda atrapado/a en un ciclo donde los límites se borran cada vez más.",
            "Los dias pasan, la cantidad de mentiras aumentan, no solo las que le dice su familiar, sino también las que se dice a sí mismo/a para justificar lo que está viviendo. Siente que no tiene otra opción que seguir aceptando, aunque cada vez se sienta peor.",
            "Quizás algun día alguien lo ayude o quizás no, {nombre} se queda esperando.",
          ],
          dato: "De acuerdo con REDIM (2025), alrededor de 4 de cada 5 casos de violencia sexual atendidos en México corresponden a personas de entre 12 y 17 años, y el 92.8% de las víctimas son mujeres. ",
          sublabelDato: "Dato de Contexto Nacional",
          fuenteDato: "REDIM. (2025, 14 de agosto). Violencia sexual contra la niñez y la adolescencia en México (2010-2024). Blog de Datos e Incidencia Política de REDIM. https://blog.derechosinfancia.org.mx/2025/08/14/violencia-sexual-contra-la-ninez-y-la-adolescencia-en-mexico-2010-2024/",
          pregunta: "Había personas alrededor que notaron que algo no estaba bien, y no dijeron nada. El abuso no solo ocurre por quienes lo cometen, también por quienes voltean la vista. Los datos muestran que la mayoría de los casos ocurren en el entorno cercano. ¿Cuántos de esos casos pudieron haberse detenido con una sola conversación?",

        },
      },
    }
  },

  publico: {
    infancia: {
      capitulo1:{
        titulo: "La historia",
        descripcion: [
          "Son las 9:00 a.m., y la maestra Estela todavía no llega, así que el ruido creció como crece siempre que no hay adultos entre los pequeños alumnos de un salón de una escuela primaria.",
          "El chisme empezó con Daniela, que le susurró algo a Fernanda, que se lo dijo a tres más, y así hasta que la mitad del salón sabía que Jimena, no había llegado hoy. Y que supuestamente algo le había pasado el viernes de camino a su casa.",
          "“Dicen que un señor la siguió”, dijo alguien.",
          "“Dicen que gritó”, dijo otro.",
          "“Dicen que…”",
          "Pero la puerta se abrió, la maestra Estela entró, dejó su bolsa sobre el escritorio y se quedó parada mirando al grupo. No dijo nada todavía. Solo escuchó. Se acercó al pizarrón y en lugar de escribir la fecha, escribió una sola palabra: {nombre}.",
          "Maestra: “Les voy a contar una historia. Es sobre una personita que se llama {nombre}. Vive cerca de un mercado, posiblemente igual que muchos de ustedes. Y un martes por la tarde, {nombre} salió a comprar tortillas.” ",
          "El mercado a las cinco de la tarde es un lugar lleno de gente, muy concurrido. {nombre} conocía cada puesto de memoria, el de las verduras, el de los jugos, el de la señora que vende chicharrón prensado.",
          "Iba caminando con su bolsa cuando un señor la miró. No fue un vistazo normal. Fue el tipo de mirada que se queda, que sigue y que espera.",
          "Nadie habla y la maestra continua:",
          "Maestra: “El señor se le acercó. Le dijo cosas que no se le dicen a una personita de diez años. Le tocó el brazo. Luego el hombro. {nombre} solo se quedó quieta porque cuando el miedo es muy grande, el cuerpo a veces simplemente no sabe qué hacer.”",
          "Lo que vivió {nombre} tiene nombre legal: acoso sexual", 
          {tipo:"dato", delito:["Acoso sexual"], sublabel: "Dato de contexto nacional"},
          "Maestra: “Cuando alguien más pasó cerca, el señor se fue. Y {nombre} se quedó junto al puesto de verduras, temblando, y sintiendo algo que no tenía nombre pero que iba a tener en su mente durante mucho tiempo.”",
          "La maestra se detiene un momento y pregunta: "
        ],
        pregunta: "“Si {nombre} fuera su amiga y ese mismo día les contara lo que pasó… ¿qué le dirían?”",
        opciones: [
          {id: "a", titulo: "Interpretó mal", desc: "Le diría que quizás interpretó mal, que seguro el señor no quería hacerle nada."},
          {id: "b", titulo: "Le creería", desc:"Le creería y  le diría que se lo contara a un adulto de confianza."}
        ],
      },

      capitulo2:{
        a: {
          titulo: "Le diría que quizás interpretó mal, que seguro el señor no quería hacerle nada.",
          descripcion: [
            "Fernanda: “Yo creo que, a lo mejor el señor solo estaba siendo amable y {nombre} se asustó de más.”",
            "Maestra: “Eso que acabas de decir, aunque lo dijiste con buena intención, se llama minimizar. Y es una de las cosas más dañinas que le podemos decir a alguien que vivió algo así. Cuando alguien nos cuenta que un adulto la tocó sin permiso y le dijo cosas que la hicieron sentir mal, la respuesta nunca puede ser 'seguro interpretaste mal'. Porque eso le enseña a dudar de lo que sintió. Y si duda, no habla. Y si no habla, el señor sigue libre.”",
            "Maestra: “Eso fue exactamente lo que pensó {nombre}. Que quizás interpretó mal. Que no era para tanto. Y por eso no dijo nada. Y el señor volvió. {nombre} llegó a su casa. Su mamá estaba en la cocina. Le preguntó cómo le había ido. {nombre} dijo 'bien'. Se sentó a hacer la tarea. Se comió la cena. Se lavó los dientes. Y no dijo nada. No porque no quisiera. Sino porque tenía miedo de que no le creyeran. Porque una parte de ella pensaba que quizás había hecho algo mal, aunque no supiera qué”",
            "Daniela: “Pero ella no hizo nada malo, maestra.”",
            "Maestra: “No, no hizo nada malo. Pero cuando algo así pasa, el miedo revuelve todo. El problema es que ese señor sabía eso. Sabía que {nombre} no iba a decir nada. Y el jueves siguiente volvió al mercado. Esta vez fue peor. Esta vez no solo fueron palabras ni un toque en el brazo. Y antes de irse le dijo: 'Si dices algo, nadie te va a creer. Y si me buscas, sé dónde vives.'”",
            "Lo que vivió {nombre} tiene nombre legal: abuso sexual", {tipo:"dato", delito:["Abuso sexual"], sublabel: "Dato de contexto nacional"},
            "{nombre} dejó de ir al mercado. Luego dejó de salir sola. Sus calificaciones bajaron. Su mamá pensaba que estaba enferma. Nadie sabía por qué.",
            "Tres semanas después, el señor la esperó afuera de esta escuela. Tenía un coche. Le dijo que subiera. Que la llevaría con sus papás. Que era amigo de su papá.",
            "{nombre} está afuera de la escuela. Están sus compañeros por todos lados, pero ninguno la está mirando. El señor está parado junto al coche con la puerta abierta. Le dice que no le va a pasar nada, que su papá manda a saludar, que nomás es un rato.",
          ],
          dato: "“Si me buscas, sé dónde vives.” Esa amenaza también es un delito. En México, 268 casos de privación ilegal de la libertad contra menores fueron registrados en lo que va del 2026. ",
          sublabelDato: "Dato de Contexto Nacional",
          pregunta: "¿Qué debería hacer {nombre} en este momento?",
          opciones: [
            {id: "a", titulo: "Subirse.", desc: "Si dice que es amigo de su papá, puede que sí lo sea."},
            {id: "b", titulo: "No subirse.", desc:"Alejarse rápido y buscar a alguien conocido de inmediato."}
          ],
        },
        b: {
          titulo:"Le creería y  le diría que se lo contara a un adulto de confianza.",
          descripcion: [
            "Fernanda: “Yo le creería y le diría que se lo contara a su mamá o a usted, maestra.”",
            "Maestra: “Eso es exactamente lo correcto. Creerle. Sin preguntar por qué no se fue antes, sin decir que quizás exageró. Solo creerle. Porque cuando alguien se atreve a contar algo así, ya le costó muchísimo. Lo que necesita en ese momento no es que le expliquen lo que pasó, ella ya lo sabe,. Necesita saber que no está sola.”",
            "“No, no hizo nada malo. Pero cuando algo así pasa, el miedo revuelve todo. El problema es que ese señor sabía eso. Sabía que Sol no iba a decir nada. Y el jueves siguiente volvió al mercado. Esta vez fue peor. Esta vez no solo fueron palabras ni un toque en el brazo. Y antes de irse le dijo: 'Si dices algo, nadie te va a creer. Y si me buscas, sé dónde vives.'”",
            "Lo que vivió {nombre} tiene nombre legal: abuso sexual", {tipo:"dato", delito:["Abuso sexual"], sublabel: "Dato de contexto nacional"},
            "{nombre} dejó de ir al mercado. Luego dejó de salir sola. Sus calificaciones bajaron. Su mamá pensaba que estaba enferma. Nadie sabía por qué.",
            "Tres semanas después, el señor la esperó afuera de esta escuela. Tenía un coche. Le dijo que subiera. Que la llevaría con sus papás. Que era amigo de su papá.",
            "{nombre} está afuera de la escuela. Están sus compañeros por todos lados, pero ninguno la está mirando. El señor está parado junto al coche con la puerta abierta. Le dice que no le va a pasar nada, que su papá manda a saludar, que nomás es un rato.",
          ],
          dato: "“Si me buscas, sé dónde vives.” Esa amenaza también es un delito. En México, 268 casos de privación ilegal de la libertad contra menores fueron registrados en lo que va del 2026. ",
          sublabelDato: "Dato de Contexto Nacional",
          pregunta: "¿Qué debería hacer {nombre} en este momento?",
          opciones: [
            {id: "a", titulo: "Subirse.", desc: "Si dice que es amigo de su papá, puede que sí lo sea."},
            {id: "b", titulo: "No subirse.", desc:"Alejarse rápido y buscar a alguien conocido de inmediato."}
          ],
        },
      },

      capitulo3:{
        aa:{
          titulo: "Subirse. Si dice que es amigo de su papá, puede que sí lo sea.",
          descripcion:[
            "Diego: “Pues, si dice que la lleva con sus papás, capaz que sí. No sé.”",
            "Maestra: “Entiendo la duda. Parece lógico, pero hay algo que deben saber: los adultos que quieren hacerle daño a un niño o niña casi nunca parecen peligrosos. Dicen exactamente lo que uno necesita escuchar para bajar la guardia.”, 'Soy amigo de tu papá.' 'No te va a pasar nada.' 'Es un momento.' Esas frases tienen un nombre, se llaman tácticas de manipulación. Y los agresores las usan precisamente porque funcionan.",
            "Maestra: “Niños, si un adulto que no conoces bien, o que te ha hecho sentir mal antes, te pide que te subas a su coche, la respuesta es no. Siempre. Sin importar lo que diga. Y hay que alejarse y buscar a alguien conocido de inmediato. Por suerte, {nombre} no accedió”",
            "“{nombre} no subió al coche. Dio un paso atrás y en ese momento vio, al final de la calle, a la señora de los jugos del mercado, la que la conocía de toda la vida, la del chicharrón prensado, la que siempre le regalaba un trocito y corrió hacia ella.”",
            "Daniela: “¿Y la señora qué hizo?”",
            "Maestra:“Lo primero que hizo fue creerle. Sin preguntar qué hacía sola, sin decir que quizás exageró, sin decir que ya pasó y a olvidarlo. Solo dijo: ‘Yo me quedo contigo.’ Y llamaron a su mamá”",
            "“Fueron a denunciar. El proceso no fue sencillo, tuvieron que esperar, contar lo mismo varias veces, llenar formularios. Pero también dejaron un registro. Tres semanas después, las cámaras del mercado identificaron al hombre. Tenía reportes similares en otros municipios. Sin la denuncia, nadie los habría conectado.”",
            "La maestra se quedó callada. El salón también. Afuera se escuchaba el ruido de los demás niños. En eso se rompe el silencia con una pregunta: ",
            "Obed: “Maestra… ¿Jimena es {nombre}?”",
            "Maestra:“No sé si Jimena es {nombre}. Lo que sí sé es que {nombre} es real. Que tiene muchos nombres. Que vive en muchas colonias de todo México. Y que la mayoría de las veces, nadie en su salón sabe lo que está pasando.”",
            "“Cada niño o niña con nombre, con edad, con una tarde ordinaria que dejó de serlo. Y detrás de cada uno hay un número, y que hay muchos más que nunca llegaron a ningún registro, porque alguien tuvo miedo, o vergüenza, o simplemente no sabía que podía pedir ayuda. Ustedes ya saben la historia de {nombre}. Eso los hace diferentes. Ahora saben reconocer algo cuando lo ven. Y saben que lo primero que hay que hacer siempre es creerle a quien se atreve a contarlo.”",
          ],
          dato: "En México se registraron 2 casos de rapto de menores en espacio público en lo que va del 2026, solo los que llegaron a denuncia. Y 46 casos de trata de personas de menores. Casi todos comenzaron igual: un adulto desconocido, una promesa tranquilizadora, un momento en que el niño o la niña estaba solo/a.",
          sublabelDato: "Dato de Contexto Nacional",
        },
        ab: {
          titulo: "No subirse. Alejarse rápido y buscar a alguien conocido de inmediato.",
          descripcion:[
            "Diego: “No subirse y correr a donde haya gente.”",
            "Maestra: “Exacto. Y hay algo importante en lo que dijiste: no solo alejarse, sino buscar a alguien conocido. No a cualquier adulto. A alguien que reconozcan, una maestra, una vecina, el señor del puesto de jugos que siempre está ahí. Ese instinto, alejarse y buscar a alguien de confianza, puede ser la diferencia entre lo que pasa y lo que no pasa.”",
            "“Niños, si un adulto que no conoces bien, o que te ha hecho sentir mal antes, te pide que te subas a su coche, la respuesta es no. Siempre. Sin importar lo que diga. Y hay que alejarse y buscar a alguien conocido de inmediato. Por suerte, {nombre} no accedió”",
            "“{nombre} no subió al coche. Dio un paso atrás y en ese momento vio, al final de la calle, a la señora de los jugos del mercado, la que la conocía de toda la vida, la del chicharrón prensado, la que siempre le regalaba un trocito y corrió hacia ella.”",
            "Daniela: “¿Y la señora qué hizo?”",
            "Maestra:“Lo primero que hizo fue creerle. Sin preguntar qué hacía, sin decir que quizás exageró, sin decir que ya pasó y a olvidarlo. Solo dijo: ‘Yo me quedo contigo.’ Y llamaron a su mamá”",
            "“Fueron a denunciar. El proceso no fue sencillo, tuvieron que esperar, contar lo mismo varias veces, llenar formularios. Pero también dejaron un registro. Tres semanas después, las cámaras del mercado identificaron al hombre. Tenía reportes similares en otros municipios. Sin la denuncia, nadie los habría conectado.”",
            "La maestra se quedó callada. El salón también. Afuera se escuchaba el ruido de los demás niños. En eso se rompe el silencia con una pregunta: ",
            "Obed: “Maestra… ¿Jimena es {nombre}?”",
            "Maestra:“No sé si Jimena es {nombre}. Lo que sí sé es que {nombre} es real. Que tiene muchos nombres. Que vive en muchas colonias de todo México. Y que la mayoría de las veces, nadie en su salón sabe lo que está pasando.”",
            "“Cada niño o niña con nombre, con edad, con una tarde ordinaria que dejó de serlo. Y detrás de cada uno hay un número, y que hay muchos más que nunca llegaron a ningún registro, porque alguien tuvo miedo, o vergüenza, o simplemente no sabía que podía pedir ayuda. Ustedes ya saben la historia de {nombre}. Eso los hace diferentes. Ahora saben reconocer algo cuando lo ven. Y saben que lo primero que hay que hacer siempre es creerle a quien se atreve a contarlo.”",
          ],
          dato: "En México se registraron 2 casos de rapto de menores en espacio público en lo que va del 2026, solo los que llegaron a denuncia. Y 46 casos de trata de personas de menores. Casi todos comenzaron igual: un adulto desconocido, una promesa tranquilizadora, un momento en que el niño o la niña estaba solo/a.",
          sublabelDato: "Dato de Contexto Nacional",
        },
        ba:{
          titulo: "Subirse. Si dice que es amigo de su papá, puede que sí lo sea.",
          descripcion:[
            "Diego: “Pues, si dice que la lleva con sus papás, capaz que sí. No sé.”",
            "Maestra: “Entiendo la duda. Parece lógico, pero hay algo que deben saber: los adultos que quieren hacerle daño a un niño o niña casi nunca parecen peligrosos. Dicen exactamente lo que uno necesita escuchar para bajar la guardia.”, 'Soy amigo de tu papá.' 'No te va a pasar nada.' 'Es un momento.' Esas frases tienen un nombre, se llaman tácticas de manipulación. Y los agresores las usan precisamente porque funcionan.",
            "Maestra: “Niños, si un adulto que no conoces bien, o que te ha hecho sentir mal antes, te pide que te subas a su coche, la respuesta es no. Siempre. Sin importar lo que diga. Y hay que alejarse y buscar a alguien conocido de inmediato. Por suerte, {nombre} no accedió”",
            "“{nombre} no subió al coche. Dio un paso atrás y en ese momento vio, al final de la calle, a la señora de los jugos del mercado, la que la conocía de toda la vida, la del chicharrón prensado, la que siempre le regalaba un trocito y corrió hacia ella.”",
            "Daniela: “¿Y la señora qué hizo?”",
            "Maestra:“Lo primero que hizo fue creerle. Sin preguntar qué hacía sola, sin decir que quizás exageró, sin decir que ya pasó y a olvidarlo. Solo dijo: ‘Yo me quedo contigo.’ Y llamaron a su mamá”",
            "“Fueron a denunciar. El proceso no fue sencillo, tuvieron que esperar, contar lo mismo varias veces, llenar formularios. Pero también dejaron un registro. Tres semanas después, las cámaras del mercado identificaron al hombre. Tenía reportes similares en otros municipios. Sin la denuncia, nadie los habría conectado.”",
            "La maestra se quedó callada. El salón también. Afuera se escuchaba el ruido de los demás niños. En eso se rompe el silencia con una pregunta: ",
            "Obed: “Maestra… ¿Jimena es {nombre}?”",
            "Maestra:“No sé si Jimena es {nombre}. Lo que sí sé es que {nombre} es real. Que tiene muchos nombres. Que vive en muchas colonias de todo México. Y que la mayoría de las veces, nadie en su salón sabe lo que está pasando.”",
            "“Cada niño o niña con nombre, con edad, con una tarde ordinaria que dejó de serlo. Y detrás de cada uno hay un número, y que hay muchos más que nunca llegaron a ningún registro, porque alguien tuvo miedo, o vergüenza, o simplemente no sabía que podía pedir ayuda. Ustedes ya saben la historia de {nombre}. Eso los hace diferentes. Ahora saben reconocer algo cuando lo ven. Y saben que lo primero que hay que hacer siempre es creerle a quien se atreve a contarlo.”",
          ],
          dato: "En México se registraron 2 casos de rapto de menores en espacio público en lo que va del 2026, solo los que llegaron a denuncia. Y 46 casos de trata de personas de menores. Casi todos comenzaron igual: un adulto desconocido, una promesa tranquilizadora, un momento en que el niño o la niña estaba solo/a.",
          sublabelDato: "Dato de Contexto Nacional",
        },
        bb: {
          titulo: "No subirse. Alejarse rápido y buscar a alguien conocido de inmediato.",
          descripcion:[
            "Diego: “No subirse y correr a donde haya gente.”",
            "Maestra: “Exacto. Y hay algo importante en lo que dijiste: no solo alejarse, sino buscar a alguien conocido. No a cualquier adulto. A alguien que reconozcan, una maestra, una vecina, el señor del puesto de jugos que siempre está ahí. Ese instinto, alejarse y buscar a alguien de confianza, puede ser la diferencia entre lo que pasa y lo que no pasa.”",
            "“Niños, si un adulto que no conoces bien, o que te ha hecho sentir mal antes, te pide que te subas a su coche, la respuesta es no. Siempre. Sin importar lo que diga. Y hay que alejarse y buscar a alguien conocido de inmediato. Por suerte, {nombre} no accedió”",
            "“{nombre} no subió al coche. Dio un paso atrás y en ese momento vio, al final de la calle, a la señora de los jugos del mercado, la que la conocía de toda la vida, la del chicharrón prensado, la que siempre le regalaba un trocito y corrió hacia ella.”",
            "Daniela: “¿Y la señora qué hizo?”",
            "Maestra:“Lo primero que hizo fue creerle. Sin preguntar qué hacía, sin decir que quizás exageró, sin decir que ya pasó y a olvidarlo. Solo dijo: ‘Yo me quedo contigo.’ Y llamaron a su mamá”",
            "“Fueron a denunciar. El proceso no fue sencillo, tuvieron que esperar, contar lo mismo varias veces, llenar formularios. Pero también dejaron un registro. Tres semanas después, las cámaras del mercado identificaron al hombre. Tenía reportes similares en otros municipios. Sin la denuncia, nadie los habría conectado.”",
            "La maestra se quedó callada. El salón también. Afuera se escuchaba el ruido de los demás niños. En eso se rompe el silencia con una pregunta: ",
            "Obed: “Maestra… ¿Jimena es {nombre}?”",
            "Maestra:“No sé si Jimena es {nombre}. Lo que sí sé es que {nombre} es real. Que tiene muchos nombres. Que vive en muchas colonias de todo México. Y que la mayoría de las veces, nadie en su salón sabe lo que está pasando.”",
            "“Cada niño o niña con nombre, con edad, con una tarde ordinaria que dejó de serlo. Y detrás de cada uno hay un número, y que hay muchos más que nunca llegaron a ningún registro, porque alguien tuvo miedo, o vergüenza, o simplemente no sabía que podía pedir ayuda. Ustedes ya saben la historia de {nombre}. Eso los hace diferentes. Ahora saben reconocer algo cuando lo ven. Y saben que lo primero que hay que hacer siempre es creerle a quien se atreve a contarlo.”",
          ],
          dato: "En México se registraron 2 casos de rapto de menores en espacio público en lo que va del 2026, solo los que llegaron a denuncia. Y 46 casos de trata de personas de menores. Casi todos comenzaron igual: un adulto desconocido, una promesa tranquilizadora, un momento en que el niño o la niña estaba solo/a.",
          sublabelDato: "Dato de Contexto Nacional",
        },
      }
    },
    adolescencia: {
      capitulo1: {
        titulo: "¿Ya oyeron lo de…?",
        descripcion:[
          "Sofía, Valeria, Miranda y Mar. Tienen dieciséis años y llevan juntas desde la secundaria. Hay una serie puesta en la tele que nadie está viendo porque todas están en su celular.",
          "Miranda les pregunta a sus amigas: “¿Ya oyeron lo de {nombre}?”",
          "Valeria bajó su celular y Mar también.",
          "Miranda dijo que saliendo de la fiesta del sábado pasado, una persona había seguido a {nombre} como a tres cuadras. Que le decía cosas, que le bloqueó el paso dos veces y que la tocó. Alguien la vio y lo contó todo al grupo del salón de la prepa.",
          "Sofía siguió mirando su teléfono. Pero ya no estaba leyendo nada.",
          "Valeria abrió el grupo de la prepa. Ya había cuarenta y dos mensajes. Alguien preguntaba dónde había sido exactamente. Alguien más decía que {nombre} iba sola a esa hora y que qué podría esperar con eso. ",
          "Sofía dejó el teléfono sobre su rodilla. Miró al techo un momento. Y dijo: “No fue solo eso”",
          "Las tres levantaron la vista al mismo tiempo.",
          "Sofía llevaba cuatro días sabiendo lo de {nombre}, pues ella le había llamado esa misma noche llorando. Le dijo que el tipo no solo la siguió. Que en un momento en que no había nadie en la calle la jaló hacia un callejón. Que le tapó la boca. No terminó de contarlo todo esa noche, no era necesario.",
          "Le pidió a Sofía que no dijera nada pues tenía miedo de que no le creyeran. Que si lo contaba, empezarían a decir que ella había buscado a esa persona, que ya era muy tarde paa estar en la calle. Sofía había visto ya lo que estaban diciendo en el grupo. {nombre} tenía razón en no tener que contar nada.",
          "Valeria no dijo nada, Mar tampoco y Miranda miraba sus manos.  Sofía le había dicho a {nombre} que le creía, que no fue su culpa. Pero también le había dicho que eso no podía quedarse así. {nombre} se había enojado y  desde el domingo no le hablaba.",
          "Sofía lleva cuatro días cargando el secreto de su amiga. El grupo acaba de enterarse."
        ],
        pregunta: "¿Qué debería hacer?",
        opciones: [
          {id: "a", titulo: "Respetar lo que pidió", desc: "Si no quiere que se sepa, hay que callarse."},
          {id: "b", titulo: "Buscar la forma de acompañar.", desc:"Buscar la forma de acompañar a {nombre} sin traicionarla, aunque sea difícil."}
        ],
      },
      capitulo2:{
        a:{
          titulo: "Respetar lo que pidió",
          descripcion:[
            "Mar fue la primera en decir: “si {nombre} no quería decir nada, esa era su decisión. Nadie podía obligarla.” Y tenían razón, nadie puede.",
            "Pero hay una diferencia entre respetar los tiempos de alguien y desaparecer. Pues solo la deja más sola con algo que ya pesa demasiado. Y la persona que la agredió sigue en la calle sin que nadie sepa quién es.",
            "Sofía lo entendió mientras Mar hablaba. Respetar a {nombre} no significaba desaparecer. Significaba quedarse, aunque {nombre} estuviera enojada.",
            "Miranda había seguido leyendo el grupo de la prepa. Encontró un mensaje de alguien que decía conocer a una chica de otra escuela a quien le había pasado algo parecido el año anterior en la misma zona.",
            "Si era cierto, esa persona no había aparecido el sábado por primera vez. Llevaba tiempo. Y nadie lo había detenido porque nadie había hablado.",
            "“¿Y si le está pasando a alguien más ahorita?”, preguntó Valeria.",
            "Saben que esa persona ya lo hizo antes. Que puede volver a hacerlo. {nombre} sigue sin querer denunciar." 
          ],
          pregunta: "¿Qué hace el grupo?",
          opciones: [
            {id: "a", titulo: "Esperar a que decida.", desc: "Esperar a que {nombre} decida. No es decisión de ellas."},
            {id: "a", titulo: "Buscar orientación.", desc: "Buscar orientación con un adulto de confianza para saber cómo ayudarla sin exponerla."}
          ],
        },
        b:{
          titulo: "Buscar la forma de acompañar.",
          descripcion:[
            "Valeria preguntó cómo, si {nombre} estaba enojada y no quería hablar. Era la pregunta correcta. Acompañar no es lo mismo que presionar. Lo que podía hacer el grupo no era decidir por ella. Era no dejarla cargar esto sola mientras ella decidía.",
            "Sofía asintió despacio. No le iba a contar a nadie sin permiso de {nombre}. Pero tampoco iba a dejarla sola.",
            "Miranda había seguido leyendo el grupo de la prepa. Encontró un mensaje de alguien que decía conocer a una chica de otra escuela a quien le había pasado algo parecido el año anterior en la misma zona.",
            "Si era cierto, esa persona no había aparecido el sábado por primera vez. Llevaba tiempo. Y nadie lo había detenido porque nadie había hablado.",
            "“¿Y si le está pasando a alguien más ahorita?”, preguntó Valeria.",
            "Saben que esa persona ya lo hizo antes. Que puede volver a hacerlo. {nombre} sigue sin querer denunciar." 
          ],
          pregunta: "¿Qué hace el grupo?",
          opciones: [
            {id: "a", titulo: "Esperar a que decida.", desc: "Esperar a que {nombre} decida. No es decisión de ellas."},
            {id: "b", titulo: "Buscar orientación.", desc: "Buscar orientación con un adulto de confianza para saber cómo ayudarla sin exponerla."}
          ],
        }
      },
      capitulo3:{
        aa:{
          titulo: "Esperar a que decida.",
          descripcion:[
            "Era una posición comprensible, nadie quería “traicionar” a {nombre}",
            "Sofía dijo en voz alta: “no podía hacer que {nombre} denunciara”. Pero sí podía hablar con alguien que supiera cómo ayudarla. Solo para saber qué hacer.",
            "Sofía llamó al día siguiente con un profesor de confianza. No dijo el nombre de {nombre}. Solo preguntó qué hace alguien cuando su amiga vivió algo así y todavía no quiere hablar.",
            "Le explicó tres cosas: que no estaba obligada a decidir por {nombre}, que podía seguir acompañándola sin presionarla, y que cuando {nombre} estuviera lista habría personas preparadas para recibirla sin juzgarla.",
            "Sofía le mandó esa información a {nombre} por mensaje, números para recibir apoyo y un texto de amistad “cuando quieras, estoy aquí para apoyarte en lo que necesites”.",
            "{nombre} no respondió ese día. Ni el siguiente. Pero al pasar de la semana se animó y le pidió de favor a Sofia que la acompañara a denunciar.",
            "{nombre} no es un personaje. Es el nombre que le pusimos a algo que tiene muchos nombres reales, en cualquier ciudad donde una chica o chico de diéciseis años salió a una fiesta un sábado.",
            "Detrás de cada número hubo una Sofía que cargó con algo que no sabía cómo sobrellevarlo. Una Miranda que sin querer convirtió una persona en chisme. Una Valeria que no supo qué decir pero se quedó. Una Mar que supo que algo estaba mal aunque no supiera nombrarlo.",
            "Y una {nombre} que necesitaba que alguien, cualquiera, le dijera sin presionarla, sin desaparecer: cuando quieras, estoy aquí."
          ],
        },
        ab:{
          titulo:"Buscar orientación.",
          descripcion:[
            "Buscar orientación no es lo mismo que denunciar sin permiso. Hay líneas de apoyo que pueden decirte cómo acompañar a alguien que vivió una agresión, qué decirle, qué no decirle, cuándo y cómo animarla a dar el siguiente paso cuando esté lista.",
            "No tenían que resolver esto solas. Nadie debería.",
            "Sofía llamó al día siguiente con un profesor de confianza. No dijo el nombre de {nombre}. Solo preguntó qué hace alguien cuando su amiga vivió algo así y todavía no quiere hablar.",
            "Le explicó tres cosas: que no estaba obligada a decidir por {nombre}, que podía seguir acompañándola sin presionarla, y que cuando {nombre} estuviera lista habría personas preparadas para recibirla sin juzgarla.",
            "Sofía le mandó esa información a {nombre} por mensaje, números para recibir apoyo y un texto de amistad “cuando quieras, estoy aquí para apoyarte en lo que necesites”.",
            "{nombre} no respondió ese día. Ni el siguiente. Pero al pasar de la semana se animó y le pidió de favor a Sofia que la acompañara a denunciar.",
            "{nombre} no es un personaje. Es el nombre que le pusimos a algo que tiene muchos nombres reales, en cualquier ciudad donde una chica o chico de diéciseis años salió a una fiesta un sábado.",
            "Detrás de cada número hubo una Sofía que cargó con algo que no sabía cómo sobrellevarlo. Una Miranda que sin querer convirtió una persona en chisme. Una Valeria que no supo qué decir pero se quedó. Una Mar que supo que algo estaba mal aunque no supiera nombrarlo.",
            "Y una {nombre} que necesitaba que alguien, cualquiera, le dijera sin presionarla, sin desaparecer: cuando quieras, estoy aquí."
          ],
        },
        ba:{
          titulo: "Esperar a que decida.",
          descripcion:[
            "Era una posición comprensible, nadie quería “traicionar” a {nombre}",
            "Sofía dijo en voz alta: “no podía hacer que {nombre} denunciara”. Pero sí podía hablar con alguien que supiera cómo ayudarla. Solo para saber qué hacer.",
            "Sofía llamó al día siguiente con un profesor de confianza. No dijo el nombre de {nombre}. Solo preguntó qué hace alguien cuando su amiga vivió algo así y todavía no quiere hablar.",
            "Le explicó tres cosas: que no estaba obligada a decidir por {nombre}, que podía seguir acompañándola sin presionarla, y que cuando {nombre} estuviera lista habría personas preparadas para recibirla sin juzgarla.",
            "Sofía le mandó esa información a {nombre} por mensaje, números para recibir apoyo y un texto de amistad “cuando quieras, estoy aquí para apoyarte en lo que necesites”.",
            "{nombre} no respondió ese día. Ni el siguiente. Pero al pasar de la semana se animó y le pidió de favor a Sofia que la acompañara a denunciar.",
            "{nombre} no es un personaje. Es el nombre que le pusimos a algo que tiene muchos nombres reales, en cualquier ciudad donde una chica o chico de diéciseis años salió a una fiesta un sábado.",
            "Detrás de cada número hubo una Sofía que cargó con algo que no sabía cómo sobrellevarlo. Una Miranda que sin querer convirtió una persona en chisme. Una Valeria que no supo qué decir pero se quedó. Una Mar que supo que algo estaba mal aunque no supiera nombrarlo.",
            "Y una {nombre} que necesitaba que alguien, cualquiera, le dijera sin presionarla, sin desaparecer: cuando quieras, estoy aquí."
          ],
        },
        bb:{
          titulo: "Buscar orientación.",
          descripcion:[
            "Buscar orientación no es lo mismo que denunciar sin permiso. Hay líneas de apoyo que pueden decirte cómo acompañar a alguien que vivió una agresión, qué decirle, qué no decirle, cuándo y cómo animarla a dar el siguiente paso cuando esté lista.",
            "No tenían que resolver esto solas. Nadie debería.",
            "Sofía llamó al día siguiente con un profesor de confianza. No dijo el nombre de {nombre}. Solo preguntó qué hace alguien cuando su amiga vivió algo así y todavía no quiere hablar.",
            "Le explicó tres cosas: que no estaba obligada a decidir por {nombre}, que podía seguir acompañándola sin presionarla, y que cuando {nombre} estuviera lista habría personas preparadas para recibirla sin juzgarla.",
            "Sofía le mandó esa información a {nombre} por mensaje, números para recibir apoyo y un texto de amistad “cuando quieras, estoy aquí para apoyarte en lo que necesites”.",
            "{nombre} no respondió ese día. Ni el siguiente. Pero al pasar de la semana se animó y le pidió de favor a Sofia que la acompañara a denunciar.",
            "{nombre} no es un personaje. Es el nombre que le pusimos a algo que tiene muchos nombres reales, en cualquier ciudad donde una chica o chico de diéciseis años salió a una fiesta un sábado.",
            "Detrás de cada número hubo una Sofía que cargó con algo que no sabía cómo sobrellevarlo. Una Miranda que sin querer convirtió una persona en chisme. Una Valeria que no supo qué decir pero se quedó. Una Mar que supo que algo estaba mal aunque no supiera nombrarlo.",
            "Y una {nombre} que necesitaba que alguien, cualquiera, le dijera sin presionarla, sin desaparecer: cuando quieras, estoy aquí."
          ],
        }
      }
    }
  },
};

export function getCap3Key(decisionCap1, decisionCap2) {
  return `${decisionCap1}${decisionCap2}`;
}

export function getCap4Key(decisionCap1, decisionCap2, decisionCap3) {
  return `${decisionCap1}${decisionCap2}${decisionCap3}`;
}