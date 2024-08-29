// Observador de intersección para animaciones
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
});

// Observa las tarjetas de características (si las tienes)
document.querySelectorAll('.feature-card').forEach(card => {
    observer.observe(card);
});

// Función para mostrar el contenido seleccionado
function showContent(contentId) {
    const content = {
        algebra: `
            <h2>Expresiones Algebraicas</h2>
            <p>una expresión algebraica es una expresión construida a partir de variables constantes y las operaciones algebraicas básicas: suma, resta, multiplicación y división.</p>
            <h2>Suma</h2>
            <p><strong>Identificación de Términos Semejantes</strong></p>
    <p>
        Primero, debes identificar los términos semejantes en las expresiones algebraicas. Los términos semejantes son aquellos que tienen las mismas variables elevadas a las mismas potencias. Por ejemplo, en la expresión <code>3x<sup>2</sup> + 5x - 2x<sup>2</sup> + 7</code>, los términos <code>3x<sup>2</sup></code> y <code>-2x<sup>2</sup></code> son semejantes porque ambos tienen <code>x<sup>2</sup></code>. Los términos <code>5x</code> y <code>7</code> no son semejantes entre sí ni con los otros términos.
    </p>

    <p><strong>Agrupación de Términos Semejantes</strong></p>
    <p>
        Luego, agrupa los términos semejantes. Esto significa sumar o restar los coeficientes (los números delante de las variables) de los términos semejantes. Así, para los términos <code>3x<sup>2</sup></code> y <code>-2x<sup>2</sup></code>, haces la siguiente operación:
    </p>
    <p>
        <code>3x<sup>2</sup> - 2x<sup>2</sup> = (3 - 2)x<sup>2</sup> = x<sup>2</sup></code>
    </p>
    <p>
        El término <code>5x</code> no tiene términos semejantes en esta expresión, por lo que queda igual. El número <code>7</code> también queda igual por la misma razón. Finalmente, combina los términos simplificados en una sola expresión. La expresión resultante sería: <code>x<sup>2</sup> + 5x + 7</code>
    </p>

    <p><strong>Ejemplo Adicional</strong></p>
    <p>
        Veamos otro ejemplo: Para sumar las expresiones <code>2a + 3b - a + 4b</code> y simplificarla, agrupa los términos semejantes:
    </p>
    <p>
        <code>(2a - a) + (3b + 4b) = a + 7b</code>
    </p>

    <p><strong>Otro Ejemplo</strong></p>
    <p>
        Y para la expresión <code>-3x<sup>2</sup> + 2x + 4 - (2x<sup>2</sup> - x - 5)</code>, primero distribuye el signo negativo:
    </p>
    <p>
        <code>-3x<sup>2</sup> + 2x + 4 - 2x<sup>2</sup> + x + 5</code>
    </p>
    <p>
        Luego agrupa los términos semejantes:
    </p>
    <p>
        <code>(-3x<sup>2</sup> - 2x<sup>2</sup>) + (2x + x) + (4 + 5) = -5x<sup>2</sup> + 3x + 9</code>
    </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/UJiUu8-fYgI?si=nzbrUj_iMsfK4G3M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h2>Resta</h2>
            <p><strong>Proceso para Restar Expresiones Algebraicas</strong></p>
    <p>
        Para restar expresiones algebraicas, sigues un proceso similar al de sumar, pero con una etapa adicional de distribución del signo negativo. Aquí está cómo hacerlo:
    </p>

    <p><strong>1. Identificación de Términos Semejantes</strong></p>
    <p>
        Primero, identifica los términos semejantes en ambas expresiones. Los términos semejantes tienen las mismas variables elevadas a las mismas potencias. Por ejemplo, si tienes la expresión <code>5x<sup>2</sup> - 3x + 7</code> y deseas restar <code>2x<sup>2</sup> + x - 4</code>, debes identificar que <code>5x<sup>2</sup></code> y <code>2x<sup>2</sup></code> son términos semejantes, así como <code>-3x</code> y <code>x</code>, y <code>7</code> y <code>-4</code>.
    </p>

    <p><strong>2. Distribución del Signo Negativo</strong></p>
    <p>
        Luego, distribuye el signo negativo a cada término de la segunda expresión que estás restando. En este caso, cambia el signo de cada término en <code>2x<sup>2</sup> + x - 4</code>:
    </p>
    <p>
        <code>-(2x<sup>2</sup> + x - 4) = -2x<sup>2</sup> - x + 4</code>
    </p>

    <p><strong>3. Suma de los Términos</strong></p>
    <p>
        Ahora, suma los términos de la primera expresión con los términos resultantes de la distribución del signo negativo:
    </p>
    <p>
        <code>5x<sup>2</sup> - 3x + 7 - 2x<sup>2</sup> - x + 4</code>
    </p>

    <p><strong>4. Agrupación y Simplificación</strong></p>
    <p>
        Agrupa los términos semejantes:
    </p>
    <p>
        <code>(5x<sup>2</sup> - 2x<sup>2</sup>) + (-3x - x) + (7 + 4)</code>
    </p>
    <p>
        Simplifica cada grupo:
    </p>
    <p>
        <code>3x<sup>2</sup> - 4x + 11</code>
    </p>
    <p>
        Así, la expresión simplificada es <code>3x<sup>2</sup> - 4x + 11</code>.
    </p>

    <p><strong>Otro Ejemplo</strong></p>
    <p>
        Para restar <code>4a<sup>2</sup> - 5ab + 6</code> y <code>2a<sup>2</sup> + 3ab - 1</code>:
    </p>

    <p><strong>1. Distribución del Signo Negativo</strong></p>
    <p>
        Distribuye el signo negativo a la segunda expresión:
    </p>
    <p>
        <code>-(2a<sup>2</sup> + 3ab - 1) = -2a<sup>2</sup> - 3ab + 1</code>
    </p>

    <p><strong>2. Suma de los Términos</strong></p>
    <p>
        Suma los términos de la primera expresión con los términos modificados:
    </p>
    <p>
        <code>4a<sup>2</sup> - 5ab + 6 - 2a<sup>2</sup> - 3ab + 1</code>
    </p>

    <p><strong>3. Agrupación y Simplificación</strong></p>
    <p>
        Agrupa y simplifica los términos semejantes:
    </p>
    <p>
        <code>(4a<sup>2</sup> - 2a<sup>2</sup>) + (-5ab - 3ab) + (6 + 1) = 2a<sup>2</sup> - 8ab + 7</code>
    </p>
    <p>
        La expresión simplificada es <code>2a<sup>2</sup> - 8ab + 7</code>.
    </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/WJD20MQUl6o?si=GNqj32Iru_p_g3Um" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h2>Multiplicación</h2>
            <p><strong>Proceso para Multiplicar Expresiones Algebraicas</strong></p>
    <p>
        Para multiplicar expresiones algebraicas, sigues un proceso similar al de multiplicar números, pero teniendo en cuenta las variables. Aquí te explico el proceso paso a paso con un ejemplo:
    </p>

    <p><strong>Ejemplo 1: Multiplicación de <code>(2x + 3)(x - 4)</code></strong></p>
    <p>
        Distribuye cada término de la primera expresión con cada término de la segunda expresión.
    </p>

    <p><strong>1. Multiplicación de <code>2x</code> por cada término en <code>(x - 4)</code></strong></p>
    <p>
        <code>2x ⋅ x = 2x<sup>2</sup></code>
    </p>
    <p>
        <code>2x ⋅ (-4) = -8x</code>
    </p>

    <p><strong>2. Multiplicación de <code>3</code> por cada término en <code>(x - 4)</code></strong></p>
    <p>
        <code>3 ⋅ x = 3x</code>
    </p>
    <p>
        <code>3 ⋅ (-4) = -12</code>
    </p>

    <p><strong>3. Combina todos los productos obtenidos</strong></p>
    <p>
        Ahora sumamos todos los términos resultantes:
    </p>
    <p>
        <code>2x<sup>2</sup> - 8x + 3x - 12</code>
    </p>

    <p><strong>4. Agrupa y simplifica los términos semejantes</strong></p>
    <p>
        Agrupamos los términos semejantes <code>-8x</code> y <code>3x</code>:
    </p>
    <p>
        <code>-8x + 3x = -5x</code>
    </p>
    <p>
        Así, la expresión simplificada es <code>2x<sup>2</sup> - 5x - 12</code>.
    </p>

    <p><strong>Ejemplo Adicional: Multiplicación de <code>(x + 2)(x + 3)</code></strong></p>
    <p>
        Distribuye cada término de la primera expresión con cada término de la segunda expresión.
    </p>

    <p><strong>1. Multiplicación de <code>x</code> por cada término en <code>(x + 3)</code></strong></p>
    <p>
        <code>x ⋅ x = x<sup>2</sup></code>
    </p>
    <p>
        <code>x ⋅ 3 = 3x</code>
    </p>

    <p><strong>2. Multiplicación de <code>2</code> por cada término en <code>(x + 3)</code></strong></p>
    <p>
        <code>2 ⋅ x = 2x</code>
    </p>
    <p>
        <code>2 ⋅ 3 = 6</code>
    </p>

    <p><strong>3. Combina todos los productos obtenidos</strong></p>
    <p>
        Sumamos todos los términos resultantes:
    </p>
    <p>
        <code>x<sup>2</sup> + 3x + 2x + 6</code>
    </p>

    <p><strong>4. Agrupa y simplifica los términos semejantes</strong></p>
    <p>
        Agrupamos los términos semejantes <code>3x</code> y <code>2x</code>:
    </p>
    <p>
        <code>3x + 2x = 5x</code>
    </p>
    <p>
        La expresión simplificada es <code>x<sup>2</sup> + 5x + 6</code>.
    </p>

    <p><strong>Resumen</strong></p>
    <p>
        - Distribuye cada término de la primera expresión con cada término de la segunda.
    </p>
    <p>
        - Suma todos los productos obtenidos.
    </p>
    <p>
        - Agrupa y simplifica los términos semejantes.
    </p>
    <p>
        Este método se puede aplicar a expresiones algebraicas más complejas, y también se puede usar el método FOIL (First, Outer, Inner, Last) para binomios, que es una técnica útil para recordar el proceso de distribución.
    </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/6-1NJt3-lTg?si=IM80S0I_avZ7iAIU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
             <h2>Division</h2>
             <p><strong>Dividir Expresiones Algebraicas</strong></p>
    <p>
        Dividir expresiones algebraicas implica dividir polinomios por monomios o por otros polinomios. Aquí te explico cómo hacerlo paso a paso:
    </p>

    <p><strong>1. División de un Polinomio por un Monomio</strong></p>
    <p>
        Para dividir un polinomio por un monomio, divide cada término del polinomio entre el monomio. Aquí tienes un ejemplo:
    </p>

    <p><strong>Ejemplo: <code>\(\frac{6x^3 + 3x^2 - 9x}{3x}\)</code></strong></p>
    <p>
        1. **Divide cada término del numerador entre el monomio del denominador:**
    </p>
    <p>
        <code>\(\frac{6x^3}{3x} = 2x^2\)</code>
    </p>
    <p>
        <code>\(\frac{3x^2}{3x} = x\)</code>
    </p>
    <p>
        <code>\(\frac{-9x}{3x} = -3\)</code>
    </p>
    <p>
        2. **Combina los resultados:**
    </p>
    <p>
        La expresión simplificada es:
    </p>
    <p>
        <code>2x^2 + x - 3</code>
    </p>

    <p><strong>2. División de un Polinomio por otro Polinomio</strong></p>
    <p>
        Para dividir un polinomio por otro polinomio, utilizamos la división larga, similar a la división de números. Aquí te muestro cómo hacerlo:
    </p>

    <p><strong>Ejemplo: <code>\(\frac{x^3 - 3x^2 + 2x - 6}{x - 2}\)</code></strong></p>
    <p>
        1. **Configura la división larga:**
    </p>
    <p>
        Divide <code>x^3 - 3x^2 + 2x - 6</code> entre <code>x - 2</code>.
    </p>
    <p>
        2. **Divide el primer término del numerador por el primer término del denominador:**
    </p>
    <p>
        Divide <code>x^3</code> entre <code>x</code> para obtener <code>x^2</code>.
    </p>
    <p>
        3. **Multiplica el divisor <code>x - 2</code> por <code>x^2</code> y resta el resultado del numerador:**
    </p>
    <p>
        Multiplicamos:
    </p>
    <p>
        <code>x^2 ⋅ (x - 2) = x^3 - 2x^2</code>
    </p>
    <p>
        Restamos del numerador:
    </p>
    <p>
        <code>(x^3 - 3x^2 + 2x - 6) - (x^3 - 2x^2) = -x^2 + 2x - 6</code>
    </p>
    <p>
        4. **Repite el proceso con el nuevo polinomio:**
    </p>
    <p>
        Divide <code>-x^2</code> entre <code>x</code> para obtener <code>-x</code>. Multiplica:
    </p>
    <p>
        <code>-x ⋅ (x - 2) = -x^2 + 2x</code>
    </p>
    <p>
        Restamos:
    </p>
    <p>
        <code>(-x^2 + 2x - 6) - (-x^2 + 2x) = -6</code>
    </p>
    <p>
        5. **Divide el término restante:**
    </p>
    <p>
        Divide <code>-6</code> entre <code>x - 2</code> para obtener <code>-3</code>. Multiplica:
    </p>
    <p>
        <code>-3 ⋅ (x - 2) = -6</code>
    </p>
    <p>
        Restamos:
    </p>
    <p>
        <code>-6 - (-6) = 0</code>
    </p>
    <p>
        6. **Combina los resultados:**
    </p>
    <p>
        El cociente es:
    </p>
    <p>
        <code>x^2 - x - 3</code>
    </p>

    <p><strong>Resumen</strong></p>
    <p>
        1. **División por Monomios:** Divide cada término del polinomio entre el monomio.
    </p>
    <p>
        2. **División por Polinomios:**
        - Usa la división larga para dividir cada término del polinomio.
        - Multiplica y resta para simplificar el resultado.
        - Repite el proceso con el residuo hasta obtener el cociente final.
    </p>
             <iframe width="560" height="315" src="https://www.youtube.com/embed/S9CAR7P3cnY?si=mli7RqRDkA4373HJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        ecuaciones: `
    <h2>Ecuaciones</h2>
    <h1>Introducción a las Ecuaciones</h1>
        <p>
            Las ecuaciones son expresiones matemáticas que establecen la igualdad entre dos cantidades. Se utilizan para modelar y resolver problemas en una variedad de contextos, desde situaciones cotidianas hasta problemas complejos en ciencias y ingeniería.
        </p>
        <p>
            Una ecuación tiene la forma general:
        </p>
        <p>
            <code>f(x) = 0</code>
        </p>
        <p>
            donde <code>f(x)</code> es una expresión algebraica que involucra una o más variables. Resolver una ecuación significa encontrar los valores de las variables que hacen que la ecuación sea verdadera.
        </p>
        
        <h3>Tipos de Ecuaciones</h3>
        <ul>
            <li><strong>Ecuaciones Lineales:</strong> Son ecuaciones de primer grado en las que la variable tiene un exponente de uno. Se resuelven generalmente mediante técnicas algebraicas simples.</li>
            <li><strong>Ecuaciones Cuadráticas:</strong> Son ecuaciones de segundo grado en las que la variable tiene un exponente de dos. Estas ecuaciones pueden ser resueltas por factorización, completando el cuadrado o usando la fórmula cuadrática.</li>
            <li><strong>Ecuaciones Cúbicas y Cuárticas:</strong> Son ecuaciones de tercer y cuarto grado, respectivamente. La resolución de estas ecuaciones puede implicar técnicas más avanzadas como la factorización por grupos o métodos numéricos.</li>
        </ul>

        <h3>Métodos de Resolución</h3>
        <p>
            La resolución de ecuaciones puede involucrar diversos métodos dependiendo del tipo y la complejidad de la ecuación:
        </p>
        <ol>
            <li><strong>Factorización:</strong> Se basa en escribir la ecuación en una forma que permita identificar y resolver los factores que satisfacen la igualdad.</li>
            <li><strong>Uso de Fórmulas:</strong> Para ecuaciones cuadráticas, la fórmula cuadrática proporciona una solución directa. Para ecuaciones de grados superiores, se pueden usar fórmulas específicas o métodos numéricos.</li>
            <li><strong>Métodos Numéricos:</strong> Para ecuaciones más complejas, como las de grado superior, se pueden usar métodos numéricos como la aproximación iterativa para encontrar soluciones.</li>
        </ol>

        <h3>Conclusión</h3>
        <p>
            Entender cómo resolver diferentes tipos de ecuaciones es fundamental en matemáticas y ciencias. Cada tipo de ecuación puede requerir un enfoque diferente, y el dominio de estos métodos es clave para resolver problemas matemáticos de manera efectiva.
        </p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/FrJ-tBTpxzo?si=7cwQuEGLNeX-pAga" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/792dSUkHhgg?si=UeoDKVtWToxVCG6o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <h1>Ecuaciones de Primer Grado</h1>
        <p>
            Las ecuaciones de primer grado, también conocidas como ecuaciones lineales, tienen la forma general:
        </p>
        <p>
            <code>ax + b = 0</code>
        </p>
        <p>
            donde <code>a</code> y <code>b</code> son constantes, y <code>x</code> es la variable que queremos encontrar. La solución de una ecuación de primer grado es el valor de <code>x</code> que hace que la ecuación sea verdadera.
        </p>
        
        <h3>Proceso para Resolver Ecuaciones de Primer Grado</h3>
        <p>
            Para resolver una ecuación de primer grado, sigue estos pasos:
        </p>
        <ol>
            <li>Isola la variable <code>x</code> en un lado de la ecuación.</li>
            <li>Despeja <code>x</code> usando operaciones algebraicas básicas.</li>
            <li>Verifica la solución sustituyendo <code>x</code> en la ecuación original.</li>
        </ol>
        
        <h3>Ejemplo 1</h3>
        <p>
            Considera la ecuación:
        </p>
        <p>
            <code>3x - 5 = 7</code>
        </p>
        <p>
            Para resolverla, sigue estos pasos:
        </p>
        <ol>
            <li>Agrega 5 a ambos lados de la ecuación para aislar el término con <code>x</code>:
                <br><code>3x - 5 + 5 = 7 + 5</code>
                <br><code>3x = 12</code>
            </li>
            <li>Divide ambos lados de la ecuación entre 3:
                <br><code>3x / 3 = 12 / 3</code>
                <br><code>x = 4</code>
            </li>
            <li>Verifica la solución sustituyendo <code>x = 4</code> en la ecuación original:
                <br><code>3(4) - 5 = 12 - 5 = 7</code>
                <br>La ecuación se cumple, por lo que la solución es correcta.
            </li>
        </ol>

        <h3>Ejemplo 2</h3>
        <p>
            Resuelve la ecuación:
        </p>
        <p>
            <code>2(x + 3) = 4x - 6</code>
        </p>
        <p>
            Para resolverla, realiza los siguientes pasos:
        </p>
        <ol>
            <li>Distribuye el 2 en el lado izquierdo:
                <br><code>2x + 6 = 4x - 6</code>
            </li>
            <li>Resta <code>2x</code> de ambos lados para aislar los términos con <code>x</code>:
                <br><code>2x + 6 - 2x = 4x - 6 - 2x</code>
                <br><code>6 = 2x - 6</code>
            </li>
            <li>Agrega 6 a ambos lados:
                <br><code>6 + 6 = 2x - 6 + 6</code>
                <br><code>12 = 2x</code>
            </li>
            <li>Divide ambos lados entre 2:
                <br><code>12 / 2 = 2x / 2</code>
                <br><code>x = 6</code>
            </li>
            <li>Verifica la solución sustituyendo <code>x = 6</code> en la ecuación original:
                <br><code>2(6 + 3) = 4(6) - 6</code>
                <br><code>2(9) = 24 - 6</code>
                <br><code>18 = 18</code>
                <br>La ecuación se cumple, por lo que la solución es correcta.
            </li>
        </ol>

        <h3>Conclusión</h3>
        <p>
            Las ecuaciones de primer grado son fundamentales en álgebra y tienen una solución directa mediante técnicas básicas de algebra. La práctica con estos problemas ayuda a desarrollar habilidades para resolver ecuaciones más complejas.
        </p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/By6jw2IbSF0?si=L12zLD4DeFJmpVJx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <h1>Ecuaciones de Primer Grado con Fracciones</h1>
        <p>
            Las ecuaciones de primer grado con fracciones involucran fracciones en lugar de números enteros. La forma general de estas ecuaciones es:
        </p>
        <p>
            <code>frac{a}{b}x + frac{c}{d} = frac{e}{f}</code>
        </p>
        <p>
            donde <code>a</code>, <code>b</code>, <code>c</code>, <code>d</code>, <code>e</code>, y <code>f</code> son constantes, y <code>x</code> es la variable que queremos resolver.
        </p>
        
        <h3>Proceso para Resolver Ecuaciones con Fracciones</h3>
        <p>
            Para resolver una ecuación de primer grado con fracciones, sigue estos pasos:
        </p>
        <ol>
            <li>
                Encuentra el mínimo común denominador (MCD) de todas las fracciones en la ecuación.
            </li>
            <li>
                Multiplica todos los términos de la ecuación por el MCD para eliminar las fracciones.
            </li>
            <li>
                Resuelve la ecuación resultante como una ecuación de primer grado sin fracciones.
            </li>
            <li>
                Verifica la solución sustituyendo el valor de <code>x</code> en la ecuación original.
            </li>
        </ol>
        
        <h3>Ejemplo 1</h3>
        <p>
            Considera la ecuación:
        </p>
        <p>
            <code>frac{2}{3}x - frac{1}{4} = frac{5}{6}</code>
        </p>
        <p>
            Para resolverla, sigue estos pasos:
        </p>
        <ol>
            <li>
                Encuentra el MCD de los denominadores 3, 4 y 6. El MCD es 12.
            </li>
            <li>
                Multiplica todos los términos por 12:
                <br><code>12 * frac{2}{3}x - 12 * frac{1}{4} = 12 * frac{5}{6}</code>
                <br><code>8x - 3 = 10</code>
            </li>
            <li>
                Resuelve la ecuación resultante:
                <br>Agrega 3 a ambos lados:
                <br><code>8x - 3 + 3 = 10 + 3</code>
                <br><code>8x = 13</code>
                <br>Divide ambos lados entre 8:
                <br><code>x = 13 / 8</code>
            </li>
            <li>
                Verifica la solución sustituyendo <code>x = 13 / 8</code> en la ecuación original:
                <br><code>frac{2}{3} * frac{13}{8} - frac{1}{4} = frac{5}{6}</code>
                <br><code>frac{26}{24} - frac{6}{24} = frac{5}{6}</code>
                <br><code>frac{20}{24} = frac{5}{6}</code>
                <br>La ecuación se cumple, por lo que la solución es correcta.
            </li>
        </ol>

        <h3>Ejemplo 2</h3>
        <p>
            Resuelve la ecuación:
        </p>
        <p>
            <code>frac{3}{5}x + frac{2}{7} = frac{4}{5}</code>
        </p>
        <p>
            Para resolverla, realiza los siguientes pasos:
        </p>
        <ol>
            <li>
                Encuentra el MCD de los denominadores 5 y 7. El MCD es 35.
            </li>
            <li>
                Multiplica todos los términos por 35:
                <br><code>35 * frac{3}{5}x + 35 * frac{2}{7} = 35 * frac{4}{5}</code>
                <br><code>21x + 10 = 28</code>
            </li>
            <li>
                Resuelve la ecuación resultante:
                <br>Resta 10 de ambos lados:
                <br><code>21x + 10 - 10 = 28 - 10</code>
                <br><code>21x = 18</code>
                <br>Divide ambos lados entre 21:
                <br><code>x = 18 / 21</code>
                <br><code>x = 6 / 7</code>
            </li>
            <li>
                Verifica la solución sustituyendo <code>x = 6 / 7</code> en la ecuación original:
                <br><code>frac{3}{5} * frac{6}{7} + frac{2}{7} = frac{4}{5}</code>
                <br><code>frac{18}{35} + frac{2}{7} = frac{4}{5}</code>
                <br><code>frac{18}{35} + frac{10}{35} = frac{4}{5}</code>
                <br><code>frac{28}{35} = frac{4}{5}</code>
                <br>La ecuación se cumple, por lo que la solución es correcta.
            </li>
        </ol>

        <h3>Conclusión</h3>
        <p>
            Resolver ecuaciones de primer grado con fracciones requiere eliminar las fracciones mediante la multiplicación por el mínimo común denominador. Una vez que las fracciones se eliminan, la ecuación se puede resolver como cualquier otra ecuación de primer grado.
        </p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/qud71ShXTK4?si=bm3K2PDHaqJwoqov" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`,

        sistemas: `
            <h2>Sistemas de Ecuaciones</h2>
            <h1>Sistemas de Ecuaciones</h1>
        <p>
            Un sistema de ecuaciones es un conjunto de dos o más ecuaciones que tienen las mismas variables. Resolver un sistema de ecuaciones implica encontrar los valores de las variables que satisfacen todas las ecuaciones simultáneamente.
        </p>
        
        <h3>Tipos de Sistemas de Ecuaciones</h3>
        <ul>
            <li><strong>Sistemas de Ecuaciones Lineales:</strong> Las ecuaciones en el sistema son lineales. Por ejemplo:
                <br><code>ax + by = c</code>
                <br><code>dx + ey = f</code>
            </li>
            <li><strong>Sistemas de Ecuaciones No Lineales:</strong> Al menos una de las ecuaciones no es lineal. Por ejemplo:
                <br><code>x^2 + y^2 = r^2</code>
                <br><code>2x - y = 3</code>
            </li>
        </ul>

        <h3>Métodos para Resolver Sistemas de Ecuaciones Lineales</h3>
        <p>
            Existen varios métodos para resolver sistemas de ecuaciones lineales. A continuación se describen los más comunes:
        </p>
        
        <h4>Método de Sustitución</h4>
        <p>
            Este método implica resolver una de las ecuaciones para una variable y luego sustituir esa expresión en la otra ecuación.
        </p>
        <p>
            <strong>Pasos:</strong>
        </p>
        <ol>
            <li>Resuelve una de las ecuaciones para una de las variables.</li>
            <li>Sustituye la expresión obtenida en la otra ecuación.</li>
            <li>Resuelve la ecuación resultante para la segunda variable.</li>
            <li>Reemplaza el valor encontrado en la primera ecuación para obtener el valor de la primera variable.</li>
        </ol>
        
        <h5>Ejemplo</h5>
        <p>
            Resuelve el siguiente sistema de ecuaciones:
        </p>
        <p>
            <code>x + y = 5</code>
            <br><code>2x - y = 1</code>
        </p>
        <p>
            1. Resuelve la primera ecuación para <code>y</code>:
            <br><code>y = 5 - x</code>
        </p>
        <p>
            2. Sustituye en la segunda ecuación:
            <br><code>2x - (5 - x) = 1</code>
            <br><code>2x - 5 + x = 1</code>
            <br><code>3x - 5 = 1</code>
            <br><code>3x = 6</code>
            <br><code>x = 2</code>
        </p>
        <p>
            3. Sustituye <code>x = 2</code> en la primera ecuación:
            <br><code>2 + y = 5</code>
            <br><code>y = 3</code>
        </p>
        <p>
            La solución es <code>x = 2</code> y <code>y = 3</code>.
        </p>

        <h4>Método de Igualación</h4>
        <p>
            Este método consiste en resolver ambas ecuaciones para la misma variable y luego igualar las dos expresiones obtenidas.
        </p>
        <p>
            <strong>Pasos:</strong>
        </p>
        <ol>
            <li>Resuelve cada ecuación para la misma variable.</li>
            <li>Iguala las dos expresiones obtenidas.</li>
            <li>Resuelve la ecuación resultante para la variable.</li>
            <li>Reemplaza el valor encontrado en una de las ecuaciones originales para obtener el valor de la otra variable.</li>
        </ol>
        
        <h5>Ejemplo</h5>
        <p>
            Resuelve el siguiente sistema de ecuaciones:
        </p>
        <p>
            <code>2x + 3y = 8</code>
            <br><code>x - 2y = -1</code>
        </p>
        <p>
            1. Resuelve cada ecuación para <code>x</code>:
            <br><code>x = 8 - 3y / 2</code> (de la primera ecuación)
            <br><code>x = -1 + 2y</code> (de la segunda ecuación)
        </p>
        <p>
            2. Igualar las dos expresiones para <code>x</code>:
            <br><code>8 - 3y / 2 = -1 + 2y</code>
            <br><code>8 - 3y = -2 + 4y</code>
            <br><code>10 = 7y</code>
            <br><code>y = 10 / 7</code>
        </p>
        <p>
            3. Sustituye <code>y = 10 / 7</code> en una de las ecuaciones para obtener <code>x</code>:
            <br><code>x = -1 + 2 * 10 / 7</code>
            <br><code>x = 13 / 7</code>
        </p>
        <p>
            La solución es <code>x = 13 / 7</code> y <code>y = 10 / 7</code>.
        </p>

        <h4>Método de Eliminación (o Reducción)</h4>
        <p>
            Este método implica eliminar una de las variables sumando o restando las ecuaciones, de manera que se obtenga una ecuación con una sola variable.
        </p>
        <p>
            <strong>Pasos:</strong>
        </p>
        <ol>
            <li>Ajusta las ecuaciones para que los coeficientes de una de las variables sean opuestos o iguales.</li>
            <li>Suma o resta las ecuaciones para eliminar una variable.</li>
            <li>Resuelve la ecuación resultante para la variable restante.</li>
            <li>Reemplaza el valor obtenido en una de las ecuaciones originales para encontrar el valor de la otra variable.</li>
        </ol>
        
        <h5>Ejemplo</h5>
        <p>
            Resuelve el siguiente sistema de ecuaciones:
        </p>
        <p>
            <code>4x - 2y = 6</code>
            <br><code>2x + 3y = 7</code>
        </p>
        <p>
            1. Multiplica la segunda ecuación por 2 para igualar los coeficientes de <code>x</code>:
            <br><code>4x - 2y = 6</code>
            <br><code>4x + 6y = 14</code>
        </p>
        <p>
            2. Resta la primera ecuación de la segunda:
            <br><code>(4x + 6y) - (4x - 2y) = 14 - 6</code>
            <br><code>8y = 8</code>
            <br><code>y = 1</code>
        </p>
        <p>
            3. Sustituye <code>y = 1</code> en la primera ecuación para encontrar <code>x</code>:
            <br><code>4x - 2 * 1 = 6</code>
            <br><code>4x - 2 = 6</code>
            <br><code>4x = 8</code>
            <br><code>x = 2</code>
        </p>
        <p>
            La solución es <code>x = 2</code> y <code>y = 1</code>.
        </p>

        <h3>Conclusión</h3>
        <p>
            Resolver sistemas de ecuaciones puede implicar diferentes métodos, cada uno adecuado para distintos tipos de sistemas. Los métodos de sustitución, igualación y eliminación son herramientas fundamentales para encontrar soluciones de manera efectiva.
        </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/oQQfG1zIPMc?si=OdhbbK6BZ4rIbco0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h1>Método Gráfico para Sistemas de Ecuaciones</h1>
        <p>
            El método gráfico es una técnica visual para resolver sistemas de ecuaciones lineales. Consiste en representar cada ecuación del sistema como una línea en un plano cartesiano y encontrar el punto o puntos de intersección de estas líneas. Estos puntos de intersección representan las soluciones del sistema.
        </p>

        <h3>Pasos para Resolver un Sistema de Ecuaciones por el Método Gráfico</h3>
        <ol>
            <li><strong>Escribe cada ecuación en forma pendiente-intersección:</strong> La forma pendiente-intersección de una ecuación lineal es <code>y = mx + b</code>, donde <code>m</code> es la pendiente y <code>b</code> es la intersección con el eje y. Esto facilita la representación gráfica de la línea.</li>
            <li><strong>Dibuja cada línea en un plano cartesiano:</strong> Utiliza la pendiente y la intersección con el eje y para trazar la línea correspondiente a cada ecuación. Asegúrate de que las líneas sean precisas.</li>
            <li><strong>Encuentra los puntos de intersección:</strong> Los puntos donde las líneas se cruzan representan las soluciones del sistema. Si las líneas se intersectan en un solo punto, el sistema tiene una solución única. Si las líneas son paralelas y no se intersectan, el sistema no tiene soluciones. Si las líneas se superponen completamente, el sistema tiene infinitas soluciones.</li>
        </ol>

        <h3>Ejemplo</h3>
        <p>
            Considera el siguiente sistema de ecuaciones:
        </p>
        <p>
            <code>y = 2x + 1</code>
            <br><code>y = -x + 3</code>
        </p>

        <h4>1. Escribe las ecuaciones en forma pendiente-intersección:</h4>
        <p>
            Ambas ecuaciones ya están en la forma pendiente-intersección:
            <br><code>y = 2x + 1</code>
            <br><code>y = -x + 3</code>
        </p>

        <h4>2. Dibuja las líneas en un plano cartesiano:</h4>
        <p>
            Para la ecuación <code>y = 2x + 1</code>, la pendiente es 2 y la intersección con el eje y es 1. Dibuja una línea que sube 2 unidades en el eje y por cada unidad que avanza en el eje x, comenzando desde 1 en el eje y.
            <br>
            Para la ecuación <code>y = -x + 3</code>, la pendiente es -1 y la intersección con el eje y es 3. Dibuja una línea que baja 1 unidad en el eje y por cada unidad que avanza en el eje x, comenzando desde 3 en el eje y.
        </p>

        <h4>3. Encuentra el punto de intersección:</h4>
        <p>
            Al graficar las dos líneas, observamos que se intersectan en el punto <code>(1, 3)</code>. Este punto es la solución del sistema de ecuaciones.
        </p>

        <h3>Conclusión</h3>
        <p>
            El método gráfico es útil para obtener una representación visual de las soluciones de un sistema de ecuaciones lineales. Aunque es particularmente útil para sistemas con dos variables, la precisión puede depender de la habilidad para trazar las líneas con exactitud. Para sistemas más complejos, otros métodos algebraicos suelen ser preferidos.
        </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/lJ2yfxzmAkc?si=1jAyJ76svGHJU9nF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        `,
        funciones: `
        <h1>Funciones</h1>
        <p>
            En matemáticas, una función es una relación entre un conjunto de entradas y un conjunto de salidas donde a cada entrada se le asigna una única salida. Las funciones son fundamentales en diversas áreas de las matemáticas y se utilizan para modelar y resolver problemas en ciencias, ingeniería, economía y muchas otras disciplinas.
        </p>

        <h3>Definición de Función</h3>
        <p>
            Una función <code>f</code> de un conjunto <code>X</code> a un conjunto <code>Y</code> es una regla que asigna a cada elemento <code>x</code> en <code>X</code> un único elemento <code>f(x)</code> en <code>Y</code>. Se denota como:
            <br><code>f: X → Y</code>
        </p>

        <h3>Notación de Funciones</h3>
        <p>
            Las funciones se denotan comúnmente como <code>f(x)</code>, <code>g(x)</code>, o <code>h(x)</code>, donde <code>x</code> es la variable independiente y <code>f(x)</code> es la variable dependiente. La notación <code>f(x)</code> se lee como "f de x".
        </p>

        <h3>Ejemplos de Funciones</h3>
        <p>
            1. **Función Lineal**:
            <br>Una función lineal tiene la forma <code>f(x) = mx + b</code>, donde <code>m</code> es la pendiente y <code>b</code> es la intersección con el eje y. Por ejemplo, <code>f(x) = 2x + 3</code>.
            <br>Esta función representa una línea recta con pendiente 2 y una intersección con el eje y en 3.

            <br><br>2. **Función Cuadrática**:
            <br>Una función cuadrática tiene la forma <code>f(x) = ax² + bx + c</code>, donde <code>a</code>, <code>b</code> y <code>c</code> son constantes. Por ejemplo, <code>f(x) = x² - 4x + 4</code>.
            <br>Esta función representa una parábola que abre hacia arriba y tiene su vértice en el punto (2, 0).

            <br><br>3. **Función Exponencial**:
            <br>Una función exponencial tiene la forma <code>f(x) = a * b^x</code>, donde <code>a</code> y <code>b</code> son constantes. Por ejemplo, <code>f(x) = 3 * 2^x</code>.
            <br>Esta función representa un crecimiento exponencial con base 2 y un coeficiente inicial de 3.
        </p>

        <h3>Propiedades de las Funciones</h3>
        <ul>
            <li><strong>Dominio:</strong> El conjunto de todos los valores posibles de <code>x</code> para los cuales la función está definida.</li>
            <li><strong>Rango:</strong> El conjunto de todos los valores posibles de <code>f(x)</code> que la función puede tomar.</li>
            <li><strong>Inyectividad:</strong> Una función es inyectiva si cada valor del dominio se asigna a un único valor en el codominio.</li>
            <li><strong>Sobrejectividad:</strong> Una función es sobreyectiva si cada valor en el codominio tiene al menos un valor del dominio asignado a él.</li>
            <li><strong>Biyección:</strong> Una función es biyectiva si es tanto inyectiva como sobreyectiva, es decir, existe una correspondencia uno a uno entre el dominio y el codominio.</li>
        </ul>

        <h3>Gráficas de Funciones</h3>
        <p>
            La gráfica de una función es una representación visual de todos los pares ordenados <code>(x, f(x))</code>. Permite visualizar cómo cambia <code>f(x)</code> con respecto a <code>x</code> y es útil para entender el comportamiento general de la función.
        </p>

        <h3>Conclusión</h3>
        <p>
            Las funciones son herramientas esenciales en matemáticas que permiten modelar y analizar relaciones entre variables. Comprender sus propiedades y cómo se representan gráficamente es crucial para resolver problemas y aplicar conceptos matemáticos en diferentes contextos.
        </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/HAeSkQH1C-I?si=4lLHrjF1BkYvSACE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h1>Evaluar Funciones</h1>
        <p>
            Evaluar una función significa calcular el valor de la función para un valor específico de la variable independiente. Esto es fundamental para entender cómo una función se comporta con diferentes entradas y es una herramienta esencial para resolver problemas matemáticos.
        </p>

        <h3>Definición</h3>
        <p>
            Si <code>f(x)</code> es una función, evaluarla en un punto <code>x = a</code> implica sustituir <code>a</code> en la expresión de la función y calcular el valor resultante. Se denota como <code>f(a)</code>.
        </p>

        <h3>Cómo Evaluar una Función</h3>
        <ol>
            <li><strong>Identifica la función:</strong> Asegúrate de tener la expresión algebraica de la función.</li>
            <li><strong>Selecciona el valor:</strong> Elige el valor específico de <code>x</code> en el cual deseas evaluar la función.</li>
            <li><strong>Sustituye:</strong> Reemplaza <code>x</code> por el valor seleccionado en la expresión de la función.</li>
            <li><strong>Calcula:</strong> Realiza las operaciones matemáticas necesarias para encontrar el valor de la función.</li>
        </ol>

        <h3>Ejemplos de Evaluación de Funciones</h3>
        <p>
            Aquí tienes algunos ejemplos de cómo evaluar funciones:
        </p>
        <ul>
            <li>
                **Ejemplo 1: Función Lineal**
                <br>Considera la función <code>f(x) = 2x + 5</code>. Para evaluar <code>f</code> en <code>x = 3</code>, sigue estos pasos:
                <br><code>f(3) = 2(3) + 5 = 6 + 5 = 11</code>
                <br>Entonces, <code>f(3) = 11</code>.
            </li>
            <li>
                **Ejemplo 2: Función Cuadrática**
                <br>Considera la función <code>g(x) = x² - 4x + 4</code>. Para evaluar <code>g</code> en <code>x = 2</code>, sigue estos pasos:
                <br><code>g(2) = (2)² - 4(2) + 4 = 4 - 8 + 4 = 0</code>
                <br>Entonces, <code>g(2) = 0</code>.
            </li>
            <li>
                **Ejemplo 3: Función Exponencial**
                <br>Considera la función <code>h(x) = 3 * 2^x</code>. Para evaluar <code>h</code> en <code>x = 4</code>, sigue estos pasos:
                <br><code>h(4) = 3 * 2^4 = 3 * 16 = 48</code>
                <br>Entonces, <code>h(4) = 48</code>.
            </li>
        </ul>

        <h3>Conclusión</h3>
        <p>
            Evaluar funciones es una habilidad clave en matemáticas que permite determinar el valor de una función para valores específicos de la variable independiente. Comprender cómo realizar estas evaluaciones es esencial para aplicar funciones en diversos problemas y contextos.
        </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/tZ8AYOOB9G4?si=QlPHg2y_onvEbqFe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h1>Dominio y Rango</h1>
        <p>
            En matemáticas, el dominio y el rango son conceptos fundamentales que se utilizan para describir las funciones. Estos conceptos nos ayudan a entender las posibles entradas (dominio) y salidas (rango) de una función.
        </p>

        <h3>Dominio</h3>
        <p>
            El dominio de una función es el conjunto de todos los valores posibles de la variable independiente <code>x</code> para los cuales la función está definida. En otras palabras, es el conjunto de todas las entradas válidas para la función.
        </p>
        <h4>Cálculo del Dominio</h4>
        <p>
            Para determinar el dominio de una función, considera las siguientes restricciones:
        </p>
        <ul>
            <li><strong>Funciones Racionales:</strong> El denominador no puede ser cero. Ejemplo: Para la función <code>f(x) = 1 / (x - 2)</code>, el dominio es <code>x ≠ 2</code>.</li>
            <li><strong>Funciones Raíces:</strong> El radicando de una raíz cuadrada debe ser no negativo. Ejemplo: Para <code>g(x) = √(x - 1)</code>, el dominio es <code>x ≥ 1</code>.</li>
            <li><strong>Funciones Logarítmicas:</strong> El argumento del logaritmo debe ser positivo. Ejemplo: Para <code>h(x) = log(x + 3)</code>, el dominio es <code>x > -3</code>.</li>
        </ul>

        <h3>Rango</h3>
        <p>
            El rango de una función es el conjunto de todos los valores posibles que la función puede tomar como salida. En otras palabras, es el conjunto de todas las posibles salidas para la función dada una entrada dentro del dominio.
        </p>
        <h4>Cálculo del Rango</h4>
        <p>
            Para determinar el rango de una función, sigue estos pasos:
        </p>
        <ul>
            <li><strong>Encuentra el dominio:</strong> Primero, determina el dominio de la función.</li>
            <li><strong>Evalúa la función:</strong> Calcula los valores de la función para varios puntos dentro del dominio.</li>
            <li><strong>Observa el comportamiento:</strong> Analiza cómo cambia el valor de la función en función de los valores del dominio.</li>
            <li><strong>Determina el conjunto de salidas:</strong> Identifica todos los posibles valores de salida que la función puede tomar.</li>
        </ul>

        <h3>Ejemplos</h3>
        <ul>
            <li>
                **Ejemplo 1: Función Lineal**
                <br>Para la función <code>f(x) = 2x + 3</code>, el dominio es <code>ℝ</code> (todos los números reales) porque no hay restricciones en <code>x</code>. El rango también es <code>ℝ</code> porque la función lineal puede tomar cualquier valor real.
            </li>
            <li>
                **Ejemplo 2: Función Cuadrática**
                <br>Para la función <code>g(x) = x² - 4x + 4</code>, el dominio es <code>ℝ</code>. El rango es <code>[0, ∞)</code> porque el valor mínimo de la parábola es 0 y la función puede crecer sin límite.
            </li>
            <li>
                **Ejemplo 3: Función Racional**
                <br>Para la función <code>h(x) = 1 / (x + 2)</code>, el dominio es <code>x ≠ -2</code> porque el denominador no puede ser cero. El rango es <code>ℝ - {0}</code> porque la función nunca puede ser cero.
            </li>
        </ul>

        <h3>Conclusión</h3>
        <p>
            Comprender el dominio y el rango de una función es crucial para analizar y interpretar el comportamiento de las funciones matemáticas. Mientras que el dominio nos dice qué entradas son válidas, el rango nos dice qué salidas podemos esperar. Estos conceptos son la base para resolver problemas más complejos y aplicar funciones en diferentes contextos.
        </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/H40lcwlgPMk?si=5YVIgPhef7AVt5up" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h1>Gráfica de la Función Lineal</h1>
        <p>
            Una función lineal es una función matemática que describe una línea recta en un gráfico. La forma general de una función lineal es:
        </p>
        <p><code>f(x) = mx + b</code></p>
        <p>
            Donde <code>m</code> es la pendiente de la línea y <code>b</code> es la intersección con el eje y. La pendiente <code>m</code> indica la inclinación de la línea, mientras que <code>b</code> indica el punto donde la línea cruza el eje vertical.
        </p>

        <h3>Pasos para Graficar una Función Lineal</h3>
        <ol>
            <li><strong>Identificar la Pendiente y la Intersección:</strong> Examina los valores de <code>m</code> y <code>b</code> en la ecuación <code>f(x) = mx + b</code>.</li>
            <li><strong>Plotear el Punto de Intersección:</strong> Marca el punto <code>(0, b)</code> en el gráfico. Este es el punto donde la línea cruza el eje y.</li>
            <li><strong>Usar la Pendiente:</strong> Desde el punto de intersección, usa la pendiente <code>m</code> para determinar otros puntos. La pendiente <code>m</code> representa el cambio en <code>y</code> por cada unidad que cambia <code>x</code>.</li>
            <li><strong>Conectar los Puntos:</strong> Traza una línea recta que pase por los puntos que has marcado.</li>
        </ol>

        <h3>Ejemplo</h3>
        <p>
            Consideremos la función lineal <code>f(x) = 2x + 3</code>.
        </p>
        <ul>
            <li><strong>Pendiente:</strong> La pendiente <code>m</code> es 2.</li>
            <li><strong>Intersección:</strong> La intersección con el eje y es 3.</li>
        </ul>
        <p>
            Para graficar esta función:
        </p>
        <ul>
            <li>Marca el punto <code>(0, 3)</code> en el eje y.</li>
            <li>Desde el punto <code>(0, 3)</code>, sube 2 unidades y avanza 1 unidad hacia la derecha para marcar el siguiente punto <code>(1, 5)</code>.</li>
            <li>Conecta estos puntos con una línea recta.</li>
        </ul>

        <h3>Visualización</h3>
        <p>
            La gráfica de <code>f(x) = 2x + 3</code> será una línea recta que se inclina hacia arriba a medida que <code>x</code> aumenta, cruzando el eje y en <code>y = 3</code>.
        </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/AoZpzAoC1Qg?si=ch4IKXwJFVLTdiBr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        polinomios: `
            <h2>Polinomios</h2>
            <h1>Polinomios</h1>
        <p>
            Un polinomio es una expresión matemática que consiste en la suma de términos, donde cada término es el producto de una constante (llamada coeficiente) y una o más variables elevadas a una potencia no negativa. Los polinomios son fundamentales en álgebra y tienen muchas aplicaciones en matemáticas y ciencias.
        </p>

        <h2>Forma General de un Polinomio</h2>
        <p>
            La forma general de un polinomio en una variable <code>x</code> es:
        </p>
        <p><code>P(x) = a<sub>n</sub>x<sup>n</sup> + a<sub>n-1</sub>x<sup>n-1</sup> + ... + a<sub>1</sub>x + a<sub>0</sub></code></p>
        <p>
            Donde:
        </p>
        <ul>
            <li><strong>a<sub>n</sub>, a<sub>n-1</sub>, ..., a<sub>1</sub>, a<sub>0</sub>:</strong> Coeficientes del polinomio.</li>
            <li><strong>x:</strong> La variable.</li>
            <li><strong>n:</strong> El grado del polinomio, que es el mayor exponente de <code>x</code> en el polinomio.</li>
        </ul>

        <h2>Clasificación de los Polinomios</h2>
        <p>
            Los polinomios se pueden clasificar según su grado y el número de términos:
        </p>
        <ul>
            <li><strong>Por el grado:</strong>
                <ul>
                    <li><strong>Polinomio de grado 0:</strong> Solo tiene un término constante, como <code>5</code> o <code>-7</code>.</li>
                    <li><strong>Polinomio de grado 1:</strong> Tiene la forma <code>ax + b</code>, donde <code>a</code> y <code>b</code> son constantes, como <code>3x + 2</code>.</li>
                    <li><strong>Polinomio de grado 2:</strong> Tiene la forma <code>ax<sup>2</sup> + bx + c</code>, como <code>x<sup>2</sup> - 4x + 4</code>.</li>
                    <li><strong>Polinomio de grado 3:</strong> Tiene la forma <code>ax<sup>3</sup> + bx<sup>2</sup> + cx + d</code>, como <code>2x<sup>3</sup> - 3x<sup>2</sup> + x - 5</code>.</li>
                </ul>
            </li>
            <li><strong>Por el número de términos:</strong>
                <ul>
                    <li><strong>Monomio:</strong> Un solo término, como <code>4x<sup>2</sup></code>.</li>
                    <li><strong>Binomio:</strong> Dos términos, como <code>x + 1</code> o <code>3x<sup>2</sup> - 2x</code>.</li>
                    <li><strong>Trinomio:</strong> Tres términos, como <code>x<sup>2</sup> + 2x + 1</code>.</li>
                    <li><strong>Polinomio de más de tres términos:</strong> Más de tres términos, como <code>2x<sup>3</sup> - 3x<sup>2</sup> + x - 5</code>.</li>
                </ul>
            </li>
        </ul>

        <h2>Ejemplos de Polinomios</h2>
        <p>
            Aquí tienes algunos ejemplos de polinomios con sus características:
        </p>
        <ul>
            <li><strong>Polinomio:</strong> <code>4x<sup>3</sup> - 2x + 1</code>
                <ul>
                    <li><strong>Grado:</strong> 3</li>
                    <li><strong>Coeficientes:</strong> 4, -2, 1</li>
                </ul>
            </li>
            <li><strong>Polinomio:</strong> <code>7x<sup>2</sup> - 3x + 5</code>
                <ul>
                    <li><strong>Grado:</strong> 2</li>
                    <li><strong>Coeficientes:</strong> 7, -3, 5</li>
                </ul>
            </li>
            <li><strong>Polinomio:</strong> <code>2x - 8</code>
                <ul>
                    <li><strong>Grado:</strong> 1</li>
                    <li><strong>Coeficientes:</strong> 2, -8</li>
                </ul>
            </li>
        </ul>

        <h2>Operaciones con Polinomios</h2>
        <p>
            Las operaciones básicas con polinomios incluyen suma, resta, multiplicación y división.
        </p>
        <ul>
            <li><strong>Suma:</strong> Suma los coeficientes de los términos semejantes.</li>
            <li><strong>Resta:</strong> Resta los coeficientes de los términos semejantes.</li>
            <li><strong>Multiplicación:</strong> Multiplica cada término de un polinomio por cada término del otro polinomio y combina los términos semejantes.</li>
            <li><strong>División:</strong> Divide los términos del polinomio entre los términos del otro polinomio, utilizando métodos como la división larga.</li>
        </ul>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/vvIYwabU1lw?si=eh0ap-KIL82zNIGL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h1>Grado de un Polinomio</h1>
        <p>
            El grado de un polinomio es una característica fundamental que define la complejidad del polinomio. Es el exponente más alto al que la variable está elevada en el polinomio. El grado de un polinomio ayuda a determinar su comportamiento y la cantidad de soluciones que puede tener.
        </p>

        <h2>Definición</h2>
        <p>
            El grado de un polinomio en una variable <code>x</code> es el mayor exponente de <code>x</code> en el polinomio. Si un polinomio está en la forma estándar <code>P(x) = a<sub>n</sub>x<sup>n</sup> + a<sub>n-1</sub>x<sup>n-1</sup> + ... + a<sub>1</sub>x + a<sub>0</sub></code>, el grado es <code>n</code>, donde <code>a<sub>n</sub></code> es el coeficiente del término de mayor grado.
        </p>

        <h2>Ejemplos de Grado de un Polinomio</h2>
        <p>
            Aquí tienes algunos ejemplos de polinomios con su grado correspondiente:
        </p>
        <ul>
            <li><strong>Polinomio:</strong> <code>4x<sup>3</sup> - 2x + 1</code>
                <ul>
                    <li><strong>Grado:</strong> 3</li>
                    <li><strong>Explicación:</strong> El término con el exponente más alto es <code>4x<sup>3</sup></code>.</li>
                </ul>
            </li>
            <li><strong>Polinomio:</strong> <code>7x<sup>2</sup> - 3x + 5</code>
                <ul>
                    <li><strong>Grado:</strong> 2</li>
                    <li><strong>Explicación:</strong> El término con el exponente más alto es <code>7x<sup>2</sup></code>.</li>
                </ul>
            </li>
            <li><strong>Polinomio:</strong> <code>2x - 8</code>
                <ul>
                    <li><strong>Grado:</strong> 1</li>
                    <li><strong>Explicación:</strong> El término con el exponente más alto es <code>2x</code>.</li>
                </ul>
            </li>
            <li><strong>Polinomio:</strong> <code>-4</code>
                <ul>
                    <li><strong>Grado:</strong> 0</li>
                    <li><strong>Explicación:</strong> Este es un polinomio constante y no tiene variables, por lo que su grado es 0.</li>
                </ul>
            </li>
        </ul>

        <h2>Importancia del Grado</h2>
        <p>
            Conocer el grado de un polinomio es esencial en la resolución de ecuaciones polinómicas, el análisis de funciones polinómicas y la interpretación de gráficos. El grado afecta la forma en que un polinomio se comporta a medida que la variable <code>x</code> aumenta o disminuye y puede indicar la cantidad de soluciones reales o complejas que el polinomio puede tener.
        </p>

        <h2>Determinación del Grado de un Polinomio</h2>
        <p>
            Para determinar el grado de un polinomio, sigue estos pasos:
        </p>
        <ol>
            <li>Identifica todos los términos del polinomio.</li>
            <li>Encuentra el exponente de la variable <code>x</code> en cada término.</li>
            <li>Selecciona el mayor exponente entre todos los términos.</li>
        </ol>
        <p>
            Este mayor exponente es el grado del polinomio.
        </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/cJLC1SAif6k?si=K92QwmusyFwBRbmG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        figuras: `
            <h1>Figuras Geométricas</h1>
        <p>
            Las figuras geométricas son formas que se estudian en geometría. Se clasifican en dos grandes categorías: figuras planas y figuras espaciales. Cada figura tiene propiedades y características particulares que se utilizan para resolver problemas geométricos.
        </p>

        <h2>Figuras Planas</h2>
        <p>
            Las figuras planas son aquellas que tienen dos dimensiones: largo y ancho. Estas figuras se encuentran en un solo plano y se representan en una superficie bidimensional.
        </p>
        <ul>
            <li><strong>Triángulo</strong>
                <ul>
                    <li><strong>Definición:</strong> Una figura con tres lados y tres ángulos.</li>
                    <li><strong>Propiedades:</strong> La suma de los ángulos internos siempre es 180 grados.</li>
                </ul>
            </li>
            <li><strong>Cuadrado</strong>
                <ul>
                    <li><strong>Definición:</strong> Un cuadrilátero con cuatro lados iguales y ángulos de 90 grados.</li>
                    <li><strong>Propiedades:</strong> Todos los ángulos son rectos, y las diagonales se cortan en ángulo recto.</li>
                </ul>
            </li>
            <li><strong>Círculo</strong>
                <ul>
                    <li><strong>Definición:</strong> Una figura en la que todos los puntos están a la misma distancia del centro.</li>
                    <li><strong>Propiedades:</strong> La distancia desde el centro a cualquier punto en la circunferencia se llama radio. La distancia a través del centro se llama diámetro.</li>
                </ul>
            </li>
            <li><strong>Rectángulo</strong>
                <ul>
                    <li><strong>Definición:</strong> Un cuadrilátero con ángulos de 90 grados y lados opuestos iguales.</li>
                    <li><strong>Propiedades:</strong> Las diagonales son iguales y se cortan en el centro.</li>
                </ul>
            </li>
        </ul>

        <h2>Figuras Espaciales</h2>
        <p>
            Las figuras espaciales tienen tres dimensiones: largo, ancho y altura. Estas figuras ocupan espacio y se representan en una superficie tridimensional.
        </p>
        <ul>
            <li><strong>Cubo</strong>
                <ul>
                    <li><strong>Definición:</strong> Un sólido con seis caras cuadradas iguales.</li>
                    <li><strong>Propiedades:</strong> Todas las caras son cuadrados, y todas las aristas son de igual longitud.</li>
                </ul>
            </li>
            <li><strong>Esfera</strong>
                <ul>
                    <li><strong>Definición:</strong> Un sólido en el que todos los puntos de la superficie están a la misma distancia del centro.</li>
                    <li><strong>Propiedades:</strong> No tiene caras, aristas ni vértices. Su medida se basa en el radio.</li>
                </ul>
            </li>
            <li><strong>Cilindro</strong>
                <ul>
                    <li><strong>Definición:</strong> Un sólido con dos bases circulares paralelas y una superficie lateral curva.</li>
                    <li><strong>Propiedades:</strong> La altura es la distancia entre las dos bases, y el radio es la distancia desde el centro de una base hasta su borde.</li>
                </ul>
            </li>
            <li><strong>Cono</strong>
                <ul>
                    <li><strong>Definición:</strong> Un sólido con una base circular y una superficie lateral que se estrecha hasta un vértice.</li>
                    <li><strong>Propiedades:</strong> Tiene una base circular y una altura que es la distancia desde el vértice hasta el centro de la base.</li>
                </ul>
            </li>
        </ul>

        <h2>Importancia de las Figuras Geométricas</h2>
        <p>
            Las figuras geométricas son fundamentales en la vida cotidiana y en diversas áreas del conocimiento. Se utilizan en arquitectura, ingeniería, arte y muchas otras disciplinas para diseñar, analizar y resolver problemas. Comprender las propiedades de las figuras geométricas ayuda a desarrollar habilidades de razonamiento espacial y a aplicar conceptos matemáticos en situaciones prácticas.
        </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Z1iQg9N9MEI?si=bwZ143L11uDjhi5K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
        `,
        pitagoras: `
            <h1>Teorema de Pitágoras</h1>
        <p>
            El Teorema de Pitágoras es uno de los conceptos fundamentales en geometría, específicamente en la trigonometría de triángulos rectángulos. Nombrado en honor al matemático griego Pitágoras, el teorema establece una relación entre los lados de un triángulo rectángulo.
        </p>

        <h2>Declaración del Teorema</h2>
        <p>
            El teorema afirma que en un triángulo rectángulo, el cuadrado de la longitud de la hipotenusa (el lado opuesto al ángulo recto) es igual a la suma de los cuadrados de las longitudes de los otros dos lados (llamados catetos). Matemáticamente, se expresa como:
        </p>
        <p>
            <strong>a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup></strong>
        </p>
        <p>
            Donde:
            <ul>
                <li><strong>a</strong> y <strong>b</strong> son las longitudes de los catetos del triángulo rectángulo.</li>
                <li><strong>c</strong> es la longitud de la hipotenusa.</li>
            </ul>
        </p>

        <h2>Ejemplo de Aplicación</h2>
        <p>
            Supongamos que tenemos un triángulo rectángulo con catetos de longitudes 3 unidades y 4 unidades. Queremos encontrar la longitud de la hipotenusa.
        </p>
        <ol>
            <li>Aplicamos el teorema:
                <p>
                    <strong>3<sup>2</sup> + 4<sup>2</sup> = c<sup>2</sup></strong>
                </p>
            </li>
            <li>Calculamos los cuadrados de los catetos:
                <p>
                    9 + 16 = c<sup>2</sup>
                </p>
            </li>
            <li>Sumamos los resultados:
                <p>
                    25 = c<sup>2</sup>
                </p>
            </li>
            <li>Tomamos la raíz cuadrada de ambos lados para encontrar <strong>c</strong>:
                <p>
                    c = √25 = 5
                </p>
            </li>
        </ol>
        <p>
            Por lo tanto, la longitud de la hipotenusa es 5 unidades.
        </p>

        <h2>Importancia del Teorema de Pitágoras</h2>
        <p>
            El Teorema de Pitágoras es fundamental en diversas áreas de las matemáticas y las ciencias aplicadas. Se utiliza en la resolución de problemas de geometría, trigonometría, física e ingeniería. También es esencial en la navegación y en la construcción, donde se aplican principios geométricos para medir distancias y crear estructuras precisas.
        </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/w6nh99v3r4A?si=zmw0cNu9q-YeF__p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        angulos: `
            <h1>Ángulos y Triángulos</h1>
        
        <h2>Ángulos</h2>
        <p>
            Un ángulo se forma cuando dos rayos se encuentran en un punto común llamado vértice. Los ángulos se miden en grados (°) y se clasifican en diferentes tipos según su medida:
        </p>
        <ul>
            <li><strong>Ángulo Agudo:</strong> Mide menos de 90 grados.</li>
            <li><strong>Ángulo Recto:</strong> Mide exactamente 90 grados.</li>
            <li><strong>Ángulo Obtuso:</strong> Mide más de 90 grados pero menos de 180 grados.</li>
            <li><strong>Ángulo Llano:</strong> Mide exactamente 180 grados.</li>
            <li><strong>Ángulo Completo:</strong> Mide exactamente 360 grados.</li>
        </ul>

        <h2>Triángulos</h2>
        <p>
            Un triángulo es una figura geométrica de tres lados y tres ángulos. La suma de los ángulos internos de un triángulo siempre es igual a 180 grados. Los triángulos se clasifican según la longitud de sus lados y la medida de sus ángulos:
        </p>
        <h3>Según sus Lados</h3>
        <ul>
            <li><strong>Triángulo Equilátero:</strong> Todos los lados y ángulos son iguales. Cada ángulo mide 60 grados.</li>
            <li><strong>Triángulo Isósceles:</strong> Tiene dos lados de igual longitud y dos ángulos internos de igual medida.</li>
            <li><strong>Triángulo Escaleno:</strong> Todos sus lados y ángulos son de diferentes medidas.</li>
        </ul>

        <h3>Según sus Ángulos</h3>
        <ul>
            <li><strong>Triángulo Agudo:</strong> Todos sus ángulos son agudos (menos de 90 grados).</li>
            <li><strong>Triángulo Rectángulo:</strong> Tiene un ángulo recto (90 grados).</li>
            <li><strong>Triángulo Obtuso:</strong> Tiene un ángulo obtuso (más de 90 grados).</li>
        </ul>

        <h2>Propiedades de los Triángulos</h2>
        <p>
            Los triángulos tienen varias propiedades importantes:
        </p>
        <ul>
            <li><strong>Suma de Ángulos:</strong> La suma de los ángulos internos de cualquier triángulo es siempre 180 grados.</li>
            <li><strong>Desigualdad de Lados:</strong> La suma de las longitudes de dos lados de un triángulo siempre es mayor que la longitud del tercer lado.</li>
            <li><strong>Teorema de Pitágoras:</strong> En un triángulo rectángulo, el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los catetos.</li>
        </ul>

        <h2>Ejemplos</h2>
        <h3>Ejemplo 1: Triángulo Equilátero</h3>
        <p>
            Considera un triángulo con todos sus lados de 5 cm. Como todos los ángulos son iguales, cada ángulo mide 60 grados.
        </p>

        <h3>Ejemplo 2: Triángulo Rectángulo</h3>
        <p>
            Un triángulo tiene ángulos de 30 grados, 60 grados y 90 grados. Es un triángulo rectángulo porque uno de sus ángulos es de 90 grados.
        </p>

        <h3>Ejemplo 3: Triángulo Isósceles</h3>
        <p>
            Un triángulo tiene dos lados de 7 cm y un lado de 10 cm. Los ángulos opuestos a los lados iguales son también iguales.
        </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fK-SOkxs06s?si=IH_POQFXW0b-wDDD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        areas: `
            <h1>Perímetros, Áreas y Volúmenes</h1>
        
        <h2>Perímetros</h2>
        <p>
            El perímetro de una figura geométrica es la medida total de su contorno. Se calcula sumando las longitudes de todos sus lados. A continuación, se presentan las fórmulas para algunas figuras comunes:
        </p>
        <ul>
            <li><strong>Cuadrado:</strong> Perímetro = 4 × lado</li>
            <li><strong>Rectángulo:</strong> Perímetro = 2 × (largo + ancho)</li>
            <li><strong>Círculo:</strong> Perímetro (circunferencia) = 2 × π × radio</li>
        </ul>

        <h2>Áreas</h2>
        <p>
            El área de una figura es la medida de la región que cubre. Aquí están las fórmulas para calcular el área de algunas figuras comunes:
        </p>
        <ul>
            <li><strong>Cuadrado:</strong> Área = lado × lado</li>
            <li><strong>Rectángulo:</strong> Área = largo × ancho</li>
            <li><strong>Círculo:</strong> Área = π × radio²</li>
            <li><strong>Triángulo:</strong> Área = (base × altura) / 2</li>
            <li><strong>Trapecio:</strong> Área = (base1 + base2) × altura / 2</li>
        </ul>

        <h2>Volúmenes</h2>
        <p>
            El volumen de un objeto es la medida del espacio tridimensional que ocupa. Aquí están las fórmulas para calcular el volumen de algunas figuras comunes:
        </p>
        <ul>
            <li><strong>Cubo:</strong> Volumen = lado³</li>
            <li><strong>Rectángulo:</strong> Volumen = largo × ancho × alto</li>
            <li><strong>Cilindro:</strong> Volumen = π × radio² × altura</li>
            <li><strong>Esfera:</strong> Volumen = (4/3) × π × radio³</li>
            <li><strong>Cono:</strong> Volumen = (1/3) × π × radio² × altura</li>
        </ul>

        <h2>Ejemplos</h2>
        <h3>Ejemplo 1: Cálculo del Perímetro de un Cuadrado</h3>
        <p>
            Si el lado de un cuadrado mide 5 cm, su perímetro es:
            <br>
            Perímetro = 4 × 5 = 20 cm
        </p>

        <h3>Ejemplo 2: Cálculo del Área de un Triángulo</h3>
        <p>
            Si la base de un triángulo es 6 cm y su altura es 4 cm, su área es:
            <br>
            Área = (6 × 4) / 2 = 12 cm²
        </p>

        <h3>Ejemplo 3: Cálculo del Volumen de un Cilindro</h3>
        <p>
            Si el radio de un cilindro es 3 cm y su altura es 7 cm, su volumen es:
            <br>
            Volumen = π × 3² × 7 ≈ 197.92 cm³
        </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/i0bHMCIiRbU?si=wimbgduhOcw-eSaK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        transformaciones: `
            <h1>Transformaciones Geométricas</h1>
        
        <h2>Introducción</h2>
        <p>
            Las transformaciones geométricas son operaciones que se aplican a figuras en un plano para cambiar su posición, tamaño o forma. Existen varias tipos de transformaciones, cada una con características específicas que afectan la figura original de diferentes maneras.
        </p>

        <h2>Tipos de Transformaciones</h2>
        
        <h3>1. Traslación</h3>
        <p>
            La traslación mueve una figura de un lugar a otro sin cambiar su forma ni tamaño. Cada punto de la figura se desplaza en la misma dirección y distancia.
        </p>
        <p><strong>Ejemplo:</strong> Si una figura se traslada 5 unidades hacia la derecha y 3 unidades hacia arriba, cada uno de sus puntos se mueve 5 unidades a la derecha y 3 unidades arriba.</p>

        <h3>2. Rotación</h3>
        <p>
            La rotación gira una figura alrededor de un punto fijo, conocido como el centro de rotación. La figura mantiene su forma y tamaño, pero cambia de orientación.
        </p>
        <p><strong>Ejemplo:</strong> Si una figura se rota 90 grados en sentido horario alrededor del origen, su orientación cambia, pero su forma y tamaño permanecen iguales.</p>

        <h3>3. Reflexión</h3>
        <p>
            La reflexión produce una imagen espejo de la figura con respecto a una línea llamada eje de reflexión. La figura resultante es una imagen especular de la original.
        </p>
        <p><strong>Ejemplo:</strong> Si una figura se refleja respecto al eje y, la imagen resultante será una copia especular de la figura original, invertida a lo largo del eje y.</p>

        <h3>4. Dilatación</h3>
        <p>
            La dilatación cambia el tamaño de una figura mientras mantiene su forma. Esto se hace multiplicando las coordenadas de los puntos por un factor de escala.
        </p>
        <p><strong>Ejemplo:</strong> Si una figura se dilata por un factor de 2, cada uno de sus puntos se aleja del origen el doble de su distancia original, aumentando el tamaño de la figura por un factor de 4 (área) si es una figura plana.</p>

        <h2>Ejemplos de Aplicación</h2>
        
        <h3>Ejemplo 1: Traslación</h3>
        <p>
            Considera un triángulo con vértices en (1,2), (3,4), y (5,2). Si trasladamos este triángulo 3 unidades a la derecha y 2 unidades hacia arriba, los nuevos vértices serán (4,4), (6,6), y (8,4).
        </p>

        <h3>Ejemplo 2: Rotación</h3>
        <p>
            Si tenemos un cuadrado con vértices en (1,1), (1,3), (3,3), y (3,1) y lo rotamos 90 grados alrededor del origen, los nuevos vértices serán (-1,1), (-3,1), (-3,-1), y (-1,-1).
        </p>

        <h3>Ejemplo 3: Reflexión</h3>
        <p>
            Para un triángulo con vértices en (2,1), (4,1), y (3,3), reflejado respecto al eje y, los nuevos vértices serán (-2,1), (-4,1), y (-3,3).
        </p>

        <h3>Ejemplo 4: Dilatación</h3>
        <p>
            Si una figura con vértices en (2,3) y (4,5) se dilata por un factor de 2, los nuevos vértices serán (4,6) y (8,10).
        </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/yuJ1_NqjI9M?si=RLB6Ar4CXV5YIXk0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        razones: `
            <h1>Razones Trigonométricas</h1>

        <h2>Introducción</h2>
        <p>
            Las razones trigonométricas son funciones que relacionan los ángulos de un triángulo rectángulo con las longitudes de sus lados. Estas funciones son fundamentales en trigonometría y tienen aplicaciones en diversas áreas de la matemática y la física.
        </p>

        <h2>Funciones Trigonométricas Básicas</h2>

        <h3>1. Seno (sen)</h3>
        <p>
            La razón trigonométrica seno de un ángulo en un triángulo rectángulo es el cociente entre la longitud del cateto opuesto al ángulo y la longitud de la hipotenusa.
        </p>
        <p><strong>Fórmula:</strong> <br>
            \(\sin(\theta) = \frac{\text{Cateto opuesto}}{\text{Hipotenusa}}\)
        </p>

        <h3>2. Coseno (cos)</h3>
        <p>
            La razón trigonométrica coseno de un ángulo en un triángulo rectángulo es el cociente entre la longitud del cateto adyacente al ángulo y la longitud de la hipotenusa.
        </p>
        <p><strong>Fórmula:</strong> <br>
            \(\cos(\theta) = \frac{\text{Cateto adyacente}}{\text{Hipotenusa}}\)
        </p>

        <h3>3. Tangente (tan)</h3>
        <p>
            La razón trigonométrica tangente de un ángulo en un triángulo rectángulo es el cociente entre la longitud del cateto opuesto al ángulo y la longitud del cateto adyacente.
        </p>
        <p><strong>Fórmula:</strong> <br>
            \(\tan(\theta) = \frac{\text{Cateto opuesto}}{\text{Cateto adyacente}}\)
        </p>

        <h3>4. Cotangente (cot)</h3>
        <p>
            La razón trigonométrica cotangente de un ángulo es el recíproco de la tangente del ángulo.
        </p>
        <p><strong>Fórmula:</strong> <br>
            \(\cot(\theta) = \frac{1}{\tan(\theta)} = \frac{\text{Cateto adyacente}}{\text{Cateto opuesto}}\)
        </p>

        <h3>5. Secante (sec)</h3>
        <p>
            La razón trigonométrica secante de un ángulo es el recíproco del coseno del ángulo.
        </p>
        <p><strong>Fórmula:</strong> <br>
            \(\sec(\theta) = \frac{1}{\cos(\theta)} = \frac{\text{Hipotenusa}}{\text{Cateto adyacente}}\)
        </p>

        <h3>6. Cosecante (csc)</h3>
        <p>
            La razón trigonométrica cosecante de un ángulo es el recíproco del seno del ángulo.
        </p>
        <p><strong>Fórmula:</strong> <br>
            \(\csc(\theta) = \frac{1}{\sin(\theta)} = \frac{\text{Hipotenusa}}{\text{Cateto opuesto}}\)
        </p>

        <h2>Ejemplos</h2>

        <h3>Ejemplo 1</h3>
        <p>
            Considera un triángulo rectángulo con un ángulo de 30 grados, un cateto opuesto de 3 unidades y una hipotenusa de 6 unidades. Calcula las razones trigonométricas para este ángulo.
        </p>
        <p><strong>Solución:</strong> <br>
            \(\sin(30^\circ) = \frac{3}{6} = 0.5\) <br>
            \(\cos(30^\circ) = \frac{\sqrt{3}/2}{1} = \frac{\sqrt{3}}{2} \approx 0.866\) <br>
            \(\tan(30^\circ) = \frac{3}{\sqrt{3}} = \sqrt{3}/3 \approx 0.577\)
        </p>

        <h3>Ejemplo 2</h3>
        <p>
            En un triángulo rectángulo con un ángulo de 45 grados, si la longitud del cateto opuesto es 5 unidades, determina las longitudes de los otros lados.
        </p>
        <p><strong>Solución:</strong> <br>
            \(\sin(45^\circ) = \frac{5}{\text{Hipotenusa}}\) <br>
            \(\text{Hipotenusa} = \frac{5}{\sin(45^\circ)} = \frac{5}{0.707} \approx 7.07\) <br>
            \(\text{Cateto adyacente} = \text{Hipotenusa} \cdot \cos(45^\circ) = 7.07 \cdot 0.707 \approx 5\)
        </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/CRg5jQRj1Hg?si=2ncWyp7XFN93jcub" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        funcionestrigonometricas: `
            <h1>Funciones Trigonométricas</h1>

        <h2>Introducción</h2>
        <p>
            Las funciones trigonométricas son funciones matemáticas que relacionan los ángulos de un triángulo rectángulo con las longitudes de sus lados. Estas funciones se extienden más allá de los triángulos rectángulos y se utilizan para describir fenómenos periódicos en matemáticas, física e ingeniería.
        </p>

        <h2>Funciones Trigonométricas Principales</h2>

        <h3>Seno (sen)</h3>
        <p>
            La función seno de un ángulo es la relación entre el cateto opuesto al ángulo y la hipotenusa en un triángulo rectángulo. En el círculo unitario, el seno de un ángulo es la coordenada y del punto en el círculo unitario correspondiente a ese ángulo.
        </p>
        <p><strong>Fórmula:</strong> <br>
            \(\sin(\theta) = \frac{\text{Cateto opuesto}}{\text{Hipotenusa}}\)
        </p>

        <h3>Coseno (cos)</h3>
        <p>
            La función coseno de un ángulo es la relación entre el cateto adyacente al ángulo y la hipotenusa en un triángulo rectángulo. En el círculo unitario, el coseno de un ángulo es la coordenada x del punto en el círculo unitario correspondiente a ese ángulo.
        </p>
        <p><strong>Fórmula:</strong> <br>
            \(\cos(\theta) = \frac{\text{Cateto adyacente}}{\text{Hipotenusa}}\)
        </p>

        <h3>Tangente (tan)</h3>
        <p>
            La función tangente de un ángulo es la relación entre el cateto opuesto y el cateto adyacente en un triángulo rectángulo. En el círculo unitario, la tangente se puede interpretar como la pendiente de la línea que pasa por el origen y el punto en el círculo unitario correspondiente al ángulo.
        </p>
        <p><strong>Fórmula:</strong> <br>
            \(\tan(\theta) = \frac{\text{Cateto opuesto}}{\text{Cateto adyacente}}\)
        </p>

        <h3>Cotangente (cot)</h3>
        <p>
            La función cotangente de un ángulo es el recíproco de la tangente del ángulo. Representa la relación entre el cateto adyacente y el cateto opuesto en un triángulo rectángulo.
        </p>
        <p><strong>Fórmula:</strong> <br>
            \(\cot(\theta) = \frac{1}{\tan(\theta)} = \frac{\text{Cateto adyacente}}{\text{Cateto opuesto}}\)
        </p>

        <h3>Secante (sec)</h3>
        <p>
            La función secante de un ángulo es el recíproco del coseno del ángulo. Representa la relación entre la hipotenusa y el cateto adyacente en un triángulo rectángulo.
        </p>
        <p><strong>Fórmula:</strong> <br>
            \(\sec(\theta) = \frac{1}{\cos(\theta)} = \frac{\text{Hipotenusa}}{\text{Cateto adyacente}}\)
        </p>

        <h3>Cosecante (csc)</h3>
        <p>
            La función cosecante de un ángulo es el recíproco del seno del ángulo. Representa la relación entre la hipotenusa y el cateto opuesto en un triángulo rectángulo.
        </p>
        <p><strong>Fórmula:</strong> <br>
            \(\csc(\theta) = \frac{1}{\sin(\theta)} = \frac{\text{Hipotenusa}}{\text{Cateto opuesto}}\)
        </p>

        <h2>Propiedades de las Funciones Trigonométricas</h2>

        <h3>Periodicidad</h3>
        <p>
            Las funciones seno y coseno son periódicas con un período de \(360^\circ\) o \(2\pi\) radianes. La tangente, cotangente, secante y cosecante tienen un período de \(180^\circ\) o \(\pi\) radianes.
        </p>

        <h3>Simetrías</h3>
        <p>
            Las funciones trigonométricas tienen propiedades de simetría. Por ejemplo, el seno y el coseno tienen simetría impar y par, respectivamente.
        </p>

        <h2>Ejemplos de Cálculo</h2>

        <h3>Ejemplo 1</h3>
        <p>
            Calcula el seno, coseno y tangente de un ángulo de \(45^\circ\).
        </p>
        <p><strong>Solución:</strong> <br>
            \(\sin(45^\circ) = \frac{1}{\sqrt{2}} \approx 0.707\) <br>
            \(\cos(45^\circ) = \frac{1}{\sqrt{2}} \approx 0.707\) <br>
            \(\tan(45^\circ) = 1\)
        </p>

        <h3>Ejemplo 2</h3>
        <p>
            Dada una hipotenusa de 10 unidades y un cateto adyacente de 6 unidades, calcula el coseno y la secante del ángulo.
        </p>
        <p><strong>Solución:</strong> <br>
            \(\cos(\theta) = \frac{6}{10} = 0.6\) <br>
            \(\sec(\theta) = \frac{1}{\cos(\theta)} = \frac{1}{0.6} \approx 1.667\)
        </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/8zVW0U2jn8U?si=Q18CSxZtZ_nK8Zqa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        identidades: `
            <h1>Identidades Trigonométricas</h1>

        <h2>Introducción</h2>
        <p>
            Las identidades trigonométricas son ecuaciones que involucran funciones trigonométricas y que son verdaderas para todos los valores de las variables para los cuales están definidas. Estas identidades son fundamentales en matemáticas y física, y se utilizan para simplificar expresiones trigonométricas y resolver ecuaciones.
        </p>

        <h2>Principales Identidades Trigonométricas</h2>

        <h3>Identidades Pitagóricas</h3>
        <p>
            Las identidades pitagóricas se derivan del teorema de Pitágoras aplicado al círculo unitario. Las principales identidades son:
        </p>
        <ul>
            <li><strong>Primera Identidad:</strong> <br>
                \(\sin^2(\theta) + \cos^2(\theta) = 1\)
            </li>
            <li><strong>Segunda Identidad:</strong> <br>
                \(\tan^2(\theta) + 1 = \sec^2(\theta)\)
            </li>
            <li><strong>Tercera Identidad:</strong> <br>
                \(1 + \cot^2(\theta) = \csc^2(\theta)\)
            </li>
        </ul>

        <h3>Identidades de Ángulo Doble</h3>
        <p>
            Las identidades de ángulo doble permiten calcular las funciones trigonométricas de \(2\theta\) en términos de \(\theta\). Las fórmulas son:
        </p>
        <ul>
            <li><strong>Para el Seno:</strong> <br>
                \(\sin(2\theta) = 2 \sin(\theta) \cos(\theta)\)
            </li>
            <li><strong>Para el Coseno:</strong> <br>
                \(\cos(2\theta) = \cos^2(\theta) - \sin^2(\theta)\) <br>
                También se puede escribir como: <br>
                \(\cos(2\theta) = 2 \cos^2(\theta) - 1\) <br>
                o: <br>
                \(\cos(2\theta) = 1 - 2 \sin^2(\theta)\)
            </li>
        </ul>

        <h3>Identidades de Ángulo Suma y Diferencia</h3>
        <p>
            Estas identidades permiten calcular las funciones trigonométricas de la suma o diferencia de dos ángulos:
        </p>
        <ul>
            <li><strong>Para el Seno:</strong> <br>
                \(\sin(\alpha \pm \beta) = \sin(\alpha) \cos(\beta) \pm \cos(\alpha) \sin(\beta)\)
            </li>
            <li><strong>Para el Coseno:</strong> <br>
                \(\cos(\alpha \pm \beta) = \cos(\alpha) \cos(\beta) \mp \sin(\alpha) \sin(\beta)\)
            </li>
            <li><strong>Para la Tangente:</strong> <br>
                \(\tan(\alpha \pm \beta) = \frac{\tan(\alpha) \pm \tan(\beta)}{1 \mp \tan(\alpha) \tan(\beta)}\)
            </li>
        </ul>

        <h3>Identidades de Co-Ángulos</h3>
        <p>
            Estas identidades relacionan las funciones trigonométricas de un ángulo con las de su ángulo complementario:
        </p>
        <ul>
            <li><strong>Seno y Coseno:</strong> <br>
                \(\sin(90^\circ - \theta) = \cos(\theta)\) <br>
                \(\cos(90^\circ - \theta) = \sin(\theta)\)
            </li>
            <li><strong>Tangente y Cotangente:</strong> <br>
                \(\tan(90^\circ - \theta) = \cot(\theta)\) <br>
                \(\cot(90^\circ - \theta) = \tan(\theta)\)
            </li>
        </ul>

        <h2>Ejemplos de Aplicación</h2>

        <h3>Ejemplo 1</h3>
        <p>
            Simplifica la expresión \(\sin^2(\theta) + \cos^2(\theta)\).
        </p>
        <p><strong>Solución:</strong> <br>
            Usando la primera identidad pitagórica: <br>
            \(\sin^2(\theta) + \cos^2(\theta) = 1\)
        </p>

        <h3>Ejemplo 2</h3>
        <p>
            Encuentra el valor de \(\sin(2\theta)\) si \(\sin(\theta) = \frac{1}{2}\) y \(\cos(\theta) = \frac{\sqrt{3}}{2}\).
        </p>
        <p><strong>Solución:</strong> <br>
            Usando la identidad de ángulo doble para el seno: <br>
            \(\sin(2\theta) = 2 \sin(\theta) \cos(\theta)\) <br>
            \(\sin(2\theta) = 2 \cdot \frac{1}{2} \cdot \frac{\sqrt{3}}{2} = \frac{\sqrt{3}}{2}\)
        </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/6mqBASJ2d3k?si=dYiOQIPPcuTILkeH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        senoscosenos: `
            <h1>Ley de Senos y Cosenos</h1>

        <h2>Introducción</h2>
        <p>
            La Ley de Senos y la Ley de Cosenos son herramientas fundamentales en trigonometría que se utilizan para resolver triángulos que no son necesariamente rectángulos. Estas leyes son útiles para encontrar longitudes de lados y medidas de ángulos en triángulos generales.
        </p>

        <h2>Ley de Senos</h2>
        <p>
            La Ley de Senos establece una relación entre los lados de un triángulo y los ángulos opuestos a esos lados. La fórmula general es:
        </p>
        <p><strong>\(\frac{a}{\sin(A)} = \frac{b}{\sin(B)} = \frac{c}{\sin(C)}\)</strong></p>
        <p>
            Donde:
            <ul>
                <li><strong>a, b, c:</strong> Longitudes de los lados del triángulo.</li>
                <li><strong>A, B, C:</strong> Ángulos opuestos a los lados correspondientes.</li>
            </ul>
        </p>
        <p>
            Esta ley es particularmente útil cuando se conoce:
            <ul>
                <li>Dos ángulos y un lado (caso AAS o ASA).</li>
                <li>Dos lados y un ángulo no incluido (caso SSA).</li>
            </ul>
        </p>

        <h3>Ejemplo de la Ley de Senos</h3>
        <p>
            Supongamos que en un triángulo se conocen los ángulos \(A = 30^\circ\), \(B = 45^\circ\) y el lado \(a = 10\). Queremos encontrar el lado \(b\).
        </p>
        <p><strong>Solución:</strong></p>
        <p>
            Primero, encuentra el ángulo \(C\):
            \[
            C = 180^\circ - A - B = 180^\circ - 30^\circ - 45^\circ = 105^\circ
            \]
            Luego, usa la Ley de Senos:
            \[
            \frac{a}{\sin(A)} = \frac{b}{\sin(B)}
            \]
            Resolviendo para \(b\):
            \[
            b = \frac{a \cdot \sin(B)}{\sin(A)} = \frac{10 \cdot \sin(45^\circ)}{\sin(30^\circ)}
            \]
            \[
            b \approx \frac{10 \cdot 0.7071}{0.5} \approx 14.14
            \]
        </p>

        <h2>Ley de Cosenos</h2>
        <p>
            La Ley de Cosenos es útil para encontrar un lado en un triángulo cuando se conocen los otros dos lados y el ángulo incluido entre ellos. También se puede usar para encontrar el ángulo cuando se conocen los tres lados. La fórmula general es:
        </p>
        <p><strong>\(c^2 = a^2 + b^2 - 2ab \cdot \cos(C)\)</strong></p>
        <p>
            Donde:
            <ul>
                <li><strong>a, b, c:</strong> Longitudes de los lados del triángulo.</li>
                <li><strong>C:</strong> Ángulo incluido entre los lados a y b.</li>
            </ul>
        </p>
        <p>
            Esta ley es útil cuando se conoce:
            <ul>
                <li>Dos lados y el ángulo incluido (caso SAS).</li>
                <li>Los tres lados (caso SSS) para encontrar un ángulo.</li>
            </ul>
        </p>

        <h3>Ejemplo de la Ley de Cosenos</h3>
        <p>
            Supongamos que en un triángulo se conocen los lados \(a = 5\), \(b = 7\) y el ángulo \(C = 60^\circ\). Queremos encontrar el lado \(c\).
        </p>
        <p><strong>Solución:</strong></p>
        <p>
            Usa la Ley de Cosenos:
            \[
            c^2 = a^2 + b^2 - 2ab \cdot \cos(C)
            \]
            Sustituyendo los valores:
            \[
            c^2 = 5^2 + 7^2 - 2 \cdot 5 \cdot 7 \cdot \cos(60^\circ)
            \]
            \[
            c^2 = 25 + 49 - 2 \cdot 5 \cdot 7 \cdot 0.5
            \]
            \[
            c^2 = 25 + 49 - 35 = 39
            \]
            \[
            c \approx \sqrt{39} \approx 6.24
            \]
        </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/e2_WDo5yK_Q?si=-P2QRuuOvBgVEOnW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        aplicaciones: `
            <h1>Aplicaciones de la Trigonometría</h1>

        <h2>Introducción</h2>
        <p>
            La trigonometría es una rama de las matemáticas que estudia las relaciones entre los ángulos y los lados de los triángulos. Además de su utilidad en la resolución de triángulos, la trigonometría tiene diversas aplicaciones prácticas en distintas áreas. Estas aplicaciones van desde la navegación y la arquitectura hasta la ingeniería y las ciencias físicas.
        </p>

        <h2>Aplicaciones en la Navegación</h2>
        <p>
            La trigonometría es fundamental en la navegación para determinar la posición y el rumbo. Los navegantes utilizan las funciones trigonométricas para calcular distancias entre puntos en un mapa y para encontrar la dirección correcta al moverse de un lugar a otro.
        </p>
        <p>
            Por ejemplo, al utilizar un sextante, los navegantes miden el ángulo entre un objeto celestial y el horizonte para determinar la latitud y longitud de su ubicación en el mar.
        </p>

        <h2>Aplicaciones en la Arquitectura</h2>
        <p>
            En la arquitectura, la trigonometría ayuda a diseñar y construir estructuras complejas. Los arquitectos y constructores utilizan trigonometría para calcular las dimensiones y las proporciones de los edificios, así como para asegurarse de que las estructuras sean estables y funcionales.
        </p>
        <p>
            Un ejemplo común es el cálculo de la inclinación de techos y rampas para garantizar que cumplan con los estándares de seguridad y funcionalidad.
        </p>

        <h2>Aplicaciones en la Ingeniería</h2>
        <p>
            Los ingenieros utilizan la trigonometría en diversas disciplinas, como la ingeniería civil, mecánica y eléctrica. En ingeniería civil, por ejemplo, se emplea para diseñar puentes y carreteras, mientras que en ingeniería mecánica se usa para analizar las fuerzas en mecanismos y estructuras.
        </p>
        <p>
            La trigonometría también es esencial en la ingeniería eléctrica para analizar circuitos alternos y en la determinación de las características de ondas electromagnéticas.
        </p>

        <h2>Aplicaciones en las Ciencias Físicas</h2>
        <p>
            En física, la trigonometría se utiliza para estudiar y describir fenómenos como el movimiento de los proyectiles y las ondas. Las funciones trigonométricas ayudan a modelar el comportamiento de las ondas sonoras y electromagnéticas, así como a analizar el movimiento oscilatorio.
        </p>
        <p>
            Un ejemplo es el uso de las funciones seno y coseno para describir el movimiento armónico simple en la física de oscilaciones.
        </p>

        <h2>Aplicaciones en la Gráfica Computacional</h2>
        <p>
            En la gráfica computacional y en los videojuegos, la trigonometría se emplea para calcular las posiciones y los movimientos de los objetos en un espacio tridimensional. Las transformaciones geométricas, como rotaciones y escalas, se basan en funciones trigonométricas para crear gráficos realistas.
        </p>
        <p>
            Por ejemplo, para renderizar una rotación en un juego, se utilizan las funciones trigonométricas para calcular la nueva posición de los objetos en pantalla.
        </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Z_vTPsLrndE?si=hbjVMPs3NDLDyD9D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
