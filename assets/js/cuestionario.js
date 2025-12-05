// ============================================
// CUESTIONARIO INTERACTIVO - NEUROSENSE KIT
// ============================================

// Datos del cuestionario
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

    // Componentes recomendados por categoría
    kitComponents: {
        fisica: {
            items: [
                { name: "Bandas elásticas resistentes", quantity: 3, description: "Diferentes niveles de resistencia para fortalecimiento" },
                { name: "Pelotas terapéuticas", quantity: 4, description: "Diferentes tamaños para ejercicios de fuerza y coordinación" },
                { name: "Barras de equilibrio", quantity: 1, description: "Para trabajar estabilidad y coordinación" }
            ],
            priority: "alta"
        },
        sensorial: {
            items: [
                { name: "Pelotas sensoriales texturizadas", quantity: 5, description: "Diferentes texturas para estimulación táctil" },
                { name: "Tubos sensoriales", quantity: 2, description: "Estimulación visual y táctil" },
                { name: "Herramientas de estimulación táctil", quantity: 3, description: "Para diferentes tipos de toque" }
            ],
            priority: "alta"
        },
        cognitiva: {
            items: [
                { name: "Fichas de ejercicios mentales", quantity: "personalizadas", description: "Impresos según evaluación" },
                { name: "Videos de entrenamiento cognitivo", quantity: "acceso", description: "Plataforma de ejercicios interactivos" },
                { name: "Guía de estimulación cerebral", quantity: 1, description: "Protocolo personalizado" }
            ],
            priority: "media"
        },
        motriz: {
            items: [
                { name: "Conos de coordinación", quantity: 6, description: "Para ejercicios de motricidad gruesa" },
                { name: "Escalera de agilidad", quantity: 1, description: "Entrenamiento de velocidad y coordinación" },
                { name: "Pelotas de diferentes pesos", quantity: 4, description: "Progresión de dificultad" }
            ],
            priority: "alta"
        },
        auditiva: {
            items: [
                { name: "Audífonos de prueba", quantity: 1, description: "Para evaluación y ajuste" },
                { name: "Ejercicios auditivos", quantity: "personalizados", description: "Protocolos específicos" },
                { name: "Materiales informativos", quantity: 1, description: "Guía de habilitación auditiva" }
            ],
            priority: "media"
        }
    }
};

// Clase para gestionar el cuestionario
class Questionnaire {
    constructor() {
        this.currentQuestion = 0;
        this.answers = {};
        this.totalQuestions = questionnaireData.questions.length;
        this.containerEl = null;
    }

    initialize(containerId) {
        this.containerEl = document.getElementById(containerId);
        if (!this.containerEl) {
            console.error(`Contenedor ${containerId} no encontrado`);
            return;
        }
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
                <p class="question-description">Selecciona una o más opciones según corresponda</p>
                
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
                    <button class="btn btn-secondary" id="prevBtn" style="display: ${this.currentQuestion === 0 ? 'none' : 'block'}">
                        <i class="fas fa-arrow-left"></i> Anterior
                    </button>
                    <button class="btn btn-primary" id="nextBtn" disabled>
                        ${this.currentQuestion === this.totalQuestions - 1 ? 'Ver Resultados' : 'Siguiente'} <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        `;

        return html;
    }

    renderCheckboxOptions(question) {
        return question.options.map(option => `
            <label class="option-label checkbox-option">
                <input 
                    type="checkbox" 
                    name="${question.id}" 
                    value="${option.value}"
                    class="option-input"
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
                <input 
                    type="radio" 
                    name="${question.id}" 
                    value="${option.value}"
                    class="option-input"
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
        
        if (Array.isArray(answer)) {
            return answer.includes(optionValue);
        }
        return answer === optionValue;
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
            if (!this.answers[questionId]) {
                this.answers[questionId] = [];
            }
            if (input.checked) {
                this.answers[questionId].push(input.value);
            } else {
                this.answers[questionId] = this.answers[questionId].filter(v => v !== input.value);
            }
        } else {
            this.answers[questionId] = input.value;
        }

