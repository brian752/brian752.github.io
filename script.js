// Función para mostrar el contenido seleccionado
function showContent(contentId) {
    const content = {
        estructura: `
            <h1>Estructura Atómica</h1>

        <h2>Introducción</h2>
        <p>
            La estructura atómica se refiere a la disposición de los componentes fundamentales de un átomo, que son los protones, neutrones y electrones. Comprender la estructura atómica es esencial para estudiar la química y la física, ya que determina las propiedades químicas y físicas de los elementos y compuestos.
        </p>

        <h2>Componentes del Átomo</h2>
        <p>
            Un átomo está compuesto por tres tipos principales de partículas subatómicas:
        </p>
        <ul>
            <li><strong>Protones:</strong> Partículas con carga positiva que se encuentran en el núcleo del átomo.</li>
            <li><strong>Neutrones:</strong> Partículas sin carga (neutras) también localizadas en el núcleo.</li>
            <li><strong>Electrones:</strong> Partículas con carga negativa que orbitan alrededor del núcleo en distintas capas o niveles de energía.</li>
        </ul>

        <h2>Modelo Atómico</h2>
        <p>
            A lo largo de la historia, se han propuesto varios modelos para describir la estructura atómica:
        </p>
        <ul>
            <li><strong>Modelo de Dalton:</strong> Propuesto por John Dalton en el siglo XIX, describe el átomo como una esfera indivisible y homogénea.</li>
            <li><strong>Modelo de Thomson:</strong> También conocido como el modelo del "pudín de pasas", propuesto por J.J. Thomson, sugiere que los electrones están incrustados en una esfera positiva.</li>
            <li><strong>Modelo de Rutherford:</strong> Ernest Rutherford propuso que el átomo tiene un núcleo pequeño y denso con una carga positiva, y que los electrones orbitan alrededor de este núcleo.</li>
            <li><strong>Modelo de Bohr:</strong> Niels Bohr mejoró el modelo de Rutherford al introducir órbitas cuantizadas para los electrones, donde cada órbita tiene un nivel de energía específico.</li>
            <li><strong>Modelo Cuántico:</strong> Basado en la mecánica cuántica, este modelo describe a los electrones en términos de probabilidades y orbitales, en lugar de órbitas fijas. Es el modelo más aceptado actualmente.</li>
        </ul>

        <h2>Configuración Electrónica</h2>
        <p>
            La configuración electrónica describe cómo se distribuyen los electrones en los diferentes orbitales de un átomo. Los electrones ocupan niveles de energía específicos y siguen el principio de Aufbau, el principio de exclusión de Pauli y la regla de Hund.
        </p>
        <p>
            La configuración electrónica se representa mediante notación de capas y subcapas, por ejemplo: 
            <strong>1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>5</sup></strong> para el cloro.
        </p>

        <h2>Numero Atómico y Masa Atómica</h2>
        <p>
            El número atómico (Z) es el número de protones en el núcleo de un átomo y define el elemento químico. La masa atómica es la masa promedio de los átomos de un elemento, considerando la abundancia relativa de sus isótopos.
        </p>

        <h2>Isótopos</h2>
        <p>
            Los isótopos son átomos del mismo elemento que tienen el mismo número de protones pero diferente número de neutrones, y por lo tanto, diferente masa atómica. Por ejemplo, el hidrógeno tiene tres isótopos: protio, deuterio y tritio.
        </p>

        <h2>Conclusión</h2>
        <p>
            La estructura atómica proporciona una base fundamental para entender cómo se comportan los átomos y las moléculas en las reacciones químicas. El estudio de la estructura atómica permite a los científicos comprender las propiedades y comportamientos de los elementos en diferentes contextos.
        </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Xvno5NeanxU?si=4l1Vcrejz6TrcuSM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        enlaces: `
            <h1>Enlaces Químicos</h1>

        <h2>Introducción</h2>
        <p>
            Los enlaces químicos son las fuerzas que mantienen unidos a los átomos en una molécula o compuesto. Estos enlaces se forman debido a la interacción entre los electrones de los átomos, y son fundamentales para la formación de sustancias químicas con propiedades específicas.
        </p>

        <h2>Tipos de Enlaces Químicos</h2>
        <p>
            Existen tres tipos principales de enlaces químicos:
        </p>
        <ul>
            <li><strong>Enlace Covalente:</strong> Se forma cuando dos átomos comparten uno o más pares de electrones. Los enlaces covalentes pueden ser simples, dobles o triples, dependiendo del número de pares de electrones compartidos. Los compuestos formados por enlaces covalentes se conocen como compuestos moleculares.</li>
            <li><strong>Enlace Iónico:</strong> Se forma cuando un átomo cede uno o más electrones a otro átomo, creando iones positivos y negativos que se atraen entre sí debido a las cargas opuestas. Este tipo de enlace se observa comúnmente en compuestos formados entre metales y no metales.</li>
            <li><strong>Enlace Metálico:</strong> Se forma cuando los átomos de un metal comparten sus electrones de valencia de manera colectiva, creando una "nube" de electrones que rodea una estructura de iones metálicos positivos. Este tipo de enlace es responsable de las propiedades características de los metales, como la conductividad eléctrica y la maleabilidad.</li>
        </ul>

        <h2>Enlace Covalente</h2>
        <p>
            En un enlace covalente, los átomos comparten electrones para completar sus capas de valencia y alcanzar una configuración estable. Los enlaces covalentes se representan mediante líneas entre los átomos en las fórmulas estructurales.
        </p>
        <p>
            Ejemplo: En la molécula de agua (H<sub>2</sub>O), el oxígeno comparte un par de electrones con cada uno de los dos átomos de hidrógeno.
        </p>

        <h2>Enlace Iónico</h2>
        <p>
            En un enlace iónico, un átomo dona uno o más electrones a otro átomo, resultando en la formación de iones cargados. Los iones positivos (cationes) y negativos (aniones) se atraen entre sí debido a las fuerzas electrostáticas.
        </p>
        <p>
            Ejemplo: En el cloruro de sodio (NaCl), el sodio (Na) dona un electrón al cloro (Cl), formando iones Na<sup>+</sup> y Cl<sup>-</sup> que se atraen entre sí.
        </p>

        <h2>Enlace Metálico</h2>
        <p>
            En un enlace metálico, los átomos de metal liberan sus electrones de valencia en un mar de electrones móviles que se mueven libremente alrededor de los iones metálicos positivos. Esta estructura permite a los metales conducir electricidad y ser moldeables.
        </p>
        <p>
            Ejemplo: En el cobre (Cu), los átomos comparten sus electrones de valencia en una estructura metálica que permite la conductividad eléctrica.
        </p>

        <h2>Propiedades de los Enlaces Químicos</h2>
        <p>
            Los diferentes tipos de enlaces químicos tienen propiedades características que influyen en las propiedades físicas y químicas de las sustancias:
        </p>
        <ul>
            <li><strong>Enlaces Covalentes:</strong> Generalmente tienen puntos de fusión y ebullición bajos y no conducen electricidad en estado sólido.</li>
            <li><strong>Enlaces Iónicos:</strong> Tienen puntos de fusión y ebullición altos, y suelen ser solubles en agua y conductores de electricidad en solución acuosa.</li>
            <li><strong>Enlaces Metálicos:</strong> Tienen puntos de fusión y ebullición variados, son buenos conductores de electricidad y calor, y son maleables y dúctiles.</li>
        </ul>

        <h2>Conclusión</h2>
        <p>
            Los enlaces químicos son esenciales para la formación y estabilidad de las sustancias químicas. Comprender los diferentes tipos de enlaces y sus propiedades permite explicar las características y comportamientos de los compuestos químicos en diversas condiciones.
        </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9Oljha_Syv8?si=g79u3HkfcId0kdHA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        estados: `
            <h1>Estados de la Materia</h1>

        <h2>Introducción</h2>
        <p>
            La materia puede presentarse en diferentes estados, dependiendo de las condiciones de temperatura y presión. Los estados de la materia son las formas físicas en que se encuentra la materia y son fundamentales para entender su comportamiento en diferentes condiciones.
        </p>

        <h2>Estados Principales de la Materia</h2>
        <p>
            Los principales estados de la materia son:
        </p>
        <ul>
            <li><strong>Sólido:</strong> En este estado, las partículas están muy cerca unas de otras y tienen una disposición fija. Los sólidos tienen una forma y un volumen definidos debido a la fuerte atracción entre las partículas.</li>
            <li><strong>Líquido:</strong> En el estado líquido, las partículas están más separadas que en los sólidos y pueden deslizarse unas sobre otras. Los líquidos tienen un volumen definido pero no una forma fija; toman la forma del recipiente que los contiene.</li>
            <li><strong>Gas:</strong> En el estado gaseoso, las partículas están mucho más separadas y se mueven libremente. Los gases no tienen ni forma ni volumen definidos, y se expanden para llenar el espacio disponible.</li>
        </ul>

        <h2>Estados Adicionales de la Materia</h2>
        <p>
            Además de los tres estados principales, existen otros estados de la materia menos comunes:
        </p>
        <ul>
            <li><strong>Plasma:</strong> El plasma es un estado de la materia en el que los átomos están ionizados, es decir, los electrones se han separado de los núcleos. Este estado se encuentra en las estrellas y en ciertas condiciones artificiales como en las lámparas de neón.</li>
            <li><strong>Condensado de Bose-Einstein:</strong> Este estado se forma a temperaturas extremadamente bajas, cercanas al cero absoluto. En el condensado de Bose-Einstein, las partículas se comportan como una sola entidad cuántica.</li>
            <li><strong>Condensado de Fermi:</strong> Similar al condensado de Bose-Einstein, pero se forma con fermiones en lugar de bosones. También se encuentra a temperaturas extremadamente bajas y presenta propiedades cuánticas únicas.</li>
        </ul>

        <h2>Cambios de Estado</h2>
        <p>
            Los cambios de estado son transiciones entre diferentes estados de la materia que ocurren cuando se alteran las condiciones de temperatura y presión. Los principales cambios de estado son:
        </p>
        <ul>
            <li><strong>Fusión:</strong> Cambio de estado de sólido a líquido. Ocurre cuando la temperatura aumenta y el sólido se derrite.</li>
            <li><strong>Solidificación:</strong> Cambio de estado de líquido a sólido. Ocurre cuando la temperatura disminuye y el líquido se congela.</li>
            <li><strong>Vaporización:</strong> Cambio de estado de líquido a gas. Incluye la ebullición y la evaporación.</li>
            <li><strong>Condensación:</strong> Cambio de estado de gas a líquido. Ocurre cuando el gas se enfría y se convierte en líquido.</li>
            <li><strong>Sublimación:</strong> Cambio de estado de sólido a gas, sin pasar por el estado líquido.</li>
            <li><strong>Deposición:</strong> Cambio de estado de gas a sólido, sin pasar por el estado líquido.</li>
        </ul>

        <h2>Conclusión</h2>
        <p>
            Entender los estados de la materia y los cambios entre ellos es esencial para el estudio de la química y la física. Cada estado de la materia tiene propiedades únicas que afectan cómo las sustancias interactúan y se comportan en diferentes condiciones.
        </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/cux9sSjtsgw?si=ZqE4e6CBW49GjzC3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        termodinamica: `
            <h1>Termodinámica</h1>

        <h2>Introducción</h2>
        <p>
            La termodinámica es una rama de la física que estudia las relaciones entre el calor, el trabajo, y la energía. Se enfoca en cómo se transforman estos tipos de energía en sistemas físicos y químicos, y cómo estos procesos afectan a la materia.
        </p>

        <h2>Principios de la Termodinámica</h2>
        <p>
            La termodinámica se basa en cuatro principios fundamentales, conocidos como leyes de la termodinámica:
        </p>

        <h3>Primer Principio de la Termodinámica</h3>
        <p>
            También conocido como la ley de la conservación de la energía, establece que la energía no se crea ni se destruye, solo se transforma de una forma a otra. Matemáticamente, se expresa como:
        </p>
        <p><strong>ΔU = Q - W</strong></p>
        <p>
            Donde <em>ΔU</em> es el cambio en la energía interna del sistema, <em>Q</em> es el calor añadido al sistema, y <em>W</em> es el trabajo realizado por el sistema.
        </p>

        <h3>Segundo Principio de la Termodinámica</h3>
        <p>
            Este principio establece que la entropía de un sistema aislado tiende a aumentar con el tiempo, y que los procesos naturales tienden a moverse hacia un estado de mayor desorden o entropía. En términos de eficiencia de procesos, también establece que no se puede convertir toda la energía en trabajo útil, siempre hay una pérdida.
        </p>

        <h3>Tercer Principio de la Termodinámica</h3>
        <p>
            A medida que la temperatura de un sistema se aproxima al cero absoluto, la entropía de un cristal perfecto se aproxima a cero. Este principio implica que es imposible alcanzar el cero absoluto en un número finito de pasos.
        </p>

        <h3>Cuarto Principio de la Termodinámica</h3>
        <p>
            Este principio es menos comúnmente conocido y se refiere a la necesidad de una temperatura de referencia para la definición de la temperatura termodinámica. También está relacionado con la estabilidad y el equilibrio termodinámico.
        </p>

        <h2>Aplicaciones de la Termodinámica</h2>
        <p>
            La termodinámica tiene numerosas aplicaciones en diversos campos:
        </p>
        <ul>
            <li><strong>Ingeniería:</strong> Diseño y análisis de motores, refrigeradores, y sistemas de energía.</li>
            <li><strong>Química:</strong> Reacciones químicas y procesos industriales.</li>
            <li><strong>Biología:</strong> Procesos metabólicos y bioenergética.</li>
            <li><strong>Física:</strong> Estudio de propiedades de gases y sistemas de partículas.</li>
        </ul>

        <h2>Conclusión</h2>
        <p>
            La termodinámica es esencial para entender cómo se maneja la energía en diferentes sistemas y cómo se pueden optimizar los procesos para obtener eficiencia máxima. Su estudio proporciona una base sólida para el desarrollo de tecnologías y procesos en diversas áreas científicas y de ingeniería.
        </p>
           <iframe width="560" height="315" src="https://www.youtube.com/embed/LAmBg7OzUcE?si=7cDYVdXS64lVDtVB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
           <iframe width="560" height="315" src="https://www.youtube.com/embed/S7Hw_cB9k0M?si=v6Lp5J3mjB9Vf8al" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        `,
        equilibrio: `
            <h1>Equilibrio Químico</h1>

        <h2>Introducción</h2>
        <p>
            El equilibrio químico es una condición en la que las velocidades de las reacciones directa e inversa son iguales, lo que lleva a que las concentraciones de reactivos y productos permanezcan constantes en el tiempo. Es un estado dinámico en el que las reacciones continúan ocurriendo, pero no hay cambio neto en la composición del sistema.
        </p>

        <h2>Conceptos Clave</h2>
        <h3>Estado de Equilibrio</h3>
        <p>
            En el equilibrio químico, el sistema está en un estado estable donde las concentraciones de las especies químicas no cambian, aunque las reacciones química siguen ocurriendo en direcciones opuestas. Este equilibrio se alcanza cuando la velocidad de la reacción directa es igual a la velocidad de la reacción inversa.
        </p>

        <h3>Constante de Equilibrio</h3>
        <p>
            La constante de equilibrio, <strong>K</strong>, es una expresión matemática que describe la relación entre las concentraciones de los reactivos y productos en equilibrio. Para una reacción general:
        </p>
        <p><strong>aA + bB &rarr; cC + dD</strong></p>
        <p>
            La constante de equilibrio se define como:
        </p>
        <p><strong>K = \frac{[C]^c [D]^d}{[A]^a [B]^b}</strong></p>
        <p>
            Donde <em>[A]</em>, <em>[B]</em>, <em>[C]</em>, y <em>[D]</em> son las concentraciones de las especies químicas en equilibrio.
        </p>

        <h2>Principio de Le Chatelier</h2>
        <p>
            El principio de Le Chatelier establece que si un sistema en equilibrio es perturbado por un cambio en las condiciones (como concentración, temperatura o presión), el sistema ajustará su equilibrio para contrarrestar la perturbación. Por ejemplo, si se aumenta la concentración de un reactivo, la reacción se desplazará hacia la formación de más productos.
        </p>

        <h3>Ejemplo Práctico</h3>
        <p>
            Considera la siguiente reacción de equilibrio:
        </p>
        <p><strong>N<sub>2</sub>(g) + 3H<sub>2</sub>(g) &rarr; 2NH<sub>3</sub>(g)</strong></p>
        <p>
            Si se aumenta la presión en el sistema, el equilibrio se desplazará hacia el lado con menos moles de gas, en este caso, hacia la formación de <em>NH<sub>3</sub></em>.
        </p>

        <h2>Aplicaciones del Equilibrio Químico</h2>
        <p>
            El equilibrio químico es fundamental en muchos procesos químicos e industriales:
        </p>
        <ul>
            <li><strong>Síntesis de Ammoníaco:</strong> El proceso Haber-Bosch para la producción de amoníaco utiliza el equilibrio químico para maximizar la producción.</li>
            <li><strong>Equilibrio Ácido-Base:</strong> La determinación del pH en soluciones ácidas y básicas involucra el equilibrio de los ácidos y bases.</li>
            <li><strong>Reacciones Biológicas:</strong> Los sistemas enzimáticos y metabólicos en los organismos vivos se basan en principios de equilibrio químico.</li>
        </ul>

        <h2>Conclusión</h2>
        <p>
            El equilibrio químico es un concepto central en la química que ayuda a entender cómo y por qué las reacciones químicas se producen y cómo se pueden controlar en sistemas industriales y biológicos. La comprensión del equilibrio químico permite predecir y optimizar la formación de productos en diversas aplicaciones.
        </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/s4ysyM9jsQU?si=JyLbr6q7pYPC3YZF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        tabla: `
            <h1>Tabla Periódica y Propiedades de los Elementos</h1>

        <h2>Introducción a la Tabla Periódica</h2>
        <p>
            La tabla periódica es una herramienta fundamental en química que organiza los elementos químicos en una estructura tabular basada en sus propiedades químicas y físicas. Fue desarrollada por Dmitri Mendeléyev en 1869 y ha sido actualizada con el tiempo para incluir todos los elementos conocidos.
        </p>

        <h2>Estructura de la Tabla Periódica</h2>
        <p>
            La tabla periódica está organizada en filas horizontales llamadas <strong>periodos</strong> y columnas verticales llamadas <strong>grupos</strong>. Los elementos están dispuestos de manera que los elementos con propiedades similares se alinean en columnas. La estructura básica incluye:
        </p>
        <ul>
            <li><strong>Grupos:</strong> Columnas de la tabla periódica que indican elementos con propiedades químicas similares. Ejemplos incluyen los metales alcalinos y los halógenos.</li>
            <li><strong>Periodos:</strong> Filas horizontales que representan el nivel de energía de los electrones en los átomos de los elementos.</li>
            <li><strong>Bloques:</strong> Divisiones basadas en la configuración electrónica de los elementos, como el bloque s, p, d, y f.</li>
        </ul>

        <h2>Propiedades de los Elementos</h2>
        <h3>Propiedades Físicas</h3>
        <p>
            Las propiedades físicas de los elementos incluyen características como el punto de fusión, el punto de ebullición, la densidad, y el estado de la materia a temperatura ambiente. Estas propiedades ayudan a clasificar los elementos en metales, no metales, y metaloides.
        </p>

        <h3>Propiedades Químicas</h3>
        <p>
            Las propiedades químicas describen la reactividad de los elementos y cómo interactúan con otros elementos. Incluyen la capacidad de formar compuestos, la electronegatividad, y la afinidad electrónica. Estas propiedades son cruciales para entender las reacciones químicas y la formación de compuestos.
        </p>

        <h3>Clasificación de los Elementos</h3>
        <p>
            Los elementos en la tabla periódica se clasifican en:
        </p>
        <ul>
            <li><strong>Metales:</strong> Generalmente buenos conductores de electricidad y calor, y tienen brillo metálico. Ejemplos incluyen el hierro (Fe) y el oro (Au).</li>
            <li><strong>No metales:</strong> Usualmente malos conductores de electricidad y calor. Incluyen gases como el oxígeno (O) y sólidos como el carbono (C).</li>
            <li><strong>Metaloides:</strong> Tienen propiedades intermedias entre metales y no metales. Ejemplos son el silicio (Si) y el boro (B).</li>
        </ul>

        <h2>Ejemplos de Elementos y sus Propiedades</h2>
        <h3>Hidrógeno (H)</h3>
        <p>
            El hidrógeno es el elemento más ligero y abundante en el universo. Es un gas a temperatura ambiente, incoloro, inodoro y altamente inflamable. Se encuentra en el grupo 1 de la tabla periódica.
        </p>

        <h3>Carbono (C)</h3>
        <p>
            El carbono es un elemento no metálico conocido por su capacidad para formar una gran variedad de compuestos. Se encuentra en el grupo 14 y puede formar enlaces simples, dobles y triples. Es fundamental para la química orgánica y la vida.
        </p>

        <h3>Oxígeno (O)</h3>
        <p>
            El oxígeno es un gas esencial para la respiración de los seres vivos y se encuentra en el grupo 16. Es un oxidante fuerte y es parte de muchas sustancias, incluidos el agua (H<sub>2</sub>O) y muchos minerales.
        </p>

        <h2>Conclusión</h2>
        <p>
            La tabla periódica es una herramienta esencial para los químicos que proporciona una visión organizada y sistemática de los elementos y sus propiedades. Entender la estructura y las propiedades de los elementos permite predecir cómo se comportarán en diversas reacciones químicas y aplicaciones.
        </p>
            <h2>Tabla Periódica</h2>
           <iframe width="560" height="315" src="https://www.youtube.com/embed/PsW0sGF5EBE?si=5S09FnSUMuyCPpCY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h2>Propiedades de los elemntos</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Gxev-X8AA3k?si=HNjHTm7kn9yG_xVW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        compuestosinorganicos: `
            <h1>Compuestos Inorgánicos</h1>

        <h2>Introducción a los Compuestos Inorgánicos</h2>
        <p>
            Los compuestos inorgánicos son sustancias químicas que no contienen enlaces carbono-hidrógeno (C-H) y no están basados principalmente en el carbono, a diferencia de los compuestos orgánicos. Estos compuestos incluyen una amplia variedad de sustancias, desde sales y minerales hasta ácidos y bases.
        </p>

        <h2>Clasificación de los Compuestos Inorgánicos</h2>
        <p>
            Los compuestos inorgánicos se pueden clasificar en varias categorías principales, cada una con propiedades y características únicas:
        </p>
        <ul>
            <li><strong>Óxidos:</strong> Compuestos formados por la combinación de oxígeno con otro elemento. Ejemplos incluyen el dióxido de carbono (CO<sub>2</sub>) y el óxido de hierro (FeO).</li>
            <li><strong>Ácidos:</strong> Sustancias que liberan iones de hidrógeno (H<sup>+</sup>) en solución acuosa. Ejemplos incluyen el ácido clorhídrico (HCl) y el ácido sulfúrico (H<sub>2</sub>SO<sub>4</sub>).</li>
            <li><strong>Bases:</strong> Sustancias que liberan iones hidroxilo (OH<sup>-</sup>) en solución acuosa. Ejemplos incluyen el hidróxido de sodio (NaOH) y el hidróxido de potasio (KOH).</li>
            <li><strong>Sales:</strong> Compuestos formados por la reacción entre un ácido y una base. Ejemplos incluyen el cloruro de sodio (NaCl) y el sulfato de calcio (CaSO<sub>4</sub>).</li>
            <li><strong>Haluros:</strong> Compuestos formados por la combinación de un elemento halógeno con otro elemento. Ejemplos incluyen el cloruro de potasio (KCl) y el bromuro de sodio (NaBr).</li>
            <li><strong>Compuestos de Coordinación:</strong> Compuestos que contienen un ion metálico central rodeado por moléculas o iones ligandos. Ejemplos incluyen el cloruro de tetramminocobre (II) ([Cu(NH<sub>3</sub>)<sub>4</sub>]Cl<sub>2</sub>) y el complejo de hemoglobina.</li>
        </ul>

        <h2>Propiedades de los Compuestos Inorgánicos</h2>
        <h3>Propiedades Físicas</h3>
        <p>
            Las propiedades físicas de los compuestos inorgánicos pueden variar ampliamente, pero a menudo incluyen características como:
        </p>
        <ul>
            <li><strong>Estado de la Materia:</strong> Los compuestos inorgánicos pueden ser sólidos, líquidos o gases a temperatura ambiente.</li>
            <li><strong>Punto de Fusión y Ebullición:</strong> Los compuestos inorgánicos pueden tener puntos de fusión y ebullición muy altos o bajos, dependiendo de su estructura.</li>
            <li><strong>Solubilidad:</strong> La solubilidad en agua u otros solventes puede variar; por ejemplo, muchas sales son solubles en agua.</li>
        </ul>

        <h3>Propiedades Químicas</h3>
        <p>
            Las propiedades químicas de los compuestos inorgánicos incluyen:
        </p>
        <ul>
            <li><strong>Reactividad:</strong> La reactividad puede ser alta o baja dependiendo del tipo de compuesto y las condiciones de la reacción.</li>
            <li><strong>Acidez y Basicidad:</strong> Los ácidos y bases tienen propiedades opuestas y son fundamentales para muchas reacciones químicas.</li>
            <li><strong>Formación de Sales:</strong> Los ácidos y las bases reaccionan para formar sales y agua en una reacción de neutralización.</li>
        </ul>

        <h2>Ejemplos de Compuestos Inorgánicos</h2>
        <h3>Agua (H<sub>2</sub>O)</h3>
        <p>
            El agua es un compuesto inorgánico esencial para la vida. Es un líquido incoloro e inodoro a temperatura ambiente y tiene un punto de ebullición de 100°C. El agua es un solvente universal y participa en numerosas reacciones químicas.
        </p>

        <h3>Cloruro de Sodio (NaCl)</h3>
        <p>
            El cloruro de sodio, conocido comúnmente como sal de mesa, es un sólido cristalino que se disuelve fácilmente en agua. Es un ejemplo de una sal que se forma por la reacción entre un ácido (ácido clorhídrico) y una base (hidróxido de sodio).
        </p>

        <h3>Ácido Sulfúrico (H<sub>2</sub>SO<sub>4</sub>)</h3>
        <p>
            El ácido sulfúrico es un ácido fuerte y corrosivo, ampliamente utilizado en la industria química. Es un líquido viscoso e incoloro y es fundamental en la fabricación de fertilizantes y otros productos químicos.
        </p>

        <h2>Conclusión</h2>
        <p>
            Los compuestos inorgánicos abarcan una amplia gama de sustancias con propiedades físicas y químicas diversas. Comprender sus clasificaciones y propiedades es esencial para su uso en aplicaciones industriales, científicas y cotidianas.
        </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Jv9CpoR21nk?si=nxADj9Wym0q6MHkA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        reacciones: `
            <h1>Reacciones de Oxidación-Reducción</h1>

        <h2>Introducción</h2>
        <p>
            Las reacciones de oxidación-reducción, también conocidas como reacciones redox, son un tipo de reacción química en la que se produce una transferencia de electrones entre dos sustancias. En estas reacciones, una sustancia se oxida (pierde electrones) mientras que otra se reduce (gana electrones). Estas reacciones son fundamentales en numerosos procesos químicos y biológicos.
        </p>

        <h2>Conceptos Clave</h2>
        <h3>Oxidación</h3>
        <p>
            La oxidación es el proceso mediante el cual una sustancia pierde electrones. Al perder electrones, la sustancia se vuelve más positiva. Un ejemplo común de oxidación es la reacción del hierro con oxígeno para formar óxido de hierro (herrumbre).
        </p>

        <h3>Reducción</h3>
        <p>
            La reducción es el proceso opuesto, en el que una sustancia gana electrones. Al ganar electrones, la sustancia se vuelve más negativa. Por ejemplo, en la reducción del ion de cobre (II) a cobre metálico, el ion gana electrones y se convierte en cobre sólido.
        </p>

        <h2>Cómo Identificar una Reacción Redox</h2>
        <p>
            Para identificar si una reacción es una redox, sigue estos pasos:
        </p>
        <ol>
            <li><strong>Determina los números de oxidación:</strong> Asigna números de oxidación a cada elemento en los reactivos y productos.</li>
            <li><strong>Identifica los cambios en los números de oxidación:</strong> Un aumento en el número de oxidación indica oxidación, mientras que una disminución indica reducción.</li>
            <li><strong>Equilibra la reacción:</strong> Asegúrate de que la cantidad de electrones perdidos en la oxidación sea igual a la cantidad de electrones ganados en la reducción.</li>
        </ol>

        <h2>Ejemplo de Reacción Redox</h2>
        <p>
            Considera la siguiente reacción:
        </p>
        <p>
            \[ \text{2Na} + \text{Cl}_2 \rightarrow \text{2NaCl} \]
        </p>
        <p>
            En esta reacción, el sodio (Na) se oxida al perder electrones y formar \(\text{Na}^+\), mientras que el cloro (Cl) se reduce al ganar electrones y formar \(\text{Cl}^-\). Los números de oxidación cambian como sigue:
        </p>
        <ul>
            <li>El sodio pasa de 0 a +1 (oxidación).</li>
            <li>El cloro pasa de 0 a -1 (reducción).</li>
        </ul>
        <p>
            Esta transferencia de electrones es característica de las reacciones redox.
        </p>

        <h2>Importancia de las Reacciones Redox</h2>
        <p>
            Las reacciones de oxidación-reducción son esenciales en numerosos procesos químicos y biológicos. Algunos ejemplos incluyen:
        </p>
        <ul>
            <li><strong>Respiración celular:</strong> Las células utilizan reacciones redox para obtener energía al descomponer glucosa.</li>
            <li><strong>Corrosión:</strong> La oxidación del hierro en presencia de agua y oxígeno produce óxido de hierro.</li>
            <li><strong>Electrólisis:</strong> La separación de compuestos mediante la aplicación de una corriente eléctrica involucra reacciones redox.</li>
        </ul>

        <h2>Conclusión</h2>
        <p>
            Las reacciones de oxidación-reducción son una parte fundamental de la química y tienen una amplia gama de aplicaciones en la industria, la biología y la vida cotidiana. Comprender cómo funcionan estas reacciones ayuda a explicar muchos fenómenos químicos y biológicos.
        </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/DbJJsf2qsFM?si=np7LWLiEUBLaBO26" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        acidos: `
            <h1>Ácidos, Bases y Sales</h1>

        <h2>Introducción</h2>
        <p>
            Los ácidos, bases y sales son tres tipos fundamentales de compuestos químicos que tienen propiedades distintas y juegan un papel importante en muchas reacciones químicas y procesos biológicos. Cada uno tiene características particulares que los definen y los distinguen de los demás.
        </p>

        <h2>Ácidos</h2>
        <p>
            Los ácidos son compuestos que, en solución acuosa, liberan iones de hidrógeno (H<sup>+</sup>) o protones. Tienen un sabor ácido, son corrosivos y pueden cambiar el color de ciertos indicadores. Los ácidos tienen un pH menor a 7. Ejemplos comunes incluyen:
        </p>
        <ul>
            <li><strong>Ácido clorhídrico (HCl):</strong> Encontrado en el jugo gástrico del estómago y usado en limpieza industrial.</li>
            <li><strong>Ácido acético (CH<sub>3</sub>COOH):</strong> Principal componente del vinagre.</li>
            <li><strong>Ácido sulfúrico (H<sub>2</sub>SO<sub>4</sub>):</strong> Usado en baterías y procesos industriales.</li>
        </ul>

        <h2>Base</h2>
        <p>
            Las bases son compuestos que, en solución acuosa, liberan iones hidroxilo (OH<sup>−</sup>). Tienen un sabor amargo, una textura resbaladiza y pueden cambiar el color de ciertos indicadores. Las bases tienen un pH mayor a 7. Ejemplos comunes incluyen:
        </p>
        <ul>
            <li><strong>Hidróxido de sodio (NaOH):</strong> Conocido como sosa cáustica, se usa en la fabricación de jabones.</li>
            <li><strong>Hidróxido de potasio (KOH):</strong> Utilizado en fertilizantes y productos de limpieza.</li>
            <li><strong>Ammoníaco (NH<sub>3</sub>):</strong> Usado en productos de limpieza y como fertilizante.</li>
        </ul>

        <h2>Sales</h2>
        <p>
            Las sales son compuestos iónicos formados por la reacción entre un ácido y una base. En solución acuosa, las sales se disocian en iones positivos y negativos. Son neutras en pH y tienen una amplia variedad de usos. Ejemplos comunes incluyen:
        </p>
        <ul>
            <li><strong>Cloruro de sodio (NaCl):</strong> También conocido como sal de mesa, usado en la alimentación y conservación de alimentos.</li>
            <li><strong>Carbonato de calcio (CaCO<sub>3</sub>):</strong> Presente en la piedra caliza y utilizado en la construcción y como suplemento dietético.</li>
            <li><strong>Sulfato de cobre (CuSO<sub>4</sub>):</strong> Usado en agricultura y como reactivo en laboratorios.</li>
        </ul>

        <h2>Propiedades Ácidos y Bases</h2>
        <p>
            Las propiedades de los ácidos y las bases se pueden describir de la siguiente manera:
        </p>
        <ul>
            <li><strong>Ácidos:</strong>
                <ul>
                    <li>Libera iones H<sup>+</sup> en solución.</li>
                    <li>Reaccionan con metales para liberar hidrógeno.</li>
                    <li>Cambian el color de los indicadores (ej., tornasol rojo).</li>
                </ul>
            </li>
            <li><strong>Bases:</strong>
                <ul>
                    <li>Libera iones OH<sup>−</sup> en solución.</li>
                    <li>Reaccionan con ácidos para formar sales y agua.</li>
                    <li>Cambian el color de los indicadores (ej., tornasol azul).</li>
                </ul>
            </li>
        </ul>

        <h2>Reacciones Ácido-Base</h2>
        <p>
            La reacción entre un ácido y una base se denomina neutralización, y produce una sal y agua. La ecuación general para esta reacción es:
        </p>
        <p>
            <strong>Ácido + Base → Sal + Agua</strong>
        </p>
        <p>
            Ejemplo:
        </p>
        <p>
            <strong>HCl (ácido clorhídrico) + NaOH (hidróxido de sodio) → NaCl (cloruro de sodio) + H<sub>2</sub>O (agua)</strong>
        </p>

        <h2>Conclusión</h2>
        <p>
            Los ácidos, bases y sales son compuestos químicos con propiedades y reacciones distintas pero interrelacionadas. Comprender estos compuestos y sus comportamientos es esencial en química y tiene aplicaciones en la industria, la medicina y la vida cotidiana.
        </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/EK0_B-XLDkM?si=t6aMoZgEERT0xSeN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        coordinacion: `
            <h1>Compuestos de Coordinación</h1>

        <h2>Introducción</h2>
        <p>
            Los compuestos de coordinación, también conocidos como complejos, son sustancias químicas que consisten en un átomo o ion central, generalmente un metal de transición, rodeado por un número variable de moléculas o iones llamados ligandos. Los ligandos están unidos al metal central mediante enlaces coordinados, en los que ambos electrones del enlace provienen del ligando.
        </p>

        <h2>Estructura de los Compuestos de Coordinación</h2>
        <p>
            La estructura de un compuesto de coordinación se puede describir a través de los siguientes componentes:
        </p>
        <ul>
            <li><strong>Átomo o Ion Central:</strong> Generalmente un metal de transición que actúa como el centro de coordinación. Ejemplos incluyen hierro (Fe), cobre (Cu), y platino (Pt).</li>
            <li><strong>Ligandos:</strong> Moléculas o iones que se unen al átomo central. Pueden ser monodentados (conectan al metal en un solo punto) o polidentados (conectan en varios puntos). Ejemplos de ligandos incluyen el agua (H<sub>2</sub>O), el cloruro (Cl<sup>−</sup>), y el amoníaco (NH<sub>3</sub>).</li>
            <li><strong>Número de Coordinación:</strong> El número de ligandos que se unen al átomo central. Suele variar entre 2 y 6, dependiendo del metal y los ligandos presentes.</li>
        </ul>

        <h2>Ejemplos de Compuestos de Coordinación</h2>
        <p>
            Algunos ejemplos comunes de compuestos de coordinación incluyen:
        </p>
        <ul>
            <li><strong>Hexaamminecobalto(III) cloruro (Co(NH<sub>3</sub>)<sub>6</sub>Cl<sub>3</sub>):</strong> Donde el cobalto está coordinado con seis moléculas de amoníaco.</li>
            <li><strong>Cloruro de tetracloroplatinato(II) (PtCl<sub>4</sub><sup>2−</sup>):</strong> Donde el platino está coordinado con cuatro iones cloruro.</li>
            <li><strong>Complejo de hexaquincromato(III) (Cr(H<sub>2</sub>O)<sub>6</sub><sup>3+</sup>):</strong> Donde el cromo está coordinado con seis moléculas de agua.</li>
        </ul>

        <h2>Propiedades de los Compuestos de Coordinación</h2>
        <p>
            Los compuestos de coordinación presentan propiedades distintivas debido a la presencia del metal central y los ligandos. Estas propiedades incluyen:
        </p>
        <ul>
            <li><strong>Colores Vivos:</strong> Muchos compuestos de coordinación tienen colores brillantes debido a las transiciones electrónicas dentro del campo del metal central.</li>
            <li><strong>Actividades Catalíticas:</strong> Algunos compuestos de coordinación son eficaces como catalizadores en reacciones químicas, como el complejo de hierro en la catalización de la oxidación.</li>
            <li><strong>Solubilidad:</strong> La solubilidad de los compuestos de coordinación puede variar ampliamente dependiendo de los ligandos y el metal central.</li>
        </ul>

        <h2>Aplicaciones de los Compuestos de Coordinación</h2>
        <p>
            Los compuestos de coordinación tienen diversas aplicaciones prácticas:
        </p>
        <ul>
            <li><strong>Medicina:</strong> Algunos complejos metálicos se utilizan en tratamientos médicos, como el cisplatino en la quimioterapia para tratar cáncer.</li>
            <li><strong>Industria:</strong> Se emplean en procesos catalíticos y en la síntesis de productos químicos.</li>
            <li><strong>Materiales de Color:</strong> Los compuestos de coordinación se usan para fabricar tintes y pigmentos.</li>
        </ul>

        <h2>Conclusión</h2>
        <p>
            Los compuestos de coordinación son una clase fundamental de sustancias químicas con aplicaciones en muchos campos, incluyendo la medicina, la industria y la ciencia de materiales. Su estructura y propiedades únicas los hacen esenciales en química y otras disciplinas relacionadas.
        </p>
           <iframe width="560" height="315" src="https://www.youtube.com/embed/6jWVNN5YJHg?si=iKGuXgXPYPpiWMDJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        hidrocarburos: `
            <h1>Hidrocarburos</h1>

        <h2>Introducción</h2>
        <p>
            Los hidrocarburos son compuestos orgánicos que consisten únicamente en átomos de carbono e hidrógeno. Son la base de la química orgánica y se encuentran en una amplia variedad de sustancias naturales y sintéticas. Los hidrocarburos se dividen en dos categorías principales: hidrocarburos saturados e insaturados.
        </p>

        <h2>Hidrocarburos Saturados</h2>
        <p>
            Los hidrocarburos saturados, también conocidos como alcanos, tienen enlaces simples entre los átomos de carbono. Su fórmula general es C<sub>n</sub>H<sub>2n+2</sub>. Los alcanos son compuestos relativamente estables y menos reactivos en comparación con los hidrocarburos insaturados.
        </p>
        <p>
            Ejemplos de hidrocarburos saturados incluyen:
        </p>
        <ul>
            <li><strong>Metano (CH<sub>4</sub>):</strong> El hidrocarburo más simple, utilizado como combustible.</li>
            <li><strong>Etano (C<sub>2</sub>H<sub>6</sub>):</strong> Usado en la industria química para la producción de etileno.</li>
            <li><strong>Propano (C<sub>3</sub>H<sub>8</sub>):</strong> Utilizado como gas de cocina y en calefacción.</li>
            <li><strong>Butano (C<sub>4</sub>H<sub>10</sub>):</strong> Componente común en los encendedores y como refrigerante.</li>
        </ul>

        <h2>Hidrocarburos Insaturados</h2>
        <p>
            Los hidrocarburos insaturados contienen uno o más enlaces dobles o triples entre los átomos de carbono. Se dividen en dos categorías:
        </p>
        <ul>
            <li><strong>Alquenos:</strong> Hidrocarburos con al menos un enlace doble carbono-carbono. Su fórmula general es C<sub>n</sub>H<sub>2n</sub>. Ejemplos incluyen:
                <ul>
                    <li><strong>Etileno (C<sub>2</sub>H<sub>4</sub>):</strong> Utilizado en la producción de plásticos y como regulador de maduración de frutas.</li>
                    <li><strong>Propileno (C<sub>3</sub>H<sub>6</sub>):</strong> Usado en la fabricación de polímeros y productos químicos.</li>
                </ul>
            </li>
            <li><strong>Alquinos:</strong> Hidrocarburos con al menos un enlace triple carbono-carbono. Su fórmula general es C<sub>n</sub>H<sub>2n−2</sub>. Ejemplos incluyen:
                <ul>
                    <li><strong>Acetileno (C<sub>2</sub>H<sub>2</sub>):</strong> Utilizado en soldadura y corte de metales.</li>
                    <li><strong>Propino (C<sub>3</sub>H<sub>4</sub>):</strong> Empleado en la industria química.</li>
                </ul>
            </li>
        </ul>

        <h2>Isomería en Hidrocarburos</h2>
        <p>
            Los hidrocarburos pueden exhibir isomería, donde compuestos con la misma fórmula molecular tienen diferentes estructuras. Los isómeros pueden tener diferentes propiedades físicas y químicas, a pesar de tener la misma fórmula química.
        </p>

        <h2>Propiedades de los Hidrocarburos</h2>
        <p>
            Las propiedades de los hidrocarburos incluyen:
        </p>
        <ul>
            <li><strong>Punto de ebullición y fusión:</strong> Aumenta con el tamaño de la molécula y la complejidad de la estructura.</li>
            <li><strong>Solubilidad:</strong> Los hidrocarburos son generalmente no solubles en agua, pero solubles en solventes orgánicos como el éter y el cloroformo.</li>
            <li><strong>Reactividad:</strong> Los hidrocarburos saturados son menos reactivos que los insaturados, que pueden participar en reacciones de adición y polimerización.</li>
        </ul>

        <h2>Aplicaciones de los Hidrocarburos</h2>
        <p>
            Los hidrocarburos tienen una amplia gama de aplicaciones:
        </p>
        <ul>
            <li><strong>Combustibles:</strong> Los alcanos como el metano, propano y butano se utilizan como combustibles para calefacción, transporte y generación de energía.</li>
            <li><strong>Industria Química:</strong> Los hidrocarburos insaturados como el etileno y el propileno son fundamentales en la fabricación de plásticos y productos químicos.</li>
            <li><strong>Solventes:</strong> Muchos hidrocarburos se utilizan como solventes en productos de limpieza y en la industria farmacéutica.</li>
        </ul>

        <h2>Conclusión</h2>
        <p>
            Los hidrocarburos son compuestos orgánicos fundamentales que juegan un papel crucial en la química orgánica y en diversas aplicaciones industriales. Su clasificación en saturados e insaturados, junto con sus propiedades y aplicaciones, subraya su importancia en la ciencia y la tecnología.
        </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/itVIgu2WAU8?si=mHa2Il-e77thVeE_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        funcionales: `
            <h1>Grupos Funcionales</h1>

        <h2>Introducción</h2>
        <p>
            Los grupos funcionales son conjuntos de átomos que se encuentran en una molécula orgánica y que determinan las propiedades químicas y reactivas de los compuestos en los que están presentes. Son esenciales para la clasificación de los compuestos orgánicos y para entender su comportamiento en reacciones químicas.
        </p>

        <h2>Principales Grupos Funcionales</h2>

        <h3>1. Hidroxilo (-OH)</h3>
        <p>
            El grupo hidroxilo es característico de los alcoholes. Su presencia en una molécula convierte a los compuestos en alcoholes, que son solubles en agua y tienen propiedades de hidratación.
        </p>
        <p>
            Ejemplo:
            <ul>
                <li><strong>Etanol (C<sub>2</sub>H<sub>5</sub>OH):</strong> Comúnmente conocido como alcohol etílico, utilizado en bebidas alcohólicas y como solvente.</li>
            </ul>
        </p>

        <h3>2. Carbonilo (C=O)</h3>
        <p>
            El grupo carbonilo se encuentra en cetonas y aldehídos. Este grupo es fundamental en la química de las cetonas y aldehídos, donde el carbono está unido a un doble enlace con oxígeno.
        </p>
        <p>
            Ejemplos:
            <ul>
                <li><strong>Aldehído:</strong> Formaldehído (HCHO), utilizado en la fabricación de plásticos y conservantes.</li>
                <li><strong>Cetona:</strong> Acetona (CH<sub>3</sub>COCH<sub>3</sub>), un solvente común en la industria y en productos de belleza.</li>
            </ul>
        </p>

        <h3>3. Carboxilo (-COOH)</h3>
        <p>
            El grupo carboxilo es característico de los ácidos carboxílicos. Este grupo contiene un grupo carbonilo y un grupo hidroxilo, lo que confiere acidez a los compuestos.
        </p>
        <p>
            Ejemplo:
            <ul>
                <li><strong>Ácido acético (CH<sub>3</sub>COOH):</strong> Conocido como vinagre, utilizado en cocina y conservación de alimentos.</li>
            </ul>
        </p>

        <h3>4. Amino (-NH<sub>2</sub>)</h3>
        <p>
            El grupo amino es característico de las aminas y los aminoácidos. Este grupo contiene un átomo de nitrógeno unido a dos átomos de hidrógeno.
        </p>
        <p>
            Ejemplo:
            <ul>
                <li><strong>Glicina (NH<sub>2</sub>CH<sub>2</sub>COOH):</strong> El aminoácido más simple, esencial en la biosíntesis de proteínas.</li>
            </ul>
        </p>

        <h3>5. Ester (-COO-)</h3>
        <p>
            El grupo éster se encuentra en los esteres, que son formados por la reacción entre un ácido y un alcohol. Los ésteres son conocidos por sus aromas agradables y se utilizan en fragancias y sabores.
        </p>
        <p>
            Ejemplo:
            <ul>
                <li><strong>Acetato de etilo (CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>3</sub>):</strong> Utilizado en la fabricación de aromas y disolventes.</li>
            </ul>
        </p>

        <h3>6. Nitro (-NO<sub>2</sub>)</h3>
        <p>
            El grupo nitro está presente en compuestos como los nitrocompuestos. Es conocido por su reactividad y se usa en la fabricación de explosivos y colorantes.
        </p>
        <p>
            Ejemplo:
            <ul>
                <li><strong>Trinitrotolueno (TNT):</strong> Un potente explosivo utilizado en minería y demolición.</li>
            </ul>
        </p>

        <h2>Importancia de los Grupos Funcionales</h2>
        <p>
            Los grupos funcionales son cruciales para la química orgánica porque determinan las propiedades químicas y físicas de los compuestos. Además, su presencia permite la clasificación de compuestos en diferentes categorías, facilitando el estudio y la comprensión de sus reacciones y aplicaciones.
        </p>

        <h2>Conclusión</h2>
        <p>
            Los grupos funcionales juegan un papel fundamental en la química orgánica, proporcionando las bases para la clasificación y el estudio de compuestos. Conocer y entender estos grupos es esencial para trabajar con compuestos orgánicos y para explorar sus reacciones y aplicaciones en la industria y en la vida cotidiana.
        </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/E9NOL1c7EOg?si=xOLPbLlrm3m9AGTf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        reaccionesorganicas: `
            <h1>Reacciones Orgánicas</h1>

        <h2>Introducción</h2>
        <p>
            Las reacciones orgánicas son procesos químicos que involucran compuestos orgánicos. Estas reacciones son fundamentales para la química orgánica y se utilizan para sintetizar, transformar y analizar una amplia variedad de compuestos. La comprensión de las reacciones orgánicas es crucial para la industria química, farmacéutica y en la investigación científica.
        </p>

        <h2>Principales Tipos de Reacciones Orgánicas</h2>

        <h3>1. Reacciones de Adición</h3>
        <p>
            En las reacciones de adición, dos o más moléculas se combinan para formar un producto con más átomos que los reactivos. Estas reacciones son comunes en compuestos insaturados como los alquenos y alquinos.
        </p>
        <p>
            Ejemplo:
            <ul>
                <li><strong>Adición de hidrógeno a un alqueno:</strong>
                    <br>
                    \[ \text{R-CH=CH}_2 + \text{H}_2 \rightarrow \text{R-CH}_2\text{-CH}_3 \]
                    <br>
                    El eteno (etileno) se convierte en etano tras la adición de hidrógeno.
                </li>
            </ul>
        </p>

        <h3>2. Reacciones de Sustitución</h3>
        <p>
            En las reacciones de sustitución, un átomo o grupo de átomos en una molécula es reemplazado por otro átomo o grupo de átomos. Estas reacciones son típicas en compuestos saturados como los alcanos.
        </p>
        <p>
            Ejemplo:
            <ul>
                <li><strong>Sustitución de cloro en un alcano:</strong>
                    <br>
                    \[ \text{CH}_4 + \text{Cl}_2 \rightarrow \text{CH}_3\text{Cl} + \text{HCl} \]
                    <br>
                    El metano se convierte en clorometano y se libera ácido clorhídrico.
                </li>
            </ul>
        </p>

        <h3>3. Reacciones de Eliminación</h3>
        <p>
            Las reacciones de eliminación implican la eliminación de átomos o grupos de átomos de una molécula, resultando en la formación de un doble enlace o triple enlace. Estas reacciones son comunes en la formación de alquenos y alquinos.
        </p>
        <p>
            Ejemplo:
            <ul>
                <li><strong>Eliminación de agua para formar un alqueno:</strong>
                    <br>
                    \[ \text{R-CH}_2\text{-CH}_2\text{-OH} \rightarrow \text{R-CH=CH}_2 + \text{H}_2\text{O} \]
                    <br>
                    El etanol se deshidrata para formar eteno.
                </li>
            </ul>
        </p>

        <h3>4. Reacciones de Rearreglo</h3>
        <p>
            En las reacciones de rearreglo, la estructura de una molécula se reorganiza para formar un isómero diferente. Estos cambios pueden involucrar la reubicación de átomos o grupos dentro de la molécula.
        </p>
        <p>
            Ejemplo:
            <ul>
                <li><strong>Reacción de rearrangement de Beckmann:</strong>
                    <br>
                    \[ \text{R-C=O-NH}_2 \rightarrow \text{R-C=O-NH-R} \]
                    <br>
                    La oxima se transforma en una amida cíclica.
                </li>
            </ul>
        </p>

        <h2>Importancia de las Reacciones Orgánicas</h2>
        <p>
            Las reacciones orgánicas son cruciales en la síntesis de nuevos compuestos y materiales, en la fabricación de productos farmacéuticos, en la producción de plásticos, y en numerosos procesos industriales. Entender estos mecanismos ayuda a desarrollar nuevos productos y mejorar las técnicas de producción.
        </p>

        <h2>Conclusión</h2>
        <p>
            Las reacciones orgánicas son un pilar fundamental en la química orgánica, permitiendo la transformación y síntesis de compuestos diversos. La clasificación y el entendimiento de estas reacciones facilitan el avance en la ciencia y la industria, ofreciendo soluciones innovadoras a problemas químicos y materiales.
        </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/HsaeRfTIW2E?si=F9C-hVEnapsRli75" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        isomeria: `
            <h1>Isomería</h1>

        <h2>Introducción</h2>
        <p>
            La isomería es un fenómeno en química orgánica donde dos o más compuestos tienen la misma fórmula molecular pero diferentes estructuras o arreglos espaciales. Estos compuestos se denominan isómeros y pueden tener propiedades químicas y físicas distintas, a pesar de tener la misma composición atómica.
        </p>

        <h2>Tipos de Isomería</h2>

        <h3>1. Isomería Estructural (o de Constitución)</h3>
        <p>
            La isomería estructural ocurre cuando los isómeros tienen diferentes estructuras de enlace. Es decir, los átomos están conectados de manera diferente en las moléculas. Hay varios subtipos de isomería estructural:
        </p>
        <ul>
            <li><strong>Isomería de Cadenas:</strong> Diferente disposición de la cadena de carbonos.</li>
            <li><strong>Isomería de Posición:</strong> Diferente posición de un grupo funcional o sustituyente en la cadena de carbonos.</li>
            <li><strong>Isomería de Función:</strong> Diferente grupo funcional presente en la molécula.</li>
            <li><strong>Isomería de Tautomería:</strong> Equilibrio entre dos o más estructuras diferentes de una molécula.</li>
        </ul>

        <h3>2. Isomería Geométrica (o Cis-Trans)</h3>
        <p>
            La isomería geométrica se da en compuestos con dobles enlaces o en ciclos, donde los grupos o átomos pueden tener diferentes posiciones en el espacio en relación con el doble enlace o el ciclo. Esta isomería afecta la geometría de la molécula y sus propiedades físicas.
        </p>
        <ul>
            <li><strong>Cis:</strong> Los grupos similares están en el mismo lado del doble enlace o del ciclo.</li>
            <li><strong>Trans:</strong> Los grupos similares están en lados opuestos del doble enlace o del ciclo.</li>
        </ul>

        <h3>3. Isomería Óptica (o Enantiomería)</h3>
        <p>
            La isomería óptica ocurre en moléculas que son imágenes especulares no superponibles entre sí, llamadas enantiómeros. Estos isómeros tienen la capacidad de desviar la luz polarizada en direcciones opuestas.
        </p>
        <ul>
            <li><strong>Enantiómeros:</strong> Isómeros ópticos que son imágenes especulares no superponibles.</li>
            <li><strong>Diastéreoisómeros:</strong> Isómeros ópticos que no son imágenes especulares entre sí.</li>
        </ul>

        <h2>Ejemplos de Isomería</h2>

        <h3>Isomería Estructural</h3>
        <p>
            Ejemplo: La butanol tiene diferentes formas estructurales:
            <ul>
                <li><strong>1-Butanol:</strong> \[ \text{CH}_3\text{CH}_2\text{CH}_2\text{CH}_2\text{OH} \]</li>
                <li><strong>2-Butanol:</strong> \[ \text{CH}_3\text{CH}_2\text{CH(OH)CH}_2\text{CH}_3 \]</li>
            </ul>
        </p>

        <h3>Isomería Geométrica</h3>
        <p>
            Ejemplo: El buteno tiene dos isómeros geométricos:
            <ul>
                <li><strong>Cis-2-buteno:</strong> Los grupos metilo están en el mismo lado del doble enlace.</li>
                <li><strong>Trans-2-buteno:</strong> Los grupos metilo están en lados opuestos del doble enlace.</li>
            </ul>
        </p>

        <h3>Isomería Óptica</h3>
        <p>
            Ejemplo: El ácido láctico tiene dos enantiómeros:
            <ul>
                <li><strong>Ácido L-(+)-láctico:</strong> Desvía la luz polarizada a la derecha.</li>
                <li><strong>Ácido D-(-)-láctico:</strong> Desvía la luz polarizada a la izquierda.</li>
            </ul>
        </p>

        <h2>Conclusión</h2>
        <p>
            La isomería es una característica fundamental de la química orgánica, ya que los isómeros pueden tener propiedades físicas y químicas diferentes. Entender los diferentes tipos de isomería ayuda a los químicos a diseñar y manipular compuestos con propiedades específicas para aplicaciones en investigación y en la industria.
        </p>
           <iframe width="560" height="315" src="https://www.youtube.com/embed/eo74arGaQ-A?si=dbNWMWmEA1r9bVKb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        polimeros: `
            <h1>Polímeros</h1>

        <h2>Introducción</h2>
        <p>
            Los polímeros son macromoléculas formadas por la repetición de unidades estructurales más pequeñas llamadas monómeros. Estas grandes moléculas tienen propiedades únicas debido a su tamaño y a la disposición de sus monómeros, lo que les permite ser utilizados en una amplia gama de aplicaciones industriales, tecnológicas y biológicas.
        </p>

        <h2>Tipos de Polímeros</h2>

        <h3>1. Polímeros Naturales</h3>
        <p>
            Los polímeros naturales se encuentran en la naturaleza y son esenciales para los seres vivos. Incluyen:
        </p>
        <ul>
            <li><strong>Proteínas:</strong> Formadas por aminoácidos. Ejemplos incluyen la queratina y la colágeno.</li>
            <li><strong>Ácidos Nucleicos:</strong> ADN y ARN, formados por nucleótidos.</li>
            <li><strong>Polisacáridos:</strong> Como el almidón y la celulosa, formados por monosacáridos.</li>
        </ul>

        <h3>2. Polímeros Sintéticos</h3>
        <p>
            Los polímeros sintéticos son creados artificialmente a través de procesos químicos. Se dividen en dos grandes categorías:
        </p>
        <ul>
            <li><strong>Polímeros Termoplásticos:</strong> Se funden al calentarse y se solidifican al enfriarse. Ejemplos incluyen el polietileno y el polipropileno.</li>
            <li><strong>Polímeros Termoestables:</strong> Se curan mediante un proceso químico que los hace rígidos y no fundibles. Ejemplos incluyen la baquelita y los epóxidos.</li>
        </ul>

        <h3>3. Polímeros Semi-Sintéticos</h3>
        <p>
            Estos polímeros se crean modificando los polímeros naturales. Ejemplos incluyen el rayon, derivado de la celulosa, y el acetato de celulosa.
        </p>

        <h2>Propiedades de los Polímeros</h2>
        <p>
            Los polímeros exhiben una variedad de propiedades que dependen de su estructura y composición, tales como:
        </p>
        <ul>
            <li><strong>Resistencia:</strong> Muchos polímeros tienen alta resistencia mecánica, química y térmica.</li>
            <li><strong>Elasticidad:</strong> La capacidad de estirarse y volver a su forma original.</li>
            <li><strong>Conductividad:</strong> Algunos polímeros son conductores de electricidad, mientras que otros son aislantes.</li>
            <li><strong>Flexibilidad:</strong> Los polímeros pueden ser flexibles o rígidos dependiendo de su estructura.</li>
        </ul>

        <h2>Aplicaciones de los Polímeros</h2>
        <p>
            Los polímeros se utilizan en una variedad de aplicaciones, incluyendo:
        </p>
        <ul>
            <li><strong>Industria Textil:</strong> Fabricación de ropa, telas y fibras.</li>
            <li><strong>Medicina:</strong> Materiales para implantes, prótesis y dispositivos médicos.</li>
            <li><strong>Construcción:</strong> Materiales como tuberías, revestimientos y aislantes.</li>
            <li><strong>Embalaje:</strong> Plásticos para empaques y envases.</li>
        </ul>

        <h2>Ejemplos de Polímeros Comunes</h2>

        <h3>1. Polietileno (PE)</h3>
        <p>
            Utilizado en bolsas plásticas, envases y tuberías. Es conocido por su resistencia química y baja densidad.
        </p>

        <h3>2. Polipropileno (PP)</h3>
        <p>
            Utilizado en empaques, textiles y componentes automotrices. Destaca por su alta resistencia y dureza.
        </p>

        <h3>3. Nylon</h3>
        <p>
            Usado en textiles, cuerdas y piezas mecánicas. Es conocido por su resistencia a la abrasión y elasticidad.
        </p>

        <h2>Conclusión</h2>
        <p>
            Los polímeros son esenciales en la vida cotidiana y en múltiples industrias debido a sus versátiles propiedades y aplicaciones. Desde productos naturales hasta sintéticos, los polímeros continúan siendo un área de innovación y desarrollo en la química y la ingeniería de materiales.
        </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/GrPqU2dzk9Y?si=aNBS2QdcD4ke0kOy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `
    };
    // Muestra el contenido correspondiente
    const contentSection = document.getElementById('course-content');
    contentSection.innerHTML = content[contentId] || '<p>Seleccione un tema del menú.</p>';
}

document.addEventListener('DOMContentLoaded', function() {
    const dropdownButtons = document.querySelectorAll('.dropdown-btn');
    const links = document.querySelectorAll('.dropdown-container a');

    // Manejar el clic en los botones de menú
    dropdownButtons.forEach(button => {
        button.addEventListener('click', function() {
            const dropdownContainer = this.nextElementSibling;
            const isVisible = dropdownContainer.style.display === 'block';

            // Ocultar todos los dropdowns
            document.querySelectorAll('.dropdown-container').forEach(container => {
                container.style.display = 'none';
            });

            // Mostrar el dropdown correspondiente
            dropdownContainer.style.display = isVisible ? 'none' : 'block';
        });
    });

    // Manejar el clic en los enlaces del menú
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const contentId = this.getAttribute('data-content');
            showContent(contentId);
        });
    });
});
