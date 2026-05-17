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

  publico: {
    infancia: {
      capitulo1: {
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
          { tipo: "dato", delito: ["Acoso sexual"], sublabel: "Dato de contexto nacional" },
          "Maestra: “Cuando alguien más pasó cerca, el señor se fue. Y {nombre} se quedó junto al puesto de verduras, temblando, y sintiendo algo que no tenía nombre pero que iba a tener en su mente durante mucho tiempo.”",
          "La maestra se detiene un momento y pregunta: "
        ],
        pregunta: "“Si {nombre} fuera su amiga y ese mismo día les contara lo que pasó… ¿qué le dirían?”",
        opciones: [
          { id: "a", titulo: "Interpretó mal", desc: "Le diría que quizás interpretó mal, que seguro el señor no quería hacerle nada." },
          { id: "b", titulo: "Le creería", desc: "Le creería y  le diría que se lo contara a un adulto de confianza." }
        ],
      },

      capitulo2: {
        a: {
          titulo: "Le diría que quizás interpretó mal, que seguro el señor no quería hacerle nada.",
          descripcion: [
            "Fernanda: “Yo creo que, a lo mejor el señor solo estaba siendo amable y {nombre} se asustó de más.”",
            "Maestra: “Eso que acabas de decir, aunque lo dijiste con buena intención, se llama minimizar. Y es una de las cosas más dañinas que le podemos decir a alguien que vivió algo así. Cuando alguien nos cuenta que un adulto la tocó sin permiso y le dijo cosas que la hicieron sentir mal, la respuesta nunca puede ser 'seguro interpretaste mal'. Porque eso le enseña a dudar de lo que sintió. Y si duda, no habla. Y si no habla, el señor sigue libre.”",
            "Maestra: “Eso fue exactamente lo que pensó {nombre}. Que quizás interpretó mal. Que no era para tanto. Y por eso no dijo nada. Y el señor volvió. {nombre} llegó a su casa. Su mamá estaba en la cocina. Le preguntó cómo le había ido. {nombre} dijo 'bien'. Se sentó a hacer la tarea. Se comió la cena. Se lavó los dientes. Y no dijo nada. No porque no quisiera. Sino porque tenía miedo de que no le creyeran. Porque una parte de ella pensaba que quizás había hecho algo mal, aunque no supiera qué”",
            "Daniela: “Pero ella no hizo nada malo, maestra.”",
            "Maestra: “No, no hizo nada malo. Pero cuando algo así pasa, el miedo revuelve todo. El problema es que ese señor sabía eso. Sabía que {nombre} no iba a decir nada. Y el jueves siguiente volvió al mercado. Esta vez fue peor. Esta vez no solo fueron palabras ni un toque en el brazo. Y antes de irse le dijo: 'Si dices algo, nadie te va a creer. Y si me buscas, sé dónde vives.'”",
            "Lo que vivió {nombre} tiene nombre legal: abuso sexual", { tipo: "dato", delito: ["Abuso sexual"], sublabel: "Dato de contexto nacional" },
            "{nombre} dejó de ir al mercado. Luego dejó de salir sola. Sus calificaciones bajaron. Su mamá pensaba que estaba enferma. Nadie sabía por qué.",
            "Tres semanas después, el señor la esperó afuera de esta escuela. Tenía un coche. Le dijo que subiera. Que la llevaría con sus papás. Que era amigo de su papá.",
            "{nombre} está afuera de la escuela. Están sus compañeros por todos lados, pero ninguno la está mirando. El señor está parado junto al coche con la puerta abierta. Le dice que no le va a pasar nada, que su papá manda a saludar, que nomás es un rato.",
          ],
          dato: "“Si me buscas, sé dónde vives.” Esa amenaza también es un delito. En México, 268 casos de privación ilegal de la libertad contra menores fueron registrados en lo que va del 2026. ",
          sublabelDato: "Dato de Contexto Nacional",
          fuenteDato:"Amenazas y coacciones: ámbito legal y consecuencias penales. (2023, diciembre). Te Pongo Un Reto. https://www.tepongounreto.org/2023/12/amenazas-y-coacciones-ambito-legal-y-consecuencias-penales/",
          pregunta: "¿Qué debería hacer {nombre} en este momento?",
          opciones: [
            { id: "a", titulo: "Subirse.", desc: "Si dice que es amigo de su papá, puede que sí lo sea." },
            { id: "b", titulo: "No subirse.", desc: "Alejarse rápido y buscar a alguien conocido de inmediato." }
          ],
        },
        b: {
          titulo: "Le creería y  le diría que se lo contara a un adulto de confianza.",
          descripcion: [
            "Fernanda: “Yo le creería y le diría que se lo contara a su mamá o a usted, maestra.”",
            "Maestra: “Eso es exactamente lo correcto. Creerle. Sin preguntar por qué no se fue antes, sin decir que quizás exageró. Solo creerle. Porque cuando alguien se atreve a contar algo así, ya le costó muchísimo. Lo que necesita en ese momento no es que le expliquen lo que pasó, ella ya lo sabe,. Necesita saber que no está sola.”",
            "“No, no hizo nada malo. Pero cuando algo así pasa, el miedo revuelve todo. El problema es que ese señor sabía eso. Sabía que Sol no iba a decir nada. Y el jueves siguiente volvió al mercado. Esta vez fue peor. Esta vez no solo fueron palabras ni un toque en el brazo. Y antes de irse le dijo: 'Si dices algo, nadie te va a creer. Y si me buscas, sé dónde vives.'”",
            "Lo que vivió {nombre} tiene nombre legal: abuso sexual", { tipo: "dato", delito: ["Abuso sexual"], sublabel: "Dato de contexto nacional" },
            "{nombre} dejó de ir al mercado. Luego dejó de salir sola. Sus calificaciones bajaron. Su mamá pensaba que estaba enferma. Nadie sabía por qué.",
            "Tres semanas después, el señor la esperó afuera de esta escuela. Tenía un coche. Le dijo que subiera. Que la llevaría con sus papás. Que era amigo de su papá.",
            "{nombre} está afuera de la escuela. Están sus compañeros por todos lados, pero ninguno la está mirando. El señor está parado junto al coche con la puerta abierta. Le dice que no le va a pasar nada, que su papá manda a saludar, que nomás es un rato.",
          ],
          dato: "“Si me buscas, sé dónde vives.” Esa amenaza también es un delito. En México, 268 casos de privación ilegal de la libertad contra menores fueron registrados en lo que va del 2026. ",
          sublabelDato: "Dato de Contexto Nacional",
          pregunta: "¿Qué debería hacer {nombre} en este momento?",
          opciones: [
            { id: "a", titulo: "Subirse.", desc: "Si dice que es amigo de su papá, puede que sí lo sea." },
            { id: "b", titulo: "No subirse.", desc: "Alejarse rápido y buscar a alguien conocido de inmediato." }
          ],
        },
      },

      capitulo3: {
        aa: {
          titulo: "Subirse. Si dice que es amigo de su papá, puede que sí lo sea.",
          descripcion: [
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
          descripcion: [
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
        ba: {
          titulo: "Subirse. Si dice que es amigo de su papá, puede que sí lo sea.",
          descripcion: [
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
          descripcion: [
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
        descripcion: [
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
          { id: "a", titulo: "Respetar lo que pidió", desc: "Si no quiere que se sepa, hay que callarse." },
          { id: "b", titulo: "Buscar la forma de acompañar.", desc: "Buscar la forma de acompañar a {nombre} sin traicionarla, aunque sea difícil." }
        ],
      },
      capitulo2: {
        a: {
          titulo: "Respetar lo que pidió",
          descripcion: [
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
            { id: "a", titulo: "Esperar a que decida.", desc: "Esperar a que {nombre} decida. No es decisión de ellas." },
            { id: "a", titulo: "Buscar orientación.", desc: "Buscar orientación con un adulto de confianza para saber cómo ayudarla sin exponerla." }
          ],
        },
        b: {
          titulo: "Buscar la forma de acompañar.",
          descripcion: [
            "Valeria preguntó cómo, si {nombre} estaba enojada y no quería hablar. Era la pregunta correcta. Acompañar no es lo mismo que presionar. Lo que podía hacer el grupo no era decidir por ella. Era no dejarla cargar esto sola mientras ella decidía.",
            "Sofía asintió despacio. No le iba a contar a nadie sin permiso de {nombre}. Pero tampoco iba a dejarla sola.",
            "Miranda había seguido leyendo el grupo de la prepa. Encontró un mensaje de alguien que decía conocer a una chica de otra escuela a quien le había pasado algo parecido el año anterior en la misma zona.",
            "Si era cierto, esa persona no había aparecido el sábado por primera vez. Llevaba tiempo. Y nadie lo había detenido porque nadie había hablado.",
            "“¿Y si le está pasando a alguien más ahorita?”, preguntó Valeria.",
            "Saben que esa persona ya lo hizo antes. Que puede volver a hacerlo. {nombre} sigue sin querer denunciar."
          ],
          pregunta: "¿Qué hace el grupo?",
          opciones: [
            { id: "a", titulo: "Esperar a que decida.", desc: "Esperar a que {nombre} decida. No es decisión de ellas." },
            { id: "b", titulo: "Buscar orientación.", desc: "Buscar orientación con un adulto de confianza para saber cómo ayudarla sin exponerla." }
          ],
        }
      },
      capitulo3: {
        aa: {
          titulo: "Esperar a que decida.",
          descripcion: [
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
        ab: {
          titulo: "Buscar orientación.",
          descripcion: [
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
        ba: {
          titulo: "Esperar a que decida.",
          descripcion: [
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
        bb: {
          titulo: "Buscar orientación.",
          descripcion: [
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

  digital: {
    infancia: {

      // ── CAPÍTULO 1 ──────────────────────────────────────────────────────────
      capitulo1: {
        titulo: "Capítulo 1: El nuevo amigo de la pantalla",
        descripcion: [
          "Desde que {nombre} tiene su tablet, el tiempo libre se le va rápido. Le encanta un juego en línea donde puede construir mundos y chatear con otros jugadores. La mayoría son compañeros de escuela, pero hace unas semanas alguien nuevo le pidió amistad: 'DragonMaster99'. Dijo tener doce años, vivir en otra ciudad y que los mismos juegos le gustaban.",
          "Desde entonces se escriben todos los días. DragonMaster99 siempre está disponible, siempre dice las cosas correctas. {nombre} siente que es su mejor amigo en el juego.",
          "Pero hoy el mensaje fue diferente. DragonMaster99 le dijo que encontró fotos de {nombre} en su perfil y que le gustaron mucho. Le pidió una foto más reciente. 'Solo para mí', escribió. Y ofreció regalarle monedas del juego a cambio.",
          "{nombre} siente algo raro. No sabe si eso está bien o no.",

          { tipo: "dato", delito: ["Acoso sexual", "Corrupción de menores"], sublabel: "Dato de Contexto" },

          "Cuando un desconocido busca contacto privado con un menor, pide imágenes y ofrece regalos a cambio, está usando una táctica llamada grooming: una forma de manipulación que construye confianza falsa para hacerle daño al menor."
        ],
        pregunta: "¿Qué debería hacer {nombre}?",
        opciones: [
          { id: "a", titulo: "Contarle a un adulto de confianza lo que pasó", desc: "Le muestra los mensajes a su mamá o papá para que lo ayuden a entender qué está pasando." },
          { id: "b", titulo: "Ignorar el mensaje y seguir jugando como si nada", desc: "No contesta, pero tampoco le dice nada a nadie. Total, solo fue un mensaje." },
          { id: "c", titulo: "Mandar la foto a cambio de las monedas del juego", desc: "Piensa que no pasa nada, DragonMaster99 siempre ha sido buena persona con él/ella." },
        ],
      },

      // ── CAPÍTULO 2 ──────────────────────────────────────────────────────────
      capitulo2: {

        // Rama A ─────────────────────────────────────────────────────────────
        a: {
          titulo: "Capítulo 2: Un adulto que sabe escuchar",
          descripcion: [
            "{nombre} le muestra los mensajes a su mamá. Al principio le da vergüenza, pero su mamá no se enoja. Lo primero que le dice es: 'Hiciste muy bien en contarme.'",
            "Juntos leen la conversación. La mamá le explica con calma que pedir fotos privadas a cambio de regalos es un engaño que tiene nombre: grooming. Que DragonMaster99 probablemente no sea un niño de doce años.",
            "Bloquean la cuenta juntos y guardan capturas de pantalla de todo.",

            { tipo: "dato", delito: ["Acoso sexual", "Pornografía infantil"], sublabel: "Dato de Contexto" },

            "El grooming es el primer paso hacia la producción de pornografía infantil. Una vez que el agresor obtiene imágenes de un menor, las usa para chantajearlo o las distribuye en redes ilegales."
          ],
          pregunta: "¿Qué debería hacer la mamá con lo que encontraron?",
          opciones: [
            { id: "a", titulo: "Denunciar ante la Policía Cibernética con las capturas como evidencia", desc: "Llevan las pruebas a las autoridades para abrir una investigación formal." },
            { id: "b", titulo: "Solo bloquear la cuenta y no hacer nada más", desc: "Ya está bloqueado. No quiere complicar las cosas." },
          ],
        },

        // Rama B ─────────────────────────────────────────────────────────────
        b: {
          titulo: "Capítulo 2: El silencio que invita a más",
          descripcion: [
            "{nombre} no contestó el mensaje. Pero tampoco bloqueó a DragonMaster99 ni le dijo nada a nadie.",
            "Al día siguiente llegaron más mensajes. Primero decía que solo quería ser su amigo. Luego cambió el tono: si {nombre} no mandaba la foto, publicaría en el juego que había hecho trampa y todos dejarían de jugar con él/ella.",
            "{nombre} sintió un miedo que no sabía cómo nombrar. ¿Era su culpa por no haber contestado desde el principio?",

            { tipo: "dato", delito: ["Acoso sexual"], sublabel: "Dato de Contexto" },

            "El acoso sexual digital incluye mensajes insistentes de contenido sexual o intimidatorio. Ignorar sin bloquear ni buscar ayuda puede escalar la situación. El agresor interpreta el silencio como una puerta entreabierta."
          ],
          pregunta: "¿Qué debería hacer {nombre} ahora?",
          opciones: [
            { id: "a", titulo: "Contarle a un adulto lo que ha pasado", desc: "Aunque tiene miedo de que lo regañen, decide buscar ayuda." },
            { id: "b", titulo: "Ceder y mandar la foto para que pare el acoso", desc: "Piensa que si lo hace, DragonMaster99 lo dejará tranquilo." },
          ],
        },

        // Rama C ─────────────────────────────────────────────────────────────
        c: {
          titulo: "Capítulo 2: La foto que no se puede borrar",
          descripcion: [
            "{nombre} mandó la foto. DragonMaster99 agradeció y dijo que eran 'amigos especiales'. Le prometió más monedas si mandaba otra, esta vez sin ropa.",
            "{nombre} sintió algo muy raro en el estómago. Eso no se sentía como amistad.",
            "Cuando se negó, DragonMaster99 cambió por completo: ya tenía la primera foto y, si {nombre} no cooperaba, la publicaría para que todos la vieran. También le pidió su número de teléfono para hablar 'en privado'.",

            { tipo: "dato", delito: ["Pornografía infantil", "Corrupción de menores"], sublabel: "Dato de Contexto" },

            "Cuando un adulto obtiene imágenes de un menor y las usa para chantajearlo o pedir más, está cometiendo producción y posesión de pornografía infantil. El menor no tiene ninguna culpa: fue manipulado. La única salida segura es buscar ayuda de un adulto de confianza de inmediato."
          ],
          pregunta: "¿Qué debería hacer {nombre}?",
          opciones: [
            { id: "a", titulo: "Decirle a un adulto todo lo que pasó, aunque dé vergüenza", desc: "Busca a su mamá o papá y les muestra los mensajes, la foto y el chantaje." },
            { id: "b", titulo: "Obedecer a DragonMaster99 para que no publique nada", desc: "Tiene demasiado miedo. Piensa que si coopera, el problema desaparecerá." },
          ],
        },
      },

      // ── CAPÍTULO 3 ──────────────────────────────────────────────────────────
      capitulo3: {

        // aa ─────────────────────────────────────────────────────────────────
        aa: {
          titulo: "Capítulo 3: Una denuncia que protege a muchos",
          descripcion: [
            "La mamá de {nombre} lleva las capturas de pantalla a la Policía Cibernética. El oficial les dice que esa cuenta ya tenía reportes similares de otros menores en distintas ciudades.",
            "Gracias a la denuncia, las autoridades rastrean el perfil y detienen a una persona adulta que llevaba meses contactando niños a través del mismo juego.",
            "{nombre} no fue el único al que intentaron engañar. Pero sí fue el primero en contarlo.",
            "La mamá le dice que hizo lo correcto. Que pedir ayuda no es debilidad: es lo más inteligente que pudo hacer.",
          ],
          dato: "En México, la Policía Cibernética de la Secretaría de Seguridad y Protección Ciudadana recibe denuncias sobre grooming, acoso sexual digital y pornografía infantil. Reportar con evidencia (capturas, nombres de usuario, fechas) es fundamental para que las investigaciones avancen.",
          sublabelDato: "Dato de Acción",
          fuenteDato: "Secretaría de Seguridad y Protección Ciudadana. (2024). Policía Cibernética. https://www.gob.mx/sspc/acciones-y-programas/policia-cibernetica",
          pregunta: "Una denuncia a tiempo puede proteger a decenas de niños que aún no saben que están en peligro. ¿Qué tan dispuestos estamos a hablar aunque dé miedo o vergüenza?",
        },

        // ab ─────────────────────────────────────────────────────────────────
        ab: {
          titulo: "Capítulo 3: La cuenta bloqueada que siguió operando",
          descripcion: [
            "La mamá bloqueó la cuenta y pensó que con eso bastaba. Nadie denunció.",
            "Tres semanas después, un compañero de escuela de {nombre} recibió solicitud de amistad de un nuevo usuario en el mismo juego. El perfil era diferente, pero los mensajes eran idénticos.",
            "DragonMaster99 simplemente había creado una cuenta nueva.",
            "Sin la denuncia de {nombre}, no había ningún registro. El agresor seguía libre, buscando a su siguiente víctima.",
          ],
          dato: "Bloquear a un agresor digital detiene el contacto con esa cuenta, pero no lo detiene a él. Solo la denuncia formal genera un expediente que permite a las autoridades investigar, rastrear y actuar. En México puedes reportar en línea a la Policía Cibernética sin necesidad de ir a una estación.",
          sublabelDato: "Dato de Impacto",
          fuenteDato: "Secretaría de Seguridad y Protección Ciudadana. (2024). Policía Cibernética. https://www.gob.mx/sspc/acciones-y-programas/policia-cibernetica",
          pregunta: "Bloquear protege a una persona. Denunciar puede proteger a cientos. ¿Cuántas veces creemos que 'ya está solucionado' cuando en realidad solo le abrimos la puerta a la siguiente víctima?",
        },

        // ba ─────────────────────────────────────────────────────────────────
        ba: {
          titulo: "Capítulo 3: Llegar tarde, pero llegar",
          descripcion: [
            "{nombre} le contó todo a su papá: los mensajes, las amenazas, el miedo de estos dos días.",
            "Su papá lo escuchó sin interrumpirlo. Le dijo que él no había hecho nada malo. Que quien actuó mal fue DragonMaster99.",
            "Juntos bloquearon la cuenta, guardaron todas las capturas y fueron a denunciar.",
            "El proceso tardó más porque habían pasado dos días y {nombre} ya cargaba con más ansiedad de la necesaria. Pero llegaron. El expediente quedó abierto.",
            "{nombre} aprendió que pedir ayuda desde el primer momento habría sido más fácil, pero que nunca es demasiado tarde para hacerlo.",
          ],
          dato: "Muchos niños demoran en pedir ayuda porque sienten vergüenza o miedo a ser regañados. Los adultos en quienes confían deben dejar claro, antes de que pase cualquier cosa, que no habrá castigo por contar algo que les asustó en internet.",
          sublabelDato: "Dato de Prevención",
          fuenteDato: "UNICEF México. (s.f.). Seguridad en internet para niñas, niños y adolescentes. https://www.unicef.org/mexico/seguridad-en-internet",
          pregunta: "¿Cómo construimos la confianza necesaria para que un niño corra a pedir ayuda en cuanto algo lo incomoda, sin miedo al regaño?",
        },

        // bb ─────────────────────────────────────────────────────────────────
        bb: {
          titulo: "Capítulo 3: Una trampa que se cierra sola",
          descripcion: [
            "{nombre} mandó la foto pensando que DragonMaster99 lo dejaría en paz. No fue así.",
            "Los mensajes se volvieron más frecuentes y las peticiones más invasivas. {nombre} empezó a tener pesadillas y a ponerse muy irritable en casa.",
            "Su maestra notó el cambio. Le preguntó con calma si todo estaba bien. {nombre}, que ya no tenía fuerzas para cargar el secreto solo/a, le contó todo.",
            "La maestra activó el protocolo escolar. Los padres fueron llamados. Nadie lo regañó.",
          ],
          dato: "Las víctimas de chantaje sexual digital (sextorsión) suelen creer que ceder es la única salida. En realidad, ceder empeora la situación: el agresor nunca tiene suficiente. La única salida real es buscar un adulto de confianza y denunciar.",
          sublabelDato: "Dato de Impacto Psicológico",
          fuenteDato: "Internet Watch Foundation. (2023). Sextortion of children: A growing threat. https://www.iwf.org.uk/about-us/why-we-exist/our-research/sextortion/",
          pregunta: "Cuando un niño cede ante el chantaje, la espiral no termina: escala. ¿Cómo enseñamos a los menores que pedir ayuda no los hace culpables de lo que les hicieron?",
        },

        // ca ─────────────────────────────────────────────────────────────────
        ca: {
          titulo: "Capítulo 3: El peso que no hay que cargar solo",
          descripcion: [
            "{nombre} se lo contó todo a su mamá: la foto, el chantaje, los mensajes que pedían más.",
            "Su mamá no se enojó. Lo primero que hizo fue abrazarlo/a y decirle que no era su culpa, que había sido engañado/a por alguien que sabía exactamente cómo manipular a los niños.",
            "Llamaron a la Policía Cibernética esa misma noche. Con las capturas como evidencia, las autoridades abrieron investigación por producción de pornografía infantil y sextorsión.",
            "{nombre} necesitó apoyo psicológico durante meses. Pero con el tiempo volvió a jugar, a reír y a confiar. Solo que ahora con herramientas que antes no tenía.",
          ],
          dato: "La sextorsión infantil es un delito que combina pornografía infantil y extorsión. En México puede denunciarse ante la Policía Cibernética (088 o en línea) y ante la Fiscalía General de la República. La evidencia digital (capturas, nombres de usuario, fechas) es clave para la investigación.",
          sublabelDato: "Dato de Acción",
          fuenteDato: "Fiscalía General de la República. (2024). Unidad de Investigación Cibernética y Operaciones Tecnológicas (UICOT). https://www.gob.mx/fgr",
          pregunta: "La vergüenza que siente un menor después de ser manipulado digitalmente no es suya: pertenece al agresor. ¿Cómo cambiamos la narrativa para que el primer instinto sea pedir ayuda, no esconderse?",
        },

        // cb ─────────────────────────────────────────────────────────────────
        cb: {
          titulo: "Capítulo 3: Obedecer al agresor nunca tiene fin",
          descripcion: [
            "{nombre} siguió obedeciendo. Mandó más fotos. Luego DragonMaster99 pidió su número de teléfono. Luego pidió videollamadas.",
            "Cada vez que {nombre} cedía, la siguiente petición era más grande. La trampa se cerraba sola.",
            "Un día DragonMaster99 le dijo que había compartido las imágenes con 'sus amigos' y que, si quería que las borraran, tendría que verse con él en persona.",
            "{nombre} estaba aterrorizado/a y completamente solo/a. No sabía que lo que vivía podía tener el nombre de trata de personas con fines de explotación sexual, que a veces empieza exactamente así: con una amistad digital, una foto y un chantaje.",

            { tipo: "dato", delito: ["Trata de personas", "Pornografía infantil"], sublabel: "Dato de Contexto" },

            "Fue su hermano mayor quien lo encontró llorando frente a la tablet a las dos de la mañana. Esa noche, todo salió a la luz."
          ],
          dato: "La trata de personas con fines de explotación sexual frecuentemente comienza en entornos digitales. Los agresores construyen vínculos de confianza, obtienen material comprometedor y lo usan para coaccionarlos a encuentros en persona. En México, la Línea de Vida (800 290 0024) atiende estos casos las 24 horas.",
          sublabelDato: "Dato de Contexto",
          fuenteDato: "Comisión Nacional para Prevenir y Erradicar la Violencia Contra las Mujeres (CONAVIM). (2023). Trata de personas: guía de identificación. https://www.gob.mx/conavim",
          pregunta: "Obedecer al agresor no silencia el peligro: lo amplifica. ¿Cuántas historias de trata empezaron con un mensaje que parecía inofensivo? ¿Qué tan preparados estamos para reconocerlo a tiempo?",
        },
      },
    },

    // ═══════════════════════════════════════════════════════════════════════════
    //  ADOLESCENCIA
    // ═══════════════════════════════════════════════════════════════════════════
    adolescencia: {

      // ── CAPÍTULO 1 ──────────────────────────────────────────────────────────
      capitulo1: {
        titulo: "Capítulo 1: Una foto que ya no se puede controlar",
        descripcion: [
          "{nombre} lleva seis meses en una relación con alguien que conoció en línea. Nunca se han visto en persona, pero hablan todos los días: comparten música, memes, secretos. Se siente real.",
          "La semana pasada esa persona le pidió una foto íntima. Le dijo que era solo para él/ella, que la borraría en cuanto la viera, que era una muestra de confianza.",
          "{nombre} dudó. Pero al final la mandó.",
          "Hoy esa persona le dijo que, si no manda más fotos y no se conecta por videollamada ahora mismo, publicará la primera imagen en el grupo de la escuela y se la enviará a sus papás.",
          "{nombre} tiene el corazón acelerado. No sabe qué hacer.",

          { tipo: "dato", delito: ["Violación a la intimidad sexual", "Acoso sexual"], sublabel: "Dato de Contexto" },

          "Compartir imágenes íntimas de una persona sin su consentimiento es violación a la intimidad sexual, tipificada en varios estados de México. El chantaje para obtener más imágenes o favores sexuales se llama sextorsión y también es un delito grave. La víctima no es responsable por haber confiado."
        ],
        pregunta: "¿Qué debería hacer {nombre}?",
        opciones: [
          { id: "a", titulo: "No responder y buscar ayuda de un adulto de confianza de inmediato", desc: "Cierra la aplicación, guarda capturas de pantalla de todo y busca a alguien en quien confíe." },
          { id: "b", titulo: "Intentar negociar con esa persona para que no publique nada", desc: "Le pide que por favor borre la imagen. Le promete que nadie más lo sabrá." },
          { id: "c", titulo: "Contarle a su mejor amigo/a para decidir juntos qué hacer", desc: "No quiere enfrentarlo solo/a, pero tampoco sabe si está listo/a para hablar con un adulto." },
        ],
      },

      // ── CAPÍTULO 2 ──────────────────────────────────────────────────────────
      capitulo2: {

        // Rama A ─────────────────────────────────────────────────────────────
        a: {
          titulo: "Capítulo 2: Romper el ciclo antes de que se cierre",
          descripcion: [
            "{nombre} cerró la aplicación, tomó capturas de pantalla de toda la conversación y fue directo/a a buscar a sus papás.",
            "Les mostró todo. Su papá leyó en silencio. Lo primero que dijo fue: 'No hiciste nada malo. Esta persona cometió un delito.'",
            "Esa noche investigaron juntos. Encontraron que lo que vivía {nombre} tenía nombre en la ley: sextorsión y violación a la intimidad sexual.",

            { tipo: "dato", delito: ["Violación a la intimidad sexual", "Acoso sexual"], sublabel: "Dato de Contexto" },

            "En México, varios estados han tipificado la violación a la intimidad sexual. La sextorsión puede perseguirse como extorsión agravada. Ambos delitos se denuncian ante la Fiscalía o la Policía Cibernética con evidencia digital."
          ],
          pregunta: "¿Cuál debe ser el siguiente paso de la familia?",
          opciones: [
            { id: "a", titulo: "Denunciar formalmente con todas las capturas de pantalla como evidencia", desc: "Presentan la denuncia esa misma noche o al día siguiente sin demora." },
            { id: "b", titulo: "Intentar rastrear a la persona por su cuenta antes de ir a las autoridades", desc: "Buscan el perfil en redes para saber quién es antes de denunciar." },
          ],
        },

        // Rama B ─────────────────────────────────────────────────────────────
        b: {
          titulo: "Capítulo 2: Negociar con quien tiene el control",
          descripcion: [
            "{nombre} le respondió. Le rogó que borrara la imagen y prometió no decirle nada a nadie.",
            "La respuesta fue inmediata: si {nombre} no mandaba más fotos en los próximos treinta minutos, la publicaría. Pero si cooperaba, 'consideraría' borrarla.",
            "{nombre} entendió en ese momento que negociar era imposible. Esa persona tenía todo el control y lo sabía.",
            "Con las manos temblando, le escribió a su mejor amigo/a: 'Necesito ayuda. No sé qué hacer.'",

            { tipo: "dato", delito: ["Violación a la intimidad sexual", "Acoso sexual"], sublabel: "Dato de Contexto" },

            "La sextorsión funciona precisamente porque la víctima cree que ceder detendrá el abuso. En realidad, cada imagen compartida aumenta el poder del agresor. La única forma real de salir del ciclo es buscar ayuda externa."
          ],
          pregunta: "¿Qué debería hacer el/la mejor amigo/a de {nombre}?",
          opciones: [
            { id: "a", titulo: "Ayudar a {nombre} a contarle a un adulto de confianza esa misma noche", desc: "Le dice que no está solo/a y lo/la acompaña a hablar con sus papás." },
            { id: "b", titulo: "Guardar el secreto porque {nombre} le pidió discreción", desc: "Respeta lo que su amigo/a pidió aunque sabe que la situación es grave." },
          ],
        },

        // Rama C ─────────────────────────────────────────────────────────────
        c: {
          titulo: "Capítulo 2: Entre amigos no alcanza",
          descripcion: [
            "{nombre} le contó todo a su mejor amigo/a. Mientras hablaban, llegó una notificación: la imagen ya había sido enviada a tres personas del grupo de la escuela.",
            "El/la amigo/a reaccionó de inmediato: 'No fue tu culpa. Tenemos que actuar rápido.'",
            "Juntos reportaron la imagen en las plataformas donde había sido compartida. Guardaron capturas de todo. Bloquearon al agresor.",
            "Pero el agresor creó un perfil nuevo y siguió mandando mensajes. Los amigos habían hecho lo que podían. Llegó el momento en que los adultos necesitaban estar involucrados.",

            { tipo: "dato", delito: ["Violación a la intimidad sexual"], sublabel: "Dato de Contexto" },

            "Cada persona que reenvía una imagen íntima sin consentimiento también comete violación a la intimidad sexual. Reportar en plataformas es necesario, pero la denuncia formal es lo que activa la investigación."
          ],
          pregunta: "¿Qué debería hacer el/la amigo/a junto con {nombre}?",
          opciones: [
            { id: "a", titulo: "Ir a buscar a un adulto de confianza esa misma noche", desc: "Deciden que esto es demasiado grande para manejarlo solos. Hablan con un adulto." },
            { id: "b", titulo: "Esperar a que el agresor se canse y deje de escribir", desc: "Piensan que si no responden, eventualmente desaparecerá." },
          ],
        },
      },

      // ── CAPÍTULO 3 ──────────────────────────────────────────────────────────
      capitulo3: {

        // aa ─────────────────────────────────────────────────────────────────
        aa: {
          titulo: "Capítulo 3: El sistema que sí funciona",
          descripcion: [
            "La denuncia presentada esa primera noche permitió que las autoridades actuaran antes de que la imagen llegara a más plataformas.",
            "El perfil fue rastreado. La persona tenía diecinueve años, vivía en otra ciudad y tenía conversaciones similares con al menos cuatro personas más.",
            "{nombre} recibió acompañamiento psicológico. Con el tiempo pudo nombrar lo que había vivido y entender que no fue su culpa.",
            "Meses después participó en una campaña escolar sobre seguridad digital. No dio detalles personales, pero dijo que pedir ayuda había sido la decisión más inteligente que tomó en su vida.",
          ],
          dato: "En México, la Fiscalía General de la República cuenta con la Unidad de Investigación Cibernética y Operaciones Tecnológicas (UICOT). La evidencia bien preservada —aunque solo sean capturas de pantalla— es suficiente para iniciar una investigación.",
          sublabelDato: "Dato de Acción",
          fuenteDato: "Fiscalía General de la República. (2024). Unidad de Investigación Cibernética y Operaciones Tecnológicas (UICOT). https://www.gob.mx/fgr",
          pregunta: "Denunciar un delito digital no solo detiene el daño hacia una persona: puede frenar a alguien que hace lo mismo con muchas más. ¿Estamos construyendo la confianza para que los adolescentes sepan que el sistema puede estar de su lado?",
        },

        // ab ─────────────────────────────────────────────────────────────────
        ab: {
          titulo: "Capítulo 3: Una investigación que sale mal",
          descripcion: [
            "La familia decidió rastrear por su cuenta el perfil antes de ir a las autoridades. Buscaron el nombre de usuario, encontraron otras cuentas y mandaron mensajes haciéndose pasar por alguien más.",
            "Al notar que alguien lo buscaba, el agresor borró todos sus perfiles en cuestión de horas.",
            "Cuando llegaron a la Fiscalía, el rastro digital había desaparecido. Las capturas que tenían eran suficientes para abrir el caso, pero la evidencia que hubiera permitido identificar al agresor ya no estaba.",
            "El investigador explicó: en delitos digitales, las primeras horas son críticas. Cada acción que no sea denunciar puede destruir la evidencia.",
          ],
          dato: "La Policía Cibernética tiene herramientas forenses que los civiles no pueden replicar sin destruir la evidencia. Denunciar primero, rastrear después: esa es siempre la secuencia correcta en delitos digitales.",
          sublabelDato: "Dato Procesal",
          fuenteDato: "Secretaría de Seguridad y Protección Ciudadana. (2024). Policía Cibernética. https://www.gob.mx/sspc/acciones-y-programas/policia-cibernetica",
          pregunta: "Querer resolver las cosas por cuenta propia es comprensible. Pero en delitos digitales, esa decisión puede costarle a la investigación su única oportunidad. ¿Qué necesitamos saber antes de que algo así nos pase?",
        },

        // ba ─────────────────────────────────────────────────────────────────
        ba: {
          titulo: "Capítulo 3: Dos personas contra el chantaje",
          descripcion: [
            "El/la amigo/a de {nombre} no dudó: 'Esto no lo vamos a resolver solos. Necesitas a un adulto.'",
            "Esa noche los dos fueron juntos a hablar con la mamá de {nombre}. El/la amigo/a explicó lo que sabía. {nombre} completó el resto.",
            "La mamá escuchó sin interrumpir. Luego dijo algo que ninguno esperaba: 'Gracias por acompañarlo/a. Eso fue exactamente lo correcto.'",
            "Al día siguiente presentaron la denuncia. El/la amigo/a acompañó ese proceso también.",
          ],
          dato: "El apoyo entre pares en casos de violencia digital reduce significativamente el tiempo que una víctima tarda en buscar ayuda de un adulto. Los adolescentes que cuentan con un amigo que los acompaña tienen mayor probabilidad de completar el proceso de denuncia.",
          sublabelDato: "Dato de Apoyo entre Pares",
          fuenteDato: "UNICEF. (2021). La violencia en línea contra niñas: un análisis de la evidencia. https://www.unicef.org/es/informes/la-violencia-en-linea-contra-ninas",
          pregunta: "A veces la diferencia entre salir del ciclo de chantaje y quedarse atrapado/a es una sola persona que dice: 'Yo voy contigo.' ¿Cómo formamos ese tipo de amistades?",
        },

        // bb ─────────────────────────────────────────────────────────────────
        bb: {
          titulo: "Capítulo 3: El secreto que pesa entre dos",
          descripcion: [
            "El/la amigo/a guardó el secreto. Lo prometió y lo cumplió.",
            "Las semanas siguientes, {nombre} cedió y mandó más imágenes. El agresor pidió dinero. Luego pidió un encuentro en persona.",
            "El/la amigo/a cargó con ese peso hasta que ya no pudo. Le dijo a su mamá lo que estaba pasando sin mencionar el nombre de {nombre}.",
            "Su mamá le explicó que guardar silencio frente al abuso no es lealtad: es abandono. El/la amigo/a volvió con {nombre} y le dijo que no podía seguir callado/a. Que lo/la acompañaría a pedir ayuda.",
          ],
          dato: "Guardar el secreto de alguien que está siendo víctima de chantaje digital puede perpetuar el abuso. Las personas cercanas a víctimas de sextorsión tienen un papel clave en motivarlas a buscar ayuda, aunque eso genere conflicto momentáneo.",
          sublabelDato: "Dato de Apoyo entre Pares",
          fuenteDato: "UNICEF. (2021). La violencia en línea contra niñas: un análisis de la evidencia. https://www.unicef.org/es/informes/la-violencia-en-linea-contra-ninas",
          pregunta: "¿Cuándo deja de ser lealtad y empieza a ser complicidad con el daño? ¿Cómo hablamos con quienes queremos sobre los límites de guardar secretos?",
        },

        // ca ─────────────────────────────────────────────────────────────────
        ca: {
          titulo: "Capítulo 3: Cuando la familia activó todo",
          descripcion: [
            "Esa noche {nombre} y su amigo/a hablaron con los papás. La mamá escuchó todo sin interrumpir.",
            "Al día siguiente reportaron la imagen en todas las plataformas y presentaron la denuncia ante la Policía Cibernética. La mayoría de plataformas eliminó el contenido en menos de 24 horas.",
            "El agresor fue identificado. Tenía historial de contactos similares en otras ciudades. Lo que parecía una relación en línea era parte de un patrón de captación de víctimas.",

            { tipo: "dato", delito: ["Trata de personas", "Violación a la intimidad sexual"], sublabel: "Dato de Contexto" },

            "{nombre} no podía controlar lo que ya había pasado. Pero sí eligió lo que hizo después. Y esa decisión lo cambió todo.",
          ],
          dato: "Las plataformas como Meta, Google y TikTok tienen protocolos de remoción urgente de contenido sexual que involucra menores. StopNCII.org permite crear una huella digital de la imagen para evitar que se redistribuya sin necesidad de revelar el contenido.",
          sublabelDato: "Dato de Acción",
          fuenteDato: "StopNCII. (2024). How it works. https://stopncii.org",
          pregunta: "Los adolescentes a veces actúan primero y piden ayuda después. No siempre es la secuencia ideal, pero lo importante es que la secuencia ocurra. ¿Cómo acortamos ese tiempo?",
        },

        // cb ─────────────────────────────────────────────────────────────────
        cb: {
          titulo: "Capítulo 3: Esperar no fue suficiente",
          descripcion: [
            "Reportaron la imagen y esperaron. El agresor creó un perfil nuevo. Los mensajes continuaron, ahora pidiendo un encuentro en persona.",
            "Pasó una semana. La mamá de {nombre} lo encontró llorando frente al teléfono a medianoche y esa noche no aceptó un 'estoy bien' como respuesta.",
            "{nombre} lo contó todo. La denuncia se presentó al día siguiente. El agresor fue detenido antes de que el encuentro pudiera ocurrir.",
            "La espera había costado una semana de miedo que no era necesario cargar.",
          ],
          dato: "El 79% de los casos de sextorsión escalan si no hay denuncia en los primeros días. Reportar en plataformas es necesario pero no suficiente: la denuncia formal es lo que activa la investigación y puede detener al agresor antes de que el daño escale al mundo físico.",
          sublabelDato: "Dato de Impacto",
          fuenteDato: "FBI Safe Online Surfing. (2023). Sextortion: What parents and kids need to know. https://www.fbi.gov/how-we-can-help-you/safety-resources/scams-and-safety/common-scams-and-crimes/sextortion",
          pregunta: "Esperar a que el agresor se canse es apostar a que algo cambie sin que nadie haga nada. Casi nunca funciona. ¿Cómo enseñamos a los adolescentes que actuar a tiempo no es exagerar, es protegerse?",
        },
      },
    },
  },
};

export function getCap3Key(decisionCap1, decisionCap2) {
  return `${decisionCap1}${decisionCap2}`;
}

export function getCap4Key(decisionCap1, decisionCap2, decisionCap3) {
  return `${decisionCap1}${decisionCap2}${decisionCap3}`;
}