const questionnaireData = {
    questions: [
        {
            id: 1,
            category: "tipo_rehabilitacion",
            question: "¿Qué tipo de rehabilitación o habilitación necesitas?",
            type: "checkbox",
            options: [
                { value: "fisica", label: "Rehabilitación Física", icon: "🏃" },
                { value: "sensorial", label: "Estimulación Sensorial", icon: "👁️" },
                { value: "cognitiva", label: "Rehabilitación Cognitiva", icon: "🧠" },
                { value: "motriz", label: "Habilitación Motriz", icon: "🤲" },
                { value: "auditiva", label: "Habilitación Auditiva", icon: "👂" }
            ]
        },
        {
            id: 2,
            category: "area_afectada",
            question: "¿Qué área del cuerpo necesita atención?",
            type: "checkbox",
            options: [
                { value: "manos", label: "Manos y dedos", icon: "🖐️" },
                { value: "brazos", label: "Brazos", icon: "💪" },
                { value: "piernas", label: "Piernas", icon: "🦵" },
                { value: "pies", label: "Pies", icon: "🦶" },
                { value: "cuerpo_completo", label: "Cuerpo completo", icon: "🧍" }
            ]
        },
        {
            id: 3,
            category: "sintomas",
            question: "¿Cuáles son tus síntomas o limitaciones principales?",
            type: "checkbox",
            options: [
                { value: "debilidad_muscular", label: "Debilidad muscular", icon: "💔" },
                { value: "falta_coordinacion", label: "Falta de coordinación", icon: "🔄" },
                { value: "dolor", label: "Dolor o molestia", icon: "😣" },
                { value: "perdida_sensibilidad", label: "Pérdida de sensibilidad", icon: "🚫" },
                { value: "rigidez", label: "Rigidez o espasticidad", icon: "🔒" },
                { value: "falta_equilibrio", label: "Falta de equilibrio", icon: "⚖️" }
            ]
        },
        {
            id: 4,
            category: "rango_movimiento",
            question: "¿Cuál es tu rango de movimiento actual?",
            type: "single",
            options: [
                { value: "muy_limitado", label: "Muy limitado (poco movimiento)", icon: "🔴" },
                { value: "limitado", label: "Limitado (movimiento reducido)", icon: "🟡" },
                { value: "moderado", label: "Moderado (movimiento aceptable)", icon: "🟢" },
                { value: "bueno", label: "Bueno (movimiento casi normal)", icon: "🟢🟢" }
            ]
        },
        {
            id: 5,
            category: "historial_medico",
            question: "¿Tienes alguna condición médica diagnosticada?",
            type: "checkbox",
            options: [
                { value: "accidente_cerebrovascular", label: "Accidente cerebrovascular (ACV)", icon: "🧠" },
                { value: "traumatismo", label: "Traumatismo craneoencefálico", icon: "⚠️" },
                { value: "paralisis_cerebral", label: "Parálisis cerebral", icon: "🧬" },
                { value: "lesion_medular", label: "Lesión medular", icon: "🦴" },
                { value: "artritis", label: "Artritis/Artrosis", icon: "🦴" },
                { value: "autismo", label: "Autismo", icon: "🌈" },
                { value: "TDAH", label: "TDAH/Dificultades de atención", icon: "🎯" },
                { value: "neuropatia", label: "Neuropatía", icon: "⚡" },
                { value: "ninguna", label: "Ninguna diagnosticada", icon: "✅" }
            ]
        },
        {
            id: 6,
            category: "duracion_rehabilitacion",
            question: "¿Hace cuánto tiempo iniciaste la rehabilitación?",
            type: "single",
            options: [
                { value: "menos_1_mes", label: "Menos de 1 mes", icon: "📅" },
                { value: "1_3_meses", label: "1-3 meses", icon: "📅" },
                { value: "3_6_meses", label: "3-6 meses", icon: "📅" },
                { value: "mas_6_meses", label: "Más de 6 meses", icon: "📅" },
                { value: "no_ha_iniciado", label: "Aún no ha iniciado", icon: "🚀" }
            ]
        },
        {
            id: 7,
            category: "intensidad_ejercicio",
            question: "¿Cuántas veces por semana realizas terapia/ejercicios?",
            type: "single",
            options: [
                { value: "no_realiza", label: "No realiza", icon: "❌" },
                { value: "1_2_veces", label: "1-2 veces por semana", icon: "📍" },
                { value: "3_4_veces", label: "3-4 veces por semana", icon: "📍📍" },
                { value: "5_mas_veces", label: "5 o más veces por semana", icon: "📍📍📍" }
            ]
        },
        {
            id: 8,
            category: "sensibilidad",
            question: "¿Tienes alguna sensibilidad especial o alergia?",
            type: "checkbox",
            options: [
                { value: "sin_sensibilidad", label: "Sin sensibilidades especiales", icon: "✅" },
                { value: "hipersensiblidad_tactil", label: "Hipersensibilidad táctil", icon: "🎭" },
                { value: "sensibilidad_luz", label: "Sensibilidad a la luz", icon: "💡" },
                { value: "sensibilidad_sonido", label: "Sensibilidad al sonido", icon: "🔊" },
                { value: "alergia_latex", label: "Alergia al látex", icon: "⚠️" },
                { value: "alergia_otros_materiales", label: "Alergia a otros materiales", icon: "⚠️" }
            ]
        },
        {
            id: 9,
            category: "objetivos",
            question: "¿Cuál es tu objetivo principal?",
            type: "single",
            options: [
                { value: "recuperar_funcionalidad", label: "Recuperar funcionalidad perdida", icon: "🎯" },
                { value: "mejorar_sensibilidad", label: "Mejorar sensibilidad", icon: "👁️" },
                { value: "aumentar_fuerza", label: "Aumentar fuerza y resistencia", icon: "💪" },
                { value: "mejorar_coordinacion", label: "Mejorar coordinación y equilibrio", icon: "⚖️" },
                { value: "mantener_capacidades", label: "Mantener capacidades actuales", icon: "🛡️" }
            ]
        },
        {
            id: 10,
            category: "edad",
            question: "¿Cuál es tu rango de edad?",
            type: "single",
            options: [
                { value: "0_5", label: "0-5 años (Estimulación temprana)", icon: "👶" },
                { value: "6_12", label: "6-12 años (Infantil)", icon: "👧" },
                { value: "13_17", label: "13-17 años (Adolescente)", icon: "🧑" },
                { value: "18_40", label: "18-40 años (Adulto joven)", icon: "👨" },
                { value: "41_65", label: "41-65 años (Adulto mayor)", icon: "👴" },
                { value: "65_plus", label: "65+ años (Adulto mayor avanzado)", icon: "👵" }
            ]
        }
    ],
    kitComponents: {
        fisica: {
            items: [
                { name: "Bandas elásticas resistentes", quantity: 3 },
                { name: "Pelotas terapéuticas", quantity: 4 },
                { name: "Barras de equilibrio", quantity: 1 }
            ]
        },
        sensorial: {
            items: [
                { name: "Pelotas sensoriales texturizadas", quantity: 5 },
                { name: "Tubos sensoriales", quantity: 2 },
                { name: "Herramientas de estimulación táctil", quantity: 3 }
            ]
        },
        cognitiva: {
            items: [
                { name: "Fichas de ejercicios mentales", quantity: 1 },
                { name: "Videos de entrenamiento cognitivo", quantity: 1 },
                { name: "Guía de estimulación cerebral", quantity: 1 }
            ]
        },
        motriz: {
            items: [
                { name: "Conos de coordinación", quantity: 6 },
                { name: "Escalera de agilidad", quantity: 1 },
                { name: "Pelotas de diferentes pesos", quantity: 4 }
            ]
        },
        auditiva: {
            items: [
                { name: "Audífonos de prueba", quantity: 1 },
                { name: "Ejercicios auditivos", quantity: 1 },
                { name: "Materiales informativos", quantity: 1 }
            ]
        }
    }
};

