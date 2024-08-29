let currentExam = null;

// Definición de exámenes
const exams = {
    matematicas: [
        // Examen 1 de matemáticas
        shuffle([
            { question: "¿Cuál es el resultado de simplificar 3x + 4x?", answers: ["7x", "12x", "x"], correct: 0 },
            { question: "¿Cómo se resuelve la ecuación 2x + 5 = 15?", answers: ["x = 5", "x = 10", "x = 3"], correct: 2 },
            { question: "¿Cuál es la fórmula general para resolver ecuaciones cuadráticas?", answers: ["x = (-b ± √(b² - 4ac)) / 2a", "x = -b / a", "x = (b ± √(b² - 4ac)) / 2"], correct: 0 },
            { question: "¿Qué es una función lineal?", answers: ["Una función con la forma y = mx + b", "Una función con la forma y = ax² + bx + c", "Una función que no tiene pendiente"], correct: 0 },
            { question: "¿Cuál es el grado de un polinomio con el término 4x³?", answers: ["3", "2", "1"], correct: 0 },
            { question: "¿Cómo se calcula el área de un triángulo con base 10 y altura 5?", answers: ["25 unidades²", "50 unidades²", "15 unidades²"], correct: 1 },
            { question: "¿Cuál es la pendiente de la recta representada por la ecuación y = 3x + 4?", answers: ["3", "4", "7"], correct: 0 },
            { question: "¿Qué es un polinomio?", answers: ["Una expresión algebraica con términos combinados por suma o resta", "Una función trigonométrica", "Un tipo de ecuación diferencial"], correct: 0 },
            { question: "¿Qué es un sistema de ecuaciones?", answers: ["Un conjunto de ecuaciones que se resuelven simultáneamente", "Una ecuación de segundo grado", "Una fórmula para calcular el área"], correct: 0 },
            { question: "¿Cuál es la fórmula del área de un círculo?", answers: ["πr²", "2πr", "πd"], correct: 0 }
        ]),
        // Examen 2 de matemáticas
        shuffle([
            { question: "¿Cuál es la forma general de una ecuación cuadrática?", answers: ["ax² + bx + c = 0", "ax + b = c", "a(x + b)² = c"], correct: 0 },
            { question: "¿Qué es una función cuadrática?", answers: ["Una función con la forma y = ax² + bx + c", "Una función con la forma y = mx + b", "Una función que no tiene términos constantes"], correct: 0 },
            { question: "¿Cómo se calcula el volumen de un cubo con lado 3?", answers: ["27 unidades³", "9 unidades³", "18 unidades³"], correct: 0 },
            { question: "¿Qué es un ángulo recto?", answers: ["Un ángulo de 90 grados", "Un ángulo de 180 grados", "Un ángulo de 45 grados"], correct: 0 },
            { question: "¿Cómo se calcula el perímetro de un rectángulo con lados de 4 y 7 unidades?", answers: ["22 unidades", "28 unidades", "14 unidades"], correct: 0 },
            { question: "¿Qué es una función lineal?", answers: ["Una función con la forma y = mx + b", "Una función con la forma y = ax² + bx + c", "Una función que no tiene pendiente"], correct: 0 },
            { question: "¿Cuál es la fórmula para calcular la pendiente de una recta?", answers: ["(y2 - y1) / (x2 - x1)", "y = mx + b", "ax + by = c"], correct: 0 },
            { question: "¿Qué es un polinomio?", answers: ["Una expresión algebraica con términos combinados por suma o resta", "Una función trigonométrica", "Un tipo de ecuación diferencial"], correct: 0 },
            { question: "¿Cómo se representa gráficamente una función lineal?", answers: ["Como una línea recta", "Como una parábola", "Como una curva"], correct: 0 },
            { question: "¿Cuál es la fórmula del área de un triángulo?", answers: ["(base × altura) / 2", "base × altura", "base + altura"], correct: 0 }
        ])
    ],
    quimica: [
        // Examen 1 de química general
        shuffle([
            { question: "¿Cuál es el número atómico del oxígeno?", answers: ["8", "16", "2"], correct: 0 },
            { question: "¿Qué tipo de enlace forma el agua?", answers: ["Enlace covalente", "Enlace iónico", "Enlace metálico"], correct: 0 },
            { question: "¿Cuál es el estado de la materia con partículas muy separadas y sin forma definida?", answers: ["Gas", "Líquido", "Sólido"], correct: 0 },
            { question: "¿Qué estudia la termodinámica?", answers: ["La transferencia de calor y trabajo", "La estructura atómica", "Las reacciones químicas"], correct: 0 },
            { question: "¿Qué es el equilibrio químico?", answers: ["El estado en el que las concentraciones de reactivos y productos no cambian con el tiempo", "Una reacción que produce solo un producto", "La formación de un sólido en una solución"], correct: 0 },
            { question: "¿Qué es un ácido según la teoría de Arrhenius?", answers: ["Una sustancia que libera iones de hidrógeno en solución", "Una sustancia que acepta protones", "Una sustancia que no reacciona con agua"], correct: 0 },
            { question: "¿Qué es una sal?", answers: ["Un compuesto formado por la reacción de un ácido y una base", "Un tipo de ácido", "Una base química"], correct: 0 },
            { question: "¿Cuál es el símbolo químico del cloro?", answers: ["Cl", "C", "Co"], correct: 0 },
            { question: "¿Qué tipo de reacción ocurre cuando el zinc reacciona con ácido clorhídrico?", answers: ["Reacción de oxidación-reducción", "Reacción de neutralización", "Reacción de combustión"], correct: 0 },
            { question: "¿Qué es un ácido según la teoría de Arrhenius?", answers: ["Una sustancia que libera iones de hidrógeno en solución", "Una sustancia que acepta protones", "Una sustancia que no reacciona con agua"], correct: 0 }
        ]),
        // Examen 2 de química orgánica
        shuffle([
            { question: "¿Qué grupo funcional tiene la fórmula -OH?", answers: ["Hidroxi", "Aldehído", "Ceto"], correct: 0 },
            { question: "¿Qué tipo de compuesto es el etano?", answers: ["Un hidrocarburo saturado", "Un alcohol", "Un ácido"], correct: 0 },
            { question: "¿Cuál es el nombre del grupo funcional -COOH?", answers: ["Carboxilo", "Aldehído", "Cetona"], correct: 0 },
            { question: "¿Cuál es el nombre del compuesto con fórmula C2H6?", answers: ["Etano", "Metano", "Propano"], correct: 0 },
            { question: "¿Qué es la isomería en química orgánica?", answers: ["La existencia de compuestos con la misma fórmula molecular pero diferente estructura", "La formación de polímeros", "La reacción de estiramiento"], correct: 0 },
            { question: "¿Cuál es el nombre del compuesto con fórmula C6H12O6?", answers: ["Glucosa", "Etanol", "Propano"], correct: 0 },
            { question: "¿Qué es un polímero?", answers: ["Una macromolécula formada por la repetición de unidades estructurales", "Un tipo de ácido", "Un compuesto inorgánico"], correct: 0 },
            { question: "¿Qué es un compuesto aromático?", answers: ["Un compuesto con anillos de benceno en su estructura", "Un tipo de ácido", "Un compuesto con enlaces simples"], correct: 0 },
            { question: "¿Cuál es el grupo funcional de los aldehídos?", answers: ["-CHO", "-OH", "-COOH"], correct: 0 },
            { question: "¿Qué es una reacción de esterificación?", answers: ["Una reacción entre un ácido y un alcohol para formar un éster", "Una reacción de oxidación", "Una reacción de reducción"], correct: 0 }
        ])
    ]
};

