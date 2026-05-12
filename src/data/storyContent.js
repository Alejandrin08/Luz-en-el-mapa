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

};

export function getCap3Key(decisionCap1, decisionCap2) {
  return `${decisionCap1}${decisionCap2}`;
}