        // Habilitar botón siguiente si hay selección
        const nextBtn = this.containerEl.querySelector('#nextBtn');
        const hasAnswer = this.answers[questionId] && 
            (Array.isArray(this.answers[questionId]) ? this.answers[questionId].length > 0 : true);
        nextBtn.disabled = !hasAnswer;
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
        const kit = this.generateKit();
        const resultsHTML = this.getResultsHTML(kit);
        this.containerEl.innerHTML = resultsHTML;
        this.attachResultsEventListeners();
    }

    generateKit() {
        const selectedRehabTypes = this.answers[1] || [];
        const kit = {
            components: [],
            recommendations: [],
            summary: ""
        };

        // Agregar componentes según tipo de rehabilitación
        selectedRehabTypes.forEach(type => {
            if (questionnaireData.kitComponents[type]) {
                kit.components.push({
                    type: type,
                    items: questionnaireData.kitComponents[type].items,
                    priority: questionnaireData.kitComponents[type].priority
                });
            }
        });

        // Generar recomendaciones personalizadas
        kit.recommendations = this.generateRecommendations();
        kit.summary = this.generateSummary(selectedRehabTypes);

        return kit;
    }

    generateRecommendations() {
        const recommendations = [];
        const symptom = this.answers[3]?.[0];
        const intensity = this.answers[7];

        if (symptom === "debilidad_muscular") {
            recommendations.push("🏋️ Realizar ejercicios de resistencia progresiva con las bandas elásticas");
            recommendations.push("⏱️ Aumentar gradualmente la intensidad de los ejercicios");
        }

        if (symptom === "falta_coordinacion") {
            recommendations.push("🎯 Practicar ejercicios de coordinación mano-ojo");
            recommendations.push("⚖️ Trabajar equilibrio diariamente");
        }

        if (intensity === "no_realiza") {
            recommendations.push("📅 Comenzar con 2-3 sesiones por semana de 20-30 minutos");
            recommendations.push("📈 Aumentar gradualmente la frecuencia según progreso");
        } else if (intensity === "1_2_veces") {
            recommendations.push("📅 Incrementar a 3-4 sesiones por semana para mejor progreso");
        }

        recommendations.push("🧑‍⚕️ Consultar con un terapeuta para ajustar el programa");
        recommendations.push("📊 Registrar el progreso semanalmente");

        return recommendations.length > 0 ? recommendations : [
            "📅 Mantener una rutina regular de ejercicios",
            "🧑‍⚕️ Seguir las indicaciones de tu terapeuta",
            "📊 Monitorear el progreso constantemente"
        ];
    }

    generateSummary(types) {
        const typeLabels = {
            fisica: "Rehabilitación Física",
            sensorial: "Estimulación Sensorial",
            cognitiva: "Rehabilitación Cognitiva",
            motriz: "Habilitación Motriz",
            auditiva: "Habilitación Auditiva"
        };

        const labels = types.map(t => typeLabels[t] || t).join(", ");
        return `Tu kit personalizado incluye elementos para: ${labels}`;
    }

    getResultsHTML(kit) {
        let html = `
            <div class="results-container animate__animated animate__fadeIn">
                <div class="results-header">
                    <h2 class="results-title">¡Tu Kit Personalizado Está Listo!</h2>
                    <p class="results-subtitle">${kit.summary}</p>
                </div>

                <div class="results-content">
        `;

        // Componentes del kit
        html += `
            <div class="kit-components-section">
                <h3 class="section-title">📦 Componentes de tu Kit</h3>
                <div class="components-grid">
        `;

        kit.components.forEach(component => {
            html += `
                <div class="component-card">
                    <h4 class="component-title">${component.type.replace(/_/g, ' ').toUpperCase()}</h4>
                    <div class="component-items">
            `;

            component.items.forEach(item => {
                html += `
                    <div class="item">
                        <div class="item-name">✓ ${item.name}</div>
                        <div class="item-desc">${item.description}</div>
                    </div>
                `;
            });

            html += `
                    </div>
                </div>
            `;
        });

        html += `
                </div>
            </div>

            <div class="recommendations-section">
                <h3 class="section-title">💡 Recomendaciones Personalizadas</h3>
                <div class="recommendations-list">
        `;

        kit.recommendations.forEach(rec => {
            html += `<div class="recommendation-item">${rec}</div>`;
        });

        html += `
                </div>
            </div>

            <div class="price-section">
                <h3 class="section-title">💰 Precio y Próximos Pasos</h3>
                <div class="price-card">
                    <p class="price-text">Tu kit personalizado cuesta: <strong>$800 MXN</strong></p>
                    <p class="price-desc">Incluye todos los componentes recomendados + videos guiados + ejercicios impresos personalizados</p>
                    <div class="price-buttons">
                        <button class="btn btn-primary" id="purchaseBtn">
                            <i class="fas fa-shopping-cart"></i> Comprar Ahora
                        </button>
                        <button class="btn btn-secondary" id="restartBtn">
                            <i class="fas fa-redo"></i> Hacer otro cuestionario
                        </button>
                    </div>
                </div>
            </div>

            <div class="share-section">
                <h3 class="section-title">📱 Comparte tu Resultado</h3>
                <div class="share-buttons">
                    <button class="share-btn facebook" onclick="window.open('https://facebook.com/share.php?u=' + window.location.href)">
                        <i class="fab fa-facebook-f"></i> Facebook
                    </button>
                    <button class="share-btn whatsapp" onclick="window.open('https://wa.me/?text=' + window.location.href)">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </button>
                    <button class="share-btn email" onclick="window.open('mailto:?body=' + window.location.href)">
                        <i class="fas fa-envelope"></i> Email
                    </button>
                </div>
            </div>
        </div>
            </div>
        `;

        return html;
    }

    attachResultsEventListeners() {
        const purchaseBtn = document.getElementById('purchaseBtn');
        const restartBtn = document.getElementById('restartBtn');

        if (purchaseBtn) {
            purchaseBtn.addEventListener('click', () => {
                alert('¡Gracias por tu compra! Te contactaremos pronto para confirmar tu pedido.');
                // Aquí iría la integración con un sistema de pago
            });
        }

        if (restartBtn) {
            restartBtn.addEventListener('click', () => {
                this.restart();
            });
        }
    }

    restart() {
        this.currentQuestion = 0;
        this.answers = {};
        this.render();
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    const cuestionario = new Questionnaire();
    cuestionario.initialize('cuestionario-container');
    
    // Guardar referencia global para acceso desde HTML
    window.cuestionario = cuestionario;
});