class Questionnaire {
    constructor() {
        this.currentQuestion = 0;
        this.answers = {};
        this.totalQuestions = questionnaireData.questions.length;
        this.containerEl = null;
    }

    initialize(containerId) {
        this.containerEl = document.getElementById(containerId);
        if (!this.containerEl) return;
        this.render();
    }

    render() {
        if (this.currentQuestion >= this.totalQuestions) {
            this.showResults();
            return;
        }
        const question = questionnaireData.questions[this.currentQuestion];
        this.containerEl.innerHTML = this.getQuestionHTML(question);
        this.attachEventListeners(question);
    }

    getQuestionHTML(question) {
        const progress = ((this.currentQuestion / this.totalQuestions) * 100).toFixed(0);
        let html = `
            <div class="questionnaire-container animate__animated animate__fadeIn">
                <div class="question-header">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progress}%"></div>
                    </div>
                    <p class="progress-text">Pregunta ${this.currentQuestion + 1} de ${this.totalQuestions}</p>
                </div>
                <h2 class="question-title">${question.question}</h2>
                <div class="options-container">
        `;

        if (question.type === "checkbox") {
            html += this.renderCheckboxOptions(question);
        } else if (question.type === "single") {
            html += this.renderSingleOptions(question);
        }

        html += `
                </div>
                <div class="navigation-buttons">
                    <button class="btn btn-primary" id="nextBtn">
                        ${this.currentQuestion === this.totalQuestions - 1 ? 'Ver Resultados' : 'Siguiente'} <i class="fas fa-arrow-right"></i>
                    </button>
                    <button class="btn btn-secondary" id="prevBtn" style="display: ${this.currentQuestion === 0 ? 'none' : 'block'}">
                        <i class="fas fa-arrow-left"></i> Anterior
                    </button>
                </div>
            </div>
        `;
        return html;
    }