// Función para mezclar un array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Función para iniciar el examen
function startExam(subject) {
    const examNum = Math.floor(Math.random() * 2); // Selección aleatoria entre Examen 1 y Examen 2
    currentExam = exams[subject][examNum];
    document.getElementById('exam-container').classList.remove('hidden');
    document.getElementById('finish-exam').classList.remove('hidden');
    document.getElementById('exam-title').innerText = subject.charAt(0).toUpperCase() + subject.slice(1) + ' - Examen ' + (examNum + 1);
    loadQuestions();
}

// Función para cargar todas las preguntas
function loadQuestions() {
    document.getElementById('question-container').innerHTML = currentExam.map((question, index) => `
        <div class="question">
            <h3>${index + 1}. ${question.question}</h3>
            ${question.answers.map((answer, i) => `
                <label>
                    <input type="radio" name="question${index}" value="${i}">
                    ${answer}
                </label>
            `).join('')}
        </div>
    `).join('');
}

// Función para finalizar el examen
function submitExam(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
    const formData = new FormData(document.getElementById('exam-form'));
    const answers = Array.from(formData.values());
    const score = calculateScore(answers);
    document.getElementById('result').innerHTML = `Has obtenido ${score} de ${currentExam.length} preguntas correctas.`;
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('exam-container').classList.add('hidden');
}

// Función para calcular el puntaje
function calculateScore(answers) {
    return answers.reduce((score, answer, index) => {
        if (parseInt(answer, 10) === currentExam[index].correct) {
            score++;
        }
        return score;
    }, 0);
}

// Inicialización de eventos para iniciar el examen
document.getElementById('start-matematicas').addEventListener('click', () => startExam('matematicas'));
document.getElementById('start-quimica').addEventListener('click', () => startExam('quimica'));
document.getElementById('exam-form').addEventListener('submit', submitExam);