    renderCheckboxOptions(question) {
        return question.options.map(option => `
            <label class="option-label checkbox-option">
                <input type="checkbox" name="${question.id}" value="${option.value}" class="option-input"
                    ${this.isOptionSelected(question.id, option.value) ? 'checked' : ''}
                />
                <div class="option-content">
                    <span class="option-icon">${option.icon}</span>
                    <span class="option-text">${option.label}</span>
                </div>
            </label>
        `).join('');
    }

    renderSingleOptions(question) {
        return question.options.map(option => `
            <label class="option-label radio-option">
                <input type="radio" name="${question.id}" value="${option.value}" class="option-input"
                    ${this.isOptionSelected(question.id, option.value) ? 'checked' : ''}
                />
                <div class="option-content">
                    <span class="option-icon">${option.icon}</span>
                    <span class="option-text">${option.label}</span>
                </div>
            </label>
        `).join('');
    }

    isOptionSelected(questionId, optionValue) {
        const answer = this.answers[questionId];
        if (!answer) return false;
        return Array.isArray(answer) ? answer.includes(optionValue) : answer === optionValue;
    }

    attachEventListeners(question) {
        const inputs = this.containerEl.querySelectorAll('input[type="checkbox"], input[type="radio"]');
        const nextBtn = this.containerEl.querySelector('#nextBtn');
        const prevBtn = this.containerEl.querySelector('#prevBtn');

        inputs.forEach(input => {
            input.addEventListener('change', () => this.handleInputChange(question.id, input));
        });

        nextBtn.addEventListener('click', () => this.nextQuestion());
        if (prevBtn) prevBtn.addEventListener('click', () => this.previousQuestion());
    }

    handleInputChange(questionId, input) {
        const question = questionnaireData.questions.find(q => q.id === questionId);
        
        if (question.type === "checkbox") {
            if (!this.answers[questionId]) this.answers[questionId] = [];
            if (input.checked) {
                this.answers[questionId].push(input.value);
            } else {
                this.answers[questionId] = this.answers[questionId].filter(v => v !== input.value);
            }
        } else {
            this.answers[questionId] = input.value;
        }
    }

    nextQuestion() {
        if (this.currentQuestion < this.totalQuestions - 1) {
            this.currentQuestion++;
            this.render();
        } else {
            this.showResults();
        }
    }

    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.render();
        }
    }

    showResults() {
        const datosEnvio = this.prepareDataForServer();
        const validacion = this.validateData(datosEnvio);
        
        if (!validacion.valido) {
            this.displayError(validacion.error);
            return;
        }
        
        this.sendToServer(datosEnvio);
    }

    prepareDataForServer() {
        return {
            tipo_rehabilitacion: this.answers[1] || [],
            area_afectada: this.answers[2] || [],
            sintomas: this.answers[3] || [],
            rango_movimiento: this.answers[4] || "",
            historial_medico: this.answers[5] || [],
            duracion_rehabilitacion: this.answers[6] || "",
            intensidad_ejercicio: this.answers[7] || "",
            sensibilidad: this.answers[8] || [],
            objetivos: this.answers[9] || "",
            edad: this.answers[10] || "",
            nombre: "",
            email: "",
            telefono: ""
        };
    }

    validateData(datos) {
        const required = ['tipo_rehabilitacion', 'edad'];
        
        for (let field of required) {
            if (!datos[field] || (Array.isArray(datos[field]) && datos[field].length === 0)) {
                return { valido: false, error: `Campo obligatorio: ${field}` };
            }
        }
        
        return { valido: true };
    }

    sendToServer(datos) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:3000/api/respuestas', true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = () => {
            if (xhr.status === 200 || xhr.status === 201) {
                const response = JSON.parse(xhr.responseText);
                this.displayResults(response);
            } else {
                this.displayError(xhr.status);
            }
        };

        xhr.onerror = () => {
            this.displayError('conexión');
        };

        xhr.send(JSON.stringify(datos));
    }

    displayResults(response) {
        const html = `
            <div class="results-container animate__animated animate__fadeIn">
                <div class="results-header">
                    <div class="results-badge">✓ EVALUACIÓN COMPLETADA</div>
                    <h2 class="results-title">Tu Kit Personalizado</h2>
                </div>
                <div class="results-content">
                    <div class="quick-summary">
                        <div class="summary-item">
                            <span class="summary-icon">📋</span>
                            <div class="summary-text">
                                <p class="summary-label">Registro guardado</p>
                                <p class="summary-value">ID: ${response.id}</p>
                            </div>
                        </div>
                    </div>
                    <div class="kit-components-section">
                        <h3 class="section-title">📦 Tu Kit Incluye</h3>
                        <div class="components-grid">
        `;

        const types = this.answers[1] || [];
        types.forEach(type => {
            if (questionnaireData.kitComponents[type]) {
                const component = questionnaireData.kitComponents[type];
                html += `
                    <div class="component-card-compact">
                        <h4 class="component-title-compact">${this.formatLabel(type)}</h4>
                        <div class="items-compact">
                            ${component.items.map(item => `<div class="item-compact">• ${item.name} x${item.quantity}</div>`).join('')}
                        </div>
                    </div>
                `;
            }
        });

        html += `
                        </div>
                    </div>
                    <div class="action-buttons">
                        <button class="btn btn-primary" onclick="location.reload()">
                            <i class="fas fa-redo"></i> Nuevo Cuestionario
                        </button>
                    </div>
                </div>
            </div>
        `;
        this.containerEl.innerHTML = html;
    }

    displayError(tipo) {
        const mensaje = typeof tipo === 'string' ? tipo : (tipo === 'conexión' ? 'Error de conexión con el servidor' : `Error ${tipo}`);
        this.containerEl.innerHTML = `
            <div class="error-container">
                <h2>Error al guardar datos</h2>
                <p>${mensaje}</p>
                <button class="btn btn-secondary" onclick="location.reload()">Reintentar</button>
            </div>
        `;
    }

    formatLabel(text) {
        const labels = {
            fisica: "Rehabilitación Física",
            sensorial: "Estimulación Sensorial",
            cognitiva: "Rehabilitación Cognitiva",
            motriz: "Habilitación Motriz",
            auditiva: "Habilitación Auditiva"
        };
        return labels[text] || text;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const cuestionario = new Questionnaire();
    cuestionario.initialize('cuestionario-container');
    window.cuestionario = cuestionario;
});
